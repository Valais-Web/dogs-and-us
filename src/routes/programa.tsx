import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/dogs-and-us-logo.png.asset.json";
import headerLogoAsset from "@/assets/logo.png.asset.json";
import familyAsset from "@/assets/familia-jardin.jpg.asset.json";
import picnicAsset from "@/assets/bebe-perro-picnic.jpg.asset.json";
import pregnancyAsset from "@/assets/embarazo-perro.jpg.asset.json";
import tallerLimitesAsset from "@/assets/taller-limites.png.asset.json";
import presentacionAsset from "@/assets/presentacion-perro-bebe.jpg.asset.json";
import bebeMovilAsset from "@/assets/perro-bebe-movil.jpg.asset.json";
import toddlersNieveAsset from "@/assets/perros-toddlers-nieve.jpg.asset.json";
import ensenarAsset from "@/assets/lenguaje-canino-bebe.jpg.asset.json";
import silviaHolaAsset from "@/assets/silvia-hola.jpg.asset.json";
import evidenceSticker from "@/assets/sticker-evidencia.png";

const URL_COMPRA = "#comprar";
const PRICE = "59 €";
const methodLetters: Array<[string, string]> = [["C","Comunicación"],["R","Refuerzo"],["E","Emociones"],["C","Control del entorno"],["E","Estructura"],["N","Necesidades"]];

const situations = [
  "Estás embarazada y quieres evitar que tu perro se sienta desplazado.",
  "Tu perro se estresa fácilmente ante bebés o niños pequeños.",
  "Tu bebé empieza a moverse y tu perro reacciona con inseguridad.",
  "No sabrías cómo actuar si tu perro gruñe, ladra o muestra incomodidad cerca de tu bebé.",
  "Quieres un vínculo bonito, seguro y positivo desde el principio.",
  "No sabes cómo enseñar a tus hijos a relacionarse cuidadosamente con tu perro.",
];

const benefits = [
  "Identificar conductas de alarma y señales de estrés antes de que escalen.",
  "Actuar con confianza si tu perro gruñe, sin adivinar ni dejarte llevar por el pánico.",
  "Distribuir la atención sin generar conflicto ni celos.",
  "Crear actividades y juegos que potencien el vínculo positivo.",
  "Sentirte cómoda, segura y tranquila durante toda la convivencia, desde el embarazo hasta la etapa toddler.",
  "Tener el hogar multiespecie que imaginaste: con límites claros, afecto real y sin estrés diario.",
  "Que tu perro desarrolle una relación con sus hijos desde el respeto y la confianza.",
  "Que tus hijos también aprendan a identificar señales de incomodidad de tu perro.",
];

const modules = [
  [picnicAsset.url, "Lenguaje canino", "Aprende a leer lo que tu perro te está diciendo."],
  [pregnancyAsset.url, "Preparación del perro para la llegada del bebé", "Rutinas, órdenes útiles y biblioteca de sonidos antes del parto."],
  [presentacionAsset.url, "Presentación del bebé al perro", "Una presentación segura y adaptada a tu perro y a tu familia."],
  [bebeMovilAsset.url, "Perros y bebés móviles", "Cuando el bebé gatea y explora, la convivencia cambia."],
  [toddlersNieveAsset.url, "Perros y toddlers", "Juego, límites y respeto mutuo en la etapa toddler."],
  [ensenarAsset.url, "Enseña a tu hijo (según tu etapa) a interactuar con tu perro", "Qué hacer ante los momentos que más preocupan en casa."],
];

const testimonials = [
  ["Un curso súper completo. Cualquier duda o preocupación se fue al completar el programa. Recomiendo si tu perro está acostumbrado a ser el bebé de la casa.", "Estefanía Suárez", "mamá de Baco y de Leo"],
  ["Me encantó porque no demanda mucho tiempo y se adapta súper bien a cada estilo de vida.", "Clem y Diego", "papás de Pepín y Nora"],
  ["Muy recomendado si vas a tener un primer bebé o si tu perro es muy nervioso con niños pequeños.", "Nela y Kylae", "papás de Coco, Luna y Joaquín"],
];

const faqs = [
  ["¿Funciona si mi perro es muy nervioso o reactivo?", "Sí, trabaja desde la gestión del entorno y la desensibilización progresiva; si es reactividad grave, recomiendo acompañamiento individual."],
  ["¿Cuánto tiempo necesito dedicarle al día?", "Con 10 o 15 minutos al día es suficiente."],
  ["¿Puedo acceder a cualquier hora?", "Sí, 100% online y disponible las 24 horas desde cualquier dispositivo."],
  ["¿En cuánto tiempo tengo que terminarlo?", "No hay plazo, acceso de por vida, avanzas a tu ritmo."],
  ["¿Sirve si mi bebé ya nació?", "Sí, hay módulos para la presentación y para la convivencia con bebés móviles y toddlers."],
];

