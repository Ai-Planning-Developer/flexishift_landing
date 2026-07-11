// ROPA content — exact match to FlexiShift_ROPA.docx
// Uses same TC styles for consistent design

import { tcStyles } from './tcContent';
export { tcStyles as ropaStyles };

export const ropaEnHTML = `
<div class="page">

  <div class="doc-header">
    <div class="doc-header-inner">
      <div class="doc-badge">Data Protection</div>
      <h1>Record of Processing Activities (ROPA)</h1>
      <div class="doc-meta">
        <span class="doc-meta-item">Version 1.0</span>
        <span class="doc-meta-item">Document date: 2 June 2026</span>
        <span class="doc-meta-item">UK GDPR Article 30</span>
        <span class="doc-meta-item">EU GDPR Article 30</span>

      </div>
      <div class="doc-notice">This Record of Processing Activities (ROPA) documents all personal data processing activities carried out by AI Planning Ltd ("AI Planning") as data controller, operating the FlexiShift platform. This document must be reviewed and updated at minimum annually and whenever a new processing activity is introduced, an existing activity materially changes, or a new sub-processor is engaged.</div>
    </div>
  </div>

  <!-- Controller Details -->
  <div class="tc-section">
    <span class="section-num">Controller Details</span>
    <h2>Data Controller Information</h2>
    <table style="width:100%;border-collapse:collapse;font-size:0.875rem;margin-top:1rem">
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;width:220px;background:#F5F8FC">Organisation</td><td style="padding:0.6rem 0.75rem">AI Planning Ltd</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Trading name</td><td style="padding:0.6rem 0.75rem">FlexiShift</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Registered address</td><td style="padding:0.6rem 0.75rem">England and Wales, United Kingdom</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Data protection contact</td><td style="padding:0.6rem 0.75rem">privacy@flexishift.com</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">UK GDPR registration</td><td style="padding:0.6rem 0.75rem">ICO — registration required before go-live</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Jurisdictions</td><td style="padding:0.6rem 0.75rem">United Kingdom, Sweden (EU GDPR via IMY), Norway (PDPA / Datatilsynet)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Document owner</td><td style="padding:0.6rem 0.75rem">Data Protection Lead — AI Planning Ltd</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Last reviewed</td><td style="padding:0.6rem 0.75rem">2 June 2026</td></tr>
        <tr><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Next review due</td><td style="padding:0.6rem 0.75rem">Annually or on material change</td></tr>
      </tbody>
    </table>
  </div>

  <!-- Processing Activity Index -->
  <div class="tc-section">
    <span class="section-num">Overview</span>
    <h2>Processing Activity Index</h2>
    <div style="overflow-x:auto;margin-top:1rem">
      <table style="width:100%;border-collapse:collapse;font-size:0.8125rem">
        <thead>
          <tr style="background:#0F3460;color:white">
            <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Ref</th>
            <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Activity</th>
            <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Purpose</th>
            <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Legal Basis</th>
            <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Risk</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-01</td><td style="padding:0.6rem 0.75rem">Driver registration &amp; onboarding</td><td style="padding:0.6rem 0.75rem">Account creation &amp; KYC</td><td style="padding:0.6rem 0.75rem">Contract + Legal obligation</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">MED</span></td></tr>
          <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-02</td><td style="padding:0.6rem 0.75rem">Haulier registration &amp; onboarding</td><td style="padding:0.6rem 0.75rem">Account creation &amp; verification</td><td style="padding:0.6rem 0.75rem">Contract</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">LOW</span></td></tr>
          <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-03</td><td style="padding:0.6rem 0.75rem">Job matching (automated)</td><td style="padding:0.6rem 0.75rem">Connecting drivers with hauliers</td><td style="padding:0.6rem 0.75rem">Contract + Legitimate interests</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">MED</span></td></tr>
          <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-04</td><td style="padding:0.6rem 0.75rem">Real-time GPS location tracking</td><td style="padding:0.6rem 0.75rem">Active job monitoring</td><td style="padding:0.6rem 0.75rem">Contract</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">HIGH</span></td></tr>
          <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-05</td><td style="padding:0.6rem 0.75rem">Payment processing &amp; escrow</td><td style="padding:0.6rem 0.75rem">Secure payment handling</td><td style="padding:0.6rem 0.75rem">Contract + Legal obligation</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">HIGH</span></td></tr>
          <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-06</td><td style="padding:0.6rem 0.75rem">Driver KYC &amp; identity verification</td><td style="padding:0.6rem 0.75rem">AML / right to work compliance</td><td style="padding:0.6rem 0.75rem">Legal obligation</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">HIGH</span></td></tr>
          <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-07</td><td style="padding:0.6rem 0.75rem">Ratings &amp; reviews</td><td style="padding:0.6rem 0.75rem">Platform quality &amp; safety</td><td style="padding:0.6rem 0.75rem">Legitimate interests</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">LOW</span></td></tr>
          <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-08</td><td style="padding:0.6rem 0.75rem">Incident &amp; dispute records</td><td style="padding:0.6rem 0.75rem">Dispute resolution &amp; safety</td><td style="padding:0.6rem 0.75rem">Legitimate interests</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">MED</span></td></tr>
          <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-09</td><td style="padding:0.6rem 0.75rem">Tax reporting &amp; financial records</td><td style="padding:0.6rem 0.75rem">Legal &amp; regulatory compliance</td><td style="padding:0.6rem 0.75rem">Legal obligation</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">MED</span></td></tr>
          <tr style="background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-10</td><td style="padding:0.6rem 0.75rem">Marketing &amp; notifications</td><td style="padding:0.6rem 0.75rem">Platform communications</td><td style="padding:0.6rem 0.75rem">Consent / Legitimate interests</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">LOW</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- P-01 -->
  <div class="tc-section" id="p01">
    <span class="section-num">P-01</span>
    <h2>Driver Registration &amp; Onboarding</h2>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem;margin-top:0.75rem">
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;width:200px;background:#F5F8FC">Activity</td><td style="padding:0.6rem 0.75rem">Driver registration and onboarding</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Controller</td><td style="padding:0.6rem 0.75rem">AI Planning Ltd</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Purpose &amp; Legal Basis</td><td style="padding:0.6rem 0.75rem">Create and manage driver accounts. Enable drivers to use the platform.<br/><strong>Legal basis:</strong> Performance of contract (Art 6(1)(b))</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Data Subjects</td><td style="padding:0.6rem 0.75rem">Drivers</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Data Categories</td><td style="padding:0.6rem 0.75rem">Full name · Email address · Phone number · Date of birth · Profile photo · Driving licence number &amp; category · Vehicle registration &amp; type · Device &amp; IP data</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Recipients</td><td style="padding:0.6rem 0.75rem">Supabase (database) · Stripe (account setup) · Google Maps (address validation)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Retention</td><td style="padding:0.6rem 0.75rem">Duration of account + 2 years post-closure</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Int'l Transfers</td><td style="padding:0.6rem 0.75rem">Supabase: EU region · Stripe: US — SCCs + UK IDTA · Google: US — SCCs</td></tr>
        <tr><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Risk</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600">MED</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <!-- P-02 -->
  <div class="tc-section" id="p02">
    <span class="section-num">P-02</span>
    <h2>Haulier Registration &amp; Onboarding</h2>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem;margin-top:0.75rem">
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;width:200px;background:#F5F8FC">Activity</td><td style="padding:0.6rem 0.75rem">Haulier business registration and account setup</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Purpose &amp; Legal Basis</td><td style="padding:0.6rem 0.75rem">Enable hauliers to post jobs and manage drivers on the platform.<br/><strong>Legal basis:</strong> Performance of contract (Art 6(1)(b))</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Data Subjects</td><td style="padding:0.6rem 0.75rem">Haulier account holders · Business contacts</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Data Categories</td><td style="padding:0.6rem 0.75rem">Company name &amp; reg. number · VAT number · Contact name &amp; email · Phone number · Business address · IP &amp; device data</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Recipients</td><td style="padding:0.6rem 0.75rem">Supabase (database) · Stripe (billing setup) · Postmark (confirmation emails)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Retention</td><td style="padding:0.6rem 0.75rem">Duration of account + 7 years (tax records)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Int'l Transfers</td><td style="padding:0.6rem 0.75rem">Supabase: EU region · Stripe: US — SCCs · Postmark: US — SCCs</td></tr>
        <tr><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Risk</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600">LOW</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <!-- P-03 -->
  <div class="tc-section" id="p03">
    <span class="section-num">P-03</span>
    <h2>Automated Job Matching</h2>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem;margin-top:0.75rem">
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;width:200px;background:#F5F8FC">Activity</td><td style="padding:0.6rem 0.75rem">Automated matching of drivers to jobs using smart matching algorithm</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Purpose &amp; Legal Basis</td><td style="padding:0.6rem 0.75rem">Connect drivers with suitable haulier jobs. Art 22 applies — human review available on request.<br/><strong>Legal basis:</strong> Contract (Art 6(1)(b)) + Legitimate interests (Art 6(1)(f))</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Data Subjects</td><td style="padding:0.6rem 0.75rem">Drivers · Hauliers</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Data Categories</td><td style="padding:0.6rem 0.75rem">Driver location · Availability schedule · Vehicle type · Driver rating · Job requirements · Historical acceptance rate</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Recipients</td><td style="padding:0.6rem 0.75rem">Supabase · Twilio (job alert SMS/push) · Postmark (email alerts)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Retention</td><td style="padding:0.6rem 0.75rem">Match logs: 12 months · Job records: 7 years</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Int'l Transfers</td><td style="padding:0.6rem 0.75rem">Supabase: EU region · Twilio: US — SCCs · Postmark: US — SCCs</td></tr>
        <tr><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Risk</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600">MED</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <!-- P-04 -->
  <div class="tc-section" id="p04">
    <span class="section-num">P-04</span>
    <h2>Real-Time GPS Location Tracking</h2>
    <div style="background:#FEF3C7;border:1px solid #FCD34D;border-radius:8px;padding:0.875rem 1rem;margin-bottom:1rem;font-size:0.875rem;color:#92400E"><strong>⚠ DPIA Recommended</strong> — Location data is sensitive in practice. A Data Protection Impact Assessment is recommended before go-live.</div>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem;margin-top:0.75rem">
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;width:200px;background:#F5F8FC">Activity</td><td style="padding:0.6rem 0.75rem">Real-time GPS tracking of drivers during active job assignments</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Purpose &amp; Legal Basis</td><td style="padding:0.6rem 0.75rem">Verify pickup/delivery location, provide ETA to haulier, support dispute resolution. Active jobs only. Driver notified in app.<br/><strong>Legal basis:</strong> Contract (Art 6(1)(b))</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Data Subjects</td><td style="padding:0.6rem 0.75rem">Drivers (active jobs only)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Data Categories</td><td style="padding:0.6rem 0.75rem">GPS coordinates (real-time) · Route taken · Timestamps at key locations · Speed data</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Recipients</td><td style="padding:0.6rem 0.75rem">Assigned haulier (live view) · Supabase (log storage) · Google Maps (route display)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Retention</td><td style="padding:0.6rem 0.75rem">Route logs: 12 months then deleted · Disputed job logs: 3 years</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Int'l Transfers</td><td style="padding:0.6rem 0.75rem">Supabase: EU region · Google Maps: US — SCCs + UK IDTA</td></tr>
        <tr><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Risk</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600">HIGH</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <!-- P-05 -->
  <div class="tc-section" id="p05">
    <span class="section-num">P-05</span>
    <h2>Payment Processing &amp; Escrow</h2>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem;margin-top:0.75rem">
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;width:200px;background:#F5F8FC">Activity</td><td style="padding:0.6rem 0.75rem">Payment charge from haulier, escrow hold, and payout release to driver via Stripe Connect (88/12 split)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Purpose &amp; Legal Basis</td><td style="padding:0.6rem 0.75rem">Collect platform fees, hold funds in escrow, release to drivers on delivery confirmation, retain 12% platform fee.<br/><strong>Legal basis:</strong> Contract (Art 6(1)(b)) + Legal obligation for records (Art 6(1)(c))</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Data Subjects</td><td style="padding:0.6rem 0.75rem">Drivers (payees) · Hauliers (payers)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Data Categories</td><td style="padding:0.6rem 0.75rem">Bank account details (tokenised) · Card data (held by Stripe) · Transaction amounts · Payout history · Escrow status</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Recipients</td><td style="padding:0.6rem 0.75rem">Stripe Connect · Supabase (transaction records) · HMRC / Skatteverket / Skatteetaten</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Retention</td><td style="padding:0.6rem 0.75rem">Transaction records: 7 years (UK, SE, NO tax law)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Int'l Transfers</td><td style="padding:0.6rem 0.75rem">Stripe: US — SCCs + UK IDTA + DPF (automatic in Stripe ToS DPA)</td></tr>
        <tr><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Risk</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600">HIGH</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <!-- P-06 -->
  <div class="tc-section" id="p06">
    <span class="section-num">P-06</span>
    <h2>Driver KYC &amp; Identity Verification</h2>
    <div style="background:#FEF3C7;border:1px solid #FCD34D;border-radius:8px;padding:0.875rem 1rem;margin-bottom:1rem;font-size:0.875rem;color:#92400E"><strong>⚠ DPIA Required</strong> — Includes biometric-adjacent data. A Data Protection Impact Assessment is required before processing this data.</div>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem;margin-top:0.75rem">
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;width:200px;background:#F5F8FC">Activity</td><td style="padding:0.6rem 0.75rem">Identity and document verification of drivers prior to first payout</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Purpose &amp; Legal Basis</td><td style="padding:0.6rem 0.75rem">Verify driver identity to comply with AML obligations and enable Stripe Connect payouts.<br/><strong>Legal basis:</strong> Legal obligation (Art 6(1)(c)) + Contract (Art 6(1)(b))</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Data Subjects</td><td style="padding:0.6rem 0.75rem">Drivers</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Data Categories</td><td style="padding:0.6rem 0.75rem">Government-issued ID · Driving licence scan · Facial image / selfie · Date of birth · National ID number · Swedish F-skatt status (SE drivers)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Recipients</td><td style="padding:0.6rem 0.75rem">Stripe Identity · Supabase (verification status log) · Skatteverket (F-skatt check, SE only)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Retention</td><td style="padding:0.6rem 0.75rem">Verification records: 5 years post end of relationship (AML) · Document images: deleted after verification per Stripe policy</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Int'l Transfers</td><td style="padding:0.6rem 0.75rem">Stripe Identity: US — SCCs + UK IDTA (covered under Stripe ToS DPA)</td></tr>
        <tr><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Risk</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600">HIGH</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <!-- P-07 to P-10 -->
  <div class="tc-section" id="p07">
    <span class="section-num">P-07 to P-10</span>
    <h2>Ratings, Incidents, Tax Reporting &amp; Communications</h2>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem;margin-top:0.75rem">
      <thead>
        <tr style="background:#0F3460;color:white">
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Ref</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Activity</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Legal Basis</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Retention</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Risk</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-07</td><td style="padding:0.6rem 0.75rem">Ratings &amp; reviews between drivers and hauliers</td><td style="padding:0.6rem 0.75rem">Legitimate interests (Art 6(1)(f))</td><td style="padding:0.6rem 0.75rem">Duration of account + 2 years</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">LOW</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-08</td><td style="padding:0.6rem 0.75rem">Incident reports and dispute records</td><td style="padding:0.6rem 0.75rem">Legitimate interests (Art 6(1)(f))</td><td style="padding:0.6rem 0.75rem">3 years from incident date</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">MED</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-09</td><td style="padding:0.6rem 0.75rem">Tax reporting and financial record-keeping</td><td style="padding:0.6rem 0.75rem">Legal obligation (Art 6(1)(c))</td><td style="padding:0.6rem 0.75rem">7 years from end of tax year</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">MED</span></td></tr>
        <tr style="background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-10</td><td style="padding:0.6rem 0.75rem">Marketing, job alerts, and platform notifications</td><td style="padding:0.6rem 0.75rem">Contract (Art 6(1)(b)) + Consent (Art 6(1)(a))</td><td style="padding:0.6rem 0.75rem">Service comms: account duration · Marketing: until withdrawn + 2 years</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">LOW</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <!-- Sub-Processor Register -->
  <div class="tc-section" id="subprocessors">
    <span class="section-num">Sub-Processor Register</span>
    <h2>Sub-Processor Register</h2>
    <p style="font-size:0.875rem;color:#6B7280;margin-bottom:1rem;font-style:italic">All third parties acting as data processors on behalf of AI Planning Ltd. DPA status must be verified and documented before each processor handles live data.</p>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem">
      <thead>
        <tr style="background:#0F3460;color:white">
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Processor</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Role</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Location</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Transfer Mechanism</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">DPA Status</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600">Stripe Inc</td><td style="padding:0.6rem 0.75rem">Payment, KYC, payouts</td><td style="padding:0.6rem 0.75rem">USA</td><td style="padding:0.6rem 0.75rem">SCCs + UK IDTA + DPF</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">✅ Auto in ToS</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600">Supabase Inc</td><td style="padding:0.6rem 0.75rem">All platform data</td><td style="padding:0.6rem 0.75rem">EU region</td><td style="padding:0.6rem 0.75rem">EU region — no transfer</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Sign separately</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600">Twilio Inc</td><td style="padding:0.6rem 0.75rem">SMS &amp; push notifications</td><td style="padding:0.6rem 0.75rem">USA</td><td style="padding:0.6rem 0.75rem">SCCs + UK IDTA</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Accept in console</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600">Postmark</td><td style="padding:0.6rem 0.75rem">Transactional email</td><td style="padding:0.6rem 0.75rem">USA</td><td style="padding:0.6rem 0.75rem">SCCs + UK IDTA</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Accept in account</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600">Google Maps Platform</td><td style="padding:0.6rem 0.75rem">Location &amp; routing</td><td style="padding:0.6rem 0.75rem">USA</td><td style="padding:0.6rem 0.75rem">SCCs + UK IDTA (auto)</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">✅ Auto in API terms</span></td></tr>
        <tr style="background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600">Stripe Identity</td><td style="padding:0.6rem 0.75rem">Biometric KYC</td><td style="padding:0.6rem 0.75rem">USA</td><td style="padding:0.6rem 0.75rem">SCCs + UK IDTA</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">✅ Covered by Stripe DPA</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <!-- DPA Action Summary -->
  <div class="tc-section" id="dpa">
    <span class="section-num">Action Required</span>
    <h2>DPA Action Summary</h2>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem;margin-top:0.75rem">
      <thead>
        <tr style="background:#0F3460;color:white">
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Processor</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Action Required</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Where</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600">Stripe</td><td style="padding:0.6rem 0.75rem">None — automatic</td><td style="padding:0.6rem 0.75rem">stripe.com/legal/dpa</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">✅ Complete on sign-up</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600">Supabase</td><td style="padding:0.6rem 0.75rem">Download DPA, complete &amp; sign</td><td style="padding:0.6rem 0.75rem">supabase.com/legal/dpa</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Action required</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600">Twilio</td><td style="padding:0.6rem 0.75rem">Accept Data Protection Addendum in console</td><td style="padding:0.6rem 0.75rem">console.twilio.com → Legal</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Action required</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600">Postmark</td><td style="padding:0.6rem 0.75rem">Accept DPA in account settings</td><td style="padding:0.6rem 0.75rem">account.postmarkapp.com</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Action required</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600">Google Maps</td><td style="padding:0.6rem 0.75rem">Verify Data Processing Amendment accepted</td><td style="padding:0.6rem 0.75rem">console.cloud.google.com</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Verify before go-live</span></td></tr>
        <tr style="background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600">Stripe Identity</td><td style="padding:0.6rem 0.75rem">None if using Stripe Identity. Separate DPA if using Onfido directly.</td><td style="padding:0.6rem 0.75rem">Confirm with developer</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Confirm integration</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <div class="signing-block">
    <p>© 2026 AI Planning Ltd · FlexiShift · ROPA v1.0 · 2 June 2026 · Confidential</p>
    <p class="footer-detail">Maintained in accordance with UK GDPR Article 30 and EU GDPR Article 30 · privacy@flexishift.com</p>
  </div>

</div>
`;

