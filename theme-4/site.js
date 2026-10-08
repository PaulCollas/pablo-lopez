const toggle=document.querySelector('.menu');
const nav=document.querySelector('.nav');
toggle?.addEventListener('click',()=>{const expanded=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!expanded));nav?.classList.toggle('open',!expanded)});
