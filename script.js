(() => {
    "use strict";

    const body = document.body;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    body.classList.add("js-enabled");

    // Mantém o ano do rodapé sempre atualizado.
    document.querySelectorAll("[data-year]").forEach((element) => {
        element.textContent = new Date().getFullYear();
    });

    // Destaca a página atual e mantém a navegação acessível.
    const currentPage = body.dataset.page;
    document.querySelectorAll("[data-page-link]").forEach((link) => {
        if (link.dataset.pageLink === currentPage) {
            link.setAttribute("aria-current", "page");
        }
    });

    // Menu mobile com suporte a teclado e fechamento automático.
    const menuToggle = document.querySelector(".menu-toggle");
    const siteNav = document.querySelector(".site-nav");

    const closeMenu = () => {
        if (!menuToggle || !siteNav) return;
        menuToggle.setAttribute("aria-expanded", "false");
        siteNav.classList.remove("is-open");
    };

    if (menuToggle && siteNav) {
        menuToggle.addEventListener("click", () => {
            const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
            menuToggle.setAttribute("aria-expanded", String(!isOpen));
            siteNav.classList.toggle("is-open", !isOpen);
        });

        siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && siteNav.classList.contains("is-open")) {
                closeMenu();
                menuToggle.focus();
            }
        });
    }

    // Cabeçalho reativo e indicador de progresso da rolagem.
    const header = document.querySelector(".site-header");
    const progress = document.createElement("div");
    progress.className = "site-progress";
    progress.setAttribute("aria-hidden", "true");
    progress.innerHTML = '<div class="site-progress-bar"></div>';
    body.appendChild(progress);
    const progressBar = progress.querySelector(".site-progress-bar");

    const updateScrollState = () => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percentage = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
        progressBar.style.width = `${percentage}%`;
        header?.classList.toggle("is-scrolled", window.scrollY > 12);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    // Revela os elementos conforme entram na viewport.
    const revealElements = document.querySelectorAll("[data-reveal]");
    revealElements.forEach((element) => {
        const delay = Number(element.dataset.delay || 0);
        element.style.setProperty("--reveal-delay", `${delay}ms`);
    });

    if (reducedMotion || !("IntersectionObserver" in window)) {
        revealElements.forEach((element) => element.classList.add("is-visible"));
    } else {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -40px" });

        revealElements.forEach((element) => revealObserver.observe(element));
    }

    // Transição suave entre páginas internas.
    document.querySelectorAll('a[href]').forEach((link) => {
        const href = link.getAttribute("href");
        if (!href || href.startsWith("#") || href.startsWith("mailto:") || link.target === "_blank") return;

        let destination;
        try {
            destination = new URL(href, window.location.href);
        } catch {
            return;
        }

        if (destination.origin !== window.location.origin) return;

        link.addEventListener("click", (event) => {
            if (reducedMotion || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            event.preventDefault();
            body.classList.add("is-exiting");
            window.setTimeout(() => {
                window.location.href = destination.href;
            }, 180);
        });
    });

    // Filtro de certificações por status.
    const filterButtons = document.querySelectorAll("[data-filter]");
    const certificationCards = document.querySelectorAll("[data-status]");
    const certificationCount = document.querySelector("[data-cert-count]");

    const updateCertificationCount = (visibleCards) => {
        if (certificationCount) {
            certificationCount.textContent = `${visibleCards} ${visibleCards === 1 ? "item" : "itens"}`;
        }
    };

    if (filterButtons.length && certificationCards.length) {
        const filterCards = (filter) => {
            let visibleCards = 0;

            certificationCards.forEach((card) => {
                const shouldShow = filter === "all" || card.dataset.status === filter;
                card.hidden = !shouldShow;
                if (shouldShow) {
                    visibleCards += 1;
                    card.classList.remove("is-visible");
                    window.requestAnimationFrame(() => card.classList.add("is-visible"));
                }
            });

            updateCertificationCount(visibleCards);
        };

        filterButtons.forEach((button) => {
            button.addEventListener("click", () => {
                filterButtons.forEach((item) => {
                    item.classList.toggle("is-active", item === button);
                    item.setAttribute("aria-pressed", String(item === button));
                });
                filterCards(button.dataset.filter);
            });
        });

        updateCertificationCount(certificationCards.length);
    }
})();
