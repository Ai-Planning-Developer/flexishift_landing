// ROPA content - English only (internal confidential document)
export const ropaHTML = `
<div>
  <div style="margin-bottom:2rem;padding-bottom:1.5rem;border-bottom:2px solid #E8F1FB">
    <div style="font-size:0.75rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#00A896;margin-bottom:0.75rem">Data Protection</div>
    <h1 style="font-size:clamp(1.75rem,3vw,2.5rem);font-weight:800;color:#111827;letter-spacing:-0.03em;margin-bottom:1rem">Record of Processing Activities (ROPA)</h1>
    <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:1rem">
      <span style="font-size:0.8rem;font-weight:600;padding:3px 12px;background:#FEF3C7;border-radius:20px;color:#92400E">⚠ Confidential</span>
      <span style="font-size:0.8rem;font-weight:600;padding:3px 12px;background:#E8F1FB;border-radius:20px;color:#0F3460">Version 1.0</span>
      <span style="font-size:0.8rem;font-weight:600;padding:3px 12px;background:#E8F1FB;border-radius:20px;color:#0F3460">Document date: 2 June 2026</span>
      <span style="font-size:0.8rem;font-weight:600;padding:3px 12px;background:#E8F1FB;border-radius:20px;color:#0F3460">UK GDPR Art. 30 · EU GDPR Art. 30</span>
    </div>
    <p style="font-size:0.9375rem;color:#374151;line-height:1.75;max-width:720px">This Record of Processing Activities (ROPA) documents all personal data processing activities carried out by <strong>AI Planning Ltd</strong> as data controller, operating the FlexiShift platform. Maintained in accordance with Article 30 of the UK GDPR and EU GDPR as applicable to processing of data subjects in Sweden and Norway.</p>
  </div>

  <h2>Controller Details</h2>
  <table style="width:100%;border-collapse:collapse;margin-bottom:1.5rem;font-size:0.875rem">
    <tbody>
      <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;width:220px;background:#F5F8FC">Organisation</td><td style="padding:0.6rem 0.75rem">AI Planning Ltd</td></tr>
      <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Trading name</td><td style="padding:0.6rem 0.75rem">FlexiShift</td></tr>
      <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Registered address</td><td style="padding:0.6rem 0.75rem">England and Wales, United Kingdom</td></tr>
      <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Data protection contact</td><td style="padding:0.6rem 0.75rem">privacy@flexishift.com</td></tr>
      <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Jurisdictions</td><td style="padding:0.6rem 0.75rem">United Kingdom, Sweden (EU GDPR via IMY), Norway (PDPA / Datatilsynet)</td></tr>
      <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Last reviewed</td><td style="padding:0.6rem 0.75rem">2 June 2026</td></tr>
      <tr><td style="padding:0.6rem 0.75rem;font-weight:600;color:#0F3460;background:#F5F8FC">Next review due</td><td style="padding:0.6rem 0.75rem">Annually or on material change</td></tr>
    </tbody>
  </table>

  <h2>Processing Activity Index</h2>
  <div style="overflow-x:auto;margin-bottom:2rem">
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

  <h2>Processing Activity Details</h2>

  <h3>P-01 — Driver Registration &amp; Onboarding</h3>
  <ul>
    <li><strong>Purpose:</strong> Create and manage driver accounts. Enable drivers to use the platform.</li>
    <li><strong>Legal basis:</strong> Performance of contract (Art 6(1)(b))</li>
    <li><strong>Data categories:</strong> Full name, email, phone, date of birth, profile photo, driving licence, vehicle data, device &amp; IP data</li>
    <li><strong>Recipients:</strong> Supabase (database), Stripe (account setup), Google Maps (address validation)</li>
    <li><strong>Retention:</strong> Duration of account + 2 years post-closure</li>
    <li><strong>International transfers:</strong> Supabase: EU region; Stripe: US — SCCs + UK IDTA; Google: US — SCCs</li>
    <li><strong>Risk level:</strong> MED</li>
  </ul>

  <h3>P-02 — Haulier Registration &amp; Onboarding</h3>
  <ul>
    <li><strong>Purpose:</strong> Enable hauliers to post jobs and manage drivers on the platform.</li>
    <li><strong>Legal basis:</strong> Performance of contract (Art 6(1)(b))</li>
    <li><strong>Data categories:</strong> Company name &amp; reg. number, VAT number, contact name &amp; email, phone, business address, IP &amp; device data</li>
    <li><strong>Recipients:</strong> Supabase (database), Stripe (billing setup), Postmark (confirmation emails)</li>
    <li><strong>Retention:</strong> Duration of account + 7 years (tax records)</li>
    <li><strong>International transfers:</strong> Supabase: EU region; Stripe: US — SCCs; Postmark: US — SCCs</li>
    <li><strong>Risk level:</strong> LOW</li>
  </ul>

  <h3>P-03 — Automated Job Matching</h3>
  <ul>
    <li><strong>Purpose:</strong> Connect drivers with suitable haulier jobs based on location, vehicle, availability, and rating. Art 22 applies — human review available on request.</li>
    <li><strong>Legal basis:</strong> Contract (Art 6(1)(b)) + Legitimate interests (Art 6(1)(f))</li>
    <li><strong>Data categories:</strong> Driver location, availability schedule, vehicle type, driver rating, job requirements, historical acceptance rate</li>
    <li><strong>Recipients:</strong> Supabase, Twilio (job alert SMS/push), Postmark (email alerts)</li>
    <li><strong>Retention:</strong> Match logs: 12 months; Job records: 7 years</li>
    <li><strong>Risk level:</strong> MED</li>
  </ul>

  <h3>P-04 — Real-Time GPS Location Tracking</h3>
  <ul>
    <li><strong>Purpose:</strong> Verify pickup/delivery location, provide ETA to haulier, support dispute resolution. Active jobs only. Driver notified in app.</li>
    <li><strong>Legal basis:</strong> Contract (Art 6(1)(b)). Note: location data is sensitive in practice — DPIA recommended.</li>
    <li><strong>Data categories:</strong> GPS coordinates (real-time), route taken, timestamps at key locations, speed data</li>
    <li><strong>Recipients:</strong> Assigned haulier (live view), Supabase (log storage), Google Maps (route display)</li>
    <li><strong>Retention:</strong> Route logs: 12 months then deleted; Disputed job logs: 3 years</li>
    <li><strong>Risk level:</strong> HIGH — DPIA recommended</li>
  </ul>

  <h3>P-05 — Payment Processing &amp; Escrow</h3>
  <ul>
    <li><strong>Purpose:</strong> Collect platform fees, hold funds in escrow, release to drivers on delivery confirmation, retain 12% platform fee.</li>
    <li><strong>Legal basis:</strong> Contract (Art 6(1)(b)) + Legal obligation for records (Art 6(1)(c))</li>
    <li><strong>Data categories:</strong> Bank account details (tokenised), card data (held by Stripe), transaction amounts, payout history, escrow status</li>
    <li><strong>Recipients:</strong> Stripe Connect, Supabase, HMRC / Skatteverket / Skatteetaten</li>
    <li><strong>Retention:</strong> Transaction records: 7 years (UK, SE, NO tax law)</li>
    <li><strong>Risk level:</strong> HIGH</li>
  </ul>

  <h3>P-06 — Driver KYC &amp; Identity Verification</h3>
  <ul>
    <li><strong>Purpose:</strong> Verify driver identity to comply with AML obligations and enable Stripe Connect payouts.</li>
    <li><strong>Legal basis:</strong> Legal obligation (Art 6(1)(c)) + Contract (Art 6(1)(b)). Note: Includes biometric-adjacent data — DPIA required.</li>
    <li><strong>Data categories:</strong> Government-issued ID, driving licence scan, facial image / selfie, date of birth, national ID number, Swedish F-skatt status</li>
    <li><strong>Recipients:</strong> Stripe Identity (biometric verification), Supabase (verification status log), Skatteverket (F-skatt check, SE only)</li>
    <li><strong>Retention:</strong> Verification records: 5 years post end of relationship (AML). Document images: deleted after verification per Stripe policy.</li>
    <li><strong>Risk level:</strong> HIGH — DPIA required</li>
  </ul>

  <h3>P-07 to P-10 — Ratings, Incidents, Tax Reporting &amp; Communications</h3>
  <ul>
    <li><strong>P-07 Ratings &amp; reviews:</strong> Star ratings and written review text. Retention: Duration of account + 2 years. Risk: LOW.</li>
    <li><strong>P-08 Incident reports:</strong> Incident descriptions, photos, job references, communications. Retention: 3 years. Risk: MED.</li>
    <li><strong>P-09 Tax reporting:</strong> Name, address, tax ID, total earnings, VAT amounts, bank details. Shared with HMRC, Skatteverket, Skatteetaten. Retention: 7 years. Risk: MED.</li>
    <li><strong>P-10 Marketing &amp; notifications:</strong> Name, email, phone, notification preferences, marketing consent. Twilio, Postmark. Service comms: duration of account. Marketing consent: until withdrawn + 2 years. Risk: LOW.</li>
  </ul>

  <h2>Sub-Processor Register</h2>
  <div style="overflow-x:auto;margin-bottom:2rem">
    <table style="width:100%;border-collapse:collapse;font-size:0.8125rem">
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
        <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600">Supabase Inc</td><td style="padding:0.6rem 0.75rem">All platform data</td><td style="padding:0.6rem 0.75rem">EU region</td><td style="padding:0.6rem 0.75rem">EU region — no transfer</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Must sign separately</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600">Twilio Inc</td><td style="padding:0.6rem 0.75rem">SMS &amp; push notifications</td><td style="padding:0.6rem 0.75rem">USA</td><td style="padding:0.6rem 0.75rem">SCCs + UK IDTA</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Accept in console</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB;background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600">Postmark</td><td style="padding:0.6rem 0.75rem">Transactional email</td><td style="padding:0.6rem 0.75rem">USA</td><td style="padding:0.6rem 0.75rem">SCCs + UK IDTA</td><td style="padding:0.6rem 0.75rem"><span style="background:#FEF3C7;color:#92400E;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">⚠ Accept in account</span></td></tr>
        <tr style="border-bottom:1px solid #E8F1FB"><td style="padding:0.6rem 0.75rem;font-weight:600">Google Maps Platform</td><td style="padding:0.6rem 0.75rem">Location &amp; routing</td><td style="padding:0.6rem 0.75rem">USA</td><td style="padding:0.6rem 0.75rem">SCCs + UK IDTA (auto)</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">✅ Auto in API terms</span></td></tr>
        <tr style="background:#F5F8FC"><td style="padding:0.6rem 0.75rem;font-weight:600">Stripe Identity</td><td style="padding:0.6rem 0.75rem">Biometric KYC</td><td style="padding:0.6rem 0.75rem">USA</td><td style="padding:0.6rem 0.75rem">SCCs + UK IDTA</td><td style="padding:0.6rem 0.75rem"><span style="background:#D1FAE5;color:#065F46;padding:2px 8px;border-radius:10px;font-weight:600;font-size:0.75rem">✅ Covered by Stripe DPA</span></td></tr>
      </tbody>
    </table>
  </div>

  <div style="background:#FEF3C7;border:1px solid #FCD34D;border-radius:8px;padding:1rem 1.25rem;margin-top:1.5rem">
    <p style="font-size:0.875rem;font-weight:600;color:#92400E;margin:0">⚠ Internal document — Classification: Confidential</p>
    <p style="font-size:0.8125rem;color:#78350F;margin:0.25rem 0 0">This ROPA must be reviewed and updated at minimum annually and whenever a new processing activity is introduced, an existing activity materially changes, or a new sub-processor is engaged. The Data Protection lead is responsible for maintaining this document.</p>
  </div>
</div>
`;
