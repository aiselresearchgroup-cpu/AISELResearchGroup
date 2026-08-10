/* ==========================================================
   AISEL — TESTIMONIALS / ACADEMIC VOICES
   Complete JavaScript
========================================================== */

(function () {

  "use strict";


  /* ==========================================================
     INITIALIZATION
  ========================================================== */

  function initTestimonials() {

    const section =
      document.getElementById("testimonials");

    const track =
      document.getElementById("testiTrack");

    const dotsWrap =
      document.getElementById("testiDots");

    const viewport =
      document.getElementById("testiViewport");

    const prevBtn =
      document.querySelector(".testi-prev");

    const nextBtn =
      document.querySelector(".testi-next");

    const progress =
      document.getElementById("testiProgress");

    const counter =
      document.getElementById("testiCounter");


    if (
      !section ||
      !track ||
      !dotsWrap ||
      !viewport ||
      !prevBtn ||
      !nextBtn
    ) {

      console.warn(
        "AISEL Testimonials: required elements not found."
      );

      return;

    }


    /* Prevent duplicate initialization */

    if (
      section.dataset.testimonialsInitialized === "true"
    ) {

      return;

    }


    section.dataset.testimonialsInitialized = "true";


    /* ========================================================
       STATE
    ======================================================== */

    let index = 0;

    let timer = null;

    let isPaused = false;

    let touchStartX = 0;

    let touchEndX = 0;

    const autoplayDelay = 6000;

    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;


    /* ========================================================
       EXISTING CARDS
    ======================================================== */

    const slides =
      Array.from(
        track.querySelectorAll(".testi-slide")
      );


    if (!slides.length) {

      return;

    }


    /* ========================================================
       CREATE DOTS
    ======================================================== */

    dotsWrap.innerHTML = "";


    slides.forEach(
      function (_, i) {

        const dot =
          document.createElement("button");


        dot.type = "button";

        dot.className =
          "testi-dot";


        if (i === 0) {

          dot.classList.add(
            "active"
          );

        }


        dot.setAttribute(
          "aria-label",
          `Go to academic profile ${i + 1}`
        );


        dot.setAttribute(
          "data-i",
          i
        );


        dotsWrap.appendChild(
          dot
        );

      }
    );


    const dots =
      Array.from(
        dotsWrap.querySelectorAll(
          ".testi-dot"
        )
      );


    /* ========================================================
       GO TO SLIDE
    ======================================================== */

    function goTo(i) {

      index =
        (i + slides.length) %
        slides.length;


      track.style.transform =
        `translate3d(-${index * 100}%, 0, 0)`;


      slides.forEach(
        function (slide, slideIndex) {

          slide.classList.toggle(
            "is-active",
            slideIndex === index
          );


          slide.setAttribute(
            "aria-hidden",
            slideIndex === index
              ? "false"
              : "true"
          );

        }
      );


      dots.forEach(
        function (dot, dotIndex) {

          const active =
            dotIndex === index;


          dot.classList.toggle(
            "active",
            active
          );


          dot.setAttribute(
            "aria-current",
            active
              ? "true"
              : "false"
          );

        }
      );


      /* Counter */

      if (counter) {

        counter.textContent =
          `${String(index + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;

      }


      /* Progress */

      if (progress) {

        const percentage =
          ((index + 1) /
            slides.length) *
          100;


        progress.style.width =
          `${percentage}%`;

      }

    }


    /* ========================================================
       NEXT
    ======================================================== */

    function next() {

      goTo(
        index + 1
      );

    }


    /* ========================================================
       PREVIOUS
    ======================================================== */

    function previous() {

      goTo(
        index - 1
      );

    }


    /* ========================================================
       AUTOPLAY
    ======================================================== */

    function stopAutoplay() {

      clearInterval(
        timer
      );

      timer = null;

    }


    function startAutoplay() {

      stopAutoplay();


      if (reduceMotion) {

        return;

      }


      timer =
        setInterval(
          function () {

            if (!isPaused) {

              next();

            }

          },
          autoplayDelay
        );

    }


    function restartAutoplay() {

      startAutoplay();

    }


    /* ========================================================
       BUTTONS
    ======================================================== */

    prevBtn.addEventListener(
      "click",
      function () {

        previous();

        restartAutoplay();

      }
    );


    nextBtn.addEventListener(
      "click",
      function () {

        next();

        restartAutoplay();

      }
    );


    /* ========================================================
       DOTS
    ======================================================== */

    dots.forEach(
      function (dot) {

        dot.addEventListener(
          "click",
          function () {

            goTo(
              Number(
                dot.dataset.i
              )
            );


            restartAutoplay();

          }
        );

      }
    );


    /* ========================================================
       KEYBOARD
    ======================================================== */

    viewport.addEventListener(
      "keydown",
      function (event) {

        if (
          event.key ===
          "ArrowLeft"
        ) {

          event.preventDefault();

          previous();

          restartAutoplay();

        }


        if (
          event.key ===
          "ArrowRight"
        ) {

          event.preventDefault();

          next();

          restartAutoplay();

        }


        if (
          event.key ===
          "Home"
        ) {

          event.preventDefault();

          goTo(0);

          restartAutoplay();

        }


        if (
          event.key ===
          "End"
        ) {

          event.preventDefault();

          goTo(
            slides.length - 1
          );

          restartAutoplay();

        }

      }
    );


    /* ========================================================
       MOUSE PAUSE
    ======================================================== */

    const carousel =
      section.querySelector(
        ".testi-carousel"
      );


    if (carousel) {

      carousel.addEventListener(
        "mouseenter",
        function () {

          isPaused = true;

        }
      );


      carousel.addEventListener(
        "mouseleave",
        function () {

          isPaused = false;

        }
      );

    }


    /* ========================================================
       TOUCH SWIPE
    ======================================================== */

    viewport.addEventListener(
      "touchstart",
      function (event) {

        if (
          event.touches.length
        ) {

          touchStartX =
            event.touches[0].clientX;

          touchEndX =
            touchStartX;

          isPaused = true;

        }

      },
      {
        passive: true
      }
    );


    viewport.addEventListener(
      "touchmove",
      function (event) {

        if (
          event.touches.length
        ) {

          touchEndX =
            event.touches[0].clientX;

        }

      },
      {
        passive: true
      }
    );


    viewport.addEventListener(
      "touchend",
      function () {

        const distance =
          touchEndX -
          touchStartX;


        if (
          Math.abs(distance) >
          50
        ) {

          if (
            distance < 0
          ) {

            next();

          } else {

            previous();

          }

        }


        isPaused = false;

        restartAutoplay();

      }
    );


    /* ========================================================
       VISIBILITY API
    ======================================================== */

    document.addEventListener(
      "visibilitychange",
      function () {

        if (
          document.hidden
        ) {

          stopAutoplay();

        } else {

          startAutoplay();

        }

      }
    );


    /* ========================================================
       HERO PARTICLES
    ======================================================== */

    createHeroParticles();


    /* ========================================================
       HERO ENTRANCE ANIMATION
    ======================================================== */

    initHeroAnimation();


    /* ========================================================
       INITIAL STATE
    ======================================================== */

    goTo(0);

    startAutoplay();


    console.log(
      "AISEL Testimonials initialized successfully."
    );

  }



  /* ==========================================================
     HERO PARTICLES
  ========================================================== */

  function createHeroParticles() {

    const container =
      document.getElementById(
        "testimonialParticles"
      );


    if (!container) {

      return;

    }


    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;


    if (reduceMotion) {

      return;

    }


    container.innerHTML = "";


    const particleCount =
      window.innerWidth < 700
        ? 20
        : 38;


    for (
      let i = 0;
      i < particleCount;
      i++
    ) {

      const particle =
        document.createElement(
          "span"
        );


      particle.className =
        "testimonial-particle";


      particle.style.left =
        `${Math.random() * 100}%`;


      particle.style.top =
        `${Math.random() * 100}%`;


      particle.style.setProperty(
        "--particle-duration",
        `${4 + Math.random() * 6}s`
      );


      particle.style.setProperty(
        "--particle-delay",
        `${Math.random() * 5}s`
      );


      particle.style.setProperty(
        "--particle-x",
        `${-35 + Math.random() * 70}px`
      );


      container.appendChild(
        particle
      );

    }

  }



  /* ==========================================================
     HERO ENTRANCE
  ========================================================== */

  function initHeroAnimation() {

    const section =
      document.getElementById(
        "testimonials"
      );


    if (!section) {

      return;

    }


    const elements = [

      section.querySelector(
        ".testimonials-hero-kicker"
      ),

      section.querySelector(
        ".testimonials-hero-title"
      ),

      section.querySelector(
        ".testimonials-hero-description"
      ),

      section.querySelector(
        ".testimonials-hero-tags"
      ),

      section.querySelector(
        ".testimonials-hero-button"
      )

    ].filter(Boolean);


    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;


    if (reduceMotion) {

      return;

    }


    elements.forEach(
      function (element) {

        element.style.opacity =
          "0";

        element.style.transform =
          "translateY(25px)";

      }
    );


    /* Use GSAP if already loaded by index.html */

    if (
      typeof window.gsap !==
      "undefined"
    ) {

      const timeline =
        window.gsap.timeline();


      timeline

        .to(
          elements[0],
          {
            opacity: 1,
            y: 0,
            duration: .55,
            ease: "power3.out"
          }
        )

        .to(
          elements[1],
          {
            opacity: 1,
            y: 0,
            duration: .75,
            ease: "power3.out"
          },
          "-=.25"
        )

        .to(
          elements[2],
          {
            opacity: 1,
            y: 0,
            duration: .65,
            ease: "power3.out"
          },
          "-=.35"
        )

        .to(
          elements[3],
          {
            opacity: 1,
            y: 0,
            duration: .55,
            ease: "power3.out"
          },
          "-=.30"
        )

        .to(
          elements[4],
          {
            opacity: 1,
            y: 0,
            duration: .55,
            ease: "back.out(1.5)"
          },
          "-=.25"
        );

    }

    else {

      elements.forEach(
        function (
          element,
          i
        ) {

          setTimeout(
            function () {

              element.style.transition =
                "opacity .7s ease, transform .7s ease";

              element.style.opacity =
                "1";

              element.style.transform =
                "translateY(0)";

            },
            i * 130
          );

        }
      );

    }

  }



  /* ==========================================================
     GLOBAL FUNCTION
  ========================================================== */

  window.initTestimonials =
    initTestimonials;


})();