import type { Lang } from '../context/LanguageContext';

export type DriversContent = {
  heroEyebrow: string;
  heroTitleBefore: string;
  heroTitleHighlight: string;
  heroTitleAfter: string;
  heroSub: string;
  heroCta: string;
  heroSecondary: string;
  heroNote: string;
  socialCaption: string;
  calcTitle: string;
  calcSub: string;
  calcRateLabel: string;
  calcHoursLabel: string;
  calcHoursSuffix: string;
  calcResultLabel: string;
  calcResultNote: string;
  calcFeeNote: string;
  currencySymbol: string;
  calcRateDefault: number;
  calcHoursDefault: number;
  perfectEyebrow: string;
  perfectTitle: string;
  perfectItems: string[];
  whyEyebrow: string;
  whyTitle: string;
  whySub: string;
  vsColOld: string;
  vsColNew: string;
  vsRows: { old: string; neu: string }[];
  catsEyebrow: string;
  catsTitle: string;
  cat1title: string;
  cat1label: string;
  cat1value: string;
  cat1chips: string[];
  cat1btn: string;
  cat2title: string;
  cat2label: string;
  cat2value: string;
  cat2chips: string[];
  cat2btn: string;
  cat3title: string;
  cat3chips: string[];
  cat3items: string[];
  cat3btn: string;
  perShift: string;
  catsDisclaimer: string;
  verifyEyebrow: string;
  verifyTitle: string;
  verifySub: string;
  verifyItems: string[];
  verifyCta: string;
  howEyebrow: string;
  howTitle: string;
  howSteps: { title: string; desc: string }[];
  trustEyebrow: string;
  trustTitle: string;
  trustItems: { icon: string; title: string; desc: string }[];
  finalTitle: string;
  finalSub: string;
  finalCta: string;
  footerHaulier: string;
};

