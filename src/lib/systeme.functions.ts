import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/** Creates a contact in systeme.io. The API key lives only on the server (SYSTEME_API_KEY). */
export const subscribeToSysteme = createServerFn({ method: "POST" })
  .inputValidator((data) =>
    z.object({ email: z.string().trim().email().max(255), source: z.string().max(100).optional() }).parse(data),
  )
  .handler(async ({ data }) => {
    const apiKey = process.env["SYSTEME_API_KEY"];
    if (!apiKey) {
      console.error("SYSTEME_API_KEY is not set");
      return { ok: false };
    }
    const res = await fetch("https://api.systeme.io/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json", "X-API-Key": apiKey },
      body: JSON.stringify({ email: data.email }),
    });
    // 422 = contact already exists; treat as success.
    if (res.ok || res.status === 422) return { ok: true };
    console.error("systeme.io error", res.status, await res.text());
    return { ok: false };
  });
