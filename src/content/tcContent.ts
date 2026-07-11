// Auto-generated from uploaded TC HTML files — preserves original design
export const tcStyles = `
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

export const tcEnHTML = `
<div class="page">

  <!-- HEADER -->
  <div class="doc-header">
    <div class="doc-header-inner">
      <div class="doc-badge">Legal document</div>
      <h1>Terms and Conditions of Use</h1>
      <div class="doc-meta">
        <span class="doc-meta-item">Version 3.0</span>
        <span class="doc-meta-item">Effective: May 2026</span>
        <span class="doc-meta-item">🇬🇧 United Kingdom</span>
        <span class="doc-meta-item">🇳🇴 Norway</span>
        <span class="doc-meta-item">🇸🇪 Sweden</span>
      </div>
      <div class="doc-notice">By registering or using the Platform in any capacity, you agree to be legally bound by these Terms. If you do not agree, you must not use the Platform.</div>
    </div>
  </div>

  <!-- TOC -->
  <div class="toc">
    <div class="toc-title">Contents</div>
    <ul class="toc-list">
      <li><a href="#s1">1. Definitions</a></li>
      <li><a href="#s2">2. Acceptance &amp; Eligibility</a></li>
      <li><a href="#s3">3. FlexiShift's Role</a></li>
      <li><a href="#s4">4. Verification &amp; Identity</a></li>
      <li><a href="#s5">5. Job Contract Terms</a></li>
      <li><a href="#s6">6. Prohibited &amp; Restricted Goods</a></li>
      <li><a href="#s7">7. Liability Exclusions</a></li>
      <li><a href="#s8">8. Payments, Fees &amp; Tax</a></li>
      <li><a href="#s9">9. Disputes &amp; Escrow</a></li>
      <li><a href="#s10">10. Privacy &amp; Data</a></li>
      <li><a href="#s11">11. Platform Rules</a></li>
      <li><a href="#s12">12. Platform Changes</a></li>
      <li><a href="#s13">13. Intellectual Property</a></li>
      <li><a href="#s14">14. Liability &amp; Termination</a></li>
      <li><a href="#s15">15. Jurisdiction-Specific Provisions</a></li>
      <li><a href="#s16">16. General</a></li>
    </ul>
  </div>

  <!-- SECTION 1 -->
  <div class="tc-section" id="s1">
    <span class="section-num">Section 1</span>
    <h2>Definitions</h2>
    <p>Key terms used in these Terms have the following meanings:</p>
    <ul>
      <li><strong>"FlexiShift", "we", "us", "our"</strong> – AI Planning Ltd, a company registered in England and Wales, trading as FlexiShift and operator of the Platform.</li>
      <li><strong>"Platform"</strong> – the FlexiShift logistics marketplace, including the Haulier web app, Driver mobile app, Firm portal, and all supporting software and infrastructure.</li>
      <li><strong>"User"</strong> – any Haulier, Driver, or Firm accessing or using the Platform.</li>
      <li><strong>"Haulier"</strong> – a business or individual posting freight jobs on the Platform.</li>
      <li><strong>"Driver"</strong> – an individual who executes jobs via the Driver mobile application.</li>
      <li><strong>"Firm"</strong> – a transport business managing fleets and Drivers on the Platform.</li>
      <li><strong>"Supplier"</strong> – any verified Driver or Firm eligible to accept jobs.</li>
      <li><strong>"Job"</strong> – a freight task posted by a Haulier, assigned a unique Job Reference ID.</li>
      <li><strong>"Job Contract"</strong> – the binding agreement formed between Haulier and Supplier on booking confirmation, incorporating Section 5 below.</li>
      <li><strong>"Payment Facilitation Services"</strong> (referred to interchangeably in these Terms as "Escrow") – the secure payment holding facility operated by the Third-Party Payment Processor, into which funds are locked on booking and from which funds are released on completion of a Job. This facility is operated exclusively by the Third-Party Payment Processor and not by FlexiShift.</li>
      <li><strong>"Third-Party Payment Processor"</strong> – the specialist payment provider engaged by FlexiShift to handle all financial transactions.</li>
      <li><strong>"Compliance Track"</strong> – the mandatory three-stage workflow: Load Code Confirmation, Dual Sign-off Handover, and Delivery Proof.</li>
      <li><strong>"Prohibited Goods"</strong> – goods listed in Section 6 that may not be carried via the Platform.</li>
      <li><strong>"Applicable Law"</strong> – the law of the jurisdiction in which the User is established or the Job is performed, as relevant.</li>
      <li><strong>"Carrier"</strong> – any person who contracts to transport goods and assumes responsibility for such transportation.</li>
      <li><strong>"Independent Contractor"</strong> – a Driver, Firm or Haulier acting on their own behalf and not as an employee, worker, agent or representative of FlexiShift.</li>
      <li><strong>"Law Enforcement Authority"</strong> – any police force, customs authority, regulator, transport authority, tax authority, court, tribunal, sanctions authority or governmental agency.</li>
      <li><strong>"Platform Data"</strong> – all GPS records, audit logs, messages, ratings, verification records, photographs, videos, job history and any or all related data.</li>
    </ul>
  </div>

  <!-- SECTION 2 -->
  <div class="tc-section" id="s2">
    <span class="section-num">Section 2</span>
    <h2>Acceptance, Eligibility, and Account Security</h2>
    <p>By using the Platform you confirm you are at least 18 years old, have legal capacity to contract, and (if acting on behalf of a company) have authority to bind that entity. You must comply with all Applicable Laws and keep your account credentials confidential. Notify us immediately of any suspected unauthorised access.</p>
  </div>

  <!-- SECTION 3 -->
  <div class="tc-section" id="s3">
    <span class="section-num">Section 3</span>
    <h2>FlexiShift's Role – Marketplace Only</h2>
    <p>FlexiShift operates a digital marketplace and technology platform only. FlexiShift is not a haulage company, carrier, freight forwarder, transport operator, logistics provider, warehouse operator, custodian of goods, employment business, recruitment agency, worker engager or supplier of transport services.</p>
    <p>FlexiShift does not employ, engage, supervise, direct, control, manage or monitor Drivers, Firms or Hauliers and exercises no operational control over the performance of any Job.</p>
    <p>Drivers, Firms and Hauliers act as independent contractors at all times.</p>
    <p>Nothing in these Terms creates any employment relationship, worker relationship, partnership, joint venture, agency relationship, fiduciary relationship or representative relationship between FlexiShift and any User.</p>
    <p>The Job Contract is formed solely between the Haulier and the Supplier. FlexiShift is not a party to that agreement and assumes no responsibility for its performance.</p>

    <h3>3.1 Local Introducers and Marketing Partners</h3>
    <p>In certain jurisdictions, including Sweden, FlexiShift works with independent local marketing and referral partners who introduce prospective Drivers, Firms and Hauliers to the Platform. Any such partner acts as an independent business in its own right and is not an employee, worker, partner, joint venturer, agent or representative of FlexiShift or AI Planning Ltd. No such partner has any authority to conclude, execute, vary, interpret or bind FlexiShift or AI Planning Ltd to any contract, including any Job Contract or these Terms. Every Job Contract, and every User's contractual relationship with FlexiShift, is formed directly and exclusively with AI Planning Ltd. Introduction to the Platform by a local partner does not make that partner a party to, or guarantor of, any agreement between a User and FlexiShift.</p>
  </div>

  <!-- SECTION 4 -->
  <div class="tc-section" id="s4">
    <span class="section-num">Section 4</span>
    <h2>Verification, Identity Checks, and Fraud Prevention</h2>
    <p>All Suppliers must complete mandatory verification before accepting any Job. Required documents include:</p>
    <ul>
      <li>Driving Licence (Drivers); Vehicle Registration; current Insurance Document.</li>
      <li>Company Registration and Fleet Insurance policy (Firms).</li>
      <li>Any other documentation required by locality.</li>
    </ul>
    <p>FlexiShift may at any time conduct KYC (identity), KYB (business), sanctions screening, anti-fraud, and anti-money-laundering checks. We reserve the right to suspend or terminate accounts without prior notice where a User fails verification, appears on a sanctions list, or where we have reasonable grounds to suspect fraudulent, money-laundering, or criminal activity. We may refer concerns to relevant authorities without notifying the User. Duplicate email registrations are automatically blocked.</p>
    <p>Verification checks are conducted solely for administrative purposes. Verification does not constitute any representation, warranty or certification by FlexiShift regarding a User's identity, competence, fitness, legality, qualifications, experience, insurance coverage, suitability or ongoing compliance. Users must conduct their own independent due diligence and must not rely on any verification conducted by FlexiShift.</p>

    <h3>4.1 Driver Fitness and Legal Eligibility to Drive</h3>
    <p>By accepting any Job on the Platform, a Driver confirms, represents and warrants that, at the time of acceptance and throughout the performance of the Job, they:</p>
    <ul>
      <li>Hold a valid driving licence of the correct category for the vehicle, jurisdiction and load type required</li>
      <li>Are not subject to any driving ban, licence revocation, or court order restricting their right to drive</li>
      <li>Have not accumulated penalty points or endorsements or other sanctions that render them legally ineligible or unsuitable to drive under Applicable Law</li>
      <li>Are not disqualified from driving by any regulatory, administrative, or judicial authority in any jurisdiction in which they operate</li>
      <li>Are physically, medically and mentally fit to safely perform the Job and operate the relevant vehicle and equipment</li>
      <li>Possess the experience, skills, qualifications, training, certifications and competence reasonably required to undertake the specific Job accepted</li>
      <li>Hold all specialist licences, certificates, permits and accreditations required for the Job, including but not limited to ADR certification, Driver CPC, forklift, lifting equipment, tanker, abnormal load or any other industry-specific qualification required by law, the Customer or the Haulier</li>
      <li>Are otherwise suitable and capable of undertaking the Job safely, competently and in compliance with all Applicable Laws, regulations, industry standards and site-specific requirements</li>
    </ul>
    <p>The Driver acknowledges that they are solely responsible for determining whether they are fit, competent and legally entitled to undertake any Job before accepting it. Acceptance of a Job constitutes the Driver's confirmation that they satisfy all requirements applicable to that Job.</p>
    <p>The Driver further represents and warrants that they are not under the influence of alcohol, drugs, medication, fatigue, illness or any other condition which may impair their ability to safely perform the Job.</p>
    <p>FlexiShift &amp; Haulier reserves the right to suspend any Driver where impairment, safety concerns or regulatory concerns are reasonably suspected.</p>
    <p>If at any time a Driver receives penalty points, becomes subject to a driving ban, has their licence revoked, suspended, or impeded in any way, or becomes aware of any legal restriction on their ability to drive, or becomes medically unfit or impaired to perform their job safely, they must: (i) immediately notify FlexiShift by contacting support through the Platform; (ii) update their profile to reflect their unavailability; (iii) decline any Job or shift offer until their legal eligibility to drive is fully restored; and (iv) cease performing any affected job. A Driver who accepts or continues a Job whilst legally prohibited from driving is in material breach of these Terms and may be immediately suspended, reported to relevant authorities, and held liable for all resulting losses.</p>
    <p>FlexiShift conducts online verification checks on Driver documents at the point of registration only. Such checks are carried out in good faith using the information and documents submitted by the Driver and do not constitute a guarantee of the Driver's ongoing legal eligibility to drive. The Driver bears sole responsibility for ensuring their continued compliance with all applicable requirements for the selected job whilst using the Platform.</p>

    <h3>4.2 Haulier Obligation to Physically Verify Driver Credentials</h3>
    <p>FlexiShift performs online document verification at the point of Driver registration only. Such checks are conducted in good faith based on information and documentation provided by the Driver and are not a substitute for physical inspection of a Driver's credentials at the point of engagement. Before permitting any Driver to commence a job, access a site, operate any equipment, take custody of goods or a vehicle, the Haulier (or their authorised representative) is solely responsible for physically inspecting and verifying:</p>
    <ul>
      <li>The Driver's original driving licence, confirming it is valid, in date, and of the correct category for the vehicle and load</li>
      <li>Any specialist certifications required for the specific job (including but not limited to ADR certification for hazardous goods, CPC qualification, forklift or specialist equipment certificates, and any locally required permits)</li>
      <li>The Driver's identity against the licence and Platform profile</li>
      <li>Assessing whether the Driver possesses the experience, competence, training and capability reasonably required to undertake the specific Job safely and effectively</li>
      <li>Satisfying itself that the Driver appears fit for duty and is not visibly impaired, fatigued, intoxicated or otherwise unsuitable to undertake the Job</li>
      <li>Ensuring that all applicable legal, regulatory, contractual, insurance, customer, site and health and safety requirements have been met prior to the commencement of the Job</li>
      <li>Providing any site induction, safety briefing, operating instructions, risk assessments, method statements, personal checks and instructions</li>
      <li>Refusing access to any Driver whom the Haulier reasonably believes does not meet the requirements of the Job or presents a safety, legal, operational or compliance risk</li>
    </ul>
    <p>The Haulier acknowledges and agrees that it retains sole responsibility for the operational management, supervision and control of all Drivers engaged through the Platform once they attend the Job location and throughout the performance of the Job.</p>
    <p>FlexiShift acts solely as a technology platform facilitating introductions between Drivers and Hauliers. FlexiShift does not employ, supervise, direct, manage, assess, monitor or control Drivers during the performance of any Job and has no ability to verify a Driver's ongoing legal entitlement, competence, qualifications, fitness, suitability or conduct at the point of engagement or thereafter.</p>
    <div class="warn-box">FlexiShift shall have no liability whatsoever for any loss, damage, injury, delay, regulatory breach, compliance failure, vehicle damage, cargo loss, personal injury, death, fines, penalties, claims or costs arising from: (i) the Haulier's failure to conduct appropriate verification, inspection or suitability assessments; (ii) the Haulier's decision to engage, permit or continue using a Driver; (iii) any inaccurate, incomplete or fraudulent information provided by a Driver; or (iv) any act, omission, negligence, misconduct or breach of law by a Driver.</div>
    <p>The Haulier assumes all risks associated with permitting a Driver to undertake a Job and shall indemnify, defend and hold harmless FlexiShift, its officers, directors, employees and affiliates from and against any claims, actions, losses, liabilities, damages, penalties, costs and expenses (including reasonable legal fees) arising out of or connected with the Haulier's failure to comply with its obligations under this Clause or its engagement of a Driver whom it knew, or ought reasonably to have known, was not suitable for the Job.</p>
    <p>The Haulier shall be deemed the transport operator in operational control of the Job. The Haulier is solely responsible for compliance with all applicable transport legislation, driver hours requirements, tachograph requirements, working time requirements, health and safety obligations, vehicle compliance requirements and customer contractual obligations.</p>
    <p>Verification status displayed on the Platform is for administrative purposes only and should not be relied upon as evidence of competence, fitness, legality, insurance validity, suitability or trustworthiness.</p>
  </div>

  <!-- SECTION 5 -->
  <div class="tc-section" id="s5">
    <span class="section-num">Section 5</span>
    <h2>Job Contract Terms (Incorporated into Every Booking)</h2>
    <p>These terms apply between Haulier and Supplier for every Job unless expressly varied in writing. FlexiShift is not a party to any Job Contract.</p>
    <p>The Job Contract exists exclusively between the Haulier and Supplier. FlexiShift is not a party to, beneficiary of, guarantor of or administrator of any Job Contract. FlexiShift shall not be responsible for interpreting, enforcing or adjudicating any rights or obligations arising under any Job Contract.</p>

    <h3>5.1 Loading, Unloading and Goods Verification</h3>
    <p>Unless otherwise agreed: the Haulier's consignor is responsible for loading; the Driver is responsible for unloading. Special equipment requirements (tail-lift, pallet truck, etc.) must be declared at job creation. On collection, the Driver must verify and record quantity, external packaging condition, and any declared special handling. Drivers are not required to open sealed packaging and bear no liability for undeclared contents. Any discrepancy must be recorded in the app at the time of handover.</p>

    <h3>5.2 Risk Transfer</h3>
    <p>FlexiShift is not responsible for determining, allocating, monitoring or enforcing risk in any goods transported through the Platform. Risk allocation shall be a matter solely between the Haulier and Supplier.</p>

    <h3>5.3 Rescheduling and Incomplete Jobs</h3>
    <p>Rescheduling requires mutual written agreement via the Platform. If a Supplier commences but cannot complete a Job, they must immediately notify the Haulier via the Platform. Payment is determined by the dispute outcome under Section 10. FlexiShift accepts no financial liability for incomplete jobs.</p>

    <h3>5.4 Proof of Delivery and Dispute Evidence</h3>
    <p>Valid Delivery Proof requires: a clear photograph of goods at the delivery point; recipient digital signature; and Platform-recorded timestamp and geo-location. In any dispute, evidence is assessed in this priority order: (1) Compliance Track records; (2) GPS/telematics data; (3) timestamped app photographs and signatures; (4) Platform messaging logs; (5) third-party documents; (6) witness statements. FlexiShift may share Platform data with insurers, legal representatives, law enforcement, or arbitrators on request.</p>
  </div>

  <!-- SECTION 6 -->
  <div class="tc-section" id="s6">
    <span class="section-num">Section 6</span>
    <h2>Prohibited and Restricted Goods</h2>
    <div class="warn-box">Posting or transporting Prohibited Goods may result in immediate account suspension and referral to authorities. Suppliers may refuse any load they reasonably suspect to be prohibited, without penalty.</div>

    <h3>6.1 Absolutely Prohibited (no exceptions)</h3>
    <ul>
      <li>Illegal goods, stolen property, or goods involved in any criminal activity</li>
      <li>Firearms, weapons, ammunition, or explosives (licensed or otherwise)</li>
      <li>Controlled drugs and controlled substances</li>
      <li>Cash, bearer instruments, or high-value negotiables</li>
      <li>Goods subject to international sanctions or embargoes</li>
      <li>Category A/B infectious substances; unauthorised human remains or biological material</li>
    </ul>

    <h3>6.2 Restricted – Requires Full Pre-Declaration and Supplier Acceptance</h3>
    <ul>
      <li>Hazardous materials (ADR / applicable national regulations): flammable, corrosive, toxic, oxidising, or radioactive</li>
      <li>Temperature-controlled or cold-chain goods</li>
      <li>Livestock or live animals</li>
      <li>Alcohol and tobacco subject to licensing or duty requirements</li>
      <li>Oversized or overweight loads requiring permits or escort vehicles</li>
      <li>Waste or environmentally regulated materials</li>
      <li>High-value or fragile goods with declared value exceeding £10,000 / NOK 130,000 / SEK 140,000 per consignment</li>
      <li>Pharmaceutical products, controlled-temperature medicines, or medical devices</li>
    </ul>
    <p>The Haulier is solely responsible for accurate goods declaration. FlexiShift does not inspect goods and accepts no liability for any loss, regulatory action, or criminal proceedings arising from undeclared or misdescribed loads.</p>
    <p>Each User represents and warrants that neither it, its beneficial owners, its employees nor any shipment posted through the Platform is subject to sanctions imposed by the United Kingdom, EEA, European Union, the United States, the United Nations or any applicable sanctions authority.</p>
  </div>

  <!-- SECTION 7 -->
  <div class="tc-section" id="s7">
    <span class="section-num">Section 7</span>
    <h2>Liability Exclusions – Vehicles, Goods, Theft, and Cybersecurity</h2>

    <h3>7.1 Vehicle Damage</h3>
    <p>FlexiShift excludes all liability for loss, damage, or destruction of any vehicle used in connection with a Job, howsoever caused. Every Driver and Firm must maintain valid commercial motor insurance (covering third-party liability, goods in transit, and vehicle damage) at all times. Every Haulier must maintain adequate commercial insurance for their freight activities. FlexiShift may request evidence of insurance at any time; failure to provide it is a material breach of these Terms.</p>

    <h3>7.2 Theft, Product Loss, and Driver Misconduct</h3>
    <p>FlexiShift excludes all liability for theft, misappropriation, conversion, or misdelivery of goods by any Driver, Firm employee, or sub-contractor. Drivers and Firms are independent contractors; FlexiShift bears no vicarious liability for their conduct. Claims must be directed to the relevant Supplier or their insurer. Hauliers are responsible for maintaining adequate goods-in-transit insurance before handing over any goods.</p>
    <p>For the avoidance of doubt, FlexiShift excludes all liability for: (a) theft of, from, or in connection with any consignment, cargo, load, or goods carried in the course of a Job, whether by a Driver, a third party, or otherwise; (b) theft of or from any vehicle used in connection with a Job; (c) damage to any consignment, cargo, load, or goods, whether caused by mishandling, accident, unsuitable vehicle, inadequate packaging, or any other cause; and (d) damage to any vehicle, equipment, or property arising in the course of or in connection with a Job. FlexiShift is an introduction and technology platform only. We introduce Hauliers to Drivers and facilitate the formation of Job Contracts between them. We are not a party to any Job Contract, do not supervise or direct the performance of any Job, and cannot enforce compliance with any legal, operational, or safety obligation. Any claim arising from theft, loss, or damage must be made directly against the Driver, Firm, or their respective insurers.</p>

    <h3>7.3 Cybersecurity and Force Majeure</h3>
    <p>FlexiShift implements proportionate security measures but does not guarantee the Platform will be free from cyber-attacks, hacking, malware, or data breaches. FlexiShift is not liable for losses arising from third-party cyber-attacks, network failures, or force majeure events (including acts of God, natural disasters, or government action). Because payment data is handled exclusively by the Third-Party Payment Processor, FlexiShift accepts no liability for any compromise of payment information at that level. Users are responsible for securing their own devices and credentials.</p>

    <h3>7.4 ETA, Maps, and Route Data</h3>
    <p>ETA calculations, GPS tracking, route suggestions, and deviation alerts are tools and estimates only — not guarantees. Map data is sourced from third-party providers. FlexiShift accepts no liability for inaccuracies in matching results, ETA estimates, GPS data, or navigation information. Drivers must comply with road signs and traffic law regardless of any in-app route suggestion.</p>

    <h3>7.5 Consequential Losses</h3>
    <p>FlexiShift shall not be liable for any loss of profit, loss of revenue, loss of business opportunity, loss of contract, loss of goodwill, loss of anticipated savings, supply chain disruption, business interruption, reputational damage or consequential loss. FlexiShift shall have no obligation to investigate theft, recover goods, locate individuals, enforce claims or participate in any recovery actions.</p>
  </div>

  <!-- SECTION 8 -->
  <div class="tc-section" id="s8">
    <span class="section-num">Section 8</span>
    <h2>Payments, Fees, Tax, and Invoicing</h2>
    <p>All transactions are processed exclusively by the Third-Party Payment Processor. FlexiShift does not store or handle payment card or banking credentials. Accepted payment channels include those published on the Platform (including UPI, credit card, and bank transfer where available). Payment Facilitation Services are locked on booking and released to the Supplier upon Haulier approval of Delivery Proof.</p>
    <ul>
      <li>Platform commission and service fees are as published in the Platform fee schedule (updated from time to time with reasonable notice) and are quoted exclusive of applicable sales tax.</li>
      <li>Platform fees are payable, and non-refundable, as soon as a trip or shift has started, regardless of any disputes or the outcome.</li>
      <li>Sales tax applies as follows: VAT (UK), MVA/merverdiavgift (Norway), and MOMS/mervärdesskatt (Sweden), each at the prevailing rate in the applicable jurisdiction.</li>
      <li>Each User is solely responsible for their own tax compliance, including registration, reporting, and payment of applicable taxes on income earned or services received through the Platform.</li>
      <li>Automated invoices generated by the Platform are provided for informational convenience only. FlexiShift does not act as a VAT agent, tax agent, or fiscal representative for any User.</li>
      <li>Platform commission is non-refundable on cancellations once transit has commenced and on disputed jobs where FlexiShift is not at fault.</li>
      <li>Chargebacks or payment reversals initiated by a Haulier (other than those caused by FlexiShift error) are the Haulier's sole responsibility. FlexiShift may recover chargeback amounts via set-off against future escrow releases. Abuse of the chargeback process may result in account suspension.</li>
      <li>Each Driver and Haulier is solely responsible for registering for, collecting, reporting, and remitting VAT (or equivalent sales tax, including MVA in Norway and MOMS in Sweden) in their applicable jurisdiction. Where a Driver or Haulier is required by Applicable Law to be VAT-registered, they must maintain such registration throughout their use of the Platform. FlexiShift does not collect, remit, or account for VAT on behalf of any Driver or Haulier, and makes no representation as to any User's VAT obligations. Users must take independent tax advice if they are uncertain of their VAT registration or reporting requirements.</li>
      <li>All Drivers and Hauliers must be legally registered to operate as required by the laws and regulations of their applicable jurisdiction. This includes, without limitation: holding a valid business registration or self-employment status; possessing all licences, permits, and authorisations required to carry out haulage or driving activities; and complying with all applicable employment, tax, and transport regulations. Drivers operating in Sweden must hold a valid F-skatt certificate if self-employed.</li>
    </ul>
    <p>All payment services, including the Payment Facilitation Services (Escrow) described in these Terms, are provided by the Third-Party Payment Processor. FlexiShift does not itself operate as a regulated payment institution, bank, or money transmitter, and does not itself hold, transmit, or have custody of any User funds at any time.</p>
    <p>FlexiShift shall have no liability for processor failure, processor insolvency, delayed payments, chargebacks, fraud, payment reversals or processor errors.</p>
  </div>

  <!-- SECTION 9 -->
  <div class="tc-section" id="s9">
    <span class="section-num">Section 9</span>
    <h2>Disputes and Escrow Release</h2>
    <ul>
      <li>FlexiShift has no obligation to investigate, mediate, arbitrate, adjudicate or resolve disputes between Users. Any assistance provided by FlexiShift is voluntary, discretionary and provided solely as a customer service convenience.</li>
      <li>FlexiShift may deduct outstanding platform fees, commission, or cancellation charges from escrow before release where applicable.</li>
      <li>FlexiShift accepts no financial liability in connection with any dispute between Users. FlexiShift's involvement is an administrative convenience only and does not constitute a legal or arbitral award.</li>
      <li>Unresolved disputes may be referred to court, independent arbitration, the relevant insurer, or the Third-Party Payment Processor's own procedure. FlexiShift will provide access to Platform evidence records on receipt of a valid legal request.</li>
    </ul>
  </div>

  <!-- SECTION 10 -->
  <div class="tc-section" id="s10">
    <span class="section-num">Section 10</span>
    <h2>Privacy, GPS Tracking, and Data Processing</h2>
    <p>FlexiShift processes personal data in accordance with its Privacy Policy (available on the Platform and incorporated by reference). By using the Platform, Users consent to data processing as described therein.</p>

    <h3>10.1 Data Controller Status</h3>
    <p>FlexiShift, Drivers, Firms and Hauliers act as independent data controllers in relation to personal data processed for their own business purposes unless otherwise required by law.</p>

    <h3>10.2 Driver Data Sharing</h3>
    <p>Drivers expressly authorise FlexiShift to share relevant information with the relevant Haulier, including identity information, licence status, qualifications, certifications, vehicle information, ratings, GPS location and compliance records necessary for performance of the Job.</p>

    <h3>10.3 Law Enforcement and Fraud Prevention</h3>
    <p>FlexiShift may monitor, preserve, use and disclose any User information, Platform Data, identity records, communications, GPS records, verification documents, transaction records, photographs, videos and compliance information where FlexiShift reasonably considers such disclosure necessary to: (a) comply with legal obligations; (b) respond to requests from courts, regulators or law enforcement authorities; (c) investigate suspected fraud, theft, criminal activity, money laundering, sanctions breaches or threats to safety; (d) protect FlexiShift, Users or third parties; or (e) establish, exercise or defend legal claims. FlexiShift shall have no liability for disclosures made in good faith pursuant to this clause.</p>

    <h3>10.4 Retention</h3>
    <p>Data may be retained for as long as reasonably necessary for legal, regulatory, operational, fraud-prevention, insurance, dispute resolution and compliance purposes at the sole discretion of FlexiShift.</p>

    <h3>10.5 Live &amp; Other Data</h3>
    <ul>
      <li>Drivers consent to real-time GPS location tracking during active Jobs. Location data is shared with the relevant Haulier and Firm in real time and may be retained per Section 10.4.</li>
      <li>GPS data may be shared with insurers, law enforcement, or arbitrators on request.</li>
      <li>Verification documents, delivery photographs, digital signatures, and compliance data are stored securely and retained per Section 10.4.</li>
      <li>Job data may be shared with the Third-Party Payment Processor (fraud prevention), insurers (claims handling), regulatory authorities (legal requirement), and in anonymised form for Platform analytics.</li>
      <li>Drivers must not disable GPS or location services during an active Job. Deliberate disabling may result in account action.</li>
      <li>Users may exercise their data rights (access, correction, deletion, portability, objection) as set out in the Privacy Policy and in accordance with Applicable Law.</li>
    </ul>
  </div>

  <!-- SECTION 11 -->
  <div class="tc-section" id="s11">
    <span class="section-num">Section 11</span>
    <h2>Platform Rules – Ratings, Reviews, and the Driver App</h2>

    <h3>11.1 Ratings and Reviews</h3>
    <ul>
      <li>One rating per completed Job per counterparty. Ratings must be honest and based on genuine experience of that specific Job.</li>
      <li>Reviews must not be defamatory, abusive, discriminatory, fake, manipulated, or incentivised.</li>
      <li>FlexiShift may remove or decline to publish any review at its discretion and accepts no liability for inaccurate reviews.</li>
      <li>Ratings feed the Smart Matching Engine and affect Supplier visibility, job eligibility, and continued Platform access. Accounts falling below acceptable rating thresholds may be suspended.</li>
      <li>Declining a dispatched Job does not affect a Supplier's rating and shall not, by itself, result in reduced visibility, reduced Job offers, deprioritisation by the Smart Matching Engine, or any other penalty. Ratings are based solely on the Supplier's conduct during completed Jobs.</li>
      <li>Reviews, ratings and user-generated content remain the responsibility of the author. Users grant FlexiShift a worldwide, royalty-free, perpetual licence to use, display, analyse and publish ratings, reviews and feedback.</li>
    </ul>

    <h3>11.2 Driver App – Device and Safe Use</h3>
    <ul>
      <li>The Driver app requires: GPS/location (always-on during active Jobs); camera; push notifications; and storage. Disabling required permissions during a Job may impair functionality and constitute a breach.</li>
      <li>Drivers must not interact with the app in a manner that is unsafe or unlawful while driving. All active in-app interactions during transit must be completed only when the vehicle is safely stationary.</li>
      <li>Drivers are responsible for ensuring their device is charged and connected throughout a Job. FlexiShift accepts no liability for failures caused by device issues, battery, or poor connectivity.</li>
      <li>Software updates must be installed promptly. FlexiShift accepts no liability for errors arising from outdated app versions.</li>
      <li>Where the app is distributed through an app store, that store's terms apply in addition to these Terms and take precedence in respect of app distribution only.</li>
    </ul>

    <h3>11.3 Direct Engagement and Circumvention</h3>
    <p>FlexiShift operates as a marketplace platform and derives revenue from introducing Drivers, Firms and Hauliers and facilitating Job Contracts between them.</p>
    <p>Nothing in these Terms restricts any Driver, Firm or Haulier from providing or receiving services through other platforms, customers or business relationships. Drivers and Firms remain free to determine when, where and for whom they provide services and may use competing platforms at any time.</p>
    <p>However, where a Driver or Firm is introduced to a Haulier through the Platform, the Haulier shall not knowingly circumvent the Platform by directly engaging that Driver or Firm for substantially similar services outside the Platform for a period of twelve (12) weeks following the most recent Job, unless the Haulier has obtained FlexiShift's prior written consent or paid any applicable Direct Engagement Fee.</p>
    <p>FlexiShift may monitor Platform activity to identify suspected fee avoidance or circumvention and may suspend accounts, recover unpaid fees or take reasonable action to protect its legitimate business interests.</p>
  </div>

  <!-- SECTION 12 -->
  <div class="tc-section" id="s12">
    <span class="section-num">Section 12</span>
    <h2>Platform Changes and Service Providers</h2>
    <p>FlexiShift reserves the right at any time to modify, enhance, discontinue, or replace any feature or functionality; change or terminate any third-party service provider (including the Third-Party Payment Processor); and update pricing or commission structures with reasonable notice. FlexiShift shall not be liable for any loss arising from such changes. Material changes to these Terms will be notified by email or in-platform notification; continued use constitutes acceptance.</p>
    <p>FlexiShift may suspend, restrict or discontinue the Platform or any feature at any time and for any reason without liability.</p>
  </div>

  <!-- SECTION 13 -->
  <div class="tc-section" id="s13">
    <span class="section-num">Section 13</span>
    <h2>Intellectual Property</h2>
    <p>All intellectual property in the Platform (software, design, algorithms, branding, trademarks, and content) is owned by or licensed to AI Planning Ltd UK. Users receive a limited, non-exclusive, non-transferable licence to use the Platform for its intended purpose only. Users may not copy, reverse-engineer, modify, or distribute any Platform element without prior written consent.</p>
    <p>All platform algorithms, machine learning models, scoring systems, analytics outputs, performance metrics, derived data and platform intelligence belong exclusively to FlexiShift.</p>
  </div>

  <!-- SECTION 14 -->
  <div class="tc-section" id="s14">
    <span class="section-num">Section 14</span>
    <h2>Limitation of Liability, Indemnity, and Termination</h2>

    <h3>14.1 Limitation of Liability</h3>
    <p>To the fullest extent permitted by Applicable Law, FlexiShift's aggregate liability to any User is capped to the lesser of the total platform fees paid by that User in the three months preceding the relevant claim or £1,000 (One thousand GBP only). FlexiShift is not liable for indirect, consequential, incidental, special, or punitive loss, including loss of profit, revenue, data, or goodwill. This limitation applies regardless of the cause of action whether in contract, tort (including negligence), statutory duty, misrepresentation or otherwise. Nothing herein limits liability caused by FlexiShift's negligence, fraud, or any other head of liability that cannot be excluded under Applicable Law.</p>

    <h3>14.2 User Indemnity</h3>
    <p>Each User indemnifies FlexiShift, its directors, officers, and affiliates against all claims, losses, penalties, and costs (including legal fees) arising from: breach of these Terms; violation of Applicable Law; acts or omissions in connection with any Job; third-party claims for goods lost, stolen, or damaged in connection with a Job; failure to maintain adequate insurance; posting or transporting Prohibited Goods; employment claims; worker status claims; tax claims; VAT claims; customs claims; sanctions claims; regulatory claims; cargo claims; data protection claims; and third-party claims arising from use of the Platform.</p>

    <h3>14.3 Suspension and Termination</h3>
    <p>FlexiShift may suspend or terminate any account without prior notice for: breach of these Terms; false or misleading information; unlawful or harmful conduct; lapsed insurance or verification documents; failure to satisfy KYC/KYB/sanctions checks; or as required by law or court order. Outstanding escrow funds will be handled in accordance with the relevant Job status and the Third-Party Payment Processor's procedures.</p>

    <h3>14.4 Disclaimer of Warranties</h3>
    <p>To the fullest extent permitted by Applicable Law, the Platform and all services, content, data, information, software, functionality and features made available by FlexiShift are provided on an "as is", "as available" and "with all faults" basis. FlexiShift makes no representation, warranty, undertaking or guarantee, whether express, implied, statutory or otherwise, regarding the availability, reliability, performance, accuracy or suitability of the Platform or any User, Job, goods or information displayed through the Platform.</p>
    <p>Each User acknowledges and agrees that they are solely responsible for conducting their own due diligence and independent assessment before entering into any Job Contract, engaging with another User, releasing goods, accepting goods, making payments or relying upon any information obtained through the Platform.</p>
  </div>

  <!-- SECTION 15 -->
  <div class="tc-section" id="s15">
    <span class="section-num">Section 15</span>
    <h2>Jurisdiction-Specific Provisions</h2>

    <h3>15.1 United Kingdom</h3>
    <p>For UK-based Users, these Terms and the Job Contract are subject to the laws of England and Wales. Where a User qualifies as a consumer, mandatory protections under the Consumer Rights Act 2015 and related UK consumer legislation apply and are not excluded by these Terms. Data processing is carried out in accordance with the UK GDPR and the Data Protection Act 2018.</p>

    <h3>15.2 Norway</h3>
    <p>For Norwegian-based Users, nothing in these Terms excludes or limits any protection to which a User is entitled under mandatory provisions of Norwegian law that cannot be excluded by contract, including the Norwegian Contracts Act (avtaleloven) and, where a User qualifies as a consumer, the Norwegian Consumer Purchases Act (forbrukerkjøpsloven). Data processing complies with the Norwegian Personal Data Act (personopplysningsloven) implementing the EEA GDPR. Disputes involving a Norwegian consumer that cannot be resolved directly may be referred to the Norwegian Consumer Authority (Forbrukertilsynet) or the Consumer Disputes Board (Forbrukerklageutvalget) where applicable, in addition to the courts of Oslo.</p>

    <h3>15.3 Sweden</h3>
    <p>For Swedish-based Users, nothing in these Terms excludes or limits any protection to which a User is entitled under mandatory provisions of Swedish law that cannot be excluded by contract, including the Swedish Contracts Act (avtalslagen) and, where a User qualifies as a consumer, the Swedish Consumer Sales Act (konsumentköplagen). Data processing complies with the Swedish Act on Personal Data Processing and the EEA GDPR as supervised by the Swedish Authority for Privacy Protection (Integritetsskyddsmyndigheten, IMY). Disputes involving a Swedish consumer that cannot be resolved directly may be referred to the National Board for Consumer Disputes (Allmänna Reklamationsnämnden, ARN) where applicable, in addition to the courts of Stockholm.</p>

    <h3>15.4 Cross-Border Jobs</h3>
    <p>Where a Job involves collection and delivery across more than one jurisdiction covered by these Terms, the mandatory laws of each relevant jurisdiction apply to the extent they cannot be excluded. For cross-border road freight, the CMR Convention (Convention on the Contract for the International Carriage of Goods by Road) may apply, and Hauliers and Suppliers are responsible for their own compliance. ADR regulations apply to hazardous goods transport in all three jurisdictions.</p>

    <h3>15.5 Order of Precedence</h3>
    <p>Where a provision of this Section 15 conflicts with the general Governing Law clause in Section 16, this Section 15 takes precedence in respect of the Applicable Law and jurisdiction of the relevant User, to the extent required by mandatory local law.</p>
  </div>

  <!-- SECTION 16 -->
  <div class="tc-section" id="s16">
    <span class="section-num">Section 16</span>
    <h2>General</h2>
    <ul>
      <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between FlexiShift and each User regarding use of the Platform.</li>
      <li><strong>Severability:</strong> Invalid or unenforceable provisions will be modified to the minimum extent necessary; remaining provisions remain in full force.</li>
      <li><strong>Waiver:</strong> Failure to enforce any provision is not a waiver of the right to enforce it in future.</li>
      <li><strong>Assignment:</strong> FlexiShift may assign its rights and obligations to any successor entity. Users may not assign without prior written consent.</li>
      <li><strong>Language:</strong> These Terms are issued in English. Norwegian and Swedish translations are available on request. In the event of conflict, the English version prevails except where Applicable Law requires otherwise.</li>
      <li><strong>Notices:</strong> Formal notices to FlexiShift should be sent to the contact address published on the Platform.</li>
      <li><strong>Class Action Waiver:</strong> Users agree to bring claims solely in their individual capacity and not as part of any class action, representative action, collective action or similar proceeding to the fullest extent permitted by law.</li>
      <li><strong>Insurance:</strong> Drivers, Firms and Hauliers shall maintain all insurance required by law and industry practice, including motor insurance, goods-in-transit insurance, public liability insurance and any other insurance required for the services provided. FlexiShift does not verify the adequacy of insurance and accepts no liability arising from inadequate or lapsed insurance coverage.</li>
      <li><strong>Cooperation with Authorities:</strong> Users acknowledge that FlexiShift may cooperate fully with police, customs authorities, regulators, transport authorities, tax authorities, courts and governmental agencies and may provide information without prior notice where permitted or required by law.</li>
      <li><strong>Governing Law:</strong> Subject to Section 15 (Jurisdiction-Specific Provisions), these Terms shall be governed by and construed in accordance with the laws of England and Wales, and the courts of England and Wales shall have jurisdiction over disputes arising out of or relating to these Terms, the Platform or any Job. This is without prejudice to any mandatory consumer protections, local statutory rights, or jurisdictional entitlements available to Norwegian or Swedish Users under Section 15.</li>
    </ul>
  </div>

  <!-- SIGNING BLOCK -->
  <div class="signing-block">
    <p>By registering for or continuing to use the FlexiShift Platform, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions in their entirety.</p>
    <p class="footer-detail">AI Planning Ltd, trading as FlexiShift · Registered in England and Wales · Version 3.0 · May 2026 · UK • Norway • Sweden<br>These Terms are available in Norwegian and Swedish on request.</p>
  </div>

