import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/dogs-and-us-logo.png.asset.json";

const nav = [
  { label: "Asesorías", to: "/asesorias" },
  { label: "Cursos y guías", to: "/programa" },
  { label: "Acerca de", to: "/sobre-mi" },
  { label: "Testimonios", to: "/", hash: "testimonios" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="min-h-screen bg-background text-foreground">
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background">
      <div className="mx-auto flex min-h-24 max-w-[1240px] items-center gap-5 px-5 py-3 lg:gap-7 lg:px-6">
        <Link to="/" className="shrink-0" aria-label="Dogs & Us, inicio">
          <img src={logoAsset.url} alt="Dogs & Us" className="h-[70px] w-auto object-contain lg:h-[78px]" />
        </Link>
        <nav className="mr-auto hidden items-center gap-5 lg:flex" aria-label="Navegación principal">
          {nav.map(({ label, to, ...rest }) => <Link key={label} to={to} {...rest} className="nav-link">{label}</Link>)}
        </nav>
        <div className="ml-auto hidden items-center gap-5 lg:flex">
          <Button asChild className="rounded-full px-5 uppercase tracking-[.16em]"><Link to="/programa">Pack completo</Link></Button>
          <a href="#" className="nav-link" title="Plataforma de campus por definir">Área cliente</a>
        </div>
        <Button variant="ghost" size="icon" className="ml-auto lg:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav className="border-t border-primary/10 bg-background px-5 py-5 lg:hidden" aria-label="Navegación móvil">
        <div className="mx-auto grid max-w-[1240px] gap-1">{nav.map(([label,to]) => to.startsWith("/#")
          ? <a key={to} href={to} onClick={() => setOpen(false)} className="border-b border-primary/15 py-3 font-medium">{label}</a>
          : <Link key={to} to={to} onClick={() => setOpen(false)} className="border-b border-primary/15 py-3 font-medium">{label}</Link>)}
          <Link to="/programa" onClick={() => setOpen(false)} className="mt-3 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold uppercase tracking-[.14em] text-primary-foreground">Pack completo</Link>
          <a href="#" className="py-3 text-center text-sm uppercase tracking-[.14em]">Área cliente</a>
        </div>
      </nav>}
    </header>
    <main>{children}</main>
    <footer className="bg-primary px-6 pb-8 pt-16 text-primary-foreground">
      <div className="mx-auto grid max-w-[1240px] gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
        <div>
          <img src={logoAsset.url} alt="Dogs & Us" className="h-[70px] w-auto brightness-0 invert" />
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-primary-foreground/80">Recursos en línea para acompañar una convivencia segura y feliz entre perros y niños.</p>
        </div>
        <div><p className="footer-label">Navegación</p><div className="grid gap-2.5 text-[15px] text-primary-foreground/85"><Link to="/asesorias">Consultas</Link><Link to="/programa">Cursos y guías</Link><Link to="/sobre-mi">Acerca de</Link><Link to="/blog">Blog</Link></div></div>
        <div><p className="footer-label">Contacto</p><div className="grid gap-2.5 text-[15px] text-primary-foreground/85"><a href="mailto:dogsandus.es@gmail.com">dogsandus.es@gmail.com</a><a href="https://www.instagram.com/dogsandus.training/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.youtube.com/channel/UCCPesAd8arSZWM38A7nENWA" target="_blank" rel="noreferrer">YouTube</a></div></div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1240px] flex-wrap justify-between gap-4 border-t border-primary-foreground/20 pt-5 text-xs text-primary-foreground/60"><span>© 2026 Dogs and Us. Todos los derechos reservados.</span><span>Privacidad · Cookies · Aviso legal</span></div>
    </footer>
  </div>;
}