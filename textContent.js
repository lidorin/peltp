/*
  Multi‑language content and language switcher for the Peletalk landing page.

  This script defines translations for Hebrew, English and Arabic and
  applies them dynamically to the DOM.  A language switcher is
  attached to the page which lets visitors toggle between languages.

  When the language changes the document's `lang` and `dir`
  attributes are updated accordingly, and all textual content,
  placeholders and button labels are refreshed.  The active
  language button is underlined.
*/
(function () {
  // Define translations for each supported language.  The Hebrew
  // values are based on the original site content.  English and
  // Arabic translations have been carefully crafted to convey the
  // same meaning.
  const translations = {
    he: {
      siteTitle: 'פלאטוק',
      nav: {
        login: 'התחברות',
        links: {
          partners: 'טעינות ותשלומים',
          services: 'שירותים',
          about: 'אודות',
          contact: 'צור קשר'
        }
      },
      hero: {
        title: 'פלאטוק - מחברים אנשים',
        paragraph: 'פלאטוק מספקת לעסקים מערכת מהירה ופשוטה לטעינות SIM ושירותי תשלום חיוניים',
        cta: 'להצטרפות כמשווק'
      },
      partners: {
        group1: 'טעינות ושירותים סלולריים',
        group2: 'תשלומים ושירותים ציבוריים'
      },
      services: {
        title: 'השירותים במערכת פלאטוק',
        cards: [
          {
            title: 'טעינת SIM מקומי',
            desc: 'טעינה מיידית עבור חברות הסלולר בישראל, באמצעות ממשק עבודה פשוט וברור.'
          },
          {
            title: 'סים בינלאומי',
            desc: 'פתרונות לטעינת כרטיסי SIM בינלאומיים ושירותי תקשורת ללקוחות נוסעים ומתקשרים מחו״ל.'
          },
          {
            title: 'תשלומי כבישי אגרה ושירותים ציבוריים',
            desc: 'קליטת תשלומים עבור כביש 6, כביש 6 צפון, מנהרות הכרמל, דוחות משטרה, חשמל ועוד.'
          },
          {
            title: 'הטענת רב־קו',
            desc: 'אפשרות לביצוע טעינת כרטיסי רב־קו בקלות ובמהירות ללקוחות המגיעים לעסק.'
          },
          {
            title: 'תמיכה ושירות',
            desc: 'תמיכה טכנית ושירות לקוחות בעברית, כולל ליווי מקצועי למשווקים ופתרון תקלות.'
          }
        ]
      },
      about: {
        title: 'אודות פלאטוק',
        paragraphs: [
          'פלאטוק מסחר ושיווק בע״מ מספקת פתרונות מתקדמים לטעינת כרטיסי SIM ולביצוע תשלומים עבור מגוון גופים מרכזיים בישראל. החברה פועלת עם חברות התקשורת הגדולות ועם גופים ציבוריים, ומציעה למשווקים מערכת עבודה יציבה, מהירה ונוחה.',
          'המערכת של פלאטוק פותחה במיוחד לבעלי עסקים הפועלים מול קהל לקוחות מגוון, תוך דגש על פשטות ושימוש ברור. כל פעולה מתבצעת בזמן אמת, בליווי דוחות מסודרים ושקיפות מלאה.',
          'החברה מספקת תמיכה מלאה, הדרכה ראשונית ושירות מתמשך לכל משווק, מתוך מחויבות לאמינות ולמקצועיות לאורך כל הדרך.'
        ]
      },
      contact: {
        title: 'מעוניינים להצטרף כמשווקים?',
        placeholders: {
          name: 'שם מלא',
          email: 'אימייל',
          address: 'כתובת',
          phone: 'טלפון',
          message: 'פרטי הפנייה'
        },
        submit: 'שליחה',
        phoneText: 'או צרו קשר טלפוני:',
        phoneNumber: '08-9934451'
      }
    },
    en: {
      siteTitle: 'Peletalk',
      nav: {
        login: 'Login',
        links: {
          partners: 'Top‑ups & Payments',
          services: 'Services',
          about: 'About',
          contact: 'Contact'
        }
      },
      hero: {
        title: 'Peletalk – Connecting People',
        paragraph: 'Peletalk provides businesses with a fast and simple system for SIM top‑ups and essential payment services',
        cta: 'Join as a reseller'
      },
      partners: {
        group1: 'Top‑ups & Cellular Services',
        group2: 'Payments & Public Services'
      },
      services: {
        title: 'Services in the Peletalk system',
        cards: [
          {
            title: 'Local SIM top‑up',
            desc: 'Instant top‑ups for mobile operators in Israel via a simple and clear interface'
          },
          {
            title: 'International SIM',
            desc: 'Solutions for loading international SIM cards and communication services for customers travelling and calling from abroad'
          },
          {
            title: 'Toll road payments & public services',
            desc: 'Acceptance of payments for Highway 6, North 6 Highway, the Carmel Tunnels, police fines, electricity and more'
          },
          {
            title: 'Rav‑Kav top‑up',
            desc: 'Ability to recharge Rav‑Kav cards easily and quickly for customers who come to your business'
          },
          {
            title: 'Support & service',
            desc: 'Technical support and customer service in Hebrew, including professional guidance for resellers and troubleshooting'
          }
        ]
      },
      about: {
        title: 'About Peletalk',
        paragraphs: [
          'Peletalk Commerce and Marketing Ltd. provides advanced solutions for loading SIM cards and making payments for a variety of major entities in Israel. The company works with the major telecommunications companies and public bodies, offering resellers a stable, fast and convenient working system.',
          'The Peletalk system was developed especially for business owners serving a diverse customer base, with an emphasis on simplicity and clear use. Every action is performed in real time, accompanied by organised reports and complete transparency.',
          'The company provides full support, initial training and ongoing service to every reseller, out of a commitment to reliability and professionalism along the way.'
        ]
      },
      contact: {
        title: 'Interested in joining as resellers?',
        placeholders: {
          name: 'Full name',
          email: 'Email',
          address: 'Address',
          phone: 'Phone',
          message: 'Message details'
        },
        submit: 'Send',
        phoneText: 'Or contact us by phone:',
        phoneNumber: '08-9934451'
      }
    },
    ar: {
      siteTitle: 'بيلتوك',
      nav: {
        login: 'تسجيل الدخول',
        links: {
          partners: 'شحنات ومدفوعات',
          services: 'خدمات',
          about: 'من نحن',
          contact: 'اتصل بنا'
        }
      },
      hero: {
        title: 'بيلتوك – نربط الناس',
        paragraph: 'بيلتوك توفر للأعمال نظامًا سريعًا وبسيطًا لشحن بطاقات SIM وخدمات الدفع الضرورية.',
        cta: 'انضم كتاجر'
      },
      partners: {
        group1: 'شحن وخدمات خلوية',
        group2: 'مدفوعات وخدمات عامة'
      },
      services: {
        title: 'الخدمات في نظام بيلتوك',
        cards: [
          {
            title: 'شحن SIM محلي',
            desc: 'شحن فوري لشركات الهواتف المحمولة في إسرائيل عبر واجهة عمل بسيطة وواضحة.'
          },
          {
            title: 'SIM دولي',
            desc: 'حلول لشحن بطاقات SIM الدولية وخدمات الاتصالات للعملاء المسافرين والمتصلين من الخارج.'
          },
          {
            title: 'مدفوعات الطرق والرسوم والخدمات العامة',
            desc: 'قبول المدفوعات للطريق 6 والطريق 6 الشمالي وأنفاق الكرمل ومخالفات الشرطة والكهرباء وأكثر.'
          },
          {
            title: 'شحن بطاقة راف–كاف',
            desc: 'إمكانية شحن بطاقات راف–كاف بسهولة وسرعة للعملاء الذين يأتون إلى العمل.'
          },
          {
            title: 'الدعم والخدمة',
            desc: 'دعم فني وخدمة عملاء باللغة العبرية، بما في ذلك توجيه مهني للتجار وحل المشاكل.'
          }
        ]
      },
      about: {
        title: 'عن بيلتوك',
        paragraphs: [
          'بيلتوك للتجارة والتسويق المحدودة توفر حلولًا متقدمة لشحن بطاقات SIM وإجراء المدفوعات لمجموعة متنوعة من الجهات الرئيسية في إسرائيل. تعمل الشركة مع شركات الاتصالات الكبرى والهيئات العامة، وتقدم للتجار نظام عمل مستقر وسريع ومريح.',
          'تم تطوير نظام بيلتوك خصيصًا لأصحاب الأعمال الذين يخدمون مجموعة متنوعة من العملاء، مع التركيز على البساطة والوضوح. يتم تنفيذ كل عملية في الوقت الفعلي، مصحوبة بتقارير منظمة وشفافية كاملة.',
          'توفر الشركة دعمًا كاملًا وتدريبًا أوليًا وخدمة مستمرة لكل تاجر، من منطلق الالتزام بالموثوقية والاحترافية على طول الطريق.'
        ]
      },
      contact: {
        title: 'مهتمون بالانضمام كتجار؟',
        placeholders: {
          name: 'الاسم الكامل',
          email: 'البريد الإلكتروني',
          address: 'العنوان',
          phone: 'الهاتف',
          message: 'تفاصيل الرسالة'
        },
        submit: 'إرسال',
        phoneText: 'أو تواصلوا معنا هاتفيًا:',
        phoneNumber: '08-9934451'
      }
    }
  };

  // Hold the current language; default to Hebrew.
  let currentLang = 'he';

  /**
   * Apply translations for the given language code.  This function
   * updates the document title, the language and direction
   * attributes, the navigation labels, hero section, service
   * cards, about section and contact form.  It also updates
   * placeholders and phone numbers.
   *
   * @param {string} lang Language code (he, en, ar)
   */
  function applyTranslations(lang) {
    const content = translations[lang];
    if (!content) return;
    currentLang = lang;

    // Update document language and direction
    document.documentElement.lang = lang;
    // English is left‑to‑right; Hebrew and Arabic are right‑to‑left
    document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';

    // Ensure the navigation bar follows the reading direction.  When the
    // site is in English the nav should flow left‑to‑right; for Hebrew
    // and Arabic it should be right‑to‑left.  We explicitly set the
    // dir attribute on the nav element so that the flex ordering
    // remains intuitive across languages.
    const navEl = document.querySelector('nav');
    if (navEl) {
      navEl.setAttribute('dir', lang === 'en' ? 'ltr' : 'rtl');
    }

    // Document title
    if (content.siteTitle) {
      document.title = content.siteTitle;
    }

    // Navigation login buttons (desktop and mobile)
    const loginDesktop = document.getElementById('nav-login-desktop');
    const loginMobile = document.getElementById('nav-login-mobile');
    if (loginDesktop) loginDesktop.textContent = content.nav.login;
    if (loginMobile) loginMobile.textContent = content.nav.login;

    // Navigation links
    const navLinks = ['partners', 'services', 'about', 'contact'];
    navLinks.forEach((key) => {
      const el = document.getElementById(`nav-${key}`);
      if (el && content.nav.links[key]) {
        el.textContent = content.nav.links[key];
      }
    });

    // Hero section
    const heroTitle = document.getElementById('hero-title');
    const heroParagraph = document.getElementById('hero-paragraph');
    const heroCta = document.getElementById('hero-cta');
    if (heroTitle) heroTitle.textContent = content.hero.title;
    if (heroParagraph) heroParagraph.textContent = content.hero.paragraph;
    if (heroCta) heroCta.textContent = content.hero.cta;

    // Partners section
    const partners1 = document.getElementById('partners-title-1');
    const partners2 = document.getElementById('partners-title-2');
    if (partners1) partners1.textContent = content.partners.group1;
    if (partners2) partners2.textContent = content.partners.group2;

    // Services section
    const servicesTitle = document.getElementById('services-title');
    if (servicesTitle) servicesTitle.textContent = content.services.title;
    content.services.cards.forEach((card, index) => {
      const h = document.getElementById(`service${index + 1}-title`);
      const p = document.getElementById(`service${index + 1}-desc`);
      if (h) h.textContent = card.title;
      if (p) p.textContent = card.desc;
    });

    // About section
    const aboutTitle = document.getElementById('about-title');
    if (aboutTitle) aboutTitle.textContent = content.about.title;
    content.about.paragraphs.forEach((txt, index) => {
      const para = document.getElementById(`about-p${index + 1}`);
      if (para) para.textContent = txt;
    });

    // Contact section
    const contactTitle = document.getElementById('contact-title');
    if (contactTitle) contactTitle.textContent = content.contact.title;
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const addressInput = document.getElementById('contact-address');
    const phoneInput = document.getElementById('contact-phone');
    const messageTextarea = document.getElementById('contact-message');
    const submitBtn = document.getElementById('contact-submit');
    if (nameInput) nameInput.placeholder = content.contact.placeholders.name;
    if (emailInput) emailInput.placeholder = content.contact.placeholders.email;
    if (addressInput) addressInput.placeholder = content.contact.placeholders.address;
    if (phoneInput) phoneInput.placeholder = content.contact.placeholders.phone;
    if (messageTextarea) messageTextarea.placeholder = content.contact.placeholders.message;
    if (submitBtn) submitBtn.textContent = content.contact.submit;
    // Phone wrapper text and number
    const phoneWrapper = document.getElementById('contact-phone-wrapper');
    const phoneNumberLink = document.getElementById('contact-phone-number');
    if (phoneWrapper) {
      const firstChild = phoneWrapper.firstChild;
      if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
        firstChild.textContent = `${content.contact.phoneText} `;
      }
    }
    if (phoneNumberLink) {
      phoneNumberLink.textContent = content.contact.phoneNumber;
      phoneNumberLink.setAttribute('href', `tel:${content.contact.phoneNumber.replace(/[^0-9+]/g, '')}`);
    }
  }

  /**
   * Initialise a language switcher inside the given container.  It
   * generates buttons for each supported language and binds
   * click events to change the language.  When a language is
   * selected the nav menu will close on mobile and the active
   * button will be underlined.
   *
   * @param {string} containerId The DOM id of the container
   */
  function setupLangSwitcher(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    // Clear any existing children (in case this is called more than once)
    container.innerHTML = '';
    const codes = ['he', 'en', 'ar'];
    codes.forEach((code) => {
      const btn = document.createElement('button');
      // Provide human‑readable labels for each language
      if (code === 'he') {
        btn.textContent = 'עברית';
      } else if (code === 'en') {
        btn.textContent = 'English';
      } else if (code === 'ar') {
        btn.textContent = 'عربي';
      }
      btn.setAttribute('data-lang', code);
      btn.addEventListener('click', () => {
        applyTranslations(code);
        updateActiveButtons();
        // Close the mobile menu after changing language
        const navToggle = document.getElementById('nav-toggle');
        if (navToggle && navToggle.checked) {
          navToggle.checked = false;
        }
      });
      container.appendChild(btn);
    });
  }

  /**
   * Update the active state on all language buttons to reflect
   * the currently selected language.
   */
  function updateActiveButtons() {
    const allButtons = document.querySelectorAll('.lang-switcher button');
    allButtons.forEach((btn) => {
      if (btn.getAttribute('data-lang') === currentLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // Initialise once the DOM has loaded
  document.addEventListener('DOMContentLoaded', () => {
    // Apply the default language
    applyTranslations(currentLang);
    // Build both desktop and mobile language switchers
    setupLangSwitcher('lang-switcher-desktop');
    setupLangSwitcher('lang-switcher-mobile');
    // Mark the correct language as active
    updateActiveButtons();

    // Preserve existing nav toggle behaviour: collapse menu after clicking any link
    var navToggle = document.getElementById('nav-toggle');
    var navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (navToggle && navToggle.checked) {
          navToggle.checked = false;
        }
      });
    });
  });
})();