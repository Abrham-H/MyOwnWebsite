"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Language = "de" | "ti";

const BOOKING_URL = "https://calendly.com/abrham-habtom/30min";

const content = {
  de: {
    brand: "Karvio",
    nav: { home: "Home", about: "Über mich", services: "Leistungen", contact: "Kontakt" },
    switchLabel: "Sprache",
    languageName: "Deutsch",
    heroTag: "IT Support & Karriereberatung in der Schweiz",
    heroTitle: "Ihr nächster Schritt. Klar gemacht.",
    heroText:
      "Karvio begleitet Jugendliche, Eltern und Stellensuchende in der Schweiz mit professioneller Karriereberatung, starken Bewerbungsunterlagen und praxisnahem IT Support.",
    heroPrimary: "Leistungen ansehen",
    heroSecondary: "Kostenloses Erstgespräch buchen",
    servicesTitle: "Unsere Leistungen",
    servicesText:
      "Vier Services, perfekt aufeinander abgestimmt – für digitale Kompetenz, starke Bewerbungsunterlagen und nachhaltige Karrierebegleitung in der Schweiz.",
    targetTitle: "Für wen ist Karvio?",
    processTitle: "So arbeiten wir zusammen",
    contactTitle: "Bereit für Ihren nächsten Schritt?",
    contactText:
      "Kontaktieren Sie uns für eine unverbindliche Erstberatung in der Schweiz. Sie erhalten einen klaren Plan für digitale Kompetenz, Bewerbung und Karriere.",
    contactTime: "Antwort innerhalb von 24 Stunden.",
    contactInfo: "Erstgespräch 30 Minuten – online oder vor Ort in der Schweiz. Tel.: 078 313 00 13",
    contactCta: "Jetzt Termin buchen →",
    aboutTag: "Über mich",
    aboutTitle: "Ihr persönlicher IT- und Karrierepartner in der Schweiz",
    aboutText:
      "Ich bin Abrham Habtom, IT-Spezialist und Gründer von Karvio. Mit über 5 Jahren Erfahrung in der Schweizer IT-Branche begleite ich Menschen persönlich bei digitalen Grundlagen, professionellen Bewerbungsunterlagen und praxisnaher Karriereplanung.",
    teamTitle: "Wer hinter Karvio steht",
    teamText:
      "Bei Karvio arbeiten Sie immer direkt mit mir – ohne wechselnde Ansprechpersonen und ohne Umwege.",
    customerValueTitle: "Was Kunden erhalten",
    askConsulting: "Jetzt Termin buchen →",
    founderBadge: "Founder",
    highlights: [
      { label: "Kundenzufriedenheit", value: "98%" },
      { label: "Begleitete Personen", value: "500+" },
      { label: "Praxismodule", value: "30+" },
      { label: "Antwortzeit", value: "<24h" },
    ],
    services: [
      {
        title: "IT Support & Beratung Schweiz",
        subtitle: "Technische Hilfe für Privatpersonen und kleine Unternehmen (KMU) in der Schweiz",
        points: [
          "Systemreinigung und Optimierung zur Leistungsverbesserung",
          "Datenschutz und Datenverlust-Prävention",
          "Computersicherheit und Schutzlösungen",
          "PC- und Notebook-Service",
          "Aufrüstung und Upgrades",
          "Beratung beim Neukauf von Geräten",
          "Software-Installationen und Konfigurationen",
          "Hilfe mit E-Mail, WLAN, Smartphone, Drucker und mehr",
        ],
        accent: "hover:border-emerald-200 hover:shadow-emerald-100/80",
      },
      {
        title: "Bewerbungsservice Schweiz",
        subtitle: "Professionelle Bewerbungsunterlagen nach Schweizer Standard",
        points: [
          "Schweizer Lebenslauf (Swiss CV Standard)",
          "Motivationsschreiben mit ATS-Optimierung",
          "Interview-Training mit realistischen Szenarien",
          "Lehrstellen-Bewerbungen professionell aufbauen",
          "Karriereorientierung (EFZ, EBA, BM, Studium)",
        ],
        accent: "hover:border-indigo-200 hover:shadow-indigo-100/80",
      },
      {
        title: "Lehrstellenbegleitung Schweiz",
        subtitle: "Strukturierte Begleitung für Jugendliche und Eltern",
        points: [
          "Erklärung des Schweizer Bildungssystems",
          "Unterstützung bei Berufswahl und Entscheidungsfindung",
          "Coaching für Eltern und Jugendliche",
          "Bewerbungsstrategie über mehrere Wochen",
          "Begleitung bis zum konkreten Ergebnis",
        ],
        accent: "hover:border-fuchsia-200 hover:shadow-fuchsia-100/80",
      },
      {
        title: "Digitale Kompetenz Kurs Schweiz",
        subtitle: "Fit für den Schweizer Arbeitsmarkt – mit praxisnahen digitalen Grundlagen",
        points: [
          "Professionelle E-Mail-Erstellung und -Nutzung",
          "Ordnerstruktur und Cloud (OneDrive / Google Drive)",
          "Word, Excel und PowerPoint Grundlagen",
          "MS Teams / Zoom professionelles Verhalten",
          "LinkedIn-Profil und Jobportale optimal nutzen",
          "Cybersecurity Grundwissen für den Alltag",
        ],
        accent: "hover:border-sky-200 hover:shadow-sky-100/80",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Kostenloses Erstgespräch",
        text: "Wir klären Ihre Ziele, aktuelle Situation und welche Leistungen den grössten Nutzen bringen. Online oder vor Ort in der Schweiz.",
      },
      {
        step: "02",
        title: "Individuelles Konzept",
        text: "Sie erhalten einen klaren Plan mit Zeitrahmen, Prioritäten und messbaren Schritten.",
      },
      {
        step: "03",
        title: "Praxisnahe Umsetzung",
        text: "Wir arbeiten direkt an Unterlagen, digitalen Skills, Ihrem Auftritt und Ihrer Interviewkompetenz.",
      },
      {
        step: "04",
        title: "Begleitung bis Ziel",
        text: "Wir optimieren laufend und begleiten Sie bis zur Bewerbung, Einladung oder Lehrstelle.",
      },
    ],
    targetGroups: [
      "✔ Jugendliche vor der Lehrstellensuche in der Schweiz",
      "✔ Eltern, die professionelle Orientierung für ihr Kind wünschen",
      "✔ Stellensuchende mit Fokus auf digitale Kompetenzen",
      "✔ Quereinsteigerinnen und Quereinsteiger im Schweizer Arbeitsmarkt",
      "✔ Privatpersonen und KMU mit IT-Bedarf in der Schweiz",
    ],
    customerValues: [
      "Persönliche 1:1 Betreuung",
      "Klare Strategie mit messbaren Schritten",
      "Moderne, praxisnahe Trainings",
      "Begleitung bis zum konkreten Ergebnis",
    ],
    teamMembers: [
      {
        name: "Abrham Habtom",
        role: "IT-Spezialist & Gründer",
        bio: "Ich begleite Menschen persönlich bei digitalen Grundlagen, professionellen Bewerbungsunterlagen und praxisnaher Karriereplanung – direkt in der Schweiz oder online.",
        focus: "Fokus: IT Support · Karriereberatung · Bewerbungsservice",
        specialty: "Spezialisierung: persönliche 1:1-Begleitung & klare Struktur",
        image: "/team-abraham.png",
        featured: true,
      },
    ],
    footerTop: "© 2025 Karvio | Schweiz",
    footerMiddle: "IT Support · Karriereberatung · Bewerbungsservice · Digitale Kompetenz",
    footerContact: "abrham.habtom@outlook.com | Tel. 078 313 00 13",
    footerLinks: [],
  },
  ti: {
    brand: "Karvio",
    nav: { home: "ቀዳማይ ገጽ", about: "ብዛዕባና", services: "ኣገልግሎታት", contact: "ርክብ" },
    switchLabel: "ቋንቋ",
    languageName: "ትግርኛ (ኤርትራ)",
    heroTag: "ኣብ ስዊዘርላንድ ሞያዊ ITን ካርየርን ምኽሪ",
    heroTitle: "ንሰባት ብዲጂታልን ብካርየርን ንጥንክር",
    heroText:
      "Logos ንወጣቶ፣ ንወለድን ንስራሕ ዝደልዩ ሰባትን ብዘመናዊ ስልጠናታት፣ ብሞያዊ ኣገልግሎት ማመልከቻን ብዝተወደበ ምስዓብ ካርየርን ንድግፎም።",
    heroPrimary: "ኣገልግሎታትና ርአዩ",
    heroSecondary: "ናጻ ምኽሪ ውሰዱ",
    servicesTitle: "ኣገልግሎታትና",
    servicesText:
      "4 ብሓደ ዝሰርሑ ኣገልግሎታት፦ ዲጂታል ክእለት፣ ጽቡቕ ማመልከቻ ፋይል፣ IT ቴክኒካዊ ደገፍን ነዊሕ ምምሕዳር ካርየርን።",
    targetTitle: "እዚ ኣገልግሎት ንመን እዩ",
    processTitle: "ኣካይዳ ኣገልግሎት",
    pricingTitle: "ዋጋ (ምሳሌ ርእሰ-ዋጋ)",
    pricingText:
      "ኣብ ስዊዘርላንድ ግልጽ ርእሰ-ዋጋ ንህብ። ትክክለኛ ዋጋ ኣብ ናጻ መጀመርታ ምኽሪ ንወስን፣ ቀዳም ግን ግልጽ ኦፈርታ ትቕበሉ።",
    pricingItems: [
      {
        title: "ኣገልግሎት ማመልከቻ (Switzerland)",
        price: "ካብ CHF 149",
        details: ["CV ምድላው (Swiss Standard)", "ATS ምምችቻው (CV)"],
      },
      {
        title: "ደብዳቤ ማመልከቻ",
        price: "ካብ CHF 119",
        details: ["ATS ምምችቻው", "ምስ ስራሕ መግለጺ ምስማማዕ"],
      },
      {
        title: "ኮቺንግ ማመልከቻ (Switzerland/Online)",
        price: "ካብ CHF 129 / ሰዓት",
        details: ["ስልጠና ቃለ-መጠይቕ", "ስትራቴጂን ግልጽ ቀጻሊ ስጉምትን"],
      },
      {
        title: "IT ምኽሪ ንውልቀ-ሰብ",
        price: "ካብ CHF 120 / ሰዓት",
        details: ["IT ደገፍ (remote/ቦታ)", "ምትካል፣ ሓለዋ፣ ምምሕያሽ"],
      },
    ],
    testimonialsTitle: "ምስክርነት ዓማዊል",
    testimonials: [
      {
        quote:
          "ስርዓታዊ ምኽሪ እና ግልጽ ስጉምትታት። CV ብቕልጡፍ ሞያዊ ኮይኑ እና ATS ዝምችእ ኮይኑ።",
        author: "ዓማዊል ካብ Switzerland",
      },
      {
        quote: "ፈጣን IT ደገፍ፣ ቀሊል ብምብራህ እና ጽቡቕ ስራሕ። ስርዓተይ ኣሁን ርጉእ እዩ።",
        author: "ዓማዊል (Switzerland)",
      },
      {
        quote: "ንመመልከቻ Lehrstelle ጽቡቕ ኮቺንግ። ብግልጽ መንገዲ ሂደት ክንሰርሕ ብዙሕ እምነት ረኺብና።",
        author: "ወለዲ (Switzerland)",
      },
    ],
    contactTitle: "ናብ ቀጻሊ ደረጃ ክትሰግሩ ድሉዋት ዲኹም?",
    contactText:
      "ናይ መጀመርታ ምኽሪ ናጻ እዩ። ንዲጂታል ክእለት፣ ማመልከቻን ካርየርን ግልጽ ፕላን ክትረኽቡ ትኽእሉ።",
    contactTime: "ኣብ ውሽጢ 24 ሰዓት መልሲ ንህብ።",
    contactInfo: "መጀመርታ ርክብ 30 ደቒቕ – ኦንላይን ወይ ብኣካል ኣብ ስዊዘርላንድ። ተሌፎን: 078 313 00 13",
    contactCta: "ናብ ቀጠሮ ይመዝገቡ →",
    aboutTag: "ብዛዕባና",
    aboutTitle: "ውልቃዊ IT መርዓት ንትምህርቲ፣ ማመልከቻን ካርየርን",
    aboutText:
      "ኣነ ኣብርሃም ሓብቶም 33 ዓመት እየ፣ ኣብ ስዊዘርላንድ ኣብ M&S Software Engineering እቲ IT ስራሕ እሰርሕ። ካብ 2019 ጀሚሩ ንሰባት ኣብ ዲጂታል መሰረታዊ ክእለት፣ ማመልከቻን ካርየርን ብLogos እየ ዝድግፍ።",
    teamTitle: "መን ይኾን እቲ Logos",
    teamText:
      "Logos ውልቃዊ ብሓደ ሰብ ዝተመርኮሰ ትካል እዩ። ክፍሊ ክሳብ መወዳእታ ስራሕኩም ኩሉ ብቀጥታ ምስኣብራሃም ትሰርሑ ኢኹም።",
    customerValueTitle: "ዓማዊል ዝረኽብዎ",
    askConsulting: "ምኽሪ ሕተቱ",
    founderBadge: "መስራቲ",
    highlights: [
      { label: "ዕግበት ዓማዊል", value: "98%" },
      { label: "ዝተሓገዙ ሰባት", value: "500+" },
      { label: "ናይ ስልጠና ሞዱላት", value: "30+" },
      { label: "ጊዜ ምላሽ", value: "<24h" },
    ],
    services: [
      {
        title: "IT ምትካል፣ ደገፍን ምኽሪን",
        subtitle: "ቴክኒካዊ ኣገልግሎት ንውልቀ-ሰባትን ንንኣሽቱ ትካላትን",
        points: [
          "ስርዓት ምጽራይን ንኣፈጻጽማ ምምሕያሽን",
          "ሓለዋ ዳታን ንኽሳራ ዳታ ምክልኻል ስጉምትታትን",
          "ሓለዋ ኮምፒተርን መፍትሒታት ጥበቃን",
          "PCን Notebookን ኣብ ስራሕ እንከለዉ ሰርቪስ",
          "ምዕባለን ኣፕግሬድን ኮምፒተራት",
          "ኣብ ሓድሽ ግዝኣት PCን Notebookን ምድጋፍ",
          "ምትካል ሶፍትዌር",
          "ውልቃዊ ኮንፊግሬሽን",
          "እቲ ዝደልዩ ተጠቃሚ ዲጂታል ጉዳያት (ኢሜይል፣ WLAN፣ ስማርትፎን፣ ፕሪንተር፣ TV ወዘተ) ንምሕጋዝ",
          "ዋጋ ንጽጽር ኣብ Service Interdiscount እና Multimediacom Jordi",
        ],
        accent: "hover:border-emerald-200 hover:shadow-emerald-100/80",
      },
      {
        title: "ኣገልግሎት ማመልከቻን ካርየርን",
        subtitle: "ቴክኖሎጂ ክእለት ምስ ካርየር ክእለት",
        points: [
          "ናይ CV ምድላው (Swiss Standard)",
          "ደብዳቤ ማመልከቻ ምስ ATS ምምችቻው",
          "ስልጠና ቃለ-መጠይቕ ብሓቀኛ ኩነታት",
          "ማመልከቻ Lehrstelle ብሞያዊ መገዲ",
          "ካርየር ኣቕጣጫ (EFZ, EBA, BM, Studium)",
        ],
        accent: "hover:border-indigo-200 hover:shadow-indigo-100/80",
      },
      {
        title: "ንወጣቶ ምምሕዳር ካርየር",
        subtitle: "ነዊሕ ግዜ ውጽኢታዊ ምስዓብ",
        points: [
          "ስርዓተ ትምህርቲ ስዊዘርላንድ ምብራህ",
          "ዝግባእ ሞያ ምርጫ ምድጋፍ",
          "ንወለዲን ወጣቶን ኮቺንግ",
          "ብዝተወደበ ስትራቴጂ ማመልከቻ",
          "ክሳብ ውጽኢት ቀጻሊ ምስዓብን ምሕያሽን",
        ],
        accent: "hover:border-fuchsia-200 hover:shadow-fuchsia-100/80",
      },
      {
        title: "ዲጂታል መሰረታዊ ስልጠና",
        subtitle: "ንገበያ ስራሕ ስዊዘርላንድ ዝተዳለወ",
        points: [
          "ሞያዊ ኢሜይል ምጽሓፍን ምጥቃምን",
          "ስርዓተ ፎልደርን Cloud (OneDrive / Google Drive)ን",
          "መሰረታት Word, Excel ን PowerPoint",
          "MS Teams / Zoom ሞያዊ ስነ-ምግባር",
          "LinkedIn ፕሮፋይልን ናይ ስራሕ ፖርታላትን ብግቡእ ምጥቃም",
          "መሰረታዊ ንቕሓት ሓለዋ ዲጂታል",
        ],
        accent: "hover:border-sky-200 hover:shadow-sky-100/80",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "ናጻ መጀመርታ ምኽሪ",
        text: "ዕላማታትኩም፣ ሕጂ ኩነታትኩምን ዝበለጸ ጥቕሚ ዘለዎ ኣገልግሎትን ንግምግም።",
      },
      {
        step: "02",
        title: "ውልቃዊ ፕላን",
        text: "ግልጽ ፕላን ምስ ግዜ ሰሌዳ፣ ቀዳምነትን ዝተመዘኑ ደረጃታትን ክትረኽቡ ኢኹም።",
      },
      {
        step: "03",
        title: "ብተግባር ምፍጻም",
        text: "ብቀጥታ ኣብ ፋይላት፣ ዲጂታል ክእለት፣ ኣቀራርባን ብቕዓት ቃለ-መጠይቕን ንሰርሕ።",
      },
      {
        step: "04",
        title: "ክሳብ ዕላማ ምስዓብ",
        text: "ቀጻሊ ምሕያሽን ክሳብ ማመልከቻ፣ መጸዋዕታ ቃለ-መጠይቕ ወይ ስራሕ ንምርካብ ንስዕብኩም።",
      },
    ],
    targetGroups: [
      "ወጣቶ ቅድሚ ማመልከቻ Lehrstelle",
      "ወለዲ ሞያዊ ኣቕጣጫ ዝደልዩ",
      "ስራሕ ዝደልዩ ሰባት ብዲጂታል ክእለት ዝተተኮረ",
      "ኣብ ስዊዘርላንድ ገበያ ስራሕ ዝግበሩ ቀየርቲ ሞያ",
    ],
    customerValues: [
      "ውልቃዊ ክትትል 1:1",
      "ግልጽ ስትራቴጂ ምስ ዝተመዘነ ደረጃታት",
      "ዘመናዊን ብተግባርን ስልጠና",
      "ክሳብ ንጹር ውጽኢት ቀጻሊ ምስዓብ",
    ],
    teamMembers: [
      {
        name: "ኣብርሃም ሓብቶም",
        role: "መስራቲን ሓላፊ ITን ምኽሪ ካርየርን",
        bio: "ኣብርሃም ሓብቶም 33 ዓመት እዩ፣ ኣብ ስዊዘርላንድ ኣብ M&S Software Engineering እቲ IT ስራሕ ይገብር። ካብ 2019 ጀሚሩ ንሰባት ኣብ ዲጂታል መሰረታዊ ስልጠና፣ ማመልከቻን ካርየርን ይድግፍ። ብምግባር ፈቲዩ ዘለዎ ከም ኩላማን ፈሳስስ፣ መሓዛን እና መወዳእታ መሬት መዓረፍ (climbing)።",
        focus: "ትኩረት: IT ደገፍ፣ ዲጂታል ክእለት፣ ማመልከቻን ካርየርን",
        specialty: "ልዩ ክእለት: ብተግባር ስልጠናን ውልቃዊ 1:1 ምምሕዳርን",
        image: "/team-abraham.png",
        featured: true,
      },
    ],
    footerTop: "© 2025 Karvio | Schweiz",
    footerMiddle: "IT Support · Karriereberatung · Bewerbungsservice · Digitale Kompetenz",
    footerContact: "abrham.habtom@outlook.com | Tel. 078 313 00 13",
    footerLinks: [],
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "de";
    }
    const saved = window.localStorage.getItem("abraham-language");
    return saved === "de" || saved === "ti" ? saved : "de";
  });
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const t = content[language];

  useEffect(() => {
    window.localStorage.setItem("abraham-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const handleLanguageChange = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    setIsLanguageMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-6 py-4 sm:px-10 lg:px-16">
          <nav className="flex flex-wrap items-center gap-1 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
            <a
              href="#home"
              className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-bold tracking-tight text-slate-900"
            >
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 text-[10px] font-bold text-white">
                KV
              </span>
              <span>{t.brand}</span>
            </a>

            <a
              href="#home"
              className="whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-sky-700"
            >
              {t.nav.home}
            </a>
            <a
              href="#ueber-mich"
              className="whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-sky-700"
            >
              {t.nav.about}
            </a>
            <a
              href="#leistungen"
              className="whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-sky-700"
            >
              {t.nav.services}
            </a>
            <a
              href="#kontakt"
              className="whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-sky-700"
            >
              {t.nav.contact}
            </a>

            <div className="relative ml-1 shrink-0">
              <button
                type="button"
                onClick={() => setIsLanguageMenuOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-white"
                aria-haspopup="menu"
                aria-expanded={isLanguageMenuOpen}
                aria-label={t.switchLabel}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path d="M3 12h18" />
                  <path d="M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9Z" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
                <span>{language.toUpperCase()}</span>
                <span className="text-slate-400">▾</span>
              </button>

              {isLanguageMenuOpen && (
                <div
                  className="absolute right-0 top-12 z-40 min-w-44 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg"
                  role="menu"
                >
                  <button
                    type="button"
                    onClick={() => handleLanguageChange("de")}
                    className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-semibold transition ${
                      language === "de"
                        ? "bg-sky-600 text-white"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                    role="menuitem"
                  >
                    <span aria-hidden="true">🇨🇭</span>
                    <span>{content.de.languageName}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLanguageChange("ti")}
                    className={`mt-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-semibold transition ${
                      language === "ti"
                        ? "bg-sky-600 text-white"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                    role="menuitem"
                  >
                    <span aria-hidden="true">🇪🇷</span>
                    <span>{content.ti.languageName}</span>
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>

      <section id="home" className="mx-auto max-w-6xl px-6 pb-14 pt-12 sm:px-10 lg:px-16">
        <div className="relative overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-8 shadow-xl shadow-sky-100/60 sm:p-12">
          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-sky-200/45 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-indigo-200/45 blur-3xl" />

          <div className="relative">
            <p className="mb-4 inline-flex rounded-full border border-sky-200 bg-white px-4 py-1 text-sm font-semibold text-sky-700">
              {t.heroTag}
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {t.heroTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
              {t.heroText}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#leistungen"
                className="rounded-xl bg-sky-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-sky-700"
              >
                {t.heroPrimary}
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-center font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                {t.heroSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="leistungen" className="mx-auto max-w-6xl px-6 pb-10 sm:px-10 lg:px-16">
        <div className="mb-7">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">{t.servicesTitle}</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            {t.servicesText}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {t.services.map((service, serviceIndex) => (
            <article
              key={`${service.title}-${serviceIndex}`}
              className={`group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${service.accent}`}
            >
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-1 text-sm font-medium text-sky-700">{service.subtitle}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {service.points.map((point) => (
                  <li key={point} className="rounded-lg bg-slate-50 px-3 py-2">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="zielgruppe" className="mx-auto max-w-6xl px-6 pb-10 sm:px-10 lg:px-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{t.targetTitle}</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {t.targetGroups.map((item, itemIndex) => (
              <p
                key={`${item}-${itemIndex}`}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="ablauf" className="mx-auto max-w-6xl px-6 pb-10 sm:px-10 lg:px-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{t.processTitle}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {t.processSteps.map((step, stepIndex) => (
              <article
                key={`${step.title}-${stepIndex}`}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-semibold text-sky-700">{step.step}</p>
                <h3 className="mt-1 font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-slate-700">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      

      <section id="kontakt" className="mx-auto max-w-6xl px-6 pb-10 sm:px-10 lg:px-16">
        <div className="rounded-3xl border border-sky-100 bg-gradient-to-r from-sky-50 to-white p-8 text-center shadow-sm sm:p-12">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{t.contactTitle}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-700">
            {t.contactText}
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-slate-600">{t.contactTime}</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-700"
            >
              {t.contactCta}
            </a>
            <a
              href="mailto:abrham.habtom@outlook.com"
              className="inline-flex rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-100"
            >
              abrham.habtom@outlook.com
            </a>
          </div>
          <p className="mt-3 text-sm text-slate-500">{t.contactInfo}</p>
        </div>
      </section>

      <section id="ueber-mich" className="mx-auto max-w-6xl px-6 pb-24 sm:px-10 lg:px-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">{t.aboutTag}</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{t.aboutTitle}</h2>
          <p className="mt-3 max-w-4xl leading-relaxed text-slate-700">{t.aboutText}</p>
          <p className="mt-2 max-w-3xl text-slate-600">{t.teamText}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.highlights.map((item, highlightIndex) => (
              <div
                key={`${item.label}-${highlightIndex}`}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-2xl font-bold text-slate-900">{item.value}</p>
                <p className="mt-1 text-sm text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-1 justify-items-center">
            {t.teamMembers.map((member, memberIndex) => (
              <article
                key={`${member.name}-${memberIndex}`}
                className={`group w-full max-w-sm overflow-hidden rounded-2xl border bg-slate-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  member.featured
                    ? "border-sky-200 ring-1 ring-sky-100 hover:border-sky-300 hover:shadow-sky-100/80"
                    : "border-slate-200 hover:border-sky-200 hover:shadow-sky-100/70"
                }`}
              >
                <div
                  className={`relative flex h-68 w-full items-center justify-center overflow-hidden ${
                    member.featured
                      ? "bg-gradient-to-br from-sky-200 to-indigo-200"
                      : "bg-gradient-to-br from-sky-100 to-indigo-100"
                  }`}
                >
                  <div
                    className={`relative translate-x-2 overflow-hidden rounded-full border-4 border-white shadow-lg ${
                      member.featured ? "h-52 w-52 ring-4 ring-sky-100" : "h-32 w-32"
                    }`}
                  >
                    <Image
                      src={member.image}
                      alt={
                        member.featured
                          ? "Abrham Habtom IT Karriereberater Schweiz Karvio"
                          : `${member.name} Karvio`
                      }
                      fill
                      sizes="160px"
                      className={`object-cover transition duration-500 group-hover:scale-105 ${
                        member.featured ? "object-[center_5%]" : "object-[center_22%]"
                      }`}
                    />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {member.name}
                    {member.featured && (
                      <span className="ml-2 rounded-full bg-sky-100 px-2 py-0.5 align-middle text-xs font-semibold text-sky-700">
                        {t.founderBadge}
                      </span>
                    )}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-sky-700">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">{member.bio}</p>
                  {!member.featured && (
                    <div className="mt-4 space-y-2">
                      <p className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700">
                        {member.focus}
                      </p>
                      <p className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700">
                        {member.specialty}
                      </p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 to-white p-5 text-center">
            <h3 className="text-lg font-semibold text-slate-900">{t.customerValueTitle}</h3>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {t.customerValues.map((value, valueIndex) => (
                <span
                  key={`${value}-${valueIndex}`}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700"
                >
                  {value}
                </span>
              ))}
            </div>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              {t.askConsulting}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:px-10 lg:px-16">
          <p className="text-sm font-semibold text-slate-900">{t.footerTop}</p>
          <p className="mt-2 text-sm text-slate-600">{t.footerMiddle}</p>
          <p className="mt-3 text-sm text-slate-700">{t.footerContact}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-sky-700">
            {t.footerLinks.map((label) => (
              <a key={label} href="#" className="rounded-lg px-2 py-1 hover:bg-sky-50">
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
