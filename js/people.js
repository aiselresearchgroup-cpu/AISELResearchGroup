/* ==========================================================
   AISEL — PEOPLE DIRECTORY
   Complete People Section JavaScript

   Features:
   - Profile data
   - Search
   - Category filters
   - Animated counters
   - Scroll reveal
   - Card 3D tilt
   - Mouse-following glow
   - Card interaction
   - Profile modal
   - Image fallback
   - Keyboard shortcuts
   - Navigation active state
   - Reduced-motion accessibility
   ========================================================== */

(function () {
  "use strict";

  /* ==========================================================
     PROFILE DATA
     ========================================================== */

  const PROFILE_DATA = {

    /* --------------------------------------------------------
       1. LAB DIRECTOR
       -------------------------------------------------------- */

    khubaib: {
      badge: "Lab Director",
      kicker: "AISEL · Leadership",
      initials: "KA",

      title: "Dr. Khubaib Amjad Alam",

      role: "Associate Professor · Director, AISEL Lab",

      affiliation:
        "Al Ain University · Abu Dhabi, United Arab Emirates",

      bio:
        "Dr. Khubaib Amjad Alam is an Associate Professor at Al Ain University and Director of AISEL. His research interests include Automated Software Engineering, AI methodologies for Software Engineering, natural language-based Software Engineering, requirements engineering, software architecture, software maintenance and evolution, software quality assurance, transformer-based language models, data-driven analytics, and decision support systems.",

      tags: [
        "AI4SE",
        "Automated SE",
        "MSR",
        "Requirements",
        "Architecture",
        "LLMs"
      ],

      links: [
        [
          "Google Scholar",
          "https://scholar.google.com/citations?hl=en&user=s_BMc5YAAAAJ&view_op=list_works&sortby=pubdate",
          "fa-solid fa-graduation-cap"
        ],
        [
          "Official Profile",
          "https://engineering.aau.ac.ae/en/staff/khubaib-Alam",
          "fa-solid fa-arrow-up-right-from-square"
        ],
        [
          "LinkedIn",
          "https://ae.linkedin.com/in/khubaib-amjad-alam-phd-032a2627",
          "fa-brands fa-linkedin-in"
        ],
        [
          "Email",
          "mailto:khubaib.alam@aau.ac.ae",
          "fa-solid fa-envelope"
        ]
      ]
    },


    /* --------------------------------------------------------
       2. SENIOR RESEARCHER
       -------------------------------------------------------- */

    haroon: {
      badge: "Senior Researcher",
      kicker: "AISEL · Core Research Team",
      initials: "MH",

      title: "Muhammad Haroon",

      role: "Senior Researcher · AISEL Lab",

      affiliation:
        "AI-driven Software Engineering",

      bio:
        "Muhammad Haroon is a Senior Researcher at AISEL working on AI-driven Software Engineering and natural language-based Software Engineering. His work explores language models, agentic AI, repository mining, app review analytics, software quality analysis, requirements intelligence, and automated software engineering tasks.",

      tags: [
        "AI4SE",
        "LLMs",
        "Transformers",
        "Agentic AI",
        "NLP",
        "MSR"
      ],

      links: [
        [
          "Google Scholar",
          "https://scholar.google.com/citations?hl=en&user=j9QcX1YAAAAJ&sortby=pubdate",
          "fa-solid fa-graduation-cap"
        ],
        [
          "LinkedIn",
          "https://pk.linkedin.com/in/muhammadharoon047",
          "fa-brands fa-linkedin-in"
        ],
        [
          "Email",
          "mailto:mharoonawan047@gmail.com",
          "fa-solid fa-envelope"
        ]
      ]
    },


    /* --------------------------------------------------------
       3. RESEARCH ASSOCIATE
       -------------------------------------------------------- */

    momina: {
      badge: "Research Associate",
      kicker: "AISEL · Core Research Team",
      initials: "MC",

      title: "Momina Kamal Cheema",

      role: "Research Associate · AISEL Lab",

      affiliation:
        "AI-driven Software Engineering Research",

      bio:
        "Momina Kamal Cheema is a Research Associate at AISEL. Her research contributions include natural language-based Software Engineering and the analysis of mobile app reviews using transformer-based language models, with a focus on turning complex user feedback into useful software engineering insights.",

      tags: [
        "App Reviews",
        "Transformers",
        "NLP",
        "AI4SE"
      ],

      links: [
        [
          "Google Scholar",
          "https://scholar.google.com/citations?user=n3SmFKIAAAAJ&hl=en",
          "fa-solid fa-graduation-cap"
        ],
        [
          "LinkedIn",
          "https://www.linkedin.com/in/momina-kamal-cheema-b738261ba/",
          "fa-brands fa-linkedin-in"
        ],
        [
          "Email",
          "mailto:mominacheema14@gmail.com",
          "fa-solid fa-envelope"
        ]
      ]
    },


    /* --------------------------------------------------------
       4. RESEARCH ASSOCIATE
       -------------------------------------------------------- */

    maryam: {
      badge: "Research Associate",
      kicker: "AISEL · Core Research Team",
      initials: "MH",

      title: "Maryam Hussain",

      role: "Research Associate · Instructor",

      affiliation:
        "FAST National University · Islamabad, Pakistan",

      bio:
        "Maryam Hussain is a Software Engineering researcher and instructor whose work includes data-driven software feedback analysis, app review analytics, software quality concerns, and human-centered AI for Requirements Engineering. She also contributes to collaborative research communication and AI-enabled Software Engineering initiatives.",

      tags: [
        "App Reviews",
        "Software Quality",
        "AI4RE",
        "Data Analytics"
      ],

      links: [
        [
          "Google Scholar",
          "https://scholar.google.com/citations?user=D5jwkQEAAAAJ&hl=en",
          "fa-solid fa-graduation-cap"
        ],
        [
          "LinkedIn",
          "https://pk.linkedin.com/in/maryam-hussain-9a675a238",
          "fa-brands fa-linkedin-in"
        ],
        [
          "Email",
          "mailto:maryam.hussain@isb.nu.edu.pk",
          "fa-solid fa-envelope"
        ]
      ]
    },


    /* --------------------------------------------------------
       5. RESEARCH ASSISTANT
       -------------------------------------------------------- */

    katrina: {
      badge: "Research Assistant",
      kicker: "AISEL · Core Research Team",
      initials: "KB",

      title: "Katrina Bodani",

      role: "Research Assistant · AISEL Lab",

      affiliation:
        "FAST National University",

      bio:
        "Katrina Bodani is a Research Assistant at AISEL. Her public project work includes multimodal AI, retrieval-augmented generation, joint text-image embeddings, and LLM-based applications. She contributes to applied AI research and intelligent systems that combine language, retrieval, and multimodal information.",

      tags: [
        "RAG",
        "Multimodal AI",
        "LLMs",
        "AI Systems"
      ],

      links: [
        [
          "LinkedIn",
          "https://pk.linkedin.com/in/katrinabodani",
          "fa-brands fa-linkedin-in"
        ],
        [
          "Email",
          "mailto:i220545@nu.edu.pk",
          "fa-solid fa-envelope"
        ]
      ]
    },


    /* --------------------------------------------------------
       6. INTERNATIONAL COLLABORATOR
       -------------------------------------------------------- */

    liliana: {
      badge: "International Collaborator",
      kicker: "Global Research Network",
      initials: "LP",

      title: "Dr. Liliana Pasquale",

      role: "Associate Professor",

      affiliation:
        "University College Dublin · Lero · Ireland",

      bio:
        "Dr. Liliana Pasquale is an Associate Professor at University College Dublin and a funded investigator at Lero. Her research focuses on adaptive, human-centred security systems that detect, diagnose, and respond to evolving cyber threats while preserving human agency and ethical oversight. She also works on ransomware defence and regulatory-compliant software engineering.",

      tags: [
        "Secure SE",
        "Adaptive Security",
        "Cybersecurity",
        "Privacy"
      ],

      links: [
        [
          "Website",
          "https://lpasquale.github.io/",
          "fa-solid fa-globe"
        ],
        [
          "Google Scholar",
          "https://scholar.google.com/citations?hl=en&user=N8uPjssAAAAJ&view_op=list_works&sortby=pubdate",
          "fa-solid fa-graduation-cap"
        ],
        [
          "LinkedIn",
          "https://www.linkedin.com/in/liliana-pasquale-0b7a052/",
          "fa-brands fa-linkedin-in"
        ],
        [
          "Email",
          "mailto:liliana.pasquale@ucd.ie",
          "fa-solid fa-envelope"
        ]
      ]
    },


    /* --------------------------------------------------------
       7. INTERNATIONAL COLLABORATOR
       -------------------------------------------------------- */

    imen: {
      badge: "International Collaborator",
      kicker: "Global Research Network",
      initials: "IB",

      title: "Dr. Imen Benzarti",

      role: "Professor · Software & IT Engineering",

      affiliation:
        "ÉTS Montréal · Canada",

      bio:
        "Dr. Imen Benzarti is a professor in the Software and Information Technology Engineering Department at ÉTS Montréal. Her research areas include intelligent and autonomous systems, software systems, multimedia and cybersecurity, requirements engineering, customer and user experience, model-driven software engineering, and Internet of Things.",

      tags: [
        "Requirements",
        "Human-Centred SE",
        "IoT",
        "Intelligent Systems"
      ],

      links: [
        [
          "Official Profile",
          "https://www.etsmtl.ca/en/study-at-ets/professors/imbenzarti",
          "fa-solid fa-arrow-up-right-from-square"
        ],
        [
          "Google Scholar",
          "https://scholar.google.com/citations?hl=fr&user=i0lnR_IAAAAJ&view_op=list_works&sortby=pubdate",
          "fa-solid fa-graduation-cap"
        ],
        [
          "LinkedIn",
          "https://www.linkedin.com/in/imen-benzarti/",
          "fa-brands fa-linkedin-in"
        ],
        [
          "Email",
          "mailto:imen.benzarti@etsmtl.ca",
          "fa-solid fa-envelope"
        ]
      ]
    },


    /* --------------------------------------------------------
       8. INTERNATIONAL COLLABORATOR
       -------------------------------------------------------- */

    nadeem: {
      badge: "International Collaborator",
      kicker: "Global Research Network",
      initials: "NA",

      title: "Dr. Nadeem Abbas",

      role: "Associate Professor / Senior Lecturer",

      affiliation:
        "Linnaeus University · Sweden",

      bio:
        "Dr. Nadeem Abbas is an Associate Professor in Software Engineering at Linnaeus University, Sweden. His research focuses on self-adaptive software systems, dynamic software product lines, requirements engineering, software reuse, software architecture and design, and architectural analysis and reasoning, with growing emphasis on AI-supported decision-making and responsible system design.",

      tags: [
        "Self-Adaptive SE",
        "Requirements",
        "Architecture",
        "Digital Health"
      ],

      links: [
        [
          "Official Profile",
          "https://www.lnu.se/en/staff/nadeem.abbas/",
          "fa-solid fa-arrow-up-right-from-square"
        ],
        [
          "Google Scholar",
          "https://scholar.google.com/citations?hl=en&user=EHbIi1sAAAAJ&view_op=list_works&sortby=pubdate",
          "fa-solid fa-graduation-cap"
        ],
        [
          "LinkedIn",
          "https://www.linkedin.com/in/nadeem-abbas/",
          "fa-brands fa-linkedin-in"
        ],
        [
          "Email",
          "mailto:nadeem.abbas@lnu.se",
          "fa-solid fa-envelope"
        ]
      ]
    },


    /* --------------------------------------------------------
       9. INTERNATIONAL COLLABORATOR
       -------------------------------------------------------- */

    "haroon-mahmood": {
      badge: "International Collaborator",
      kicker: "Global Research Network",
      initials: "HM",

      title: "Dr. Haroon Mahmood",

      role: "Associate Professor",

      affiliation:
        "Al Ain University · Abu Dhabi, UAE",

      bio:
        "Dr. Haroon Mahmood is an Associate Professor at Al Ain University. His research interests include information security, Internet of Things security and reliability, security auditing and vulnerability analysis, digital forensics, differential privacy, artificial intelligence, UAV mobility modelling, software-defined networking, and large language models.",

      tags: [
        "AI",
        "LLMs",
        "IoT Security",
        "Digital Forensics"
      ],

      links: [
        [
          "Official Profile",
          "https://www.aau.ac.ae/en/staff/haroon-mahmood",
          "fa-solid fa-arrow-up-right-from-square"
        ],
        [
          "Google Scholar",
          "https://scholar.google.com/citations?hl=en&user=TJv3l2QAAAAJ&view_op=list_works&sortby=pubdate",
          "fa-solid fa-graduation-cap"
        ],
        [
          "LinkedIn",
          "https://www.linkedin.com/in/dr-haroon-mahmood-a775947/",
          "fa-brands fa-linkedin-in"
        ],
        [
          "Email",
          "mailto:haroon.mahmood@aau.ac.ae",
          "fa-solid fa-envelope"
        ]
      ]
    },


    /* --------------------------------------------------------
       10. ALUMNI
       -------------------------------------------------------- */

    nadia: {
      badge: "AISEL Alumni",
      kicker: "Alumni Network",
      initials: "NB",

      title: "Nadia Bashir",

      role: "MS Student · AISEL Alumni",

      affiliation:
        "Former AISEL Research Member",

      bio:
        "Nadia Bashir is listed in the supplied AISEL alumni record as an MS student and former member of the research community. The available profile information does not specify a current affiliation or additional research interests, so this profile intentionally avoids adding unverified details.",

      tags: [
        "Software Engineering",
        "AI Research",
        "NLP"
      ],

      links: [
        [
          "Google Scholar",
          "https://scholar.google.com/citations?user=oXb9TmcAAAAJ&hl=en",
          "fa-solid fa-graduation-cap"
        ],
        [
          "LinkedIn",
          "https://www.linkedin.com/in/nadia-bashir-658152292/",
          "fa-brands fa-linkedin-in"
        ],
        [
          "Email",
          "mailto:nadiabashir384@gmail.com",
          "fa-solid fa-envelope"
        ]
      ]
    }

  };


  /* ==========================================================
     GLOBAL SETTINGS
     ========================================================== */

  const reducedMotion =
    window.matchMedia &&
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  /* ==========================================================
     MAIN INITIALIZATION
     ========================================================== */

  function initPeople() {

    const section = document.getElementById("people");

    if (!section) {
      return;
    }

    if (section.dataset.peopleReady === "true") {
      return;
    }

    section.dataset.peopleReady = "true";

    setupReveal(section);

    setupCounters(section);

    setupFilters(section);

    setupSearch(section);

    setupKeyboardShortcuts(section);

    setupCardEffects(section);

    setupImageFallbacks(section);

    setupModal(section);

    setupNavigation(section);

  }


  /* ==========================================================
     SCROLL REVEAL
     ========================================================== */

  function setupReveal(section) {

    const revealItems =
      section.querySelectorAll(
        ".people-reveal"
      );

    const groups =
      section.querySelectorAll(
        ".people-group"
      );


    if (
      reducedMotion ||
      !("IntersectionObserver" in window)
    ) {

      revealItems.forEach(function (item) {
        item.classList.add("is-visible");
      });

      groups.forEach(function (group) {
        group.classList.add("is-visible");
      });

      return;
    }


    const observer =
      new IntersectionObserver(
        function (entries) {

          entries.forEach(function (entry) {

            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add(
              "is-visible"
            );

            observer.unobserve(
              entry.target
            );

          });

        },
        {
          threshold: 0.10,
          rootMargin:
            "0px 0px -45px 0px"
        }
      );


    revealItems.forEach(function (item) {
      observer.observe(item);
    });


    groups.forEach(function (group) {
      observer.observe(group);
    });


    /* Optional GSAP enhancement */

    if (window.gsap) {

      const hero =
        section.querySelector(
          ".people-hero"
        );

      if (hero) {

        const elements =
          hero.querySelectorAll(
            ".people-hero-kicker, " +
            ".people-hero h1, " +
            ".people-hero-copy>p, " +
            ".people-hero-meta, " +
            ".people-hero-cta"
          );

        gsap.fromTo(
          elements,

          {
            opacity: 0,
            y: 18
          },

          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.07,
            ease: "power3.out",
            delay: 0.05
          }
        );

      }

    }

  }


  /* ==========================================================
     ANIMATED COUNTERS
     ========================================================== */

  function setupCounters(section) {

    const counters =
      Array.from(
        section.querySelectorAll(
          "[data-count]"
        )
      );


    if (!counters.length) {
      return;
    }


    function animateCounters() {

      counters.forEach(function (element) {

        const target =
          Number(
            element.dataset.count || 0
          );


        if (reducedMotion) {

          element.textContent =
            target;

          return;
        }


        const duration = 850;

        const start =
          performance.now();


        function update(now) {

          const progress =
            Math.min(
              (now - start) /
              duration,
              1
            );


          const eased =
            1 -
            Math.pow(
              1 - progress,
              3
            );


          element.textContent =
            Math.round(
              target * eased
            );


          if (progress < 1) {

            requestAnimationFrame(
              update
            );

          }

        }


        requestAnimationFrame(
          update
        );

      });

    }


    if (
      !("IntersectionObserver" in window)
    ) {

      animateCounters();

      return;
    }


    const stats =
      section.querySelector(
        ".overview-stats"
      );


    if (!stats) {
      return;
    }


    const observer =
      new IntersectionObserver(
        function (entries) {

          if (
            entries[0].isIntersecting
          ) {

            animateCounters();

            observer.disconnect();

          }

        },
        {
          threshold: 0.35
        }
      );


    observer.observe(stats);

  }


  /* ==========================================================
     FILTER SYSTEM
     ========================================================== */

  function setupFilters(section) {

    const buttons =
      Array.from(
        section.querySelectorAll(
          ".people-filter"
        )
      );


    const cards =
      Array.from(
        section.querySelectorAll(
          ".person-card"
        )
      );


    const groups =
      Array.from(
        section.querySelectorAll(
          ".people-group"
        )
      );


    const count =
      section.querySelector(
        "#peopleVisibleCount"
      );


    const empty =
      section.querySelector(
        "#peopleEmpty"
      );


    const search =
      section.querySelector(
        "#peopleSearch"
      );


    let activeFilter = "all";


    function applyFilters() {

      const query =
        search
          ? search.value
              .trim()
              .toLowerCase()
          : "";


      let visibleCount = 0;


      cards.forEach(function (card) {

        const category =
          (
            card.dataset.category ||
            ""
          ).toLowerCase();


        const searchableText =
          (
            card.dataset.search ||
            card.textContent ||
            ""
          ).toLowerCase();


        const categoryMatch =
          activeFilter === "all" ||
          category === activeFilter;


        const searchMatch =
          !query ||
          searchableText.includes(
            query
          );


        const shouldShow =
          categoryMatch &&
          searchMatch;


        card.classList.toggle(
          "is-hidden",
          !shouldShow
        );


        if (shouldShow) {
          visibleCount++;
        }

      });


      groups.forEach(function (group) {

        const groupCards =
          Array.from(
            group.querySelectorAll(
              ".person-card"
            )
          );


        const hasVisibleCard =
          groupCards.some(
            function (card) {
              return !card.classList.contains(
                "is-hidden"
              );
            }
          );


        group.classList.toggle(
          "is-empty",
          !hasVisibleCard
        );

      });


      if (count) {

        count.textContent =
          visibleCount;

      }


      if (empty) {

        empty.hidden =
          visibleCount !== 0;

      }

    }


    buttons.forEach(function (button) {

      button.addEventListener(
        "click",
        function () {

          activeFilter =
            (
              button.dataset.filter ||
              "all"
            ).toLowerCase();


          buttons.forEach(
            function (item) {

              const selected =
                item === button;


              item.classList.toggle(
                "is-active",
                selected
              );


              item.setAttribute(
                "aria-pressed",
                String(selected)
              );

            }
          );


          applyFilters();

        }
      );

    });


    if (search) {

      search.addEventListener(
        "input",
        applyFilters
      );


      search.addEventListener(
        "search",
        applyFilters
      );

    }


    applyFilters();

  }


  /* ==========================================================
     SEARCH
     ========================================================== */

  function setupSearch(section) {

    const input =
      section.querySelector(
        "#peopleSearch"
      );


    if (!input) {
      return;
    }


    input.addEventListener(
      "keydown",
      function (event) {

        if (
          event.key === "Escape"
        ) {

          input.value = "";

          input.dispatchEvent(
            new Event("input")
          );

          input.blur();

        }

      }
    );

  }


  /* ==========================================================
     KEYBOARD SHORTCUTS
     ========================================================== */

  function setupKeyboardShortcuts(
    section
  ) {

    const input =
      section.querySelector(
        "#peopleSearch"
      );


    if (!input) {
      return;
    }


    document.addEventListener(
      "keydown",
      function (event) {

        const activeElement =
          document.activeElement;


        const tag =
          activeElement
            ? activeElement.tagName
            : "";


        const editing =
          tag === "INPUT" ||
          tag === "TEXTAREA" ||
          tag === "SELECT";


        /* Ctrl + K / Cmd + K */

        if (
          (event.ctrlKey ||
            event.metaKey) &&
          event.key.toLowerCase() === "k"
        ) {

          event.preventDefault();

          input.focus();

          input.select();

          return;
        }


        /* Slash shortcut */

        if (
          event.key === "/" &&
          !editing
        ) {

          event.preventDefault();

          input.focus();

        }

      }
    );

  }


  /* ==========================================================
     CARD 3D EFFECT
     ========================================================== */

  function setupCardEffects(section) {

    const cards =
      Array.from(
        section.querySelectorAll(
          ".person-card"
        )
      );


    cards.forEach(function (card) {


      card.addEventListener(
        "pointermove",
        function (event) {

          const rect =
            card.getBoundingClientRect();


          const x =
            event.clientX -
            rect.left;


          const y =
            event.clientY -
            rect.top;


          const percentX =
            x / rect.width;


          const percentY =
            y / rect.height;


          /* Glow position */

          card.style.setProperty(
            "--mx",
            percentX * 100 + "%"
          );


          card.style.setProperty(
            "--my",
            percentY * 100 + "%"
          );


          /* Do not tilt on small screens */

          if (
            reducedMotion ||
            window.innerWidth < 900
          ) {

            return;

          }


          const rotateX =
            (0.5 - percentY) *
            4.5;


          const rotateY =
            (percentX - 0.5) *
            5;


          card.style.setProperty(
            "--rx",
            rotateX.toFixed(2) +
            "deg"
          );


          card.style.setProperty(
            "--ry",
            rotateY.toFixed(2) +
            "deg"
          );

        }
      );


      card.addEventListener(
        "pointerleave",
        function () {

          card.style.setProperty(
            "--rx",
            "0deg"
          );


          card.style.setProperty(
            "--ry",
            "0deg"
          );

        }
      );


      /* Keyboard accessibility */

      card.addEventListener(
        "focusin",
        function () {

          card.classList.add(
            "is-focused"
          );

        }
      );


      card.addEventListener(
        "focusout",
        function () {

          card.classList.remove(
            "is-focused"
          );

        }
      );

    });

  }


  /* ==========================================================
     IMAGE FALLBACK
     ========================================================== */

  function setupImageFallbacks(
    section
  ) {

    const images =
      section.querySelectorAll(
        ".person-avatar img"
      );


    images.forEach(function (image) {

      image.addEventListener(
        "error",
        function () {

          const avatar =
            image.closest(
              ".person-avatar"
            );


          if (!avatar) {
            return;
          }


          let name =
            image.alt ||
            "AISEL";


          name =
            name
              .replace(
                /^Dr\.\s*/i,
                ""
              )
              .trim();


          const parts =
            name
              .split(/\s+/)
              .filter(Boolean);


          let initials;


          if (
            parts.length >= 2
          ) {

            initials =
              parts[0][0] +
              parts[
                parts.length - 1
              ][0];

          } else {

            initials =
              name.substring(
                0,
                2
              );

          }


          image.remove();


          avatar.classList.remove(
            "has-image"
          );


          avatar.textContent =
            initials.toUpperCase();

        },
        {
          once: true
        }
      );

    });

  }


  /* ==========================================================
     PROFILE MODAL
     ========================================================== */

  function setupModal(section) {

    const modal =
      section.querySelector(
        "#peopleModal"
      );


    if (!modal) {
      return;
    }


    const modalTitle =
      section.querySelector(
        "#peopleModalTitle"
      );


    const modalBadge =
      section.querySelector(
        "#peopleModalBadge"
      );


    const modalKicker =
      section.querySelector(
        "#peopleModalKicker"
      );


    const modalAvatar =
      section.querySelector(
        "#peopleModalAvatar"
      );


    const modalRole =
      section.querySelector(
        "#peopleModalRole"
      );


    const modalAffiliation =
      section.querySelector(
        "#peopleModalAffiliation"
      );


    const modalBio =
      section.querySelector(
        "#peopleModalBio"
      );


    const modalTags =
      section.querySelector(
        "#peopleModalTags"
      );


    const modalActions =
      section.querySelector(
        "#peopleModalActions"
      );


    const profileButtons =
      section.querySelectorAll(
        ".profile-more"
      );


    profileButtons.forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            const profileID =
              button.dataset.profile;


            const profile =
              PROFILE_DATA[
                profileID
              ];


            if (!profile) {

              console.warn(
                "AISEL People: profile not found:",
                profileID
              );

              return;

            }


            /* Badge */

            if (modalBadge) {

              modalBadge.textContent =
                profile.badge;

            }


            /* Kicker */

            if (modalKicker) {

              modalKicker.textContent =
                profile.kicker;

            }


            /* Avatar */

            if (modalAvatar) {

              modalAvatar.innerHTML = "";

              const initials =
                document.createElement(
                  "span"
                );

              initials.textContent =
                profile.initials;

              modalAvatar.appendChild(
                initials
              );

            }


            /* Name */

            if (modalTitle) {

              modalTitle.textContent =
                profile.title;

            }


            /* Role */

            if (modalRole) {

              modalRole.textContent =
                profile.role;

            }


            /* Affiliation */

            if (modalAffiliation) {

              modalAffiliation.textContent =
                profile.affiliation;

            }


            /* Bio */

            if (modalBio) {

              modalBio.textContent =
                profile.bio;

            }


            /* Research tags */

            if (modalTags) {

              modalTags.innerHTML = "";

              profile.tags.forEach(
                function (tag) {

                  const tagElement =
                    document.createElement(
                      "span"
                    );

                  tagElement.textContent =
                    tag;

                  modalTags.appendChild(
                    tagElement
                  );

                }
              );

            }


            /* Links */

            if (modalActions) {

              modalActions.innerHTML =
                "";


              profile.links.forEach(
                function (link) {

                  const label =
                    link[0];


                  const href =
                    link[1];


                  const icon =
                    link[2];


                  const anchor =
                    document.createElement(
                      "a"
                    );


                  anchor.href =
                    href;


                  anchor.className =
                    "modal-action-link";


                  if (
                    !href.startsWith(
                      "mailto:"
                    )
                  ) {

                    anchor.target =
                      "_blank";

                    anchor.rel =
                      "noopener noreferrer";

                  }


                  const iconElement =
                    document.createElement(
                      "i"
                    );


                  iconElement.className =
                    icon;


                  iconElement.setAttribute(
                    "aria-hidden",
                    "true"
                  );


                  const textElement =
                    document.createElement(
                      "span"
                    );


                  textElement.textContent =
                    label;


                  anchor.appendChild(
                    iconElement
                  );


                  anchor.appendChild(
                    textElement
                  );


                  modalActions.appendChild(
                    anchor
                  );

                }
              );

            }


            /* Open modal */

            if (
              typeof modal.showModal ===
              "function"
            ) {

              if (!modal.open) {

                modal.showModal();

              }

            } else {

              modal.setAttribute(
                "open",
                ""
              );

            }


            document.body.classList.add(
              "people-modal-open"
            );

          }
        );

      }
    );


    /* --------------------------------------------------------
       CLOSE MODAL
       -------------------------------------------------------- */

    function closeModal() {

      if (
        typeof modal.close ===
        "function"
      ) {

        if (modal.open) {
          modal.close();
        }

      } else {

        modal.removeAttribute(
          "open"
        );

      }


      document.body.classList.remove(
        "people-modal-open"
      );

    }


    /* Close button */

    const closeButton =
      section.querySelector(
        "[data-modal-close]"
      );


    if (closeButton) {

      closeButton.addEventListener(
        "click",
        closeModal
      );

    }


    /* Click outside modal */

    modal.addEventListener(
      "click",
      function (event) {

        if (
          event.target === modal
        ) {

          closeModal();

        }

      }
    );


    /* ESC */

    modal.addEventListener(
      "cancel",
      function (event) {

        event.preventDefault();

        closeModal();

      }
    );


    modal.addEventListener(
      "close",
      function () {

        document.body.classList.remove(
          "people-modal-open"
        );

      }
    );

  }


  /* ==========================================================
     NAVIGATION ACTIVE STATE
     ========================================================== */

  function setupNavigation(
    section
  ) {

    const nav =
      document.querySelector(
        'nav.links a[href="#people"]'
      );


    if (
      !nav ||
      !("IntersectionObserver" in window)
    ) {

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

                nav.classList.add(
                  "active"
                );

              } else {

                nav.classList.remove(
                  "active"
                );

              }

            }
          );

        },
        {
          threshold: 0.22
        }
      );


    observer.observe(section);

  }


  /* ==========================================================
     HELPER FUNCTIONS
     ========================================================== */

  function escapeHTML(value) {

    return String(value).replace(
      /[&<>'"]/g,
      function (character) {

        const entities = {

          "&": "&amp;",

          "<": "&lt;",

          ">": "&gt;",

          "'": "&#39;",

          '"': "&quot;"

        };


        return (
          entities[character] ||
          character
        );

      }
    );

  }


  /* ==========================================================
     PUBLIC API
     ========================================================== */

  window.AISELPeople = {

    init: initPeople,

    profiles: PROFILE_DATA

  };


  window.initPeople =
    initPeople;


  /* ==========================================================
     START
     ========================================================== */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initPeople,
      {
        once: true
      }
    );

  } else {

    initPeople();

  }

})();