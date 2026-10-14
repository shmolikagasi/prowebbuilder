// Central place to tweak brand + contact details.
export const SITE = {
  brand: "prowebbuilder",
  instagramHandle: "prowebbuilder",
  instagramUrl: "https://www.instagram.com/prowebbuilder/",
  // Contact for privacy + accessibility requests (shown on the legal pages).
  // ⚠️ Double-check this address — it may be missing a letter.
  email: "slomialgrei@gmail.com",
  // ⚠️ The phone below has 9 digits and looks like it is missing one — update it.
  phoneDisplay: "050-667823",
  phoneIntl: "+97250667823",
  // WhatsApp number in international format, digits only (972 + number without leading 0).
  whatsapp: "97250667823",
};

// In-page section links live on the home route ("/#id").
export const NAV_LINKS = {
  en: [
    { label: "Services", href: "/#services" },
    { label: "Why Us", href: "/#why-us" },
    { label: "What You Get", href: "/#what-you-get" },
    { label: "Contact", href: "/#contact" },
  ],
  he: [
    { label: "שירותים", href: "/#services" },
    { label: "למה אנחנו", href: "/#why-us" },
    { label: "מה תקבלו", href: "/#what-you-get" },
    { label: "צור קשר", href: "/#contact" },
  ],
};

export const LEGAL_LINKS = {
  en: [
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms of Use", to: "/terms" },
    { label: "Accessibility", to: "/accessibility" },
  ],
  he: [
    { label: "מדיניות פרטיות", to: "/privacy" },
    { label: "תנאי שימוש", to: "/terms" },
    { label: "הצהרת נגישות", to: "/accessibility" },
  ],
};
