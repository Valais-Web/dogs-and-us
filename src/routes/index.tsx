import { type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import embarazoAsset from "@/assets/embarazo-perro.jpg.asset.json";
import familiaAsset from "@/assets/familia-jardin.jpg.asset.json";
import nieveAsset from "@/assets/nina-perro-nieve.jpg.asset.json";
import picnicAsset from "@/assets/bebe-perro-picnic.jpg.asset.json";
import tallerLimitesAsset from "@/assets/taller-limites.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dogs and Us | Educación canina para familias" },
      { name: "description", content: "Recursos y educación canina para una convivencia segura y feliz entre perros, bebés y niños, con Silvia Gómez en Barcelona." },
      { property: "og:title", content: "Dogs and Us | Perros y bebés" },
      { property: "og:description", content: "Educación canina para familias con perros y bebés, con Silvia Gómez en Barcelona." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function Polaroid({ src, date, alt, direction = "left", className = "" }: { src: string; date: string; alt: string; direction?: "left" | "right"; className?: string }) {
  return <figure className={`polaroid sway-${direction} ${className}`}>
    <div className="polaroid-nail" aria-hidden="true" />
    <div className="polaroid-frame">
      <img src={src} alt={alt} />
      <figcaption>{date}</figcaption>
    </div>
  </figure>;
}

function CourseCard({ src, title, text, label, to }: { src: string; title: string; text: string; label: string; to: "/programa" | "/recursos" }) {
  return <article className="course-card">
    <img src={src} alt="Familia compartiendo tiempo con su perro" loading="lazy" />
    <h3>{title}</h3><p>{text}</p>
    <Link to={to} className="mexican-button">{label}<ArrowRight /></Link>
  </article>;
}

const testimonials = Array.from({ length: 4 }, (_, i) => ({ quote: "[ESPACIO PARA RESEÑA REAL]", person: `[Cliente ${i + 1}] · [Perro]` }));

const bannerWords = [
  "presentación segura",
  "comunidad de dog moms",
  "rutinas flexibles",
  "acceso de por vida",
  "educación respetuosa",
  "familias sin mucho tiempo",
  "recursos online",
  "acceso remoto 100%",
];

function HomePage() {
  return <div className="wall-bg">
    <section className="home-hero">
      <div className="home-hero-heading">
        <h1>Educación canina para familias<br />con perros y bebés</h1>
        <p className="hand hero-subtitle">Un hogar seguro y feliz para todos<span>con el método <strong>CRECEN</strong></span></p>
      </div>
      <div className="hero-polaroids">
        <Polaroid src={embarazoAsset.url} date="Octubre 2023" alt="Silvia embarazada junto a su perro" direction="left" className="hero-polaroid" />
        <div className="hero-copy">
          <p>prepara a tu perro para la llegada de tu bebé y evita o resuelve problemas de convivencia entre perros y niños</p>
          <Link to="/programa" className="blush-button">Ver cursos <ArrowRight /></Link>
        </div>
        <Polaroid src={familiaAsset.url} date="Abril 2026" alt="Familia con niños y perro en el jardín" direction="right" className="hero-polaroid" />
      </div>
    </section>

    <section className="values-banner" aria-label="Ventajas de Dogs and Us">
      <div className="values-track">
        {[...bannerWords, ...bannerWords].map((word, index) => <span key={`${word}-${index}`}><i aria-hidden="true">✦</i>{word}</span>)}
      </div>
    </section>

    <section className="question-band">
      <div className="scroll-story">
        <div className="scroll-story-media" aria-hidden="true"><img src={tallerLimitesAsset.url} alt="" /></div>
        <div className="scroll-story-overlay" aria-hidden="true" />
        <div className="scroll-story-copy">
          <h2>¿Quieres hacer vida en familia tranquila y divertida sin que tu perro se sienta desplazado y asegurando una buena convivencia entre todos?</h2>
        </div>
      </div>
      <div className="ribbon-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path className="ribbon-wave-line" d="M-90,60 C-60,26 -30,26 0,60 C30,94 60,94 90,60 C120,26 150,26 180,60 C210,94 240,94 270,60 C300,26 330,26 360,60 C390,94 420,94 450,60 C480,26 510,26 540,60 C570,94 600,94 630,60 C660,26 690,26 720,60 C750,94 780,94 810,60 C840,26 870,26 900,60 C930,94 960,94 990,60 C1020,26 1050,26 1080,60 C1110,94 1140,94 1170,60 C1200,26 1230,26 1260,60 C1290,94 1320,94 1350,60 C1380,26 1410,26 1440,60 C1470,94 1500,94 1530,60" />
        </svg>
      </div>
      <div className="baby-message"><strong>la llegada de un bebé no es fácil para nosotros...</strong><span className="hand">para nuestros perros tampoco</span></div>
      <Polaroid src={nieveAsset.url} date="Noviembre 2024" alt="Niña caminando con su perro en la nieve" className="snow-polaroid" />
    </section>

    <section className="courses-section">
      <div className="courses-grid">
        <CourseCard src={embarazoAsset.url} title="Pre-Bebé" text="Para familias que esperan la llegada de su bebé." label="Preparar la llegada" to="/programa" />
        <CourseCard src={familiaAsset.url} title="Bebé y toddler" text="Para acompañar cada nueva etapa en casa." label="Ver cursos" to="/programa" />
        <CourseCard src={picnicAsset.url} title="Lenguaje canino" text="Para comprender mejor lo que tu perro comunica." label="Aprender a leerle" to="/recursos" />
      </div>
      <Polaroid src={picnicAsset.url} date="Junio 2026" alt="Bebé y perro compartiendo un picnic" direction="right" className="picnic-polaroid" />
    </section>

    <section className="about-home">
      <div className="about-inner">
        <div className="about-collage">
          <img src={embarazoAsset.url} alt="Silvia junto a su perro durante su embarazo" className="about-photo about-photo-one" />
          <img src={familiaAsset.url} alt="Silvia con su familia y su perro" className="about-photo about-photo-two" />
          <span className="hand about-who">¿quién</span><span className="hand about-am">soy?</span>
        </div>
        <div className="about-copy"><p className="section-label">Detrás Dogs & Us</p><h2>Soy Silvia Gómez, Educadora canina, mamá y psicóloga educativa.</h2><p>Acompaño a familias multiespecie para que perro y bebé crezcan juntos con bienestar y seguridad.</p><Link to="/sobre-mi" className="blush-button">Quiero saber más <ArrowRight /></Link></div>
      </div>
    </section>

    <section className="resources-home">
      <header><h2>Recursos gratuitos</h2><p className="hand">para empezar hoy mismo en casa</p></header>
      <div className="resources-grid">
        {([
          [embarazoAsset.url, "Guía: preparar a tu perro", "Checklist para las semanas previas a la llegada del bebé.", "guia_preparacion"],
          [familiaAsset.url, "Mini clase: señales de calma", "Aprende a leer lo que tu perro te está diciendo.", "senales_calma"],
          [picnicAsset.url, "Rutinas para los primeros días", "Cómo organizar espacios y horarios en casa.", "rutinas_primeros_dias"],
        ] satisfies Array<[string, string, string, string]>).map(([src, title, text, resource]) => <article className="resource-card" key={title}>
          <img src={src} alt="Familia y perro en un entorno cotidiano" loading="lazy" /><h3>{title}</h3><p>{text}</p><LeadForm source="recurso_inicio" resource={resource} label="Descargar" />
        </article>)}
      </div>
    </section>

    <section className="testimonials-home" id="testimonios">
      <header><h2>Ellos ya confiaron en Dogs and Us</h2></header>
      <div className="testimonial-window"><div className="testimonial-rail">{[...testimonials, ...testimonials].map((item, i) => <blockquote className="testimonial" key={i}><span>“</span><p>{item.quote}</p><footer>{item.person}</footer></blockquote>)}</div></div>
    </section>

    <section className="newsletter-home">
      <figure className="newsletter-photo"><img src={familiaAsset.url} alt="Familia con niños y perro compartiendo tiempo en el jardín" loading="lazy" /></figure>
      <div className="newsletter-copy"><h2>+ de 1000 dog moms y dog dads ya reciben nuestros tips mensuales.</h2><p>Este es mi compromiso contigo para que la convivencia entre tu perro y tu bebé mejore mientras crecen juntos.</p></div>
      <LeadForm source="newsletter_inicio" compact label="Inscríbeme" />
    </section>
  </div>;
}