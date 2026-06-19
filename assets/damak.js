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
        btn.textContent = '✓ Message sent — we\'ll be in touch within one business day.';
        btn.style.background = 'var(--green-mid)';
        btn.disabled = true;
      }
    });
  }

  /* ── Lang toggle placeholder ── */
  const langBtn = document.querySelector('.lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      alert('Arabic version coming soon / النسخة العربية قريباً');
    });
  }

  /* ── Product filter (products.html only) ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.cat;
        document.querySelectorAll('.product-card[data-cat]').forEach(card => {
          if (cat === 'all' || card.dataset.cat === cat) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
        document.querySelectorAll('.coming-soon-banner').forEach(el => {
          el.style.display = (cat !== 'all' && cat !== 'pgr') ? '' : 'none';
        });
      });
    });
  }

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
