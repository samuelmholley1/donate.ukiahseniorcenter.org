// Brand tokens aligned with ukiahseniorcenter.org
// tune later: confirm exact font and accent hex from main site logo/theme CSS

export const brand = {
  fontFamily: `"Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"`,
  color: {
    ink: "#0B0B0B",        // headings (near-black, warm-ish)
    copy: "#444444",       // body text
    mute: "#6B7280",       // secondary text (neutral-500)
    bg: "#FAFAFA",         // page background
    card: "#FFFFFF",       // modal/card
    // Accent system: navy + blue used consistently on main site
    accent: "#1E3A8A",     // primary (navy) // tune later
    accentHover: "#1C357B", // hover state
    accentAlt: "#2563EB",  // brighter blue for CTA if needed
    ring: "#2563EB",       // focus ring
    border: "#E5E7EB",     // borders
  },
} as const;