</div>
`;

export const tcNoHTML = `
<div class="page">

  <div class="doc-header">
    <div class="doc-header-inner">
      <div class="doc-badge">Juridisk dokument</div>
      <h1>Vilkår og betingelser for bruk</h1>
      <div class="doc-meta">
        <span class="doc-meta-item">Versjon 3.0</span>
        <span class="doc-meta-item">Gjelder fra: mai 2026</span>
        <span class="doc-meta-item">🇬🇧 Storbritannia</span>
        <span class="doc-meta-item">🇳🇴 Norge</span>
        <span class="doc-meta-item">🇸🇪 Sverige</span>
      </div>
      <div class="doc-notice">Ved å registrere deg eller bruke Plattformen i noen kapasitet, godtar du å være juridisk bundet av disse Vilkårene. Dersom du ikke godtar dem, må du ikke bruke Plattformen.</div>
    </div>
  </div>

  <div class="toc">
    <div class="toc-title">Innhold</div>
    <ul class="toc-list">
      <li><a href="#s1">1. Definisjoner</a></li>
      <li><a href="#s2">2. Aksept og kvalifikasjon</a></li>
      <li><a href="#s3">3. FlexiShifts rolle</a></li>
      <li><a href="#s4">4. Verifisering og identitet</a></li>
      <li><a href="#s5">5. Oppdragskontrakt</a></li>
      <li><a href="#s6">6. Forbudte og begrensede varer</a></li>
      <li><a href="#s7">7. Ansvarsfraskrivelser</a></li>
      <li><a href="#s8">8. Betalinger, gebyrer og skatt</a></li>
      <li><a href="#s9">9. Tvister og escrow</a></li>
      <li><a href="#s10">10. Personvern og data</a></li>
      <li><a href="#s11">11. Plattformregler</a></li>
      <li><a href="#s12">12. Plattformendringer</a></li>
      <li><a href="#s13">13. Immaterielle rettigheter</a></li>
      <li><a href="#s14">14. Ansvar og oppsigelse</a></li>
      <li><a href="#s15">15. Jurisdiksjonsspesifikke bestemmelser</a></li>
      <li><a href="#s16">16. Generelt</a></li>
    </ul>
  </div>

  <!-- § 1 -->
  <div class="tc-section" id="s1">
    <span class="section-num">Seksjon 1</span>
    <h2>Definisjoner</h2>
    <p>Nøkkelbegreper brukt i disse Vilkårene har følgende betydning:</p>
    <ul>
      <li><strong>«FlexiShift», «vi», «oss», «vår»</strong> – AI Planning Ltd, et selskap registrert i England og Wales, som driver virksomhet under navnet FlexiShift og er operatør av Plattformen.</li>
      <li><strong>«Plattformen»</strong> – FlexiShift-markedsplassen for logistikk, inkludert transportørenes nettapp, sjåførenes mobilapp, firmaportalen og all tilhørende programvare og infrastruktur.</li>
      <li><strong>«Bruker»</strong> – enhver Transportør, Sjåfør eller Firma som benytter Plattformen.</li>
      <li><strong>«Transportør»</strong> – en virksomhet eller enkeltperson som legger ut fraktoppdrag på Plattformen.</li>
      <li><strong>«Sjåfør»</strong> – en enkeltperson som utfører oppdrag via sjåførmobilappen.</li>
      <li><strong>«Firma»</strong> – en transportvirksomhet som administrerer kjøretøyparker og sjåfører på Plattformen.</li>
      <li><strong>«Leverandør»</strong> – enhver verifisert Sjåfør eller Firma som er kvalifisert til å akseptere oppdrag.</li>
      <li><strong>«Oppdrag»</strong> – en fraktoppgave lagt ut av en Transportør, tildelt en unik oppdragsreferanse-ID.</li>
      <li><strong>«Oppdragskontrakt»</strong> – den bindende avtalen som inngås mellom Transportøren og Leverandøren ved bestillingsbekreftelse, som inkorporerer Seksjon 5 nedenfor.</li>
      <li><strong>«Betalingstjenester»</strong> (i disse Vilkårene også omtalt som «escrow») – den sikre betalingsholdsfasiliteten som drives av Tredjeparts betalingsbehandler, hvor midler låses ved bestilling og frigjøres ved fullføring av et Oppdrag. Denne fasiliteten drives utelukkende av Tredjeparts betalingsbehandler og ikke av FlexiShift.</li>
      <li><strong>«Tredjeparts betalingsbehandler»</strong> – den spesialiserte betalingsleverandøren engasjert av FlexiShift for å håndtere alle finansielle transaksjoner.</li>
      <li><strong>«Samsvarsløype»</strong> – den obligatoriske tretrinnsarbeidsflyten: Lastekodebekreftelse, Dobbel digital overlevering og Leveringsbevis.</li>
      <li><strong>«Forbudte varer»</strong> – varer oppført i Seksjon 6 som ikke kan fraktes via Plattformen.</li>
      <li><strong>«Gjeldende lov»</strong> – lovgivningen i den jurisdiksjonen der Brukeren er etablert eller Oppdraget utføres, etter hva som er relevant.</li>
      <li><strong>«Transportør»</strong> (Carrier) – enhver person som inngår kontrakt om transport av gods og påtar seg ansvaret for slik transport.</li>
      <li><strong>«Uavhengig kontraktør»</strong> – en Sjåfør, Firma eller Transportør som opptrer på egne vegne og ikke som ansatt, arbeider, agent eller representant for FlexiShift.</li>
      <li><strong>«Håndhevingsmyndighet»</strong> – enhver politistyrke, tollmyndighet, tilsynsorgan, transportmyndighet, skattemyndighet, domstol, tribunal, sanksjonsmyndighet eller statlig organ.</li>
      <li><strong>«Plattformdata»</strong> – alle GPS-registreringer, revisjonslogger, meldinger, vurderinger, verifiseringsregistreringer, fotografier, videoer, oppdragshistorikk og alle tilhørende data.</li>
    </ul>
  </div>

  <!-- § 2 -->
  <div class="tc-section" id="s2">
    <span class="section-num">Seksjon 2</span>
    <h2>Aksept, kvalifikasjon og kontosikkerhet</h2>
    <p>Ved å bruke Plattformen bekrefter du at du er minst 18 år gammel, har rettslig handleevne til å inngå kontrakt, og (dersom du opptrer på vegne av et selskap) har fullmakt til å binde det selskapet. Du må overholde all Gjeldende lov og holde kontolegitimasjonen din konfidensiell. Varsle oss umiddelbart om enhver mistanke om uautorisert tilgang.</p>
  </div>

  <!-- § 3 -->
  <div class="tc-section" id="s3">
    <span class="section-num">Seksjon 3</span>
    <h2>FlexiShifts rolle – kun markedsplass</h2>
    <p>FlexiShift driver utelukkende en digital markedsplass og teknologiplattform. FlexiShift er ikke et transportselskap, speditør, fraktmegler, transportoperatør, logistikkleverandør, lageroperatør, varevokter, bemanningsbyrå, rekrutteringsbyrå, arbeidsformidler eller leverandør av transporttjenester.</p>
    <p>FlexiShift ansetter, engasjerer, overvåker, leder, kontrollerer, administrerer eller overvåker ikke Sjåfører, Firmaer eller Transportører og utøver ingen operasjonell kontroll over utførelsen av noe Oppdrag.</p>
    <p>Sjåfører, Firmaer og Transportører opptrer til enhver tid som uavhengige kontraktører.</p>
    <p>Ingenting i disse Vilkårene skaper noe ansettelsesforhold, arbeidsforhold, partnerskap, joint venture, agentforhold, tillitsforhold eller representasjonsforhold mellom FlexiShift og noen Bruker.</p>
    <p>Oppdrагskontrakten inngås utelukkende mellom Transportøren og Leverandøren. FlexiShift er ikke part i den avtalen og påtar seg intet ansvar for dens gjennomføring.</p>

    <h3>3.1 Lokale introduktører og markedsføringspartnere</h3>
    <p>I enkelte jurisdiksjoner, inkludert Sverige, samarbeider FlexiShift med uavhengige lokale markedsførings- og henvisningspartnere som introduserer potensielle Sjåfører, Firmaer og Transportører til Plattformen. Enhver slik partner opptrer som en uavhengig virksomhet i egen rett og er ikke ansatt, arbeider, partner, deltaker i et joint venture, agent eller representant for FlexiShift eller AI Planning Ltd. Ingen slik partner har fullmakt til å inngå, utføre, endre, tolke eller binde FlexiShift eller AI Planning Ltd til noen kontrakt, inkludert noen Oppdragskontrakt eller disse Vilkårene. Enhver Oppdragskontrakt, og ethvert Brukerforhold til FlexiShift, inngås direkte og utelukkende med AI Planning Ltd. Introduksjon til Plattformen via en lokal partner gjør ikke denne partneren til part i, eller garantist for, noen avtale mellom en Bruker og FlexiShift.</p>
  </div>

  <!-- § 4 -->
  <div class="tc-section" id="s4">
    <span class="section-num">Seksjon 4</span>
    <h2>Verifisering, identitetskontroll og svindelforebygging</h2>
    <p>Alle Leverandører må gjennomføre obligatorisk verifisering før de aksepterer noe Oppdrag. Påkrevde dokumenter inkluderer:</p>
    <ul>
      <li>Førerkort (Sjåfører); Kjøretøyregistrering; gjeldende forsikringsdokument.</li>
      <li>Selskapsregistrering og flåteforsikringspolise (Firmaer).</li>
      <li>Eventuell annen dokumentasjon som kreves lokalt.</li>
    </ul>
    <p>FlexiShift kan til enhver tid gjennomføre KYC- (identitet), KYB- (virksomhet), sanksjonsscreening, svindelforebygging og hvitvaskingskontroller. Vi forbeholder oss retten til å suspendere eller si opp kontoer uten forhåndsvarsel der en Bruker ikke består verifisering, er oppført på en sanksjonsliste, eller der vi har rimelig grunn til å mistenke sviksom, hvitvasking eller kriminell aktivitet. Vi kan rapportere bekymringer til relevante myndigheter uten å varsle Brukeren. Duplikate e-postregistreringer blokkeres automatisk.</p>
    <p>Verifiseringskontroller gjennomføres utelukkende for administrative formål. Verifisering utgjør ingen erklæring, garanti eller sertifisering fra FlexiShift vedrørende en Brukers identitet, kompetanse, egnethet, lovlighet, kvalifikasjoner, erfaring, forsikringsdekning, egnethet eller løpende etterlevelse. Brukere må gjennomføre sin egen uavhengige aktsomhetsvurdering og må ikke stole på noen verifisering utført av FlexiShift.</p>

    <h3>4.1 Sjåførens kjøredyktighet og juridiske kjørerettighet</h3>
    <p>Ved å akseptere et Oppdrag på Plattformen bekrefter, erklærer og garanterer en Sjåfør at de, på tidspunktet for aksept og gjennom hele utførelsen av Oppdraget:</p>
    <ul>
      <li>Har et gyldig førerkort av riktig kategori for kjøretøyet, jurisdiksjonen og lasttypen som kreves</li>
      <li>Ikke er underlagt kjøreforbud, tilbakekalling av førerkortet eller rettslig pålegg som begrenser deres kjørerett</li>
      <li>Ikke har akkumulert prikker, anmerkninger eller andre sanksjoner som gjør dem juridisk uberettiget eller uegnet til å kjøre i henhold til Gjeldende lov</li>
      <li>Ikke er diskvalifisert fra å kjøre av noen regulatorisk, administrativ eller rettslig myndighet i noen jurisdiksjon der de opererer</li>
      <li>Er fysisk, medisinsk og mentalt skikket til å utføre Oppdraget og betjene det aktuelle kjøretøyet og utstyret på en trygg måte</li>
      <li>Besitter den erfaringen, de ferdighetene, kvalifikasjonene, opplæringen, sertifiseringene og kompetansen som med rimelighet kreves for det spesifikke Oppdraget</li>
      <li>Innehar alle spesialiserte lisenser, sertifikater, tillatelser og akkrediteringer som kreves for Oppdraget, inkludert men ikke begrenset til ADR-sertifisering, Yrkessjåfør CPC, truck, løfteutstyr, tank, unormalt lass eller annen bransjesspesifikk kvalifikasjon som kreves av lov, kunden eller Transportøren</li>
      <li>For øvrig er egnet og i stand til å utføre Oppdraget trygt, kompetent og i samsvar med all Gjeldende lov, reguleringer, bransjestandarder og anleggsspesifikke krav</li>
    </ul>
    <p>Sjåføren erkjenner at de er eneansvarlige for å avgjøre om de er skikket, kompetente og juridisk berettiget til å påta seg et Oppdrag før de aksepterer det. Aksept av et Oppdrag utgjør Sjåførens bekreftelse på at de oppfyller alle krav som gjelder for det aktuelle Oppdraget.</p>
    <p>Sjåføren erklærer og garanterer videre at de ikke er påvirket av alkohol, narkotika, medisiner, tretthet, sykdom eller annen tilstand som kan svekke deres evne til å utføre Oppdraget på en trygg måte.</p>
    <p>FlexiShift og Transportøren forbeholder seg retten til å suspendere enhver Sjåfør der svekkelse, sikkerhetshensyn eller regulatoriske bekymringer med rimelighet mistenkes.</p>
    <p>Dersom en Sjåfør til enhver tid mottar prikkbelastning, blir underlagt kjøreforbud, får førerkortet tilbakekalt, suspendert eller hemmet på noen måte, eller blir medisinsk uskikket eller svekket til å utføre jobben på en trygg måte, må de: (i) umiddelbart varsle FlexiShift ved å kontakte support via Plattformen; (ii) oppdatere profilen sin for å gjenspeile utilgjengelighet; (iii) avslå ethvert Oppdrag eller vakttilbud inntil kjøreretten er fullt gjenopprettet; og (iv) opphøre med å utføre berørte Oppdrag. En Sjåfør som aksepterer eller fortsetter et Oppdrag mens de er juridisk forbudt fra å kjøre, er i vesentlig mislighold av disse Vilkårene og kan umiddelbart suspenderes, rapporteres til relevante myndigheter og holdes ansvarlig for alle resulterende tap.</p>
    <p>FlexiShift gjennomfører nettbaserte verifiseringskontroller av Sjåførdokumenter kun ved registreringstidspunktet. Slike kontroller utføres i god tro basert på informasjon og dokumenter innsendt av Sjåføren og utgjør ikke en garanti for Sjåførens løpende juridiske kjørerettighet. Sjåføren bærer eneansvar for å sikre at de til enhver tid oppfyller alle gjeldende krav for det valgte Oppdraget.</p>

    <h3>4.2 Transportørens plikt til fysisk å verifisere sjåførens legitimasjon</h3>
    <p>FlexiShift utfører kun nettbasert dokumentverifisering på tidspunktet for Sjåførregistrering. Slike kontroller er ikke en erstatning for fysisk inspeksjon av Sjøfyrens legitimasjon ved engasjementstidspunktet. Før en Sjåfør tillates å starte et oppdrag, få tilgang til et anlegg, betjene utstyr eller ta hånd om gods eller kjøretøy, er Transportøren (eller deres autoriserte representant) eneansvarlig for fysisk å inspisere og verifisere:</p>
    <ul>
      <li>Sjåførens originale førerkort, og bekrefte at det er gyldig, ikke utgått og av riktig kategori for kjøretøyet og lasten</li>
      <li>Eventuelle spesialsertifiseringer som kreves for det spesifikke Oppdraget (inkludert men ikke begrenset til ADR-sertifisering for farlig gods, CPC-kvalifikasjon, truck- eller spesialutstyrssertifikater og lokalt påkrevde tillatelser)</li>
      <li>Sjåførens identitet mot førerkortet og Plattformprofilen</li>
      <li>Vurdering av om Sjåføren besitter erfaringen, kompetansen, opplæringen og evnen som med rimelighet kreves for å gjennomføre det spesifikke Oppdraget trygt og effektivt</li>
      <li>Forsikre seg om at Sjåføren ser ut til å være tjenesteskikket og ikke er synlig svekket, trett, påvirket eller på annen måte uegnet til å utføre Oppdraget</li>
      <li>Sikre at alle gjeldende juridiske, regulatoriske, kontraktsmessige, forsikringsmessige, kunde-, anleggs- og helse- og sikkerhetskrav er oppfylt før Oppdraget starter</li>
      <li>Gjennomføre nødvendig anleggsintroduksjon, sikkerhetsbriefing, driftsinstruksjoner, risikovurderinger og instruksjoner</li>
      <li>Nekte tilgang til enhver Sjåfør som Transportøren med rimelighet mener ikke oppfyller Oppdragets krav eller utgjør en sikkerhets-, juridisk-, operasjonell eller samsvarsrisiko</li>
    </ul>
    <p>Transportøren erkjenner og godtar at de beholder eneansvar for den operasjonelle ledelsen, tilsynet og kontrollen av alle Sjåfører som er engasjert gjennom Plattformen fra det øyeblikk de møter opp på Oppdragsstedet og gjennom hele utførelsen av Oppdraget.</p>
    <div class="warn-box">FlexiShift skal ikke ha noe ansvar for tap, skade, personskade, forsinkelse, regulatorisk brudd, samsvarssvikt, kjøretøyskade, lastebortfall, personskade, død, bøter, straffer, krav eller kostnader som oppstår fra: (i) Transportørens manglende gjennomføring av hensiktsmessig verifisering, inspeksjon eller egnethetsanalyse; (ii) Transportørens beslutning om å engasjere, tillate eller fortsette å bruke en Sjåfør; (iii) unøyaktig, ufullstendig eller sviksom informasjon gitt av en Sjåfør; eller (iv) handlinger, unnlatelser, uaktsomhet, mislighold eller lovbrudd fra en Sjåfør.</div>
    <p>Transportøren påtar seg alle risikoer forbundet med å tillate en Sjåfør å utføre et Oppdrag og skal holde FlexiShift, dets ledere, direktører, ansatte og tilknyttede selskaper skadesløse fra og mot alle krav, handlinger, tap, forpliktelser, skader, straffer, kostnader og utgifter (inkludert rimelige advokatgebyrer) som oppstår fra Transportørens manglende overholdelse av sine forpliktelser i henhold til denne klausulen.</p>
    <p>Transportøren skal anses som transportoperatøren med operasjonell kontroll over Oppdraget og er eneansvarlig for overholdelse av all gjeldende transportlovgivning, krav til kjøretid, takografregler, arbeidstidskrav, helse- og sikkerhetsforpliktelser og kundekontraktsmessige forpliktelser.</p>
  </div>

  <!-- § 5 -->
  <div class="tc-section" id="s5">
    <span class="section-num">Seksjon 5</span>
    <h2>Oppdragskontraktvilkår (innlemmet i hver bestilling)</h2>
    <p>Disse vilkårene gjelder mellom Transportøren og Leverandøren for hvert Oppdrag med mindre annet er uttrykkelig avtalt skriftlig. FlexiShift er ikke part i noen Oppdragskontrakt.</p>
    <p>Oppdraskontrakten eksisterer utelukkende mellom Transportøren og Leverandøren. FlexiShift er ikke part i, begunstiget av, garantist for eller administrator av noen Oppdragskontrakt.</p>

    <h3>5.1 Lasting, lossing og varekontroll</h3>
    <p>Med mindre annet er avtalt: Transportørens avsender er ansvarlig for lasting; Sjåføren er ansvarlig for lossing. Spesialutstyrskrav (bakgaffellift, pallestrekker osv.) må oppgis ved oppretting av Oppdrag. Ved henting må Sjåføren verifisere og registrere mengde, ekstern emballasjekondisjon og eventuell spesialhåndtering. Sjåfører er ikke pålagt å åpne forseglet emballasje og bærer intet ansvar for udeklarert innhold. Eventuelle avvik må registreres i appen ved overleveringstidspunktet.</p>

    <h3>5.2 Risikoovergang</h3>
    <p>FlexiShift er ikke ansvarlig for å fastsette, fordele, overvåke eller håndheve risikoen for gods transportert gjennom Plattformen. Risikofordeling er utelukkende et anliggende mellom Transportøren og Leverandøren.</p>

    <h3>5.3 Omdisponeringer og ufullstendige oppdrag</h3>
    <p>Omdisponering krever gjensidig skriftlig avtale via Plattformen. Dersom en Leverandør påbegynner men ikke kan fullføre et Oppdrag, må de umiddelbart varsle Transportøren via Plattformen. Betaling avgjøres av tvisteutfallet under Seksjon 10. FlexiShift aksepterer intet finansielt ansvar for ufullstendige oppdrag.</p>

    <h3>5.4 Leveringsbevis og tvistebevis</h3>
    <p>Gyldig Leveringsbevis krever: et tydelig bilde av godset på leveringsstedet; mottakerens digitale signatur; og Plattform-registrert tidsstempel og geolokasjon. I enhver tvist vurderes bevis i denne prioritetsrekkefølgen: (1) Samsvarsløyperegistreringer; (2) GPS/telematikkdata; (3) tidsstemplede appbilder og signaturer; (4) Plattformmeldingslogger; (5) tredjepartsdokumenter; (6) vitneutsagn.</p>
  </div>

  <!-- § 6 -->
  <div class="tc-section" id="s6">
    <span class="section-num">Seksjon 6</span>
    <h2>Forbudte og begrensede varer</h2>
    <div class="warn-box">Å legge ut eller transportere Forbudte varer kan resultere i umiddelbar kontosuspensjon og anmeldelse til myndighetene. Leverandører kan avslå enhver last de med rimelighet mistenker å være forbudt, uten straff.</div>

    <h3>6.1 Absolutt forbudt (ingen unntak)</h3>
    <ul>
      <li>Ulovlige varer, stjålet eiendom eller varer involvert i kriminell aktivitet</li>
      <li>Skytevåpen, våpen, ammunisjon eller sprengstoff (lisensiert eller ikke)</li>
      <li>Kontrollerte stoffer og narkotika</li>
      <li>Kontanter, ihendehaverinstrumenter eller høyverdige omsettelige instrumenter</li>
      <li>Varer underlagt internasjonale sanksjoner eller embargoer</li>
      <li>Kategori A/B smittestoffer; uautoriserte menneskelige levninger eller biologisk materiale</li>
    </ul>

    <h3>6.2 Begrenset – krever full forhåndsdeklarering og Leverandøraksept</h3>
    <ul>
      <li>Farlig gods (ADR / gjeldende nasjonale forskrifter): brannfarlig, etsende, giftig, oksiderende eller radioaktivt</li>
      <li>Temperaturkontrollert eller kaldkjedegods</li>
      <li>Husdyr eller levende dyr</li>
      <li>Alkohol og tobakk underlagt lisens- eller avgiftskrav</li>
      <li>Oversized eller overvektige laster som krever tillatelse eller eskortekjøretøy</li>
      <li>Avfall eller miljøregulert materiale</li>
      <li>Høyverdige eller skjøre varer med deklarert verdi over £10 000 / NOK 130 000 / SEK 140 000 per forsendelse</li>
      <li>Farmasøytiske produkter, temperaturkontrollerte medisiner eller medisinsk utstyr</li>
    </ul>
    <p>Transportøren er eneansvarlig for nøyaktig varedeklarering. FlexiShift inspiserer ikke gods og aksepterer intet ansvar for tap, regulatoriske tiltak eller strafferettslige skritt som oppstår fra udeklarerte eller feilbeskrevne laster.</p>
  </div>

  <!-- § 7 -->
  <div class="tc-section" id="s7">
    <span class="section-num">Seksjon 7</span>
    <h2>Ansvarsfraskrivelser – kjøretøy, gods, tyveri og cybersikkerhet</h2>

    <h3>7.1 Kjøretøyskade</h3>
    <p>FlexiShift fraskriver seg alt ansvar for tap, skade eller ødeleggelse av kjøretøy brukt i forbindelse med et Oppdrag, uansett årsak. Alle Sjåfører og Firmaer må til enhver tid ha gyldig yrkesskadeforsikring (som dekker tredjepartsansvar, gods under transport og kjøretøyskade). Alle Transportører må ha tilstrekkelig næringslivsforsikring for sine fraktaktiviteter.</p>

    <h3>7.2 Tyveri, produkttap og sjåførmislighold</h3>
    <p>FlexiShift fraskriver seg alt ansvar for tyveri, underslag, omgjøring eller feillevering av gods av Sjåfør, Firma-ansatt eller underleverandør. Sjåfører og Firmaer er uavhengige kontraktører; FlexiShift bærer intet stedfortredende ansvar for deres atferd. Krav må rettes til den relevante Leverandøren eller deres forsikringsselskap.</p>
    <p>For ordens skyld fraskriver FlexiShift seg alt ansvar for: (a) tyveri av, fra eller i forbindelse med forsendelse, last, eller gods transportert under et Oppdrag; (b) tyveri av eller fra kjøretøy brukt i forbindelse med et Oppdrag; (c) skade på gods, uansett årsak; og (d) skade på kjøretøy, utstyr eller eiendom oppstått i forbindelse med et Oppdrag. FlexiShift er utelukkende en introduksjons- og teknologiplattform. Alle krav som oppstår fra tyveri, tap eller skade må rettes direkte til Sjåføren, Firmaet eller deres respektive forsikringsselskaper.</p>

    <h3>7.3 Cybersikkerhet og force majeure</h3>
    <p>FlexiShift implementerer forholdsmessige sikkerhetstiltak, men garanterer ikke at Plattformen vil være fri for cyberangrep, hacking, skadelig programvare eller datainnbrudd. FlexiShift er ikke ansvarlig for tap som oppstår fra tredjeparts cyberangrep, nettverksfeil eller force majeure-hendelser (inkludert naturkatastrofer eller regjeringens handlinger). Siden betalingsdata håndteres utelukkende av Tredjeparts betalingsbehandler, aksepterer FlexiShift intet ansvar for kompromittering av betalingsinformasjon på det nivået.</p>

    <h3>7.4 ETA, kart og rutedata</h3>
    <p>ETA-beregninger, GPS-sporing, ruteforslag og avviksvarslinger er verktøy og estimater – ikke garantier. Kartdata er hentet fra tredjepartsleverandører. FlexiShift aksepterer intet ansvar for unøyaktigheter i matchingsresultater, ETA-estimater, GPS-data eller navigasjonsinformasjon.</p>

    <h3>7.5 Følgetap</h3>
    <p>FlexiShift skal ikke holdes ansvarlig for tap av fortjeneste, inntekter, forretningsmuligheter, kontrakter, goodwill, forventede besparelser, forsyningskjedeavbrudd, driftsavbrudd, omdømmeskade eller følgeskader. FlexiShift har ingen plikt til å etterforske tyveri, gjenvinne gods, lokalisere enkeltpersoner, håndheve krav eller delta i gjenopprettingstiltak.</p>
  </div>

  <!-- § 8 -->
  <div class="tc-section" id="s8">
    <span class="section-num">Seksjon 8</span>
    <h2>Betalinger, gebyrer, skatt og fakturering</h2>
    <p>Alle transaksjoner behandles utelukkende av Tredjeparts betalingsbehandler. FlexiShift lagrer eller håndterer ikke betalingskort- eller banklegitimasjon. Betalingstjenester låses ved bestilling og frigjøres til Leverandøren ved Transportørens godkjenning av Leveringsbeviset.</p>
    <ul>
      <li>Plattformprovisjon og servicegebyrer er som publisert i Plattformens gebyrplan og er oppgitt eksklusive gjeldende merverdiavgift.</li>
      <li>Plattformgebyrer er betalbare, og ikke-refunderbare, så snart en tur eller vakt har startet, uavhengig av tvister eller utfall.</li>
      <li>Merverdiavgift gjelder som følger: MVA (Storbritannia), MVA/merverdiavgift (Norge) og MOMS/mervärdesskatt (Sverige), hver til gjeldende sats i den aktuelle jurisdiksjonen.</li>
      <li>Hver Bruker er eneansvarlig for egen skatteoverholdelse, inkludert registrering, rapportering og betaling av gjeldende skatter på inntekt opptjent eller tjenester mottatt gjennom Plattformen.</li>
      <li>Automatiserte fakturaer generert av Plattformen er kun gitt for informasjonsformål. FlexiShift opptrer ikke som MVA-agent, skatteagent eller skatteombud for noen Bruker.</li>
      <li>Plattformprovisjon er ikke-refunderbar ved kansellering etter at transporten er påbegynt og ved omstridte oppdrag der FlexiShift ikke er ansvarlig.</li>
      <li>Tilbakebetalinger eller betalingsreversaler initiert av en Transportør er Transportørens eneansvar. FlexiShift kan inndrive tilbakebetalingsbeløp via motregning mot fremtidige escrow-utbetalinger.</li>
      <li>Alle Sjåfører og Transportører er eneansvarlige for å registrere seg for, samle inn, rapportere og innbetale MVA (eller tilsvarende merverdiavgift) i sin aktuelle jurisdiksjon. FlexiShift samler ikke inn, innbetaler eller regnskapsføres MVA på vegne av noen Sjåfør eller Transportør.</li>
      <li>Alle Sjåfører og Transportører må være lovlig registrert for drift i sin aktuelle jurisdiksjon. Dette inkluderer, uten begrensning: inneha gyldig virksomhetsregistrering eller selvstendig næringsdrivendes status; alle lisenser, tillatelser og autorisasjoner som kreves; og overholde all gjeldende arbeidslivs-, skatte- og transportlovgivning.</li>
    </ul>
    <p>Alle betalingstjenester, inkludert Betalingstjenestene (escrow) beskrevet i disse Vilkårene, ytes av Tredjeparts betalingsbehandler. FlexiShift opptrer ikke selv som en regulert betalingsinstitusjon, bank eller pengeoverføringsforetak, og har på intet tidspunkt selv rådighet over eller besittelse av Brukeres midler. FlexiShift har intet ansvar for prosessorfeil, prosessorinsolvens, forsinkede betalinger, tilbakebetalinger, svindel eller prosessorfeil.</p>
  </div>

  <!-- § 9 -->
  <div class="tc-section" id="s9">
    <span class="section-num">Seksjon 9</span>
    <h2>Tvister og escrow-frigjøring</h2>
    <ul>
      <li>FlexiShift har ingen plikt til å etterforske, mekle, megle, avgjøre eller løse tvister mellom Brukere. Eventuell bistand fra FlexiShift er frivillig, skjønnsmessig og gitt utelukkende som en kundeservicetjeneste.</li>
      <li>FlexiShift kan trekke utestående plattformgebyrer, provisjon eller avbestillingsgebyrer fra escrow før frigjøring der dette er aktuelt.</li>
      <li>FlexiShift aksepterer intet finansielt ansvar i forbindelse med tvister mellom Brukere. FlexiShifts involvering er kun en administrativ bekvemmelighet og utgjør ikke en juridisk eller voldgiftskjennelse.</li>
      <li>Uløste tvister kan henvises til domstol, uavhengig voldgift, det relevante forsikringsselskapet eller Tredjeparts betalingsbehandlers egne prosedyrer. FlexiShift vil gi tilgang til Plattformbevisregistreringer etter mottak av en gyldig juridisk anmodning.</li>
    </ul>
  </div>

  <!-- § 10 -->
  <div class="tc-section" id="s10">
    <span class="section-num">Seksjon 10</span>
    <h2>Personvern, GPS-sporing og databehandling</h2>
    <p>FlexiShift behandler personopplysninger i samsvar med sin Personvernpolicy (tilgjengelig på Plattformen og innlemmet ved referanse). Ved å bruke Plattformen samtykker Brukere til databehandling som beskrevet der.</p>

    <h3>10.1 Status som behandlingsansvarlig</h3>
    <p>FlexiShift, Sjåfører, Firmaer og Transportører opptrer som uavhengige behandlingsansvarlige i forbindelse med personopplysninger behandlet for egne forretningsformål, med mindre annet er påkrevd av loven.</p>

    <h3>10.2 Deling av sjåførdata</h3>
    <p>Sjåfører autoriserer uttrykkelig FlexiShift til å dele relevant informasjon med den aktuelle Transportøren, inkludert identitetsinformasjon, førerkortsstatus, kvalifikasjoner, sertifiseringer, kjøretøyinformasjon, vurderinger, GPS-plassering og samsvarsregistreringer som er nødvendige for utførelsen av Oppdraget.</p>

    <h3>10.3 Politisamarbeid og svindelforebygging</h3>
    <p>FlexiShift kan overvåke, bevare, bruke og utlevere brukerinformasjon, Plattformdata, identitetsregistreringer, kommunikasjon, GPS-registreringer, verifiseringsdokumenter, transaksjonsregistreringer, fotografier, videoer og samsvarsdata der FlexiShift med rimelighet anser slik utlevering nødvendig for å: (a) overholde juridiske forpliktelser; (b) svare på anmodninger fra domstoler, regulatorer eller håndhevingsmyndigheter; (c) etterforske mistanke om svindel, tyveri, kriminell aktivitet, hvitvasking, sanksjonsbrudd eller trusler mot sikkerheten; (d) beskytte FlexiShift, Brukere eller tredjeparter; eller (e) etablere, utøve eller forsvare juridiske krav.</p>

    <h3>10.4 Oppbevaring</h3>
    <p>Data kan oppbevares så lenge det er rimelig nødvendig for juridiske, regulatoriske, operasjonelle, svindelforebyggings-, forsikrings-, tvisteløsnings- og samsvarsformål etter FlexiShifts eget skjønn.</p>

    <h3>10.5 Sanntids- og andre data</h3>
    <ul>
      <li>Sjåfører samtykker til sanntids GPS-lokasjonssporing under aktive Oppdrag. Lokasjonsdata deles med den relevante Transportøren og Firmaet i sanntid og kan oppbevares i henhold til Seksjon 10.4.</li>
      <li>GPS-data kan deles med forsikringsselskaper, håndhevingsmyndigheter eller voldgiftsdommere på anmodning.</li>
      <li>Sjåfører må ikke deaktivere GPS eller lokasjonstjenester under et aktivt Oppdrag. Bevisst deaktivering kan resultere i kontotiltak.</li>
      <li>Brukere kan utøve sine datarettigheter (innsyn, retting, sletting, portabilitet, innsigelse) som angitt i Personvernpolicyen og i samsvar med Gjeldende lov.</li>
    </ul>
  </div>

  <!-- § 11 -->
  <div class="tc-section" id="s11">
    <span class="section-num">Seksjon 11</span>
    <h2>Plattformregler – vurderinger, anmeldelser og sjåførappen</h2>

    <h3>11.1 Vurderinger og anmeldelser</h3>
    <ul>
      <li>Én vurdering per fullført Oppdrag per motpart. Vurderinger må være ærlige og basert på genuine erfaringer fra det spesifikke Oppdraget.</li>
      <li>Anmeldelser må ikke være ærekrenkende, fornærmende, diskriminerende, falske, manipulerte eller incentiviserte.</li>
      <li>FlexiShift kan fjerne eller avslå å publisere enhver anmeldelse etter eget skjønn og aksepterer intet ansvar for unøyaktige anmeldelser.</li>
      <li>Vurderinger mater inn i den smarte matchingsmotoren og påvirker Leverandørens synlighet, oppdragskvalifikasjon og fortsatt plattformtilgang.</li>
      <li>Å avslå et utsendt Oppdrag påvirker ikke Leverandørens vurdering og skal ikke i seg selv føre til redusert synlighet, reduserte oppdragstilbud, nedprioritering i den smarte matchingsmotoren eller noen annen form for straff. Vurderinger baseres utelukkende på Leverandørens opptreden under fullførte Oppdrag.</li>
      <li>Anmeldelser, vurderinger og brukergenerert innhold forblir forfatterens ansvar. Brukere gir FlexiShift en verdensomspennende, royaltyfri, evig lisens til å bruke, vise, analysere og publisere vurderinger, anmeldelser og tilbakemeldinger.</li>
    </ul>

    <h3>11.2 Sjåførappen – enhet og trygg bruk</h3>
    <ul>
      <li>Sjåførappen krever: GPS/lokasjon (alltid aktiv under aktive Oppdrag); kamera; push-varsler; og lagring. Deaktivering av påkrevde tillatelser under et Oppdrag kan svekke funksjonaliteten og utgjøre et brudd.</li>
      <li>Sjåfører må ikke samhandle med appen på en måte som er utrygg eller ulovlig under kjøring. All aktiv app-samhandling under transport må kun utføres når kjøretøyet er trygt stasjonært.</li>
      <li>Sjåfører er ansvarlige for å sikre at enheten er ladet og tilkoblet gjennom hele et Oppdrag. FlexiShift aksepterer intet ansvar for feil forårsaket av enhetsproblemer, batteri eller dårlig tilkobling.</li>
      <li>Programvareoppdateringer må installeres umiddelbart. FlexiShift aksepterer intet ansvar for feil som oppstår fra utdaterte appversjoner.</li>
    </ul>

    <h3>11.3 Direkte engasjement og omgåelse</h3>
    <p>Der en Sjåfør eller et Firma er introdusert til en Transportør gjennom Plattformen, skal Transportøren ikke bevisst omgå Plattformen ved å direkte engasjere den Sjåføren eller Firmaet for vesentlig lignende tjenester utenfor Plattformen i en periode på tolv (12) uker etter det siste Oppdraget, med mindre Transportøren har innhentet FlexiShifts skriftlige forhåndssamtykke eller betalt gjeldende direkte engasjementsgebyr.</p>
    <p>Ingenting i denne klausulen skaper eksklusivitet, begrenser en Sjåførs eller Firmas evne til å arbeide for andre kunder eller konkurrerende plattformer, eller gir FlexiShift noen rett til å lede, overvåke eller kontrollere hvordan tjenester utføres.</p>
  </div>

  <!-- § 12 -->
  <div class="tc-section" id="s12">
    <span class="section-num">Seksjon 12</span>
    <h2>Plattformendringer og tjenesteleverandører</h2>
    <p>FlexiShift forbeholder seg retten til når som helst å modifisere, forbedre, avvikle eller erstatte funksjoner; endre eller avslutte tjenesteleverandører (inkludert Tredjeparts betalingsbehandler); og oppdatere priser eller provisjonsstrukturer med rimelig varsel. Vesentlige endringer i disse Vilkårene vil bli varslet via e-post eller in-plattform-varsling; fortsatt bruk utgjør aksept. FlexiShift kan suspendere, begrense eller avvikle Plattformen eller enhver funksjon når som helst og av enhver grunn uten ansvar.</p>
  </div>

  <!-- § 13 -->
  <div class="tc-section" id="s13">
    <span class="section-num">Seksjon 13</span>
    <h2>Immaterielle rettigheter</h2>
    <p>All immateriell eiendom i Plattformen (programvare, design, algoritmer, merkevarebygging, varemerker og innhold) eies av eller er lisensiert til AI Planning Ltd UK. Brukere mottar en begrenset, ikke-eksklusiv, ikke-overførbar lisens til å bruke Plattformen kun for dens tiltenkte formål. Brukere kan ikke kopiere, revers-engineere, modifisere eller distribuere noen Plattformelement uten forhåndssamtykke.</p>
    <p>Alle plattformalgoritmer, maskinlæringsmodeller, poengsettingssystemer, analyseresultater, ytelsesmålinger, avledede data og plattformintelligens tilhører utelukkende FlexiShift.</p>
  </div>

  <!-- § 14 -->
  <div class="tc-section" id="s14">
    <span class="section-num">Seksjon 14</span>
    <h2>Ansvarsbegrensning, erstatning og oppsigelse</h2>

    <h3>14.1 Ansvarsbegrensning</h3>
    <p>I den grad Gjeldende lov tillater det, er FlexiShifts samlede ansvar overfor enhver Bruker begrenset til det laveste av det totale plattformgebyrene betalt av den Brukeren i de tre månedene forut for det relevante kravet eller £1 000 (ett tusen GBP). FlexiShift er ikke ansvarlig for indirekte, følge-, tilfeldige, særlige eller pønale tap, inkludert tap av fortjeneste, inntekter, data eller goodwill. Denne begrensningen gjelder uavhengig av årsaksgrunnlaget, enten i kontrakt, erstatning (inkludert uaktsomhet), lovfestet plikt, villedning eller på annen måte.</p>

    <h3>14.2 Brukergaranti</h3>
    <p>Hver Bruker holde FlexiShift, dets direktører, ledere og tilknyttede selskaper skadesløse mot alle krav, tap, straffer og kostnader (inkludert advokatgebyrer) som oppstår fra: brudd på disse Vilkårene; brudd på Gjeldende lov; handlinger eller unnlatelser i forbindelse med ethvert Oppdrag; tredjeparts krav for gods som er tapt, stjålet eller skadet i forbindelse med et Oppdrag; manglende opprettholdelse av tilstrekkelig forsikring; utlegging eller transport av Forbudte varer; ansettelseskrav; arbeidstakerstatuskrav; skattekrav; MVA-krav; tollkrav; sanksjonskrav; regulatoriske krav; lastekrav; personvernkrav; og tredjeparts krav som oppstår fra bruk av Plattformen.</p>

    <h3>14.3 Suspensjon og oppsigelse</h3>
    <p>FlexiShift kan suspendere eller si opp enhver konto uten forhåndsvarsel for: brudd på disse Vilkårene; falsk eller villedende informasjon; ulovlig eller skadelig atferd; utløpt forsikring eller verifiseringsdokumenter; manglende bestå KYC/KYB/sanksjonskontroller; eller som påkrevd av lov eller rettslig pålegg.</p>

    <h3>14.4 Fraskrivelse av garantier</h3>
    <p>I den grad Gjeldende lov tillater det, tilbys Plattformen og alle tjenester, innhold, data, informasjon, programvare, funksjonalitet og funksjoner gjort tilgjengelig av FlexiShift på et «som den er», «som tilgjengelig» og «med alle feil»-grunnlag. FlexiShift gir ingen erklæring, garanti, forpliktelse eller forsikring, verken uttrykkelig, underforstått, lovfestet eller på annen måte, vedrørende tilgjengeligheten, påliteligheten, ytelsen, nøyaktigheten eller egnetheten til Plattformen eller noen Bruker, Oppdrag, gods eller informasjon vist gjennom Plattformen.</p>
  </div>

  <!-- § 16 -->
  <!-- § 15 -->
  <div class="tc-section" id="s15">
    <span class="section-num">Seksjon 15</span>
    <h2>Jurisdiksjonsspesifikke bestemmelser</h2>

    <h3>15.1 Storbritannia</h3>
    <p>For Brukere etablert i Storbritannia er disse Vilkårene og Oppdragskontrakten underlagt lovgivningen i England og Wales. Der en Bruker anses som forbruker, gjelder ufravikelige beskyttelser under Consumer Rights Act 2015 og relatert britisk forbrukerlovgivning, og disse fravikes ikke av disse Vilkårene. Databehandling skjer i samsvar med UK GDPR og Data Protection Act 2018.</p>

    <h3>15.2 Norge</h3>
    <p>For Brukere etablert i Norge begrenser ingenting i disse Vilkårene den beskyttelsen en Bruker har krav på under ufravikelige bestemmelser i norsk rett som ikke kan fravikes ved avtale, herunder avtaleloven og, der Brukeren anses som forbruker, forbrukerkjøpsloven. Databehandling skjer i samsvar med personopplysningsloven, som gjennomfører EØS-GDPR. Tvister som involverer en norsk forbruker og som ikke kan løses direkte, kan henvises til Forbrukertilsynet eller Forbrukerklageutvalget der dette er relevant, i tillegg til domstolene i Oslo.</p>

    <h3>15.3 Sverige</h3>
    <p>For Brukere etablert i Sverige begrenser ingenting i disse Vilkårene den beskyttelsen en Bruker har krav på under ufravikelige bestemmelser i svensk rett som ikke kan fravikes ved avtale, herunder avtalslagen og, der Brukeren anses som forbruker, konsumentköplagen. Databehandling skjer i samsvar med den svenske personopplysningsloven og EØS-GDPR under tilsyn av Integritetsskyddsmyndigheten (IMY). Tvister som involverer en svensk forbruker og som ikke kan løses direkte, kan henvises til Allmänna Reklamationsnämnden (ARN) der dette er relevant, i tillegg til domstolene i Stockholm.</p>

    <h3>15.4 Grensekryssende oppdrag</h3>
    <p>Der et Oppdrag omfatter henting og levering på tvers av mer enn én jurisdiksjon omfattet av disse Vilkårene, gjelder ufravikelig lovgivning i hver relevante jurisdiksjon i den utstrekning den ikke kan fravikes. For grensekryssende veifrakt kan CMR-konvensjonen (konvensjonen om fraktavtaler ved internasjonal godsbefordring på vei) komme til anvendelse, og Transportører og Leverandører er selv ansvarlige for overholdelse. ADR-regelverket gjelder for transport av farlig gods i alle tre jurisdiksjoner.</p>

    <h3>15.5 Rangorden</h3>
    <p>Der en bestemmelse i denne Seksjon 15 er i strid med den generelle bestemmelsen om lovvalg i Seksjon 16, går denne Seksjon 15 foran for gjeldende lov og jurisdiksjon for vedkommende Bruker, i den utstrekning ufravikelig lokal lovgivning krever det.</p>
  </div>

  <div class="tc-section" id="s16">
    <span class="section-num">Seksjon 16</span>
    <h2>Generelt</h2>
    <ul>
      <li><strong>Hele avtalen:</strong> Disse Vilkårene utgjør hele avtalen mellom FlexiShift og hver Bruker vedrørende bruk av Plattformen.</li>
      <li><strong>Delbarhet:</strong> Ugyldige eller ikke-håndhevbare bestemmelser vil bli endret i minst mulig grad; gjenværende bestemmelser forblir i full kraft.</li>
      <li><strong>Fraskrivelse:</strong> Manglende håndhevelse av en bestemmelse er ikke en fraskrivelse av retten til å håndheve den i fremtiden.</li>
      <li><strong>Overdragelse:</strong> FlexiShift kan overdra sine rettigheter og forpliktelser til enhver etterfølger. Brukere kan ikke overdra uten forhåndssamtykke.</li>
      <li><strong>Språk:</strong> Disse Vilkårene er utstedt på engelsk. Norsk og svensk oversettelse er tilgjengelig på forespørsel. Ved konflikt gjelder den engelske versjonen med mindre Gjeldende lov krever noe annet.</li>
      <li><strong>Varsler:</strong> Formelle varsler til FlexiShift skal sendes til kontaktadressen som er publisert på Plattformen.</li>
      <li><strong>Fraskrivelse av gruppesøksmål:</strong> Brukere samtykker til å fremme krav utelukkende i individuell kapasitet og ikke som del av noe gruppesøksmål, representativt søksmål, kollektivt søksmål eller lignende saksgang.</li>
      <li><strong>Forsikring:</strong> Sjåfører, Firmaer og Transportører skal opprettholde all forsikring som kreves av lov og bransjepraksis, inkludert motorvognforsikring, godstransportforsikring, ansvarsforsikring og annen forsikring som kreves for de tjenester som ytes. FlexiShift verifiserer ikke tilstrekkeligheten av forsikring og aksepterer intet ansvar som oppstår fra utilstrekkelig eller utløpt forsikringsdekning.</li>
      <li><strong>Samarbeid med myndigheter:</strong> Brukere erkjenner at FlexiShift kan samarbeide fullt ut med politi, tollmyndigheter, regulatorer, transportmyndigheter, skattemyndigheter, domstoler og statlige organer og kan gi informasjon uten forhåndsvarsel der dette er tillatt eller påkrevd av lov.</li>
      <li><strong>Gjeldende lov:</strong> Med forbehold om Seksjon 15 (Jurisdiksjonsspesifikke bestemmelser) skal disse Vilkårene reguleres av og tolkes i samsvar med lovgivningen i England og Wales, og domstolene i England og Wales skal ha jurisdiksjon over tvister som oppstår fra eller relaterer seg til disse Vilkårene, Plattformen eller ethvert Oppdrag. Dette berører ikke ufravikelige forbrukerrettigheter, lokale lovbestemte rettigheter eller jurisdiksjonsmessige rettigheter som tilkommer norske eller svenske Brukere under Seksjon 15.</li>
    </ul>
  </div>

  <div class="signing-block">
    <p>Ved å registrere deg eller fortsette å bruke FlexiShift-plattformen bekrefter du at du har lest, forstått og godtar å være bundet av disse vilkårene og betingelsene i sin helhet.</p>
    <p class="footer-detail">AI Planning Ltd, som driver virksomhet under navnet FlexiShift · Registrert i England og Wales · Versjon 3.0 · Mai 2026 · Storbritannia • Norge • Sverige<br>Disse Vilkårene er tilgjengelige på norsk og svensk på forespørsel.</p>
  </div>

