import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { trackFormSubmit } from "@/lib/form-tracking";
import { Button } from "@/components/ui/button";

export function LeadForm({ source, resource, compact = false, label }: { source: string; resource?: string; compact?: boolean; label?: string }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle"|"saving"|"done"|"error">("idle");
  async function submit(e: FormEvent) {
    e.preventDefault(); setState("saving");
    const [{ error }] = await Promise.all([
      supabase.from("leads").insert({ email, source, resource: resource ?? null, consent: true }),
      trackFormSubmit("lead", { email, source, resource: resource ?? "", consent: "true" }),
    ]);
    setState(error ? "error" : "done"); if (!error) setEmail("");
  }
  if (state === "done") return <p className="font-semibold">¡Listo! Revisa tu correo.</p>;
  return <form name="lead" data-netlify="true" onSubmit={submit} className={compact ? "lead-form-inline" : "grid gap-3"}>
    <input type="hidden" name="form-name" value="lead" />
    <label className="sr-only" htmlFor={`email-${source}-${resource ?? "general"}`}>Tu correo electrónico</label>
    <input id={`email-${source}-${resource ?? "general"}`} required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Tu correo" className="lead-input" />
    <Button type="submit" disabled={state === "saving"} className="lead-button">{state === "saving" ? "Enviando…" : label ?? "Descargar"}</Button>
    {state === "error" && <p className="text-sm font-medium text-destructive">No se pudo guardar. Inténtalo de nuevo.</p>}
  </form>;
}