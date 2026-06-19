/* ═══════════════════════════════════════════════════════════════
   DAMAK Bilingual Engine — EN / AR
   Handles: language toggle, RTL/LTR, font switch, localStorage
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var LANG_KEY = 'damak-lang';
  window.DAMAK_LANG = 'en';

  function applyLanguage(lang) {
    var isAr = lang === 'ar';
    window.DAMAK_LANG = lang;

    /* html dir + lang */
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? 'rtl' : 'ltr';

    /* body class hook for CSS */
    document.body.classList.toggle('lang-ar', isAr);

    /* swap every translatable element */
    document.querySelectorAll('[data-en]').forEach(function (el) {
      var val = el.getAttribute(isAr ? 'data-ar' : 'data-en');
      if (val !== null && val !== '') {
        el.innerHTML = val;
      }
    });

    /* swap placeholder text on inputs/selects/textareas */
    document.querySelectorAll('[data-en-placeholder]').forEach(function (el) {
      var val = el.getAttribute(isAr ? 'data-ar-placeholder' : 'data-en-placeholder');
      if (val !== null) el.placeholder = val;
    });

    /* swap select option labels */
    document.querySelectorAll('option[data-en]').forEach(function (el) {
      var val = el.getAttribute(isAr ? 'data-ar' : 'data-en');
      if (val !== null && val !== '') el.textContent = val;
    });

    /* update toggle button label */
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.textContent = isAr ? 'EN' : 'عربي';
      btn.setAttribute('aria-label', isAr ? 'Switch to English' : 'التبديل إلى العربية');
    });

    /* save preference */
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}

    /* notify other scripts (products renderer etc.) */
    document.dispatchEvent(new CustomEvent('damak:langchange', { detail: { lang: lang } }));
  }

  function toggleLang() {
    var current;
    try { current = localStorage.getItem(LANG_KEY) || 'en'; } catch (e) { current = 'en'; }
    applyLanguage(current === 'en' ? 'ar' : 'en');
  }

  document.addEventListener('DOMContentLoaded', function () {
    var saved;
    try { saved = localStorage.getItem(LANG_KEY) || 'en'; } catch (e) { saved = 'en'; }

    applyLanguage(saved);

    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.addEventListener('click', toggleLang);
    });
  });
})();
