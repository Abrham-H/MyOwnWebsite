export type KarvioService = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  intro: string;
  points: string[];
  audience: string[];
  outcome: string;
};

export const karvioServices: KarvioService[] = [
  {
    slug: "it-support-beratung-schweiz",
    title: "IT Support & Beratung Schweiz",
    subtitle:
      "Technische Hilfe für Privatpersonen und kleine Unternehmen (KMU) in der Schweiz - schnell und verständlich.",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "IT Support Arbeitsplatz mit Laptop und Technikgeräten",
    intro:
      "Wir helfen bei akuten IT-Problemen und verbessern gleichzeitig Stabilität, Sicherheit und Geschwindigkeit Ihrer Geräte.",
    points: [
      "Systemreinigung und Optimierung zur Leistungsverbesserung",
      "Datenschutz und Datenverlust-Prävention",
      "Computersicherheit und Virenschutz",
      "PC- und Notebook-Service",
      "Aufrüstung und Upgrades",
      "Beratung beim Neukauf von Geräten",
      "Software-Installationen und Konfigurationen",
      "Hilfe mit E-Mail, WLAN, Smartphone, Drucker und mehr",
    ],
    audience: [
      "Privatpersonen mit technischem Unterstützungsbedarf",
      "KMU mit laufenden IT-Aufgaben",
      "Selbstständige mit Bedarf an schneller Lösung",
    ],
    outcome: "Ein stabiles, sicheres und effizient funktionierendes System für Alltag und Arbeit.",
  },
  {
    slug: "bewerbungsservice-schweiz",
    title: "Bewerbungsservice Schweiz",
    subtitle: "Professionelle Bewerbungsunterlagen nach Schweizer Standard - für mehr Einladungen.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Professionelle Bewerbung auf Laptop und Schreibtisch",
    intro:
      "Wir optimieren Ihre Bewerbung so, dass sie professionell wirkt, ATS-tauglich ist und exakt zum Zielprofil passt.",
    points: [
      "Schweizer Lebenslauf (Swiss CV Standard)",
      "Motivationsschreiben mit ATS-Optimierung",
      "Interview-Training mit realistischen Szenarien",
      "Lehrstellen-Bewerbungen professionell aufbauen",
      "Karriereorientierung (EFZ, EBA, BM, Studium)",
    ],
    audience: [
      "Stellensuchende in der Schweiz",
      "Quereinsteigerinnen und Quereinsteiger",
      "Jugendliche in der Lehrstellensuche",
    ],
    outcome: "Klar strukturierte Bewerbungsunterlagen mit höherer Erfolgswahrscheinlichkeit.",
  },
  {
    slug: "lehrstellenbegleitung-schweiz",
    title: "Lehrstellenbegleitung Schweiz",
    subtitle: "Strukturierte Begleitung für Jugendliche und Eltern - von der Berufswahl bis zur Zusage.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Jugendliche bei Beratungsgespräch zur Lehrstelle",
    intro:
      "Wir begleiten den gesamten Prozess praxisnah, damit aus Unsicherheit ein klarer Fahrplan und messbare Fortschritte werden.",
    points: [
      "Erklärung des Schweizer Bildungssystems",
      "Unterstützung bei Berufswahl und Entscheidungsfindung",
      "Coaching für Eltern und Jugendliche",
      "Bewerbungsstrategie über mehrere Wochen",
      "Begleitung bis zum konkreten Ergebnis",
    ],
    audience: [
      "Jugendliche vor und während der Lehrstellensuche",
      "Eltern mit Bedarf an strukturierter Orientierung",
      "Lernende mit Optimierungsbedarf im Bewerbungsprozess",
    ],
    outcome: "Mehr Klarheit, bessere Bewerbungen und konkrete Fortschritte bis zur Lehrstelle.",
  },
  {
    slug: "digitale-kompetenz-kurs-schweiz",
    title: "Digitale Kompetenz Kurs Schweiz",
    subtitle: "Fit für den Schweizer Arbeitsmarkt - mit praxisnahen digitalen Grundlagen.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Digitale Schulung mit Laptop und Online-Meeting",
    intro:
      "Der Kurs vermittelt die digitalen Kernkompetenzen, die im Berufsalltag und in Bewerbungsprozessen erwartet werden.",
    points: [
      "Professionelle E-Mail-Erstellung und -Nutzung",
      "Ordnerstruktur und Cloud (OneDrive / Google Drive)",
      "Word, Excel und PowerPoint Grundlagen",
      "MS Teams / Zoom professionelles Verhalten",
      "LinkedIn-Profil und Jobportale optimal nutzen",
      "Cybersecurity Grundwissen für den Alltag",
    ],
    audience: [
      "Stellensuchende mit Bedarf an digitaler Sicherheit",
      "Berufseinsteigerinnen und Berufseinsteiger",
      "Personen mit Nachholbedarf in digitalen Grundlagen",
    ],
    outcome: "Sicheres Auftreten in digitalen Tools und bessere Chancen im Schweizer Arbeitsmarkt.",
  },
];
