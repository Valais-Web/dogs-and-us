import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X, Instagram, Youtube, ArrowUpRight } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/logo.png.asset.json";

const nav = [
  ["Sobre mí", "/sobre-mi"], ["El Programa", "/programa"], ["Asesorías 1:1", "/asesorias"],
  ["Recursos gratis", "/recursos"], ["Blog", "/blog"], ["Contacto", "/contacto"],
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="min-h-screen bg-background text-foreground">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/20 bg-background">
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:flex lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Dogs & Us Training, inicio">
          <img src={logoAsset.url} alt="Logo de Dogs & Us Training: carita de bebé y perro con un corazón" className="size-11 shrink-0" width={44} height={44} />
          <span className="min-w-0 font-display text-lg font-semibold leading-tight sm:text-xl">Dogs & Us <em className="font-medium">Training</em></span>
        </Link>
        <nav className="ml-auto hidden items-center gap-5 lg:flex" aria-label="Navegación principal">
          <div className="group relative">
             <Button variant="ghost" className="h-auto px-2 py-1" type="button">Acompañamiento <ChevronDown className="size-4" /></Button>
             <div className="invisible absolute left-0 top-full w-52 translate-y-2 border border-primary/25 bg-card p-2 opacity-0 shadow-soft transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
               {nav.slice(1,3).map(([label,to]) => <Link key={to} to={to} className="block rounded-sm px-3 py-2 text-sm hover:bg-muted">{label}</Link>)}
            </div>
          </div>
          {nav.filter((_,i) => ![1,2].includes(i)).map(([label,to]) => <Link key={to} to={to} className="text-sm font-semibold transition-opacity hover:opacity-60">{label}</Link>)}
          <a href="#" className="text-sm font-semibold" title="Plataforma de tienda por definir">Tienda <ArrowUpRight className="inline size-3" /></a>
          <a href="#" className="text-sm font-semibold" title="Plataforma de campus por definir">Área personal</a>
          <Button asChild><Link to="/recursos">Empezar aquí</Link></Button>
        </nav>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
       {open && <nav className="border-t border-primary/20 bg-background px-5 py-5 lg:hidden" aria-label="Navegación móvil">
         <div className="grid gap-1">{nav.map(([label,to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="border-b border-primary/15 px-1 py-3 font-semibold hover:bg-muted">{label}</Link>)}<a href="#" className="border-b border-primary/15 px-1 py-3 font-semibold">Tienda ↗</a><a href="#" className="border-b border-primary/15 px-1 py-3 font-semibold">Área personal ↗</a><Button asChild className="mt-3"><Link to="/recursos" onClick={() => setOpen(false)}>Empezar aquí</Link></Button></div>
      </nav>}
    </header>
    <main className="pt-20">{children}</main>
     <footer className="border-t-8 border-secondary bg-primary px-5 py-14 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div><p className="font-display text-3xl font-semibold">Dogs & Us Training</p><p className="mt-3 max-w-sm text-sm text-primary-foreground/75">Educación canina para una convivencia segura, respetuosa y feliz en cada etapa de la familia.</p></div>
        <div><p className="mb-3 text-sm font-bold uppercase">Explora</p><div className="grid gap-2 text-sm text-primary-foreground/75">{nav.slice(0,5).map(([label,to]) => <Link key={to} to={to}>{label}</Link>)}</div></div>
        <div><p className="mb-3 text-sm font-bold uppercase">Contacto</p><a className="text-sm text-primary-foreground/75" href="mailto:hola@dogsandustraining.com">hola@dogsandustraining.com</a><p className="mt-2 text-sm text-primary-foreground/75">[CIUDAD]</p><div className="mt-5 flex gap-3"><a href="#" aria-label="Instagram"><Instagram /></a><a href="#" aria-label="YouTube"><Youtube /></a></div></div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap justify-between gap-4 border-t border-primary-foreground/20 pt-6 text-xs text-primary-foreground/60"><span>© 2026 Dogs & Us Training</span><span>Privacidad · Cookies · Aviso legal</span></div>
    </footer>
  </div>;
}