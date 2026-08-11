(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const setTheme = theme => {
    root.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    if (metaTheme) metaTheme.content = theme === 'dark' ? '#090b10' : '#f5f7fb';
  };
  themeButton?.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

  const navButton = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  navButton?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navButton.setAttribute('aria-expanded', String(open));
  });

  const filters = [...document.querySelectorAll('.tag-filter')];
  const cards = [...document.querySelectorAll('.post-card')];
  const empty = document.querySelector('.empty-state');
  const filter = tag => {
    let visible = 0;
    cards.forEach(card => {
      const show = tag === 'all' || card.dataset.tags.split(' ').includes(tag.toLowerCase());
      card.hidden = !show; if(show) visible++;
    });
    filters.forEach(x => x.classList.toggle('active', x.dataset.tag.toLowerCase() === tag.toLowerCase()));
    if(empty) empty.hidden = visible > 0;
  };
  filters.forEach(btn => btn.addEventListener('click', () => filter(btn.dataset.tag)));
  const tag = new URLSearchParams(location.search).get('tag');
  if(tag) filter(tag);

  const observer = new IntersectionObserver(entries => entries.forEach(e => {if(e.isIntersecting)e.target.classList.add('visible')}), {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();
