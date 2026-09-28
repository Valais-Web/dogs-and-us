import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { trackFormSubmit } from "@/lib/form-tracking";
import headerLogo from "@/assets/logo.png.asset.json";
import footerLogo from "@/assets/dogs-and-us-logo.png.asset.json";

export function BlogHeader() {
  return (
    <header className="blog-header">
      <div className="blog-header-inner">
        <Link to="/blog" aria-label="Blog de Dogs & Us">
          <img src={headerLogo.url} alt="Dogs & Us" className="blog-header-logo" />
        </Link>
        <nav className="blog-nav">
          <Link to="/">Inicio</Link>
          <Link to="/programa">Método CRECEN</Link>
          <Link to="/blog" className="blog-nav-current">Blog</Link>
          <Link to="/programa" className="blog-button blog-button-small">Inscribirme</Link>
        </nav>
      </div>
    </header>
  );
}

export function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "saving" | "done" | "error">("idle");

  async function submit(e: FormEvent) {
    e.preventDefault();
    setState("saving");
    const error = !(await trackFormSubmit("blog-newsletter", { email, source: "blog", consent: "true" }));
    setState(error ? "error" : "done");
    if (!error) setEmail("");
  }

  return (
    <section className="blog-newsletter">
      <div className="blog-newsletter-inner">
        <h2>
          Recibe recursos de convivencia <span className="blog-hand">perro-bebé</span>
        </h2>
        <p>Déjame tu correo y te envío cada mes guías y consejos para tu familia multiespecie.</p>
        {state === "done" ? (
          <p className="blog-newsletter-ok">¡Listo! Revisa tu correo para confirmar.</p>
        ) : (
          <form name="blog-newsletter" data-netlify="true" className="blog-newsletter-form" onSubmit={submit}>
            <input type="hidden" name="form-name" value="blog-newsletter" />
            <label className="sr-only" htmlFor="blog-newsletter-email">Tu correo electrónico</label>
            <input
              id="blog-newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@correo.com"
            />
            <button type="submit" className="blog-button" disabled={state === "saving"}>
              {state === "saving" ? "Enviando…" : "Suscribirme"}
            </button>
          </form>
        )}
        {state === "error" && <p className="blog-newsletter-ok">No se pudo guardar. Inténtalo de nuevo.</p>}
      </div>
    </section>
  );
}

export function BlogFooter() {
  return (
    <footer className="blog-footer">
      <img src={footerLogo.url} alt="Dogs & Us" className="blog-footer-logo" />
      <p>
        Recursos en línea para acompañar una convivencia segura y feliz entre perros y bebés. El contenido es propiedad
        de Dogs &amp; Us y se basa en la formación y la experiencia profesional de Silvia Gómez; no sustituye una
        valoración conductual individual.
      </p>
      <a href="mailto:dogsandus.es@gmail.com">dogsandus.es@gmail.com</a>
      <p className="blog-footer-credit">
        Hosted by <a href="https://valaisweb.ch" target="_blank" rel="noreferrer">Valais Web</a> &amp; Ads by <a href="https://flashads.ch" target="_blank" rel="noreferrer">Flash Ads</a>
      </p>
    </footer>
  );
}
