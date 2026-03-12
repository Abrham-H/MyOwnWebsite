import Image from "next/image";

const BOOKING_URL = "https://calendly.com/abrham-habtom/30min";

const services = [
  {
    title: "IT Support & Beratung Schweiz",
    text: "Technische Hilfe für Privatpersonen und kleine Unternehmen (KMU) in der Schweiz",
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
  },
  {
    title: "Bewerbungsservice Schweiz",
    text: "Professionelle Bewerbungsunterlagen nach Schweizer Standard",
    points: [
      "Schweizer Lebenslauf (Swiss CV Standard)",
      "Motivationsschreiben mit ATS-Optimierung",
      "Interview-Training mit realistischen Szenarien",
      "Lehrstellen-Bewerbungen professionell aufbauen",
      "Karriereorientierung (EFZ, EBA, BM, Studium)",
    ],
  },
  {
    title: "Lehrstellenbegleitung Schweiz",
    text: "Strukturierte Begleitung für Jugendliche und Eltern",
    points: [
      "Erklärung des Schweizer Bildungssystems",
      "Unterstützung bei Berufswahl und Entscheidungsfindung",
      "Coaching für Eltern und Jugendliche",
      "Bewerbungsstrategie über mehrere Wochen",
      "Begleitung bis zum konkreten Ergebnis",
    ],
  },
  {
    title: "Digitale Kompetenz Kurs Schweiz",
    text: "Fit für den Schweizer Arbeitsmarkt - mit praxisnahen digitalen Grundlagen",
    points: [
      "Professionelle E-Mail-Erstellung und -Nutzung",
      "Ordnerstruktur und Cloud (OneDrive / Google Drive)",
      "Word, Excel und PowerPoint Grundlagen",
      "MS Teams / Zoom professionelles Verhalten",
      "LinkedIn-Profil und Jobportale optimal nutzen",
      "Cybersecurity Grundwissen für den Alltag",
    ],
  },
  {
    title: "Landingpage & Webdesign",
    text: "Moderne, conversion-starke Webseiten für Selbstständige, KMU und lokale Dienstleistungen in der Schweiz",
    points: [
      "Individuelles Design passend zu Ihrer Marke",
      "Klare Struktur für mehr Anfragen und Buchungen",
      "Mobile-optimierte Darstellung auf allen Geräten",
      "SEO-Grundoptimierung für bessere Sichtbarkeit",
      "Texte, Call-to-Actions und Kontaktfluss aus einer Hand",
      "Schnelle Umsetzung mit persönlicher Betreuung",
    ],
  },
];

const processSteps = [
  {
    title: "Kostenloses Erstgespräch",
    text: "Wir klären Ihre Ziele, Ausgangslage und priorisieren die wichtigsten Hebel.",
  },
  {
    title: "Individuelles Konzept",
    text: "Sie erhalten einen klaren Plan mit Zeitrahmen, Aufgaben und messbaren Ergebnissen.",
  },
  {
    title: "Praxisnahe Umsetzung",
    text: "Wir arbeiten direkt an Unterlagen, digitalen Skills und Ihrem professionellen Auftritt.",
  },
  {
    title: "Begleitung bis zum Ziel",
    text: "Kontinuierliche Optimierung bis zur Bewerbung, Einladung oder Lehrstellenzusage.",
  },
];

const faqs = [
  {
    q: "Für wen ist Karvio geeignet?",
    a: "Für Jugendliche, Eltern, Stellensuchende, Quereinsteiger sowie Privatpersonen und KMU mit IT-Bedarf.",
  },
  {
    q: "Wie schnell erhalte ich eine Antwort?",
    a: "In der Regel innerhalb von 24 Stunden. Das Erstgespräch dauert 30 Minuten.",
  },
  {
    q: "Sind die Dienstleistungen nur online?",
    a: "Nein. Je nach Bedarf arbeiten wir online oder vor Ort in der Schweiz.",
  },
];

