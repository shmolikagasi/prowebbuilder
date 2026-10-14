import LegalPage from "../components/LegalPage";
import { useLang } from "../lib/i18n";
import { SITE } from "../lib/site";

function ContactList({ he }) {
  return (
    <ul>
      <li>{he ? "שם" : "Name"}: prowebbuilder</li>
      <li>
        {he ? 'דוא"ל' : "Email"}:{" "}
        <a href={`mailto:${SITE.email}`} dir="ltr">
          {SITE.email}
        </a>
      </li>
      <li>
        {he ? "טלפון" : "Phone"}:{" "}
        <a href={`tel:${SITE.phoneIntl}`} dir="ltr">
          {he ? SITE.phoneDisplay : SITE.phoneIntl}
        </a>
      </li>
      <li>
        {he
          ? "העסק פועל באופן מקוון (ללא כתובת פיזית לקבלת קהל)."
          : "We operate online only (no physical office open to the public)."}
      </li>
    </ul>
  );
}

function PrivacyEn() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="Your privacy matters to us. This policy explains what information we collect, how we use it, and the choices and rights you have."
      updated="October 14, 2026"
    >
      <p>
        This Privacy Policy applies to the prowebbuilder website (the "Site"), operated by{" "}
        <strong>prowebbuilder</strong> ("we," "us," or "our"). It is written to meet the
        disclosure requirements of the California Online Privacy Protection Act (CalOPPA) and
        to reflect the rights available under U.S. state privacy laws. By using the Site, you
        acknowledge the practices described here.
      </p>

      <h2>1. Information we collect</h2>
      <h3>Information you give us</h3>
      <p>
        When you fill out the contact form, we collect the details you choose to provide:{" "}
        <strong>your name, phone number, and type of business</strong>. The form does not send
        data to our servers — it opens WhatsApp on your device with your message pre-filled,
        and we receive it only if you press "Send." If you message us on Instagram or by email,
        we receive whatever you include in that message.
      </p>
      <h3>Information collected automatically</h3>
      <p>
        Like most websites, our hosting provider automatically records basic technical data
        when you visit, such as your IP address, browser and device type, pages requested and
        the date and time of the request. This is used to deliver the Site, keep it secure and
        fix problems.
      </p>
      <h3>Categories (California disclosure)</h3>
      <ul>
        <li>Identifiers — name, phone number, IP address.</li>
        <li>Commercial information — the type of business you tell us about.</li>
        <li>Internet or network activity — technical log data described above.</li>
      </ul>
      <p>We do not collect sensitive personal information, payment details or precise location.</p>

      <h2>2. How we use your information</h2>
      <ul>
        <li>To reply to your inquiry and prepare a website demo or quote for you.</li>
        <li>To provide the services you request and communicate with you about them.</li>
        <li>To operate, secure, and improve the Site.</li>
        <li>To comply with legal obligations and enforce our Terms of Use.</li>
      </ul>
      <p>
        We will only send you marketing messages if you ask for them, and every marketing
        email will include a way to unsubscribe, as required by the CAN-SPAM Act. We do not
        send automated text messages or robocalls.
      </p>

      <h2>3. How we share information</h2>
      <p>
        <strong>We do not sell your personal information, and we do not "share" it for
        cross-context behavioral advertising.</strong> We disclose information only to:
      </p>
      <ul>
        <li>
          Service providers that help us run the Site and communicate with you — our web host
          (Netlify), Google Fonts (which receives your IP address to deliver fonts), and
          WhatsApp and Instagram (Meta), when you choose to contact us there. Their own privacy
          policies govern how they handle data you send through their apps.
        </li>
        <li>Authorities, when required by law, subpoena or court order.</li>
        <li>Others, when needed to protect our legal rights, safety or property.</li>
      </ul>

      <h2>4. Cookies, local storage, and Do Not Track</h2>
      <p>
        We do not use advertising or analytics cookies. The Site stores two small preferences
        in your browser's local storage — your <strong>language choice</strong> and your{" "}
        <strong>accessibility settings</strong> — so they stay the same between visits. You
        can clear them at any time in your browser settings.
      </p>
      <p>
        Because we do not track you across websites, the Site does not change its behavior in
        response to "Do Not Track" signals. If we ever add analytics or advertising tools, we
        will update this policy first and honor Global Privacy Control (GPC) signals as an
        opt-out where the law requires.
      </p>

      <h2>5. Data security</h2>
      <p>
        We use reasonable administrative and technical safeguards, and the Site is served over
        encrypted HTTPS. No method of transmission or storage is 100% secure, so we cannot
        guarantee absolute security.
      </p>

      <h2>6. Data retention</h2>
      <p>
        We keep inquiry details only as long as needed to respond to you and provide our
        services, or as required by law. After that, we delete or anonymize them.
      </p>

      <h2>7. Your privacy rights</h2>
      <p>
        Depending on where you live (for example, California, Colorado, Connecticut, Virginia,
        Utah, Texas, Oregon and other states with consumer privacy laws), you may have the right
        to:
      </p>
      <ul>
        <li><strong>Know and access</strong> the personal information we hold about you.</li>
        <li><strong>Correct</strong> inaccurate information.</li>
        <li><strong>Delete</strong> your personal information.</li>
        <li><strong>Opt out</strong> of sale, sharing or targeted advertising (we do none of these).</li>
        <li><strong>Not be discriminated against</strong> for exercising these rights.</li>
      </ul>
      <p>
        We honor these requests for every visitor, whatever state you live in. To make a request,
        contact us using the details below. We may need to verify your identity, and we will
        respond within 45 days. You may use an authorized agent to make a request on your behalf.
        If we deny your request, you may appeal by replying to our decision.
      </p>

      <h2>8. Children's privacy</h2>
      <p>
        The Site is intended for business owners and is not directed to children under 13. We do not knowingly collect personal
        information from children, consistent with the Children's Online Privacy Protection Act
        (COPPA). If you believe a child has sent us information, please contact us and we will
        delete it.
      </p>

      <h2>9. International visitors</h2>
      <p>
        prowebbuilder is run from Israel and serves clients in the United States and elsewhere.
        Your information may be processed in the United States, Israel or other countries where
        our service providers operate.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. We will post the new version on this page
        and change the "Last updated" date above. If the changes are significant, we will make
        that clear on the Site.
      </p>

      <h2>11. Contact us</h2>
      <p>For any privacy question or request, contact us:</p>
      <ContactList />
    </LegalPage>
  );
}

