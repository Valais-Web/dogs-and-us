import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContentPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: React.ReactNode }) {
 return <>
  <section className="bg-primary px-5 py-20 text-primary-foreground sm:py-28"><div className="mx-auto max-w-5xl animate-rise"><p className="mb-5 text-sm font-bold uppercase tracking-widest text-secondary">{eyebrow}</p><h1 className="max-w-4xl text-5xl leading-[1.02] sm:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">{intro}</p></div></section>
  <section className="px-5 py-20 sm:py-28"><div className="mx-auto max-w-5xl">{children}</div></section>
  <section className="bg-secondary px-5 py-16"><div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center"><h2 className="max-w-2xl text-3xl sm:text-4xl">¿Damos el primer paso con calma?</h2><Button asChild size="lg"><Link to="/contacto">Cuéntame vuestra historia <ArrowRight /></Link></Button></div></section>
 </>;
}