export const Route = createFileRoute("/programa")({
  head: () => ({ meta: [
    { title: "Método CRECEN · Dogs & Us" },
    { name: "description", content: "Programa online para preparar a tu perro para la llegada del bebé y acompañar una convivencia segura, tranquila y feliz." },
    { property: "og:title", content: "Método CRECEN · Dogs & Us" },
    { property: "og:description", content: "Educación multiespecie para preparar a tu perro y acompañar cada etapa desde el embarazo hasta toddler." },
    { property: "og:type", content: "product" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: ProgramPage,
});

function BuyButton({ children, hero = false }: { children: string; hero?: boolean }) {
  return <Button asChild className={`crecen-button${hero ? " crecen-button-hero" : ""}`}><a href={URL_COMPRA}>{children}</a></Button>;
}

function ProgramPage() {
  return <div className="crecen-page">
    <header className="crecen-header"><div className="crecen-header-inner">
      <Link to="/" aria-label="Dogs & Us, inicio"><img src={headerLogoAsset.url} alt="Dogs & Us" /></Link>
      <BuyButton>Inscribirme ahora</BuyButton>
    </div></header>

    <main>
      <section className="crecen-hero">
        <img className="crecen-hero-bg" src={tallerLimitesAsset.url} alt="Niños jugando con su perra junto a un banco en el bosque" />
        <div className="crecen-hero-veil" />
        <div className="crecen-hero-inner">
          <p className="crecen-kicker">100% online y a tu ritmo</p>
          <h1>Un espacio para que tu perro y tu hijo crezcan juntos en armonía</h1>
          <p className="crecen-hero-hand">Con el método CRECEN para familias multiespecie</p>
          <p className="crecen-hero-copy">Todo lo que necesitas para que la llegada de tu bebé y la convivencia con tu perro sean experiencias seguras, tranquilas y felices.</p>
          <BuyButton hero>Quiero unirme ahora →</BuyButton>
        </div>
      </section>

      <section className="crecen-section crecen-sage"><div className="crecen-container">
        <h2>Estás en el lugar correcto si estás alguna <span className="crecen-hand crecen-hand-pale">de estas situaciones</span></h2>
        <div className="crecen-situations">{situations.map((item) => <article key={item}>{item}</article>)}</div>
      </div></section>

      <section className="crecen-section"><div className="crecen-container">
        <h2 className="crecen-centered-title">Después del programa <span className="crecen-hand crecen-hand-pink">lograrás</span> esto</h2>
        <div className="crecen-benefits">{benefits.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></article>)}</div>
        <div className="crecen-cta"><BuyButton>Inscribirme ahora</BuyButton></div>
      </div></section>

      <section className="crecen-section crecen-story"><div className="crecen-container crecen-story-grid">
        <div><h2><span className="crecen-hand crecen-hand-lime">¡Hola!</span> Soy Silvia Gómez</h2>
          <p>Soy psicóloga educativa y clínica, educadora canina profesional, mamá perruna de Moka y mamá humana de Olivia y Thiago.</p>
          <p>Decidí crear este programa porque las únicas opciones existentes demandaban muchísimo tiempo y energía, algo que como embarazada o mamá reciente no tenemos.</p>
          <p>Mi prioridad es que tengas la información esencial, basada en evidencia y respetuosa para que puedas sentirte cómoda, segura y feliz con la llegada de tu bebé y con la convivencia perro-bebé.</p>
        </div><img src={silviaHolaAsset.url} alt="Silvia Gómez sonriendo frente a su ordenador con una taza de café" />
      </div></section>

      <section className="crecen-section crecen-method"><div className="crecen-container">
        <p className="crecen-method-intro">Una educación multiespecie con el método CRECEN, tomando en cuenta los 6 elementos indispensables:</p>
        <div className="crecen-letters">{methodLetters.map(([letter, word]) => <article key={letter + word}><strong>{letter}</strong><span>{word}</span></article>)}</div>
      </div></section>

      <section className="crecen-section"><div className="crecen-container">
        <h2>¿Qué temas veré en el Método <span className="crecen-word-lime">CRECEN</span> <span className="crecen-hand">por dentro</span>?</h2>
        <div className="crecen-modules">{modules.map(([image, title, description], index) => <article key={title} className="crecen-module"><div className="crecen-module-photo"><img src={image} alt="" /><span>{String(index + 1).padStart(2, "0")}</span></div><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
        <div className="crecen-cta"><BuyButton>¡Lo quiero!</BuyButton></div>
      </div></section>

      <section className="crecen-section crecen-inside" id="comprar"><div className="crecen-container crecen-inside-container">
        <img className="crecen-evidence" src={evidenceSticker} alt="Basado en evidencia científica" />
        <p className="crecen-overline">Así se ve por dentro</p><h2 className="crecen-centered-title">Videos, guías y checklists en cualquier dispositivo</h2>
        <div className="crecen-devices">
          <div className="crecen-laptop"><div className="crecen-screen"><img src={familyAsset.url} alt="Vista del Método CRECEN en ordenador" /><div><strong>Método CRECEN</strong><span>on demand</span></div></div><i /><b /></div>
          <div className="crecen-phone"><div className="crecen-screen"><img src={pregnancyAsset.url} alt="Vista del programa en móvil" /><div><strong>Tu perro y tu bebé en todas las etapas</strong><span>Paso a paso</span></div></div></div>
        </div>
        <div className="crecen-features">{[["Videos cortos","Clases de pocos minutos, pensadas para ver con el bebé en brazos."],["Guías descargables","Infografías y checklists para imprimir y tener a mano en casa."],["Biblioteca de sonidos","Audios para habituar a tu perro a los sonidos del bebé, poco a poco."],["Desde el móvil","Todo disponible 24/7 en móvil, tablet u ordenador, a tu ritmo."]].map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="crecen-price"><strong>{PRICE}</strong><BuyButton>Comprarlo ya</BuyButton><span>pago único · acceso de por vida</span></div>
      </div></section>

      <section className="crecen-section crecen-testimonials"><div className="crecen-container">
        <h2>Familias que ya <span className="crecen-hand">vivieron</span> el proceso</h2>
        <div className="crecen-testimonial-grid">{testimonials.map(([quote, name, detail]) => <article key={name}><blockquote>“{quote}”</blockquote><strong>{name}</strong><span>{detail}</span></article>)}</div>
      </div></section>

      <section className="crecen-section crecen-compare"><div className="crecen-container">
        <h2 className="crecen-centered-title">La diferencia con el adiestramiento <span className="crecen-hand">tradicional</span></h2>
        <div className="crecen-compare-grid"><article><h3>Adiestramiento tradicional</h3>{["Trabaja con el perro aislado, sin contar con la dinámica de la familia.","Se apoya en la obediencia y la corrección en lugar del bienestar.","Actúa cuando el problema ya apareció.","Exige sesiones largas y desplazamientos.","No contempla las etapas del desarrollo del bebé."].map(item => <p key={item}>{item}</p>)}</article><article><h3>Método CRECEN</h3>{["Educación multiespecie: perro, bebé y familia como un mismo sistema.","Enfoque respetuoso y basado en evidencia, centrado en el bienestar.","Prevención: preparas a tu perro antes de que llegue el bebé.","100% online, a tu ritmo y sin salir de casa.","Acompaña cada etapa: embarazo, recién nacido, bebé móvil y toddler."].map(item => <p key={item}>{item}</p>)}</article></div>
      </div></section>

      <section className="crecen-section crecen-faq"><div className="crecen-narrow">
        <h2>¿Tienes dudas?<br /><span className="crecen-hand">aquí</span> las resolvemos</h2>
        <div className="crecen-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        <div className="crecen-contact"><h2>¿Alguna duda?</h2><p>Escríbeme y te respondo personalmente antes de que decidas.</p><Button asChild className="crecen-button"><a href="mailto:dogsandus.es@gmail.com">dogsandus.es@gmail.com</a></Button></div>
      </div></section>

      <section className="crecen-section crecen-closing"><div className="crecen-narrow"><h2>Tu familia multiespecie se merece empezar <span className="crecen-hand">bien</span></h2><p>Seguridad, bienestar y tranquilidad para todos — perro, bebé y tú.</p><BuyButton>Comprar ahora</BuyButton></div></section>
    </main>

    <footer className="crecen-footer"><img src={logoAsset.url} alt="Dogs & Us" /><p>Recursos en línea para acompañar una convivencia segura y feliz entre perros y bebés.<br />Este sitio no está afiliado a Facebook™ ni a Instagram™. El contenido es propiedad de Dogs & Us y se basa en la formación y la experiencia profesional de Silvia Gómez; no sustituye una valoración conductual individual.</p><a href="mailto:dogsandus.es@gmail.com">dogsandus.es@gmail.com</a><p className="crecen-footer-credit">Hosted by <a href="https://valaisweb.ch" target="_blank" rel="noreferrer">Valais Web</a> &amp; Ads by <a href="https://flashads.ch" target="_blank" rel="noreferrer">Flash Ads</a></p></footer>
  </div>;
}