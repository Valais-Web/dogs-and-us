declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Pushes a form_submit event to the data layer and posts the submission to Netlify Forms. */
export async function trackFormSubmit(formName: string, fields: Record<string, string>): Promise<boolean> {
  if (typeof window === "undefined") return false;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "form_submit", form_name: formName, ...fields });
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
