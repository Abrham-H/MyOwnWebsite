import Image from "next/image";
import Link from "next/link";
import { karvioServices } from "@/lib/karvio-services";

const BOOKING_URL = "https://calendly.com/abrham-habtom/30min";

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
              <div className="group relative pb-2">
                <a href="/leistungen" className="inline-flex rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100">
                  Leistungen
                </a>
                <div className="invisible pointer-events-none absolute left-0 top-full z-30 min-w-[330px] rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                  {karvioServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/leistungen/${service.slug}`}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-sky-700"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
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
            <p className="mt-2 text-slate-700">Mo - Fr: 18:00 - 21:00</p>
            <p className="text-slate-700">Samstag: 09:00 - 18:00</p>
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