export const ropaNoHTML = `
<div class="page">

  <div class="doc-header">
    <div class="doc-header-inner">
      <div class="doc-badge">Databeskyttelse</div>
      <h1>Protokoll over behandlingsaktiviteter (ROPA)</h1>
      <div class="doc-meta">
        <span class="doc-meta-item">Versjon 1.0</span>
        <span class="doc-meta-item">Dokumentdato: 2 juni 2026</span>
        <span class="doc-meta-item">UK GDPR artikkel 30</span>
        <span class="doc-meta-item">EU GDPR artikkel 30</span>
      </div>
      <div class="doc-notice">Denne protokollen over behandlingsaktiviteter (ROPA) dokumenterer alle behandlingsaktiviteter for personopplysninger som utføres av AI Planning Ltd («AI Planning») som behandlingsansvarlig, som driver FlexiShift-plattformen. Dokumentet skal gjennomgås og oppdateres minst årlig, og når en ny behandlingsaktivitet innføres, en eksister eksisterende aktivitet endres vesentlig, eller en ny underleverandør engasjeres.</div>
    </div>
  </div>

  <div class="tc-section">
    <span class="section-num">Behandlingsansvarlig</span>
    <h2>Informasjon om behandlingsansvarlig</h2>
    <table style="width:100%;border-collapse:collapse;font-size:0.875rem;margin-top:1rem">
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;width:220px;background:#F5F8FC">Organisasjon</td><td style="padding:0.6rem 0.75rem">AI Planning Ltd</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Handelsnavn</td><td style="padding:0.6rem 0.75rem">FlexiShift</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Registrert adresse</td><td style="padding:0.6rem 0.75rem">England and Wales, United Kingdom</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Kontakt for personvern</td><td style="padding:0.6rem 0.75rem">privacy@flexishift.com</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">UK GDPR-registrering</td><td style="padding:0.6rem 0.75rem">ICO — registrering kreves før lansering</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Jurisdiksjoner</td><td style="padding:0.6rem 0.75rem">Storbritannia, Sverige (EU GDPR via IMY), Norge (PDPA / Datatilsynet)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Dokumenteier</td><td style="padding:0.6rem 0.75rem">Data Protection Lead — AI Planning Ltd</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Sist gjennomgått</td><td style="padding:0.6rem 0.75rem">2 juni 2026</td></tr>
        <tr><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Neste gjennomgang</td><td style="padding:0.6rem 0.75rem">Årlig eller ved vesentlig endring</td></tr>
      </tbody>
    </table>
  </div>

  <div class="tc-section">
    <span class="section-num">Oversikt</span>
    <h2>Indeks over behandlingsaktiviteter</h2>
    <div style="overflow-x:auto;margin-top:1rem">
      <table style="width:100%;border-collapse:collapse;font-size:0.8125rem">
        <thead>
          <tr style="background:#0F3460;color:white">
            <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Ref</th>
            <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Aktivitet</th>
            <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Formål</th>
            <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Rettslig grunnlag</th>
            <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Risiko</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-01</td><td style="padding:0.6rem 0.75rem">Sjåførregistrering og onboarding</td><td style="padding:0.6rem 0.75rem">Kontoopprettelse og KYC</td><td style="padding:0.6rem 0.75rem">Avtale + Rettslig forpliktelse</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">MED</span></td></tr>
          <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-02</td><td style="padding:0.6rem 0.75rem">Transportørregistrering og onboarding</td><td style="padding:0.6rem 0.75rem">Kontoopprettelse og verifisering</td><td style="padding:0.6rem 0.75rem">Avtale</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">LOW</span></td></tr>
          <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-03</td><td style="padding:0.6rem 0.75rem">Oppdragsmatching (automatisert)</td><td style="padding:0.6rem 0.75rem">Koble sjåfører med transportører</td><td style="padding:0.6rem 0.75rem">Avtale + Berettiget interesse</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">MED</span></td></tr>
          <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-04</td><td style="padding:0.6rem 0.75rem">GPS-sporing i sanntid</td><td style="padding:0.6rem 0.75rem">Overvåking av aktive oppdrag</td><td style="padding:0.6rem 0.75rem">Avtale</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">HIGH</span></td></tr>
          <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-05</td><td style="padding:0.6rem 0.75rem">Betalingsbehandling og escrow</td><td style="padding:0.6rem 0.75rem">Sikker betalingsbehandling</td><td style="padding:0.6rem 0.75rem">Avtale + Rettslig forpliktelse</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">HIGH</span></td></tr>
          <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-06</td><td style="padding:0.6rem 0.75rem">Sjåfør-KYC og identitetsverifisering</td><td style="padding:0.6rem 0.75rem">AML / rett til å arbeide</td><td style="padding:0.6rem 0.75rem">Rettslig forpliktelse</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">HIGH</span></td></tr>
          <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-07</td><td style="padding:0.6rem 0.75rem">Vurderinger og anmeldelser</td><td style="padding:0.6rem 0.75rem">Plattformkvalitet og sikkerhet</td><td style="padding:0.6rem 0.75rem">Berettiget interesse</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">LOW</span></td></tr>
          <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-08</td><td style="padding:0.6rem 0.75rem">Hendelses- og tvisteregistre</td><td style="padding:0.6rem 0.75rem">Tvisteløsning og sikkerhet</td><td style="padding:0.6rem 0.75rem">Berettiget interesse</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">MED</span></td></tr>
          <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-09</td><td style="padding:0.6rem 0.75rem">Skatterapportering og regnskapsdata</td><td style="padding:0.6rem 0.75rem">Juridisk og regulatorisk etterlevelse</td><td style="padding:0.6rem 0.75rem">Rettslig forpliktelse</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">MED</span></td></tr>
          <tr style="background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-10</td><td style="padding:0.6rem 0.75rem">Markedsføring og varsler</td><td style="padding:0.6rem 0.75rem">Plattformkommunikasjon</td><td style="padding:0.6rem 0.75rem">Samtykke / Berettiget interesse</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">LOW</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="tc-section" id="p01">
    <span class="section-num">P-01</span>
    <h2>Sjåførregistrering og onboarding</h2>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem;margin-top:0.75rem">
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;width:200px;background:#F5F8FC">Aktivitet</td><td style="padding:0.6rem 0.75rem">Sjåførregistrering og onboarding</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Behandlingsansvarlig</td><td style="padding:0.6rem 0.75rem">AI Planning Ltd</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Formål og rettslig grunnlag</td><td style="padding:0.6rem 0.75rem">Opprette og administrere sjåførkontoer. Gjøre det mulig for sjåfører å bruke plattformen.<br/><strong>Rettslig grunnlag:</strong> Oppfyllelse av avtale (art. 6(1)(b))</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Registrerte</td><td style="padding:0.6rem 0.75rem">Sjåfører</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Datakategorier</td><td style="padding:0.6rem 0.75rem">Fullt navn · E-postadresse · Telefonnummer · Fødselsdato · Profilbilde · Førerkortnummer og kategori · Kjøretøyregistrering og type · Enhets- og IP-data</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Mottakere</td><td style="padding:0.6rem 0.75rem">Supabase (database) · Stripe (kontooppsett) · Google Maps (adressevalidering)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Lagringstid</td><td style="padding:0.6rem 0.75rem">Kontovarighet + 2 år etter avslutning</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Internasjonale overføringer</td><td style="padding:0.6rem 0.75rem">Supabase: EU-region · Stripe: USA — SCC-er + UK IDTA · Google: USA — SCC-er</td></tr>
        <tr><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Risiko</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600">MED</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <div class="tc-section" id="p02">
    <span class="section-num">P-02</span>
    <h2>Transportørregistrering og onboarding</h2>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem;margin-top:0.75rem">
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;width:200px;background:#F5F8FC">Aktivitet</td><td style="padding:0.6rem 0.75rem">Transportørens virksomhetsregistrering og kontooppsett</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Formål og rettslig grunnlag</td><td style="padding:0.6rem 0.75rem">Gjøre det mulig for transportører å legge ut oppdrag og administrere sjåfører på plattformen.<br/><strong>Rettslig grunnlag:</strong> Oppfyllelse av avtale (art. 6(1)(b))</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Registrerte</td><td style="padding:0.6rem 0.75rem">Transportørkontoinnehavere · Forretningskontakter</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Datakategorier</td><td style="padding:0.6rem 0.75rem">Firmanavn og org.nr. · MVA-nummer · Kontaktnavn og e-post · Telefonnummer · Forretningsadresse · IP- og enhetsdata</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Mottakere</td><td style="padding:0.6rem 0.75rem">Supabase (database) · Stripe (faktureringsoppsett) · Postmark (bekreftelses-e-post)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Lagringstid</td><td style="padding:0.6rem 0.75rem">Kontovarighet + 7 år (skatteregistre)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Internasjonale overføringer</td><td style="padding:0.6rem 0.75rem">Supabase: EU-region · Stripe: USA — SCC-er · Postmark: USA — SCC-er</td></tr>
        <tr><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Risiko</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600">LOW</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <div class="tc-section" id="p03">
    <span class="section-num">P-03</span>
    <h2>Automatisert oppdragsmatching</h2>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem;margin-top:0.75rem">
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;width:200px;background:#F5F8FC">Aktivitet</td><td style="padding:0.6rem 0.75rem">Automatisert matching av sjåfører til oppdrag ved hjelp av smart matchingsalgoritme</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Formål og rettslig grunnlag</td><td style="padding:0.6rem 0.75rem">Koble sjåfører med egnede transportøroppdrag. Art. 22 gjelder — menneskelig gjennomgang tilgjengelig på forespørsel.<br/><strong>Rettslig grunnlag:</strong> Avtale (art. 6(1)(b)) + Berettiget interesse (art. 6(1)(f))</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Registrerte</td><td style="padding:0.6rem 0.75rem">Sjåfører · Transportører</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Datakategorier</td><td style="padding:0.6rem 0.75rem">Sjåførens lokasjon · Tilgjengelighetsplan · Kjøretøytype · Sjåførvurdering · Oppdragskrav · Historisk akseptrate</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Mottakere</td><td style="padding:0.6rem 0.75rem">Supabase · Twilio (oppdragsvarsel SMS/push) · Postmark (e-postvarsler)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Lagringstid</td><td style="padding:0.6rem 0.75rem">Matchlogger: 12 måneder · Oppdragsregistre: 7 år</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Internasjonale overføringer</td><td style="padding:0.6rem 0.75rem">Supabase: EU-region · Twilio: USA — SCC-er · Postmark: USA — SCC-er</td></tr>
        <tr><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Risiko</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600">MED</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <div class="tc-section" id="p04">
    <span class="section-num">P-04</span>
    <h2>GPS-sporing i sanntid</h2>
    <div style="background:#FEF3C7;border:1px solid #FCD34D;border-radius:8px;padding:0.875rem 1rem;margin-bottom:1rem;font-size:0.875rem;color:#92400E"><strong>⚠ DPIA anbefales</strong> — Lokasjonsdata er i praksis sensitive. En vurdering av personvernkonsekvenser anbefales før lansering.</div>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem;margin-top:0.75rem">
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;width:200px;background:#F5F8FC">Aktivitet</td><td style="padding:0.6rem 0.75rem">GPS-sporing i sanntid av sjåfører under aktive oppdrag</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Formål og rettslig grunnlag</td><td style="padding:0.6rem 0.75rem">Verifisere hente-/leveringssted, gi ETA til transportør, støtte tvisteløsning. Kun aktive oppdrag. Sjåfør varsles i appen.<br/><strong>Rettslig grunnlag:</strong> Avtale (art. 6(1)(b))</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Registrerte</td><td style="padding:0.6rem 0.75rem">Sjåfører (kun aktive oppdrag)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Datakategorier</td><td style="padding:0.6rem 0.75rem">GPS-koordinater (sanntid) · Rute · Tidsstempler på nøkkelsteder · Hastighetsdata</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Mottakere</td><td style="padding:0.6rem 0.75rem">Tildelt transportør (live-visning) · Supabase (logglagring) · Google Maps (rutevisning)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Lagringstid</td><td style="padding:0.6rem 0.75rem">Rutelogg: 12 måneder deretter slettet · Omstridte oppdragslogger: 3 år</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Internasjonale overføringer</td><td style="padding:0.6rem 0.75rem">Supabase: EU-region · Google Maps: USA — SCC-er + UK IDTA</td></tr>
        <tr><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Risiko</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600">HIGH</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <div class="tc-section" id="p05">
    <span class="section-num">P-05</span>
    <h2>Betalingsbehandling og escrow</h2>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem;margin-top:0.75rem">
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;width:200px;background:#F5F8FC">Aktivitet</td><td style="padding:0.6rem 0.75rem">Betalingsbelastning fra transportør, escrow-hold og utbetaling til sjåfør via Stripe Connect (88/12-fordeling)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Formål og rettslig grunnlag</td><td style="padding:0.6rem 0.75rem">Innhente plattformgebyrer, holde midler i escrow, frigjøre til sjåfører ved leveringsbekreftelse, beholde 12 % plattformgebyr.<br/><strong>Rettslig grunnlag:</strong> Avtale (art. 6(1)(b)) + Rettslig forpliktelse for registre (art. 6(1)(c))</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Registrerte</td><td style="padding:0.6rem 0.75rem">Sjåfører (mottakere) · Transportører (betalere)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Datakategorier</td><td style="padding:0.6rem 0.75rem">Bankkontodetaljer (tokenisert) · Kortdata (holdt av Stripe) · Transaksjonsbeløp · Utbetalingshistorikk · Escrow-status</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Mottakere</td><td style="padding:0.6rem 0.75rem">Stripe Connect · Supabase (transaksjonsregistre) · HMRC / Skatteverket / Skatteetaten</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Lagringstid</td><td style="padding:0.6rem 0.75rem">Transaksjonsregistre: 7 år (skattelov UK, SE, NO)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Internasjonale overføringer</td><td style="padding:0.6rem 0.75rem">Stripe: USA — SCC-er + UK IDTA + DPF (automatisk i Stripe ToS DPA)</td></tr>
        <tr><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Risiko</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600">HIGH</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <div class="tc-section" id="p06">
    <span class="section-num">P-06</span>
    <h2>Sjåfør-KYC og identitetsverifisering</h2>
    <div style="background:#FEF3C7;border:1px solid #FCD34D;border-radius:8px;padding:0.875rem 1rem;margin-bottom:1rem;font-size:0.875rem;color:#92400E"><strong>⚠ DPIA påkrevd</strong> — Inkluderer biometri-nærliggende data. En vurdering av personvernkonsekvenser er påkrevd før behandling av disse dataene.</div>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem;margin-top:0.75rem">
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;width:200px;background:#F5F8FC">Aktivitet</td><td style="padding:0.6rem 0.75rem">Identitets- og dokumentverifisering av sjåfører før første utbetaling</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Formål og rettslig grunnlag</td><td style="padding:0.6rem 0.75rem">Verifisere sjåførens identitet for å overholde AML-forpliktelser og muliggjøre Stripe Connect-utbetalinger.<br/><strong>Rettslig grunnlag:</strong> Rettslig forpliktelse (art. 6(1)(c)) + Avtale (art. 6(1)(b))</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Registrerte</td><td style="padding:0.6rem 0.75rem">Sjåfører</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Datakategorier</td><td style="padding:0.6rem 0.75rem">Offentlig utstedt ID · Skanning av førerkort · Ansiktsbilde / selfie · Fødselsdato · Nasjonalt ID-nummer · Svensk F-skatt-status (SE-sjåfører)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Mottakere</td><td style="padding:0.6rem 0.75rem">Stripe Identity · Supabase (verifiseringsstatuslogg) · Skatteverket (F-skatt-sjekk, kun SE)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Lagringstid</td><td style="padding:0.6rem 0.75rem">Verifiseringsregistre: 5 år etter avsluttet forhold (AML) · Dokumentbilder: slettes etter verifisering iht. Stripe-policy</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Internasjonale overføringer</td><td style="padding:0.6rem 0.75rem">Stripe Identity: USA — SCC-er + UK IDTA (dekket under Stripe ToS DPA)</td></tr>
        <tr><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Risiko</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600">HIGH</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <div class="tc-section" id="p07">
    <span class="section-num">P-07 til P-10</span>
    <h2>Vurderinger, hendelser, skatterapportering og kommunikasjon</h2>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem;margin-top:0.75rem">
      <thead>
        <tr style="background:#0F3460;color:white">
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Ref</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Aktivitet</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Rettslig grunnlag</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Lagringstid</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Risiko</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-07</td><td style="padding:0.6rem 0.75rem">Vurderinger og anmeldelser mellom sjåfører og transportører</td><td style="padding:0.6rem 0.75rem">Berettiget interesse (art. 6(1)(f))</td><td style="padding:0.6rem 0.75rem">Kontovarighet + 2 år</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">LOW</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-08</td><td style="padding:0.6rem 0.75rem">Hendelsesrapporter og tvisteregistre</td><td style="padding:0.6rem 0.75rem">Berettiget interesse (art. 6(1)(f))</td><td style="padding:0.6rem 0.75rem">3 år fra hendelsesdato</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">MED</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-09</td><td style="padding:0.6rem 0.75rem">Skatterapportering og regnskapsføring</td><td style="padding:0.6rem 0.75rem">Rettslig forpliktelse (art. 6(1)(c))</td><td style="padding:0.6rem 0.75rem">7 år fra utgangen av skatteåret</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">MED</span></td></tr>
        <tr style="background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-10</td><td style="padding:0.6rem 0.75rem">Markedsføring, oppdragsvarsler og plattformvarsler</td><td style="padding:0.6rem 0.75rem">Avtale (art. 6(1)(b)) + Samtykke (art. 6(1)(a))</td><td style="padding:0.6rem 0.75rem">Tjenestekommunikasjon: kontovarighet · Markedsføring: til tilbaketrekking + 2 år</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">LOW</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <div class="tc-section" id="subprocessors">
    <span class="section-num">Underleverandørregister</span>
    <h2>Underleverandørregister</h2>
    <p style="font-size:0.875rem;color:#6B7280;margin-bottom:1rem;font-style:italic">Alle tredjeparter som opptrer som databehandlere på vegne av AI Planning Ltd. DPA-status må verifiseres og dokumenteres før hver behandler håndterer livedata.</p>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem">
      <thead>
        <tr style="background:#0F3460;color:white">
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Behandler</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Rolle</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Lokasjon</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Overføringsmekanisme</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">DPA-status</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600">Stripe Inc</td><td style="padding:0.6rem 0.75rem">Betaling, KYC, utbetalinger</td><td style="padding:0.6rem 0.75rem">USA</td><td style="padding:0.6rem 0.75rem">SCC-er + UK IDTA + DPF</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">✅ Auto i ToS</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600">Supabase Inc</td><td style="padding:0.6rem 0.75rem">Alle plattformdata</td><td style="padding:0.6rem 0.75rem">EU-region</td><td style="padding:0.6rem 0.75rem">EU-region — ingen overføring</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Signer separat</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600">Twilio Inc</td><td style="padding:0.6rem 0.75rem">SMS og push-varsler</td><td style="padding:0.6rem 0.75rem">USA</td><td style="padding:0.6rem 0.75rem">SCC-er + UK IDTA</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Godta i konsoll</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600">Postmark</td><td style="padding:0.6rem 0.75rem">Transaksjonell e-post</td><td style="padding:0.6rem 0.75rem">USA</td><td style="padding:0.6rem 0.75rem">SCC-er + UK IDTA</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Godta i konto</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600">Google Maps Platform</td><td style="padding:0.6rem 0.75rem">Lokasjon og ruting</td><td style="padding:0.6rem 0.75rem">USA</td><td style="padding:0.6rem 0.75rem">SCC-er + UK IDTA (auto)</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">✅ Auto i API-vilkår</span></td></tr>
        <tr style="background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600">Stripe Identity</td><td style="padding:0.6rem 0.75rem">Biometrisk KYC</td><td style="padding:0.6rem 0.75rem">USA</td><td style="padding:0.6rem 0.75rem">SCC-er + UK IDTA</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">✅ Dekket av Stripe DPA</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <div class="tc-section" id="dpa">
    <span class="section-num">Handling kreves</span>
    <h2>DPA-handlingsoversikt</h2>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem;margin-top:0.75rem">
      <thead>
        <tr style="background:#0F3460;color:white">
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Behandler</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Handling som kreves</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Hvor</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600">Stripe</td><td style="padding:0.6rem 0.75rem">Ingen — automatisk</td><td style="padding:0.6rem 0.75rem">stripe.com/legal/dpa</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">✅ Fullført ved registrering</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600">Supabase</td><td style="padding:0.6rem 0.75rem">Last ned DPA, fyll ut og signer</td><td style="padding:0.6rem 0.75rem">supabase.com/legal/dpa</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Handling kreves</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600">Twilio</td><td style="padding:0.6rem 0.75rem">Godta Data Protection Addendum i konsollen</td><td style="padding:0.6rem 0.75rem">console.twilio.com → Legal</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Handling kreves</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600">Postmark</td><td style="padding:0.6rem 0.75rem">Godta DPA i kontoinnstillinger</td><td style="padding:0.6rem 0.75rem">account.postmarkapp.com</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Handling kreves</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600">Google Maps</td><td style="padding:0.6rem 0.75rem">Verifiser at Data Processing Amendment er godtatt</td><td style="padding:0.6rem 0.75rem">console.cloud.google.com</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Verifiser før lansering</span></td></tr>
        <tr style="background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600">Stripe Identity</td><td style="padding:0.6rem 0.75rem">Ingen hvis Stripe Identity brukes. Separat DPA hvis Onfido brukes direkte.</td><td style="padding:0.6rem 0.75rem">Bekreft med utvikler</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Bekreft integrasjon</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <div class="signing-block">
    <p>© 2026 AI Planning Ltd · FlexiShift · ROPA v1.0 · 2 juni 2026 · Konfidensielt</p>
    <p class="footer-detail">Vedlikeholdt i henhold til UK GDPR artikkel 30 og EU GDPR artikkel 30 · privacy@flexishift.com</p>
  </div>

</div>
`;

