import Link from "next/link";
import { karvioServices } from "@/lib/karvio-services";

export default function ServicesOverviewPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-12 sm:px-10 lg:px-16">
        <Link href="/" className="text-sm font-semibold text-sky-700 hover:text-sky-800">
          ← Zurück zu Karvio
        </Link>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">Leistungen im Überblick</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Wählen Sie eine Leistung aus, um Details, Ablauf und Zielgruppe zu sehen.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-10 lg:px-16">
        <div className="grid gap-6 md:grid-cols-2">
          {karvioServices.map((service) => (
            <article key={service.slug} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img src={service.image} alt={service.imageAlt} className="h-44 w-full object-cover" loading="lazy" />
              <div className="p-6">
              <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
              <p className="mt-2 text-slate-700">{service.subtitle}</p>
              <Link
                href={`/leistungen/${service.slug}`}
                className="mt-5 inline-flex rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700"
              >
                Leistung ansehen
              </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
