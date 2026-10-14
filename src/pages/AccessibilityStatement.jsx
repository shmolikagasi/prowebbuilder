import LegalPage from "../components/LegalPage";
import { useLang } from "../lib/i18n";
import { SITE } from "../lib/site";

function AccessibilityEn() {
  return (
    <LegalPage
      title="Accessibility Statement"
      subtitle="We want everyone, including people with disabilities, to be able to use our website and services easily and independently."
      updated="October 14, 2026"
    >
      <p>
        <strong>prowebbuilder</strong> is committed to digital accessibility. We continually work
        to improve the experience for all visitors and to follow the relevant accessibility
        standards, in the spirit of the Americans with Disabilities Act (ADA).
      </p>

      <h2>1. Our standard</h2>
      <p>
        We aim to conform to the{" "}
        <strong>Web Content Accessibility Guidelines (WCAG) 2.1, Level AA</strong>, published by
        the World Wide Web Consortium (W3C), and we follow WCAG 2.2 success criteria where we
        can. WCAG 2.1 AA is the benchmark used by the U.S. Department of Justice in its ADA
        rules and is widely recognized as the standard for accessible websites.
      </p>
      <p>
        Our status is <strong>partially conformant</strong>: most of the Site meets the standard,
        and we are working on the items listed under "Known limitations" below.
      </p>

      <h2>2. What we've done</h2>
      <ul>
        <li>Semantic HTML with a clear heading structure, landmarks and a "Skip to main content" link.</li>
        <li>Full keyboard navigation with a clearly visible focus indicator.</li>
        <li>Screen reader support: text labels for buttons and icons, decorative graphics hidden from assistive technology, and a correct page language (English or Hebrew).</li>
        <li>Color contrast that meets WCAG AA for text, icons and focus outlines.</li>
        <li>Form fields with visible labels, required-field indicators and error messages that are announced and linked to their field.</li>
        <li>A pause button for the scrolling banner, and respect for your system's "reduce motion" setting.</li>
        <li>Responsive layout that works when zoomed up to 200% and on phones, tablets and desktops.</li>
        <li>Full support for both left-to-right (English) and right-to-left (Hebrew) reading.</li>
      </ul>

      <h2>3. Accessibility menu</h2>
      <p>
        The round accessibility button in the corner of the screen opens a menu where you can
        adjust the Site to your needs:
      </p>
      <ul>
        <li>Increase or decrease text size.</li>
        <li>High-contrast mode.</li>
        <li>Highlight links.</li>
        <li>Switch to a simpler, readable font.</li>
        <li>Stop animations and motion.</li>
        <li>Reset all settings.</li>
      </ul>
      <p>
        The menu is an extra convenience — the Site itself is built to be accessible without it,
        and it works with the assistive technology you already use.
      </p>

      <h2>4. Known limitations</h2>
      <ul>
        <li>
          Portfolio links open our clients' websites and our contact options open WhatsApp and
          Instagram. Those third-party sites and apps are outside our control and may not be
          fully accessible.
        </li>
        <li>
          Some decorative background animations continue to move unless you use "Stop animations"
          in the accessibility menu or turn on "reduce motion" in your device settings.
        </li>
      </ul>

      <h2>5. Feedback and help</h2>
      <p>
        If you run into any barrier on this Site, or need information in a different format, please
        let us know. Tell us the page, what happened, and the browser and assistive technology you
        use (if any). We'll be happy to help — and to provide the information or service another
        way, such as by phone or email.
      </p>
      <ul>
        <li>Accessibility contact: prowebbuilder</li>
        <li>
          Email:{" "}
          <a href={`mailto:${SITE.email}`} dir="ltr">
            {SITE.email}
          </a>
        </li>
        <li>
          Phone / WhatsApp:{" "}
          <a href={`tel:${SITE.phoneIntl}`} dir="ltr">
            {SITE.phoneIntl}
          </a>
        </li>
      </ul>
      <p>We aim to respond to accessibility feedback within 2 business days.</p>

      <h2>6. Ongoing effort</h2>
      <p>
        We review the Site for accessibility when we make changes, test with keyboard-only
        navigation and screen readers, and update this statement as we improve. This statement was
        last reviewed on <strong>October 14, 2026</strong>.
      </p>
    </LegalPage>
  );
}