export const ropaSvHTML = `
<div class="page">

  <div class="doc-header">
    <div class="doc-header-inner">
      <div class="doc-badge">Dataskydd</div>
      <h1>Register över behandlingar (ROPA)</h1>
      <div class="doc-meta">
        <span class="doc-meta-item">Version 1.0</span>
        <span class="doc-meta-item">Dokumentdatum: 2 juni 2026</span>
        <span class="doc-meta-item">UK GDPR artikel 30</span>
        <span class="doc-meta-item">EU GDPR artikel 30</span>
      </div>
      <div class="doc-notice">Detta register över behandlingar (ROPA) dokumenterar alla behandlingar av personuppgifter som utförs av AI Planning Ltd ("AI Planning") som personuppgiftsansvarig, som driver FlexiShift-plattformen. Dokumentet ska granskas och uppdateras minst årligen, och när en ny behandlingsaktivitet införs, en befintlig aktivitet väsentligt ändras, eller en ny underbiträdesleverantör anlitas.</div>
    </div>
  </div>

  <div class="tc-section">
    <span class="section-num">Personuppgiftsansvarig</span>
    <h2>Information om personuppgiftsansvarig</h2>
    <table style="width:100%;border-collapse:collapse;font-size:0.875rem;margin-top:1rem">
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;width:220px;background:#F5F8FC">Organisation</td><td style="padding:0.6rem 0.75rem">AI Planning Ltd</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Handelsnamn</td><td style="padding:0.6rem 0.75rem">FlexiShift</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Registrerad adress</td><td style="padding:0.6rem 0.75rem">England and Wales, United Kingdom</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Kontakt för dataskydd</td><td style="padding:0.6rem 0.75rem">privacy@flexishift.com</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">UK GDPR-registrering</td><td style="padding:0.6rem 0.75rem">ICO — registrering krävs före lansering</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Jurisdiktioner</td><td style="padding:0.6rem 0.75rem">Storbritannien, Sverige (EU GDPR via IMY), Norge (PDPA / Datatilsynet)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Dokumentägare</td><td style="padding:0.6rem 0.75rem">Data Protection Lead — AI Planning Ltd</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Senast granskad</td><td style="padding:0.6rem 0.75rem">2 juni 2026</td></tr>
        <tr><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Nästa granskning</td><td style="padding:0.6rem 0.75rem">Årligen eller vid väsentlig förändring</td></tr>
      </tbody>
    </table>
  </div>

  <div class="tc-section">
    <span class="section-num">Översikt</span>
    <h2>Index över behandlingsaktiviteter</h2>
    <div style="overflow-x:auto;margin-top:1rem">
      <table style="width:100%;border-collapse:collapse;font-size:0.8125rem">
        <thead>
          <tr style="background:#0F3460;color:white">
            <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Ref</th>
            <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Aktivitet</th>
            <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Ändamål</th>
            <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Rättslig grund</th>
            <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Risk</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-01</td><td style="padding:0.6rem 0.75rem">Förarregistrering och onboarding</td><td style="padding:0.6rem 0.75rem">Kontoskapande och KYC</td><td style="padding:0.6rem 0.75rem">Avtal + Rättslig förpliktelse</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">MED</span></td></tr>
          <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-02</td><td style="padding:0.6rem 0.75rem">Åkeriregistrering och onboarding</td><td style="padding:0.6rem 0.75rem">Kontoskapande och verifiering</td><td style="padding:0.6rem 0.75rem">Avtal</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">LOW</span></td></tr>
          <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-03</td><td style="padding:0.6rem 0.75rem">Uppdragsmatchning (automatiserad)</td><td style="padding:0.6rem 0.75rem">Koppla förare med åkerier</td><td style="padding:0.6rem 0.75rem">Avtal + Berättigat intresse</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">MED</span></td></tr>
          <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-04</td><td style="padding:0.6rem 0.75rem">GPS-spårning i realtid</td><td style="padding:0.6rem 0.75rem">Övervakning av aktiva uppdrag</td><td style="padding:0.6rem 0.75rem">Avtal</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">HIGH</span></td></tr>
          <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-05</td><td style="padding:0.6rem 0.75rem">Betalningshantering och escrow</td><td style="padding:0.6rem 0.75rem">Säker betalningshantering</td><td style="padding:0.6rem 0.75rem">Avtal + Rättslig förpliktelse</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">HIGH</span></td></tr>
          <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-06</td><td style="padding:0.6rem 0.75rem">Förar-KYC och identitetsverifiering</td><td style="padding:0.6rem 0.75rem">AML / rätt att arbeta</td><td style="padding:0.6rem 0.75rem">Rättslig förpliktelse</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">HIGH</span></td></tr>
          <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-07</td><td style="padding:0.6rem 0.75rem">Betyg och recensioner</td><td style="padding:0.6rem 0.75rem">Plattformskvalitet och säkerhet</td><td style="padding:0.6rem 0.75rem">Berättigat intresse</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">LOW</span></td></tr>
          <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-08</td><td style="padding:0.6rem 0.75rem">Incident- och tvisteregister</td><td style="padding:0.6rem 0.75rem">Tvistlösning och säkerhet</td><td style="padding:0.6rem 0.75rem">Berättigat intresse</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">MED</span></td></tr>
          <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-09</td><td style="padding:0.6rem 0.75rem">Skatterapportering och ekonomiregister</td><td style="padding:0.6rem 0.75rem">Juridisk och regulatorisk efterlevnad</td><td style="padding:0.6rem 0.75rem">Rättslig förpliktelse</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">MED</span></td></tr>
          <tr style="background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-10</td><td style="padding:0.6rem 0.75rem">Marknadsföring och aviseringar</td><td style="padding:0.6rem 0.75rem">Plattformskommunikation</td><td style="padding:0.6rem 0.75rem">Samtycke / Berättigat intresse</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">LOW</span></td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="tc-section" id="p01">
    <span class="section-num">P-01</span>
    <h2>Förarregistrering och onboarding</h2>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem;margin-top:0.75rem">
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;width:200px;background:#F5F8FC">Aktivitet</td><td style="padding:0.6rem 0.75rem">Förarregistrering och onboarding</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Personuppgiftsansvarig</td><td style="padding:0.6rem 0.75rem">AI Planning Ltd</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Ändamål och rättslig grund</td><td style="padding:0.6rem 0.75rem">Skapa och hantera förarkonton. Göra det möjligt för förare att använda plattformen.<br/><strong>Rättslig grund:</strong> Fullgörande av avtal (art. 6(1)(b))</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Registrerade</td><td style="padding:0.6rem 0.75rem">Förare</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Datakategorier</td><td style="padding:0.6rem 0.75rem">Fullständigt namn · E-postadress · Telefonnummer · Födelsedatum · Profilbild · Körkortsnummer och kategori · Fordonsregistrering och typ · Enhets- och IP-data</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Mottagare</td><td style="padding:0.6rem 0.75rem">Supabase (databas) · Stripe (kontoinställning) · Google Maps (adressvalidering)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Lagringstid</td><td style="padding:0.6rem 0.75rem">Kontots varaktighet + 2 år efter avslut</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Internationella överföringar</td><td style="padding:0.6rem 0.75rem">Supabase: EU-region · Stripe: USA — SCC:er + UK IDTA · Google: USA — SCC:er</td></tr>
        <tr><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Risk</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600">MED</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <div class="tc-section" id="p02">
    <span class="section-num">P-02</span>
    <h2>Åkeriregistrering och onboarding</h2>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem;margin-top:0.75rem">
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;width:200px;background:#F5F8FC">Aktivitet</td><td style="padding:0.6rem 0.75rem">Åkeriets företagsregistrering och kontoinställning</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Ändamål och rättslig grund</td><td style="padding:0.6rem 0.75rem">Göra det möjligt för åkerier att publicera uppdrag och hantera förare på plattformen.<br/><strong>Rättslig grund:</strong> Fullgörande av avtal (art. 6(1)(b))</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Registrerade</td><td style="padding:0.6rem 0.75rem">Åkerikontoinnehavare · Affärskontakter</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Datakategorier</td><td style="padding:0.6rem 0.75rem">Företagsnamn och org.nr · Momsnummer · Kontaktnamn och e-post · Telefonnummer · Företagsadress · IP- och enhetsdata</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Mottagare</td><td style="padding:0.6rem 0.75rem">Supabase (databas) · Stripe (faktureringsinställning) · Postmark (bekräftelsemejl)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Lagringstid</td><td style="padding:0.6rem 0.75rem">Kontots varaktighet + 7 år (skatteregister)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Internationella överföringar</td><td style="padding:0.6rem 0.75rem">Supabase: EU-region · Stripe: USA — SCC:er · Postmark: USA — SCC:er</td></tr>
        <tr><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Risk</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600">LOW</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <div class="tc-section" id="p03">
    <span class="section-num">P-03</span>
    <h2>Automatiserad uppdragsmatchning</h2>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem;margin-top:0.75rem">
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;width:200px;background:#F5F8FC">Aktivitet</td><td style="padding:0.6rem 0.75rem">Automatiserad matchning av förare till uppdrag med smart matchningsalgoritm</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Ändamål och rättslig grund</td><td style="padding:0.6rem 0.75rem">Koppla förare med lämpliga åkeriuppdrag. Art. 22 gäller — mänsklig granskning tillgänglig på begäran.<br/><strong>Rättslig grund:</strong> Avtal (art. 6(1)(b)) + Berättigat intresse (art. 6(1)(f))</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Registrerade</td><td style="padding:0.6rem 0.75rem">Förare · Åkerier</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Datakategorier</td><td style="padding:0.6rem 0.75rem">Förarens plats · Tillgänglighetsschema · Fordonstyp · Förarbetyg · Uppdragskrav · Historisk acceptansgrad</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Mottagare</td><td style="padding:0.6rem 0.75rem">Supabase · Twilio (uppdragsavisering SMS/push) · Postmark (e-postaviseringar)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Lagringstid</td><td style="padding:0.6rem 0.75rem">Matchloggar: 12 månader · Uppdragsregister: 7 år</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Internationella överföringar</td><td style="padding:0.6rem 0.75rem">Supabase: EU-region · Twilio: USA — SCC:er · Postmark: USA — SCC:er</td></tr>
        <tr><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Risk</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600">MED</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <div class="tc-section" id="p04">
    <span class="section-num">P-04</span>
    <h2>GPS-spårning i realtid</h2>
    <div style="background:#FEF3C7;border:1px solid #FCD34D;border-radius:8px;padding:0.875rem 1rem;margin-bottom:1rem;font-size:0.875rem;color:#92400E"><strong>⚠ DPIA rekommenderas</strong> — Platsdata är i praktiken känsliga. En konsekvensbedömning avseende dataskydd rekommenderas före lansering.</div>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem;margin-top:0.75rem">
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;width:200px;background:#F5F8FC">Aktivitet</td><td style="padding:0.6rem 0.75rem">GPS-spårning i realtid av förare under aktiva uppdrag</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Ändamål och rättslig grund</td><td style="padding:0.6rem 0.75rem">Verifiera upphämtnings-/leveransplats, ge ETA till åkeri, stödja tvistlösning. Endast aktiva uppdrag. Föraren meddelas i appen.<br/><strong>Rättslig grund:</strong> Avtal (art. 6(1)(b))</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Registrerade</td><td style="padding:0.6rem 0.75rem">Förare (endast aktiva uppdrag)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Datakategorier</td><td style="padding:0.6rem 0.75rem">GPS-koordinater (realtid) · Rutt · Tidsstämplar på nyckelplatser · Hastighetsdata</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Mottagare</td><td style="padding:0.6rem 0.75rem">Tilldelat åkeri (livevy) · Supabase (logglagring) · Google Maps (ruttvisning)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Lagringstid</td><td style="padding:0.6rem 0.75rem">Ruttloggar: 12 månader därefter raderade · Omstridda uppdragsloggar: 3 år</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Internationella överföringar</td><td style="padding:0.6rem 0.75rem">Supabase: EU-region · Google Maps: USA — SCC:er + UK IDTA</td></tr>
        <tr><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Risk</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600">HIGH</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <div class="tc-section" id="p05">
    <span class="section-num">P-05</span>
    <h2>Betalningshantering och escrow</h2>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem;margin-top:0.75rem">
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;width:200px;background:#F5F8FC">Aktivitet</td><td style="padding:0.6rem 0.75rem">Betalningsdebitering från åkeri, escrow-hållning och utbetalning till förare via Stripe Connect (88/12-fördelning)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Ändamål och rättslig grund</td><td style="padding:0.6rem 0.75rem">Ta ut plattformsavgifter, hålla medel i escrow, frigöra till förare vid leveransbekräftelse, behålla 12 % plattformsavgift.<br/><strong>Rättslig grund:</strong> Avtal (art. 6(1)(b)) + Rättslig förpliktelse för register (art. 6(1)(c))</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Registrerade</td><td style="padding:0.6rem 0.75rem">Förare (mottagare) · Åkerier (betalare)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Datakategorier</td><td style="padding:0.6rem 0.75rem">Bankkontouppgifter (tokeniserade) · Kortdata (hålls av Stripe) · Transaktionsbelopp · Utbetalningshistorik · Escrow-status</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Mottagare</td><td style="padding:0.6rem 0.75rem">Stripe Connect · Supabase (transaktionsregister) · HMRC / Skatteverket / Skatteetaten</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Lagringstid</td><td style="padding:0.6rem 0.75rem">Transaktionsregister: 7 år (skattelag UK, SE, NO)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Internationella överföringar</td><td style="padding:0.6rem 0.75rem">Stripe: USA — SCC:er + UK IDTA + DPF (automatiskt i Stripe ToS DPA)</td></tr>
        <tr><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Risk</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600">HIGH</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <div class="tc-section" id="p06">
    <span class="section-num">P-06</span>
    <h2>Förar-KYC och identitetsverifiering</h2>
    <div style="background:#FEF3C7;border:1px solid #FCD34D;border-radius:8px;padding:0.875rem 1rem;margin-bottom:1rem;font-size:0.875rem;color:#92400E"><strong>⚠ DPIA krävs</strong> — Inkluderar biometri-nära data. En konsekvensbedömning avseende dataskydd krävs innan dessa uppgifter behandlas.</div>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem;margin-top:0.75rem">
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;width:200px;background:#F5F8FC">Aktivitet</td><td style="padding:0.6rem 0.75rem">Identitets- och dokumentverifiering av förare före första utbetalning</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Ändamål och rättslig grund</td><td style="padding:0.6rem 0.75rem">Verifiera förarens identitet för att uppfylla AML-skyldigheter och möjliggöra Stripe Connect-utbetalningar.<br/><strong>Rättslig grund:</strong> Rättslig förpliktelse (art. 6(1)(c)) + Avtal (art. 6(1)(b))</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Registrerade</td><td style="padding:0.6rem 0.75rem">Förare</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Datakategorier</td><td style="padding:0.6rem 0.75rem">Myndighetsutfärdat ID · Skanning av körkort · Ansiktsbild / selfie · Födelsedatum · Nationellt ID-nummer · Svensk F-skatt-status (SE-förare)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Mottagare</td><td style="padding:0.6rem 0.75rem">Stripe Identity · Supabase (verifieringsstatuslogg) · Skatteverket (F-skatt-kontroll, endast SE)</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Lagringstid</td><td style="padding:0.6rem 0.75rem">Verifieringsregister: 5 år efter avslutat förhållande (AML) · Dokumentbilder: raderas efter verifiering enligt Stripe-policy</td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Internationella överföringar</td><td style="padding:0.6rem 0.75rem">Stripe Identity: USA — SCC:er + UK IDTA (täckt under Stripe ToS DPA)</td></tr>
        <tr><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Risk</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600">HIGH</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <div class="tc-section" id="p07">
    <span class="section-num">P-07 till P-10</span>
    <h2>Betyg, incidenter, skatterapportering och kommunikation</h2>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem;margin-top:0.75rem">
      <thead>
        <tr style="background:#0F3460;color:white">
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Ref</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Aktivitet</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Rättslig grund</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Lagringstid</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Risk</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-07</td><td style="padding:0.6rem 0.75rem">Betyg och recensioner mellan förare och åkerier</td><td style="padding:0.6rem 0.75rem">Berättigat intresse (art. 6(1)(f))</td><td style="padding:0.6rem 0.75rem">Kontots varaktighet + 2 år</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">LOW</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-08</td><td style="padding:0.6rem 0.75rem">Incidentrapporter och tvisteregister</td><td style="padding:0.6rem 0.75rem">Berättigat intresse (art. 6(1)(f))</td><td style="padding:0.6rem 0.75rem">3 år från incidentdatum</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">MED</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-09</td><td style="padding:0.6rem 0.75rem">Skatterapportering och ekonomisk dokumentation</td><td style="padding:0.6rem 0.75rem">Rättslig förpliktelse (art. 6(1)(c))</td><td style="padding:0.6rem 0.75rem">7 år från skatteårets slut</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">MED</span></td></tr>
        <tr style="background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460">P-10</td><td style="padding:0.6rem 0.75rem">Marknadsföring, uppdragsaviseringar och plattformsaviseringar</td><td style="padding:0.6rem 0.75rem">Avtal (art. 6(1)(b)) + Samtycke (art. 6(1)(a))</td><td style="padding:0.6rem 0.75rem">Tjänstekommunikation: kontots varaktighet · Marknadsföring: till återkallelse + 2 år</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">LOW</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <div class="tc-section" id="subprocessors">
    <span class="section-num">Underbiträdesregister</span>
    <h2>Underbiträdesregister</h2>
    <p style="font-size:0.875rem;color:#6B7280;margin-bottom:1rem;font-style:italic">Alla tredje parter som agerar som personuppgiftsbiträden för AI Planning Ltd. DPA-status måste verifieras och dokumenteras innan varje biträde hanterar livedata.</p>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem">
      <thead>
        <tr style="background:#0F3460;color:white">
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Biträde</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Roll</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Plats</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Överföringsmekanism</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">DPA-status</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600">Stripe Inc</td><td style="padding:0.6rem 0.75rem">Betalning, KYC, utbetalningar</td><td style="padding:0.6rem 0.75rem">USA</td><td style="padding:0.6rem 0.75rem">SCC:er + UK IDTA + DPF</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">✅ Auto i ToS</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600">Supabase Inc</td><td style="padding:0.6rem 0.75rem">All plattformsdata</td><td style="padding:0.6rem 0.75rem">EU-region</td><td style="padding:0.6rem 0.75rem">EU-region — ingen överföring</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Signera separat</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600">Twilio Inc</td><td style="padding:0.6rem 0.75rem">SMS och push-aviseringar</td><td style="padding:0.6rem 0.75rem">USA</td><td style="padding:0.6rem 0.75rem">SCC:er + UK IDTA</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Acceptera i konsol</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600">Postmark</td><td style="padding:0.6rem 0.75rem">Transaktionell e-post</td><td style="padding:0.6rem 0.75rem">USA</td><td style="padding:0.6rem 0.75rem">SCC:er + UK IDTA</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Acceptera i konto</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600">Google Maps Platform</td><td style="padding:0.6rem 0.75rem">Plats och routing</td><td style="padding:0.6rem 0.75rem">USA</td><td style="padding:0.6rem 0.75rem">SCC:er + UK IDTA (auto)</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">✅ Auto i API-villkor</span></td></tr>
        <tr style="background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600">Stripe Identity</td><td style="padding:0.6rem 0.75rem">Biometrisk KYC</td><td style="padding:0.6rem 0.75rem">USA</td><td style="padding:0.6rem 0.75rem">SCC:er + UK IDTA</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">✅ Täckt av Stripe DPA</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <div class="tc-section" id="dpa">
    <span class="section-num">Åtgärd krävs</span>
    <h2>DPA-åtgärdsöversikt</h2>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.8125rem;margin-top:0.75rem">
      <thead>
        <tr style="background:#0F3460;color:white">
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Biträde</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Åtgärd som krävs</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Var</th>
          <th style="padding:0.6rem 0.75rem;text-align:left;font-weight:600">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600">Stripe</td><td style="padding:0.6rem 0.75rem">Ingen — automatisk</td><td style="padding:0.6rem 0.75rem">stripe.com/legal/dpa</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">✅ Klar vid registrering</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600">Supabase</td><td style="padding:0.6rem 0.75rem">Ladda ner DPA, fyll i och signera</td><td style="padding:0.6rem 0.75rem">supabase.com/legal/dpa</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Åtgärd krävs</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600">Twilio</td><td style="padding:0.6rem 0.75rem">Acceptera Data Protection Addendum i konsolen</td><td style="padding:0.6rem 0.75rem">console.twilio.com → Legal</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Åtgärd krävs</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600">Postmark</td><td style="padding:0.6rem 0.75rem">Acceptera DPA i kontoinställningar</td><td style="padding:0.6rem 0.75rem">account.postmarkapp.com</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEE2E2;color:#991B1B;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Åtgärd krävs</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600">Google Maps</td><td style="padding:0.6rem 0.75rem">Verifiera att Data Processing Amendment är accepterat</td><td style="padding:0.6rem 0.75rem">console.cloud.google.com</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Verifiera före lansering</span></td></tr>
        <tr style="background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600">Stripe Identity</td><td style="padding:0.6rem 0.75rem">Ingen om Stripe Identity används. Separat DPA om Onfido används direkt.</td><td style="padding:0.6rem 0.75rem">Bekräfta med utvecklare</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Bekräfta integration</span></td></tr>
      </tbody>
    </table></div>
  </div>

  <div class="signing-block">
    <p>© 2026 AI Planning Ltd · FlexiShift · ROPA v1.0 · 2 juni 2026 · Konfidentiellt</p>
    <p class="footer-detail">Underhålls i enlighet med UK GDPR artikel 30 och EU GDPR artikel 30 · privacy@flexishift.com</p>
  </div>

</div>
`;

export const ropaHTMLByLang = {
  en: ropaEnHTML,
  no: ropaNoHTML,
  sv: ropaSvHTML,
} as const;

/** @deprecated Use ropaEnHTML / ropaHTMLByLang */
export const ropaHTML = ropaEnHTML;
