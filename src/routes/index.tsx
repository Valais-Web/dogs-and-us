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
import portadaFamiliaAsset from "@/assets/portada-familia-correcta.jpg.asset.json";

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

const testimonials = [
  { name: "Daniela Calderón", dog: "Shimmi y Yuki", text: "Amamos a Silvia. Siempre tiene una escucha activa hacia lo que está pasando con nuestros peludos. Toda gestión de comportamiento parte del respeto y el entendimiento. ¡Súper recomendada!" },
  { name: "Luisier Michel", dog: "Jack", text: "¡Muy, muy bueno! Una auténtica masterclass que me permitió entender muchas cosas sobre mi perro. Silvia es una persona encantadora y competente." },
  { name: "Yes Cruz", dog: "Cobain", text: "Dogs & Us Training ha sido la mejor elección para tratar la ansiedad por separación de Cobain. Silvia se toma el tiempo de explicar, dar alternativas y conseguir que el curso online sea claro. Hemos visto muchos avances positivos y una mejor comunicación entre nosotras." },
  { name: "Jorge Campos", dog: "Kobu", text: "Silvia es una persona increíble, apasionada y preparada. Pone todo su empeño en sus proyectos y sus programas me han ayudado mucho." },
  { name: "Rocío Zárate", dog: "", text: "Sus consejos nos han servido para entender y corregir el comportamiento de nuestra perrita. Ahora, con la llegada del bebé, seguiremos poniendo en práctica lo aprendido con Silvia." },
  { name: "Marión Tejada", dog: "", text: "El curso para preparar la llegada del bebé hizo la transición mucho más suave con nuestro perrito. Un mes después del parto, está tranquilo con el bebé y su llanto. Las clases son fáciles de seguir y todo está muy bien explicado. Lo recomiendo 100 %." },
];

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
    <section className="home-hero home-hero-photo">
      <img className="home-hero-photo-media" src={portadaFamiliaAsset.url} alt="Silvia junto a su familia" />
      <div className="home-hero-photo-shade" aria-hidden="true" />
      <div className="home-hero-heading">
        <h1>Educación canina para familias<br />con perros y bebés</h1>
        <p className="hand hero-subtitle">Un hogar seguro y feliz para todos</p>
        <Link to="/programa" className="hero-method-button">método CRECEN</Link>
      </div>
    </section>

    <section className="values-banner" aria-label="Ventajas de Dogs and Us">
      <div className="values-track">
        {[...bannerWords, ...bannerWords].map((word, index) => <span key={`${word}-${index}`}><i aria-hidden="true">✦</i>{word}</span>)}
      </div>
    </section>

    <section className="home-intro">
      <Polaroid src={embarazoAsset.url} date="Octubre 2023" alt="Silvia embarazada junto a su perro" direction="left" className="intro-polaroid intro-polaroid-left" />
      <div className="home-intro-copy">
        <h2><span>Prepara a tu perro para la llegada</span>{" "}<span>de tu bebé y evita o resuelve</span>{" "}<span>problemas de convivencia entre</span>{" "}<span>perros y niños</span></h2>
        <div className="intro-notes" aria-label="Principios del método">
          <p className="hand intro-note intro-note-one">basado en<br />evidencia<svg viewBox="0 0 70 70" aria-hidden="true"><path d="M8 8 C12 35 30 51 58 56 M58 56 L45 43 M58 56 L42 62" /></svg></p>
          <p className="hand intro-note intro-note-two">sin desplazar<br />a tu perro<svg viewBox="0 0 70 70" aria-hidden="true"><path d="M62 8 C58 35 40 50 12 55 M12 55 L26 42 M12 55 L29 62" /></svg></p>
          <p className="hand intro-note intro-note-three">crecen en<br />conexión<svg viewBox="0 0 70 70" aria-hidden="true"><path d="M36 7 C37 27 37 38 34 57 M34 57 L24 43 M34 57 L45 44" /></svg></p>
        </div>
        <Link to="/programa" className="mexican-button">Ver cursos <ArrowRight /></Link>
      </div>
      <Polaroid src={familiaAsset.url} date="Abril 2026" alt="Familia con niños y perro en el jardín" direction="right" className="intro-polaroid intro-polaroid-right" />
    </section>

    <section className="question-band">
      <div className="intro-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 72" preserveAspectRatio="none">
          <path className="intro-wave-line" d="M-120,36 C-80,24 -40,24 0,36 C40,48 80,48 120,36 C160,24 200,24 240,36 C280,48 320,48 360,36 C400,24 440,24 480,36 C520,48 560,48 600,36 C640,24 680,24 720,36 C760,48 800,48 840,36 C880,24 920,24 960,36 C1000,48 1040,48 1080,36 C1120,24 1160,24 1200,36 C1240,48 1280,48 1320,36 C1360,24 1400,24 1440,36 C1480,48 1520,48 1560,36" />
        </svg>
      </div>
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
      <div className="testimonials-grid">{testimonials.map((item) => <article className="testimonial-card tilt-card" key={item.name}>
        <div className="tilt-card-face">
          <span className="testimonial-quote" aria-hidden="true">“</span>
          <blockquote>{item.text}</blockquote>
          <footer><span className="testimonial-mark" aria-hidden="true" /> <div><strong>{item.name}</strong>{item.dog && <small>Perro: {item.dog}</small>}</div></footer>
        </div>
      </article>)}</div>
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