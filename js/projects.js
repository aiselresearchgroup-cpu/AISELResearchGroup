/* =========================================================
   AISEL — PROJECTS
   Research Project Portfolio
   ========================================================= */

(function () {

  "use strict";


  /* =========================================================
     PROJECT DATA
  ========================================================= */

  const PROJECTS = [

    {
      id: "debtguard",

      name: "DebtGuard",

      title:
        "Inference-Optimized Technical Debt Intelligence",

      category:
        "software-quality",

      categoryName:
        "Software Quality",

      description:
        "An inference-optimized framework for identifying self-admitted technical debt from software repositories using Transformer language models, Large Language Models, and efficient inference techniques.",

      focus:
        "Self-Admitted Technical Debt",

      icon:
        "fa-solid fa-shield-halved",

      accent:
        "violet",

      status:
        "Active Research",

      technologies: [
        "Transformers",
        "LLMs",
        "Inference Optimization",
        "SATD Detection",
        "Software Repository Mining"
      ],

      features: [
        "Identifies self-admitted technical debt in software artifacts",
        "Uses Transformer-based language representations",
        "Explores LLM-based technical debt identification",
        "Optimizes inference for efficient prediction",
        "Supports repository-level technical debt analysis"
      ]
    },


    {
      id: "qualitylens",

      name: "QualityLens",

      title:
        "Automated Mobile App Quality Concern Mining",

      category:
        "app-analytics",

      categoryName:
        "App Review Analytics",

      description:
        "An intelligent framework for automatically extracting software-quality concerns from mobile app reviews using Transformer models, Large Language Models, data mining, and deep learning.",

      focus:
        "Mobile App Quality Analytics",

      icon:
        "fa-solid fa-magnifying-glass-chart",

      accent:
        "cyan",

      status:
        "Active Research",

      technologies: [
        "Transformers",
        "LLMs",
        "Data Mining",
        "Deep Learning",
        "App Review Analytics",
        "Software Quality"
      ],

      features: [
        "Automatically extracts quality concerns from app reviews",
        "Processes large-scale user-generated feedback",
        "Uses Transformer-based language models",
        "Combines deep learning with data mining",
        "Supports evidence-based software quality analysis"
      ]
    },


    {
      id: "sarcasmflow",

      name: "SarcasmFlow",

      title:
        "Inference-Optimized App Review Sarcasm Intelligence",

      category:
        "app-analytics",

      categoryName:
        "App Review Analytics",

      description:
        "An inference-optimized Transformer framework for identifying sarcasm in mobile app reviews, with an agentic AI layer for intelligent analysis and interpretation.",

      focus:
        "Sarcasm Detection in App Reviews",

      icon:
        "fa-solid fa-comments",

      accent:
        "gold",

      status:
        "Active Research",

      technologies: [
        "Transformers",
        "LLMs",
        "Inference Optimization",
        "Agentic AI",
        "Sarcasm Detection",
        "App Reviews"
      ],

      features: [
        "Identifies sarcasm in mobile application reviews",
        "Supports multi-class sarcasm analysis",
        "Uses optimized Transformer inference",
        "Explores Agentic AI for review interpretation",
        "Transforms sarcastic feedback into structured insights"
      ]
    },


    {
      id: "classifai",

      name: "ClassifAI",

      title:
        "Agentic Issue Intelligence",

      category:
        "agentic-se",

      categoryName:
        "Agentic Software Engineering",

      description:
        "An intelligent issue-analysis framework combining Transformer models, Large Language Models, Agentic AI, inference optimization, and knowledge graphs for automated software issue classification.",

      focus:
        "Intelligent Software Issue Analysis",

      icon:
        "fa-solid fa-diagram-project",

      accent:
        "green",

      status:
        "Research Project",

      technologies: [
        "Transformers",
        "LLMs",
        "Inference Optimization",
        "Agentic AI",
        "Knowledge Graph",
        "Issue Classification"
      ],

      features: [
        "Automatically classifies software issue reports",
        "Uses Transformer-based language models",
        "Combines LLM reasoning with Agentic AI",
        "Integrates software-engineering knowledge graphs",
        "Supports intelligent issue triage and repository analytics"
      ]
    }

  ];


  /* =========================================================
     STATE
     ========================================================= */

  const state = {

    filter: "all",

    search: ""

  };


  /* =========================================================
     DOM HELPERS
     ========================================================= */

  function get(id) {

    return document.getElementById(id);

  }


  function all(selector) {

    return Array.from(
      document.querySelectorAll(selector)
    );

  }


  /* =========================================================
     HTML SAFETY
     ========================================================= */

  function escapeHTML(value) {

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  /* =========================================================
     FILTER PROJECTS
     ========================================================= */

  function filteredProjects() {

    const query =
      state.search.trim().toLowerCase();


    return PROJECTS.filter(function (project) {

      const matchesFilter =
        state.filter === "all" ||
        project.category === state.filter;


      const searchable =
        [
          project.name,
          project.title,
          project.categoryName,
          project.description,
          project.focus,
          project.technologies.join(" "),
          project.features.join(" ")
        ]
        .join(" ")
        .toLowerCase();


      const matchesSearch =
        !query ||
        searchable.includes(query);


      return (
        matchesFilter &&
        matchesSearch
      );

    });

  }


  /* =========================================================
     UPDATE FILTER COUNTS
     ========================================================= */

  function updateFilterCounts() {

    const allCount =
      document.querySelector(
        '[data-project-count="all"]'
      );


    if (allCount) {

      allCount.textContent =
        PROJECTS.length;

    }


    const categories = [
      "software-quality",
      "app-analytics",
      "agentic-se"
    ];


    categories.forEach(function (category) {

      const element =
        document.querySelector(
          `[data-project-count="${category}"]`
        );


      if (!element) {
        return;
      }


      const count =
        PROJECTS.filter(function (project) {

          return (
            project.category ===
            category
          );

        }).length;


      element.textContent =
        count;

    });

  }


  /* =========================================================
     PROJECT CARD
     ========================================================= */

  function createProjectCard(
    project,
    index
  ) {

    const technologies =
      project.technologies
        .map(function (technology) {

          return `
            <span>
              ${escapeHTML(technology)}
            </span>
          `;

        })
        .join("");


    const features =
      project.features
        .map(function (feature) {

          return `
            <li>

              <i class="fa-solid fa-check"></i>

              <span>
                ${escapeHTML(feature)}
              </span>

            </li>
          `;

        })
        .join("");


    return `

      <article
        class="
          project-card
          project-accent-${escapeHTML(project.accent)}
        "
        style="--project-delay:${index * 90}ms"
      >


        <!-- CARD TOP -->

        <div class="project-card-top">


          <div class="project-mark">

            <span></span>

            <i
              class="${escapeHTML(project.icon)}"
              aria-hidden="true">
            </i>

          </div>


          <div class="project-card-status">

            <i></i>

            ${escapeHTML(project.status)}

          </div>


        </div>


        <!-- CARD BODY -->

        <div class="project-card-body">


          <!-- CATEGORY -->

          <span class="project-category">

            ${escapeHTML(project.categoryName)}

          </span>


          <!-- NAME -->

          <h3>

            ${escapeHTML(project.name)}

          </h3>


          <!-- RESEARCH TITLE -->

          <h4>

            ${escapeHTML(project.title)}

          </h4>


          <!-- DESCRIPTION -->

          <p>

            ${escapeHTML(project.description)}

          </p>


          <!-- TECHNOLOGY TAGS -->

          <div class="project-tags">

            ${technologies}

          </div>


          <!-- KEY FEATURES -->

          <div class="project-key-label">

            KEY FEATURES

          </div>


          <ul class="project-features">

            ${features}

          </ul>


        </div>


        <!-- FOOTER -->

        <div class="project-card-footer">


          <span class="project-focus">

            <i class="fa-solid fa-crosshairs"></i>

            ${escapeHTML(project.focus)}

          </span>


          <button
            type="button"
            class="project-details-btn"
            data-project-id="${escapeHTML(project.id)}"
          >

            Explore

            <i class="fa-solid fa-arrow-right"></i>

          </button>


        </div>


      </article>

    `;

  }


  /* =========================================================
     RENDER PROJECTS
     ========================================================= */

  function renderProjects() {

    const grid =
      get("projectGrid");

    const empty =
      get("projectEmpty");


    if (!grid) {

      console.error(
        "AISEL Projects: #projectGrid was not found."
      );

      return;

    }


    const projects =
      filteredProjects();


    /* Result count */

    const visible =
      get("projectVisibleCount");

    const total =
      get("projectTotalCount");


    if (visible) {

      visible.textContent =
        projects.length;

    }


    if (total) {

      total.textContent =
        PROJECTS.length;

    }


    /* Empty */

    if (!projects.length) {

      grid.innerHTML = "";

      if (empty) {
        empty.hidden = false;
      }

      return;

    }


    if (empty) {
      empty.hidden = true;
    }


    /* Render */

    grid.innerHTML =
      projects
        .map(function (project, index) {

          return createProjectCard(
            project,
            index
          );

        })
        .join("");


    setupProjectButtons();

    animateCards();

  }


  /* =========================================================
     SEARCH
     ========================================================= */

  function setupSearch() {

    const input =
      get("projectSearch");

    const clear =
      get("projectSearchClear");


    if (!input) {
      return;
    }


    input.addEventListener(
      "input",
      function () {

        state.search =
          input.value;

        if (clear) {

          clear.classList.toggle(
            "visible",
            input.value.trim().length > 0
          );

        }

        renderProjects();

      }
    );


    if (clear) {

      clear.addEventListener(
        "click",
        function () {

          input.value = "";

          state.search = "";

          clear.classList.remove(
            "visible"
          );

          renderProjects();

          input.focus();

        }
      );

    }

  }


  /* =========================================================
     FILTERS
     ========================================================= */

  function setupFilters() {

    const buttons =
      all(".project-filter");


    buttons.forEach(function (button) {

      button.addEventListener(
        "click",
        function () {

          state.filter =
            button.dataset.filter ||
            "all";


          buttons.forEach(
            function (item) {

              const active =
                item === button;


              item.classList.toggle(
                "active",
                active
              );


              item.setAttribute(
                "aria-selected",
                String(active)
              );

            }
          );


          renderProjects();

        }
      );

    });

  }


  /* =========================================================
     RESET
     ========================================================= */

  function resetProjects() {

    state.filter = "all";

    state.search = "";


    const input =
      get("projectSearch");


    if (input) {
      input.value = "";
    }


    const clear =
      get("projectSearchClear");


    if (clear) {
      clear.classList.remove(
        "visible"
      );
    }


    all(".project-filter")
      .forEach(function (button) {

        const active =
          button.dataset.filter ===
          "all";


        button.classList.toggle(
          "active",
          active
        );


        button.setAttribute(
          "aria-selected",
          String(active)
        );

      });


    renderProjects();

  }


  /* =========================================================
     MODAL
     ========================================================= */

  function openProject(project) {

    const modal =
      get("projectModal");


    if (!modal) {
      return;
    }


    const mark =
      get("projectModalMark");

    const category =
      get("projectModalCategory");

    const status =
      get("projectModalStatus");

    const title =
      get("projectModalTitle");

    const description =
      get("projectModalDescription");

    const tags =
      get("projectModalTags");

    const features =
      get("projectModalFeatures");

    const focus =
      get("projectModalFocus");


    /* Icon */

    if (mark) {

      mark.innerHTML =
        `
          <i
            class="${escapeHTML(project.icon)}"
            aria-hidden="true">
          </i>
        `;


      mark.className =
        "project-modal-mark";

    }


    /* Category */

    if (category) {

      category.textContent =
        project.categoryName;

    }


    /* Status */

    if (status) {

      status.innerHTML =
        `
          <i></i>
          ${escapeHTML(project.status)}
        `;

    }


    /* Title */

    if (title) {

      title.textContent =
        project.name;

    }


    /* Description */

    if (description) {

      description.textContent =
        project.description;

    }


    /* Tags */

    if (tags) {

      tags.innerHTML =
        project.technologies
          .map(function (technology) {

            return `
              <span>
                ${escapeHTML(technology)}
              </span>
            `;

          })
          .join("");

    }


    /* Features */

    if (features) {

      features.innerHTML =
        project.features
          .map(function (feature) {

            return `
              <li>

                <i class="fa-solid fa-check"></i>

                <span>
                  ${escapeHTML(feature)}
                </span>

              </li>
            `;

          })
          .join("");

    }


    /* Focus */

    if (focus) {

      focus.innerHTML =
        `
          <i class="fa-solid fa-crosshairs"></i>
          ${escapeHTML(project.focus)}
        `;

    }


    /* Open */

    if (
      typeof modal.showModal ===
      "function"
    ) {

      modal.showModal();

    } else {

      modal.setAttribute(
        "open",
        ""
      );

    }


    document.body.classList.add(
      "project-modal-open"
    );

  }


  /* =========================================================
     CLOSE MODAL
     ========================================================= */

  function closeProject() {

    const modal =
      get("projectModal");


    if (!modal) {
      return;
    }


    if (
      typeof modal.close ===
      "function" &&
      modal.open
    ) {

      modal.close();

    } else {

      modal.removeAttribute(
        "open"
      );

    }


    document.body.classList.remove(
      "project-modal-open"
    );

  }


  /* =========================================================
     PROJECT BUTTONS
     ========================================================= */

  function setupProjectButtons() {

    all(".project-details-btn")
      .forEach(function (button) {

        button.addEventListener(
          "click",
          function () {

            const id =
              button.dataset.projectId;


            const project =
              PROJECTS.find(
                function (item) {

                  return (
                    item.id === id
                  );

                }
              );


            if (project) {

              openProject(
                project
              );

            }

          }
        );

      });

  }


  /* =========================================================
     MODAL EVENTS
     ========================================================= */

  function setupModal() {

    const modal =
      get("projectModal");


    const close =
      get("projectModalClose");


    const done =
      get("projectModalDone");


    if (!modal) {
      return;
    }


    if (close) {

      close.addEventListener(
        "click",
        closeProject
      );

    }


    if (done) {

      done.addEventListener(
        "click",
        closeProject
      );

    }


    modal.addEventListener(
      "click",
      function (event) {

        if (
          event.target ===
          modal
        ) {

          closeProject();

        }

      }
    );


    modal.addEventListener(
      "cancel",
      function () {

        closeProject();

      }
    );

  }


  /* =========================================================
     ANIMATE CARDS
     ========================================================= */

  function animateCards() {

    const cards =
      all(".project-card");


    if (!cards.length) {
      return;
    }


    const reduced =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;


    if (
      reduced ||
      !("IntersectionObserver" in window)
    ) {

      cards.forEach(
        function (card) {

          card.classList.add(
            "project-card-visible"
          );

        }
      );

      return;

    }


    const observer =
      new IntersectionObserver(
        function (entries) {

          entries.forEach(
            function (entry) {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  "project-card-visible"
                );


                observer.unobserve(
                  entry.target
                );

              }

            }
          );

        },
        {
          threshold: 0.08
        }
      );


    cards.forEach(
      function (card) {

        observer.observe(
          card
        );

      }
    );

  }


  /* =========================================================
     HERO REVEAL
     ========================================================= */

  function setupReveal() {

    const elements =
      all(".projects-reveal");


    if (!elements.length) {
      return;
    }


    const reduced =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;


    if (
      reduced ||
      !("IntersectionObserver" in window)
    ) {

      elements.forEach(
        function (element) {

          element.classList.add(
            "project-visible"
          );

        }
      );

      return;

    }


    const observer =
      new IntersectionObserver(
        function (entries) {

          entries.forEach(
            function (entry) {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  "project-visible"
                );


                observer.unobserve(
                  entry.target
                );

              }

            }
          );

        },
        {
          threshold: 0.05
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


  /* =========================================================
     KEYBOARD SHORTCUT
     ========================================================= */

  function setupKeyboard() {

    document.addEventListener(
      "keydown",
      function (event) {

        /* Cmd + K / Ctrl + K */

        if (
          (event.metaKey ||
            event.ctrlKey) &&
          event.key.toLowerCase() === "k"
        ) {

          const search =
            get("projectSearch");


          if (search) {

            event.preventDefault();

            search.focus();

          }

        }


        /* Escape */

        if (
          event.key === "Escape"
        ) {

          closeProject();

        }

      }
    );

  }


  /* =========================================================
     HERO PARALLAX
     ========================================================= */

  function setupHeroParallax() {

    const hero =
      document.querySelector(
        ".projects-hero"
      );


    if (!hero) {
      return;
    }


    const reduced =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;


    if (reduced) {
      return;
    }


    hero.addEventListener(
      "mousemove",
      function (event) {

        const rect =
          hero.getBoundingClientRect();


        const x =
          (event.clientX -
            rect.left) /
          rect.width -
          0.5;


        const y =
          (event.clientY -
            rect.top) /
          rect.height -
          0.5;


        hero.style.setProperty(
          "--projects-mouse-x",
          `${x * 10}px`
        );


        hero.style.setProperty(
          "--projects-mouse-y",
          `${y * 10}px`
        );

      }
    );


    hero.addEventListener(
      "mouseleave",
      function () {

        hero.style.setProperty(
          "--projects-mouse-x",
          "0px"
        );


        hero.style.setProperty(
          "--projects-mouse-y",
          "0px"
        );

      }
    );

  }


  /* =========================================================
     INITIALIZATION
     ========================================================= */

  function initProjects() {

    const section =
      get("projects");


    /*
     * IMPORTANT:
     * If Projects section does not exist,
     * simply stop. Do NOT break the whole website.
     */

    if (!section) {

      console.warn(
        "AISEL Projects: section #projects not found."
      );

      return;

    }


    /*
     * Prevent duplicate initialization.
     */

    if (
      section.dataset.projectsInitialized ===
      "true"
    ) {

      return;

    }


    section.dataset.projectsInitialized =
      "true";


    /* Counts */

    updateFilterCounts();


    /* Render */

    renderProjects();


    /* Search */

    setupSearch();


    /* Filters */

    setupFilters();


    /* Reset */

    const reset =
      get("projectEmptyReset");


    if (reset) {

      reset.addEventListener(
        "click",
        resetProjects
      );

    }


    /* Modal */

    setupModal();


    /* Keyboard */

    setupKeyboard();


    /* Animations */

    setupReveal();


    setupHeroParallax();


    /*
     * Keep site statistics synchronized.
     */

    if (
      window.SITE_STATS &&
      typeof window.SITE_STATS ===
      "object"
    ) {

      window.SITE_STATS.totalProjects =
        PROJECTS.length;

    }

  }


  /* =========================================================
     GLOBAL INIT
     ========================================================= */

  window.initProjects =
    initProjects;


  /*
   * Public API
   */

  window.AISELProjects = {

    data:
      PROJECTS,

    reset:
      resetProjects,

    open:
      function (id) {

        const project =
          PROJECTS.find(
            function (item) {

              return item.id === id;

            }
          );


        if (project) {

          openProject(
            project
          );

        }

      }

  };


})();