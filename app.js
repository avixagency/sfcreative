/* =========================================================
   SF Creative · Landing page
   ---------------------------------------------------------
   CONFIGURE AQUI: WhatsApp (só números, com 55 + DDD) e e-mail.
   Com e-mail vazio, os botões e links de e-mail somem da página.
   ========================================================= */
var CONFIG = {
  whatsapp: '5515988028794',
  email: '',
  instagram: '',   // ex.: 'https://instagram.com/sfcreative'
  vimeo: '',       // ex.: 'https://vimeo.com/sfcreative'
  mensagemWhatsApp: 'Olá! Vim pelo site da SF Creative e quero conversar sobre um projeto.',
  cursorPersonalizado: true,
  granulacao: true,
  heroPretoEBranco: false
};

/* Projetos do portfólio. Para adicionar um novo, copie um bloco,
   coloque os arquivos em assets/portfolio/ e ajuste os caminhos.
   g = filtro: 'arq' (Arquitetura & Imobiliário), 'evt' (Eventos), 'inst' (Institucional & Produto) */
var PROJECTS = [{"t": "Avantgarde", "cl": "Climatec", "g": "arq", "c": "Arquitetura · Interiores", "poster": "assets/portfolio/avantgarde-poster.jpg", "prev": "assets/portfolio/avantgarde-prev.mp4", "full": "assets/portfolio/avantgarde-full.mp4", "d": "Filme vertical para a Climatec apresentando os interiores do Avantgarde: marcenaria, iluminação e os ambientes prontos para morar."}, {"t": "Bernese", "cl": "Grupo Disparquet", "g": "arq", "c": "Arquitetura · Madeira", "poster": "assets/portfolio/bernese-poster.jpg", "prev": "assets/portfolio/bernese-prev.mp4", "full": "assets/portfolio/bernese-full.mp4", "d": "Filme de arquitetura para o Grupo Disparquet: madeira, luz natural e a relação entre a casa e a paisagem."}, {"t": "Colinas do Sol", "cl": "LQV Imobiliária", "g": "arq", "c": "Imobiliário · Tour", "poster": "assets/portfolio/colinas-poster.jpg", "prev": "assets/portfolio/colinas-prev.mp4", "full": "assets/portfolio/colinas-full.mp4", "d": "Tour em vídeo de um imóvel no condomínio Colinas do Sol, com tomadas aéreas e os detalhes de cada ambiente."}, {"t": "Tour Imóvel", "cl": "LQV Imobiliária", "g": "arq", "c": "Imobiliário · Reels", "poster": "assets/portfolio/casa-henrique-poster.jpg", "prev": "assets/portfolio/casa-henrique-prev.mp4", "full": "assets/portfolio/casa-henrique-full.mp4", "d": "Reels de apresentação de imóvel no Colinas do Sol, com o corretor em cena e chamada direta para o atendimento."}, {"t": "Cobertura de Evento", "cl": "Cutlite Penta", "g": "evt", "c": "Evento · Cobertura", "poster": "assets/portfolio/cutlite-poster.jpg", "prev": "assets/portfolio/cutlite-prev.mp4", "full": "assets/portfolio/cutlite-full.mp4", "d": "Cobertura do estande da Cutlite Penta em feira: máquinas em operação, equipe e o movimento do primeiro dia."}, {"t": "Japi Studio", "cl": "Grupo Disparquet", "g": "arq", "c": "Arquitetura · Produto", "poster": "assets/portfolio/japi-poster.jpg", "prev": "assets/portfolio/japi-prev.mp4", "full": "assets/portfolio/japi-full.mp4", "d": "Conteúdo para o Grupo Disparquet gravado no Japi Studio, apresentando peças em ambiente externo."}, {"t": "Memorial Park", "cl": "Memorial Park", "g": "inst", "c": "Institucional · Drone", "poster": "assets/portfolio/memorial-poster.jpg", "prev": "assets/portfolio/memorial-prev.mp4", "full": "assets/portfolio/memorial-full.mp4", "d": "Filme institucional com imagens aéreas do parque e depoimentos de famílias."}, {"t": "Boat Show 2026", "cl": "Rise", "g": "evt", "c": "Evento · Cobertura", "poster": "assets/portfolio/rise-boatshow-poster.jpg", "prev": "assets/portfolio/rise-boatshow-prev.mp4", "full": "assets/portfolio/rise-boatshow-full.mp4", "d": "Cobertura do estande da Rise no Boat Show 2026, com o foil elétrico desenvolvido e produzido no Brasil."}, {"t": "Fabricação RISE", "cl": "Rise", "g": "inst", "c": "Produto · Reels", "poster": "assets/portfolio/rise-reels-poster.jpg", "prev": "assets/portfolio/rise-reels-prev.mp4", "full": "assets/portfolio/rise-reels-full.mp4", "d": "Reels de produto que mostra a fabricação do foil elétrico da Rise, do carbono ao acabamento."}, {"t": "BM Private Club", "cl": "BM Car Detail", "g": "evt", "c": "Evento · Cobertura", "poster": "assets/portfolio/bm-poster.jpg", "prev": "assets/portfolio/bm-prev.mp4", "full": "assets/portfolio/bm-full.mp4", "d": "Cobertura de um encontro fechado: carros, vinho, gastronomia e os convidados, do primeiro brinde à saída noturna."}, {"t": "Studio Bruno Rubiano", "cl": "Climatec", "g": "arq", "c": "Arquitetura · Reels", "poster": "assets/portfolio/bruno-poster.jpg", "prev": "assets/portfolio/bruno-prev.mp4", "full": "assets/portfolio/bruno-full.mp4", "d": "Tour pelo Studio Bruno Rubiano, com a climatização da Climatec integrada ao projeto de arquitetura."}, {"t": "Dia do Padeiro", "cl": "", "g": "inst", "c": "Institucional · Data comemorativa", "poster": "assets/portfolio/padeiro-poster.jpg", "prev": "assets/portfolio/padeiro-prev.mp4", "full": "assets/portfolio/padeiro-full.mp4", "d": "Filme para o Dia do Padeiro: a massa, o forno e as pessoas que fazem o pão todos os dias."}, {"t": "Nord × Disparquet", "cl": "Grupo Disparquet", "g": "arq", "c": "Arquitetura · Reels", "poster": "assets/portfolio/nord-poster.jpg", "prev": "assets/portfolio/nord-prev.mp4", "full": "assets/portfolio/nord-full.mp4", "d": "Reels apresentado em cena, percorrendo o showroom e os materiais para quem está reformando."}];
/* Índices (na lista acima) dos 6 projetos em destaque. Os demais vão para o slider "Mais projetos". */
var FEATURED = [9, 10, 11, 12, 8, 3];

