/* =========================================================
   AISEL — PUBLICATIONS
   Search + filters + animated counters + year accordion
   + modal details + keyboard navigation
========================================================= */

(function () {
  "use strict";

  const PUBLICATIONS = [
    {
      id: "api-recommendation-2025",
      year: 2025,
      type: "journal",
      title: "A data-driven API recommendation approach for service mashup composition",
      authors: "Khubaib Amjad Alam, Muhammad Haroon, Qurratul Ain, and Irum Inayat",
      venue: "International Journal of System Assurance Engineering and Management",
      link: "https://doi.org/10.1007/s13198-024-02568-5"
    },
    {
      id: "crowd-requirements-2025",
      year: 2025,
      type: "journal",
      title: "Exploring Critical Factors of Crowd-Based Requirement Engineering Using Fuzzy DEMATEL-ANP Method",
      authors: "Rida Fatima, Khubaib Amjad Alam, Ansar Siddique, Talha Mahboob Alam, and Kamran Shaukat",
      venue: "IEEE Access, Volume 13",
      link: "https://dblp.org/rec/journals/access/FatimaASAS25"
    },
    {
      id: "codecomclassify-2025",
      year: 2025,
      type: "conference",
      title: "CodeComClassify: Automating Code Comments Classification using BERT-Based Language Models",
      authors: "Khubaib Amjad Alam, Wajid Ali, Summan Aziz, Muhammad Haroon, Meer Hashaam Khan, Zahoor Ahmad, and Nadeem Abbas",
      venue: "NLBSE @ ICSE 2025",
      link: "https://conf.researchr.org/details/icse-2025/nlbse-2025-papers/15/CodeComClassify-Automating-Code-Comments-Classification-using-BERT-based-Language-Mo"
    },
    {
      id: "quran-authentication-2025",
      year: 2025,
      type: "workshop",
      title: "Automated Authentication of Quranic Verses Using BERT-based Language Models",
      authors: "Khubaib Amjad Alam, Maryam Khalid, Syed Ahmed Ali, Haroon Mahmood, Qaisar Shafi, Muhammad Haroon, and Zulqarnain Haider",
      venue: "COLING Workshops 2025",
      link: "https://aclanthology.org/people/k/khubaib-amjad-alam/"
    },
    {
      id: "quality-app-reviews-2025",
      year: 2025,
      type: "workshop",
      title: "A Data-driven Approach for Automated Quality Concern Extraction from App Reviews",
      authors: "Khubaib Amjad Alam, Maryam Hussain, Umer Daraz, Behjat Zuhaira, and Muhammad Haroon",
      venue: "A-Mobile 2025 / ASE 2025 Workshops",
      link: "https://conf.researchr.org/details/ase-2025/a-mobile-2025-papers/4/A-Data-driven-Approach-for-Automated-Quality-Concern-Extraction-from-App-Reviews"
    },
    {
      id: "pub-ven-2024",
      year: 2024,
      type: "journal",
      title: "PUB-VEN: A Personalized Recommendation System for Suggesting Publication Venues",
      authors: "Sahar Ajmal, Muhammad Shahzad Sarfraz, Imran Memon, Muhammad Bilal, and Khubaib Amjad Alam",
      venue: "Multimedia Tools and Applications, 83(14), 42103–42124",
      link: "https://doi.org/10.1007/s11042-023-16798-5"
    },
    {
      id: "quality-user-stories-2024",
      year: 2024,
      type: "conference",
      title: "Automated Quality Concerns Extraction from User Stories and Acceptance Criteria for Early Architectural Decisions",
      authors: "Khubaib Amjad Alam, Hira Asif, Irum Inayat, and Saif Ur Rehman Khan",
      venue: "ECSA 2024, pp. 359–367",
      link: "https://conf.researchr.org/details/ecsa-2024/ecsa-2024-research-papers/24/Automated-Quality-Concerns-Extraction-from-User-Stories-and-Acceptance-Criteria-for-E"
    },
    {
      id: "feature-analytics-2024",
      year: 2024,
      type: "workshop",
      title: "Leveraging Data-Driven Analytics for Mobile App Feature Extraction and Recommendations",
      authors: "Khubaib Amjad Alam, Ramsha Ali, Zyena Kamran, and Sabeen Fatima",
      venue: "ASE Workshops 2024",
      link: "https://doi.org/10.1145/3691621.3694951"
    },
    {
      id: "software-features-2024",
      year: 2024,
      type: "conference",
      title: "A Data-driven Approach for Mining Software Features Based on Similar App Descriptions and User Reviews Analysis",
      authors: "Khubaib Amjad Alam, Ramsha Ali, Zyena Kamran, Sabeen Fatima, and Irum Inayat",
      venue: "ASE 2024, Tool Demo / Poster Track",
      link: "https://doi.org/10.1145/3691620.3695342"
    },
    {
      id: "classifai-2024",
      year: 2024,
      type: "conference",
      title: "ClassifAI: Automating Issue Reports Classification using Pre-Trained BERT Models",
      authors: "Khubaib Amjad Alam, Ashish Jumani, Harris Aamir, and Muhammad Uzair",
      venue: "NLBSE @ ICSE 2024",
      link: "https://doi.org/10.1145/3643787.3648041"
    }
  ];

  const state = { type: "all", year: "all", search: "" };

  const typeLabel = type => ({
    journal: "Journal Article",
    conference: "Conference Paper",
    workshop: "Workshop Paper"
  }[type] || "Publication");

  const typeIcon = type => ({
    journal: "fa-book",
    conference: "fa-users",
    workshop: "fa-flask"
  }[type] || "fa-file-lines");

  const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));

  function filteredPublications() {
    const query = state.search.trim().toLowerCase();

    return PUBLICATIONS.filter(pub => {
      const typeMatch = state.type === "all" || pub.type === state.type;
      const yearMatch = state.year === "all" || String(pub.year) === String(state.year);
      const searchable = [pub.title, pub.authors, pub.venue, pub.type, pub.year].join(" ").toLowerCase();
      return typeMatch && yearMatch && (!query || searchable.includes(query));
    });
  }

  function updateCounts() {
    document.querySelectorAll("#publications [data-count]").forEach(el => {
      const type = el.dataset.count;
      el.textContent = type === "all"
        ? PUBLICATIONS.length
        : PUBLICATIONS.filter(pub => pub.type === type).length;
    });
  }

  function setActiveButtons(selector, activeTest) {
    document.querySelectorAll(selector).forEach(btn => {
      const active = activeTest(btn);
      btn.classList.toggle("active", active);
      if (btn.hasAttribute("aria-selected")) btn.setAttribute("aria-selected", String(active));
    });
  }

  function groupByYear(items) {
    return items.reduce((groups, item) => {
      (groups[item.year] ||= []).push(item);
      return groups;
    }, {});
  }

  function renderPublications() {
    const container = document.getElementById("pubYearList");
    const empty = document.getElementById("pubEmpty");
    const count = document.getElementById("pubVisibleCount");
    const description = document.getElementById("pubResultDescription");

    if (!container) return;

    const items = filteredPublications();
    if (count) count.textContent = items.length;

    if (description) {
      const bits = [];
      if (state.type !== "all") bits.push(typeLabel(state.type));
      if (state.year !== "all") bits.push(state.year);
      if (state.search.trim()) bits.push(`matching “${state.search.trim()}”`);
      description.textContent = bits.length ? bits.join(" · ") : "Recent research · 2024–2025";
    }

    if (!items.length) {
      container.innerHTML = "";
      if (empty) empty.hidden = false;
      return;
    }

    if (empty) empty.hidden = true;

    const groups = groupByYear(items);
    const years = Object.keys(groups).sort((a, b) => Number(b) - Number(a));

    container.innerHTML = years.map((year, yearIndex) => {
      const papers = groups[year];

      return `
        <section class="pub-year-block ${yearIndex === 0 ? "open" : ""}">
          <button type="button" class="pub-year-header" aria-expanded="${yearIndex === 0}">
            <span class="pub-year-icon"><i class="fa-regular fa-calendar"></i></span>
            <span class="pub-year-copy">
              <span class="pub-year-number">${escapeHTML(year)}</span>
              <span class="pub-year-label">${papers.length} ${papers.length === 1 ? "publication" : "publications"}</span>
            </span>
            <span class="pub-year-count">${papers.length}</span>
            <span class="pub-year-chevron"><i class="fa-solid fa-chevron-right"></i></span>
          </button>

          <div class="pub-year-content">
            <div class="pub-year-inner">
              ${papers.map((pub, index) => `
                <article class="pub-publication-item" style="transition-delay:${index * 65}ms">
                  <div class="pub-publication-icon" aria-hidden="true">
                    <i class="fa-solid ${typeIcon(pub.type)}"></i>
                  </div>

                  <div>
                    <h3 class="pub-publication-title">${escapeHTML(pub.title)}</h3>
                    <p class="pub-publication-authors">${escapeHTML(pub.authors)}</p>
                    <p class="pub-publication-venue">${escapeHTML(pub.venue)}</p>
                    <div class="pub-publication-bottom">
                      <span class="pub-publication-type">
                        <i class="fa-solid ${typeIcon(pub.type)}"></i>
                        ${escapeHTML(typeLabel(pub.type))}
                      </span>
                      <span class="pub-publication-year">${escapeHTML(pub.year)}</span>
                    </div>
                  </div>

                  <button type="button" class="pub-publication-link" data-publication-id="${escapeHTML(pub.id)}">
                    View <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </article>
              `).join("")}
            </div>
          </div>
        </section>
      `;
    }).join("");

    setupYearAccordions();
    setupPublicationButtons();
  }

  function setupYearAccordions() {
    document.querySelectorAll("#publications .pub-year-header").forEach(button => {
      button.onclick = () => {
        const block = button.closest(".pub-year-block");
        if (!block) return;
        const open = block.classList.toggle("open");
        button.setAttribute("aria-expanded", String(open));
      };
    });
  }

  function openModal(publication) {
    const modal = document.getElementById("publicationModal");
    if (!modal) {
      window.open(publication.link, "_blank", "noopener");
      return;
    }

    document.getElementById("publicationModalType").textContent = typeLabel(publication.type);
    document.getElementById("publicationModalYear").textContent = publication.year;
    document.getElementById("publicationModalTitle").textContent = publication.title;
    document.getElementById("publicationModalAuthors").textContent = publication.authors;
    document.getElementById("publicationModalVenue").textContent = publication.venue;
    document.getElementById("publicationModalLink").href = publication.link;
    modal.dataset.publicationId = publication.id;

    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
  }

  function setupPublicationButtons() {
    document.querySelectorAll("#publications .pub-publication-link").forEach(button => {
      button.onclick = () => {
        const publication = PUBLICATIONS.find(pub => pub.id === button.dataset.publicationId);
        if (publication) openModal(publication);
      };
    });
  }

  function closeModal() {
    const modal = document.getElementById("publicationModal");
    if (!modal) return;
    if (typeof modal.close === "function" && modal.open) modal.close();
    else modal.removeAttribute("open");
  }

  function setupModal() {
    const modal = document.getElementById("publicationModal");
    const close = document.getElementById("publicationModalClose");
    if (!modal) return;

    if (close) close.onclick = closeModal;

    modal.onclick = event => {
      if (event.target === modal) closeModal();
    };

    modal.addEventListener("cancel", event => {
      event.preventDefault();
      closeModal();
    });
  }

  async function copyCitation() {
    const modal = document.getElementById("publicationModal");
    const button = document.getElementById("publicationModalCopy");
    if (!modal || !button) return;

    const publication = PUBLICATIONS.find(pub => pub.id === modal.dataset.publicationId);
    if (!publication) return;

    const citation = `${publication.authors}. ${publication.title}. ${publication.venue}.`;

    try {
      await navigator.clipboard.writeText(citation);
      const original = button.innerHTML;
      button.innerHTML = '<i class="fa-solid fa-check"></i> Copied';
      setTimeout(() => { button.innerHTML = original; }, 1600);
    } catch (error) {
      console.warn("AISEL Publications: copy failed.", error);
    }
  }

  function setupCopyCitation() {
    const button = document.getElementById("publicationModalCopy");
    if (button) button.onclick = copyCitation;
  }

  function resetFilters() {
    state.type = "all";
    state.year = "all";
    state.search = "";

    const search = document.getElementById("pubSearch");
    if (search) search.value = "";

    const clear = document.getElementById("pubSearchClear");
    if (clear) clear.classList.remove("visible");

    setActiveButtons("#publications .pub-filter-btn", btn => btn.dataset.filter === "all");
    setActiveButtons("#publications .pub-year-btn", btn => btn.dataset.year === "all");
    renderPublications();
  }

  function setupSearchAndFilters() {
    const input = document.getElementById("pubSearch");
    const clear = document.getElementById("pubSearchClear");

    if (input) {
      input.oninput = () => {
        state.search = input.value;
        if (clear) clear.classList.toggle("visible", Boolean(input.value.trim()));
        renderPublications();
      };
    }

    if (clear) {
      clear.onclick = () => {
        if (input) input.value = "";
        state.search = "";
        clear.classList.remove("visible");
        renderPublications();
        input?.focus();
      };
    }

    document.querySelectorAll("#publications .pub-filter-btn").forEach(button => {
      button.onclick = () => {
        state.type = button.dataset.filter || "all";
        setActiveButtons("#publications .pub-filter-btn", btn => btn === button);
        renderPublications();
      };
    });

    document.querySelectorAll("#publications .pub-year-btn").forEach(button => {
      button.onclick = () => {
        state.year = button.dataset.year || "all";
        setActiveButtons("#publications .pub-year-btn", btn => btn === button);
        renderPublications();
      };
    });

    document.getElementById("pubReset")?.addEventListener("click", resetFilters);
    document.getElementById("pubEmptyReset")?.addEventListener("click", resetFilters);
  }

  function animateCounters() {
    const counters = document.querySelectorAll("#publications .pub-counter");
    if (!counters.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = element => {
      if (element.dataset.animated === "true") return;
      element.dataset.animated = "true";

      const target = Number(element.dataset.target || 0);
      const suffix = element.dataset.suffix || "";

      if (reduced) {
        element.textContent = target.toLocaleString() + suffix;
        return;
      }

      const startTime = performance.now();
      const duration = 1150;

      const frame = now => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = Math.floor(target * eased).toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(frame);
      };

      requestAnimationFrame(frame);
    };

    if (!("IntersectionObserver" in window)) {
      counters.forEach(run);
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          run(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .35 });

    counters.forEach(counter => observer.observe(counter));
  }

  function setupReveal() {
    const elements = document.querySelectorAll("#publications .pub-reveal");
    if (!elements.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      elements.forEach(el => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .08, rootMargin: "0px 0px -30px" });

    elements.forEach(el => observer.observe(el));
  }

  function setupKeyboard() {
    document.addEventListener("keydown", event => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        const search = document.getElementById("pubSearch");
        if (search) {
          event.preventDefault();
          search.focus();
        }
      }
      if (event.key === "Escape") closeModal();
    });
  }

  window.initPublications = function () {
    const section = document.getElementById("publications");
    if (!section || section.dataset.publicationsReady === "true") return;

    section.dataset.publicationsReady = "true";
    updateCounts();
    setupSearchAndFilters();
    setupModal();
    setupCopyCitation();
    setupKeyboard();
    setupReveal();
    animateCounters();
    renderPublications();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", window.initPublications, { once: true });
  } else {
    window.initPublications();
  }
})();
