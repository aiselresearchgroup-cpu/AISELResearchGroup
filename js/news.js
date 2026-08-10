/* ==========================================================
   AISEL — NEWS & ACHIEVEMENTS
   news.js

   Features:
   - News carousel
   - Previous / Next navigation
   - Pagination dots
   - Progress bar
   - Auto-play
   - Pause on hover
   - Pause on focus
   - Keyboard navigation
   - Touch / swipe support
   - Mouse card tilt
   - Card shine effect
   - Scroll reveal
   - Hero entrance animation
   - Active card animation
   - Responsive behavior
   - Reduced-motion support
   - Safe re-initialization
========================================================== */

(function () {

    "use strict";

    /* ==========================================================
       CONFIGURATION
    ========================================================== */

    const CONFIG = {
        autoplayDelay: 5000,
        transitionDuration: 700,
        swipeThreshold: 50,
        tiltMax: 5
    };


    /* ==========================================================
       MAIN INITIALIZER
    ========================================================== */

    function initNews() {

        const newsSection = document.getElementById("news");

        if (!newsSection) {
            console.warn("AISEL News: #news section not found.");
            return;
        }

        /* Prevent duplicate initialization */
        if (newsSection.dataset.newsInitialized === "true") {
            return;
        }

        newsSection.dataset.newsInitialized = "true";


        /* ======================================================
           DOM ELEMENTS
        ====================================================== */

        const track = newsSection.querySelector("#newsTrack");
        const viewport = newsSection.querySelector("#newsWindow");

        const prevButton =
            newsSection.querySelector("#prevNews");

        const nextButton =
            newsSection.querySelector("#nextNews");

        const dotsContainer =
            newsSection.querySelector("#newsDots");

        const progress =
            newsSection.querySelector("#newsProgress");

        const counter =
            newsSection.querySelector("#newsCounter");

        const cards =
            Array.from(
                newsSection.querySelectorAll(".news-card")
            );


        if (!track || !viewport || cards.length === 0) {

            console.warn(
                "AISEL News: Carousel elements are missing."
            );

            return;
        }


        /* ======================================================
           STATE
        ====================================================== */

        let currentIndex = 0;

        let autoplayTimer = null;

        let isPaused = false;

        let touchStartX = 0;

        let touchStartY = 0;

        let touchEndX = 0;

        let touchEndY = 0;

        let resizeTimer = null;


        /* ======================================================
           REDUCED MOTION
        ====================================================== */

        const reducedMotion =
            window.matchMedia &&
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;


        /* ======================================================
           CAROUSEL SETUP
        ====================================================== */

        track.style.willChange = "transform";

        track.style.transition =
            `transform ${CONFIG.transitionDuration}ms cubic-bezier(.22,.61,.36,1)`;


        /* ======================================================
           CREATE PAGINATION DOTS
        ====================================================== */

        function createDots() {

            if (!dotsContainer) {
                return;
            }

            dotsContainer.innerHTML = "";

            cards.forEach(function (card, index) {

                const dot =
                    document.createElement("button");

                dot.type = "button";

                dot.className = "news-dot";

                dot.setAttribute(
                    "aria-label",
                    `Go to news item ${index + 1}`
                );

                dot.setAttribute(
                    "aria-controls",
                    "newsTrack"
                );

                dot.addEventListener(
                    "click",
                    function () {

                        goToSlide(index);

                        restartAutoplay();

                    }
                );

                dotsContainer.appendChild(dot);

            });

        }


        /* ======================================================
           UPDATE DOTS
        ====================================================== */

        function updateDots() {

            if (!dotsContainer) {
                return;
            }

            const dots =
                dotsContainer.querySelectorAll(".news-dot");

            dots.forEach(function (dot, index) {

                const active =
                    index === currentIndex;

                dot.classList.toggle(
                    "active",
                    active
                );

                dot.setAttribute(
                    "aria-current",
                    active ? "true" : "false"
                );

            });

        }


        /* ======================================================
           UPDATE COUNTER
        ====================================================== */

        function updateCounter() {

            if (!counter) {
                return;
            }

            const current =
                String(currentIndex + 1)
                    .padStart(2, "0");

            const total =
                String(cards.length)
                    .padStart(2, "0");

            counter.textContent =
                `${current} / ${total}`;

        }


        /* ======================================================
           UPDATE PROGRESS BAR
        ====================================================== */

        function updateProgress() {

            if (!progress) {
                return;
            }

            const percentage =
                ((currentIndex + 1) / cards.length) * 100;

            progress.style.width =
                `${percentage}%`;

        }


        /* ======================================================
           ACTIVE CARD
        ====================================================== */

        function updateActiveCard() {

            cards.forEach(function (card, index) {

                card.classList.toggle(
                    "active",
                    index === currentIndex
                );

                card.setAttribute(
                    "aria-hidden",
                    index === currentIndex
                        ? "false"
                        : "true"
                );

            });

        }


        /* ======================================================
           MOVE CAROUSEL
        ====================================================== */

        function moveTrack() {

            const activeCard =
                cards[currentIndex];

            if (!activeCard) {
                return;
            }

            /*
             * Using offsetLeft instead of a fixed card width
             * makes the carousel more reliable on responsive
             * layouts.
             */

            const offset =
                activeCard.offsetLeft;

            track.style.transform =
                `translate3d(-${offset}px, 0, 0)`;

        }


        /* ======================================================
           GO TO SLIDE
        ====================================================== */

        function goToSlide(index, animate = true) {

            if (cards.length === 0) {
                return;
            }

            currentIndex =
                (index + cards.length) %
                cards.length;


            if (!animate || reducedMotion) {

                track.style.transition =
                    "none";

            } else {

                track.style.transition =
                    `transform ${CONFIG.transitionDuration}ms cubic-bezier(.22,.61,.36,1)`;

            }


            moveTrack();

            updateDots();

            updateCounter();

            updateProgress();

            updateActiveCard();


            /*
             * Restart transition after reduced-motion /
             * non-animated movement.
             */

            if (!animate || reducedMotion) {

                requestAnimationFrame(function () {

                    track.style.transition =
                        `transform ${CONFIG.transitionDuration}ms cubic-bezier(.22,.61,.36,1)`;

                });

            }

        }


        /* ======================================================
           NEXT SLIDE
        ====================================================== */

        function nextSlide() {

            goToSlide(
                currentIndex + 1
            );

        }


        /* ======================================================
           PREVIOUS SLIDE
        ====================================================== */

        function previousSlide() {

            goToSlide(
                currentIndex - 1
            );

        }


        /* ======================================================
           BUTTON EVENTS
        ====================================================== */

        if (nextButton) {

            nextButton.addEventListener(
                "click",
                function () {

                    nextSlide();

                    restartAutoplay();

                }
            );

        }


        if (prevButton) {

            prevButton.addEventListener(
                "click",
                function () {

                    previousSlide();

                    restartAutoplay();

                }
            );

        }


        /* ======================================================
           KEYBOARD NAVIGATION
        ====================================================== */

        viewport.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "ArrowRight") {

                    event.preventDefault();

                    nextSlide();

                    restartAutoplay();

                }


                if (event.key === "ArrowLeft") {

                    event.preventDefault();

                    previousSlide();

                    restartAutoplay();

                }


                if (event.key === "Home") {

                    event.preventDefault();

                    goToSlide(0);

                    restartAutoplay();

                }


                if (event.key === "End") {

                    event.preventDefault();

                    goToSlide(cards.length - 1);

                    restartAutoplay();

                }

            }
        );


        /* ======================================================
           TOUCH / SWIPE
        ====================================================== */

        viewport.addEventListener(
            "touchstart",
            function (event) {

                if (!event.touches || !event.touches.length) {
                    return;
                }

                touchStartX =
                    event.touches[0].clientX;

                touchStartY =
                    event.touches[0].clientY;

                pauseAutoplay();

            },
            {
                passive: true
            }
        );


        viewport.addEventListener(
            "touchmove",
            function (event) {

                if (!event.touches || !event.touches.length) {
                    return;
                }

                touchEndX =
                    event.touches[0].clientX;

                touchEndY =
                    event.touches[0].clientY;

            },
            {
                passive: true
            }
        );


        viewport.addEventListener(
            "touchend",
            function () {

                const deltaX =
                    touchEndX - touchStartX;

                const deltaY =
                    touchEndY - touchStartY;


                /*
                 * Ignore mostly vertical gestures.
                 */

                if (
                    Math.abs(deltaX) >
                    Math.abs(deltaY)
                ) {

                    if (
                        Math.abs(deltaX) >=
                        CONFIG.swipeThreshold
                    ) {

                        if (deltaX < 0) {

                            nextSlide();

                        } else {

                            previousSlide();

                        }

                    }

                }


                restartAutoplay();

            }
        );


        /* ======================================================
           MOUSE DRAG SUPPORT
        ====================================================== */

        let mouseDown = false;

        let mouseStartX = 0;


        viewport.addEventListener(
            "mousedown",
            function (event) {

                mouseDown = true;

                mouseStartX =
                    event.clientX;

                viewport.classList.add(
                    "is-dragging"
                );

                pauseAutoplay();

            }
        );


        viewport.addEventListener(
            "mouseup",
            function (event) {

                if (!mouseDown) {
                    return;
                }

                mouseDown = false;

                viewport.classList.remove(
                    "is-dragging"
                );


                const distance =
                    event.clientX -
                    mouseStartX;


                if (
                    Math.abs(distance) >=
                    CONFIG.swipeThreshold
                ) {

                    if (distance < 0) {

                        nextSlide();

                    } else {

                        previousSlide();

                    }

                }


                restartAutoplay();

            }
        );


        viewport.addEventListener(
            "mouseleave",
            function () {

                if (!mouseDown) {
                    return;
                }

                mouseDown = false;

                viewport.classList.remove(
                    "is-dragging"
                );

                restartAutoplay();

            }
        );


        /* ======================================================
           AUTOPLAY
        ====================================================== */

        function startAutoplay() {

            if (reducedMotion) {
                return;
            }

            if (autoplayTimer) {
                clearInterval(autoplayTimer);
            }

            autoplayTimer =
                setInterval(
                    function () {

                        if (!isPaused) {

                            nextSlide();

                        }

                    },
                    CONFIG.autoplayDelay
                );

        }


        function pauseAutoplay() {

            isPaused = true;

        }


        function resumeAutoplay() {

            isPaused = false;

        }


        function restartAutoplay() {

            if (reducedMotion) {
                return;
            }

            if (autoplayTimer) {

                clearInterval(
                    autoplayTimer
                );

            }

            startAutoplay();

        }


        /* ======================================================
           PAUSE WHEN MOUSE IS OVER CAROUSEL
        ====================================================== */

        viewport.addEventListener(
            "mouseenter",
            function () {

                pauseAutoplay();

            }
        );


        viewport.addEventListener(
            "mouseleave",
            function () {

                resumeAutoplay();

            }
        );


        /* ======================================================
           PAUSE WHEN FOCUSED
        ====================================================== */

        viewport.addEventListener(
            "focusin",
            function () {

                pauseAutoplay();

            }
        );


        viewport.addEventListener(
            "focusout",
            function () {

                resumeAutoplay();

            }
        );


        /* ======================================================
           CARD 3D TILT
        ====================================================== */

        function enableCardTilt() {

            if (reducedMotion) {
                return;
            }


            cards.forEach(function (card) {

                card.addEventListener(
                    "mousemove",
                    function (event) {

                        const rect =
                            card.getBoundingClientRect();


                        const x =
                            event.clientX -
                            rect.left;


                        const y =
                            event.clientY -
                            rect.top;


                        const centerX =
                            rect.width / 2;


                        const centerY =
                            rect.height / 2;


                        const rotateY =
                            ((x - centerX) /
                                centerX) *
                            CONFIG.tiltMax;


                        const rotateX =
                            ((centerY - y) /
                                centerY) *
                            CONFIG.tiltMax;


                        card.style.transform =
                            `perspective(1100px)
                             rotateX(${rotateX}deg)
                             rotateY(${rotateY}deg)
                             translateY(-6px)`;



                        /*
                         * Move shine according to pointer.
                         */

                        const shine =
                            card.querySelector(
                                ".news-card-shine"
                            );


                        if (shine) {

                            shine.style.setProperty(
                                "--mouse-x",
                                `${x}px`
                            );

                            shine.style.setProperty(
                                "--mouse-y",
                                `${y}px`
                            );

                            shine.style.opacity =
                                "1";

                        }

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    function () {

                        card.style.transform =
                            "";

                        const shine =
                            card.querySelector(
                                ".news-card-shine"
                            );


                        if (shine) {

                            shine.style.opacity =
                                "";

                        }

                    }
                );

            });

        }


        /* ======================================================
           HERO ANIMATION
        ====================================================== */

        function initHeroAnimation() {

            const hero =
                newsSection.querySelector(
                    ".news-hero"
                );

            if (!hero) {
                return;
            }


            const content =
                hero.querySelector(
                    ".news-hero-content"
                );

            const kicker =
                hero.querySelector(
                    ".news-hero-kicker"
                );

            const title =
                hero.querySelector(
                    "h1"
                );

            const divider =
                hero.querySelector(
                    ".news-hero-divider"
                );

            const description =
                hero.querySelector(
                    ".news-hero-content > p"
                );

            const tags =
                hero.querySelector(
                    ".news-hero-tags"
                );

            const button =
                hero.querySelector(
                    ".news-hero-button"
                );


            if (reducedMotion) {

                [
                    content,
                    kicker,
                    title,
                    divider,
                    description,
                    tags,
                    button
                ].forEach(function (element) {

                    if (element) {

                        element.style.opacity = "1";

                    }

                });

                return;

            }


            /*
             * Initial state
             */

            if (content) {

                content.style.opacity =
                    "1";

            }


            const elements = [
                kicker,
                title,
                divider,
                description,
                tags,
                button
            ].filter(Boolean);


            elements.forEach(function (element) {

                element.style.opacity =
                    "0";

                element.style.transform =
                    "translateY(25px)";

            });


            /*
             * Use GSAP if available.
             * Otherwise use normal CSS transitions.
             */

            if (
                typeof window.gsap !==
                "undefined"
            ) {

                const timeline =
                    window.gsap.timeline();


                timeline
                    .to(kicker, {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power3.out"
                    })
                    .to(title, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out"
                    }, "-=0.35")
                    .to(divider, {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power2.out"
                    }, "-=0.4")
                    .to(description, {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        ease: "power3.out"
                    }, "-=0.25")
                    .to(tags, {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power3.out"
                    }, "-=0.3")
                    .to(button, {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "back.out(1.5)"
                    }, "-=0.25");

            } else {

                elements.forEach(function (
                    element,
                    index
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
                        index * 120
                    );

                });

            }

        }


        /* ======================================================
           SCROLL REVEAL
        ====================================================== */

        function initRevealAnimations() {

            const revealElements =
                newsSection.querySelectorAll(
                    ".reveal"
                );


            if (
                !("IntersectionObserver" in window)
            ) {

                revealElements.forEach(
                    function (element) {

                        element.classList.add(
                            "is-visible"
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
                                        "is-visible"
                                    );

                                    observer.unobserve(
                                        entry.target
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold: 0.12,
                        rootMargin:
                            "0px 0px -60px 0px"
                    }
                );


            revealElements.forEach(
                function (element) {

                    observer.observe(
                        element
                    );

                }
            );

        }


        /* ======================================================
           HERO PARALLAX EFFECT
        ====================================================== */

        function initHeroParallax() {

            if (reducedMotion) {
                return;
            }


            const hero =
                newsSection.querySelector(
                    ".news-hero"
                );


            if (!hero) {
                return;
            }


            const grid =
                hero.querySelector(
                    ".news-hero-grid"
                );

            const orb1 =
                hero.querySelector(
                    ".news-hero-orb-1"
                );

            const orb2 =
                hero.querySelector(
                    ".news-hero-orb-2"
                );


            let ticking = false;


            function updateParallax() {

                const rect =
                    hero.getBoundingClientRect();


                const viewportHeight =
                    window.innerHeight;


                /*
                 * Only animate while hero is visible.
                 */

                if (
                    rect.bottom < 0 ||
                    rect.top > viewportHeight
                ) {

                    ticking = false;

                    return;

                }


                const progress =
                    Math.max(
                        -1,
                        Math.min(
                            1,
                            rect.top /
                            viewportHeight
                        )
                    );


                if (grid) {

                    grid.style.transform =
                        `translate3d(0, ${progress * 25}px, 0)`;

                }


                if (orb1) {

                    orb1.style.marginTop =
                        `${progress * -35}px`;

                }


                if (orb2) {

                    orb2.style.marginTop =
                        `${progress * 20}px`;

                }


                ticking = false;

            }


            window.addEventListener(
                "scroll",
                function () {

                    if (!ticking) {

                        window.requestAnimationFrame(
                            updateParallax
                        );

                        ticking = true;

                    }

                },
                {
                    passive: true
                }
            );

        }


        /* ======================================================
           NEWS CARD STAGGER
        ====================================================== */

        function initCardStagger() {

            if (reducedMotion) {
                return;
            }


            cards.forEach(
                function (card, index) {

                    card.style.setProperty(
                        "--news-index",
                        index
                    );

                }
            );

        }


        /* ======================================================
           RESIZE HANDLER
        ====================================================== */

        function handleResize() {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    function () {

                        /*
                         * Recalculate carousel position
                         * after responsive layout changes.
                         */

                        goToSlide(
                            currentIndex,
                            false
                        );

                    },
                    150
                );

        }


        window.addEventListener(
            "resize",
            handleResize
        );


        /* ======================================================
           VISIBILITY API
           Pause carousel when browser tab is hidden.
        ====================================================== */

        document.addEventListener(
            "visibilitychange",
            function () {

                if (
                    document.hidden
                ) {

                    pauseAutoplay();

                } else {

                    resumeAutoplay();

                }

            }
        );


        /* ======================================================
           HERO BUTTON SMOOTH SCROLL
        ====================================================== */

        const heroButton =
            newsSection.querySelector(
                ".news-hero-button"
            );


        if (heroButton) {

            heroButton.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        heroButton.getAttribute(
                            "href"
                        );


                    if (
                        targetId &&
                        targetId.startsWith("#")
                    ) {

                        const target =
                            document.querySelector(
                                targetId
                            );


                        if (target) {

                            event.preventDefault();


                            target.scrollIntoView({
                                behavior:
                                    reducedMotion
                                        ? "auto"
                                        : "smooth",
                                block: "start"
                            });

                        }

                    }

                }
            );

        }


        /* ======================================================
           NEWS LINKS
           Prevent empty "#" links from jumping to top.
        ====================================================== */

        const newsLinks =
            newsSection.querySelectorAll(
                ".news-link"
            );


        newsLinks.forEach(
            function (link) {

                const href =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !href ||
                    href === "#"
                ) {

                    link.addEventListener(
                        "click",
                        function (event) {

                            event.preventDefault();

                        }
                    );

                }

            }
        );


        /* ======================================================
           INITIALIZE
        ====================================================== */

        createDots();

        updateActiveCard();

        updateDots();

        updateCounter();

        updateProgress();

        /*
         * Wait one frame so browser has calculated
         * card dimensions correctly.
         */

        requestAnimationFrame(
            function () {

                goToSlide(
                    0,
                    false
                );

            }
        );


        initHeroAnimation();

        initRevealAnimations();

        initHeroParallax();

        initCardTilt();

        initCardStagger();


        if (!reducedMotion) {

            startAutoplay();

        }


        /* ======================================================
           DEBUG MESSAGE
        ====================================================== */

        console.log(
            `AISEL News initialized successfully — ${cards.length} news items.`
        );

    }


    /* ==========================================================
       EXPOSE GLOBAL FUNCTION

       index.html already calls:

       initNews();

       Therefore this must be available globally.
    ========================================================== */

    window.initNews = initNews;


    /* ==========================================================
       AUTOMATIC INITIALIZATION FALLBACK

       If initNews() is not called by index.html, initialize
       automatically after DOM is ready.
    ========================================================== */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            function () {

                /*
                 * Give the main site's boot process
                 * a chance to initialize first.
                 */

                setTimeout(
                    function () {

                        if (
                            document.getElementById(
                                "news"
                            )
                        ) {

                            initNews();

                        }

                    },
                    50
                );

            }
        );

    } else {

        setTimeout(
            function () {

                if (
                    document.getElementById(
                        "news"
                    )
                ) {

                    initNews();

                }

            },
            50
        );

    }

})();