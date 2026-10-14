import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import WhatsAppIcon from "./WhatsAppIcon";
import Reveal from "./Reveal";
import { SITE } from "../lib/site";
import { useCopy } from "../lib/i18n";

const COPY = {
  en: {
    eyebrow: "Let's get started",
    titleA: "Free demo.",
    titleB: "Zero upfront cost.",
    lead: "Tell us your industry and business name. We'll build a custom demo of your new website and show it to you — before you pay anything.",
    dm: "Send us a message",
    perks: ["No upfront cost", "No commitment", "Reply within 24 hours"],
    sentTitle: (n) => `Almost done, ${n}!`,
    sentA: "We opened WhatsApp with your details. Just tap",
    sentSend: "Send",
    sentB: "there, and we'll get back to you soon with your demo.",
    sentRetry: "Didn't open? Open WhatsApp",
    name: "Your name",
    namePh: "e.g. John Smith",
    phone: "Phone",
    phonePh: "(555) 123-4567",
    trade: "Industry / type of business",
    tradePh: "Choose your industry…",
    required: "required",
    errName: "Please enter your name.",
    errPhone: "Please enter a valid phone number.",
    errTrade: "Please choose an industry.",
    submit: "I want a free demo",
    newTab: "(opens WhatsApp in a new tab)",
    noteA:
      "Submitting opens WhatsApp with your details, ready to send to us. No payment info needed. By sending, you agree to our",
    privacy: "Privacy Policy",
    and: "and",
    terms: "Terms of Use",
    noteB: "We'll only use your details to reply about your demo — we never sell them.",
    trades: [
      "Retail / e-commerce",
      "Professional services",
      "Restaurant & hospitality",
      "Beauty & wellness",
      "Health & medical",
      "Real estate",
      "Contractor / home services",
      "Startup / tech",
      "Other",
    ],
    wa: ({ name, phone, trade }) =>
      "Hi, I'm interested in a free website demo 👇\n" +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Industry / business type: ${trade}`,
  },
  he: {
    eyebrow: "בואו נתחיל",
    titleA: "דמו חינם.",
    titleB: "בלי לשלם שקל.",
    lead: "שלחו לנו את התחום ואת שם העסק. נבנה דמו מותאם אישית של האתר החדש שלכם ונראה לכם אותו — עוד לפני שתשלמו שקל.",
    dm: "שלחו לנו הודעה",
    perks: ["ללא עלות מראש", "ללא התחייבות", "מענה תוך 24 שעות"],
    sentTitle: (n) => `כמעט סיימתם, ${n}!`,
    sentA: "פתחנו לכם וואטסאפ עם הפרטים שמילאתם. פשוט לחצו",
    sentSend: "שליחה",
    sentB: "שם, ונחזור אליכם בהקדם עם הדמו.",
    sentRetry: "לא נפתח? פתחו וואטסאפ",
    name: "השם שלכם",
    namePh: "לדוגמה: משה כהן",
    phone: "טלפון",
    phonePh: "050-1234567",
    trade: "תחום / סוג העסק",
    tradePh: "בחרו את התחום שלכם…",
    required: "שדה חובה",
    errName: "נא להזין שם.",
    errPhone: "נא להזין מספר טלפון תקין.",
    errTrade: "נא לבחור תחום.",
    submit: "רוצה דמו חינם",
    newTab: "(וואטסאפ ייפתח בכרטיסייה חדשה)",
    noteA:
      "בלחיצה ייפתח וואטסאפ עם הפרטים שמילאתם, מוכנים לשליחה אלינו. אין צורך בפרטי תשלום. בשליחת הטופס אני מאשר/ת את",
    privacy: "מדיניות הפרטיות",
    and: "ואת",
    terms: "תנאי השימוש",
    noteB: "נשתמש בפרטים רק כדי לחזור אליכם לגבי הדמו — לעולם לא נמכור אותם.",
    trades: [
      "חנות / מסחר (איקומרס)",
      "שירותים מקצועיים",
      "מסעדנות ואירוח",
      "יופי וטיפוח",
      "בריאות ורפואה",
      'נדל"ן',
      "בעלי מקצוע (שיפוצים, חשמל וכו')",
      "סטארטאפ / טכנולוגיה",
      "אחר",
    ],
    wa: ({ name, phone, trade }) =>
      "שלום, אני מעוניין/ת בדמו חינם לאתר 👇\n" +
      `שם: ${name}\n` +
      `טלפון: ${phone}\n` +
      `תחום / סוג עסק: ${trade}`,
  },
};

const FIELD =
  "w-full rounded-xl border border-line bg-ink px-4 py-3 text-cloud placeholder:text-ash/80 transition-colors focus:border-accent focus:outline-none aria-[invalid=true]:border-danger";

export default function ContactCTA() {
  const c = useCopy(COPY);
  const [form, setForm] = useState({ name: "", phone: "", trade: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [waUrl, setWaUrl] = useState("");

  const update = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = c.errName;
    if (!/[0-9]{7,}/.test(form.phone.replace(/\D/g, ""))) next.phone = c.errPhone;
    if (!form.trade) next.trade = c.errTrade;
    return next;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // Open WhatsApp with the lead's details prefilled; the visitor taps "send".
      const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(c.wa(form))}`;
      setWaUrl(url);
      window.open(url, "_blank", "noopener,noreferrer");
      setSent(true);
    } else {
      // Move focus to the first invalid field so keyboard/screen-reader users land on it.
      const first = ["name", "phone", "trade"].find((k) => next[k]);
      document.getElementById(first)?.focus();
    }
  };

  const errorFor = (k) =>
    errors[k] && (
      <p id={`${k}-error`} className="mt-1.5 text-sm text-danger">
        {errors[k]}
      </p>
    );

  const fieldProps = (k) => ({
    id: k,
    value: form[k],
    onChange: update(k),
    required: true,
    "aria-required": true,
    "aria-invalid": !!errors[k],
    "aria-describedby": errors[k] ? `${k}-error` : undefined,
  });

  const Label = ({ k, children }) => (
    <label htmlFor={k} className="mb-1.5 block text-sm font-medium text-cloud">
      {children}{" "}
      <span className="text-danger" aria-hidden>
        *
      </span>
      <span className="sr-only">({c.required})</span>
    </label>
  );

  return (
    <section id="contact" className="relative py-20 sm:py-28 scroll-mt-20">
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-[500px] bg-[radial-gradient(60%_60%_at_50%_100%,rgba(29,78,216,0.14),transparent_70%)]"
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-3xl border border-line bg-ink-2">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
            {/* Start side — pitch */}
            <div className="relative flex flex-col justify-center gap-6 border-b border-line bg-gradient-to-br from-ink-3 to-ink-2 p-8 sm:p-12 lg:border-b-0 lg:border-e">
              <Reveal>
                <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                  {c.eyebrow}
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-cloud sm:text-4xl">
                  {c.titleA}
                  <br />
                  <span className="text-gold-gradient">{c.titleB}</span>
                </h2>
                <p className="mt-4 max-w-md text-lg text-ash">{c.lead}</p>
              </Reveal>

              <Reveal delay={0.1}>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-fit items-center gap-3 rounded-full border border-line bg-ink px-5 py-3 font-semibold text-cloud transition-colors hover:border-gold/50"
                >
                  <InstagramIcon className="h-5 w-5 text-accent" aria-hidden />
                  {c.dm}{" "}
                  <span className="text-accent" dir="ltr">@{SITE.instagramHandle}</span>
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 transition-transform rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                  />
                </a>
              </Reveal>

              <Reveal delay={0.15}>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ash">
                  {c.perks.map((t) => (
                    <li key={t} className="inline-flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-good" aria-hidden /> {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* End side — form */}
            <div className="p-8 sm:p-12">
              {sent ? (
                <div
                  role="status"
                  className="flex h-full min-h-[320px] flex-col items-center justify-center text-center"
                >
                  <span aria-hidden className="grid h-16 w-16 place-items-center rounded-full bg-good/15 text-good">
                    <WhatsAppIcon className="h-9 w-9" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-cloud">
                    {c.sentTitle(form.name.split(" ")[0])}
                  </h3>
                  <p className="mt-2 max-w-xs text-ash">
                    {c.sentA} <span className="font-semibold text-cloud">{c.sentSend}</span>{" "}
                    {c.sentB}
                  </p>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-white transition-transform hover:scale-[1.03]"
                  >
                    <WhatsAppIcon className="h-5 w-5" aria-hidden /> {c.sentRetry}
                    <span className="sr-only">{c.newTab}</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
                  <div>
                    <Label k="name">{c.name}</Label>
                    <input
                      {...fieldProps("name")}
                      type="text"
                      autoComplete="name"
                      placeholder={c.namePh}
                      className={FIELD}
                    />
                    {errorFor("name")}
                  </div>

                  <div>
                    <Label k="phone">{c.phone}</Label>
                    <input
                      {...fieldProps("phone")}
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      dir="ltr"
                      placeholder={c.phonePh}
                      className={`${FIELD} rtl:text-right`}
                    />
                    {errorFor("phone")}
                  </div>

                  <div>
                    <Label k="trade">{c.trade}</Label>
                    <select {...fieldProps("trade")} className={FIELD}>
                      <option value="" disabled>
                        {c.tradePh}
                      </option>
                      {c.trades.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    {errorFor("trade")}
                  </div>

                  <button
                    type="submit"
                    className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-base font-bold text-white transition-all duration-200 hover:scale-[1.01] hover:bg-gold-soft glow-gold"
                  >
                    <WhatsAppIcon className="h-5 w-5" aria-hidden />
                    {c.submit}
                    <span className="sr-only">{c.newTab}</span>
                  </button>
                  <p className="text-center text-xs leading-relaxed text-ash">
                    {c.noteA}{" "}
                    <Link to="/privacy" className="text-accent underline">
                      {c.privacy}
                    </Link>{" "}
                    {c.and}{" "}
                    <Link to="/terms" className="text-accent underline">
                      {c.terms}
                    </Link>
                    . {c.noteB}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
