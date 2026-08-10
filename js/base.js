/* ==========================================================
   AISEL — BASE / SHARED JS
   Runs on every page: boot loader, scroll progress, mobile
   nav, scroll-spy, reveal-on-scroll, generic tabs (shared by
   the research and contact sections), drifting background code.

   initBase() is called once by the loader in index.html after
   every section's HTML has been injected into the page.
========================================================== */

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initBase(){

  /* ---- boot sequence ---- */
  const boot = document.getElementById('boot');
  const bootText = document.getElementById('bootText');
  if (reduceMotion) {
    boot.classList.add('hidden');
  } else {
    const bootLines = ['$ booting aisel-lab...', '[ok] loading models', '[ok] connecting agents', '[ok] ready'];
    let bi = 0, bc = 0, out = '';
    function bootStep(){
      if (bi >= bootLines.length){ setTimeout(()=>boot.classList.add('hidden'), 300); return; }
      const l = bootLines[bi];
      if (bc < l.length){ out += l[bc]; bc++; bootText.innerHTML = out + '<span class="cursor2"></span>'; setTimeout(bootStep, 14); }
      else { out += '\n'; bi++; bc=0; setTimeout(bootStep, 120); }
    }
    bootStep();
    setTimeout(()=>boot.classList.add('hidden'), 2200);
  }

  /* ---- scroll progress, nav shadow, back-to-top ---- */
  const progress = document.getElementById('progress');
  const navHeader = document.querySelector('header.nav');
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    progress.style.width = pct + '%';
    navHeader.classList.toggle('scrolled', h.scrollTop > 8);
    backToTop.classList.toggle('show', h.scrollTop > 600);
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks){

  navToggle.addEventListener('click', () => {

    const open = navLinks.classList.toggle('open');

    navToggle.setAttribute(
      'aria-expanded',
      String(open)
    );

  });


  navLinks.querySelectorAll('a').forEach(a => {

    a.addEventListener('click', () => {

      navLinks.classList.remove('open');

      navToggle.setAttribute(
        'aria-expanded',
        'false'
      );

    });

  });

}

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---- scroll-spy nav ---- */
  const navA = document.querySelectorAll('nav.links a');
  const secs = document.querySelectorAll('section[id]');
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting){navA.forEach(a => {
  a.classList.toggle(
    'active',
    a.getAttribute('href') === `#${en.target.id}`
  );
});
      }
    });
  }, { threshold: 0.35 });
  secs.forEach(s => spy.observe(s));

  /* ---- reveal on scroll ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if (reduceMotion){
    revealEls.forEach(el => el.classList.add('in'));
    const tlElReduced = document.getElementById('timelineEl');
    if (tlElReduced) tlElReduced.classList.add('in');
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => io.observe(el));
  }

  /* ---- generic tabs (shared by research + contact/join) ---- */
  document.querySelectorAll('.tabs').forEach(tabGroup => {
    const btns = tabGroup.querySelectorAll('.tab-btn');
    const panelWrap = tabGroup.parentElement;
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
        btn.classList.add('active'); btn.setAttribute('aria-selected','true');
        panelWrap.querySelectorAll(':scope > .tab-panel').forEach(p => p.classList.remove('active'));
        const target = panelWrap.querySelector(`:scope > .tab-panel[data-panel="${btn.dataset.tab}"]`);
        if (target) target.classList.add('active');
      });
    });
  });


  /* ---- drifting code snippets in background ---- */
  if (!reduceMotion){
    const snippets = ['agent.repair(bug)', 'assert output == expected', 'model.generate(spec)', 'git commit -m "fix"', 'while not tests_pass():', 'diff = repair(patch)', 'mine(repo).analyze()'];
    const layer = document.getElementById('driftLayer');
    for (let i = 0; i < 6; i++){
      const el = document.createElement('div');
      el.className = 'drift';
      el.textContent = snippets[i % snippets.length];
      const startX = Math.random() * 100;
      const duration = 18 + Math.random() * 14;
      const delay = Math.random() * -20;
      el.style.left = startX + 'vw';
      el.style.top = '105vh';
      el.style.animation = `floatUp ${duration}s linear ${delay}s infinite`;
      layer.appendChild(el);
    }
    const kf = document.createElement('style');
    kf.textContent = `@keyframes floatUp{ from{ transform:translateY(0); } to{ transform:translateY(-115vh); } }`;
    document.head.appendChild(kf);
  }
}




/* ==========================================================
   AISEL — FOOTER
   Footer initialization, animation, newsletter and back-to-top
========================================================== */

