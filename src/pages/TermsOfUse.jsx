import { Link } from "react-router-dom";
import LegalPage from "../components/LegalPage";
import { useLang } from "../lib/i18n";
import { SITE } from "../lib/site";

function TermsEn() {
  return (
    <LegalPage
      title="Terms of Use"
      subtitle="The rules for using this website. Please read them — they're short."
      updated="October 14, 2026"
    >
      <p>
        These Terms of Use ("Terms") govern your use of the prowebbuilder website (the "Site"),
        operated by <strong>prowebbuilder</strong> ("we," "us," or "our"). By using the Site, you
        agree to these Terms. If you do not agree, please do not use the Site.
      </p>

      <h2>1. What the Site is for</h2>
      <p>
        The Site describes our web design services and lets you request a free website demo. The
        content is general information only. Nothing on the Site is a binding offer — any project
        is governed by a separate written agreement or proposal that we sign with you.
      </p>

      <h2>2. Free demo</h2>
      <p>
        A free demo is a no-obligation preview of what your website could look like. You don't
        need to pay or provide payment details to receive one, and you are under no obligation to
        buy. We may decline demo requests at our discretion. Unless we agree otherwise in writing,
        the demo remains our property until you purchase the finished website.
      </p>

      <h2>3. Results</h2>
      <p>
        We build websites designed to attract customers, but search rankings, traffic, leads and
        sales depend on many factors outside our control. We do not guarantee any specific
        business result.
      </p>

      <h2>4. Intellectual property</h2>
      <p>
        The Site's design, text, graphics and code belong to prowebbuilder or its licensors and
        are protected by copyright and trademark laws. Client names and websites shown in our
        portfolio belong to their respective owners and are shown as examples of our work. You
        may not copy or reuse Site content without our written permission.
      </p>

      <h2>5. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>use the Site for anything unlawful, fraudulent or harmful;</li>
        <li>send us false information or impersonate someone else;</li>
        <li>attempt to disrupt, hack, scrape or overload the Site.</li>
      </ul>

      <h2>6. Third-party links and services</h2>
      <p>
        The Site links to third-party websites and services, such as our clients' sites,
        WhatsApp and Instagram. We are not responsible for their content, policies or
        availability. Your use of them is governed by their own terms.
      </p>

      <h2>7. Disclaimer</h2>
      <p>
        The Site is provided "as is" and "as available," without warranties of any kind, express
        or implied, to the fullest extent permitted by law.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, prowebbuilder will not be liable for any indirect,
        incidental, special or consequential damages arising from your use of the Site. Some
        states do not allow certain limitations, so some of these may not apply to you.
      </p>

      <h2>9. Privacy and accessibility</h2>
      <p>
        Our <Link to="/privacy">Privacy Policy</Link> explains how we handle your information, and
        our <Link to="/accessibility">Accessibility Statement</Link> describes our commitment to an
        accessible Site.
      </p>

      <h2>10. Changes</h2>
      <p>
        We may update these Terms from time to time. The updated version will be posted on this
        page with a new "Last updated" date. Continuing to use the Site after a change means you
        accept the updated Terms.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about these Terms? Email us at{" "}
        <a href={`mailto:${SITE.email}`} dir="ltr">
          {SITE.email}
        </a>
        .
      </p>
    </LegalPage>
  );
}

