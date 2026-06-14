// ROPA content — exact match to FlexiShift_ROPA.docx
// Uses same TC styles for consistent design

import { tcStyles } from './tcContent';
export { tcStyles as ropaStyles };

export const ropaHTML = `
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
