// Privacy Policy content — exact match to FlexiShift_Privacy_Policy.docx
// Uses same TC styles for consistent design
export const privacyStyles = `
  :root {
    --navy:  #0F3460;
    --teal:  #00A896;
    --light: #E8F1FB;
    --pale:  #F5F8FC;
    --dark:  #111827;
    --body:  #374151;
    --muted: #6B7280;
    --border:#E5ECF5;
    --white: #FFFFFF;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    font-size: 15px; line-height: 1.75; color: var(--body);
    background: var(--pale);
  }

  /* NAV */
  nav {
    position: sticky; top: 0; z-index: 50;
    background: rgba(15,52,96,0.97);
    backdrop-filter: blur(8px);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 5%; height: 60px;
  }
  .nav-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
  .nav-logo-mark {
    width: 32px; height: 32px; background: var(--teal);
    border-radius: 7px; display: flex; align-items: center; justify-content: center;
  }
  .nav-logo-mark svg { width: 18px; height: 18px; }
  .nav-wordmark { font-size: 18px; font-weight: 700; color: #fff; letter-spacing: -0.3px; }
  .nav-wordmark span { color: var(--teal); }
  .nav-right { display: flex; align-items: center; gap: 16px; }
  .nav-right a {
    font-size: 13px; color: rgba(255,255,255,0.7);
    text-decoration: none; transition: color .2s;
  }
  .nav-right a:hover { color: #fff; }
  .lang-active { color: #fff !important; font-weight: 600; }
  .lang-divider { color: rgba(255,255,255,0.3); }

  /* LAYOUT */
  .page { max-width: 900px; margin: 0 auto; padding: 48px 24px 80px; }

  /* HEADER BLOCK */
  .doc-header {
    background: var(--navy); border-radius: 14px;
    padding: 48px 48px 40px; margin-bottom: 40px; position: relative; overflow: hidden;
  }
  .doc-header::before {
    content: ''; position: absolute; inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20h20v20H20zM0 0h20v20H0z'/%3E%3C/g%3E%3C/svg%3E");
    pointer-events: none;
  }
  .doc-header-inner { position: relative; }
  .doc-badge {
    display: inline-block; font-size: 11px; font-weight: 700;
    letter-spacing: .08em; text-transform: uppercase;
    background: rgba(0,168,150,0.2); color: #5DDDD2;
    border: 1px solid rgba(0,168,150,0.3);
    padding: 4px 12px; border-radius: 20px; margin-bottom: 20px;
  }
  .doc-header h1 {
    font-size: 28px; font-weight: 800; color: #fff;
    letter-spacing: -0.5px; margin-bottom: 16px;
  }
  .doc-meta { display: flex; flex-wrap: wrap; gap: 12px; }
  .doc-meta-item {
    font-size: 12px; color: rgba(255,255,255,0.6);
    background: rgba(255,255,255,0.08);
    padding: 4px 12px; border-radius: 20px;
  }
  .doc-notice {
    margin-top: 24px; padding: 16px 20px;
    background: rgba(255,255,255,0.06);
    border-left: 3px solid var(--teal); border-radius: 0 8px 8px 0;
    font-size: 13px; color: rgba(255,255,255,0.8); font-style: italic;
  }

  /* TOC */
  .toc {
    background: var(--white); border: 1px solid var(--border);
    border-radius: 12px; padding: 28px 32px; margin-bottom: 32px;
  }
  .toc-title {
    font-size: 13px; font-weight: 700; text-transform: uppercase;
    letter-spacing: .07em; color: var(--teal); margin-bottom: 16px;
  }
  .toc-list { list-style: none; columns: 2; gap: 24px; }
  .toc-list li { margin-bottom: 6px; break-inside: avoid; }
  .toc-list a {
    font-size: 13px; color: var(--navy); text-decoration: none;
    transition: color .15s;
  }
  .toc-list a:hover { color: var(--teal); }

  /* SECTION */
  .tc-section {
    background: var(--white); border: 1px solid var(--border);
    border-radius: 12px; padding: 36px 40px; margin-bottom: 20px;
    scroll-margin-top: 80px;
  }
  .section-num {
    display: inline-block; font-size: 11px; font-weight: 700;
    text-transform: uppercase; letter-spacing: .07em; color: var(--teal);
    margin-bottom: 10px;
  }
  .tc-section > h2 {
    font-size: 20px; font-weight: 800; color: var(--dark);
    letter-spacing: -0.3px; margin-bottom: 18px;
    padding-bottom: 14px; border-bottom: 1.5px solid var(--border);
  }
  .tc-section h3 {
    font-size: 15px; font-weight: 700; color: var(--navy);
    margin: 24px 0 10px;
  }
  .tc-section p { margin-bottom: 14px; font-size: 14px; line-height: 1.8; }
  .tc-section p:last-child { margin-bottom: 0; }
  .tc-section ul { margin: 10px 0 14px 0; padding-left: 0; list-style: none; }
  .tc-section ul li {
    font-size: 14px; line-height: 1.8; padding: 5px 0 5px 20px;
    position: relative; border-bottom: 0.5px solid var(--border);
  }
  .tc-section ul li:last-child { border-bottom: none; }
  .tc-section ul li::before {
    content: ''; position: absolute; left: 0; top: 14px;
    width: 6px; height: 6px; border-radius: 50%; background: var(--teal);
  }

  /* SUB-ITEMS (lettered) */
  .sub-list { list-style: none; margin: 8px 0 8px 0; padding: 0; }
  .sub-list li {
    font-size: 14px; line-height: 1.8; padding: 4px 0 4px 24px;
    position: relative; border-bottom: none !important;
  }
  .sub-list li::before { display: none !important; }
  .sub-list li .sub-label {
    position: absolute; left: 0; font-weight: 600; color: var(--navy);
  }

  /* WARN BOX */
  .warn-box {
    background: #FEF3F2; border: 1px solid #FCA5A5;
    border-radius: 8px; padding: 14px 18px; margin: 14px 0;
    font-size: 13px; line-height: 1.7; color: #7F1D1D; font-weight: 500;
  }

  /* INFO BOX */
  .info-box {
    background: var(--light); border-left: 3px solid var(--teal);
    border-radius: 0 8px 8px 0; padding: 14px 18px;
    margin: 14px 0; font-size: 13px; line-height: 1.7; color: var(--navy);
  }

  /* SIGNING BLOCK */
  .signing-block {
    background: var(--navy); border-radius: 12px;
    padding: 36px 40px; text-align: center; margin-top: 32px;
  }
  .signing-block p {
    font-size: 15px; color: rgba(255,255,255,0.85);
    line-height: 1.7; margin-bottom: 20px; font-weight: 500; font-style: italic;
  }
  .signing-block .footer-detail {
    font-size: 12px; color: rgba(255,255,255,0.45);
    margin-top: 20px; margin-bottom: 0;
  }

  /* FOOTER */
  footer {
    background: #080F1C; color: rgba(255,255,255,0.4);
    padding: 28px 5%; text-align: center; font-size: 12px; margin-top: 40px;
  }
  footer a { color: rgba(255,255,255,0.5); text-decoration: none; }
  .footer-inner { max-width: 900px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
  .footer-links { display: flex; gap: 20px; }

  @media (max-width: 640px) {
    .page { padding: 24px 16px 60px; }
    .doc-header { padding: 32px 24px; }
    .tc-section { padding: 24px 20px; }
    .toc { padding: 20px 20px; }
    .toc-list { columns: 1; }
    .signing-block { padding: 28px 24px; }
  }
`;
export const privacyEnHTML = `<div class="page">

  <!-- HEADER -->
  <div class="doc-header">
    <div class="doc-header-inner">
      <div class="doc-badge">Privacy &amp; Data Protection</div>
      <h1>Privacy Policy</h1>
      <div class="doc-meta">
        <span class="doc-meta-item">Version 1.0</span>
        <span class="doc-meta-item">Last updated: 2 June 2026</span>
        <span class="doc-meta-item">🇬🇧 UK GDPR</span>
        <span class="doc-meta-item">🇳🇴 EU GDPR (Norway)</span>
        <span class="doc-meta-item">🇸🇪 EU GDPR (Sweden / IMY)</span>
      </div>
      <div class="doc-notice">This Privacy Policy explains how AI Planning Ltd ("we", "us", "our"), operating the FlexiShift platform, collects, uses, shares, and protects your personal data. It applies to all users of the FlexiShift mobile app, web platform, and associated services, including drivers and hauliers.</div>
    </div>
  </div>

  <!-- TOC -->
  <div class="toc">
    <div class="toc-title">Contents</div>
    <ul class="toc-list">
      <li><a href="#p1">1. Who This Policy Applies To</a></li>
      <li><a href="#p2">2. What Personal Data We Collect</a></li>
      <li><a href="#p3">3. How We Use Your Personal Data</a></li>
      <li><a href="#p4">4. Location Data</a></li>
      <li><a href="#p5">5. Sharing Your Personal Data</a></li>
      <li><a href="#p6">6. International Data Transfers</a></li>
      <li><a href="#p7">7. Data Retention</a></li>
      <li><a href="#p8">8. Your Rights</a></li>
      <li><a href="#p9">9. Automated Decision-Making</a></li>
      <li><a href="#p10">10. Cookies and Tracking</a></li>
      <li><a href="#p11">11. Children</a></li>
      <li><a href="#p12">12. Changes to This Policy</a></li>
      <li><a href="#p13">13. Contact Us</a></li>
    </ul>
  </div>

  <!-- INTRO -->
  <div class="tc-section">
    <p>AI Planning Ltd is the data controller for all personal data processed through the FlexiShift platform. We are registered in England and Wales. Our contact details are set out in Section 13 of this policy.</p>
    <p>We process personal data in accordance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and — for users in Sweden and Norway — the EU General Data Protection Regulation (EU GDPR) as applied in those jurisdictions. For Swedish users, we also comply with the requirements of the Swedish Authority for Privacy Protection (IMY).</p>
  </div>

  <!-- SECTION 1 -->
  <div class="tc-section" id="p1">
    <span class="section-num">Section 1</span>
    <h2>Who This Policy Applies To</h2>
    <p>This policy applies to:</p>
    <ul>
      <li>Drivers who register on the FlexiShift platform to offer their services</li>
      <li>Hauliers who register to post jobs and hire drivers through the platform</li>
      <li>Visitors to our website and anyone who contacts us</li>
      <li>Users in all jurisdictions in which FlexiShift operates, including the United Kingdom, Sweden, and Norway</li>
    </ul>
  </div>

  <!-- SECTION 2 -->
  <div class="tc-section" id="p2">
    <span class="section-num">Section 2</span>
    <h2>What Personal Data We Collect</h2>
    <h3>2.1 Drivers</h3>
    <p>When you register and use FlexiShift as a driver, we collect:</p>
    <ul>
      <li><strong>Identity data:</strong> full name, date of birth, profile photograph</li>
      <li><strong>Contact data:</strong> email address, phone number</li>
      <li><strong>Driving licence data:</strong> licence number, licence category, expiry date, country of issue</li>
      <li><strong>Vehicle data:</strong> registration number, vehicle type, make and model</li>
      <li>Right to work and identity verification documents as required for KYC compliance</li>
      <li><strong>Location data:</strong> real-time GPS location during active jobs</li>
      <li><strong>Job data:</strong> jobs accepted, completed, and declined; delivery confirmations; proof of delivery images</li>
      <li><strong>Earnings data:</strong> amounts earned, payout history, bank account details (held by Stripe on our behalf)</li>
      <li><strong>Ratings and review data:</strong> ratings received from hauliers</li>
      <li><strong>Device and technical data:</strong> device type, operating system, app version, IP address</li>
      <li><strong>Communications:</strong> messages sent through the platform, incident reports submitted</li>
    </ul>
    <h3>2.2 Hauliers</h3>
    <p>When you register and use FlexiShift as a haulier, we collect:</p>
    <ul>
      <li><strong>Business identity data:</strong> company name, company registration number, VAT number</li>
      <li><strong>Contact data:</strong> name of account holder, email address, phone number, business address</li>
      <li><strong>Job data:</strong> jobs posted, driver preferences, delivery locations, cargo details</li>
      <li><strong>Payment data:</strong> card details and billing information (held securely by Stripe)</li>
      <li><strong>Transaction history:</strong> payments made, escrow status, invoices</li>
      <li><strong>Ratings and review data:</strong> ratings given to and received from drivers</li>
      <li><strong>Device and technical data:</strong> browser type, IP address, session data</li>
    </ul>
    <h3>2.3 Data We Collect Automatically</h3>
    <p>We automatically collect certain technical data when you use the platform, including log data, usage patterns, crash reports, and cookies or similar tracking technologies as described in our Cookie Policy.</p>
  </div>

  <!-- SECTION 3 -->
  <div class="tc-section" id="p3">
    <span class="section-num">Section 3</span>
    <h2>How We Use Your Personal Data</h2>
    <p>We use your personal data for the following purposes and on the following legal bases:</p>
    <h3>3.1 To provide and manage the FlexiShift platform</h3>
    <p><strong>Legal basis:</strong> Performance of a contract (UK/EU GDPR Article 6(1)(b))</p>
    <ul>
      <li>Creating and managing your account</li>
      <li>Matching drivers to jobs using our smart matching algorithm</li>
      <li>Processing payments, managing escrow, and releasing funds to drivers</li>
      <li>Enabling in-app communications between drivers and hauliers</li>
      <li>Tracking active jobs and providing delivery confirmation</li>
    </ul>
    <h3>3.2 To verify your identity and comply with legal obligations</h3>
    <p><strong>Legal basis:</strong> Legal obligation (UK/EU GDPR Article 6(1)(c)) and legitimate interests (Article 6(1)(f))</p>
    <ul>
      <li>Conducting Know Your Customer (KYC) checks via Stripe</li>
      <li>Verifying driving licences and right to work documentation</li>
      <li>Complying with anti-money laundering (AML) obligations</li>
      <li>Complying with tax reporting obligations in the UK, Sweden, and Norway</li>
      <li>Responding to lawful requests from regulatory authorities</li>
    </ul>
    <h3>3.3 To improve and develop the platform</h3>
    <p><strong>Legal basis:</strong> Legitimate interests (UK/EU GDPR Article 6(1)(f))</p>
    <ul>
      <li>Analysing usage patterns to improve platform performance</li>
      <li>Developing new features based on user behaviour</li>
      <li>Conducting internal research and analytics</li>
    </ul>
    <h3>3.4 To send you communications</h3>
    <p><strong>Legal basis:</strong> Contract performance for service communications; consent or legitimate interests for marketing</p>
    <ul>
      <li>Job alerts, shift notifications, and payout confirmations</li>
      <li>Platform updates, policy changes, and security alerts</li>
      <li>Promotional communications where you have opted in</li>
    </ul>
    <h3>3.5 To maintain platform safety and resolve disputes</h3>
    <p><strong>Legal basis:</strong> Legitimate interests (UK/EU GDPR Article 6(1)(f))</p>
    <ul>
      <li>Investigating incidents, complaints, and disputes</li>
      <li>Preventing fraud and misuse of the platform</li>
      <li>Maintaining ratings and review integrity</li>
    </ul>
  </div>

  <!-- SECTION 4 -->
  <div class="tc-section" id="p4">
    <span class="section-num">Section 4</span>
    <h2>Location Data</h2>
    <p>FlexiShift collects real-time GPS location data from drivers during active jobs. This data is used to:</p>
    <ul>
      <li>Display the driver's location to the assigned haulier during an active job</li>
      <li>Verify that pickup and delivery have occurred at the correct locations</li>
      <li>Provide route information and estimated arrival times</li>
      <li>Investigate incidents or disputes relating to a specific job</li>
    </ul>
    <p>Location tracking is active only when you have an active job assignment. You will be notified in the app when location tracking is active. You may not be able to complete active jobs if you disable location access, as this is necessary for the safe operation of the platform.</p>
    <p>We do not track your location outside of active job periods.</p>
  </div>

  <!-- SECTION 5 -->
  <div class="tc-section" id="p5">
    <span class="section-num">Section 5</span>
    <h2>Sharing Your Personal Data</h2>
    <p>We share personal data only where necessary and with appropriate safeguards in place:</p>
    <h3>5.1 With other platform users</h3>
    <ul>
      <li>Drivers' first name, profile photograph, vehicle type, and rating are shared with hauliers when a job match is made</li>
      <li>Hauliers' business name, job details, and rating are shared with drivers when a job is offered</li>
    </ul>
    <h3>5.2 With service providers</h3>
    <ul>
      <li><strong>Stripe Inc:</strong> payment processing, escrow management, and driver KYC verification. Stripe acts as a data processor on our behalf and processes data in accordance with its own privacy policy and applicable data protection law</li>
      <li><strong>Google Maps:</strong> for route display and address validation within the app</li>
      <li>Cloud infrastructure providers: for hosting and data storage</li>
      <li>Analytics providers: for platform performance monitoring</li>
    </ul>
    <h3>5.3 With regulatory and legal authorities</h3>
    <p>We may share personal data with tax authorities (including HMRC, Skatteverket in Sweden, and Skatteetaten in Norway), law enforcement, or other regulatory bodies where we are legally required to do so.</p>
    <h3>5.4 In the event of a business transfer</h3>
    <p>If AI Planning Ltd is acquired, merged, or transfers its business, personal data held on the platform may be transferred as part of that transaction. We will notify affected users in advance where required by law.</p>
  </div>

  <!-- SECTION 6 -->
  <div class="tc-section" id="p6">
    <span class="section-num">Section 6</span>
    <h2>International Data Transfers</h2>
    <p>AI Planning Ltd is based in the United Kingdom. Where we transfer personal data outside the UK or the European Economic Area (EEA), we ensure appropriate safeguards are in place, including:</p>
    <ul>
      <li>UK International Data Transfer Agreements (IDTAs) for transfers from the UK</li>
      <li>EU Standard Contractual Clauses (SCCs) for transfers from Sweden or Norway under EU GDPR</li>
      <li>Reliance on adequacy decisions where applicable</li>
    </ul>
    <p>Stripe processes data in the United States and maintains appropriate transfer mechanisms including SCCs. Further details are available in Stripe's privacy policy.</p>
  </div>

  <!-- SECTION 7 -->
  <div class="tc-section" id="p7">
    <span class="section-num">Section 7</span>
    <h2>Data Retention</h2>
    <p>We retain personal data for as long as is necessary for the purposes for which it was collected, subject to the following:</p>
    <ul>
      <li><strong>Active account data:</strong> retained for the duration of your account</li>
      <li><strong>Job and transaction records:</strong> retained for 7 years following the transaction to comply with tax and accounting obligations in the UK, Sweden, and Norway</li>
      <li><strong>KYC and identity verification documents:</strong> retained for 5 years following the end of the business relationship, in accordance with AML obligations</li>
      <li><strong>Location data from completed jobs:</strong> retained for 12 months then deleted</li>
      <li><strong>Incident reports and dispute records:</strong> retained for 3 years</li>
      <li><strong>Marketing preferences and consent records:</strong> retained until withdrawn plus 2 years</li>
    </ul>
    <p>When data is no longer required, it is securely deleted or anonymised.</p>
  </div>

  <!-- SECTION 8 -->
  <div class="tc-section" id="p8">
    <span class="section-num">Section 8</span>
    <h2>Your Rights</h2>
    <p>Depending on your location and the applicable data protection law, you have the following rights in relation to your personal data:</p>
    <ul>
      <li><strong>Right of access:</strong> to receive a copy of the personal data we hold about you</li>
      <li><strong>Right to rectification:</strong> to have inaccurate personal data corrected</li>
      <li><strong>Right to erasure:</strong> to request deletion of your personal data in certain circumstances</li>
      <li><strong>Right to restriction:</strong> to restrict how we process your data in certain circumstances</li>
      <li><strong>Right to data portability:</strong> to receive your data in a structured, machine-readable format</li>
      <li><strong>Right to object:</strong> to object to processing based on legitimate interests</li>
      <li><strong>Rights related to automated decision-making:</strong> our matching algorithm uses automated processing to suggest job matches; you have the right to request human review of any decision that significantly affects you</li>
    </ul>
    <p>To exercise any of these rights, please contact us at the details in Section 13. We will respond within one month. We may need to verify your identity before processing your request.</p>
    <div class="info-box">
      If you are located in Sweden, you may also lodge a complaint with the Swedish Authority for Privacy Protection (IMY) at <strong>www.imy.se</strong>. If you are located in Norway, you may complain to Datatilsynet at <strong>www.datatilsynet.no</strong>. UK users may complain to the Information Commissioner's Office (ICO) at <strong>www.ico.org.uk</strong>.
    </div>
  </div>

  <!-- SECTION 9 -->
  <div class="tc-section" id="p9">
    <span class="section-num">Section 9</span>
    <h2>Automated Decision-Making and Profiling</h2>
    <p>FlexiShift uses an automated matching algorithm to connect drivers with jobs based on location, vehicle type, availability, and ratings. This automated processing affects which jobs are offered to you and how prominently you appear to hauliers.</p>
    <p>We consider this processing to be necessary for the performance of our contract with you. You have the right to request a human review of any matching decision that significantly affects your access to work on the platform. Please contact us to make such a request.</p>
  </div>

  <!-- SECTION 10 -->
  <div class="tc-section" id="p10">
    <span class="section-num">Section 10</span>
    <h2>Cookies and Tracking Technologies</h2>
    <p>The FlexiShift web platform and mobile app use cookies and similar technologies for authentication, security, and analytics purposes. A full description of the cookies we use and how to manage your preferences is available in our Cookie Policy, which forms part of this Privacy Policy.</p>
  </div>

  <!-- SECTION 11 -->
  <div class="tc-section" id="p11">
    <span class="section-num">Section 11</span>
    <h2>Children</h2>
    <p>FlexiShift is not directed at or intended for use by persons under the age of 18. We do not knowingly collect personal data from anyone under 18. If you believe we have inadvertently collected data from a minor, please contact us immediately and we will delete it.</p>
  </div>

  <!-- SECTION 12 -->
  <div class="tc-section" id="p12">
    <span class="section-num">Section 12</span>
    <h2>Changes to This Policy</h2>
    <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons. Where we make material changes, we will notify you by email or through a prominent notice in the app at least 14 days before the changes take effect.</p>
    <p>The date at the top of this policy indicates when it was last updated. We encourage you to review this policy periodically.</p>
  </div>

  <!-- SECTION 13 -->
  <div class="tc-section" id="p13">
    <span class="section-num">Section 13</span>
    <h2>Contact Us</h2>
    <p>If you have any questions about this Privacy Policy, wish to exercise your rights, or have a concern about how we handle your data, please contact us:</p>
    <div class="info-box">
      <strong>AI Planning Ltd</strong><br/>
      Trading as: FlexiShift<br/>
      Registered in England and Wales<br/>
      Email: <strong>privacy@flexishift.com</strong><br/><br/>
      For urgent data protection matters, please mark your email: <strong>URGENT — DATA PROTECTION</strong>
    </div>
    <p>We aim to respond to all privacy enquiries within 5 working days and will action requests within one calendar month as required by UK/EU GDPR.</p>
  </div>

  <!-- SIGNING BLOCK -->
  <div class="signing-block">
    <p>© 2026 AI Planning Ltd. All rights reserved. FlexiShift is a trading name of AI Planning Ltd.</p>
    <p class="footer-detail">Version 1.0 · Last updated 2 June 2026 · privacy@flexishift.com</p>
  </div>

</div>
`;

