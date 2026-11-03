/* Shared by every page. No content is generated here. */
(function stickyNav(){ /* white nav after scrolling (inner pages start solid) */
  const h=document.getElementById('header'); if(h.dataset.solid) return;
  const u=()=>h.classList.toggle('is-sticky',scrollY>40);
  addEventListener('scroll',u,{passive:true}); u();
})();
(function mobileMenu(){ /* hamburger */
  const t=document.getElementById('navToggle'),l=document.getElementById('navLinks'),h=document.getElementById('header');
  t.addEventListener('click',()=>{const o=!l.classList.contains('is-open');l.classList.toggle('is-open',o);t.setAttribute('aria-expanded',o);if(o)h.classList.add('is-sticky')});
})();
(function scrollReveal(){ /* fade-in on scroll */
  const els=document.querySelectorAll('.fade-in');
  if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('is-visible'));return}
  const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');o.unobserve(e.target)}}),{threshold:.15});
  els.forEach(e=>o.observe(e));
})();