export const driversContent: Record<Lang, DriversContent> = {
  en: {
    heroEyebrow: 'Now hiring near you',
    heroTitleBefore: 'Need an extra ',
    heroTitleHighlight: '£300–£600',
    heroTitleAfter: ' a week?',
    heroSub: 'Work when you want. Keep your current job. Choose the shifts that suit you.',
    heroCta: 'Register Free →',
    heroSecondary: 'See Available Shifts',
    heroNote: 'Free to join. Pay varies by job — rates shown before you accept.',
    socialCaption: 'Click to join us on Facebook and Instagram for regular updates on what we\'re doing:',
    calcTitle: 'See what you could earn',
    calcSub: 'A quick estimate — not a guarantee.',
    calcRateLabel: 'Your rate per hour',
    calcHoursLabel: 'Hours available per week',
    calcHoursSuffix: 'hrs / week',
    calcResultLabel: 'Estimated weekly earnings',
    calcResultNote: 'Gross, before tax',
    calcFeeNote: 'We don\'t charge drivers any platform fees. It\'s free to join.',
    currencySymbol: '£',
    calcRateDefault: 15,
    calcHoursDefault: 20,
    perfectEyebrow: 'Is this you?',
    perfectTitle: 'Perfect if you\'re...',
    perfectItems: [
      'An HGV driver wanting weekend work',
      'A retired driver wanting occasional shifts',
      'An agency driver looking for better flexibility',
      'A full-time driver wanting extra income',
      'A van driver looking for local work',
      'Someone who wants to get paid quickly',
    ],
    whyEyebrow: 'No more agency hassle',
    whyTitle: 'This is what work should feel like',
    whySub: 'No calls every morning. No waiting to get paid. Just work you choose, and money that arrives when the job\'s done.',
    vsColOld: 'Traditional Agency',
    vsColNew: 'FlexiShift',
    vsRows: [
      { old: 'Agency decides where you work', neu: 'You choose' },
      { old: 'Phone calls all day', neu: 'Everything in the app' },
      { old: 'Payment delays', neu: 'Secure escrow payments' },
      { old: 'Little transparency', neu: 'Know the rate before accepting' },
      { old: 'Limited flexibility', neu: 'Work whenever you want' },
    ],
    catsEyebrow: 'Available now',
    catsTitle: 'Find your category',
    cat1title: 'Professional Drivers',
    cat1label: 'Typical shift value',
    cat1value: '£250–£450',
    cat1chips: ['Class 1', 'Class 2', 'ADR', 'HIAB'],
    cat1btn: 'Register as Professional Driver',
    cat2title: 'Delivery Drivers',
    cat2label: 'Typical shift value',
    cat2value: '£120–£220',
    cat2chips: ['Evenings', 'Weekends', 'Multi-drop'],
    cat2btn: 'Register as Delivery Driver',
    cat3title: 'General Workforce',
    cat3chips: ['No licence needed'],
    cat3items: ['Warehouse & loading work', 'Delivery helper roles'],
    cat3btn: 'Coming Soon',
    perShift: ' / shift',
    catsDisclaimer:
      'Figures shown are typical ranges, not guaranteed pay. Actual earnings depend on the job, location and demand — the exact rate is always shown before you accept.',
    verifyEyebrow: 'Our biggest promise',
    verifyTitle: 'Every driver is verified',
    verifySub:
      'Professional drivers like professionalism. Here\'s exactly what we check before anyone joins the platform.',
    verifyItems: [
      'Live identity check',
      'DVLA verification',
      'Right to Work checked',
      'Secure payments',
      'Trusted by professional hauliers',
    ],
    verifyCta: 'Book your 5-minute video verification',
    howEyebrow: 'How it works',
    howTitle: 'From sign-up to your first shift',
    howSteps: [
      {
        title: 'Build Your Verified Profile',
        desc: 'Upload your licence, CPC, and ADR certifications to get instant verification.',
      },
      {
        title: 'Set Your Rates & Availability',
        desc: 'You choose your base rate and mark which days you\'re free to work.',
      },
      {
        title: 'Get Matched and Booked',
        desc: 'Receive job offers based on your location and vehicle expertise.',
      },
      {
        title: 'Secure Payments',
        desc: 'Payments are held in escrow and released automatically once the job is finished.',
      },
    ],
    trustEyebrow: 'Why drivers trust FlexiShift',
    trustTitle: 'You\'ll always know where you stand',
    trustItems: [
      { icon: '🔒', title: 'Escrow protected payments', desc: 'No chasing invoices.' },
      { icon: '🛡️', title: 'Verified hauliers', desc: 'Know who you\'re working for.' },
      { icon: '📍', title: 'Choose the jobs', desc: 'Accept only the work you want.' },
      { icon: '⭐', title: 'Build your reputation', desc: 'Good work earns better opportunities.' },
    ],
    finalTitle: 'Ready to start earning?',
    finalSub: 'Join drivers already using FlexiShift to pick up shifts on their terms.',
    finalCta: 'Register Now →',
    footerHaulier: 'For Hauliers',
  },
  no: {
    heroEyebrow: 'Vi rekrutterer nå i ditt område',
    heroTitleBefore: 'Trenger du ',
    heroTitleHighlight: '2 500–5 000 kr',
    heroTitleAfter: ' ekstra i uken?',
    heroSub: 'Jobb når du vil. Behold jobben din. Velg oppdragene som passer deg.',
    heroCta: 'Registrer deg gratis →',
    heroSecondary: 'Se ledige oppdrag',
    heroNote: 'Gratis å bli med. Lønn varierer per oppdrag — satsen vises før du takker ja.',
    socialCaption:
      'Klikk for å følge oss på Facebook og Instagram for jevnlige oppdateringer om hva vi driver med:',
    calcTitle: 'Se hva du kan tjene',
    calcSub: 'Et raskt estimat — ingen garanti.',
    calcRateLabel: 'Din timesats',
    calcHoursLabel: 'Ledige timer per uke',
    calcHoursSuffix: 't / uke',
    calcResultLabel: 'Estimert ukentlig inntekt',
    calcResultNote: 'Brutto, før skatt',
    calcFeeNote: 'Vi tar ikke plattformgebyrer fra sjåfører. Det er gratis å bli med.',
    currencySymbol: 'kr',
    calcRateDefault: 220,
    calcHoursDefault: 20,
    perfectEyebrow: 'Er dette deg?',
    perfectTitle: 'Perfekt hvis du er...',
    perfectItems: [
      'En vogntogsjåfør som vil ha helgeoppdrag',
      'En pensjonert sjåfør som vil ha oppdrag av og til',
      'En vikarbyrå-sjåfør som ønsker bedre fleksibilitet',
      'En heltidssjåfør som vil ha ekstra inntekt',
      'En varebilsjåfør som ønsker lokale oppdrag',
      'Noen som vil ha rask utbetaling',
    ],
    whyEyebrow: 'Ingen byråkrangel lenger',
    whyTitle: 'Slik skal det være å jobbe',
    whySub:
      'Ingen samtaler hver morgen. Ingen venting på lønn. Bare oppdrag du velger selv, og penger som kommer når jobben er gjort.',
    vsColOld: 'Vikarbyrå',
    vsColNew: 'FlexiShift',
    vsRows: [
      { old: 'Byrået bestemmer hvor du jobber', neu: 'Du velger selv' },
      { old: 'Telefonsamtaler hele dagen', neu: 'Alt i appen' },
      { old: 'Forsinket lønn', neu: 'Sikre escrow-betalinger' },
      { old: 'Lite åpenhet', neu: 'Se satsen før du takker ja' },
      { old: 'Begrenset fleksibilitet', neu: 'Jobb når du vil' },
    ],
    catsEyebrow: 'Tilgjengelig nå',
    catsTitle: 'Finn din kategori',
    cat1title: 'Profesjonelle sjåfører',
    cat1label: 'Typisk verdi per oppdrag',
    cat1value: '2 500–4 500 kr',
    cat1chips: ['Class 1', 'Class 2', 'ADR', 'HIAB'],
    cat1btn: 'Registrer deg som profesjonell sjåfør',
    cat2title: 'Varebilsjåfører',
    cat2label: 'Typisk verdi per oppdrag',
    cat2value: '1 200–2 200 kr',
    cat2chips: ['Kveld', 'Helg', 'Flere stopp'],
    cat2btn: 'Registrer deg som varebilsjåfør',
    cat3title: 'Generell arbeidskraft',
    cat3chips: ['Ingen førerkort nødvendig'],
    cat3items: ['Lager- og lastearbeid', 'Følgeperson ved levering'],
    cat3btn: 'Kommer snart',
    perShift: ' / oppdrag',
    catsDisclaimer:
      'Tallene som vises er typiske intervaller, ikke garantert lønn. Faktisk inntekt avhenger av oppdraget, stedet og etterspørselen — nøyaktig sats vises alltid før du takker ja.',
    verifyEyebrow: 'Vårt viktigste løfte',
    verifyTitle: 'Hver sjåfør er verifisert',
    verifySub:
      'Profesjonelle sjåfører liker profesjonalitet. Her er nøyaktig hva vi sjekker før noen blir med på plattformen.',
    verifyItems: [
      'Sanntids identitetssjekk',
      'Kontroll av førerkort',
      'Kontroll av arbeidstillatelse',
      'Sikre betalinger',
      'Tillit fra profesjonelle transportører',
    ],
    verifyCta: 'Book 5 minutters videoverifisering',
    howEyebrow: 'Slik fungerer det',
    howTitle: 'Fra registrering til ditt første oppdrag',
    howSteps: [
      {
        title: 'Bygg din verifiserte profil',
        desc: 'Last opp førerkort, YKB og ADR-sertifiseringer for umiddelbar verifisering.',
      },
      {
        title: 'Angi sats og tilgjengelighet',
        desc: 'Du velger grunnsatsen din og markerer hvilke dager du er ledig.',
      },
      {
        title: 'Bli matchet og booket',
        desc: 'Motta oppdragstilbud basert på sted og kjøretøykompetanse.',
      },
      {
        title: 'Sikre betalinger',
        desc: 'Betalingen holdes i escrow og frigjøres automatisk når oppdraget er ferdig.',
      },
    ],
    trustEyebrow: 'Hvorfor sjåfører stoler på FlexiShift',
    trustTitle: 'Du vet alltid hvor du står',
    trustItems: [
      { icon: '🔒', title: 'Escrow-sikrede betalinger', desc: 'Ingen fakturajag.' },
      { icon: '🛡️', title: 'Verifiserte transportører', desc: 'Vit hvem du jobber for.' },
      { icon: '📍', title: 'Velg oppdragene', desc: 'Ta kun de jobbene du vil ha.' },
      { icon: '⭐', title: 'Bygg omdømmet ditt', desc: 'Godt arbeid gir bedre muligheter.' },
    ],
    finalTitle: 'Klar til å begynne å tjene?',
    finalSub: 'Bli med sjåfører som allerede bruker FlexiShift til å ta oppdrag på egne vilkår.',
    finalCta: 'Registrer deg nå →',
    footerHaulier: 'For transportører',
  },
  sv: {
    heroEyebrow: 'Vi rekryterar nu i ditt område',
    heroTitleBefore: 'Behöver du ',
    heroTitleHighlight: '3 000–6 000 kr',
    heroTitleAfter: ' extra i veckan?',
    heroSub: 'Jobba när du vill. Behåll ditt nuvarande jobb. Välj de uppdrag som passar dig.',
    heroCta: 'Registrera dig gratis →',
    heroSecondary: 'Se lediga uppdrag',
    heroNote: 'Gratis att gå med. Lönen varierar per uppdrag — ersättningen visas innan du tackar ja.',
    socialCaption:
      'Klicka för att följa oss på Facebook och Instagram för regelbundna uppdateringar om vad vi gör:',
    calcTitle: 'Se vad du kan tjäna',
    calcSub: 'En snabb uppskattning — ingen garanti.',
    calcRateLabel: 'Din ersättning per timme',
    calcHoursLabel: 'Tillgängliga timmar per vecka',
    calcHoursSuffix: 'tim / vecka',
    calcResultLabel: 'Uppskattad veckoinkomst',
    calcResultNote: 'Brutto, före skatt',
    calcFeeNote: 'Vi tar inga plattformsavgifter från förare. Det är gratis att gå med.',
    currencySymbol: 'kr',
    calcRateDefault: 190,
    calcHoursDefault: 20,
    perfectEyebrow: 'Är detta du?',
    perfectTitle: 'Perfekt om du är...',
    perfectItems: [
      'En yrkesförare som vill ha helgpass',
      'En pensionerad förare som vill ha enstaka pass',
      'En bemanningsförare som vill ha bättre flexibilitet',
      'En heltidsförare som vill ha extra inkomst',
      'En skåpbilsförare som vill ha lokala uppdrag',
      'Någon som vill ha snabb utbetalning',
    ],
    whyEyebrow: 'Inget mer byråkrångel',
    whyTitle: 'Så här ska det kännas att jobba',
    whySub:
      'Inga samtal varje morgon. Ingen väntan på lön. Bara uppdrag du väljer själv, och pengar som kommer när jobbet är klart.',
    vsColOld: 'Bemanningsbolag',
    vsColNew: 'FlexiShift',
    vsRows: [
      { old: 'Bolaget bestämmer var du jobbar', neu: 'Du väljer själv' },
      { old: 'Telefonsamtal hela dagen', neu: 'Allt i appen' },
      { old: 'Försenad lön', neu: 'Säkra escrow-betalningar' },
      { old: 'Lite transparens', neu: 'Se ersättningen innan du tackar ja' },
      { old: 'Begränsad flexibilitet', neu: 'Jobba när du vill' },
    ],
    catsEyebrow: 'Tillgängligt nu',
    catsTitle: 'Hitta din kategori',
    cat1title: 'Yrkesförare',
    cat1label: 'Typiskt värde per pass',
    cat1value: '2 500–4 500 kr',
    cat1chips: ['Class 1', 'Class 2', 'ADR', 'HIAB'],
    cat1btn: 'Registrera dig som yrkesförare',
    cat2title: 'Leveransförare',
    cat2label: 'Typiskt värde per pass',
    cat2value: '1 200–2 200 kr',
    cat2chips: ['Kvällar', 'Helger', 'Flera stopp'],
    cat2btn: 'Registrera dig som leveransförare',
    cat3title: 'Allmän arbetskraft',
    cat3chips: ['Inget körkort krävs'],
    cat3items: ['Lager- och lastarbete', 'Medhjälpare vid leverans'],
    cat3btn: 'Kommer snart',
    perShift: ' / pass',
    catsDisclaimer:
      'Siffrorna som visas är typiska intervall, inte garanterad lön. Faktisk inkomst beror på uppdraget, platsen och efterfrågan — exakt ersättning visas alltid innan du tackar ja.',
    verifyEyebrow: 'Vårt viktigaste löfte',
    verifyTitle: 'Varje förare är verifierad',
    verifySub:
      'Yrkesförare uppskattar professionalism. Här är exakt vad vi kontrollerar innan någon går med på plattformen.',
    verifyItems: [
      'Identitetskontroll i realtid',
      'Körkortskontroll',
      'Kontroll av arbetstillstånd',
      'Säkra betalningar',
      'Betrodd av professionella åkerier',
    ],
    verifyCta: 'Boka 5 minuters videoverifiering',
    howEyebrow: 'Så funkar det',
    howTitle: 'Från registrering till ditt första pass',
    howSteps: [
      {
        title: 'Bygg din verifierade profil',
        desc: 'Ladda upp körkort, YKB och ADR-certifieringar för omedelbar verifiering.',
      },
      {
        title: 'Ange ersättning och tillgänglighet',
        desc: 'Du väljer din grundersättning och markerar vilka dagar du är ledig.',
      },
      {
        title: 'Bli matchad och bokad',
        desc: 'Få uppdragserbjudanden baserat på plats och fordonskompetens.',
      },
      {
        title: 'Säkra betalningar',
        desc: 'Betalningen hålls i escrow och frigörs automatiskt när uppdraget är klart.',
      },
    ],
    trustEyebrow: 'Varför förare litar på FlexiShift',
    trustTitle: 'Du vet alltid var du står',
    trustItems: [
      { icon: '🔒', title: 'Escrow-skyddade betalningar', desc: 'Ingen fakturajakt.' },
      { icon: '🛡️', title: 'Verifierade åkerier', desc: 'Vet vem du jobbar för.' },
      { icon: '📍', title: 'Välj uppdragen', desc: 'Ta bara de jobb du vill ha.' },
      { icon: '⭐', title: 'Bygg ditt rykte', desc: 'Bra arbete ger bättre möjligheter.' },
    ],
    finalTitle: 'Redo att börja tjäna?',
    finalSub: 'Gå med förare som redan använder FlexiShift för att ta uppdrag på egna villkor.',
    finalCta: 'Registrera dig nu →',
    footerHaulier: 'För åkerier',
  },
};