export const privacyNoHTML = `<div class="page">

  <!-- HEADER -->
  <div class="doc-header">
    <div class="doc-header-inner">
      <div class="doc-badge">Personvern og databeskyttelse</div>
      <h1>Personvernpolicy</h1>
      <div class="doc-meta">
        <span class="doc-meta-item">Version 1.0</span>
        <span class="doc-meta-item">Sist oppdatert: 2 juni 2026</span>
        <span class="doc-meta-item">🇬🇧 UK GDPR</span>
        <span class="doc-meta-item">🇳🇴 EU GDPR (Norway)</span>
        <span class="doc-meta-item">🇸🇪 EU GDPR (Sweden / IMY)</span>
      </div>
      <div class="doc-notice">Denne personvernpolicyen forklarer hvordan AI Planning Ltd («vi», «oss», «vår»), som driver FlexiShift-plattformen, samler inn, bruker, deler og beskytter dine personopplysninger. Den gjelder for alle brukere av FlexiShift mobilapp, nettplattform og tilknyttede tjenester, inkludert sjåfører og transportører.</div>
    </div>
  </div>

  <!-- TOC -->
  <div class="toc">
    <div class="toc-title">Innhold</div>
    <ul class="toc-list">
      <li><a href="#p1">1. Hvem denne policyen gjelder for</a></li>
      <li><a href="#p2">2. Hvilke personopplysninger vi samler inn</a></li>
      <li><a href="#p3">3. Hvordan vi bruker dine personopplysninger</a></li>
      <li><a href="#p4">4. Stedsdata</a></li>
      <li><a href="#p5">5. Deling av dine personopplysninger</a></li>
      <li><a href="#p6">6. Internasjonale dataoverføringer</a></li>
      <li><a href="#p7">7. Lagring av data</a></li>
      <li><a href="#p8">8. Dine rettigheter</a></li>
      <li><a href="#p9">9. Automatiserte avgjørelser</a></li>
      <li><a href="#p10">10. Informasjonskapsler og sporing</a></li>
      <li><a href="#p11">11. Barn</a></li>
      <li><a href="#p12">12. Endringer i denne policyen</a></li>
      <li><a href="#p13">13. Kontakt oss</a></li>
    </ul>
  </div>

  <!-- INTRO -->
  <div class="tc-section">
    <p>AI Planning Ltd er behandlingsansvarlig for alle personopplysninger som behandles gjennom FlexiShift-plattformen. Vi er registrert i England og Wales. Våre kontaktopplysninger er angitt i avsnitt 13 i denne policyen.</p>
    <p>Vi behandler personopplysninger i samsvar med UK General Data Protection Regulation (UK GDPR), Data Protection Act 2018, og — for brukere i Sverige og Norge — EU General Data Protection Regulation (EU GDPR) slik den anvendes i disse jurisdiksjonene. For svenske brukere overholder vi også kravene fra Integritetsskyddsmyndigheten (IMY).</p>
  </div>

  <!-- SECTION 1 -->
  <div class="tc-section" id="p1">
    <span class="section-num">Avsnitt 1</span>
    <h2>Hvem denne policyen gjelder for</h2>
    <p>Denne policyen gjelder for:</p>
    <ul>
      <li>Sjåfører som registrerer seg på FlexiShift-plattformen for å tilby sine tjenester</li>
      <li>Transportører som registrerer seg for å legge ut oppdrag og ansette sjåfører via plattformen</li>
      <li>Besøkende på nettstedet vårt og alle som kontakter oss</li>
      <li>Brukere i alle jurisdiksjoner der FlexiShift opererer, inkludert Storbritannia, Sverige og Norge</li>
    </ul>
  </div>

  <!-- SECTION 2 -->
  <div class="tc-section" id="p2">
    <span class="section-num">Avsnitt 2</span>
    <h2>Hvilke personopplysninger vi samler inn</h2>
    <h3>2.1 Sjåfører</h3>
    <p>Når du registrerer deg og bruker FlexiShift som sjåfør, samler vi inn:</p>
    <ul>
      <li><strong>Identitetsopplysninger:</strong> fullt navn, fødselsdato, profilbilde</li>
      <li><strong>Kontaktopplysninger:</strong> e-postadresse, telefonnummer</li>
      <li><strong>Førerkortopplysninger:</strong> førerkortnummer, førerkortkategori, utløpsdato, utstedelsesland</li>
      <li><strong>Kjøretøyopplysninger:</strong> registreringsnummer, kjøretøytype, merke og modell</li>
      <li>Dokumentasjon for arbeidsrett og identitetsverifisering som kreves for KYC-etterlevelse</li>
      <li><strong>Stedsdata:</strong> GPS-posisjon i sanntid under aktive oppdrag</li>
      <li><strong>Oppdragsdata:</strong> oppdrag som er akseptert, fullført og avslått; leveringsbekreftelser; bilder som bevis på levering</li>
      <li><strong>Inntektsdata:</strong> opptjente beløp, utbetalingshistorikk, bankkontodetaljer (oppbevart av Stripe på våre vegne)</li>
      <li><strong>Vurderings- og anmeldelsesdata:</strong> vurderinger mottatt fra transportører</li>
      <li><strong>Enhets- og tekniske data:</strong> enhetstype, operativsystem, appversjon, IP-adresse</li>
      <li><strong>Kommunikasjon:</strong> meldinger sendt via plattformen, innsendte hendelsesrapporter</li>
    </ul>
    <h3>2.2 Transportører</h3>
    <p>Når du registrerer deg og bruker FlexiShift som transportør, samler vi inn:</p>
    <ul>
      <li><strong>Bedriftsidentitetsopplysninger:</strong> firmanavn, organisasjonsnummer, MVA-nummer</li>
      <li><strong>Kontaktopplysninger:</strong> navn på kontoinnehaver, e-postadresse, telefonnummer, forretningsadresse</li>
      <li><strong>Oppdragsdata:</strong> oppdrag lagt ut, sjåførpreferanser, leveringssteder, lastedetaljer</li>
      <li><strong>Betalingsdata:</strong> kortdetaljer og faktureringsinformasjon (oppbevart sikkert av Stripe)</li>
      <li><strong>Transaksjonshistorikk:</strong> utførte betalinger, escrow-status, fakturaer</li>
      <li><strong>Vurderings- og anmeldelsesdata:</strong> vurderinger gitt til og mottatt fra sjåfører</li>
      <li><strong>Enhets- og tekniske data:</strong> nettlesertype, IP-adresse, øktdata</li>
    </ul>
    <h3>2.3 Data vi samler inn automatisk</h3>
    <p>Vi samler automatisk inn visse tekniske data når du bruker plattformen, inkludert loggdata, bruksmønstre, krasjrapporter og informasjonskapsler eller lignende sporingsteknologier som beskrevet i vår cookie-policy.</p>
  </div>

  <!-- SECTION 3 -->
  <div class="tc-section" id="p3">
    <span class="section-num">Avsnitt 3</span>
    <h2>Hvordan vi bruker dine personopplysninger</h2>
    <p>Vi bruker dine personopplysninger til følgende formål og på følgende rettslige grunnlag:</p>
    <h3>3.1 For å levere og administrere FlexiShift-plattformen</h3>
    <p><strong>Rettslig grunnlag:</strong> Oppfyllelse av en avtale (UK/EU GDPR Article 6(1)(b))</p>
    <ul>
      <li>Oppretting og administrasjon av kontoen din</li>
      <li>Matching av sjåfører til oppdrag ved hjelp av vår smarte matchingsalgoritme</li>
      <li>Behandling av betalinger, administrasjon av escrow og utbetaling av midler til sjåfører</li>
      <li>Muliggjøring av kommunikasjon i appen mellom sjåfører og transportører</li>
      <li>Sporing av aktive oppdrag og levering av leveringsbekreftelse</li>
    </ul>
    <h3>3.2 For å verifisere identiteten din og overholde rettslige forpliktelser</h3>
    <p><strong>Rettslig grunnlag:</strong> Rettslig forpliktelse (UK/EU GDPR Article 6(1)(c)) og berettigede interesser (Article 6(1)(f))</p>
    <ul>
      <li>Gjennomføring av Know Your Customer (KYC)-kontroller via Stripe</li>
      <li>Verifisering av førerkort og dokumentasjon for arbeidsrett</li>
      <li>Overholdelse av forpliktelser knyttet til hvitvasking (AML)</li>
      <li>Overholdelse av skatterapporteringsforpliktelser i Storbritannia, Sverige og Norge</li>
      <li>Svar på lovlige forespørsler fra tilsynsmyndigheter</li>
    </ul>
    <h3>3.3 For å forbedre og utvikle plattformen</h3>
    <p><strong>Rettslig grunnlag:</strong> Berettigede interesser (UK/EU GDPR Article 6(1)(f))</p>
    <ul>
      <li>Analyse av bruksmønstre for å forbedre plattformens ytelse</li>
      <li>Utvikling av nye funksjoner basert på brukeratferd</li>
      <li>Gjennomføring av intern forskning og analyse</li>
    </ul>
    <h3>3.4 For å sende deg kommunikasjon</h3>
    <p><strong>Rettslig grunnlag:</strong> Avtaleoppfyllelse for tjenestekommunikasjon; samtykke eller berettigede interesser for markedsføring</p>
    <ul>
      <li>Oppdragsvarsler, skiftvarsler og utbetalingsbekreftelser</li>
      <li>Plattformoppdateringer, policyendringer og sikkerhetsvarsler</li>
      <li>Markedsføringskommunikasjon der du har samtykket</li>
    </ul>
    <h3>3.5 For å opprettholde plattformsikkerhet og løse tvister</h3>
    <p><strong>Rettslig grunnlag:</strong> Berettigede interesser (UK/EU GDPR Article 6(1)(f))</p>
    <ul>
      <li>Undersøkelse av hendelser, klager og tvister</li>
      <li>Forebygging av svindel og misbruk av plattformen</li>
      <li>Opprettholdelse av integritet i vurderinger og anmeldelser</li>
    </ul>
  </div>

  <!-- SECTION 4 -->
  <div class="tc-section" id="p4">
    <span class="section-num">Avsnitt 4</span>
    <h2>Stedsdata</h2>
    <p>FlexiShift samler inn GPS-stedsdata i sanntid fra sjåfører under aktive oppdrag. Disse dataene brukes til å:</p>
    <ul>
      <li>Vise sjåførens posisjon til den tildelte transportøren under et aktivt oppdrag</li>
      <li>Verifisere at henting og levering har skjedd på riktige steder</li>
      <li>Gi ruteinformasjon og estimerte ankomsttider</li>
      <li>Undersøke hendelser eller tvister knyttet til et spesifikt oppdrag</li>
    </ul>
    <p>Stedssporing er aktiv kun når du har et aktivt oppdrag. Du vil bli varslet i appen når stedssporing er aktiv. Du kan muligens ikke fullføre aktive oppdrag hvis du deaktiverer stedstilgang, da dette er nødvendig for sikker drift av plattformen.</p>
    <p>Vi sporer ikke posisjonen din utenfor perioder med aktive oppdrag.</p>
  </div>

  <!-- SECTION 5 -->
  <div class="tc-section" id="p5">
    <span class="section-num">Avsnitt 5</span>
    <h2>Deling av dine personopplysninger</h2>
    <p>Vi deler personopplysninger kun der det er nødvendig og med passende sikkerhetstiltak på plass:</p>
    <h3>5.1 Med andre plattformbrukere</h3>
    <ul>
      <li>Sjåførers fornavn, profilbilde, kjøretøytype og vurdering deles med transportører når en oppdragsmatch er gjort</li>
      <li>Transportørers firmanavn, oppdragsdetaljer og vurdering deles med sjåfører når et oppdrag tilbys</li>
    </ul>
    <h3>5.2 Med tjenesteleverandører</h3>
    <ul>
      <li><strong>Stripe Inc:</strong> betalingsbehandling, escrow-administrasjon og KYC-verifisering av sjåfører. Stripe opptrer som databehandler på våre vegne og behandler data i samsvar med sin egen personvernpolicy og gjeldende personvernlovgivning</li>
      <li><strong>Google Maps:</strong> for rutevisning og adressevalidering i appen</li>
      <li>Skyinfrastrukturleverandører: for hosting og datalagring</li>
      <li>Analyseleverandører: for overvåking av plattformytelse</li>
    </ul>
    <h3>5.3 Med tilsyns- og rettslige myndigheter</h3>
    <p>Vi kan dele personopplysninger med skattemyndigheter (inkludert HMRC, Skatteverket i Sverige og Skatteetaten i Norge), politiet eller andre tilsynsorganer der vi er lovpålagt å gjøre det.</p>
    <h3>5.4 Ved virksomhetsoverdragelse</h3>
    <p>Hvis AI Planning Ltd blir kjøpt opp, fusjonert eller overfører virksomheten sin, kan personopplysninger som holdes på plattformen overføres som del av den transaksjonen. Vi vil varsle berørte brukere på forhånd der loven krever det.</p>
  </div>

  <!-- SECTION 6 -->
  <div class="tc-section" id="p6">
    <span class="section-num">Avsnitt 6</span>
    <h2>Internasjonale dataoverføringer</h2>
    <p>AI Planning Ltd er basert i Storbritannia. Der vi overfører personopplysninger utenfor Storbritannia eller Det europeiske økonomiske samarbeidsområdet (EØS), sørger vi for at passende sikkerhetstiltak er på plass, inkludert:</p>
    <ul>
      <li>UK International Data Transfer Agreements (IDTAs) for overføringer fra Storbritannia</li>
      <li>EU Standard Contractual Clauses (SCCs) for overføringer fra Sverige eller Norge under EU GDPR</li>
      <li>Forlitende på tilstrekkelighetsbeslutninger der det er aktuelt</li>
    </ul>
    <p>Stripe behandler data i USA og opprettholder passende overføringsmekanismer inkludert SCCs. Ytterligere detaljer er tilgjengelige i Stripes personvernpolicy.</p>
  </div>

  <!-- SECTION 7 -->
  <div class="tc-section" id="p7">
    <span class="section-num">Avsnitt 7</span>
    <h2>Lagring av data</h2>
    <p>Vi lagrer personopplysninger så lenge det er nødvendig for formålene de ble samlet inn for, med forbehold om følgende:</p>
    <ul>
      <li><strong>Aktive kontodata:</strong> lagres i hele kontoens varighet</li>
      <li><strong>Oppdrags- og transaksjonsregistre:</strong> lagres i 7 år etter transaksjonen for å overholde skatte- og regnskapsforpliktelser i Storbritannia, Sverige og Norge</li>
      <li><strong>KYC- og identitetsverifiseringsdokumenter:</strong> lagres i 5 år etter at forretningsforholdet er avsluttet, i samsvar med AML-forpliktelser</li>
      <li><strong>Stedsdata fra fullførte oppdrag:</strong> lagres i 12 måneder og slettes deretter</li>
      <li><strong>Hendelsesrapporter og tvisteregistre:</strong> lagres i 3 år</li>
      <li><strong>Markedsføringspreferanser og samtykkeregistre:</strong> lagres til de trekkes tilbake pluss 2 år</li>
    </ul>
    <p>Når data ikke lenger er nødvendige, slettes eller anonymiseres de på en sikker måte.</p>
  </div>

  <!-- SECTION 8 -->
  <div class="tc-section" id="p8">
    <span class="section-num">Avsnitt 8</span>
    <h2>Dine rettigheter</h2>
    <p>Avhengig av hvor du befinner deg og gjeldende personvernlovgivning, har du følgende rettigheter knyttet til dine personopplysninger:</p>
    <ul>
      <li><strong>Rett til innsyn:</strong> å motta en kopi av personopplysningene vi har om deg</li>
      <li><strong>Rett til retting:</strong> å få uriktige personopplysninger rettet</li>
      <li><strong>Rett til sletting:</strong> å be om sletting av dine personopplysninger under visse omstendigheter</li>
      <li><strong>Rett til begrensning:</strong> å begrense hvordan vi behandler dataene dine under visse omstendigheter</li>
      <li><strong>Rett til dataportabilitet:</strong> å motta dataene dine i et strukturert, maskinlesbart format</li>
      <li><strong>Rett til å protestere:</strong> å protestere mot behandling basert på berettigede interesser</li>
      <li><strong>Rettigheter knyttet til automatiserte avgjørelser:</strong> vår matchingsalgoritme bruker automatisert behandling for å foreslå oppdragsmatcher; du har rett til å be om menneskelig gjennomgang av enhver avgjørelse som i betydelig grad påvirker deg</li>
    </ul>
    <p>For å utøve noen av disse rettighetene, vennligst kontakt oss på opplysningene i avsnitt 13. Vi vil svare innen én måned. Vi kan måtte verifisere identiteten din før vi behandler forespørselen din.</p>
    <div class="info-box">
      Hvis du befinner deg i Sverige, kan du også klage til Integritetsskyddsmyndigheten (IMY) på <strong>www.imy.se</strong>. Hvis du befinner deg i Norge, kan du klage til Datatilsynet på <strong>www.datatilsynet.no</strong>. Brukere i Storbritannia kan klage til Information Commissioner's Office (ICO) på <strong>www.ico.org.uk</strong>.
    </div>
  </div>

  <!-- SECTION 9 -->
  <div class="tc-section" id="p9">
    <span class="section-num">Avsnitt 9</span>
    <h2>Automatiserte avgjørelser og profilering</h2>
    <p>FlexiShift bruker en automatisert matchingsalgoritme for å koble sjåfører med oppdrag basert på sted, kjøretøytype, tilgjengelighet og vurderinger. Denne automatiserte behandlingen påvirker hvilke oppdrag som tilbys deg og hvor fremtredende du fremstår for transportører.</p>
    <p>Vi anser denne behandlingen som nødvendig for oppfyllelsen av avtalen vår med deg. Du har rett til å be om en menneskelig gjennomgang av enhver matchingsavgjørelse som i betydelig grad påvirker din tilgang til arbeid på plattformen. Vennligst kontakt oss for å fremsette en slik forespørsel.</p>
  </div>

  <!-- SECTION 10 -->
  <div class="tc-section" id="p10">
    <span class="section-num">Avsnitt 10</span>
    <h2>Informasjonskapsler og sporingsteknologier</h2>
    <p>FlexiShift nettplattform og mobilapp bruker informasjonskapsler og lignende teknologier for autentisering, sikkerhet og analyseformål. En fullstendig beskrivelse av informasjonskapslene vi bruker og hvordan du administrerer preferansene dine, er tilgjengelig i vår cookie-policy, som utgjør en del av denne personvernpolicyen.</p>
  </div>

  <!-- SECTION 11 -->
  <div class="tc-section" id="p11">
    <span class="section-num">Avsnitt 11</span>
    <h2>Barn</h2>
    <p>FlexiShift er ikke rettet mot eller ment for bruk av personer under 18 år. Vi samler ikke bevisst inn personopplysninger fra noen under 18. Hvis du mener at vi utilsiktet har samlet inn data fra en mindreårig, vennligst kontakt oss umiddelbart, så sletter vi dem.</p>
  </div>

  <!-- SECTION 12 -->
  <div class="tc-section" id="p12">
    <span class="section-num">Avsnitt 12</span>
    <h2>Endringer i denne policyen</h2>
    <p>Vi kan oppdatere denne personvernpolicyen fra tid til annen for å gjenspeile endringer i vår praksis, teknologi, rettslige krav eller av andre driftsmessige årsaker. Der vi gjør vesentlige endringer, vil vi varsle deg via e-post eller gjennom et fremtredende varsel i appen minst 14 dager før endringene trer i kraft.</p>
    <p>Datoen øverst i denne policyen angir når den sist ble oppdatert. Vi oppfordrer deg til å gjennomgå denne policyen jevnlig.</p>
  </div>

  <!-- SECTION 13 -->
  <div class="tc-section" id="p13">
    <span class="section-num">Avsnitt 13</span>
    <h2>Kontakt oss</h2>
    <p>Hvis du har spørsmål om denne personvernpolicyen, ønsker å utøve dine rettigheter, eller har en bekymring om hvordan vi håndterer dataene dine, vennligst kontakt oss:</p>
    <div class="info-box">
      <strong>AI Planning Ltd</strong><br/>
      Trading as: FlexiShift<br/>
      Registered in England and Wales<br/>
      Email: <strong>privacy@flexishift.com</strong><br/><br/>
      For urgent data protection matters, please mark your email: <strong>URGENT — DATA PROTECTION</strong>
    </div>
    <p>Vi tar sikte på å svare på alle personvernhenvendelser innen 5 virkedager og vil behandle forespørsler innen én kalendermåned som påkrevd av UK/EU GDPR.</p>
  </div>

  <!-- SIGNING BLOCK -->
  <div class="signing-block">
    <p>© 2026 AI Planning Ltd. All rights reserved. FlexiShift is a trading name of AI Planning Ltd.</p>
    <p class="footer-detail">Version 1.0 · Sist oppdatert 2 juni 2026 · privacy@flexishift.com</p>
  </div>

</div>
`;