function TermsHe() {
  return (
    <LegalPage
      title="תנאי שימוש"
      subtitle="הכללים לשימוש באתר. הם קצרים — שווה לקרוא."
      updated="14 באוקטובר 2026"
    >
      <p>
        תנאי שימוש אלה חלים על השימוש באתר <span dir="ltr">prowebbuilder</span> (להלן: "האתר"),
        המופעל על ידי <strong>prowebbuilder</strong>. השימוש באתר מהווה הסכמה לתנאים אלה. אם אינכם
        מסכימים להם, אנא הימנעו משימוש באתר. התנאים מנוסחים בלשון זכר מטעמי נוחות בלבד.
      </p>

      <h2>1. מטרת האתר</h2>
      <p>
        האתר מציג את שירותי בניית האתרים שלנו ומאפשר לבקש דמו חינם. התוכן באתר הוא מידע כללי
        בלבד ואינו מהווה הצעה מחייבת — כל פרויקט כפוף להסכם או להצעת מחיר נפרדים בכתב.
      </p>

      <h2>2. דמו חינם</h2>
      <p>
        הדמו הוא תצוגה מקדימה ללא התחייבות של האתר העתידי שלכם. אין צורך לשלם או למסור פרטי
        תשלום כדי לקבל אותו, ואין כל חובה לרכוש. אנו רשאים לסרב לבקשות לפי שיקול דעתנו. אלא אם
        סוכם אחרת בכתב, הדמו נשאר בבעלותנו עד לרכישת האתר המוגמר.
      </p>

      <h2>3. תוצאות</h2>
      <p>
        אנו בונים אתרים שנועדו להביא לקוחות, אך דירוג בגוגל, תנועה, פניות ומכירות תלויים בגורמים
        רבים שאינם בשליטתנו. איננו מתחייבים לתוצאה עסקית מסוימת.
      </p>

      <h2>4. קניין רוחני</h2>
      <p>
        העיצוב, הטקסטים, הגרפיקה והקוד של האתר שייכים ל-prowebbuilder או למעניקי הרישיון שלה
        ומוגנים בדיני זכויות יוצרים וסימני מסחר. שמות ואתרים של לקוחות המוצגים בתיק העבודות
        שייכים לבעליהם ומוצגים כדוגמה לעבודתנו. אין להעתיק או לעשות שימוש בתוכן האתר ללא אישור
        בכתב.
      </p>

      <h2>5. שימוש מותר</h2>
      <p>אין לעשות באתר שימוש:</p>
      <ul>
        <li>בלתי חוקי, במרמה או באופן מזיק;</li>
        <li>תוך מסירת פרטים כוזבים או התחזות לאחר;</li>
        <li>לשיבוש, פריצה, איסוף נתונים אוטומטי או העמסת האתר.</li>
      </ul>

      <h2>6. קישורים ושירותים של צד שלישי</h2>
      <p>
        האתר מקשר לאתרים ולשירותים של צד שלישי, כגון אתרי לקוחות, וואטסאפ ואינסטגרם. איננו
        אחראים לתוכנם, למדיניותם או לזמינותם, והשימוש בהם כפוף לתנאים שלהם.
      </p>

      <h2>7. הגבלת אחריות</h2>
      <p>
        האתר מוצע כמות שהוא (AS IS). במידה המרבית המותרת בדין, prowebbuilder לא תישא באחריות
        לנזקים עקיפים, תוצאתיים או מיוחדים הנובעים מהשימוש באתר.
      </p>

      <h2>8. פרטיות ונגישות</h2>
      <p>
        <Link to="/privacy">מדיניות הפרטיות</Link> מסבירה כיצד אנו מטפלים במידע שלכם, ו
        <Link to="/accessibility">הצהרת הנגישות</Link> מתארת את מחויבותנו לאתר נגיש.
      </p>

      <h2>9. שינויים</h2>
      <p>
        אנו רשאים לעדכן תנאים אלה מעת לעת. הנוסח המעודכן יפורסם בעמוד זה עם תאריך עדכון חדש.
      </p>

      <h2>10. יצירת קשר</h2>
      <p>
        שאלות לגבי תנאי השימוש? כתבו לנו:{" "}
        <a href={`mailto:${SITE.email}`} dir="ltr">
          {SITE.email}
        </a>
      </p>
    </LegalPage>
  );
}

export default function TermsOfUse() {
  const { lang } = useLang();
  return lang === "he" ? <TermsHe /> : <TermsEn />;
}
