/* ==========================================================
   AISEL — CONTACT & COLLABORATION JS
   Complete animated Contact experience

   Handles:
   - Hero entrance animation
   - Hero particles
   - Hero counters
   - Scroll reveal animations
   - Contact / Join tabs
   - Form validation
   - Loading state
   - Success animation

   NOTE:
   Form submission is simulated.
   Connect a real backend/API before production deployment.
========================================================== */

(function () {

  "use strict";


  /* ==========================================================
     MAIN INITIALIZATION
  ========================================================== */

  function initContact() {

    const section =
      document.getElementById("contact");


    if (!section) {

      console.warn(
        "AISEL Contact: section not found."
      );

      return;

    }


    /*
       Prevent duplicate initialization.
       This is useful because the site's loader and
       other shared scripts may initialize sections.
    */

    if (
      section.dataset.contactInitialized === "true"
    ) {

      return;

    }


    section.dataset.contactInitialized =
      "true";


    /* ========================================================
       INITIALIZE FEATURES
    ======================================================== */

    createParticles();

    initHeroAnimation();

    initCounters();

    initRevealAnimations();

    initTabs();

    initForms();

    initFieldAnimations();


    console.log(
      "AISEL Contact initialized successfully."
    );

  }



  /* ==========================================================
     HERO PARTICLES
  ========================================================== */

  function createParticles() {

    const container =
      document.getElementById(
        "contactParticles"
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
      window.innerWidth <= 700
        ? 20
        : 42;


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
        "contact-particle";


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
     HERO ENTRANCE ANIMATION
  ========================================================== */

  function initHeroAnimation() {

    const section =
      document.getElementById(
        "contact"
      );


    if (!section) {

      return;

    }


    const elements = [

      section.querySelector(
        ".contact-hero-kicker"
      ),

      section.querySelector(
        ".contact-hero-title"
      ),

      section.querySelector(
        ".contact-hero-description"
      ),

      section.querySelector(
        ".contact-hero-tags"
      ),

      section.querySelector(
        ".contact-hero-actions"
      ),

      section.querySelector(
        ".contact-hero-stats"
      )

    ].filter(Boolean);


    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;


    if (reduceMotion) {

      elements.forEach(
        function (element) {

          element.style.opacity =
            "1";

        }
      );

      return;

    }


    /*
       GSAP is already loaded by index.html.
       Use it when available.
    */

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
          "-=.30"
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
            ease: "back.out(1.4)"
          },
          "-=.22"
        )

        .to(
          elements[5],
          {
            opacity: 1,
            y: 0,
            duration: .60,
            ease: "power3.out"
          },
          "-=.25"
        );

    }

    else {

      /*
         Fallback when GSAP is unavailable.
      */

      elements.forEach(
        function (
          element,
          index
        ) {

          element.style.transform =
            "translateY(20px)";


          setTimeout(
            function () {

              element.style.transition =
                "opacity .7s ease, transform .7s ease";


              element.style.opacity =
                "1";


              element.style.transform =
                "translateY(0)";

            },
            index * 120
          );

        }
      );

    }

  }



  /* ==========================================================
     HERO COUNTERS
  ========================================================== */

  function initCounters() {

    const counters =
      document.querySelectorAll(
        "[data-contact-counter]"
      );


    if (!counters.length) {

      return;

    }


    const values = [
      1,
      6,
      9
    ];


    counters.forEach(
      function (
        counter,
        index
      ) {

        animateCounter(
          counter,
          values[index] || 0,
          1200
        );

      }
    );

  }



  function animateCounter(
    element,
    target,
    duration
  ) {

    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;


    if (reduceMotion) {

      element.textContent =
        target;

      return;

    }


    const start =
      performance.now();


    function update(
      currentTime
    ) {

      const elapsed =
        currentTime -
        start;


      const progress =
        Math.min(
          elapsed / duration,
          1
        );


      const eased =
        1 -
        Math.pow(
          1 - progress,
          3
        );


      const value =
        Math.floor(
          eased * target
        );


      element.textContent =
        value;


      if (progress < 1) {

        requestAnimationFrame(
          update
        );

      }

      else {

        element.textContent =
          target;

      }

    }


    requestAnimationFrame(
      update
    );

  }



  /* ==========================================================
     SCROLL REVEAL
  ========================================================== */

  function initRevealAnimations() {

    const elements =
      document.querySelectorAll(
        "#contact .reveal"
      );


    if (!elements.length) {

      return;

    }


    const reduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;


    if (reduceMotion) {

      elements.forEach(
        function (element) {

          element.classList.add(
            "contact-visible"
          );

        }
      );

      return;

    }


    /*
       IntersectionObserver is lightweight and avoids
       creating unnecessary scroll listeners.
    */

    const observer =
      new IntersectionObserver(
        function (
          entries,
          observerInstance
        ) {

          entries.forEach(
            function (entry) {

              if (
                !entry.isIntersecting
              ) {

                return;

              }


              entry.target.classList.add(
                "contact-visible"
              );


              observerInstance.unobserve(
                entry.target
              );

            }
          );

        },
        {
          threshold: .12,
          rootMargin:
            "0px 0px -50px 0px"
        }
      );


    elements.forEach(
      function (element) {

        observer.observe(
          element
        );

      }
    );

  }



  /* ==========================================================
     TABS
  ========================================================== */

  function initTabs() {

    const section =
      document.getElementById(
        "contact"
      );


    if (!section) {

      return;

    }


    const buttons =
      Array.from(
        section.querySelectorAll(
          ".tab-btn"
        )
      );


    const panels =
      Array.from(
        section.querySelectorAll(
          ".tab-panel"
        )
      );


    if (
      !buttons.length ||
      !panels.length
    ) {

      return;

    }


    function activateTab(
      tabName
    ) {

      buttons.forEach(
        function (button) {

          const active =
            button.dataset.tab ===
            tabName;


          button.classList.toggle(
            "active",
            active
          );


          button.setAttribute(
            "aria-selected",
            active
              ? "true"
              : "false"
          );

        }
      );


      panels.forEach(
        function (panel) {

          const active =
            panel.dataset.panel ===
            tabName;


          panel.classList.toggle(
            "active",
            active
          );


          panel.hidden =
            !active;

        }
      );


      /*
         Scroll slightly to workspace when switching
         on smaller screens.
      */

      if (
        window.innerWidth <= 700
      ) {

        const workspace =
          document.getElementById(
            "contact-workspace"
          );


        if (workspace) {

          const rect =
            workspace.getBoundingClientRect();


          if (
            rect.top < 0
          ) {

            workspace.scrollIntoView(
              {
                behavior:
                  "smooth",
                block:
                  "start"
              }
            );

          }

        }

      }

    }


    buttons.forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            activateTab(
              button.dataset.tab
            );

          }
        );

      }
    );


    /*
       Initial state.
    */

    const activeButton =
      buttons.find(
        function (button) {

          return button.classList.contains(
            "active"
          );

        }
      );


    activateTab(
      activeButton
        ? activeButton.dataset.tab
        : "contactForm"
    );

  }



  /* ==========================================================
     FORM HANDLING
  ========================================================== */

  function initForms() {

    wireForm(
      "contactFormEl"
    );


    wireForm(
      "joinFormEl"
    );

  }



  function wireForm(
    formId
  ) {

    const form =
      document.getElementById(
        formId
      );


    if (!form) {

      return;

    }


    /*
       Prevent duplicate listeners.
    */

    if (
      form.dataset.contactFormInitialized ===
      "true"
    ) {

      return;

    }


    form.dataset.contactFormInitialized =
      "true";


    const button =
      form.querySelector(
        ".submit-btn"
      );


    const success =
      form.querySelector(
        ".form-success"
      );


    if (
      !button ||
      !success
    ) {

      return;

    }


    form.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();


        /* ----------------------------------------
           VALIDATION
        ---------------------------------------- */

        if (
          !form.checkValidity()
        ) {

          form.reportValidity();

          return;

        }


        /* ----------------------------------------
           LOADING
        ---------------------------------------- */

        button.classList.add(
          "loading"
        );


        button.disabled =
          true;


        const label =
          button.querySelector(
            ".btn-label"
          );


        const originalLabel =
          label
            ? label.textContent
            : "Submit";


        if (label) {

          label.textContent =
            "Processing...";

        }


        /* ----------------------------------------
           SIMULATED SUBMISSION
        ---------------------------------------- */

        window.setTimeout(
          function () {


            button.classList.remove(
              "loading"
            );


            button.disabled =
              false;


            if (label) {

              label.textContent =
                originalLabel;

            }


            success.classList.add(
              "show"
            );


            /*
               Small success animation.
            */

            success.animate(
              [
                {
                  opacity: 0,
                  transform:
                    "translateY(8px)"
                },

                {
                  opacity: 1,
                  transform:
                    "translateY(0)"
                }
              ],
              {
                duration: 350,
                easing:
                  "ease-out"
              }
            );


            /*
               Reset the form after successful
               simulated submission.
            */

            form.reset();


            /*
               Hide message after 5 seconds.
            */

            window.setTimeout(
              function () {

                success.classList.remove(
                  "show"
                );

              },
              5000
            );


          },
          900
        );

      }
    );

  }



  /* ==========================================================
     FIELD ANIMATIONS
  ========================================================== */

  function initFieldAnimations() {

    const fields =
      document.querySelectorAll(
        "#contact .field"
      );


    fields.forEach(
      function (field) {

        const input =
          field.querySelector(
            "input, textarea, select"
          );


        if (!input) {

          return;

        }


        input.addEventListener(
          "focus",
          function () {

            field.classList.add(
              "field-active"
            );

          }
        );


        input.addEventListener(
          "blur",
          function () {

            field.classList.remove(
              "field-active"
            );

          }
        );

      }
    );

  }



  /* ==========================================================
     PUBLIC INITIALIZER
  ========================================================== */

  window.initContact =
    initContact;


})();