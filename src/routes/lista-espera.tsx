import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/lead-form";
import newsletterSticker from "@/assets/newsletter-sticker.png";

export const Route = createFileRoute("/lista-espera")({
  head: () => ({
    meta: [
      { title: "Segunda edición muy pronto · Dogs & Us" },
      { name: "description", content: "Únete a la lista de espera de la segunda edición del Método CRECEN." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Segunda edición muy pronto · Dogs & Us" },
      { property: "og:description", content: "Únete a la lista de espera y entérate antes que nadie." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WaitlistPage,
});

function WaitlistPage() {
  return (
    <div className="waitlist-page">
      <section className="newsletter-home">
        <figure className="newsletter-photo">
          <img src="/media/portada-familia.jpg" alt="Familia con su perro compartiendo tiempo juntos" />
          <img className="newsletter-sticker" src={newsletterSticker} alt="" />
        </figure>
        <div className="newsletter-copy">
          <h2>Segunda edición, muy pronto</h2>
          <p>Únete a la lista de espera y serás la/el primer@ en enterarte.</p>
        </div>
        <LeadForm source="lista_espera" compact label="Unirme" />
      </section>
    </div>
  );
}
