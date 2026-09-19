import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

export function LeadForm({ source, resource, compact = false }: { source: string; resource?: string; compact?: boolean }) {
  const [email, setEmail] = useState(""); const [state, setState] = useState<"idle"|"saving"|"done"|"error">("idle");
  async function submit(e: FormEvent) { e.preventDefault(); setState("saving"); const { error } = await supabase.from("leads").insert({ email, source, resource: resource ?? null, consent: true }); setState(error ? "error" : "done"); if (!error) setEmail(""); }
  if (state === "done") return <p className="flex items-center gap-2 font-semibold"><Check className="size-5" /> ¡Listo! Revisa tu correo.</p>;
  return <form onSubmit={submit} className={compact ? "flex flex-col gap-2 sm:flex-row" : "grid gap-2"}>
    <label className="sr-only" htmlFor={`email-${source}-${resource ?? "general"}`}>Tu correo electrónico</label>
    <input id={`email-${source}-${resource ?? "general"}`} required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="tu@email.com" className="h-12 min-w-0 flex-1 rounded-full border border-primary/20 bg-background px-5 text-foreground outline-none transition-shadow focus:ring-2 focus:ring-ring" />
    <Button type="submit" disabled={state === "saving"} aria-label="Enviar correo">{state === "saving" ? "Enviando…" : compact ? <>Quiero recibirla <ArrowRight /></> : <>Descargar <ArrowRight /></>}</Button>
    {state === "error" && <p className="text-sm font-medium text-destructive">No se pudo guardar. Inténtalo de nuevo.</p>}
  </form>;
}