import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import WhatsAppIcon from "./WhatsAppIcon";
import Reveal from "./Reveal";
import { SITE } from "../lib/site";

// Build a wa.me link with the lead's details prefilled.
function buildWhatsAppUrl({ name, phone, trade }) {
  const message =
    "שלום, אני מעוניין/ת בדמו חינם לאתר 👇\n" +
    `שם: ${name}\n` +
    `טלפון: ${phone}\n` +
    `תחום / סוג עסק: ${trade}`;
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

const TRADES = [
  "חנות / מסחר (איקומרס)",
  "שירותים מקצועיים",
  "מסעדנות ואירוח",
  "יופי וטיפוח",
  "בריאות ורפואה",
  'נדל"ן',
  "בעלי מקצוע (שיפוצים, חשמל וכו')",
  "סטארטאפ / טכנולוגיה",
  "אחר",
];

export default function ContactCTA() {
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
    if (!form.name.trim()) next.name = "נא להזין שם.";
    if (!/[0-9]{7,}/.test(form.phone.replace(/\D/g, "")))
      next.phone = "נא להזין מספר טלפון תקין.";
    if (!form.trade) next.trade = "נא לבחור תחום.";
    return next;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // Open WhatsApp with the lead's details prefilled; the visitor taps "send".
      const url = buildWhatsAppUrl(form);
      setWaUrl(url);
      window.open(url, "_blank", "noopener,noreferrer");
      setSent(true);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 scroll-mt-20">
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-[500px] bg-[radial-gradient(60%_60%_at_50%_100%,rgba(29,78,216,0.14),transparent_70%)]"
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-3xl border border-line bg-ink-2">
          <div className="grid lg:grid-cols-[1fr_1fr]">
            {/* Right (visual start) — pitch */}
            <div className="relative flex flex-col justify-center gap-6 border-b border-line bg-gradient-to-br from-ink-3 to-ink-2 p-8 sm:p-12 lg:border-b-0 lg:border-s">
              <Reveal>
                <span className="text-sm font-semibold uppercase tracking-widest text-gold">
                  בואו נתחיל
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-cloud sm:text-4xl">
                  דמו חינם.
                  <br />
                  <span className="text-gold-gradient">בלי לשלם שקל.</span>
                </h2>
                <p className="mt-4 max-w-md text-lg text-ash">
                  שלחו לנו את התחום ואת שם העסק. נבנה דמו מותאם אישית של האתר החדש
                  שלכם ונראה לכם אותו — עוד לפני שתשלמו שקל.
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-fit items-center gap-3 rounded-full border border-line bg-ink px-5 py-3 font-semibold text-cloud transition-colors hover:border-gold/50"
                >
                  <InstagramIcon className="h-5 w-5 text-gold" />
                  שלחו לנו הודעה{" "}
                  <span className="text-gold" dir="ltr">@{SITE.instagramHandle}</span>
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </a>
              </Reveal>

              <Reveal delay={0.15}>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ash">
                  {["ללא עלות מראש", "ללא התחייבות", "מענה תוך 24 שעות"].map((t) => (
                    <li key={t} className="inline-flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-good" /> {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Left — form */}
            <div className="p-8 sm:p-12">
              {sent ? (
                <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-good/15 text-good">
                    <WhatsAppIcon className="h-9 w-9" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-cloud">
                    כמעט סיימתם, {form.name.split(" ")[0]}!
                  </h3>
                  <p className="mt-2 max-w-xs text-ash">
                    פתחנו לכם וואטסאפ עם הפרטים שמילאתם. פשוט לחצו{" "}
                    <span className="font-semibold text-cloud">שליחה</span> שם, ונחזור
                    אליכם בהקדם עם הדמו.
                  </p>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-white transition-transform hover:scale-[1.03]"
                  >
                    <WhatsAppIcon className="h-5 w-5" /> לא נפתח? פתחו וואטסאפ
                  </a>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-cloud"
                    >
                      השם שלכם
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="לדוגמה: משה כהן"
                      className="w-full rounded-xl border border-line bg-ink px-4 py-3 text-cloud placeholder:text-ash/60 transition-colors focus:border-gold focus:outline-none"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-sm text-danger" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-cloud"
                    >
                      טלפון
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      dir="ltr"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="050-1234567"
                      className="w-full rounded-xl border border-line bg-ink px-4 py-3 text-right text-cloud placeholder:text-ash/60 transition-colors focus:border-gold focus:outline-none"
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-sm text-danger" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="trade"
                      className="mb-1.5 block text-sm font-medium text-cloud"
                    >
                      תחום / סוג העסק
                    </label>
                    <select
                      id="trade"
                      value={form.trade}
                      onChange={update("trade")}
                      className="w-full rounded-xl border border-line bg-ink px-4 py-3 text-cloud transition-colors focus:border-gold focus:outline-none"
                      aria-invalid={!!errors.trade}
                    >
                      <option value="" disabled>
                        בחרו את התחום שלכם…
                      </option>
                      {TRADES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    {errors.trade && (
                      <p className="mt-1.5 text-sm text-danger" role="alert">
                        {errors.trade}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-3.5 text-base font-bold text-white transition-all duration-200 hover:scale-[1.01] hover:bg-gold-soft glow-gold"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    רוצה דמו חינם
                  </button>
                  <p className="text-center text-xs leading-relaxed text-ash">
                    בלחיצה ייפתח וואטסאפ עם הפרטים שמילאתם, מוכנים לשליחה אלינו. אין
                    צורך בפרטי תשלום. בשליחת הטופס אני מאשר/ת את{" "}
                    <Link to="/privacy" className="text-gold underline">
                      מדיניות הפרטיות
                    </Link>
                    .
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
