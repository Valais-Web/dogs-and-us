import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { posts, getPost, readingMinutes, IMG, type Post } from "@/data/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { slug: post.slug };
  },
  head: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) return { meta: [{ title: "Artículo no encontrado | Dogs & Us" }, { name: "robots", content: "noindex" }] };
    const url = `https://dogsandus.es/blog/${post.slug}`;
    return {
      meta: [
        { title: `${post.metaTitle} | Dogs & Us` },
        { name: "description", content: post.metaDesc },
        { name: "keywords", content: post.keywords },
        { property: "og:title", content: post.metaTitle },
        { property: "og:description", content: post.metaDesc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ArticlePage,
});

function shareLinks(post: Post) {
  const url = encodeURIComponent(`https://dogsandus.es/blog/${post.slug}`);
  const title = encodeURIComponent(post.title);
  return [
    ["WhatsApp", `https://api.whatsapp.com/send?text=${title}%20${url}`],
    ["Facebook", `https://www.facebook.com/sharer/sharer.php?u=${url}`],
    ["Pinterest", `https://pinterest.com/pin/create/button/?url=${url}&description=${title}`],
    ["Correo", `mailto:?subject=${title}&body=${url}`],
  ] as const;
}

function ArticlePage() {
  const { slug } = Route.useLoaderData();
  const post = getPost(slug)!;
  const [openFaq, setOpenFaq] = useState(0);

  const minutes = readingMinutes(post);
  const others = posts.filter((p) => p.slug !== post.slug);
  const sameCat = others.filter((p) => p.category === post.category);
  const keepReading = [...sameCat, ...others.filter((p) => p.category !== post.category)].slice(0, 2);
  const related = [...sameCat, ...others.filter((p) => p.category !== post.category)].slice(0, 3);

  const url = `https://dogsandus.es/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.metaDesc,
        datePublished: post.date,
        dateModified: post.date,
        mainEntityOfPage: url,
        author: { "@type": "Person", name: "Silvia Gómez" },
        publisher: { "@type": "Organization", name: "Dogs & Us" },
        keywords: post.keywords,
        articleSection: post.category,
        citation: post.references.map((r) => r.text),
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faqs.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://dogsandus.es/" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://dogsandus.es/blog" },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <article className="blog-article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="blog-article-head">
        <nav className="blog-breadcrumb">
          <Link to="/">Inicio</Link> › <Link to="/blog">Blog</Link> › <span>{post.category}</span>
        </nav>
        <p className="blog-article-meta">
          <time dateTime={post.date}>{post.dateLabel}</time>
          <span className="blog-card-tag blog-card-tag-static">{post.category}</span>
          <span>{minutes} min de lectura</span>
        </p>
        <h1>{post.title}</h1>
        <p className="blog-lede">{post.excerpt}</p>
        <div className="blog-author">
          <img src={IMG.picnic} alt="Silvia Gómez" />
          <div>
            <strong>Silvia Gómez</strong>
            <span>Psicóloga educativa y clínica · Educadora canina</span>
          </div>
        </div>
        <img className="blog-article-cover" src={post.image} alt={post.imageAlt} />
      </div>

      <div className="blog-article-body">
        <div className="blog-article-main">
          {post.intro.map((p) => <p key={p}>{p}</p>)}

          {post.sections.map((s) => (
            <section key={s.id} id={s.id}>
              <h2>{s.title}</h2>
              {s.blocks.map((b, i) => {
                if (b.t === "p") return <p key={i}>{b.text}</p>;
                if (b.t === "quote") return <blockquote key={i} className="blog-quote">{b.text}</blockquote>;
                if (b.t === "img") return <img key={i} className="blog-inline-img" src={b.src} alt={b.alt} loading="lazy" />;
                return (
                  <ol key={i} className="blog-steps">
                    {b.items.map(([strong, rest], j) => (
                      <li key={j}>
                        <span className="blog-step-num">{j + 1}</span>
                        <span><strong>{strong}</strong> {rest}</span>
                      </li>
                    ))}
                  </ol>
                );
              })}
            </section>
          ))}

          <div className="blog-cta">
            <p>
              Prepara a tu perro paso a paso con el Método <span className="blog-hand blog-hand-lime">CRECEN</span>
            </p>
            <Link to="/programa" className="blog-button blog-button-cta">Conocer el programa</Link>
          </div>

          <section id="preguntas">
            <h2>Preguntas frecuentes</h2>
            <div className="blog-faq">
              {post.faqs.map(([q, a], i) => (
                <div key={q} className="blog-faq-item">
                  <button type="button" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}>
                    <span>{q}</span>
                    <span aria-hidden="true">{openFaq === i ? "–" : "+"}</span>
                  </button>
                  {openFaq === i && <p>{a}</p>}
                </div>
              ))}
            </div>
          </section>

          <section id="referencias">
            <h2>Referencias científicas</h2>
            <ol className="blog-refs">
              {post.references.map((r) => (
                <li key={r.url}>
                  {r.text}{" "}
                  <a href={r.url} target="_blank" rel="noreferrer">Ver fuente</a>
                </li>
              ))}
            </ol>
            <p className="blog-disclaimer">
              Este artículo es informativo y no sustituye una valoración conductual individual de tu perro.
            </p>
          </section>

          <div className="blog-share">
            <span className="blog-hand">¿Te sirvió? Compártelo</span>
            <div>
              {shareLinks(post).map(([name, href]) => (
                <a key={name} href={href} target="_blank" rel="noreferrer" className="blog-share-btn">{name}</a>
              ))}
            </div>
          </div>
        </div>

        <aside className="blog-aside">
          <div className="blog-aside-box blog-aside-index">
            <p className="blog-hand">En este artículo</p>
            {post.sections.map((s) => (
              <a key={s.id} href={`#${s.id}`}>{s.title}</a>
            ))}
            <a href="#preguntas">Preguntas frecuentes</a>
            <a href="#referencias">Referencias científicas</a>
          </div>
          <div className="blog-aside-box blog-aside-more">
            <p className="blog-hand">Sigue leyendo</p>
            {keepReading.map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }}>→ {p.title}</Link>
            ))}
          </div>
        </aside>
      </div>

      <section className="blog-related">
        <div className="blog-related-inner">
          <h2>Artículos relacionados</h2>
          <div className="blog-related-grid">
            {related.map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="blog-related-card">
                <img src={p.image} alt={p.imageAlt} loading="lazy" />
                <span>{p.category.toUpperCase()}</span>
                <h3>{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