function initFooter() {

  const footer = document.getElementById('site-footer');

  if (!footer) {
    console.warn('AISEL footer not found.');
    return;
  }


  /* --------------------------------------------------------
     Prevent duplicate initialization
  -------------------------------------------------------- */

  if (footer.dataset.initialized === 'true') {
    return;
  }

  footer.dataset.initialized = 'true';


  /* --------------------------------------------------------
     Current year
  -------------------------------------------------------- */

  const year = document.getElementById('year');

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* --------------------------------------------------------
     Footer particles
  -------------------------------------------------------- */

  createFooterParticles();


  /* --------------------------------------------------------
     Footer reveal animation
  -------------------------------------------------------- */

  initFooterReveal();


  /* --------------------------------------------------------
     Newsletter
  -------------------------------------------------------- */

  initFooterNewsletter();


  /* --------------------------------------------------------
     Footer back to top
  -------------------------------------------------------- */

  initFooterBackToTop();

}


/* ==========================================================
   FOOTER PARTICLES
========================================================== */

function createFooterParticles() {

  const container =
    document.getElementById('footerParticles');

  if (!container) {
    return;
  }


  const reduceMotion =
    window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;


  if (reduceMotion) {
    return;
  }


  container.innerHTML = '';


  const particleCount =
    window.innerWidth <= 700
      ? 16
      : 32;


  for (
    let i = 0;
    i < particleCount;
    i++
  ) {

    const particle =
      document.createElement('span');


    particle.className =
      'footer-particle';


    particle.style.left =
      `${Math.random() * 100}%`;


    particle.style.top =
      `${Math.random() * 100}%`;


    particle.style.setProperty(
      '--footer-particle-duration',
      `${5 + Math.random() * 7}s`
    );


    particle.style.setProperty(
      '--footer-particle-delay',
      `${Math.random() * 5}s`
    );


    particle.style.setProperty(
      '--footer-particle-x',
      `${-30 + Math.random() * 60}px`
    );


    container.appendChild(
      particle
    );

  }

}


/* ==========================================================
   FOOTER REVEAL
========================================================== */

function initFooterReveal() {

  const footer =
    document.getElementById('site-footer');


  if (!footer) {
    return;
  }


  const elements =
    footer.querySelectorAll(
      '.footer-reveal'
    );


  if (!elements.length) {
    return;
  }


  const reduceMotion =
    window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;


  /*
     If reduced motion is enabled,
     show everything immediately.
  */

  if (reduceMotion) {

    elements.forEach(function(element){

      element.classList.add(
        'footer-visible'
      );

    });

    return;

  }


  /*
     IntersectionObserver is supported
     by all modern browsers.
  */

  if (
    'IntersectionObserver'
    in window
  ) {

    const observer =
      new IntersectionObserver(
        function(entries){

          entries.forEach(
            function(entry){

              if (
                !entry.isIntersecting
              ) {

                return;

              }


              entry.target.classList.add(
                'footer-visible'
              );


              observer.unobserve(
                entry.target
              );

            }
          );

        },
        {
          threshold: 0.05,
          rootMargin:
            '0px 0px 80px 0px'
        }
      );


    elements.forEach(
      function(element){

        observer.observe(
          element
        );

      }
    );

  } else {

    /*
       Fallback:
       show footer if IntersectionObserver
       is unavailable.
    */

    elements.forEach(
      function(element){

        element.classList.add(
          'footer-visible'
        );

      }
    );

  }

}


/* ==========================================================
   NEWSLETTER
========================================================== */

function initFooterNewsletter() {

  const form =
    document.getElementById(
      'newsletterForm'
    );


  if (!form) {
    return;
  }


  if (
    form.dataset.initialized ===
    'true'
  ) {

    return;

  }


  form.dataset.initialized =
    'true';


  const email =
    document.getElementById(
      'newsletterEmail'
    );


  const button =
    form.querySelector(
      '.footer-subscribe-btn'
    );


  const label =
    form.querySelector(
      '.newsletter-btn-label'
    );


  const success =
    document.querySelector(
      '.newsletter-success'
    );


  if (
    !email ||
    !button ||
    !label ||
    !success
  ) {

    return;

  }


  form.addEventListener(
    'submit',
    function(event){

      event.preventDefault();


      /*
         Browser email validation.
      */

      if (
        !form.checkValidity()
      ) {

        form.reportValidity();

        return;

      }


      /*
         Loading state.
      */

      button.classList.add(
        'loading'
      );


      button.disabled =
        true;


      label.textContent =
        'Processing...';


      /*
         Front-end demo only.

         Replace this later with:
         Mailchimp / ConvertKit /
         Buttondown / API endpoint.
      */

      window.setTimeout(
        function(){

          button.classList.remove(
            'loading'
          );


          button.disabled =
            false;


          label.textContent =
            'Subscribe';


          form.reset();


          success.classList.add(
            'show'
          );


          window.setTimeout(
            function(){

              success.classList.remove(
                'show'
              );

            },
            5000
          );


        },
        800
      );

    }
  );

}


/* ==========================================================
   FOOTER BACK TO TOP
========================================================== */

function initFooterBackToTop() {

  const button =
    document.querySelector(
      '.footer-top-btn'
    );


  if (!button) {
    return;
  }


  button.addEventListener(
    'click',
    function(event){

      event.preventDefault();


      window.scrollTo({

        top: 0,

        behavior:
          reduceMotion
            ? 'auto'
            : 'smooth'

      });

    }
  );

}