export const privacySvHTML = `<div class="page">

  <!-- HEADER -->
  <div class="doc-header">
    <div class="doc-header-inner">
      <div class="doc-badge">Integritet och dataskydd</div>
      <h1>Integritetspolicy</h1>
      <div class="doc-meta">
        <span class="doc-meta-item">Version 1.0</span>
        <span class="doc-meta-item">Senast uppdaterad: 2 juni 2026</span>
        <span class="doc-meta-item">🇬🇧 UK GDPR</span>
        <span class="doc-meta-item">🇳🇴 EU GDPR (Norway)</span>
        <span class="doc-meta-item">🇸🇪 EU GDPR (Sweden / IMY)</span>
      </div>
      <div class="doc-notice">Denna integritetspolicy förklarar hur AI Planning Ltd ("vi", "oss", "vår"), som driver FlexiShift-plattformen, samlar in, använder, delar och skyddar dina personuppgifter. Den gäller för alla användare av FlexiShift mobilapp, webbplattform och tillhörande tjänster, inklusive förare och åkerier.</div>
    </div>
  </div>

  <!-- TOC -->
  <div class="toc">
    <div class="toc-title">Innehåll</div>
    <ul class="toc-list">
      <li><a href="#p1">1. Vem denna policy gäller för</a></li>
      <li><a href="#p2">2. Vilka personuppgifter vi samlar in</a></li>
      <li><a href="#p3">3. Hur vi använder dina personuppgifter</a></li>
      <li><a href="#p4">4. Platsdata</a></li>
      <li><a href="#p5">5. Delning av dina personuppgifter</a></li>
      <li><a href="#p6">6. Internationella dataöverföringar</a></li>
      <li><a href="#p7">7. Datalagring</a></li>
      <li><a href="#p8">8. Dina rättigheter</a></li>
      <li><a href="#p9">9. Automatiserat beslutsfattande</a></li>
      <li><a href="#p10">10. Cookies och spårning</a></li>
      <li><a href="#p11">11. Barn</a></li>
      <li><a href="#p12">12. Ändringar av denna policy</a></li>
      <li><a href="#p13">13. Kontakta oss</a></li>
    </ul>
  </div>

  <!-- INTRO -->
  <div class="tc-section">
    <p>AI Planning Ltd är personuppgiftsansvarig för alla personuppgifter som behandlas via FlexiShift-plattformen. Vi är registrerade i England och Wales. Våra kontaktuppgifter anges i avsnitt 13 i denna policy.</p>
    <p>Vi behandlar personuppgifter i enlighet med UK General Data Protection Regulation (UK GDPR), Data Protection Act 2018, och — för användare i Sverige och Norge — EU General Data Protection Regulation (EU GDPR) såsom den tillämpas i dessa jurisdiktioner. För svenska användare följer vi även kraven från Integritetsskyddsmyndigheten (IMY).</p>
  </div>

  <!-- SECTION 1 -->
  <div class="tc-section" id="p1">
    <span class="section-num">Avsnitt 1</span>
    <h2>Vem denna policy gäller för</h2>
    <p>Denna policy gäller för:</p>
    <ul>
      <li>Förare som registrerar sig på FlexiShift-plattformen för att erbjuda sina tjänster</li>
      <li>Åkerier som registrerar sig för att lägga upp jobb och anlita förare via plattformen</li>
      <li>Besökare på vår webbplats och alla som kontaktar oss</li>
      <li>Användare i alla jurisdiktioner där FlexiShift är verksamt, inklusive Storbritannien, Sverige och Norge</li>
    </ul>
  </div>

  <!-- SECTION 2 -->
  <div class="tc-section" id="p2">
    <span class="section-num">Avsnitt 2</span>
    <h2>Vilka personuppgifter vi samlar in</h2>
    <h3>2.1 Förare</h3>
    <p>När du registrerar dig och använder FlexiShift som förare samlar vi in:</p>
    <ul>
      <li><strong>Identitetsuppgifter:</strong> fullständigt namn, födelsedatum, profilfoto</li>
      <li><strong>Kontaktuppgifter:</strong> e-postadress, telefonnummer</li>
      <li><strong>Körkortsuppgifter:</strong> körkortsnummer, körkortskategori, utgångsdatum, utfärdandeland</li>
      <li><strong>Fordonsuppgifter:</strong> registreringsnummer, fordonstyp, märke och modell</li>
      <li>Dokumentation för arbetstillstånd och identitetsverifiering som krävs för KYC-efterlevnad</li>
      <li><strong>Platsdata:</strong> GPS-position i realtid under aktiva jobb</li>
      <li><strong>Jobbdata:</strong> jobb som accepterats, slutförts och avböjts; leveransbekräftelser; bilder som bevis på leverans</li>
      <li><strong>Intäktsdata:</strong> intjänade belopp, utbetalningshistorik, bankkontouppgifter (lagrade av Stripe för vår räkning)</li>
      <li><strong>Betygs- och recensionsdata:</strong> betyg mottagna från åkerier</li>
      <li><strong>Enhets- och tekniska data:</strong> enhetstyp, operativsystem, appversion, IP-adress</li>
      <li><strong>Kommunikation:</strong> meddelanden skickade via plattformen, inskickade incidentrapporter</li>
    </ul>
    <h3>2.2 Åkerier</h3>
    <p>När du registrerar dig och använder FlexiShift som åkeri samlar vi in:</p>
    <ul>
      <li><strong>Företagsidentitetsuppgifter:</strong> företagsnamn, organisationsnummer, momsregistreringsnummer</li>
      <li><strong>Kontaktuppgifter:</strong> namn på kontoinnehavare, e-postadress, telefonnummer, företagsadress</li>
      <li><strong>Jobbdata:</strong> jobb som lagts upp, förarpreferenser, leveransplatser, lastuppgifter</li>
      <li><strong>Betalningsdata:</strong> kortuppgifter och faktureringsinformation (lagrade säkert av Stripe)</li>
      <li><strong>Transaktionshistorik:</strong> genomförda betalningar, escrow-status, fakturor</li>
      <li><strong>Betygs- och recensionsdata:</strong> betyg givna till och mottagna från förare</li>
      <li><strong>Enhets- och tekniska data:</strong> webbläsartyp, IP-adress, sessionsdata</li>
    </ul>
    <h3>2.3 Data vi samlar in automatiskt</h3>
    <p>Vi samlar automatiskt in vissa tekniska data när du använder plattformen, inklusive loggdata, användningsmönster, kraschrapporter och cookies eller liknande spårningstekniker enligt beskrivning i vår cookiepolicy.</p>
  </div>

  <!-- SECTION 3 -->
  <div class="tc-section" id="p3">
    <span class="section-num">Avsnitt 3</span>
    <h2>Hur vi använder dina personuppgifter</h2>
    <p>Vi använder dina personuppgifter för följande ändamål och på följande rättsliga grunder:</p>
    <h3>3.1 För att tillhandahålla och hantera FlexiShift-plattformen</h3>
    <p><strong>Rättslig grund:</strong> Fullgörande av ett avtal (UK/EU GDPR Article 6(1)(b))</p>
    <ul>
      <li>Skapande och hantering av ditt konto</li>
      <li>Matchning av förare till jobb med vår smarta matchningsalgoritm</li>
      <li>Behandling av betalningar, hantering av escrow och utbetalning av medel till förare</li>
      <li>Möjliggörande av kommunikation i appen mellan förare och åkerier</li>
      <li>Spårning av aktiva jobb och tillhandahållande av leveransbekräftelse</li>
    </ul>
    <h3>3.2 För att verifiera din identitet och uppfylla rättsliga skyldigheter</h3>
    <p><strong>Rättslig grund:</strong> Rättslig förpliktelse (UK/EU GDPR Article 6(1)(c)) och berättigade intressen (Article 6(1)(f))</p>
    <ul>
      <li>Genomförande av Know Your Customer (KYC)-kontroller via Stripe</li>
      <li>Verifiering av körkort och dokumentation för arbetstillstånd</li>
      <li>Efterlevnad av skyldigheter mot penningtvätt (AML)</li>
      <li>Efterlevnad av skatterapporteringsskyldigheter i Storbritannien, Sverige och Norge</li>
      <li>Svarande på lagliga begäranden från tillsynsmyndigheter</li>
    </ul>
    <h3>3.3 För att förbättra och utveckla plattformen</h3>
    <p><strong>Rättslig grund:</strong> Berättigade intressen (UK/EU GDPR Article 6(1)(f))</p>
    <ul>
      <li>Analys av användningsmönster för att förbättra plattformens prestanda</li>
      <li>Utveckling av nya funktioner baserat på användarbeteende</li>
      <li>Genomförande av intern forskning och analys</li>
    </ul>
    <h3>3.4 För att skicka dig kommunikation</h3>
    <p><strong>Rättslig grund:</strong> Avtalsfullgörelse för tjänstekommunikation; samtycke eller berättigade intressen för marknadsföring</p>
    <ul>
      <li>Jobbaviseringar, skiftaviseringar och utbetalningsbekräftelser</li>
      <li>Plattformsuppdateringar, policyändringar och säkerhetsaviseringar</li>
      <li>Marknadsföringskommunikation där du har valt att ta emot sådan</li>
    </ul>
    <h3>3.5 För att upprätthålla plattformssäkerhet och lösa tvister</h3>
    <p><strong>Rättslig grund:</strong> Berättigade intressen (UK/EU GDPR Article 6(1)(f))</p>
    <ul>
      <li>Utredning av incidenter, klagomål och tvister</li>
      <li>Förebyggande av bedrägeri och missbruk av plattformen</li>
      <li>Upprätthållande av integritet i betyg och recensioner</li>
    </ul>
  </div>

  <!-- SECTION 4 -->
  <div class="tc-section" id="p4">
    <span class="section-num">Avsnitt 4</span>
    <h2>Platsdata</h2>
    <p>FlexiShift samlar in GPS-platsdata i realtid från förare under aktiva jobb. Dessa data används för att:</p>
    <ul>
      <li>Visa förarens position för det tilldelade åkeriet under ett aktivt jobb</li>
      <li>Verifiera att upphämtning och leverans har skett på rätt platser</li>
      <li>Tillhandahålla ruttinformation och beräknade ankomsttider</li>
      <li>Utreda incidenter eller tvister som rör ett specifikt jobb</li>
    </ul>
    <p>Platsspårning är aktiv endast när du har ett aktivt jobbuppdrag. Du meddelas i appen när platsspårning är aktiv. Du kanske inte kan slutföra aktiva jobb om du inaktiverar platstillgång, eftersom detta är nödvändigt för säker drift av plattformen.</p>
    <p>Vi spårar inte din plats utanför perioder med aktiva jobb.</p>
  </div>

  <!-- SECTION 5 -->
  <div class="tc-section" id="p5">
    <span class="section-num">Avsnitt 5</span>
    <h2>Delning av dina personuppgifter</h2>
    <p>Vi delar personuppgifter endast där det är nödvändigt och med lämpliga skyddsåtgärder på plats:</p>
    <h3>5.1 Med andra plattformsanvändare</h3>
    <ul>
      <li>Förarnas förnamn, profilfoto, fordonstyp och betyg delas med åkerier när en jobbmatchning görs</li>
      <li>Åkeriers företagsnamn, jobbdetaljer och betyg delas med förare när ett jobb erbjuds</li>
    </ul>
    <h3>5.2 Med tjänsteleverantörer</h3>
    <ul>
      <li><strong>Stripe Inc:</strong> betalningshantering, escrow-hantering och KYC-verifiering av förare. Stripe agerar som personuppgiftsbiträde för vår räkning och behandlar data i enlighet med sin egen integritetspolicy och tillämplig dataskyddslagstiftning</li>
      <li><strong>Google Maps:</strong> för ruttvisning och adressvalidering i appen</li>
      <li>Molninfrastrukturleverantörer: för hosting och datalagring</li>
      <li>Analysleverantörer: för övervakning av plattformsprestanda</li>
    </ul>
    <h3>5.3 Med tillsyns- och rättsliga myndigheter</h3>
    <p>Vi kan dela personuppgifter med skattemyndigheter (inklusive HMRC, Skatteverket i Sverige och Skatteetaten i Norge), brottsbekämpande myndigheter eller andra tillsynsorgan där vi är lagligen skyldiga att göra det.</p>
    <h3>5.4 Vid företagsöverlåtelse</h3>
    <p>Om AI Planning Ltd förvärvas, fusioneras eller överlåter sin verksamhet kan personuppgifter som lagras på plattformen överföras som en del av den transaktionen. Vi kommer att meddela berörda användare i förväg där lagen kräver det.</p>
  </div>

  <!-- SECTION 6 -->
  <div class="tc-section" id="p6">
    <span class="section-num">Avsnitt 6</span>
    <h2>Internationella dataöverföringar</h2>
    <p>AI Planning Ltd är baserat i Storbritannien. Där vi överför personuppgifter utanför Storbritannien eller Europeiska ekonomiska samarbetsområdet (EES) säkerställer vi att lämpliga skyddsåtgärder finns på plats, inklusive:</p>
    <ul>
      <li>UK International Data Transfer Agreements (IDTAs) för överföringar från Storbritannien</li>
      <li>EU Standard Contractual Clauses (SCCs) för överföringar från Sverige eller Norge under EU GDPR</li>
      <li>Förlitande på adekvansbeslut där tillämpligt</li>
    </ul>
    <p>Stripe behandlar data i USA och upprätthåller lämpliga överföringsmekanismer inklusive SCCs. Ytterligare detaljer finns i Stripes integritetspolicy.</p>
  </div>

  <!-- SECTION 7 -->
  <div class="tc-section" id="p7">
    <span class="section-num">Avsnitt 7</span>
    <h2>Datalagring</h2>
    <p>Vi lagrar personuppgifter så länge det är nödvändigt för de ändamål för vilka de samlades in, med förbehåll för följande:</p>
    <ul>
      <li><strong>Aktiva kontouppgifter:</strong> lagras under hela kontots giltighetstid</li>
      <li><strong>Jobb- och transaktionsregister:</strong> lagras i 7 år efter transaktionen för att uppfylla skatte- och redovisningsskyldigheter i Storbritannien, Sverige och Norge</li>
      <li><strong>KYC- och identitetsverifieringsdokument:</strong> lagras i 5 år efter att affärsrelationen avslutats, i enlighet med AML-skyldigheter</li>
      <li><strong>Platsdata från slutförda jobb:</strong> lagras i 12 månader och raderas därefter</li>
      <li><strong>Incidentrapporter och tvisteregister:</strong> lagras i 3 år</li>
      <li><strong>Marknadsföringspreferenser och samtyckesregister:</strong> lagras tills de återkallas plus 2 år</li>
    </ul>
    <p>När data inte längre behövs raderas eller anonymiseras de på ett säkert sätt.</p>
  </div>

  <!-- SECTION 8 -->
  <div class="tc-section" id="p8">
    <span class="section-num">Avsnitt 8</span>
    <h2>Dina rättigheter</h2>
    <p>Beroende på din plats och tillämplig dataskyddslagstiftning har du följande rättigheter i förhållande till dina personuppgifter:</p>
    <ul>
      <li><strong>Rätt till tillgång:</strong> att få en kopia av de personuppgifter vi har om dig</li>
      <li><strong>Rätt till rättelse:</strong> att få felaktiga personuppgifter rättade</li>
      <li><strong>Rätt till radering:</strong> att begära radering av dina personuppgifter under vissa omständigheter</li>
      <li><strong>Rätt till begränsning:</strong> att begränsa hur vi behandlar dina uppgifter under vissa omständigheter</li>
      <li><strong>Rätt till dataportabilitet:</strong> att få dina uppgifter i ett strukturerat, maskinläsbart format</li>
      <li><strong>Rätt att invända:</strong> att invända mot behandling baserad på berättigade intressen</li>
      <li><strong>Rättigheter relaterade till automatiserat beslutsfattande:</strong> vår matchningsalgoritm använder automatiserad behandling för att föreslå jobbmatchningar; du har rätt att begära mänsklig granskning av varje beslut som väsentligt påverkar dig</li>
    </ul>
    <p>För att utöva någon av dessa rättigheter, vänligen kontakta oss på uppgifterna i avsnitt 13. Vi svarar inom en månad. Vi kan behöva verifiera din identitet innan vi behandlar din begäran.</p>
    <div class="info-box">
      Om du befinner dig i Sverige kan du också lämna in ett klagomål till Integritetsskyddsmyndigheten (IMY) på <strong>www.imy.se</strong>. Om du befinner dig i Norge kan du klaga till Datatilsynet på <strong>www.datatilsynet.no</strong>. Användare i Storbritannien kan klaga till Information Commissioner's Office (ICO) på <strong>www.ico.org.uk</strong>.
    </div>
  </div>

  <!-- SECTION 9 -->
  <div class="tc-section" id="p9">
    <span class="section-num">Avsnitt 9</span>
    <h2>Automatiserat beslutsfattande och profilering</h2>
    <p>FlexiShift använder en automatiserad matchningsalgoritm för att koppla förare till jobb baserat på plats, fordonstyp, tillgänglighet och betyg. Denna automatiserade behandling påverkar vilka jobb som erbjuds dig och hur framträdande du visas för åkerier.</p>
    <p>Vi anser att denna behandling är nödvändig för fullgörandet av vårt avtal med dig. Du har rätt att begära en mänsklig granskning av varje matchningsbeslut som väsentligt påverkar din tillgång till arbete på plattformen. Vänligen kontakta oss för att göra en sådan begäran.</p>
  </div>

  <!-- SECTION 10 -->
  <div class="tc-section" id="p10">
    <span class="section-num">Avsnitt 10</span>
    <h2>Cookies och spårningstekniker</h2>
    <p>FlexiShift webbplattform och mobilapp använder cookies och liknande tekniker för autentisering, säkerhet och analysändamål. En fullständig beskrivning av de cookies vi använder och hur du hanterar dina preferenser finns i vår cookiepolicy, som utgör en del av denna integritetspolicy.</p>
  </div>

  <!-- SECTION 11 -->
  <div class="tc-section" id="p11">
    <span class="section-num">Avsnitt 11</span>
    <h2>Barn</h2>
    <p>FlexiShift är inte riktad till eller avsedd för användning av personer under 18 år. Vi samlar inte medvetet in personuppgifter från någon under 18. Om du tror att vi oavsiktligt har samlat in uppgifter från en minderårig, vänligen kontakta oss omedelbart så raderar vi dem.</p>
  </div>

  <!-- SECTION 12 -->
  <div class="tc-section" id="p12">
    <span class="section-num">Avsnitt 12</span>
    <h2>Ändringar av denna policy</h2>
    <p>Vi kan uppdatera denna integritetspolicy från tid till annan för att återspegla förändringar i vår praxis, teknik, rättsliga krav eller av andra operativa skäl. Där vi gör väsentliga ändringar meddelar vi dig via e-post eller genom ett framträdande meddelande i appen minst 14 dagar innan ändringarna träder i kraft.</p>
    <p>Datumet högst upp i denna policy anger när den senast uppdaterades. Vi uppmuntrar dig att granska denna policy regelbundet.</p>
  </div>

  <!-- SECTION 13 -->
  <div class="tc-section" id="p13">
    <span class="section-num">Avsnitt 13</span>
    <h2>Kontakta oss</h2>
    <p>Om du har frågor om denna integritetspolicy, vill utöva dina rättigheter eller har en oro kring hur vi hanterar dina uppgifter, vänligen kontakta oss:</p>
    <div class="info-box">
      <strong>AI Planning Ltd</strong><br/>
      Trading as: FlexiShift<br/>
      Registered in England and Wales<br/>
      Email: <strong>privacy@flexishift.com</strong><br/><br/>
      For urgent data protection matters, please mark your email: <strong>URGENT — DATA PROTECTION</strong>
    </div>
    <p>Vi strävar efter att svara på alla integritetsförfrågningar inom 5 arbetsdagar och kommer att åtgärda begäranden inom en kalendermånad enligt krav i UK/EU GDPR.</p>
  </div>

  <!-- SIGNING BLOCK -->
  <div class="signing-block">
    <p>© 2026 AI Planning Ltd. All rights reserved. FlexiShift is a trading name of AI Planning Ltd.</p>
    <p class="footer-detail">Version 1.0 · Senast uppdaterad 2 juni 2026 · privacy@flexishift.com</p>
  </div>

</div>
`;

export const privacyHTMLByLang = {
  en: privacyEnHTML,
  no: privacyNoHTML,
  sv: privacySvHTML,
} as const;
