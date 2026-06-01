// shared.js — nav, footer, cursor, scroll, WA button for all inner pages
document.addEventListener('DOMContentLoaded', () => {

  // CURSOR
  const cursor = document.createElement('div'); cursor.className = 'cursor';
  const ring = document.createElement('div'); ring.className = 'cursor-ring';
  document.body.append(cursor, ring);
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; cursor.style.transform=`translate(${mx-4}px,${my-4}px)`; });
  (function animRing(){ rx+=(mx-rx)*0.12; ry+=(my-ry)*0.12; ring.style.transform=`translate(${rx-18}px,${ry-18}px)`; requestAnimationFrame(animRing); })();
  document.querySelectorAll('a,button,.card').forEach(el => {
    el.addEventListener('mouseenter',()=>{ ring.style.borderColor='rgba(201,168,76,0.8)'; });
    el.addEventListener('mouseleave',()=>{ ring.style.borderColor='rgba(201,168,76,0.4)'; });
  });

  // MOBILE MENU
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobileMenu');
  if(ham) ham.addEventListener('click', () => mob.classList.toggle('open'));

  // FADE
  const obs = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); }), {threshold:0.1});
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
});