</div>
`;

export const tcSvHTML = `
<div class="page">

  <!-- HEADER -->
  <div class="doc-header">
    <div class="doc-header-inner">
      <div class="doc-badge">Juridiskt dokument</div>
      <h1>Villkor och bestämmelser för användning</h1>
      <div class="doc-meta">
        <span class="doc-meta-item">Version 3.0</span>
        <span class="doc-meta-item">Gäller från: maj 2026</span>
        <span class="doc-meta-item">🇬🇧 Storbritannien</span>
        <span class="doc-meta-item">🇳🇴 Norge</span>
        <span class="doc-meta-item">🇸🇪 Sverige</span>
      </div>
      <div class="doc-notice">Genom att registrera dig eller använda Plattformen i någon egenskap godkänner du att vara juridiskt bunden av dessa Villkor. Om du inte godkänner detta får du inte använda Plattformen.</div>
    </div>
  </div>

  <!-- TOC -->
  <div class="toc">
    <div class="toc-title">Innehåll</div>
    <ul class="toc-list">
      <li><a href="#s1">1. Definitioner</a></li>
      <li><a href="#s2">2. Godkännande och behörighet</a></li>
      <li><a href="#s3">3. FlexiShifts roll</a></li>
      <li><a href="#s4">4. Verifiering och identitet</a></li>
      <li><a href="#s5">5. Uppdragsavtalets villkor</a></li>
      <li><a href="#s6">6. Förbjudna och begränsade varor</a></li>
      <li><a href="#s7">7. Ansvarsfriskrivningar</a></li>
      <li><a href="#s8">8. Betalningar, avgifter och skatt</a></li>
      <li><a href="#s9">9. Tvister och escrow</a></li>
      <li><a href="#s10">10. Integritet och data</a></li>
      <li><a href="#s11">11. Plattformsregler</a></li>
      <li><a href="#s12">12. Plattformsändringar</a></li>
      <li><a href="#s13">13. Immateriella rättigheter</a></li>
      <li><a href="#s14">14. Ansvar och uppsägning</a></li>
      <li><a href="#s15">15. Jurisdiktionsspecifika bestämmelser</a></li>
      <li><a href="#s16">16. Allmänt</a></li>
    </ul>
  </div>

  <!-- SECTION 1 -->
  <div class="tc-section" id="s1">
    <span class="section-num">Avsnitt 1</span>
    <h2>Definitioner</h2>
    <p>Nyckelbegrepp som används i dessa Villkor har följande betydelse:</p>
    <ul>
      <li><strong>”FlexiShift”, ”vi”, ”oss”, ”vår”</strong> – AI Planning Ltd, ett bolag registrerat i England och Wales, som bedriver verksamhet under namnet FlexiShift och är operatör av Plattformen.</li>
      <li><strong>”Plattformen”</strong> – FlexiShifts logistikmarknadsplats, inklusive transportörernas webbapp, förarnas mobilapp, företagsportalen samt all tillhörande programvara och infrastruktur.</li>
      <li><strong>”Användare”</strong> – varje Transportör, Förare eller Företag som får tillgång till eller använder Plattformen.</li>
      <li><strong>”Transportör”</strong> – ett företag eller en enskild person som lägger upp fraktuppdrag på Plattformen.</li>
      <li><strong>”Förare”</strong> – en enskild person som utför uppdrag via förarnas mobilapplikation.</li>
      <li><strong>”Företag”</strong> – en transportverksamhet som förvaltar fordonsflottor och Förare på Plattformen.</li>
      <li><strong>”Leverantör”</strong> – varje verifierad Förare eller Företag som är berättigad att acceptera uppdrag.</li>
      <li><strong>”Uppdrag”</strong> – en fraktuppgift som läggs upp av en Transportör och som tilldelas ett unikt uppdrags-ID.</li>
      <li><strong>”Uppdragsavtal”</strong> – det bindande avtal som ingås mellan Transportören och Leverantören vid bokningsbekräftelse, vilket inkluderar avsnitt 5 nedan.</li>
      <li><strong>”Betalningsförmedlingstjänster”</strong> (i dessa Villkor omväxlande kallade ”Escrow”) – den säkra betalningshållningsfunktion som drivs av Tredjeparts betalningsleverantör, där medel låses vid bokning och frigörs när ett Uppdrag har slutförts. Denna funktion drivs uteslutande av Tredjeparts betalningsleverantör och inte av FlexiShift.</li>
      <li><strong>”Tredjeparts betalningsleverantör”</strong> – den specialiserade betalningsleverantör som anlitas av FlexiShift för att hantera alla finansiella transaktioner.</li>
      <li><strong>”Efterlevnadsspåret”</strong> – det obligatoriska arbetsflödet i tre steg: bekräftelse av lastkod, dubbel signering vid överlämning och leveransbevis.</li>
      <li><strong>”Förbjudna varor”</strong> – varor som anges i avsnitt 6 och som inte får transporteras via Plattformen.</li>
      <li><strong>”Tillämplig lag”</strong> – lagstiftningen i den jurisdiktion där Användaren är etablerad eller där Uppdraget utförs, beroende på vad som är relevant.</li>
      <li><strong>”Fraktförare” (Carrier)</strong> – varje person som ingår avtal om att transportera varor och som åtar sig ansvaret för sådan transport.</li>
      <li><strong>”Oberoende uppdragstagare”</strong> – en Förare, ett Företag eller en Transportör som agerar för egen räkning och inte som anställd, arbetstagare, agent eller representant för FlexiShift.</li>
      <li><strong>”Brottsbekämpande myndighet”</strong> – varje polismyndighet, tullmyndighet, tillsynsmyndighet, transportmyndighet, skattemyndighet, domstol, nämnd, sanktionsmyndighet eller statligt organ.</li>
      <li><strong>”Plattformsdata”</strong> – alla GPS-registreringar, granskningsloggar, meddelanden, omdömen, verifieringsuppgifter, fotografier, videor, uppdragshistorik och all eller viss därtill hörande data.</li>
    </ul>
  </div>

  <!-- SECTION 2 -->
  <div class="tc-section" id="s2">
    <span class="section-num">Avsnitt 2</span>
    <h2>Godkännande, behörighet och kontosäkerhet</h2>
    <p>Genom att använda Plattformen bekräftar du att du är minst 18 år gammal, har rättslig handlingsförmåga att ingå avtal och (om du agerar för ett företags räkning) har befogenhet att binda det företaget. Du måste följa all Tillämplig lag och hålla dina kontouppgifter konfidentiella. Meddela oss omedelbart om du misstänker obehörig åtkomst.</p>
  </div>

  <!-- SECTION 3 -->
  <div class="tc-section" id="s3">
    <span class="section-num">Avsnitt 3</span>
    <h2>FlexiShifts roll – endast marknadsplats</h2>
    <p>FlexiShift driver uteslutande en digital marknadsplats och teknikplattform. FlexiShift är inget åkeri, ingen fraktförare, speditör, transportoperatör, logistikleverantör, lageroperatör, förvarare av varor, bemanningsföretag, rekryteringsbyrå, arbetsgivare eller leverantör av transporttjänster.</p>
    <p>FlexiShift anställer, engagerar, övervakar, leder, kontrollerar eller hanterar inte Förare, Företag eller Transportörer och utövar ingen operativ kontroll över genomförandet av något Uppdrag.</p>
    <p>Förare, Företag och Transportörer agerar alltid som oberoende uppdragstagare.</p>
    <p>Ingenting i dessa Villkor skapar något anställningsförhållande, arbetstagarförhållande, partnerskap, samriskföretag, ombudsförhållande, förtroendeförhållande eller representationsförhållande mellan FlexiShift och någon Användare.</p>
    <p>Uppdragsavtalet ingås uteslutande mellan Transportören och Leverantören. FlexiShift är inte part i det avtalet och tar inget ansvar för dess fullgörande.</p>

    <h3>3.1 Lokala förmedlare och marknadsföringspartner</h3>
    <p>I vissa jurisdiktioner, inklusive Sverige, samarbetar FlexiShift med oberoende lokala marknadsförings- och förmedlingspartner som introducerar potentiella Förare, Företag och Transportörer till Plattformen. Varje sådan partner agerar som ett självständigt företag i egen rätt och är inte anställd, arbetstagare, partner, deltagare i ett samriskföretag, ombud eller representant för FlexiShift eller AI Planning Ltd. Ingen sådan partner har någon befogenhet att ingå, genomföra, ändra, tolka eller binda FlexiShift eller AI Planning Ltd till något avtal, inklusive något Uppdragsavtal eller dessa Villkor. Varje Uppdragsavtal, och varje Användares avtalsförhållande med FlexiShift, ingås direkt och uteslutande med AI Planning Ltd. Introduktion till Plattformen genom en lokal partner gör inte den partnern till part i, eller garant för, något avtal mellan en Användare och FlexiShift.</p>
  </div>

  <!-- SECTION 4 -->
  <div class="tc-section" id="s4">
    <span class="section-num">Avsnitt 4</span>
    <h2>Verifiering, identitetskontroller och bedrägeriförebyggande</h2>
    <p>Alla Leverantörer måste genomföra obligatorisk verifiering innan de accepterar något Uppdrag. Nödvändiga dokument inkluderar:</p>
    <ul>
      <li>Körkort (Förare); fordonsregistreringsbevis; gällande försäkringshandling.</li>
      <li>Företagsregistrering och flottförsäkring (Företag).</li>
      <li>Övrig dokumentation som krävs lokalt.</li>
    </ul>
    <p>FlexiShift kan när som helst genomföra KYC- (identitet), KYB- (verksamhet), sanktions-, bedrägeri- och penningtvättskontroller. Vi förbehåller oss rätten att stänga av eller avsluta konton utan föregående meddelande om en Användare inte klarar verifieringen, förekommer på en sanktionslista, eller om vi har rimlig grund att misstänka bedrägeri, penningtvätt eller brottslig verksamhet. Vi kan rapportera misstankar till relevanta myndigheter utan att meddela Användaren. Dubbla registreringar med samma e-postadress blockeras automatiskt.</p>
    <p>Verifieringskontroller genomförs uteslutande i administrativt syfte. Verifiering utgör inte något intygande, någon garanti eller certifiering från FlexiShift avseende en Användares identitet, kompetens, lämplighet, laglighet, kvalifikationer, erfarenhet, försäkringsskydd, lämplighet eller fortlöpande efterlevnad. Användare måste genomföra sin egen oberoende granskning och får inte förlita sig på någon verifiering som utförts av FlexiShift.</p>

    <h3>4.1 Förarens lämplighet och juridiska körbehörighet</h3>
    <p>Genom att acceptera ett Uppdrag på Plattformen bekräftar, intygar och garanterar Föraren att denne, vid tidpunkten för accepterandet och under hela genomförandet av Uppdraget:</p>
    <ul>
      <li>Innehar ett giltigt körkort av rätt kategori för fordonet, jurisdiktionen och den lasttyp som krävs</li>
      <li>Inte är föremål för körförbud, återkallat körkort eller domstolsbeslut som begränsar rätten att köra</li>
      <li>Inte har ådragit sig prickar, anmärkningar eller andra sanktioner som gör dem juridiskt obehöriga eller olämpliga att köra enligt Tillämplig lag</li>
      <li>Inte är diskvalificerade från att köra av någon tillsynsmyndighet, förvaltningsmyndighet eller domstol i någon jurisdiktion där de är verksamma</li>
      <li>Är fysiskt, medicinskt och psykiskt lämpade att på ett säkert sätt utföra Uppdraget och hantera det aktuella fordonet och utrustningen</li>
      <li>Besitter den erfarenhet, kompetens, kvalifikation, utbildning, certifiering och skicklighet som rimligen krävs för att utföra det specifika Uppdrag som accepterats</li>
      <li>Innehar alla specialistlicenser, certifikat, tillstånd och ackrediteringar som krävs för Uppdraget, inklusive men inte begränsat till ADR-certifiering, yrkeskompetensbevis (YKB), truckkort, lyftutrustningscertifikat, tankfordonscertifikat, transport av odelbar last eller annan branschspecifik kvalifikation som krävs enligt lag, av Kunden eller av Transportören</li>
      <li>I övrigt är lämpade och kapabla att utföra Uppdraget säkert, kompetent och i enlighet med all Tillämplig lag, föreskrifter, branschstandarder och platsspecifika krav</li>
    </ul>
    <p>Föraren erkänner att denne ensam ansvarar för att avgöra om denne är lämpad, kompetent och juridiskt berättigad att utföra ett Uppdrag innan det accepteras. Accepterandet av ett Uppdrag utgör Förarens bekräftelse på att samtliga krav som gäller för det Uppdraget är uppfyllda.</p>
    <p>Föraren intygar och garanterar vidare att denne inte är påverkad av alkohol, droger, läkemedel, trötthet, sjukdom eller något annat tillstånd som kan försämra förmågan att utföra Uppdraget på ett säkert sätt.</p>
    <p>FlexiShift och Transportören förbehåller sig rätten att stänga av en Förare där påverkan, säkerhetsrisker eller regulatoriska betänkligheter rimligen misstänks föreligga.</p>
    <p>Om en Förare vid något tillfälle ådrar sig prickar, blir föremål för körförbud, får sitt körkort återkallat, avstängt eller på annat sätt inskränkt, eller blir medveten om någon rättslig begränsning av sin körbehörighet, eller blir medicinskt olämplig eller nedsatt i sin förmåga att utföra arbetet på ett säkert sätt, måste denne: (i) omedelbart meddela FlexiShift genom att kontakta supporten via Plattformen; (ii) uppdatera sin profil för att återspegla sin otillgänglighet; (iii) avböja alla erbjudanden om Uppdrag eller pass tills körbehörigheten är fullt återställd; och (iv) avbryta utförandet av alla berörda uppdrag. En Förare som accepterar eller fortsätter ett Uppdrag medan denne är juridiskt förbjuden att köra bryter väsentligt mot dessa Villkor och kan omedelbart stängas av, anmälas till relevanta myndigheter och hållas ansvarig för alla uppkomna förluster.</p>
    <p>FlexiShift genomför endast digitala verifieringskontroller av Förarens dokument vid registreringstillfället. Sådana kontroller utförs i god tro utifrån den information och de dokument som lämnats av Föraren och utgör inte någon garanti för Förarens fortlöpande juridiska körbehörighet. Föraren bär ensam ansvaret för att fortlöpande uppfylla alla tillämpliga krav för det valda uppdraget under användningen av Plattformen.</p>

    <h3>4.2 Transportörens skyldighet att fysiskt verifiera Förarens behörighetshandlingar</h3>
    <p>FlexiShift utför endast digital dokumentverifiering vid tidpunkten för Förarens registrering. Sådana kontroller genomförs i god tro utifrån den information och dokumentation som lämnats av Föraren och ersätter inte en fysisk inspektion av Förarens behörighetshandlingar vid tidpunkten för engagemang. Innan en Förare tillåts påbörja ett uppdrag, få tillträde till en plats, hantera utrustning eller ta hand om varor eller ett fordon, ansvarar Transportören (eller dennes behöriga representant) ensam för att fysiskt inspektera och verifiera:</p>
    <ul>
      <li>Förarens originalkörkort, och bekräfta att det är giltigt, inte utgånget och av rätt kategori för fordonet och lasten</li>
      <li>Eventuella specialistcertifieringar som krävs för det specifika uppdraget (inklusive men inte begränsat till ADR-certifiering för farligt gods, yrkeskompetensbevis (YKB), truckkort eller certifikat för specialutrustning samt eventuella lokalt krävda tillstånd)</li>
      <li>Förarens identitet mot körkortet och Plattformsprofilen</li>
      <li>Bedöma om Föraren besitter den erfarenhet, kompetens, utbildning och förmåga som rimligen krävs för att utföra det specifika Uppdraget säkert och effektivt</li>
      <li>Förvissa sig om att Föraren förefaller tjänstbar och inte är synbart påverkad, trött, berusad eller på annat sätt olämplig att utföra Uppdraget</li>
      <li>Säkerställa att alla tillämpliga rättsliga, regulatoriska, avtalsmässiga, försäkringsmässiga, kund-, plats- samt hälso- och säkerhetskrav är uppfyllda innan Uppdraget påbörjas</li>
      <li>Tillhandahålla platsintroduktion, säkerhetsgenomgång, driftinstruktioner, riskbedömningar, metodbeskrivningar, personkontroller och instruktioner</li>
      <li>Neka tillträde för varje Förare som Transportören rimligen bedömer inte uppfyller kraven för Uppdraget eller utgör en säkerhets-, juridisk-, operativ- eller efterlevnadsrisk</li>
    </ul>
    <p>Transportören bekräftar och samtycker till att denne ensam bär ansvaret för den operativa ledningen, tillsynen och kontrollen av alla Förare som engagerats genom Plattformen från det att de infinner sig på Uppdragsplatsen och under hela genomförandet av Uppdraget.</p>
    <p>FlexiShift agerar uteslutande som en teknikplattform som förmedlar kontakter mellan Förare och Transportörer. FlexiShift anställer, övervakar, leder, hanterar, bedömer eller kontrollerar inte Förare under genomförandet av något Uppdrag och har ingen möjlighet att verifiera en Förares fortlöpande juridiska behörighet, kompetens, kvalifikationer, lämplighet eller uppträdande vid tidpunkten för engagemang eller därefter.</p>
    <div class="warn-box">FlexiShift ska inte under några omständigheter ha något ansvar för förlust, skada, personskada, försening, regulatoriskt brott, bristande efterlevnad, fordonsskada, godsförlust, personskada, dödsfall, böter, sanktionsavgifter, krav eller kostnader som uppstår till följd av: (i) Transportörens underlåtenhet att genomföra lämplig verifiering, inspektion eller lämplighetsbedömning; (ii) Transportörens beslut att engagera, tillåta eller fortsätta att använda en Förare; (iii) felaktig, ofullständig eller bedräglig information som lämnats av en Förare; eller (iv) handling, underlåtenhet, vårdslöshet, tjänstefel eller lagbrott begånget av en Förare.</div>
    <p>Transportören åtar sig samtliga risker förknippade med att tillåta en Förare att utföra ett Uppdrag och ska hålla FlexiShift, dess ledande befattningshavare, styrelseledamöter, anställda och närstående bolag skadeslösa från och mot alla krav, åtgärder, förluster, skulder, skadestånd, sanktionsavgifter, kostnader och utgifter (inklusive skäliga juridiska avgifter) som uppstår till följd av eller i samband med Transportörens underlåtenhet att uppfylla sina skyldigheter enligt denna klausul eller dennes engagemang av en Förare som Transportören kände till, eller rimligen borde ha känt till, inte var lämplig för Uppdraget.</p>
    <p>Transportören ska anses vara den transportoperatör som har operativ kontroll över Uppdraget. Transportören ansvarar ensam för efterlevnaden av all tillämplig transportlagstiftning, krav på kör- och vilotider, krav på färdskrivare, arbetstidskrav, hälso- och säkerhetsskyldigheter, krav på fordonsöverensstämmelse och avtalsförpliktelser gentemot kund.</p>
    <p>Den verifieringsstatus som visas på Plattformen är endast avsedd för administrativa ändamål och bör inte förlitas på som bevis för kompetens, lämplighet, laglighet, giltig försäkring, lämplighet eller tillförlitlighet.</p>
  </div>

  <!-- SECTION 5 -->
  <div class="tc-section" id="s5">
    <span class="section-num">Avsnitt 5</span>
    <h2>Uppdragsavtalets villkor (inkluderat i varje bokning)</h2>
    <p>Dessa villkor gäller mellan Transportören och Leverantören för varje Uppdrag, såvida inte annat uttryckligen avtalats skriftligen. FlexiShift är inte part i något Uppdragsavtal.</p>
    <p>Uppdragsavtalet föreligger uteslutande mellan Transportören och Leverantören. FlexiShift är inte part i, förmånstagare till, garant för eller administratör av något Uppdragsavtal. FlexiShift ansvarar inte för att tolka, verkställa eller avgöra rättigheter eller skyldigheter som uppstår enligt något Uppdragsavtal.</p>

    <h3>5.1 Lastning, lossning och varukontroll</h3>
    <p>Om inte annat avtalats: Transportörens avsändare ansvarar för lastning; Föraren ansvarar för lossning. Krav på specialutrustning (baklyft, pallyft, etc.) måste anges vid skapandet av uppdraget. Vid hämtning ska Föraren kontrollera och registrera kvantitet, det yttre förpackningsskicket samt eventuell deklarerad specialhantering. Förare är inte skyldiga att öppna förseglade förpackningar och bär inget ansvar för odeklarerat innehåll. Eventuella avvikelser ska registreras i appen vid överlämningstillfället.</p>

    <h3>5.2 Riskövergång</h3>
    <p>FlexiShift ansvarar inte för att fastställa, fördela, övervaka eller upprätthålla risken för varor som transporteras via Plattformen. Riskfördelningen är en fråga uteslutande mellan Transportören och Leverantören.</p>

    <h3>5.3 Omplanering och ofullständiga uppdrag</h3>
    <p>Omplanering kräver ömsesidig skriftlig överenskommelse via Plattformen. Om en Leverantör påbörjar men inte kan slutföra ett Uppdrag måste denne omedelbart meddela Transportören via Plattformen. Betalning bestäms av utfallet av tvisten enligt avsnitt 10. FlexiShift tar inget ekonomiskt ansvar för ofullständiga uppdrag.</p>

    <h3>5.4 Leveransbevis och bevisning vid tvist</h3>
    <p>Giltigt Leveransbevis kräver: ett tydligt fotografi av varorna på leveransplatsen; mottagarens digitala signatur; samt tidsstämpel och geolokalisering registrerad av Plattformen. Vid en tvist bedöms bevisning i följande prioritetsordning: (1) uppgifter från Efterlevnadsspåret; (2) GPS-/telematikdata; (3) tidsstämplade appfotografier och signaturer; (4) meddelandeloggar från Plattformen; (5) tredjepartsdokument; (6) vittnesmål. FlexiShift kan dela Plattformsdata med försäkringsbolag, juridiska ombud, brottsbekämpande myndigheter eller skiljemän på begäran.</p>
  </div>

  <!-- SECTION 6 -->
  <div class="tc-section" id="s6">
    <span class="section-num">Avsnitt 6</span>
    <h2>Förbjudna och begränsade varor</h2>
    <div class="warn-box">Att lägga upp eller transportera Förbjudna varor kan resultera i omedelbar avstängning av kontot och anmälan till myndigheter. Leverantörer får utan påföljd avböja last som de rimligen misstänker är förbjuden.</div>

    <h3>6.1 Absolut förbjudet (inga undantag)</h3>
    <ul>
      <li>Olagliga varor, stulen egendom eller varor som är involverade i brottslig verksamhet</li>
      <li>Skjutvapen, vapen, ammunition eller sprängämnen (licensierade eller ej)</li>
      <li>Narkotika och kontrollerade substanser</li>
      <li>Kontanter, innehavarinstrument eller högvärdiga omsättningsbara instrument</li>
      <li>Varor som omfattas av internationella sanktioner eller embargon</li>
      <li>Smittämnen i kategori A/B; icke-auktoriserade mänskliga kvarlevor eller biologiskt material</li>
    </ul>

    <h3>6.2 Begränsat – kräver fullständig förhandsdeklaration och Leverantörens godkännande</h3>
    <ul>
      <li>Farligt gods (ADR/tillämpliga nationella föreskrifter): brandfarligt, frätande, giftigt, oxiderande eller radioaktivt</li>
      <li>Temperaturkontrollerade varor eller kylkedjegods</li>
      <li>Boskap eller levande djur</li>
      <li>Alkohol och tobak som omfattas av licens- eller punktskattekrav</li>
      <li>Överdimensionerade eller överviktiga laster som kräver tillstånd eller eskortfordon</li>
      <li>Avfall eller miljöreglerat material</li>
      <li>Högvärdiga eller ömtåliga varor med ett deklarerat värde överstigande £10 000 / NOK 130 000 / SEK 140 000 per sändning</li>
      <li>Läkemedel, temperaturkänsliga mediciner eller medicintekniska produkter</li>
    </ul>
    <p>Transportören ansvarar ensam för korrekt varudeklaration. FlexiShift inspekterar inte varor och accepterar inget ansvar för förlust, myndighetsåtgärder eller straffrättsliga förfaranden som uppstår till följd av odeklarerade eller felaktigt beskrivna laster.</p>
    <p>Varje Användare intygar och garanterar att varken denne, dess verkliga huvudmän, dess anställda eller någon sändning som läggs upp via Plattformen är föremål för sanktioner som beslutats av Storbritannien, EES, Europeiska unionen, USA, Förenta nationerna eller någon annan tillämplig sanktionsmyndighet.</p>
  </div>

  <!-- SECTION 7 -->
  <div class="tc-section" id="s7">
    <span class="section-num">Avsnitt 7</span>
    <h2>Ansvarsfriskrivningar – fordon, varor, stöld och cybersäkerhet</h2>

    <h3>7.1 Fordonsskada</h3>
    <p>FlexiShift friskriver sig från allt ansvar för förlust, skada eller förstörelse av fordon som används i samband med ett Uppdrag, oavsett orsak. Varje Förare och Företag måste alltid inneha giltig kommersiell motorfordonsförsäkring (som täcker ansvar gentemot tredje part, gods under transport och fordonsskada). Varje Transportör måste inneha tillräcklig kommersiell försäkring för sin fraktverksamhet. FlexiShift kan när som helst begära bevis på försäkring; underlåtenhet att tillhandahålla detta utgör ett väsentligt brott mot dessa Villkor.</p>

    <h3>7.2 Stöld, produktförlust och förares tjänstefel</h3>
    <p>FlexiShift friskriver sig från allt ansvar för stöld, förskingring, olovligt förfogande eller felaktig leverans av varor begången av en Förare, en anställd hos ett Företag eller en underleverantör. Förare och Företag är oberoende uppdragstagare; FlexiShift bär inget principalansvar för deras agerande. Krav ska riktas till den berörda Leverantören eller dennes försäkringsbolag. Transportörer ansvarar för att inneha tillräcklig försäkring för gods under transport innan varor överlämnas.</p>
    <p>För att undvika tvivel friskriver FlexiShift sig från allt ansvar för: (a) stöld av, från eller i samband med sändning, gods, last eller varor som transporteras under ett Uppdrag, oavsett om detta begås av en Förare, en tredje part eller på annat sätt; (b) stöld av eller från fordon som används i samband med ett Uppdrag; (c) skada på sändning, gods, last eller varor, oavsett om detta orsakats av felaktig hantering, olycka, olämpligt fordon, bristfällig förpackning eller annan orsak; och (d) skada på fordon, utrustning eller egendom som uppstår under eller i samband med ett Uppdrag. FlexiShift är uteslutande en förmedlings- och teknikplattform. Vi förmedlar kontakt mellan Transportörer och Förare och underlättar ingåendet av Uppdragsavtal mellan dem. Vi är inte part i något Uppdragsavtal, övervakar eller leder inte genomförandet av något Uppdrag och kan inte upprätthålla efterlevnaden av någon rättslig, operativ eller säkerhetsmässig skyldighet. Alla krav som uppstår till följd av stöld, förlust eller skada måste riktas direkt mot Föraren, Företaget eller deras respektive försäkringsbolag.</p>

    <h3>7.3 Cybersäkerhet och force majeure</h3>
    <p>FlexiShift vidtar proportionerliga säkerhetsåtgärder men garanterar inte att Plattformen är fri från cyberangrepp, intrång, skadlig programvara eller dataintrång. FlexiShift ansvarar inte för förluster som uppstår till följd av tredje parts cyberangrepp, nätverksfel eller force majeure-händelser (inklusive naturkatastrofer eller myndighetsåtgärder). Eftersom betalningsdata uteslutande hanteras av Tredjeparts betalningsleverantör accepterar FlexiShift inget ansvar för att betalningsinformation komprometteras på den nivån. Användare ansvarar för att säkra sina egna enheter och inloggningsuppgifter.</p>

    <h3>7.4 Beräknad ankomsttid, kartor och ruttdata</h3>
    <p>Beräkningar av ankomsttid, GPS-spårning, ruttförslag och avvikelselarm är endast verktyg och uppskattningar – inga garantier. Kartdata hämtas från tredjepartsleverantörer. FlexiShift accepterar inget ansvar för felaktigheter i matchningsresultat, beräknade ankomsttider, GPS-data eller navigationsinformation. Förare måste följa vägmärken och trafiklagstiftning oavsett vilket ruttförslag som visas i appen.</p>

    <h3>7.5 Följdskador</h3>
    <p>FlexiShift ska inte hållas ansvarigt för utebliven vinst, uteblivna intäkter, förlorade affärsmöjligheter, förlorade avtal, förlust av goodwill, uteblivna besparingar, störningar i försörjningskedjan, driftsavbrott, skadat anseende eller följdskador. FlexiShift har ingen skyldighet att utreda stöld, återfå varor, lokalisera enskilda personer, driva in krav eller delta i återvinningsåtgärder.</p>
  </div>

  <!-- SECTION 8 -->
  <div class="tc-section" id="s8">
    <span class="section-num">Avsnitt 8</span>
    <h2>Betalningar, avgifter, skatt och fakturering</h2>
    <p>Alla transaktioner hanteras uteslutande av Tredjeparts betalningsleverantör. FlexiShift lagrar eller hanterar inte betalkorts- eller bankuppgifter. Godkända betalningskanaler är de som publiceras på Plattformen (inklusive UPI, kreditkort och banköverföring där detta är tillgängligt). Betalningsförmedlingstjänster låses vid bokning och frigörs till Leverantören när Transportören har godkänt Leveransbeviset.</p>
    <ul>
      <li>Plattformens provision och serviceavgifter är de som publiceras i Plattformens avgiftsschema (som uppdateras från tid till annan med rimligt varsel) och anges exklusive tillämplig mervärdesskatt.</li>
      <li>Plattformsavgifter förfaller till betalning, och är icke återbetalningsbara, så snart en resa eller ett pass har påbörjats, oavsett eventuella tvister eller utfallet av dessa.</li>
      <li>Mervärdesskatt tillämpas enligt följande: VAT (Storbritannien), MVA/merverdiavgift (Norge) och MOMS/mervärdesskatt (Sverige), var och en till gällande skattesats i respektive jurisdiktion.</li>
      <li>Varje Användare ansvarar ensam för sin egen skatteefterlevnad, inklusive registrering, rapportering och betalning av tillämpliga skatter på inkomst som intjänats eller tjänster som mottagits genom Plattformen.</li>
      <li>Automatiskt genererade fakturor från Plattformen tillhandahålls endast som en informativ bekvämlighet. FlexiShift agerar inte som momsombud, skatteombud eller fiskalt ombud för någon Användare.</li>
      <li>Plattformens provision är icke återbetalningsbar vid avbokningar efter det att transporten har påbörjats samt vid omtvistade uppdrag där FlexiShift inte bär skulden.</li>
      <li>Återkrediteringar eller betalningsåterföringar som initieras av en Transportör (utöver de som orsakats av fel från FlexiShift) är uteslutande Transportörens ansvar. FlexiShift kan återkräva belopp för återkrediteringar genom kvittning mot framtida escrow-utbetalningar. Missbruk av återkrediteringsprocessen kan leda till avstängning av kontot.</li>
      <li>Varje Förare och Transportör ansvarar ensam för att registrera sig för, samla in, rapportera och betala in mervärdesskatt (eller motsvarande omsättningsskatt, inklusive MVA i Norge och MOMS i Sverige) i sin tillämpliga jurisdiktion. Om en Förare eller Transportör enligt Tillämplig lag är skyldig att vara momsregistrerad ska denne upprätthålla sådan registrering under hela sin användning av Plattformen. FlexiShift samlar inte in, betalar inte in och redovisar inte moms för någon Förares eller Transportörs räkning, och lämnar inga utfästelser om någon Användares momsskyldigheter. Användare måste inhämta oberoende skatterådgivning om de är osäkra på sina krav på momsregistrering eller momsrapportering.</li>
      <li>Alla Förare och Transportörer måste vara juridiskt registrerade för att bedriva verksamhet i enlighet med lagar och föreskrifter i sin tillämpliga jurisdiktion. Detta inkluderar, utan begränsning: att inneha giltig företagsregistrering eller status som egenföretagare; att inneha alla licenser, tillstånd och godkännanden som krävs för att bedriva åkeri- eller körverksamhet; samt att följa all tillämplig arbetsrätts-, skatte- och transportlagstiftning. Förare som är verksamma i Sverige måste, om de är egenföretagare, inneha ett giltigt F-skattsedel/F-skattebevis.</li>
    </ul>
    <p>Alla betaltjänster, inklusive de Betalningsförmedlingstjänster (Escrow) som beskrivs i dessa Villkor, tillhandahålls av Tredjeparts betalningsleverantör. FlexiShift bedriver inte i sig verksamhet som ett reglerat betalningsinstitut, en bank eller en betalningsförmedlare, och innehar, överför eller förvarar aldrig själv någon Användares medel.</p>
    <p>FlexiShift ska inte hållas ansvarigt för fel hos betalningsleverantören, dennes insolvens, försenade betalningar, återkrediteringar, bedrägeri, betalningsåterföringar eller fel hos betalningsleverantören.</p>
  </div>

  <!-- SECTION 9 -->
  <div class="tc-section" id="s9">
    <span class="section-num">Avsnitt 9</span>
    <h2>Tvister och frigörande av escrow</h2>
    <ul>
      <li>FlexiShift har ingen skyldighet att utreda, medla, avgöra genom skiljeförfarande eller på annat sätt lösa tvister mellan Användare. Eventuellt bistånd från FlexiShift lämnas frivilligt, efter eget gottfinnande och uteslutande som en kundservicetjänst.</li>
      <li>FlexiShift kan i förekommande fall dra av utestående plattformsavgifter, provision eller avbokningsavgifter från escrow innan medlen frigörs.</li>
      <li>FlexiShift accepterar inget ekonomiskt ansvar i samband med tvister mellan Användare. FlexiShifts medverkan är endast en administrativ bekvämlighet och utgör inte något rättsligt avgörande eller skiljedom.</li>
      <li>Olösta tvister kan hänskjutas till domstol, oberoende skiljeförfarande, berört försäkringsbolag eller Tredjeparts betalningsleverantörs egna process. FlexiShift kommer att tillhandahålla tillgång till Plattformens bevisregistreringar vid mottagande av en giltig rättslig begäran.</li>
    </ul>
  </div>

  <!-- SECTION 10 -->
  <div class="tc-section" id="s10">
    <span class="section-num">Avsnitt 10</span>
    <h2>Integritet, GPS-spårning och databehandling</h2>
    <p>FlexiShift behandlar personuppgifter i enlighet med sin integritetspolicy (tillgänglig på Plattformen och införlivad genom hänvisning). Genom att använda Plattformen samtycker Användare till den databehandling som beskrivs där.</p>

    <h3>10.1 Status som personuppgiftsansvarig</h3>
    <p>FlexiShift, Förare, Företag och Transportörer agerar som självständiga personuppgiftsansvariga avseende personuppgifter som behandlas för deras egna affärsändamål, om inte annat krävs enligt lag.</p>

    <h3>10.2 Delning av förardata</h3>
    <p>Förare bemyndigar uttryckligen FlexiShift att dela relevant information med den berörda Transportören, inklusive identitetsuppgifter, körkortsstatus, kvalifikationer, certifieringar, fordonsuppgifter, omdömen, GPS-position och efterlevnadsuppgifter som är nödvändiga för genomförandet av Uppdraget.</p>

    <h3>10.3 Brottsbekämpning och bedrägeriförebyggande</h3>
    <p>FlexiShift kan övervaka, bevara, använda och lämna ut Användarinformation, Plattformsdata, identitetsuppgifter, kommunikation, GPS-registreringar, verifieringsdokument, transaktionsuppgifter, fotografier, videor och efterlevnadsinformation där FlexiShift rimligen bedömer att sådant utlämnande är nödvändigt för att: (a) uppfylla rättsliga skyldigheter; (b) besvara förfrågningar från domstolar, tillsynsmyndigheter eller brottsbekämpande myndigheter; (c) utreda misstänkt bedrägeri, stöld, brottslig verksamhet, penningtvätt, sanktionsbrott eller hot mot säkerheten; (d) skydda FlexiShift, Användare eller tredje part; eller (e) fastställa, göra gällande eller försvara rättsliga anspråk. FlexiShift ska inte hållas ansvarigt för utlämnanden som gjorts i god tro enligt denna klausul.</p>

    <h3>10.4 Lagring</h3>
    <p>Data kan lagras så länge det rimligen är nödvändigt för rättsliga, regulatoriska, operativa, bedrägeriförebyggande, försäkringsmässiga, tvistlösnings- och efterlevnadsändamål, enligt FlexiShifts eget gottfinnande.</p>

    <h3>10.5 Realtidsdata och övrig data</h3>
    <ul>
      <li>Förare samtycker till GPS-positionsspårning i realtid under pågående Uppdrag. Positionsdata delas med den berörda Transportören och Företaget i realtid och kan lagras enligt avsnitt 10.4.</li>
      <li>GPS-data kan delas med försäkringsbolag, brottsbekämpande myndigheter eller skiljemän på begäran.</li>
      <li>Verifieringsdokument, leveransfotografier, digitala signaturer och efterlevnadsdata lagras säkert och sparas enligt avsnitt 10.4.</li>
      <li>Uppdragsdata kan delas med Tredjeparts betalningsleverantör (bedrägeriförebyggande), försäkringsbolag (skadereglering), tillsynsmyndigheter (rättslig skyldighet) och i anonymiserad form för plattformsanalys.</li>
      <li>Förare får inte inaktivera GPS eller platstjänster under ett pågående Uppdrag. Avsiktlig inaktivering kan leda till åtgärder mot kontot.</li>
      <li>Användare kan utöva sina dataskyddsrättigheter (tillgång, rättelse, radering, dataportabilitet, invändning) enligt vad som anges i integritetspolicyn och i enlighet med Tillämplig lag.</li>
    </ul>
  </div>

  <!-- SECTION 11 -->
  <div class="tc-section" id="s11">
    <span class="section-num">Avsnitt 11</span>
    <h2>Plattformsregler – omdömen, recensioner och förarappen</h2>

    <h3>11.1 Omdömen och recensioner</h3>
    <ul>
      <li>Ett omdöme per slutfört Uppdrag och motpart. Omdömen ska vara ärliga och baserade på faktisk erfarenhet av det specifika Uppdraget.</li>
      <li>Recensioner får inte vara ärekränkande, kränkande, diskriminerande, falska, manipulerade eller belönade.</li>
      <li>FlexiShift kan efter eget gottfinnande ta bort eller avstå från att publicera en recension och accepterar inget ansvar för felaktiga recensioner.</li>
      <li>Omdömen matar den smarta matchningsmotorn och påverkar Leverantörens synlighet, behörighet att erhålla uppdrag och fortsatt tillgång till Plattformen. Konton som understiger godtagbara omdömesgränser kan stängas av.</li>
      <li>Att avböja ett utskickat Uppdrag påverkar inte Leverantörens omdöme och ska inte i sig leda till minskad synlighet, färre uppdragserbjudanden, nedprioritering av den smarta matchningsmotorn eller någon annan påföljd. Omdömen baseras uteslutande på Leverantörens agerande under slutförda Uppdrag.</li>
      <li>Recensioner, omdömen och användargenererat innehåll förblir upphovspersonens ansvar. Användare beviljar FlexiShift en global, royaltyfri och evig licens att använda, visa, analysera och publicera omdömen, recensioner och feedback.</li>
    </ul>

    <h3>11.2 Förarappen – enhet och säker användning</h3>
    <ul>
      <li>Förarappen kräver: GPS/plats (alltid aktiverat under pågående Uppdrag); kamera; push-notiser; och lagringsutrymme. Att inaktivera nödvändiga behörigheter under ett Uppdrag kan försämra funktionaliteten och utgöra ett avtalsbrott.</li>
      <li>Förare får inte interagera med appen på ett sätt som är osäkert eller olagligt under körning. All aktiv interaktion med appen under transport får endast ske när fordonet står säkert stillastående.</li>
      <li>Förare ansvarar för att deras enhet är laddad och uppkopplad under hela Uppdraget. FlexiShift accepterar inget ansvar för fel orsakade av enhetsproblem, batteri eller dålig uppkoppling.</li>
      <li>Programuppdateringar måste installeras utan dröjsmål. FlexiShift accepterar inget ansvar för fel som uppstår till följd av föråldrade appversioner.</li>
      <li>När appen distribueras via en appbutik gäller den butikens villkor utöver dessa Villkor och har företräde enbart avseende appdistributionen.</li>
    </ul>

    <h3>11.3 Direkt engagemang och kringgående</h3>
    <p>FlexiShift driver en marknadsplatsplattform och genererar intäkter genom att förmedla kontakt mellan Förare, Företag och Transportörer samt genom att underlätta ingåendet av Uppdragsavtal mellan dem.</p>
    <p>Ingenting i dessa Villkor begränsar en Förares, ett Företags eller en Transportörs möjlighet att tillhandahålla eller ta emot tjänster via andra plattformar, kunder eller affärsrelationer. Förare och Företag är fortsatt fria att bestämma när, var och för vem de tillhandahåller tjänster och får använda konkurrerande plattformar när som helst.</p>
    <p>Om en Förare eller ett Företag däremot introduceras för en Transportör genom Plattformen, får Transportören inte medvetet kringgå Plattformen genom att direkt engagera den Föraren eller det Företaget för väsentligen liknande tjänster utanför Plattformen under en period av tolv (12) veckor efter det senaste Uppdraget, såvida inte Transportören har inhämtat FlexiShifts skriftliga förhandssamtycke eller betalat tillämplig avgift för direkt engagemang.</p>
    <p>FlexiShift kan övervaka aktivitet på Plattformen för att identifiera misstänkt undvikande av avgifter eller kringgående, och kan stänga av konton, driva in obetalda avgifter eller vidta rimliga åtgärder för att skydda sina legitima affärsintressen.</p>
  </div>

  <!-- SECTION 12 -->
  <div class="tc-section" id="s12">
    <span class="section-num">Avsnitt 12</span>
    <h2>Plattformsändringar och tjänsteleverantörer</h2>
    <p>FlexiShift förbehåller sig rätten att när som helst ändra, förbättra, avveckla eller ersätta funktioner; byta ut eller avsluta samarbetet med tredjepartsleverantörer (inklusive Tredjeparts betalningsleverantör); samt uppdatera priser eller provisionsstrukturer med rimligt varsel. FlexiShift ska inte hållas ansvarigt för förluster som uppstår till följd av sådana ändringar. Väsentliga ändringar av dessa Villkor kommer att meddelas via e-post eller meddelande i Plattformen; fortsatt användning utgör godkännande.</p>
    <p>FlexiShift kan stänga av, begränsa eller avveckla Plattformen eller en funktion när som helst och av vilken anledning som helst utan ansvar.</p>
  </div>

  <!-- SECTION 13 -->
  <div class="tc-section" id="s13">
    <span class="section-num">Avsnitt 13</span>
    <h2>Immateriella rättigheter</h2>
    <p>Alla immateriella rättigheter till Plattformen (programvara, design, algoritmer, varumärken och innehåll) ägs av eller är licensierade till AI Planning Ltd UK. Användare erhåller en begränsad, icke-exklusiv och icke-överlåtbar licens att använda Plattformen enbart för dess avsedda syfte. Användare får inte kopiera, dekompilera, modifiera eller distribuera något element av Plattformen utan föregående skriftligt medgivande.</p>
    <p>Alla algoritmer, maskininlärningsmodeller, poängsättningssystem, analysresultat, prestationsmått, härledd data och plattformsintelligens tillhör uteslutande FlexiShift.</p>
  </div>

  <!-- SECTION 14 -->
  <div class="tc-section" id="s14">
    <span class="section-num">Avsnitt 14</span>
    <h2>Ansvarsbegränsning, skadeslöshet och uppsägning</h2>

    <h3>14.1 Ansvarsbegränsning</h3>
    <p>I den utsträckning Tillämplig lag tillåter är FlexiShifts sammanlagda ansvar gentemot en Användare begränsat till det lägsta av de totala plattformsavgifter som betalats av den Användaren under de tre månaderna före det aktuella kravet, eller £1 000 (endast ettusen brittiska pund). FlexiShift ansvarar inte för indirekta skador, följdskador, tillfälliga skador, särskilda skador eller skadestånd i bestraffande syfte, inklusive utebliven vinst, uteblivna intäkter, förlorad data eller förlorad goodwill. Denna begränsning gäller oavsett grunden för anspråket, oavsett om det grundas på avtal, skadestånd (inklusive vårdslöshet), lagstadgad skyldighet, felaktig uppgift eller annat. Ingenting häri begränsar ansvar som orsakats av FlexiShifts vårdslöshet, bedrägeri eller annan ansvarsgrund som inte kan uteslutas enligt Tillämplig lag.</p>

    <h3>14.2 Användarens skadeslöshetsåtagande</h3>
    <p>Varje Användare ska hålla FlexiShift, dess styrelseledamöter, ledande befattningshavare och närstående bolag skadeslösa från alla krav, förluster, sanktionsavgifter och kostnader (inklusive juridiska avgifter) som uppstår till följd av: brott mot dessa Villkor; överträdelse av Tillämplig lag; handlingar eller underlåtenheter i samband med ett Uppdrag; tredjepartskrav avseende varor som förlorats, stulits eller skadats i samband med ett Uppdrag; underlåtenhet att inneha tillräcklig försäkring; att lägga upp eller transportera Förbjudna varor; anställningsrättsliga krav; krav avseende arbetstagarstatus; skattekrav; momskrav; tullkrav; sanktionsrelaterade krav; regulatoriska krav; godskrav; dataskyddskrav; samt tredjepartskrav som uppstår till följd av användningen av Plattformen.</p>

    <h3>14.3 Avstängning och uppsägning</h3>
    <p>FlexiShift kan stänga av eller avsluta ett konto utan föregående meddelande vid: brott mot dessa Villkor; falsk eller vilseledande information; olagligt eller skadligt beteende; utgången försäkring eller verifieringsdokument; underlåtenhet att klara KYC-/KYB-/sanktionskontroller; eller om det krävs enligt lag eller domstolsbeslut. Utestående escrow-medel hanteras i enlighet med det aktuella Uppdragets status och Tredjeparts betalningsleverantörs rutiner.</p>

    <h3>14.4 Ansvarsfriskrivning avseende garantier</h3>
    <p>I den utsträckning Tillämplig lag tillåter tillhandahålls Plattformen samt alla tjänster, innehåll, data, information, programvara, funktionalitet och funktioner som görs tillgängliga av FlexiShift i befintligt skick (”as is”), i mån av tillgänglighet (”as available”) och med alla eventuella fel (”with all faults”). FlexiShift lämnar inga utfästelser, garantier, åtaganden eller försäkringar, vare sig uttryckliga, underförstådda, lagstadgade eller på annat sätt, avseende tillgängligheten, tillförlitligheten, prestandan, riktigheten eller lämpligheten hos Plattformen eller hos någon Användare, något Uppdrag, några varor eller någon information som visas genom Plattformen.</p>
    <p>Varje Användare bekräftar och samtycker till att denne ensam ansvarar för att genomföra sin egen granskning och oberoende bedömning innan denne ingår ett Uppdragsavtal, interagerar med en annan Användare, lämnar ut varor, tar emot varor, gör betalningar eller förlitar sig på information som erhållits genom Plattformen.</p>
  </div>

  <!-- SECTION 15 -->
  <div class="tc-section" id="s15">
    <span class="section-num">Avsnitt 15</span>
    <h2>Jurisdiktionsspecifika bestämmelser</h2>

    <h3>15.1 Storbritannien</h3>
    <p>För Användare baserade i Storbritannien omfattas dessa Villkor och Uppdragsavtalet av lagstiftningen i England och Wales. Om en Användare kvalificerar som konsument gäller de tvingande skyddsreglerna enligt Consumer Rights Act 2015 och relaterad brittisk konsumentlagstiftning, och dessa utesluts inte av dessa Villkor. Databehandling sker i enlighet med UK GDPR och Data Protection Act 2018.</p>

    <h3>15.2 Norge</h3>
    <p>För Användare baserade i Norge utesluter eller begränsar ingenting i dessa Villkor det skydd som en Användare har rätt till enligt tvingande bestämmelser i norsk rätt som inte kan avtalas bort, inklusive den norska avtalslagen (avtaleloven) och, där Användaren kvalificerar som konsument, den norska konsumentköplagen (forbrukerkjøpsloven). Databehandling sker i enlighet med den norska personuppgiftslagen (personopplysningsloven), som implementerar EES-GDPR. Tvister som involverar en norsk konsument och som inte kan lösas direkt kan, i förekommande fall, hänskjutas till den norska konsumentmyndigheten (Forbrukertilsynet) eller konsumenttvistnämnden (Forbrukerklageutvalget), utöver domstolarna i Oslo.</p>

    <h3>15.3 Sverige</h3>
    <p>För Användare baserade i Sverige utesluter eller begränsar ingenting i dessa Villkor det skydd som en Användare har rätt till enligt tvingande bestämmelser i svensk rätt som inte kan avtalas bort, inklusive avtalslagen och, där Användaren kvalificerar som konsument, konsumentköplagen. Databehandling sker i enlighet med lagen om behandling av personuppgifter och EES-GDPR, under tillsyn av Integritetsskyddsmyndigheten (IMY). Tvister som involverar en svensk konsument och som inte kan lösas direkt kan, i förekommande fall, hänskjutas till Allmänna Reklamationsnämnden (ARN), utöver domstolarna i Stockholm.</p>

    <h3>15.4 Gränsöverskridande uppdrag</h3>
    <p>När ett Uppdrag omfattar hämtning och leverans i mer än en jurisdiktion som omfattas av dessa Villkor gäller den tvingande lagstiftningen i varje berörd jurisdiktion i den utsträckning den inte kan avtalas bort. För gränsöverskridande vägtransport kan CMR-konventionen (konventionen om fraktavtal vid internationell godsbefordran på väg) vara tillämplig, och Transportörer och Leverantörer ansvarar själva för sin efterlevnad. ADR-föreskrifterna gäller för transport av farligt gods i samtliga tre jurisdiktioner.</p>

    <h3>15.5 Företrädesordning</h3>
    <p>Om en bestämmelse i detta avsnitt 15 står i strid med den allmänna bestämmelsen om tillämplig lag i avsnitt 16, ska detta avsnitt 15 äga företräde avseende Tillämplig lag och jurisdiktion för den berörda Användaren, i den utsträckning tvingande lokal lagstiftning kräver det.</p>
  </div>

  <!-- SECTION 16 -->
  <div class="tc-section" id="s16">
    <span class="section-num">Avsnitt 16</span>
    <h2>Allmänt</h2>
    <ul>
      <li><strong>Hela avtalet:</strong> Dessa Villkor utgör hela avtalet mellan FlexiShift och varje Användare avseende användningen av Plattformen.</li>
      <li><strong>Delbarhet:</strong> Ogiltiga eller icke-verkställbara bestämmelser ska ändras i minsta möjliga utsträckning; övriga bestämmelser förblir i full kraft.</li>
      <li><strong>Avstående:</strong> Underlåtenhet att göra en bestämmelse gällande innebär inte ett avstående från rätten att göra den gällande i framtiden.</li>
      <li><strong>Överlåtelse:</strong> FlexiShift får överlåta sina rättigheter och skyldigheter till en efterträdande juridisk person. Användare får inte överlåta sina rättigheter utan föregående skriftligt medgivande.</li>
      <li><strong>Språk:</strong> Dessa Villkor utfärdas på engelska. Norska och svenska översättningar finns tillgängliga på begäran. Vid eventuell konflikt gäller den engelska versionen, förutom där Tillämplig lag kräver annat.</li>
      <li><strong>Meddelanden:</strong> Formella meddelanden till FlexiShift ska skickas till den kontaktadress som publiceras på Plattformen.</li>
      <li><strong>Avstående från grupptalan:</strong> Användare samtycker till att framställa krav uteslutande i egen person och inte som en del av en grupptalan, representativ talan, kollektiv talan eller liknande förfarande, i den utsträckning lagen tillåter.</li>
      <li><strong>Försäkring:</strong> Förare, Företag och Transportörer ska inneha all försäkring som krävs enligt lag och branschpraxis, inklusive motorfordonsförsäkring, försäkring för gods under transport, ansvarsförsäkring samt annan försäkring som krävs för de tjänster som tillhandahålls. FlexiShift kontrollerar inte om försäkringen är tillräcklig och accepterar inget ansvar som uppstår till följd av otillräckligt eller utgånget försäkringsskydd.</li>
      <li><strong>Samarbete med myndigheter:</strong> Användare bekräftar att FlexiShift fullt ut kan samarbeta med polis, tullmyndigheter, tillsynsmyndigheter, transportmyndigheter, skattemyndigheter, domstolar och statliga organ, och kan lämna ut information utan föregående meddelande där detta är tillåtet eller krävs enligt lag.</li>
      <li><strong>Tillämplig lag:</strong> Med förbehåll för avsnitt 15 (Jurisdiktionsspecifika bestämmelser) ska dessa Villkor regleras av och tolkas i enlighet med lagstiftningen i England och Wales, och domstolarna i England och Wales ska ha exklusiv behörighet avseende tvister som uppstår ur eller har samband med dessa Villkor, Plattformen eller något Uppdrag. Detta påverkar inte tvingande konsumentskydd, lokala lagstadgade rättigheter eller jurisdiktionsmässiga rättigheter som tillkommer norska eller svenska Användare enligt avsnitt 15.</li>
    </ul>
  </div>

  <!-- SIGNING BLOCK -->
  <div class="signing-block">
    <p>Genom att registrera dig för eller fortsätta använda FlexiShift-plattformen bekräftar du att du har läst, förstått och godkänner att vara bunden av dessa Villkor och bestämmelser i sin helhet.</p>
    <p class="footer-detail">AI Planning Ltd, som bedriver verksamhet under namnet FlexiShift · Registrerat i England och Wales · Version 3.0 · Maj 2026 · Storbritannien • Norge • Sverige<br>Dessa Villkor finns tillgängliga på engelska och norska på begäran.</p>
  </div>

</div>
`;

export const tcHTMLByLang = {
  en: tcEnHTML,
  no: tcNoHTML,
  sv: tcSvHTML,
} as const;
