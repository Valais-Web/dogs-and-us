declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Pushes a form_submit event to the data layer and posts the submission to Netlify Forms. */
export async function trackFormSubmit(formName: string, fields: Record<string, string>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "form_submit", form_name: formName, ...fields });
  try {
    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ "form-name": formName, ...fields }).toString(),
    });
  } catch {
    // Netlify submission is best-effort; the primary save already happened.
  }
}
