import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { posts, CATEGORIES, readingMinutes, IMG } from "@/data/posts";

const PER_PAGE = 9;

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog de convivencia perro-bebé | Dogs & Us" },
      { name: "description", content: "Artículos basados en evidencia científica sobre perros y bebés: embarazo, presentación, lenguaje canino, seguridad y convivencia familiar." },
      { property: "og:title", content: "Blog de convivencia perro-bebé | Dogs & Us" },
      { property: "og:description", content: "Artículos basados en evidencia científica sobre perros y bebés: embarazo, presentación, lenguaje canino, seguridad y convivencia familiar." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://dogsandus.es/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://dogsandus.es/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("Todos");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchCat = category === "Todos" || p.category === category;
      const matchQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.keywords.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, category]);

  const pages = Math.ceil(filtered.length / PER_PAGE);
  const current = Math.min(page, Math.max(1, pages));
  const visible = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog de convivencia perro-bebé",
    url: "https://dogsandus.es/blog",
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.metaDesc,
      datePublished: p.date,
      url: `https://dogsandus.es/blog/${p.slug}`,
      author: { "@type": "Person", name: "Silvia Gómez" },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="blog-hero">
        <div className="blog-hero-inner">
          <div>
            <p className="blog-hand blog-eyebrow">el blog de Dogs &amp; Us</p>
            <h1>
              Blog de convivencia <span className="blog-hand">perro-bebé</span>
            </h1>
            <p className="blog-hero-text">
              Artículos basados en evidencia científica para preparar a tu perro antes del bebé y acompañar cada etapa
              de tu familia multiespecie.
            </p>
          </div>
          <img src={IMG.picnic} alt="Silvia Gómez con su perra Moka y su bebé durante un picnic" className="blog-hero-img" />
        </div>
      </section>

      <section className="blog-list">
        <div className="blog-list-inner">
          <div className="blog-list-top">
            <h2>
              Explora los <span className="blog-hand">artículos</span>
            </h2>
            <label className="sr-only" htmlFor="blog-search">Buscar un tema</label>
            <input
              id="blog-search"
              className="blog-search"
              type="search"
              placeholder="Buscar un tema…"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setPage(1); }}
            />
          </div>

          <div className="blog-chips">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                className={`blog-chip${category === c ? " is-active" : ""}`}
                onClick={() => { setCategory(c); setPage(1); }}
              >
                {c}
              </button>
            ))}
          </div>

          {visible.length === 0 ? (
            <div className="blog-empty">
              <p className="blog-empty-title">No hay artículos que coincidan con tu búsqueda</p>
              <p>Prueba con otra palabra o elige otra categoría.</p>
              <button type="button" className="blog-button" onClick={() => { setQuery(""); setCategory("Todos"); setPage(1); }}>
                Ver todos
              </button>
            </div>
          ) : (
            <div className="blog-grid">
              {visible.map((p) => (
                <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="blog-card">
                  <div className="blog-card-media">
                    <img src={p.image} alt={p.imageAlt} loading="lazy" />
                    <span className="blog-card-tag">{p.category}</span>
                  </div>
                  <div className="blog-card-body">
                    <h3>{p.title}</h3>
                    <p className="blog-card-meta">{p.dateLabel} · {readingMinutes(p)} min de lectura</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {pages > 1 && (
            <div className="blog-pagination">
              {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`blog-page-btn${n === current ? " is-active" : ""}`}
                  onClick={() => setPage(n)}
                >
                  {n}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
