/* DAMAK shared scripts */
(function () {
  'use strict';

  /* ── Scroll reveal ── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    .forEach(el => io.observe(el));

  /* ── Mobile nav ── */
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ── Contact form validation stub ── */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;
      this.querySelectorAll('[required]').forEach(f => {
        const ok = f.value.trim() !== '';
        f.style.borderColor = ok ? '' : '#e53935';
        if (!ok) valid = false;
      });
      if (valid) {
        const btn = this.querySelector('.form-submit');
        const isAr = document.documentElement.dir === 'rtl';
        btn.textContent = isAr
          ? '✓ تم إرسال رسالتك — سنتواصل معك في غضون يوم عمل.'
          : '✓ Message sent — we\'ll be in touch within one business day.';
        btn.style.background = 'var(--green-mid)';
        btn.disabled = true;
      }
    });
  }

  /* ── Lang toggle: handled by translations.js — no alert here ──
     The .lang-toggle-menu buttons inside the mobile nav are wired
     by translations.js via the querySelectorAll('.lang-toggle') call,
     which matches both .lang-toggle and .lang-toggle-menu since they
     share the class. ── */

  /* ── Smooth counter animation (stats) ── */
  const counters = document.querySelectorAll('.count-up');
  if (counters.length) {
    const counterObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.dataset.target);
          const suffix = el.dataset.suffix || '';
          const prefix = el.dataset.prefix || '';
          const duration = 1600;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = prefix + (Number.isInteger(target) ? Math.round(current) : current.toFixed(1)) + suffix;
            if (current >= target) clearInterval(timer);
          }, 16);
          counterObs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => counterObs.observe(el));
  }
})();
