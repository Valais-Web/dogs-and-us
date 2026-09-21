import { type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import embarazoAsset from "@/assets/embarazo-perro.jpg.asset.json";
import familiaAsset from "@/assets/familia-jardin.jpg.asset.json";
import nieveAsset from "@/assets/nina-perro-nieve.jpg.asset.json";
import picnicAsset from "@/assets/bebe-perro-picnic.jpg.asset.json";
import tallerLimitesAsset from "@/assets/taller-limites.png.asset.json";
import methodSticker from "@/assets/metodo-crecen-sticker-dark.png";

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
  return <article className="course-card tilt-card">
    <div className="tilt-card-face">
      <img src={src} alt="Familia compartiendo tiempo con su perro" loading="lazy" />
      <h3>{title}</h3><p>{text}</p>
      <Link to={to} className="mexican-button">{label}<ArrowRight /></Link>
    </div>
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
        <div className="ribbon-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 72" preserveAspectRatio="none">
            <path className="ribbon-wave-lower" d="M-120,36 C-80,24 -40,24 0,36 C40,48 80,48 120,36 C160,24 200,24 240,36 C280,48 320,48 360,36 C400,24 440,24 480,36 C520,48 560,48 600,36 C640,24 680,24 720,36 C760,48 800,48 840,36 C880,24 920,24 960,36 C1000,48 1040,48 1080,36 C1120,24 1160,24 1200,36 C1240,48 1280,48 1320,36 C1360,24 1400,24 1440,36 C1480,48 1520,48 1560,36 L1560,72 L-120,72 Z" />
            <path className="ribbon-wave-line" d="M-120,36 C-80,24 -40,24 0,36 C40,48 80,48 120,36 C160,24 200,24 240,36 C280,48 320,48 360,36 C400,24 440,24 480,36 C520,48 560,48 600,36 C640,24 680,24 720,36 C760,48 800,48 840,36 C880,24 920,24 960,36 C1000,48 1040,48 1080,36 C1120,24 1160,24 1200,36 C1240,48 1280,48 1320,36 C1360,24 1400,24 1440,36 C1480,48 1520,48 1560,36" />
          </svg>
        </div>
      </div>
      <div className="baby-panel">
        <div className="baby-panel-inner">
          <div className="baby-message"><strong>la llegada de un bebé no es fácil para nosotros...</strong><span className="hand">para nuestros perros tampoco</span></div>
          <Polaroid src={nieveAsset.url} date="Noviembre 2024" alt="Niña caminando con su perro en la nieve" className="snow-polaroid" />
          <svg className="method-arrow" viewBox="0 0 220 150" aria-hidden="true">
            <path d="M14 96 C60 84 120 78 180 86" />
            <path d="M180 86 L166 78 M180 86 L168 96" />
          </svg>
          <div className="method-callout">
            <p className="hand">para eso está</p>
            <img className="method-sticker" src={methodSticker} alt="Método CRECEN" />
          </div>
        </div>
      </div>
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

    <div className="section-wave" aria-hidden="true">
      <svg viewBox="0 0 1440 72" preserveAspectRatio="none">
        <path className="section-wave-lower" d="M-120,36 C-80,24 -40,24 0,36 C40,48 80,48 120,36 C160,24 200,24 240,36 C280,48 320,48 360,36 C400,24 440,24 480,36 C520,48 560,48 600,36 C640,24 680,24 720,36 C760,48 800,48 840,36 C880,24 920,24 960,36 C1000,48 1040,48 1080,36 C1120,24 1160,24 1200,36 C1240,48 1280,48 1320,36 C1360,24 1400,24 1440,36 C1480,48 1520,48 1560,36 L1560,72 L-120,72 Z" />
        <path className="newsletter-wave-line" d="M-120,36 C-80,24 -40,24 0,36 C40,48 80,48 120,36 C160,24 200,24 240,36 C280,48 320,48 360,36 C400,24 440,24 480,36 C520,48 560,48 600,36 C640,24 680,24 720,36 C760,48 800,48 840,36 C880,24 920,24 960,36 C1000,48 1040,48 1080,36 C1120,24 1160,24 1200,36 C1240,48 1280,48 1320,36 C1360,24 1400,24 1440,36 C1480,48 1520,48 1560,36" />
      </svg>
    </div>

    <section className="resources-home">
      <header><h2>Recursos gratuitos</h2><p className="hand">para empezar hoy mismo en casa</p></header>
      <div className="resources-grid">
        {([
          [embarazoAsset.url, "Guía: preparar a tu perro", "Checklist para las semanas previas a la llegada del bebé.", "guia_preparacion"],
          [familiaAsset.url, "Mini clase: señales de calma", "Aprende a leer lo que tu perro te está diciendo.", "senales_calma"],
          [picnicAsset.url, "Rutinas para los primeros días", "Cómo organizar espacios y horarios en casa.", "rutinas_primeros_dias"],
        ] satisfies Array<[string, string, string, string]>).map(([src, title, text, resource]) => <article className="resource-card tilt-card" key={title}>
          <div className="tilt-card-face"><img src={src} alt="Familia y perro en un entorno cotidiano" loading="lazy" /><h3>{title}</h3><p>{text}</p><LeadForm source="recurso_inicio" resource={resource} label="Descargar" /></div>
        </article>)}
      </div>
    </section>

    <section className="testimonials-home" id="testimonios">
      <header><h2>Ellos ya confiaron en Dogs and Us</h2></header>
      <div className="testimonial-window"><div className="testimonial-rail">{[...testimonials, ...testimonials].map((item, i) => <blockquote className="testimonial" key={i}><span>“</span><p>{item.quote}</p><footer>{item.person}</footer></blockquote>)}</div></div>
    </section>

    <div className="newsletter-wave" aria-hidden="true">
      <svg viewBox="0 0 1440 72" preserveAspectRatio="none">
        <path className="newsletter-wave-lower" d="M-120,36 C-80,24 -40,24 0,36 C40,48 80,48 120,36 C160,24 200,24 240,36 C280,48 320,48 360,36 C400,24 440,24 480,36 C520,48 560,48 600,36 C640,24 680,24 720,36 C760,48 800,48 840,36 C880,24 920,24 960,36 C1000,48 1040,48 1080,36 C1120,24 1160,24 1200,36 C1240,48 1280,48 1320,36 C1360,24 1400,24 1440,36 C1480,48 1520,48 1560,36 L1560,72 L-120,72 Z" />
        <path className="ribbon-wave-line" d="M-120,36 C-80,24 -40,24 0,36 C40,48 80,48 120,36 C160,24 200,24 240,36 C280,48 320,48 360,36 C400,24 440,24 480,36 C520,48 560,48 600,36 C640,24 680,24 720,36 C760,48 800,48 840,36 C880,24 920,24 960,36 C1000,48 1040,48 1080,36 C1120,24 1160,24 1200,36 C1240,48 1280,48 1320,36 C1360,24 1400,24 1440,36 C1480,48 1520,48 1560,36" />
      </svg>
    </div>

    <section className="newsletter-home">
      <figure className="newsletter-photo"><img src={familiaAsset.url} alt="Familia con niños y perro compartiendo tiempo en el jardín" loading="lazy" /></figure>
      <div className="newsletter-copy"><h2>+ de 1000 dog moms y dog dads ya reciben nuestros tips mensuales.</h2><p>Este es mi compromiso contigo para que la convivencia entre tu perro y tu bebé mejore mientras crecen juntos.</p></div>
      <LeadForm source="newsletter_inicio" compact label="Inscríbeme" />
    </section>
  </div>;
}