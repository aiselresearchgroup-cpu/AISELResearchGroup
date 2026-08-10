/* ==========================================================
   AISEL — HOME SECTION JS
   Hero terminal typing effect, hero dependency graph (SVG),
   cursor parallax, background particle network, marquee
   keyword strip, and animated hero counters.

   Called by the loader in index.html as initHome() once the
   home section's HTML has been injected.
========================================================== */

function initHome(){

  /* ---- hero terminal typing ---- */
  const termBody = document.getElementById('termBody');
  const termScript = [
    { text: '$ whoami', cls: 'prompt' },
    { text: 'aisel-lab', cls: '' },
    { text: '$ cat mission.md', cls: 'prompt' },
    { text: 'Intelligent automation of software\nengineering, ASE, repository analytics,\nand natural language-based SE.', cls: 'comment' },
    { text: '$ ./run.sh --status', cls: 'prompt' },
    { text: '[ok] models loaded', cls: 'ok' },
    { text: '[ok] agents online', cls: 'ok' },
    { text: '[ok] tests passing', cls: 'ok' },
  ];
  function typeScript(){
    let out = '', li = 0, ci = 0;
    function step(){
      if (li >= termScript.length){ termBody.innerHTML = out + '<span class="cursor"></span>'; return; }
      const line = termScript[li];
      if (ci === 0) out += `<span class="${line.cls}">`;
      if (ci < line.text.length){
        out += line.text[ci] === '\n' ? '<br>' : line.text[ci];
        ci++;
        termBody.innerHTML = out + '<span class="cursor"></span>';
        setTimeout(step, line.cls === 'prompt' ? 32 : 10);
      } else {
        out += '</span><br>'; li++; ci = 0; setTimeout(step, 220);
      }
    }
    step();
  }
  if (reduceMotion){
    termBody.innerHTML = termScript.map(l => `<span class="${l.cls}">${l.text.replace(/\n/g,'<br>')}</span>`).join('<br>');
  } else {
    setTimeout(typeScript, 2300);
  }

  /* ---- hero dependency graph ---- */
  const nodesData = [
    { id:'data',  x:120, y:120, label:'Data' },
    { id:'model', x:420, y:80,  label:'Model' },
    { id:'code',  x:700, y:150, label:'Code' },
    { id:'tests', x:660, y:400, label:'Tests' },
    { id:'repair',x:340, y:440, label:'Repair' },
    { id:'agent', x:150, y:320, label:'Agent' },
  ];
  const edgesData = [['data','model'],['model','code'],['code','tests'],['tests','repair'],['repair','agent'],['agent','model'],['agent','code']];
  const svgNS = 'http://www.w3.org/2000/svg';
  const edgesG = document.getElementById('edges');
  const nodesG = document.getElementById('nodes');
  const byId = Object.fromEntries(nodesData.map(n => [n.id, n]));

  edgesData.forEach(([a,b], i) => {
    const n1 = byId[a], n2 = byId[b];
    const line = document.createElementNS(svgNS, 'line');
    line.setAttribute('x1', n1.x); line.setAttribute('y1', n1.y);
    line.setAttribute('x2', n2.x); line.setAttribute('y2', n2.y);
    const len = Math.hypot(n2.x-n1.x, n2.y-n1.y);
    line.setAttribute('stroke-dasharray', len);
    line.setAttribute('stroke-dashoffset', reduceMotion ? 0 : len);
    line.style.transition = `stroke-dashoffset 1.1s ease ${2.4 + 0.15 * i}s`;
    edgesG.appendChild(line);
    requestAnimationFrame(() => requestAnimationFrame(() => { line.setAttribute('stroke-dashoffset', 0); }));
  });

  const accents = ['#6355C7', '#12897A', '#B3791A'];
  nodesData.forEach((n, i) => {
    const g = document.createElementNS(svgNS, 'g');
    const circle = document.createElementNS(svgNS, 'circle');
    circle.setAttribute('cx', n.x); circle.setAttribute('cy', n.y); circle.setAttribute('r', 5);
    circle.setAttribute('fill', accents[i % accents.length]); circle.setAttribute('fill-opacity', '0.55');
    if (!reduceMotion) circle.style.animation = `pulse 2.6s ease-in-out ${i * 0.3}s infinite`;
    const text = document.createElementNS(svgNS, 'text');
    text.setAttribute('x', n.x + 10); text.setAttribute('y', n.y + 4);
    text.setAttribute('font-family', 'IBM Plex Mono, monospace'); text.setAttribute('font-size', '11');
    text.setAttribute('fill', '#4A5268'); text.setAttribute('fill-opacity', '0.55');
    text.textContent = n.label;
    g.appendChild(circle); g.appendChild(text);
    nodesG.appendChild(g);
  });

  const styleTag = document.createElement('style');
  styleTag.textContent = `@keyframes pulse{0%,100%{r:5;fill-opacity:0.5}50%{r:7;fill-opacity:0.9}}`;
  document.head.appendChild(styleTag);

  /* ---- cursor parallax on hero graph ---- */
  const heroSection = document.querySelector('.hero');
  if (!reduceMotion){
    heroSection.addEventListener('mousemove', (e) => {
      const r = heroSection.getBoundingClientRect();
      const mx = (e.clientX - r.left) / r.width - 0.5;
      const my = (e.clientY - r.top) / r.height - 0.5;
      nodesG.style.transform = `translate(${mx * 10}px, ${my * 10}px)`;
      edgesG.style.transform = `translate(${mx * 6}px, ${my * 6}px)`;
    });
  }

  /* ---- marquee content ---- */
  const keywords = ['INTELLIGENT AUTOMATION','ASE','REPOSITORY ANALYTICS','NL-BASED SE','PROGRAM REPAIR','AGENTIC CODING','MINING SOFTWARE REPOSITORIES','CODE LLMS'];
  const track = document.getElementById('marqueeTrack');
  track.innerHTML = keywords.concat(keywords).map(k => `<span>${k}</span>`).join('');

  /* ---- background particle network ---- */
  const canvas = document.getElementById('particle-network');
  const ctx = canvas.getContext('2d');
  let particles = [];
  function resize(){
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  for (let i = 0; i < 70; i++){
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - .5) * 0.5,
      vy: (Math.random() - .5) * 0.5,
      r: 2 + Math.random() * 2
    });
  }

  function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of particles){
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = '#6355C7';
      ctx.fill();
    }
    for (let i = 0; i < particles.length; i++){
      for (let j = i + 1; j < particles.length; j++){
        let dx = particles[i].x - particles[j].x;
        let dy = particles[i].y - particles[j].y;
        let d = Math.sqrt(dx * dx + dy * dy);
        if (d < 120){
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(99,85,199,${(1 - d / 120) * 0.45})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  if (!reduceMotion) {
  animate();
}

  /* ---- hero stat counters ----
     Publications / Projects targets are pulled from the shared
     SITE_STATS (js/data/site-stats.js) so they can't drift out
     of sync with the Publications dashboard or Projects section. */
  if (window.SITE_STATS){
    const statPublications = document.getElementById('statPublications');
    const statProjects = document.getElementById('statProjects');
    if (statPublications) statPublications.dataset.target = SITE_STATS.totalPublications;
    if (statProjects) statProjects.dataset.target = SITE_STATS.totalProjects;
  }
  const counters = document.querySelectorAll('.hero-stat h2');
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = +el.dataset.target;
      let value = 0;
      const speed = target / 60;
      const timer = setInterval(() => {
        value += speed;
        if (value >= target){
          el.textContent = target + '+';
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(value);
        }
      }, 20);
      counterObserver.unobserve(el);
    });
  });
  counters.forEach(counterObserver.observe.bind(counterObserver));
}

