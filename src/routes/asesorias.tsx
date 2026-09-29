import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, PawPrint } from "lucide-react";
import { ContentPage } from "@/components/content-page";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { trackFormSubmit } from "@/lib/form-tracking";

export const Route = createFileRoute("/asesorias")({
  head: () => ({
    meta: [
      { title: "Asesorías 1:1 | Dogs & Us Training" },
      { name: "description", content: "Asesorías personalizadas para la convivencia entre perros, bebés y niños." },
      { property: "og:title", content: "Asesorías 1:1 | Dogs & Us Training" },
      { property: "og:description", content: "Sesiones personalizadas para acompañar a tu perro y tu familia en cada etapa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const consultations = [
  {
    title: "Convivencia perro y bebé/niño",
    description: "Mi perro empezó a comportarse muy diferente y raro alrededor de mi hijo. Se ve muy desconfiado y hace conductas que no me gustan.",
    points: [
      "90 minutos de videollamada",
      "Lectura de señales y situaciones de tensión",
      "Pautas personalizadas para toda la familia",
      "Plan práctico para recuperar la calma",
    ],
  },
  {
    title: "Agresividad hacia mi hijo",
    description: "Mi perro ha mordido o ha intentado morder a mi hijo o a otro niño.",
    points: [
      "90 minutos de videollamada",
      "Medidas inmediatas para reducir riesgos",
      "Identificación de señales y desencadenantes",
      "Plan personalizado de seguridad y manejo",
    ],
  },
  {
    title: "Voy a tener un bebé",
    description: "Estoy embarazada y quiero preparar a mi perro para la llegada de mi bebé.",
    points: [
      "90 minutos de videollamada",
      "Preparación gradual antes del nacimiento",
      "Pautas para la presentación perro-bebé",
      "Plan adaptado a vuestra nueva etapa",
    ],
  },
] as const;

type ConsultationTitle = (typeof consultations)[number]["title"];

const shortFields = [
  ["parent_first_name", "Nombre", "text", "Tu nombre"],
  ["parent_last_name", "Apellidos", "text", "Tus apellidos"],
  ["email", "Correo electrónico", "email", "tu@correo.com"],
  ["phone", "Teléfono", "tel", "Tu teléfono"],
  ["dog_name_age", "Nombre y edad de tu perro", "text", "Nombre y edad"],
  ["dog_breed_sex", "Raza y sexo de tu perro", "text", "Raza y sexo"],
] as const;

const longFields = [
  ["consultation_reason", "¿Qué te ha llevado a solicitar una sesión?"],
  ["availability", "¿Qué disponibilidad tienes para la sesión? Incluye tu zona horaria."],
  ["goals", "¿Qué objetivos tienes para la sesión?"],
  ["children_ages", "¿Qué edad tiene tu hijo o hijos?"],
  ["other_dogs", "¿Tienes otro perro en casa? Si es así, descríbelo."],
  ["previous_training", "¿Tu perro tiene experiencia previa en educación canina?"],
  ["special_instructions", "¿Hay alguna otra información importante que quieras compartir?"],
  ["referral_source", "¿Cómo conociste Dogs & Us?"],
] as const;

function ConsultationForm({ consultation, onComplete }: { consultation: ConsultationTitle; onComplete: () => void }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const formData = new FormData(event.currentTarget);
    const fields = Object.fromEntries(
      Array.from(formData.entries()).map(([key, value]) => [key, String(value).trim()]),
    );
    const sent = await trackFormSubmit("consultation-request", fields, { subscribe: false });
    setStatus(sent ? "done" : "error");
  }

  if (status === "done") {
    return <div className="consultation-success"><PawPrint aria-hidden="true" /><h3>Solicitud enviada</h3><p>Gracias. Revisaré tu caso y te responderé lo antes posible.</p><Button type="button" onClick={onComplete}>Cerrar</Button></div>;
  }

  return <form name="consultation-request" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit} className="consultation-form">
    <input type="hidden" name="form-name" value="consultation-request" />
    <input type="hidden" name="consultation_type" value={consultation} />
    <input type="hidden" name="price" value="100 €" />
    <p className="hidden"><label>No rellenes este campo: <input name="bot-field" /></label></p>
    <div className="consultation-form-grid">
      {shortFields.map(([name, label, type, placeholder]) => <label key={name} className="consultation-field">
        <span>{label}</span>
        <input name={name} type={type} placeholder={placeholder} required maxLength={type === "email" ? 254 : 120} autoComplete={name === "email" ? "email" : name === "phone" ? "tel" : undefined} />
      </label>)}
    </div>
    {longFields.map(([name, label]) => <label key={name} className="consultation-field consultation-field-long">
      <span>{label}</span>
      <textarea name={name} placeholder="Escribe tu respuesta aquí…" required={name === "consultation_reason" || name === "availability" || name === "goals"} maxLength={1500} rows={4} />
    </label>)}
    {status === "error" && <p className="consultation-error" role="alert">No se pudo enviar. Inténtalo de nuevo.</p>}
    <Button type="submit" size="lg" disabled={status === "sending"} className="consultation-submit">
      {status === "sending" ? "Enviando…" : "Enviar solicitud"}<ArrowRight aria-hidden="true" />
    </Button>
  </form>;
}

function Page() {
  const [selected, setSelected] = useState<ConsultationTitle | null>(null);

  return <ContentPage eyebrow="Asesorías 1:1" title="¿Necesitas ayuda personalizada?" intro="Si tienes alguna duda concreta escríbeme a dogsandus.es@gmail.com" showCta={false}>
    <section className="consultations" aria-labelledby="consultations-title">
      <header className="consultations-heading"><p className="hand">Sesiones personalizadas 1:1</p><h2 id="consultations-title">Tipos de consulta</h2></header>
      <div className="consultation-list">
        {consultations.map((item) => <article className="consultation-card tilt-card" key={item.title}>
          <div className="tilt-card-face consultation-card-face">
            <div className="consultation-card-copy"><h3>{item.title}</h3><p>{item.description}</p></div>
            <ul>{item.points.map((point) => <li key={point}><PawPrint aria-hidden="true" /><span>{point}</span></li>)}</ul>
            <div className="consultation-card-action"><p><span>Precio por sesión</span><strong>100 €</strong></p><Button size="lg" onClick={() => setSelected(item.title)}>Solicitar sesión <ArrowRight aria-hidden="true" /></Button></div>
          </div>
        </article>)}
      </div>
    </section>

    <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}>
      <DialogContent className="consultation-dialog">
        {selected && <><DialogHeader><DialogTitle>Solicitar sesión</DialogTitle><DialogDescription>{selected} · 100 €</DialogDescription></DialogHeader><ConsultationForm key={selected} consultation={selected} onComplete={() => setSelected(null)} /></>}
      </DialogContent>
    </Dialog>
  </ContentPage>;
}