const audiences = [
  "Jugendliche auf Lehrstellensuche",
  "Eltern, die bei der Berufswahl begleiten",
  "Stellensuchende und Quereinsteiger",
  "Privatpersonen und KMU mit IT-Bedarf",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4 sm:px-10 lg:px-16">
          <nav className="flex flex-wrap items-center justify-between gap-3">
            <a href="#home" className="inline-flex items-center gap-3 text-xl font-extrabold tracking-tight">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-sky-600 text-base font-bold text-white">KV</span>
              <span>Karvio</span>
            </a>
            <div className="flex flex-wrap items-center gap-1 text-base font-semibold sm:text-lg">
              <a href="#home" className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100">Home</a>
              <a href="#about" className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100">Über mich</a>
              <a href="#services" className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100">Leistungen</a>
              <a href="#contact" className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100">Kontakt</a>
            </div>
          </nav>
        </div>
      </header>

      <section id="home" className="mx-auto max-w-6xl px-6 pb-16 pt-14 sm:px-10 lg:px-16">
        <div className="rounded-3xl border border-sky-100 bg-sky-50/60 px-8 py-12 sm:px-12">
          <p className="inline-flex rounded-full border border-sky-300 bg-white px-5 py-2 text-lg font-semibold text-sky-700 sm:text-xl">
            IT Support & Karriereberatung in der Schweiz.
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">Ihr nächster Schritt. Klar gemacht.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-800">
            Karvio begleitet Jugendliche, Eltern und Stellensuchende in der Schweiz mit professioneller
            Karriereberatung, starken Bewerbungsunterlagen und praxisnahem IT Support.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#audience" className="rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white hover:bg-sky-700">
              Für wen ist Karvio
            </a>
            <a href="#booking" className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-50">
              Kostenloses Erstgespräch buchen
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 pb-12 sm:px-10 lg:px-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Unsere Leistungen</h2>
          <p className="mt-2 max-w-3xl text-lg text-slate-600 sm:text-xl">
            Vier Services, perfekt aufeinander abgestimmt - für digitale Kompetenz, starke Bewerbungsunterlagen
            und nachhaltige Karrierebegleitung in der Schweiz.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sky-800">{service.text}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.points.map((point) => (
                  <p key={point} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-800">
                    {point}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="audience" className="mx-auto max-w-6xl px-6 pb-12 sm:px-10 lg:px-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Für wen ist Karvio?</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {audiences.map((audience) => (
              <div key={audience} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800">
                ✓ {audience}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12 sm:px-10 lg:px-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">So arbeiten wir zusammen</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-sky-700">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-1 font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-12 sm:px-10 lg:px-16">
        <div className="rounded-3xl border border-sky-100 bg-sky-50 p-8 shadow-sm sm:p-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Bereit für Ihren nächsten Schritt?</h2>
          <p className="mt-3 max-w-3xl text-slate-700">
            Kontaktieren Sie uns für eine unverbindliche Erstberatung. Sie erhalten einen klaren Plan für
            Bewerbung, Karriere und digitale Kompetenz.
          </p>
          <p className="mt-2 text-slate-700">Antwort innerhalb von 24 Stunden.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#booking" className="rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white hover:bg-sky-700">
              Jetzt Termin buchen
            </a>
            <a href="mailto:info@karvio.ch" className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 hover:bg-slate-100">
              info@karvio.ch
            </a>
            <a href="tel:+41783130013" className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 hover:bg-slate-100">
              078 313 00 13
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 pb-12 sm:px-10 lg:px-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">Über mich</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Ihr persönlicher IT- und Karrierepartner in der Schweiz
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-center">
            <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-full border border-slate-200">
              <Image
                src="/team-abraham.png"
                alt="Abrham Habtom IT Karriereberater Schweiz Karvio"
                fill
                sizes="224px"
                className="object-cover object-[center_5%]"
              />
            </div>
            <p className="leading-relaxed text-slate-700">
              Ich bin Abrham Habtom, IT-Spezialist und Gründer von Karvio. Mit über 5 Jahren Erfahrung
              begleite ich Menschen bei digitalen Grundlagen, Bewerbungsunterlagen und praxisnaher
              Karriereplanung. Bei Karvio arbeiten Sie immer direkt mit mir.
            </p>
          </div>
        </div>
      </section>

      <section id="booking" className="mx-auto max-w-6xl px-6 pb-12 sm:px-10 lg:px-16">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Jetzt Termin buchen</h2>
          <p className="mt-3 max-w-3xl text-slate-700">Buchen Sie Ihr Erstgespräch direkt im Kalender.</p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <iframe src={BOOKING_URL} title="Karvio Terminbuchung" className="h-[780px] w-full" loading="lazy" />
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 text-sm sm:grid-cols-2 sm:px-10 lg:grid-cols-3 lg:px-16">
          <div>
            <p className="font-semibold text-slate-900">Karvio</p>
            <p className="mt-2 text-slate-600">IT Support · Karriereberatung · Bewerbungsservice</p>
            <p className="mt-2 text-slate-700">info@karvio.ch</p>
            <p className="text-slate-700">Tel. 078 313 00 13</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Öffnungszeiten</p>
            <p className="mt-2 text-slate-700">Montag - Freitag: 08:00 - 18:00</p>
            <p className="text-slate-700">Samstag: nach Vereinbarung</p>
            <p className="text-slate-700">Sonntag: geschlossen</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Region</p>
            <p className="mt-2 text-slate-700">Schweiz (online & vor Ort)</p>
            <p className="mt-4 text-slate-500">© 2025 Karvio. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
