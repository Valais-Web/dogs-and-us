import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";

const PROD_HOSTS = new Set(["dogsandustraining.com", "www.dogsandustraining.com"]);

export const getIndexability = createServerFn({ method: "GET" }).handler(async () => {
  const request = getRequest();
  const url = new URL(request.url);
  // Behind proxies (Lovable/Netlify) the rewritten host arrives in x-forwarded-host;
  // trust it only when the direct URL is not already a real domain.
  const forwarded = url.hostname === "localhost" ? request.headers.get("x-forwarded-host") : null;
  const host = (forwarded ?? url.hostname).toLowerCase().split(":")[0];
  return { host, indexable: PROD_HOSTS.has(host) };
});
