import { createFileRoute, Outlet } from "@tanstack/react-router";
import { BlogHeader, BlogNewsletter, BlogFooter } from "@/components/blog-chrome";

export const Route = createFileRoute("/blog")({ component: BlogLayout });

function BlogLayout() {
  return (
    <div className="blog-page">
      <BlogHeader />
      <main>
        <Outlet />
      </main>
      <BlogNewsletter />
      <BlogFooter />
    </div>
  );
}