function AccessibilityHe() {
  return (
    <LegalPage
      title="הצהרת נגישות"
      subtitle="אנו רואים חשיבות רבה במתן שירות שוויוני ונגיש לכלל הגולשים, לרבות אנשים עם מוגבלות."
      updated="14 באוקטובר 2026"
    >
      <p>
        אתר <span dir="ltr">prowebbuilder</span>, המופעל על ידי <strong>prowebbuilder</strong>,
        פועל להנגשת האתר והשירותים לכלל האוכלוסייה, מתוך אמונה כי לכל אדם מגיעה הזכות לחיות
        בשוויון, בכבוד, בנוחות ובעצמאות.
      </p>

      <h2>1. רמת הנגישות באתר</h2>
      <p>
        האתר הונגש בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות),
        התשע"ג-2013, ובהתאם לתקן הישראלי <strong>ת"י 5568</strong> המבוסס על הנחיות{" "}
        <strong>WCAG</strong> של ארגון <span dir="ltr">W3C</span>. אנו שואפים לעמוד בהנחיות{" "}
        <strong dir="ltr">WCAG 2.1</strong> ברמת התאמה <strong>AA</strong> — הרמה הנדרשת גם
        בארה״ב לפי חוק ה-ADA.
      </p>

      <h2>2. אמצעי הנגישות באתר</h2>
      <ul>
        <li>מבנה סמנטי תקין, כותרות בהיררכיה ברורה וקישור "דלג לתוכן הראשי".</li>
        <li>תמיכה בניווט וגלישה מלאה באמצעות המקלדת, עם סימון מיקוד (Focus) בולט.</li>
        <li>תאימות לתוכנות הקראת מסך, תוויות טקסט לכפתורים ולסמלים, והגדרת שפת העמוד.</li>
        <li>ניגודיות צבעים העומדת ברמה AA לטקסט, לסמלים ולסימון המיקוד.</li>
        <li>טפסים עם תוויות, סימון שדות חובה והודעות שגיאה המוקראות לקוראי מסך.</li>
        <li>כפתור לעצירת הפס הנע וכיבוד העדפת המערכת להפחתת תנועה.</li>
        <li>תמיכה בכיווניות מימין לשמאל (עברית) ומשמאל לימין (אנגלית).</li>
        <li>התאמה למגוון מכשירים וגדלי מסך ולהגדלה עד 200%.</li>
      </ul>

      <h2>3. תפריט הנגישות</h2>
      <p>באתר מוצב תפריט נגישות (סמל האדם בפינת המסך) המאפשר התאמות אישיות, ובהן:</p>
      <ul>
        <li>הגדלה והקטנה של גודל הטקסט.</li>
        <li>מצב ניגודיות גבוהה.</li>
        <li>הדגשת קישורים.</li>
        <li>החלפה לגופן קריא.</li>
        <li>עצירת אנימציות ותנועה.</li>
        <li>איפוס כלל ההגדרות.</li>
      </ul>

      <h2>4. מגבלות ידועות</h2>
      <p>
        קישורי תיק העבודות מובילים לאתרי לקוחות, ואפשרויות הפנייה מובילות לוואטסאפ ולאינסטגרם —
        אלה אתרים ושירותים של צד שלישי שאינם בשליטתנו וייתכן שאינם נגישים במלואם. אם נתקלתם
        ברכיב שאינו נגיש — נשמח שתעדכנו אותנו ונפעל לתקן זאת בהקדם.
      </p>

      <h2>5. פנייה בנושא נגישות</h2>
      <p>
        אם נתקלתם בקושי או בבעיית נגישות באתר, או אם יש לכם הצעה לשיפור, נשמח שתפנו אלינו. אנא
        ציינו בפנייתכם את העמוד שבו נתקלתם בבעיה, תיאור התקלה, סוג הדפדפן והטכנולוגיה המסייעת
        שבה השתמשתם (אם ישנה):
      </p>
      <ul>
        <li>איש הקשר לנושא נגישות: prowebbuilder</li>
        <li>
          טלפון:{" "}
          <a href={`tel:${SITE.phoneIntl}`} dir="ltr">
            {SITE.phoneDisplay}
          </a>
        </li>
        <li>
          דוא"ל:{" "}
          <a href={`mailto:${SITE.email}`} dir="ltr">
            {SITE.email}
          </a>
        </li>
      </ul>
      <p>נעשה כמיטב יכולתנו להשיב לפנייתכם בתוך 2 ימי עסקים.</p>

      <h2>6. אופן מתן השירות</h2>
      <p>
        השירות ניתן באופן מקוון בלבד, ואין נקודת שירות פיזית לקבלת קהל המחייבת הסדרי נגישות
        פרונטליים. כלל השירות והפנייה אלינו מתבצעים דרך האתר, הטלפון והדוא"ל שלעיל.
      </p>

      <h2>7. תאריך ההצהרה</h2>
      <p>
        הצהרת נגישות זו עודכנה לאחרונה בתאריך <strong>14 באוקטובר 2026</strong>. אנו בוחנים
        ומעדכנים את נגישות האתר מעת לעת.
      </p>
    </LegalPage>
  );
}

export default function AccessibilityStatement() {
  const { lang } = useLang();
  return lang === "he" ? <AccessibilityHe /> : <AccessibilityEn />;
}
