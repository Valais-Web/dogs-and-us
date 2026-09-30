declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Pushes a form_submit event to the data layer and posts the submission to Netlify Forms. */
export async function trackFormSubmit(formName: string, fields: Record<string, string>, options: { subscribe?: boolean } = {}): Promise<boolean> {
  if (typeof window === "undefined") return false;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "form_submit", form_name: formName, ...fields });
  const email = fields["email"];
  if (email && options.subscribe !== false) {
    import("./systeme.functions")
      .then(({ subscribeToSysteme }) => subscribeToSysteme({ data: { email, source: fields["source"] } }))
      .catch((err) => console.error("systeme.io subscribe failed", err));
  }
  try {
    const res = await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ "form-name": formName, ...fields }).toString(),
    });
    return res.ok;
  } catch {
    return false;
  }
}