window.addEventListener("scroll",()=>{

const nav=document.querySelector(".nav");

nav.classList.toggle("scrolled",window.scrollY>50);

});




/* ==========================================================
   AISEL — FEATURED RESEARCH AREAS
   Responsive carousel + animations + autoplay
========================================================== */

(function initFeaturedResearch() {

  function startFeaturedResearch() {

    const section =
      document.querySelector('#featured-research');

    if (!section) return;


    const viewport =
      section.querySelector('#featuredViewport');

    const track =
      section.querySelector('#featuredTrack');

    const cards =
      Array.from(
        section.querySelectorAll('.featured-card')
      );

    const prevButton =
      section.querySelector('#featuredPrev');

    const nextButton =
      section.querySelector('#featuredNext');

    const dotsContainer =
      section.querySelector('#featuredDots');


    if (
      !viewport ||
      !track ||
      !cards.length ||
      !dotsContainer
    ) {
      return;
    }


    /* ======================================================
       SETTINGS
    ====================================================== */

    let currentIndex = 0;

    let visibleCards = 3;

    let maxIndex = 0;

    let autoplayTimer = null;

    let resizeTimer = null;


    const reduceMotion =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;


    /* ======================================================
       CREATE DOTS DYNAMICALLY
    ====================================================== */

    function createDots() {

      dotsContainer.innerHTML = '';

      const totalDots =
        Math.max(
          1,
          maxIndex + 1
        );


      for (
        let i = 0;
        i < totalDots;
        i++
      ) {

        const dot =
          document.createElement('button');

        dot.type = 'button';

        dot.className =
          'featured-dot';

        dot.setAttribute(
          'aria-label',
          `Show research slide ${i + 1}`
        );

        dot.setAttribute(
          'role',
          'tab'
        );


        dot.addEventListener(
          'click',
          () => {

            currentIndex = i;

            updateCarousel();

            updateDots();

            restartAutoplay();

          }
        );


        dotsContainer.appendChild(dot);

      }

    }


    /* ======================================================
       CALCULATE RESPONSIVE CAROUSEL
    ====================================================== */

    function calculateCarousel() {

      const width =
        window.innerWidth;


      if (width <= 700) {

        visibleCards = 1;

      }

      else if (width <= 1050) {

        visibleCards = 2;

      }

      else {

        visibleCards = 3;

      }


      maxIndex =
        Math.max(
          0,
          cards.length - visibleCards
        );


      if (
        currentIndex >
        maxIndex
      ) {

        currentIndex =
          maxIndex;

      }


      createDots();

      updateDots();

      updateCarousel(false);

    }


    /* ======================================================
       MOVE CAROUSEL
    ====================================================== */

    function updateCarousel(
      animated = true
    ) {

      if (!cards.length) {
        return;
      }


      const firstCard =
        cards[0];


      const cardWidth =
        firstCard.getBoundingClientRect().width;


      const trackStyles =
        window.getComputedStyle(track);


      const gap =
        parseFloat(
          trackStyles.gap
        ) || 0;


      const distance =
        currentIndex *
        (cardWidth + gap);


      if (!animated) {

        track.style.transition =
          'none';

      }

      else {

        track.style.transition =
          'transform .75s cubic-bezier(.22,1,.36,1)';

      }


      track.style.transform =
        `translate3d(-${distance}px,0,0)`;


      if (!animated) {

        requestAnimationFrame(() => {

          track.style.transition =
            'transform .75s cubic-bezier(.22,1,.36,1)';

        });

      }


      updateArrowState();

      animateVisibleCards();

    }


    /* ======================================================
       ANIMATE CURRENT CARDS
    ====================================================== */

    function animateVisibleCards() {

      const visible =
        cards.slice(
          currentIndex,
          currentIndex + visibleCards
        );


      visible.forEach(
        (card, index) => {

          card.classList.add(
            'is-visible'
          );


          if (!reduceMotion) {

            card.animate(
              [
                {
                  opacity: .72,
                  transform:
                    'translateY(5px) scale(.995)'
                },

                {
                  opacity: 1,
                  transform:
                    'translateY(0) scale(1)'
                }
              ],
              {
                duration: 420,
                delay: index * 70,
                easing:
                  'cubic-bezier(.22,1,.36,1)',
                fill: 'both'
              }
            );

          }

        }
      );

    }


    /* ======================================================
       NEXT
    ====================================================== */

    function nextSlide() {

      if (
        currentIndex >= maxIndex
      ) {

        currentIndex = 0;

      }

      else {

        currentIndex++;

      }


      updateCarousel();

      updateDots();

      restartAutoplay();

    }


    /* ======================================================
       PREVIOUS
    ====================================================== */

    function previousSlide() {

      if (
        currentIndex <= 0
      ) {

        currentIndex = maxIndex;

      }

      else {

        currentIndex--;

      }


      updateCarousel();

      updateDots();

      restartAutoplay();

    }


    /* ======================================================
       DOT STATE
    ====================================================== */

    function updateDots() {

      const dots =
        Array.from(
          dotsContainer.querySelectorAll(
            '.featured-dot'
          )
        );


      dots.forEach(
        (dot, index) => {

          const active =
            index === currentIndex;


          dot.classList.toggle(
            'active',
            active
          );


          dot.setAttribute(
            'aria-current',
            active
              ? 'true'
              : 'false'
          );

        }
      );

    }


    /* ======================================================
       ARROWS
    ====================================================== */

    function updateArrowState() {

      if (prevButton) {

        prevButton.classList.remove(
          'disabled'
        );

      }


      if (nextButton) {

        nextButton.classList.remove(
          'disabled'
        );

      }

    }


    /* ======================================================
       BUTTON EVENTS
    ====================================================== */

    if (nextButton) {

      nextButton.addEventListener(
        'click',
        nextSlide
      );

    }


    if (prevButton) {

      prevButton.addEventListener(
        'click',
        previousSlide
      );

    }


    /* ======================================================
       AUTOPLAY
    ====================================================== */

    function stopAutoplay() {

      if (autoplayTimer) {

        clearInterval(
          autoplayTimer
        );

        autoplayTimer = null;

      }

    }


    function startAutoplay() {

      if (reduceMotion) {
        return;
      }


      stopAutoplay();


      autoplayTimer =
        setInterval(
          () => {

            nextSlide();

          },
          5500
        );

    }


    function restartAutoplay() {

      stopAutoplay();

      startAutoplay();

    }


    /* ======================================================
       PAUSE ON HOVER
    ====================================================== */

    viewport.addEventListener(
      'mouseenter',
      stopAutoplay
    );


    viewport.addEventListener(
      'mouseleave',
      startAutoplay
    );


    viewport.addEventListener(
      'focusin',
      stopAutoplay
    );


    viewport.addEventListener(
      'focusout',
      startAutoplay
    );


    /* ======================================================
       KEYBOARD NAVIGATION
    ====================================================== */

    viewport.addEventListener(
      'keydown',
      event => {

        if (
          event.key ===
          'ArrowRight'
        ) {

          event.preventDefault();

          nextSlide();

        }


        if (
          event.key ===
          'ArrowLeft'
        ) {

          event.preventDefault();

          previousSlide();

        }

      }
    );


    /* ======================================================
       TOUCH / SWIPE
    ====================================================== */

    let touchStartX = 0;

    let touchEndX = 0;


    viewport.addEventListener(
      'touchstart',
      event => {

        touchStartX =
          event.changedTouches[0].screenX;

        stopAutoplay();

      },
      {
        passive: true
      }
    );


    viewport.addEventListener(
      'touchend',
      event => {

        touchEndX =
          event.changedTouches[0].screenX;


        const difference =
          touchStartX -
          touchEndX;


        if (
          Math.abs(difference) > 50
        ) {

          if (difference > 0) {

            nextSlide();

          }

          else {

            previousSlide();

          }

        }


        startAutoplay();

      },
      {
        passive: true
      }
    );


    /* ======================================================
       RESIZE
    ====================================================== */

    window.addEventListener(
      'resize',
      () => {

        clearTimeout(
          resizeTimer
        );


        resizeTimer =
          setTimeout(
            calculateCarousel,
            150
          );

      }
    );


    /* ======================================================
       GSAP HEADER REVEAL
    ====================================================== */

    function animateSection() {

      section.classList.add(
        'featured-ready'
      );


      const head =
        section.querySelector(
          '.featured-head'
        );


      const kicker =
        section.querySelector(
          '.featured-kicker'
        );


      const title =
        section.querySelector(
          '.featured-title'
        );


      const titleLine =
        section.querySelector(
          '.featured-title-line'
        );


      const description =
        section.querySelector(
          '.featured-description'
        );


      if (
        typeof gsap === 'undefined' ||
        reduceMotion
      ) {

        section.classList.add(
          'featured-visible'
        );


        head?.classList.add(
          'is-visible'
        );


        cards.forEach(
          card => {

            card.classList.add(
              'is-visible'
            );

          }
        );


        return;

      }


      const timeline =
        gsap.timeline({

          scrollTrigger: {

            trigger: section,

            start: 'top 78%',

            once: true

          }

        });


      timeline

        .to(
          kicker,
          {
            opacity: 1,
            y: 0,
            duration: .55,
            ease: 'power3.out'
          }
        )

        .to(
          title,
          {
            opacity: 1,
            y: 0,
            duration: .7,
            ease: 'power3.out'
          },
          '-=.35'
        )

        .to(
          titleLine,
          {
            width: 105,
            duration: .65,
            ease: 'power3.out'
          },
          '-=.35'
        )

        .to(
          description,
          {
            opacity: 1,
            y: 0,
            duration: .65,
            ease: 'power3.out'
          },
          '-=.30'
        );


      head.classList.add(
        'is-visible'
      );


      const initialCards =
        cards.slice(
          0,
          visibleCards
        );


      timeline.to(
        initialCards,
        {
          opacity: 1,

          y: 0,

          scale: 1,

          duration: .65,

          stagger: .12,

          ease: 'power3.out',

          onComplete() {

            initialCards.forEach(
              card => {

                card.classList.add(
                  'is-visible'
                );

              }
            );

          }

        },
        '-=.20'
      );

    }


    /* ======================================================
       CARD IMAGE PARALLAX
    ====================================================== */

    if (!reduceMotion) {

      cards.forEach(
        card => {

          const image =
            card.querySelector(
              '.featured-image img'
            );


          const icon =
            card.querySelector(
              '.featured-image-icon'
            );


          card.addEventListener(
            'mousemove',
            event => {

              const rect =
                card.getBoundingClientRect();


              const x =
                (
                  event.clientX -
                  rect.left
                ) /
                rect.width -
                .5;


              const y =
                (
                  event.clientY -
                  rect.top
                ) /
                rect.height -
                .5;


              if (image) {

                image.style.transform =
                  `
                  scale(1.075)
                  translate(
                    ${x * 7}px,
                    ${y * 7}px
                  )
                  `;

              }


              if (icon) {

                icon.style.transform =
                  `
                  translate(
                    ${x * 3}px,
                    ${y * 3}px
                  )
                  scale(1.05)
                  rotate(${x * 4}deg)
                  `;

              }

            }
          );


          card.addEventListener(
            'mouseleave',
            () => {

              if (image) {

                image.style.transform =
                  'scale(1) translate(0,0)';

              }


              if (icon) {

                icon.style.transform =
                  'translateY(0) scale(1)';

              }

            }
          );

        }
      );

    }


    /* ======================================================
       INTERSECTION OBSERVER
    ====================================================== */

    if (
      'IntersectionObserver' in window
    ) {

      const observer =
        new IntersectionObserver(
          entries => {

            entries.forEach(
              entry => {

                if (
                  !entry.isIntersecting
                ) {
                  return;
                }


                animateVisibleCards();

              }
            );

          },
          {
            threshold: .15
          }
        );


      observer.observe(
        section
      );

    }


    /* ======================================================
       INITIALIZE
    ====================================================== */

    calculateCarousel();

    animateSection();

    startAutoplay();

  }


  /* ========================================================
     HOME IS LOADED DYNAMICALLY
  ======================================================== */

  if (
    document.querySelector(
      '#featured-research'
    )
  ) {

    startFeaturedResearch();

  }

  else {

    const observer =
      new MutationObserver(
        () => {

          if (
            document.querySelector(
              '#featured-research'
            )
          ) {

            observer.disconnect();

            startFeaturedResearch();

          }

        }
      );


    observer.observe(
      document.body,
      {
        childList: true,
        subtree: true
      }
    );

  }

})();