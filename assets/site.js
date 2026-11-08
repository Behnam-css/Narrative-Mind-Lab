(() => {
  const root = document.documentElement;
  const switcher = document.querySelector('.language-switch');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  const stored = (() => { try { return localStorage.getItem('narrative-mind-language'); } catch (_) { return null; } })();
  function setLanguage(language) {
    const fa = language === 'fa';
    root.lang = fa ? 'fa' : 'en';
    root.dir = fa ? 'rtl' : 'ltr';
    document.querySelectorAll('.lang-en').forEach(el => { el.hidden = fa; });
    document.querySelectorAll('.lang-fa').forEach(el => { el.hidden = !fa; });
    if (switcher) switcher.setAttribute('aria-label', fa ? 'Switch to English' : 'تغییر زبان به فارسی');
    try { localStorage.setItem('narrative-mind-language', language); } catch (_) {}
  }
  setLanguage(stored === 'fa' ? 'fa' : 'en');
  if (switcher) switcher.addEventListener('click', () => setLanguage(root.lang === 'fa' ? 'en' : 'fa'));
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false');
    }));
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
