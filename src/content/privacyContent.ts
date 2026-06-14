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
export const privacyHTML = `<div class="page">

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
