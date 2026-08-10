/* ==========================================================
   AISEL RESEARCH SPECTRUM
   COMPLETE INTERACTION + ANIMATION
========================================================== */

(function () {

  "use strict";


  /* ========================================================
     WAIT FOR DOM
  ======================================================== */

  function initResearchSpectrum() {


    const section =
      document.querySelector(
        "#research-spectrum"
      );


    if (!section) {

      return;

    }


    /*
     * Prevent duplicate initialization.
     */

    if (
      section.dataset.rsInitialized === "true"
    ) {

      return;

    }


    section.dataset.rsInitialized =
      "true";


    /* ======================================================
       DATA
    ====================================================== */

    const researchData = {

      /* ====================================================
         AI4SE
      ==================================================== */

      "ai4se": {

        title:
          "AI for Software Engineering",

        icon:
          "fa-solid fa-microchip",

        color:
          "#2563EB",

        subtitle:
          "Current Research Projects",

        projects: [

          {
            title:
              "Transformer-Based Technical Debt Mining",

            description:
              "Inference-optimized identification of self-admitted technical debt.",

            icon:
              "fa-solid fa-triangle-exclamation"
          },

          {
            title:
              "AI-Driven Mobile Feature Mining",

            description:
              "BERT and NER-based extraction and recommendation of mobile app features.",

            icon:
              "fa-solid fa-mobile-screen-button"
          }

        ]

      },


      /* ====================================================
         APP REVIEW ANALYTICS
      ==================================================== */

      "app-review": {

        title:
          "App Review Analytics",

        icon:
          "fa-solid fa-comments",

        color:
          "#EA580C",

        subtitle:
          "Current Research Projects",

        projects: [

          {
            title:
              "Mobile Quality Concern Mining",

            description:
              "Automated extraction of user quality concerns from mobile app reviews.",

            icon:
              "fa-solid fa-magnifying-glass"
          },

          {
            title:
              "Multi-Label Quality Concern Mining",

            description:
              "Deep learning for multi-label extraction of software quality concerns.",

            icon:
              "fa-solid fa-list-check"
          },

          {
            title:
              "Agentic Sarcasm Intelligence",

            description:
              "Inference-optimized transformer-based sarcasm identification in app reviews.",

            icon:
              "fa-solid fa-comment-dots"
          },

          {
            title:
              "App Review Requirements Intelligence",

            description:
              "Intelligent analysis of app reviews for software requirements and user needs.",

            icon:
              "fa-solid fa-clipboard-list"
          }

        ]

      },


      /* ====================================================
         AGENTIC AI
      ==================================================== */

      "agentic": {

        title:
          "Agentic AI",

        icon:
          "fa-solid fa-robot",

        color:
          "#7C3AED",

        subtitle:
          "Current Research Projects",

        projects: [

          {
            title:
              "ClassifAI: Agentic Issue Intelligence",

            description:
              "Deployment-oriented multi-agent framework for automated software issue classification.",

            icon:
              "fa-solid fa-tags"
          },

          {
            title:
              "Agentic Sarcasm Intelligence",

            description:
              "Agentic pipeline for inference-optimized sarcasm detection in app reviews.",

            icon:
              "fa-solid fa-comment-dots"
          },

          {
            title:
              "Agentic Requirements Intelligence",

            description:
              "Multi-agent LLM pipelines for intelligent requirements engineering support.",

            icon:
              "fa-solid fa-diagram-project"
          }

        ]

      },


      /* ====================================================
         AUTOMATED SOFTWARE ENGINEERING
      ==================================================== */

      "automated-se": {

        title:
          "Automated Software Engineering",

        icon:
          "fa-solid fa-gears",

        color:
          "#0F766E",

        subtitle:
          "Current Research Projects",

        projects: [

          {
            title:
              "ClassifAI: Agentic Issue Intelligence",

            description:
              "Automated classification of software issues using multi-agent AI.",

            icon:
              "fa-solid fa-tags"
          },

          {
            title:
              "Transformer-Based Technical Debt Mining",

            description:
              "Automated detection and analysis of self-admitted technical debt.",

            icon:
              "fa-solid fa-triangle-exclamation"
          },

          {
            title:
              "AI-Assisted Software Analytics",

            description:
              "Intelligent analysis of software artifacts using modern NLP and AI techniques.",

            icon:
              "fa-solid fa-chart-line"
          }

        ]

      },


      /* ====================================================
         INTELLIGENT DATA & AI
      ==================================================== */

      "data-ai": {

        title:
          "Intelligent Data & AI",

        icon:
          "fa-solid fa-chart-line",

        color:
          "#4338CA",

        subtitle:
          "Current Research Projects",

        projects: [

          {
            title:
              "Knowledge Graph-Based Software Intelligence",

            description:
              "Graph-based representation and mining of software engineering knowledge.",

            icon:
              "fa-solid fa-diagram-project"
          },

          {
            title:
              "Paraphrase Mining for Semantic Intelligence",

            description:
              "Semantic similarity and paraphrase discovery for intelligent information retrieval.",

            icon:
              "fa-solid fa-link"
          }

        ]

      },


      /* ====================================================
         MULTIMODAL AI
      ==================================================== */

      "multimodal": {

        title:
          "Multimodal AI",

        icon:
          "fa-solid fa-layer-group",

        color:
          "#7E22CE",

        subtitle:
          "Current Research Projects",

        projects: [

          {
            title:
              "Multimodal Game Intelligence",

            description:
              "Game summarization and genre identification using textual and visual cues.",

            icon:
              "fa-solid fa-gamepad"
          }

        ]

      }

    };


    /* ======================================================
       ELEMENTS
    ====================================================== */

    const domainCards =
      Array.from(
        section.querySelectorAll(
          ".rs-domain-card"
        )
      );


    const panel =
      section.querySelector(
        ".rs-project-panel"
      );


    const panelTitle =
      section.querySelector(
        "#rs-panel-title"
      );


    const panelSubtitle =
      section.querySelector(
        "#rs-panel-subtitle"
      );


    const panelIcon =
      section.querySelector(
        "#rs-panel-icon"
      );


    const projectList =
      section.querySelector(
        "#rs-project-list"
      );


    /* ======================================================
       REDUCED MOTION
    ====================================================== */

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;


    /* ======================================================
       HEADER ANIMATION
    ====================================================== */

    function animateHeader() {

      const pill =
        section.querySelector(
          ".rs-pill"
        );


      const title =
        section.querySelector(
          ".rs-main-title"
        );


      const line =
        section.querySelector(
          ".rs-main-line"
        );


      const description =
        section.querySelector(
          ".rs-main-description"
        );


      if (reducedMotion) {

        if (pill) {

          pill.style.opacity =
            "1";

          pill.style.transform =
            "translateY(0)";

        }


        if (title) {

          title.style.opacity =
            "1";

          title.style.transform =
            "translateY(0)";

        }


        if (line) {

          line.style.width =
            "85px";

        }


        if (description) {

          description.style.opacity =
            "1";

          description.style.transform =
            "translateY(0)";

        }

        return;

      }


      /*
       * Use GSAP if your website already includes it.
       */

      if (
        typeof gsap !== "undefined"
      ) {

        const timeline =
          gsap.timeline();


        timeline.to(
          pill,
          {
            opacity:1,

            y:0,

            duration:.55,

            ease:
              "power3.out"
          }
        );


        timeline.to(
          title,
          {
            opacity:1,

            y:0,

            duration:.6,

            ease:
              "power3.out"
          },
          "-=.28"
        );


        timeline.to(
          line,
          {
            width:85,

            duration:.45,

            ease:
              "power3.out"
          },
          "-=.22"
        );


        timeline.to(
          description,
          {
            opacity:1,

            y:0,

            duration:.55,

            ease:
              "power3.out"
          },
          "-=.18"
        );

        return;

      }


      /*
       * Vanilla fallback.
       */

      requestAnimationFrame(
        () => {

          if (pill) {

            pill.style.transition =
              "all .55s ease";

            pill.style.opacity =
              "1";

            pill.style.transform =
              "translateY(0)";

          }


          setTimeout(
            () => {

              if (title) {

                title.style.transition =
                  "all .6s ease";

                title.style.opacity =
                  "1";

                title.style.transform =
                  "translateY(0)";

              }

            },
            120
          );


          setTimeout(
            () => {

              if (line) {

                line.style.transition =
                  "width .45s ease";

                line.style.width =
                  "85px";

              }

            },
            280
          );


          setTimeout(
            () => {

              if (description) {

                description.style.transition =
                  "all .55s ease";

                description.style.opacity =
                  "1";

                description.style.transform =
                  "translateY(0)";

              }

            },
            380
          );

        }
      );

    }


/* ======================================================
   FOUNDATION CARD REVEAL
====================================================== */

function setupFoundationReveal() {

  const cards =
    Array.from(
      section.querySelectorAll(
        ".rs-foundation-card"
      )
    );


  if (!cards.length) {
    return;
  }


  /*
   * Respect accessibility settings.
   */
  if (
    reducedMotion ||
    !("IntersectionObserver" in window)
  ) {

    cards.forEach(
      card => {

        card.classList.add(
          "is-visible"
        );

      }
    );

    return;
  }


  /*
   * Reveal cards when they
   * enter the viewport.
   */
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


            entry.target.classList.add(
              "is-visible"
            );


            observer.unobserve(
              entry.target
            );

          }
        );

      },
      {
        threshold: 0.12,

        rootMargin:
          "0px 0px -40px 0px"
      }
    );


  cards.forEach(
    card => {

      observer.observe(
        card
      );

    }
  );


  /*
   * Subtle hover interaction.
   * This does NOT change the card structure.
   */
  cards.forEach(
    card => {

      const icon =
        card.querySelector(
          ".rs-foundation-icon"
        );


      card.addEventListener(
        "mouseenter",
        () => {

          card.style.setProperty(
            "--card-hover-y",
            "-9px"
          );

        }
      );


      card.addEventListener(
        "mouseleave",
        () => {

          card.style.setProperty(
            "--card-hover-y",
            "0px"
          );

        }
      );

    }
  );

}


    /* ======================================================
       CREATE PROJECT ITEM
    ====================================================== */

    function createProjectItem(
      project,
      index,
      color
    ) {

      const item =
        document.createElement(
          "article"
        );


      item.className =
        "rs-project-item";


      item.style.setProperty(
        "--project-color",
        color
      );


      item.innerHTML = `

        <div class="rs-project-item-icon">

          <i class="${project.icon}"></i>

        </div>


        <div class="rs-project-item-content">

          <h4>
            ${project.title}
          </h4>

          <span>
            ${project.description}
          </span>

        </div>


        <i
          class="fa-solid fa-chevron-right rs-project-item-arrow"
        ></i>

      `;


      /*
       * Staggered animation.
       */

      item.style.animationDelay =
        `${index * 70}ms`;


      return item;

    }


    /* ======================================================
       RENDER PROJECTS
    ====================================================== */

    function renderProjects(
      domainKey
    ) {

      const data =
        researchData[
          domainKey
        ];


      if (!data) {

        return;

      }


      /*
       * Panel transition.
       */

      panel.classList.remove(
        "panel-animate"
      );


      if (!reducedMotion) {

        panel.style.opacity =
          "0";

        panel.style.transform =
          "translateY(8px)";

      }


      /*
       * Update header.
       */

      panelTitle.textContent =
        data.title;


      panelSubtitle.textContent =
        data.subtitle;


      panelIcon.innerHTML =
        `<i class="${data.icon}"></i>`;


      panelIcon.style.background =
        data.color;


      panelIcon.style.boxShadow =
        `0 9px 21px ${hexToRgba(
          data.color,
          .22
        )}`;


      /*
       * Clear current projects.
       */

      projectList.innerHTML =
        "";


      /*
       * Create projects.
       */

      data.projects.forEach(
        (
          project,
          index
        ) => {

          const item =
            createProjectItem(
              project,
              index,
              data.color
            );


          projectList.appendChild(
            item
          );

        }
      );


      /*
       * Reflow browser.
       */

      void panel.offsetWidth;


      /*
       * Panel animation.
       */

      if (!reducedMotion) {

        panel.style.transition =
          "opacity .35s ease, transform .35s ease";


        requestAnimationFrame(
          () => {

            panel.style.opacity =
              "1";

            panel.style.transform =
              "translateY(0)";

            panel.classList.add(
              "panel-animate"
            );

          }
        );

      } else {

        panel.style.opacity =
          "1";

        panel.style.transform =
          "none";

      }


      /*
       * Animate project cards.
       */

      const items =
        Array.from(
          projectList.children
        );


      if (
        reducedMotion
      ) {

        items.forEach(
          item => {

            item.classList.add(
              "visible"
            );

          }
        );

      } else {

        requestAnimationFrame(
          () => {

            items.forEach(
              item => {

                item.classList.add(
                  "visible"
                );

              }
            );

          }
        );

      }

    }


    /* ======================================================
       HEX → RGBA
    ====================================================== */

    function hexToRgba(
      hex,
      alpha
    ) {

      let clean =
        hex.replace(
          "#",
          ""
        );


      if (
        clean.length === 3
      ) {

        clean =
          clean
            .split("")
            .map(
              char =>
                char + char
            )
            .join("");

      }


      const number =
        parseInt(
          clean,
          16
        );


      const r =
        (number >> 16) & 255;


      const g =
        (number >> 8) & 255;


      const b =
        number & 255;


      return `
        rgba(
          ${r},
          ${g},
          ${b},
          ${alpha}
        )
      `;

    }


    /* ======================================================
       DOMAIN SELECTION
    ====================================================== */

    function setupDomainSelection() {

      domainCards.forEach(
        card => {

          card.addEventListener(
            "click",
            () => {

              const domain =
                card.dataset.domain;


              /*
               * Remove active.
               */

              domainCards.forEach(
                item => {

                  item.classList.remove(
                    "active"
                  );

                }
              );


              /*
               * Activate selected.
               */

              card.classList.add(
                "active"
              );


              /*
               * Render.
               */

              renderProjects(
                domain
              );

            }
          );

        }
      );

    }


    /* ======================================================
       KEYBOARD ACCESSIBILITY
    ====================================================== */

    function setupKeyboardSupport() {

      domainCards.forEach(
        card => {

          card.addEventListener(
            "keydown",
            event => {

              if (
                event.key ===
                "Enter" ||
                event.key ===
                " "
              ) {

                event.preventDefault();

                card.click();

              }

            }
          );

        }
      );

    }


    /* ======================================================
       INITIALIZE
    ====================================================== */

    animateHeader();

    setupFoundationReveal();

    setupDomainSelection();

    setupKeyboardSupport();

    renderProjects(
      "ai4se"
    );


    /* ======================================================
       OPTIONAL SCROLLTRIGGER REFRESH
    ====================================================== */

    if (
      typeof ScrollTrigger !==
      "undefined"
    ) {

      setTimeout(
        () => {

          ScrollTrigger.refresh();

        },
        300
      );

    }


  }


  /* ========================================================
     DOCUMENT READY
  ======================================================== */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initResearchSpectrum,
      {
        once:true
      }
    );

  } else {

    initResearchSpectrum();

  }


})();