import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { karvioServices } from "@/lib/karvio-services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

function getServiceBySlug(slug: string) {
  return karvioServices.find((service) => service.slug === slug);
}

export async function generateStaticParams() {
  return karvioServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Leistung nicht gefunden | Karvio" };
  }

  return {
    title: `${service.title} | Karvio`,
    description: service.subtitle,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-5xl px-6 pb-8 pt-12 sm:px-10">
        <Link href="/leistungen" className="text-sm font-semibold text-sky-700 hover:text-sky-800">
          ← Alle Leistungen
        </Link>
        <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-sky-700">Karvio Leistung</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">{service.title}</h1>
        <p className="mt-4 text-lg text-slate-700">{service.subtitle}</p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-8 sm:px-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6 overflow-hidden rounded-xl border border-slate-200">
            <img src={service.image} alt={service.imageAlt} className="h-64 w-full object-cover" loading="lazy" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900">Was Sie erhalten</h2>
          <p className="mt-3 leading-relaxed text-slate-700">{service.intro}</p>
          <ul className="mt-5 space-y-2 text-slate-700">
            {service.points.map((point) => (
              <li key={point} className="rounded-lg bg-slate-50 px-4 py-2">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-20 sm:grid-cols-2 sm:px-10">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Für wen geeignet</h3>
          <ul className="mt-4 space-y-2 text-slate-700">
            {service.audience.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-sky-100 bg-sky-50 p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Ergebnis</h3>
          <p className="mt-4 text-slate-700">{service.outcome}</p>
          <a
            href="https://calendly.com/abrham-habtom/30min"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700"
          >
            Erstgespräch buchen
          </a>
        </article>
      </section>
    </main>
  );
}
