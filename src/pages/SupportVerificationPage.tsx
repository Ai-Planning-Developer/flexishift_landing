import { useEffect, useState } from 'react';
import type { CSSProperties, FormEvent } from 'react';
import {
  listVerificationQueue,
  postVerificationAction,
  type VerificationBooking,
  type VerificationEscalation,
} from '../lib/verificationBooking';

const SUPPORT_KEY = 'fs_support_code';

function wait(ms: number) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

export default function SupportVerificationPage() {
  const [code, setCode] = useState(() => sessionStorage.getItem(SUPPORT_KEY) || '');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState('');
  const [bookings, setBookings] = useState<VerificationBooking[]>([]);
  const [escalations, setEscalations] = useState<VerificationEscalation[]>([]);
  const [loading, setLoading] = useState(false);
  const [agent, setAgent] = useState('support');
  const [escalateFor, setEscalateFor] = useState<VerificationBooking | null>(null);
  const [reason, setReason] = useState('');
  const [notes, setNotes] = useState('');
  const [priority, setPriority] = useState('NORMAL');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function load(supportCode: string) {
    setLoading(true);
    setError('');
    try {
      const result = await listVerificationQueue(supportCode);
      if (result.status !== 'ok') {
        setUnlocked(false);
        setError(result.message || 'Access denied.');
        return;
      }
      sessionStorage.setItem(SUPPORT_KEY, supportCode);
      setUnlocked(true);
      setBookings(result.bookings || []);
      setEscalations(result.escalations || []);
    } catch {
      setUnlocked(false);
      setError('Could not reach the verification backend.');
    } finally {
      setLoading(false);
    }
  }

  async function mutate(payload: Record<string, unknown>) {
    setError('');
    try {
      await postVerificationAction({ supportCode: code, createdBy: agent, ...payload });
      await wait(900);
      await load(code);
    } catch {
      setError('Could not save. Try again.');
    }
  }

  function onUnlock(e: FormEvent) {
    e.preventDefault();
    void load(code.trim());
  }

  const openEscalations = escalations.filter(
    (row) => row.status === 'OPEN' || row.status === 'MORE_INFO_REQUESTED',
  );

  return (
    <div style={{ paddingTop: 88, minHeight: '100vh', background: 'var(--pale)' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px 48px' }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--teal)' }}>
          Support
        </div>
        <h1 style={{ color: 'var(--navy)', fontSize: 28, margin: '6px 0 8px' }}>Video verification</h1>
        <p style={{ color: 'var(--muted)', marginBottom: 20, maxWidth: 640 }}>
          Drivers book on Google Calendar Appointment Scheduling. Meet links come from Calendar.
          Record Verified / Failed / Escalate here after the call.
        </p>

        {!unlocked ? (
          <form
            onSubmit={onUnlock}
            style={{ background: '#fff', border: '1px solid #E5ECF5', borderRadius: 12, padding: 20, maxWidth: 420 }}
          >
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 8 }}>
              Support access code
            </label>
            <input
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #E5ECF5', marginBottom: 12 }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{ background: 'var(--teal)', color: '#fff', border: 'none', borderRadius: 10, padding: '10px 16px', fontWeight: 700, cursor: 'pointer' }}
            >
              {loading ? 'Checking…' : 'Open queue'}
            </button>
            {error ? <p style={{ color: '#b91c1c', fontSize: 13, marginTop: 10 }}>{error}</p> : null}
          </form>
        ) : (
          <>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16, alignItems: 'center' }}>
              <label style={{ fontSize: 13, fontWeight: 600 }}>
                Agent
                <input
                  value={agent}
                  onChange={(e) => setAgent(e.target.value)}
                  style={{ marginLeft: 8, padding: '8px 10px', borderRadius: 8, border: '1px solid #E5ECF5' }}
                />
              </label>
              <button
                type="button"
                onClick={() => void mutate({ action: 'syncCalendar' })}
                style={{ background: '#fff', border: '1px solid #E5ECF5', borderRadius: 10, padding: '8px 14px', fontWeight: 700, cursor: 'pointer' }}
              >
                Sync Google Calendar
              </button>
              <button
                type="button"
                onClick={() => void load(code)}
                style={{ background: '#fff', border: '1px solid #E5ECF5', borderRadius: 10, padding: '8px 14px', fontWeight: 700, cursor: 'pointer' }}
              >
                Refresh
              </button>
            </div>
            {error ? <p style={{ color: '#b91c1c', fontSize: 13, marginBottom: 12 }}>{error}</p> : null}

            <h2 style={{ fontSize: 18, color: 'var(--navy)', margin: '18px 0 10px' }}>Bookings</h2>
            <div style={{ display: 'grid', gap: 12 }}>
              {bookings.length === 0 && (
                <div style={{ background: '#fff', border: '1px solid #E5ECF5', borderRadius: 12, padding: 16, color: 'var(--muted)' }}>
                  No Calendar appointments synced yet. Run setup in Apps Script, then Sync Google Calendar.
                </div>
              )}
              {bookings.map((booking) => (
                <div key={booking.bookingId} style={{ background: '#fff', border: '1px solid #E5ECF5', borderRadius: 12, padding: 16 }}>
                  <div style={{ fontWeight: 800, color: 'var(--navy)' }}>{booking.name || booking.email}</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4 }}>
                    {booking.email} · {booking.status}
                    {booking.startAt ? ` · ${new Date(booking.startAt).toLocaleString()}` : ''}
                  </div>
                  {booking.meetUrl ? (
                    <a href={booking.meetUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--teal)', fontWeight: 700, fontSize: 13 }}>
                      Open Meet
                    </a>
                  ) : (
                    <div style={{ fontSize: 13, color: 'var(--muted)' }}>Meet link not on the Calendar event yet</div>
                  )}
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
                    <button type="button" onClick={() => void mutate({ action: 'setResult', bookingId: booking.bookingId, result: 'VERIFIED' })} style={actionBtn('#059669')}>
                      Verified
                    </button>
                    <button type="button" onClick={() => void mutate({ action: 'setResult', bookingId: booking.bookingId, result: 'FAILED' })} style={actionBtn('#b91c1c')}>
                      Failed
                    </button>
                    <button type="button" onClick={() => setEscalateFor(booking)} style={actionBtn('#b45309')}>
                      Escalate
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {escalateFor && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  void mutate({
                    action: 'escalate',
                    bookingId: escalateFor.bookingId,
                    driverId: escalateFor.driverId,
                    reason,
                    notes,
                    priority,
                  }).then(() => {
                    setEscalateFor(null);
                    setReason('');
                    setNotes('');
                  });
                }}
                style={{ marginTop: 20, background: '#fff', border: '1px solid #E5ECF5', borderRadius: 12, padding: 16 }}
              >
                <h3 style={{ margin: '0 0 10px', color: 'var(--navy)' }}>Escalate {escalateFor.email}</h3>
                <input
                  required
                  placeholder="Reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #E5ECF5', marginBottom: 8 }}
                />
                <textarea
                  required
                  placeholder="Support-agent notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={4}
                  style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #E5ECF5', marginBottom: 8 }}
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  style={{ padding: 10, borderRadius: 8, border: '1px solid #E5ECF5', marginBottom: 8, marginRight: 8 }}
                >
                  <option value="LOW">Low</option>
                  <option value="NORMAL">Normal</option>
                  <option value="HIGH">High</option>
                </select>
                <button type="submit" style={actionBtn('#b45309')}>Store escalation</button>
                <button type="button" onClick={() => setEscalateFor(null)} style={{ ...actionBtn('#6B7280'), marginLeft: 8 }}>
                  Cancel
                </button>
              </form>
            )}

            <h2 style={{ fontSize: 18, color: 'var(--navy)', margin: '28px 0 10px' }}>Senior review</h2>
            <div style={{ display: 'grid', gap: 12 }}>
              {openEscalations.length === 0 && (
                <div style={{ background: '#fff', border: '1px solid #E5ECF5', borderRadius: 12, padding: 16, color: 'var(--muted)' }}>
                  No open escalations.
                </div>
              )}
              {openEscalations.map((row) => (
                <div key={row.escalationId} style={{ background: '#fff', border: '1px solid #E5ECF5', borderRadius: 12, padding: 16 }}>
                  <div style={{ fontWeight: 800, color: 'var(--navy)' }}>Escalated · {row.priority}</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)', margin: '6px 0' }}>
                    {row.driverId} · booking {row.verificationBookingId} · {row.createdBy} · {row.createdAt}
                  </div>
                  <div style={{ fontSize: 14 }}><strong>Reason:</strong> {row.reason}</div>
                  <div style={{ fontSize: 14, marginTop: 4 }}><strong>Notes:</strong> {row.notes}</div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
                    <button type="button" onClick={() => void mutate({ action: 'seniorReview', escalationId: row.escalationId, decision: 'APPROVE' })} style={actionBtn('#059669')}>
                      Approve / Verified
                    </button>
                    <button type="button" onClick={() => void mutate({ action: 'seniorReview', escalationId: row.escalationId, decision: 'REJECT' })} style={actionBtn('#b91c1c')}>
                      Reject / Failed
                    </button>
                    <button type="button" onClick={() => void mutate({ action: 'seniorReview', escalationId: row.escalationId, decision: 'REQUEST_MORE_INFORMATION' })} style={actionBtn('#1A6DAA')}>
                      Request more information
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function actionBtn(bg: string): CSSProperties {
  return {
    background: bg,
    color: '#fff',
    border: 'none',
    borderRadius: 10,
    padding: '8px 12px',
    fontWeight: 700,
    cursor: 'pointer',
    fontFamily: 'inherit',
  };
}