(function () {
  'use strict';
  var doc = document;
  var root = doc.getElementById('sf');
  var mq = function (q) { return !!(window.matchMedia && window.matchMedia(q).matches); };
  var reduce = mq('(prefers-reduced-motion: reduce)');
  var $ = function (s, el) { return (el || doc).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || doc).querySelectorAll(s)); };
  var pad = function (n) { return String(n).padStart(2, '0'); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };

  /* ---------- contato ---------- */
  var wa = String(CONFIG.whatsapp || '').replace(/\D/g, '');
  var waHref = wa ? 'https://wa.me/' + wa + '?text=' + encodeURIComponent(CONFIG.mensagemWhatsApp) : '#contato';
  function wireContacts(scope) {
    $$('[data-wa]', scope).forEach(function (a) {
      a.setAttribute('href', waHref);
      if (wa) { a.setAttribute('target', '_blank'); a.setAttribute('rel', 'noopener'); }
    });
  }
  wireContacts(doc);
  var email = String(CONFIG.email || '').trim();
  $$('[data-mail]').forEach(function (a) {
    if (email) a.setAttribute('href', 'mailto:' + email);
    else { var li = a.closest('li'); (li || a).setAttribute('hidden', ''); }
  });
  $$('[data-email-label]').forEach(function (s) {
    if (email) s.textContent = email;
    else { var p = s.closest('.lbl') || s; if (!p.closest('a')) p.setAttribute('hidden', ''); }
  });

  $$('[data-social]').forEach(function (a) {
    var url = String(CONFIG[a.getAttribute('data-social')] || '').trim();
    var li = a.closest('li') || a;
    if (url) { a.setAttribute('href', url); a.setAttribute('target', '_blank'); a.setAttribute('rel', 'noopener'); }
    else li.setAttribute('hidden', '');
  });
  $$('.ft-top > div').forEach(function (col) {
    var items = $$('li', col);
    if (items.length && items.every(function (li) { return li.hasAttribute('hidden'); })) col.setAttribute('hidden', '');
  });

  if (!CONFIG.granulacao) root.classList.add('no-grain');
  var heroV = $('[data-hero]');
  if (heroV && CONFIG.heroPretoEBranco) heroV.classList.add('pb');

  /* ---------- menu mobile ---------- */
  var menu = $('#menu-mobile');
  var mbtn = $('[data-menu-toggle]');
  function setMenu(open) {
    if (!menu || !mbtn) return;
    if (open) menu.removeAttribute('hidden'); else menu.setAttribute('hidden', '');
    mbtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    mbtn.textContent = open ? 'Fechar' : 'Menu';
  }
  if (mbtn) mbtn.addEventListener('click', function () { setMenu(menu.hasAttribute('hidden')); });
  $$('[data-menu-close]').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });

  /* ---------- nav ao rolar ---------- */
  var nav = $('[data-nav]');
  var onScroll = function () { if (nav) nav.classList.toggle('is-scrolled', (window.scrollY || 0) > 40); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- vídeo do hero ---------- */
  if (heroV) {
    heroV.muted = true;
    if (reduce) { heroV.pause(); heroV.removeAttribute('autoplay'); }
    else { var p = heroV.play && heroV.play(); if (p && p.catch) p.catch(function () {}); }
  }

  /* ---------- timecode ---------- */
  var tc = $('[data-tc]');
  if (tc && !reduce) {
    var f = 0;
    setInterval(function () {
      f++;
      tc.textContent = pad(Math.floor(f / 86400) % 24) + ':' + pad(Math.floor(f / 1440) % 60) + ':' + pad(Math.floor(f / 24) % 60) + ':' + pad(f % 24);
    }, 1000 / 24);
  }

  /* ---------- revelações ao rolar ---------- */
  var io = null;
  if (!reduce && 'IntersectionObserver' in window) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  }
  function observe(scope) {
    $$('[data-io]', scope).forEach(function (el) { if (io) io.observe(el); else el.classList.add('in'); });
  }

  /* ---------- portfólio ---------- */
  var FILTERS = [
    { id: 'all', label: 'Todos' },
    { id: 'arq', label: 'Arquitetura & Imobiliário' },
    { id: 'evt', label: 'Eventos' },
    { id: 'inst', label: 'Institucional & Produto' }
  ];
  var state = { filter: 'all', swap: false, list: [], open: -1 };
  var gridEl = $('[data-grid]');
  var moreEl = $('[data-more]');
  var slEl = $('[data-slider]');
  var filtersEl = $('[data-filters]');
  var totalEl = $('[data-total]');
  if (totalEl) totalEl.textContent = pad(PROJECTS.length);

  var PLAY = '<span class="pf-play" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"></path></svg></span>';
  var AR = '<span class="pf-ar" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M7 17L17 7M8 7h9v9"></path></svg></span>';
  function card(i, k, inSlider) {
    var p = PROJECTS[i];
    var cls = inSlider ? 'pf-i sl-i' : 'pf-i' + (k % 3 === 1 ? ' off' : '');
    var style = inSlider ? '' : ' style="animation-delay: ' + (k * 0.07).toFixed(2) + 's"';
    return '<article class="' + cls + '"' + style + ' data-cursor="Assistir" data-idx="' + i + '">' +
      '<div class="pf-m r916"><div class="pf-sc">' +
      '<img class="pf-img" src="' + esc(p.poster) + '" alt="' + esc(p.t + (p.cl ? ' — ' + p.cl : '')) + '" loading="lazy" draggable="false">' +
      '<video class="pf-vid" src="' + esc(p.prev) + '" muted loop playsinline preload="none" aria-hidden="true"></video></div>' +
      '<div class="pf-dim"></div><span class="lbl pf-num">' + pad(state.list.indexOf(i) + 1) + '</span>' + PLAY + '</div>' +
      '<div class="pf-meta"><div><span class="lbl">' + esc(p.c) + '</span><h3 class="pf-t">' + esc(p.t) + '</h3><p class="lbl pf-cl">' + esc(p.cl) + '</p></div>' + AR + '</div>' +
      '<button class="pf-hit" type="button" aria-label="' + esc('Assistir ao projeto ' + p.t + (p.cl ? ', ' + p.cl : '')) + '"></button>' +
      '</article>';
  }
  function bindCards(scope) {
    $$('.pf-i', scope).forEach(function (el) {
      var v = $('video', el);
      el.addEventListener('mouseenter', function () {
        if (!v) return; v.muted = true; el.classList.add('playing');
        var pr = v.play && v.play(); if (pr && pr.catch) pr.catch(function () {});
      });
      el.addEventListener('mouseleave', function () {
        if (!v) return; el.classList.remove('playing'); v.pause(); try { v.currentTime = 0; } catch (e) {}
      });
      $('.pf-hit', el).addEventListener('click', function () { openProject(parseInt(el.getAttribute('data-idx'), 10)); });
    });
  }
  function render() {
    var fil = state.filter;
    var gridIdx = fil === 'all' ? FEATURED.slice() : PROJECTS.map(function (p, i) { return i; }).filter(function (i) { return PROJECTS[i].g === fil; });
    var moreIdx = fil === 'all' ? PROJECTS.map(function (p, i) { return i; }).filter(function (i) { return FEATURED.indexOf(i) === -1; }) : [];
    state.list = gridIdx.concat(moreIdx);

    if (filtersEl) {
      filtersEl.innerHTML = FILTERS.map(function (f) {
        var n = f.id === 'all' ? PROJECTS.length : PROJECTS.filter(function (p) { return p.g === f.id; }).length;
        var on = fil === f.id;
        return '<button class="pf-f' + (on ? ' on' : '') + '" type="button" aria-pressed="' + on + '" data-f="' + f.id + '">' + esc(f.label) + '<sup>' + pad(n) + '</sup></button>';
      }).join('');
      $$('[data-f]', filtersEl).forEach(function (b) {
        b.addEventListener('click', function () { state.filter = b.getAttribute('data-f'); state.swap = !state.swap; render(); });
      });
    }
    if (gridEl) {
      gridEl.className = 'pf2' + (state.swap ? ' b' : '');
      gridEl.innerHTML = gridIdx.map(function (i, k) { return card(i, k, false); }).join('');
      bindCards(gridEl);
    }
    if (moreEl) {
      if (moreIdx.length) {
        moreEl.removeAttribute('hidden');
        var mn = $('[data-more-n]'); if (mn) mn.textContent = pad(moreIdx.length);
        slEl.innerHTML = moreIdx.map(function (i, k) { return card(i, k, true); }).join('');
        slEl.scrollLeft = 0;
        bindCards(slEl);
      } else moreEl.setAttribute('hidden', '');
    }
    setTimeout(slSync, 60);
  }

  /* ---------- slider "Mais projetos" ---------- */
  var bar = $('[data-slbar]');
  function slSync() {
    if (!slEl || !moreEl) return;
    var fits = slEl.scrollWidth <= slEl.clientWidth + 2;
    moreEl.classList.toggle('fits', fits);
    if (bar) bar.style.transform = 'scaleX(' + Math.min(1, (slEl.scrollLeft + slEl.clientWidth) / Math.max(1, slEl.scrollWidth)) + ')';
  }
  function slide(dir) {
    var c = $('.sl-i', slEl); var step = c ? c.offsetWidth + 24 : 300;
    slEl.scrollBy({ left: dir * step, behavior: 'smooth' });
  }
  if (slEl) {
    slEl.addEventListener('scroll', slSync, { passive: true });
    window.addEventListener('resize', slSync);
    var prevB = $('[data-sl-prev]'), nextB = $('[data-sl-next]');
    if (prevB) prevB.addEventListener('click', function () { slide(-1); });
    if (nextB) nextB.addEventListener('click', function () { slide(1); });
    var drag = null;
    slEl.addEventListener('mousedown', function (e) { if (e.button === 0) drag = { x: e.clientX, s: slEl.scrollLeft, moved: false }; });
    doc.addEventListener('mousemove', function (e) {
      if (!drag) return;
      var dx = e.clientX - drag.x;
      if (!drag.moved && Math.abs(dx) > 6) { drag.moved = true; slEl.classList.add('drag'); }
      if (drag.moved) { slEl.scrollLeft = drag.s - dx; e.preventDefault(); }
    });
    doc.addEventListener('mouseup', function () {
      if (!drag) return;
      var moved = drag.moved; drag = null;
      if (moved) setTimeout(function () { slEl.classList.remove('drag'); }, 0);
    });
  }

  /* ---------- player (projeto e reel) ---------- */
  var md = $('#md');
  var mdReel = $('[data-md-reel]'), mdProj = $('[data-md-proj]');
  var reelV = $('[data-md-reel-video]'), projV = $('[data-md-video]');
  var lastFocus = null;
  function showModal() {
    lastFocus = doc.activeElement;
    md.removeAttribute('hidden');
    doc.body.classList.add('md-open');
    var c = $('[data-md-close]'); if (c) c.focus();
  }
  function closeModal() {
    if (!md || md.hasAttribute('hidden')) return;
    [reelV, projV].forEach(function (v) { if (v) { v.pause(); v.removeAttribute('src'); v.load(); } });
    md.setAttribute('hidden', '');
    doc.body.classList.remove('md-open');
    state.open = -1;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function openProject(i) {
    var p = PROJECTS[i]; if (!p) return;
    state.open = i;
    mdReel.setAttribute('hidden', ''); mdProj.removeAttribute('hidden');
    md.setAttribute('aria-labelledby', 'md-title');
    var pos = Math.max(0, state.list.indexOf(i));
    $('[data-md-idx]').textContent = pad(pos + 1) + ' / ' + pad(state.list.length);
    $('[data-md-cat]').textContent = p.c;
    $('#md-title').textContent = p.t;
    $('[data-md-client]').textContent = p.cl;
    $('[data-md-desc]').textContent = p.d;
    projV.setAttribute('poster', p.poster);
    projV.src = p.full;
    var pr = projV.play && projV.play(); if (pr && pr.catch) pr.catch(function () {});
    if (md.hasAttribute('hidden')) showModal();
  }
  function step(dir) {
    var pos = state.list.indexOf(state.open);
    var n = state.list.length;
    openProject(state.list[(pos + dir + n) % n]);
  }
  function openReel() {
    state.open = 99;
    mdProj.setAttribute('hidden', ''); mdReel.removeAttribute('hidden');
    md.removeAttribute('aria-labelledby'); md.setAttribute('aria-label', 'Showreel');
    $('[data-md-idx]').textContent = 'Reel';
    reelV.src = 'assets/video/reel.mp4';
    var pr = reelV.play && reelV.play(); if (pr && pr.catch) pr.catch(function () {});
    showModal();
  }
  if (md) {
    $('[data-md-close]').addEventListener('click', closeModal);
    $('[data-md-prev]').addEventListener('click', function () { step(-1); });
    $('[data-md-next]').addEventListener('click', function () { step(1); });
    $$('[data-wa]', md).forEach(function (a) { a.addEventListener('click', function () { setTimeout(closeModal, 0); }); });
    doc.addEventListener('keydown', function (e) {
      if (md.hasAttribute('hidden')) return;
      if (e.key === 'Escape') closeModal();
      else if (state.open !== 99 && e.key === 'ArrowRight') step(1);
      else if (state.open !== 99 && e.key === 'ArrowLeft') step(-1);
    });
  }
  $$('[data-open-reel]').forEach(function (b) { b.addEventListener('click', openReel); });

  /* ---------- cursor personalizado ---------- */
  var cursorOn = CONFIG.cursorPersonalizado && mq('(hover: hover) and (pointer: fine)');
  var dot = $('.cur-dot'), ring = $('.cur-ring'), lbl = $('.cur-lbl');
  if (cursorOn && dot && ring) {
    root.classList.add('cursor-on');
    var mx = -200, my = -200, rx = -200, ry = -200;
    doc.addEventListener('mousemove', function (e) {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = 'translate3d(' + mx + 'px,' + my + 'px,0)';
      dot.classList.add('on'); ring.classList.add('on');
    });
    doc.addEventListener('mouseover', function (e) {
      var t = e.target && e.target.closest ? e.target.closest('[data-cursor],a,button') : null;
      var l = t ? t.getAttribute('data-cursor') : null;
      ring.classList.toggle('hov', !!t && !l);
      ring.classList.toggle('lab', !!l);
      if (lbl) lbl.textContent = l || '';
    });
    doc.documentElement.addEventListener('mouseleave', function () { dot.classList.remove('on'); ring.classList.remove('on'); });
    doc.addEventListener('mousedown', function () { ring.classList.add('dn'); });
    doc.addEventListener('mouseup', function () { ring.classList.remove('dn'); });
    (function loop() {
      rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
      ring.style.transform = 'translate3d(' + rx + 'px,' + ry + 'px,0)';
      requestAnimationFrame(loop);
    })();
  }

  /* ---------- start ---------- */
  render();
  root.classList.add('is-ready');
  observe(doc);
  if (!io) $$('[data-io]').forEach(function (el) { el.classList.add('in'); });
})();