function PrivacyHe() {
  return (
    <LegalPage
      title="מדיניות פרטיות"
      subtitle="הפרטיות שלכם חשובה לנו. מסמך זה מסביר איזה מידע אנו אוספים, כיצד אנו משתמשים בו ומהן זכויותיכם."
      updated="14 באוקטובר 2026"
    >
      <p>
        מדיניות פרטיות זו חלה על השימוש באתר <span dir="ltr">prowebbuilder</span> (להלן:
        "האתר"), המופעל על ידי <strong>prowebbuilder</strong> (להלן: "אנחנו" או "העסק").
        השימוש באתר ומסירת פרטים דרכו מהווים הסכמה לתנאים המפורטים במסמך זה. המדיניות מנוסחת
        בלשון זכר מטעמי נוחות בלבד ומתייחסת לכל המגדרים.
      </p>

      <h2>1. איזה מידע אנו אוספים</h2>
      <h3>מידע שאתם מוסרים מרצונכם</h3>
      <p>
        בעת מילוי טופס יצירת הקשר באתר אנו אוספים את הפרטים שאתם בוחרים למסור, ובכללם: שם
        מלא, מספר טלפון וסוג העסק / תחום העיסוק. הטופס אינו שולח מידע לשרתים שלנו — הוא פותח
        וואטסאפ במכשיר שלכם עם ההודעה מוכנה, והיא מגיעה אלינו רק אם תלחצו "שליחה". מסירת
        המידע אינה חובה חוקית, אך ללא הפרטים הבסיסיים לא נוכל לחזור אליכם או להכין עבורכם דמו.
      </p>
      <h3>מידע שנאסף באופן אוטומטי</h3>
      <p>
        בעת הגלישה באתר עשוי להיאסף מידע טכני, כגון כתובת IP, סוג הדפדפן והמכשיר, עמודים
        שנצפו ומועד הגלישה. מידע זה נאסף למטרות תפעול, אבטחה ושיפור חוויית המשתמש.
      </p>

      <h2>2. מטרות השימוש במידע</h2>
      <ul>
        <li>יצירת קשר בעקבות פנייתכם והכנת הצעה / דמו לאתר.</li>
        <li>מתן השירותים המבוקשים והתקשרות עסקית שוטפת.</li>
        <li>שיפור האתר, השירותים והתאמת התכנים.</li>
        <li>עמידה בדרישות הדין ואכיפת תנאי השימוש.</li>
        <li>
          משלוח דיוור ותכנים שיווקיים — בכפוף להסכמתכם ולזכותכם להסיר את עצמכם בכל עת, בהתאם
          לסעיף 30א לחוק התקשורת (בזק ושידורים), התשמ"ב-1982.
        </li>
      </ul>

      <h2>3. מסירת מידע לצדדים שלישיים</h2>
      <p>
        איננו מוכרים ואיננו משכירים את המידע האישי שלכם. מידע עשוי להימסר לצדדים שלישיים רק
        במקרים הבאים: לספקי שירות הפועלים מטעמנו (כגון אחסון האתר ב-Netlify, גופנים מ-Google
        Fonts, ווואטסאפ ואינסטגרם של Meta כאשר אתם בוחרים לפנות אלינו דרכם); כאשר הדבר נדרש
        על פי חוק, צו בית משפט או רשות מוסמכת; או לצורך הגנה על זכויותינו החוקיות.
      </p>

      <h2>4. עוגיות (Cookies) ואחסון מקומי</h2>
      <p>
        איננו משתמשים בעוגיות פרסום או מדידה. האתר שומר בדפדפן שלכם (Local Storage) שתי
        העדפות בלבד — בחירת השפה והגדרות הנגישות — כדי שיישמרו בין ביקורים. ניתן למחוק אותן
        בכל עת דרך הגדרות הדפדפן. ככל שייעשה בעתיד שימוש בכלי ניתוח או פרסום חיצוניים, מדיניות
        זו תעודכן מראש.
      </p>

      <h2>5. אבטחת מידע</h2>
      <p>
        אנו נוקטים באמצעים סבירים ומקובלים לאבטחת המידע ולצמצום הסיכונים לחדירה בלתי מורשית,
        והאתר מוגש בחיבור מוצפן (HTTPS). עם זאת, איננו יכולים להבטיח חסינות מוחלטת.
      </p>

      <h2>6. שמירת המידע</h2>
      <p>
        המידע יישמר למשך הזמן הנדרש להגשמת המטרות שלשמן נאסף, או כנדרש על פי דין — ולאחר מכן
        יימחק או יעבור אנונימיזציה.
      </p>

      <h2>7. זכויותיכם</h2>
      <p>
        בהתאם לחוק הגנת הפרטיות, התשמ"א-1981, ולחוקי הפרטיות הרלוונטיים במדינות ארה״ב, עומדות
        לכם הזכויות הבאות:
      </p>
      <ul>
        <li>
          <strong>זכות עיון</strong> — לעיין במידע המוחזק אודותיכם.
        </li>
        <li>
          <strong>זכות לתיקון</strong> — לבקש לתקן מידע שאינו נכון, שלם או מעודכן.
        </li>
        <li>
          <strong>זכות למחיקה / הסרה מדיוור</strong> — לבקש למחוק את פרטיכם או להסירם ממאגר
          הדיוור.
        </li>
      </ul>
      <p>
        למימוש הזכויות ניתן לפנות אלינו בפרטים שבסוף המסמך. נטפל בפנייתכם בתוך זמן סביר ולא
        יאוחר מ-45 יום.
      </p>

      <h2>8. קטינים</h2>
      <p>
        האתר מיועד לבעלי עסקים ואינו פונה לקטינים. איננו אוספים ביודעין מידע על ילדים מתחת
        לגיל 13.
      </p>

      <h2>9. שינויים במדיניות</h2>
      <p>
        אנו רשאים לעדכן מדיניות זו מעת לעת. הנוסח המעודכן יפורסם בעמוד זה ותאריך העדכון
        יעודכן בהתאם.
      </p>

      <h2>10. יצירת קשר בנושאי פרטיות</h2>
      <p>לכל שאלה או בקשה בנוגע למדיניות זו או למידע שלכם, ניתן לפנות אלינו:</p>
      <ContactList he />
    </LegalPage>
  );
}

export default function PrivacyPolicy() {
  const { lang } = useLang();
  return lang === "he" ? <PrivacyHe /> : <PrivacyEn />;
}
