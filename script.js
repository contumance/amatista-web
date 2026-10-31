/**
 * Amatista Efectos - Core Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navbar Effect with Glassmorphism switch
    const navbar = document.getElementById('navbar');

    if (navbar && !navbar.classList.contains('always-scrolled')) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 1.5. Mobile Fullscreen Menu Logic
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn && navbar) {
        mobileMenuBtn.addEventListener('click', () => {
            navbar.classList.toggle('nav-active');
            document.body.style.overflow = navbar.classList.contains('nav-active') ? 'hidden' : '';

            // Reemplazar icono si está activo o no
            if (navbar.classList.contains('nav-active')) {
                mobileMenuBtn.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
            } else {
                mobileMenuBtn.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
            }
        });

        const navItems = document.querySelectorAll('.nav-links a, .nav-right a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navbar.classList.remove('nav-active');
                document.body.style.overflow = '';
                mobileMenuBtn.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
            });
        });
    }

    // 2. Intersection Observer for Fade-in effects
    // threshold: 0 garantiza que secciones muy altas en móviles (como #plugins) siempre disparen is-visible
    const faders = document.querySelectorAll('.fade-in-section');

    if ('IntersectionObserver' in window) {
        const appearOptions = {
            threshold: 0,
            rootMargin: "0px 0px -20px 0px"
        };

        const appearOnScroll = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, appearOptions);

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });
    } else {
        faders.forEach(fader => fader.classList.add('is-visible'));
    }

    // 3. Smooth scrolling for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // Si el href cambió dinámicamente y ya no es un ancla, no hacemos nada
            if (!targetId || !targetId.startsWith('#')) return;

            e.preventDefault();
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Unified Catalog Filtering & Tabs Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const catalogPane = document.getElementById('catalog-pane');
    const pluginCards = document.querySelectorAll('.plugin-card[data-categories]');
    const pluginFamilies = document.querySelectorAll('.plugin-family[data-family-cats]');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const targetCategory = btn.getAttribute('data-target');

            if (pluginCards.length > 0 && catalogPane) {
                catalogPane.style.animation = 'none';
                void catalogPane.offsetWidth; // trigger reflow for smooth fade animation
                catalogPane.style.animation = 'fadeInTab 0.35s ease forwards';

                pluginCards.forEach(card => {
                    const cats = (card.getAttribute('data-categories') || '').split(/\s+/);
                    if (cats.includes(targetCategory)) {
                        card.classList.remove('is-hidden');
                    } else {
                        card.classList.add('is-hidden');
                    }
                });

                pluginFamilies.forEach(family => {
                    const fCats = (family.getAttribute('data-family-cats') || '').split(/\s+/);
                    if (fCats.includes(targetCategory)) {
                        family.classList.remove('is-hidden');
                    } else {
                        family.classList.add('is-hidden');
                    }
                });
            }
        });
    });

    // Correo de contacto
    const EMAIL_ADDRESS = "orders@amatista-efectos.online";

    // 5. Language Switcher Logic
    const translations = {
        es: {
            // Navbar
            "nav-about": "Sobre Amatista",
            "nav-plugins": "Plugins",
            "nav-media": "Media",
            "nav-cta": "Ver Catálogo",
            "nav-pact": "Pacto Creativo",
            // Hero
            "hero-eyebrow": "DSP AUDIO ENGINEERING · MONTEVIDEO, UY",
            "hero-title": "SONIDO <span class=\"highlight\">EN ESTADO PURO</span>",
            "hero-subtitle": "Herramientas precisas inspiradas en hardware real, diseñadas para esculpir tonos modernos y afinaciones bajas definidas.",
            "hero-btn-primary": "Descubrir Plugins",
            "hero-btn-secondary": "Conocer la Marca",
            "hero-spec-1": "Oversampling hasta 4x",
            "hero-spec-3": "Respuesta en Tiempo Real",
            "hero-spec-4": "Sin DRM Invasivo",
            // About
            "about-eyebrow": "NUESTRA FILOSOFÍA",
            "about-title": "Sobre <span class=\"highlight\">Amatista</span>",
            "about-p1": "¡Hola! Soy Álvaro, creador de Amatista Efectos. Desde Montevideo, Uruguay, combino mi experiencia en el desarrollo de sistemas con mi mayor pasión: el tono de la guitarra eléctrica en el metal. Como músico, comprendo la dedicación y el perfeccionismo que requiere la búsqueda del tono ideal.",
            "about-p2": "Amatista Efectos nace en la intersección de estos dos mundos, impulsado por una necesidad personal: crear las herramientas que yo mismo buscaba como músico. A través del Procesamiento Digital de Señales (DSP), encontré el medio exacto para materializar esas ideas en soluciones diseñadas para las exigencias de la producción actual. Más que algoritmos, estos plugins representan mi visión sobre el tono moderno.",
            "about-p3": "La evolución de este proyecto no ocurre en solitario. Agradezco profundamente a los músicos y testers que colaboran en cada desarrollo. Su nivel de exigencia y feedback constante son el motor de nuestra mejora continua, garantizando que cada herramienta ofrezca una experiencia sonora superior.",
            // Plugins
            "plugins-eyebrow": "CATÁLOGO DE SOFTWARE",
            "plugins-title": "Nuestros <span class=\"highlight\">Plugins</span>",
            "tab-todos": "Todos",
            "tab-guitar": "Guitarra",
            "tab-bass": "Bajo",
            "tab-collab": "Colaboraciones",
            "tab-free-title": "Gratis",
            "family-collab": "Colaboraciones <span class=\"highlight\">Especiales</span>",
            "family-impulso": "Familia <span class=\"highlight\">Impulso Primario</span>",
            "family-frecuencia-base": "Familia <span class=\"highlight\">Frecuencia Base</span>",
            "tag-free": "Gratis",
            "tag-paid": "Premium",
            "btn-buy": "Adquirir",
            "btn-download": "Descargar Gratis",
            "btn-learn-more": "Ver más",
            "btn-back": "← Volver al catálogo",
            "btn-read-manual": "Leer manual de usuario",
            "plugin-features-title": "Características Principales",
            "zoom-hint": "🔍 Clic para ampliar",

            "modal-donate-title": "Apoyar el Proyecto",
            "modal-donate-desc": "Tu apoyo me permite seguir desarrollando herramientas de audio de alta calidad y mantener muchas de ellas accesibles.",

            "modal-prex": "Transferencia PREX",
            "modal-prex-desc": "Transferencia directa (LATAM).",
            "modal-prex-name": "A nombre de Álvaro (Cuenta Uruguay)",

            "desc-carbonado": "Ideal en contexto de afinaciones bajas hi-gain. Empuje transparente para limpiar y apretar tu señal antes del amplificador. Endurece el ataque y mejora la definición.",
            "feat-carb-1": "+20dB de limpieza pura",
            "feat-carb-2": "Ecualizador de un solo botón",

            "desc-impulsoprimario": "Impulso Primario es el ecosistema de ganancia de AMATISTA, con un enfoque moderno y versátil.",
            "feat-impulsoprimario-1": "Arquitectura coherente",
            "feat-impulsoprimario-2": "Cada pedal cumple su función",

            "desc-onix": "Inspirado en lo clásico pero ajustado para rigs modernos. Empuje y presencia. Saturación para riffs articulados y leads definidos.",
            "feat-onix-1": "Filtro 'Tight' variable",
            "feat-onix-2": "Modelador de la señal, recorte controlado de low end, respuesta dinámica natural",

            "desc-obsidiana": "Fuzz denso y masivo. Un muro de sonido oscuro e impenetrable para afinaciones extremadamente graves.",
            "feat-obs-1": "Sustain infinito",
            "feat-obs-2": "Moldea el caos con intención",

            "desc-amatista": "La distorsión definitiva. Corte afilado, agudos precisos y el tono insignia de la marca.",
            "feat-ama-1": "Preamp + Power Stage condensado en un pedal",
            "feat-ama-2": "Tono moderno, claridad y presencia",

            "desc-granate": "Saturación moderna con procesamiento paralelo: mantiene el low-end sólido mientras aporta carácter y textura al rango medio.",
            "feat-granate-1": "Mezcla controlada (Clean/Drive)",
            "feat-granate-2": "Definición en afinaciones graves",

            "desc-syko": "La colaboración definitiva con SYKO Cabs. Un ecosistema completo, 4 amps, cabs, efectos y un set de herramientas suficiente para construir tu sonido moderno de guitarras, tanto en estudio como en vivo.",
            "feat-syko-1": "Suite completa (Plugin y Standalone)",
            "feat-syko-2": "Versatilidad total desde tonos cleans hasta highgain",

            "os-win-only": "Solo Windows (macOS próximamente)",
            "os-win-mac": "Windows / macOS (Unsigned)",

            "coming-soon-title": "Próximamente",
            "coming-soon-bass": "Estamos forjando las herramientas de frecuencias subgraves.",
            "coming-soon-collab": "Alianzas con artistas referentes del sonido moderno en camino.",

            // Media
            "media-eyebrow": "DEMOS & REVIEWS",
            "media-title": "En <span class=\"highlight\">Acción</span>",
            // Pact
            "pact-eyebrow": "MANIFIESTO DE ÉTICA",
            "pact-title": "Nuestro <span class=\"highlight\">Pacto Creativo</span>",
            "pact-desc": "Creemos en la transparencia y el respeto por tu herramienta de trabajo. Sin suscripciones, sin DRM invasivo, sin obsolescencia programada. Herramientas que compras una vez y son tuyas para siempre.",
            "pact-btn": "Leer el Pacto Completo",
            // Footer
            "footer-desc": "Efectos digitales boutique.",
            "footer-nav": "Navegación",
            "footer-home": "Inicio",
            "footer-legal": "Legal & Help",
            "footer-docs": "Manuales y Docs",
            "footer-terms": "Términos de Servicio",
            "footer-privacy": "Privacidad",
            "footer-support": `Soporte: ${EMAIL_ADDRESS}`,
            "footer-copy": "&copy; 2026 Amatista Efectos. Todos los derechos reservados.",
            "footer-donate": "Apoyar a Amatista",
            "footer-pact": "Pacto Creativo"
        },
        en: {
            // Navbar
            "nav-about": "About Amatista",
            "nav-plugins": "Plugins",
            "nav-media": "Media",
            "nav-cta": "View Catalog",
            "nav-pact": "Creative Pact",
            // Hero
            "hero-eyebrow": "DSP AUDIO ENGINEERING · MONTEVIDEO, UY",
            "hero-title": "PURE <span class=\"highlight\">SOUND</span>",
            "hero-subtitle": "Precise tools inspired by real hardware, designed to sculpt modern tones and low tunings without compromise.",
            "hero-btn-primary": "Discover Plugins",
            "hero-btn-secondary": "Know the Brand",
            "hero-spec-1": "Up to 4x Oversampling",
            "hero-spec-3": "Real-Time Response",
            "hero-spec-4": "Zero Invasive DRM",
            // About
            "about-eyebrow": "OUR PHILOSOPHY",
            "about-title": "About <span class=\"highlight\">Amatista</span>",
            "about-p1": "Hello! I'm Álvaro, creator of Amatista Efectos. From Montevideo, Uruguay, I combine my experience in systems development with my greatest passion: electric guitar tone in metal. As a musician, I understand the dedication and perfectionism required in the search for the ideal tone.",
            "about-p2": "Amatista Efectos is born at the intersection of these two worlds, driven by a personal need: to create the tools I myself was looking for as a musician. Through Digital Signal Processing (DSP), I found the exact medium to materialize those ideas into solutions designed for the demands of current production. More than just algorithms, these plugins represent my vision of modern tone.",
            "about-p3": "The evolution of this project does not happen alone. I deeply thank the musicians and testers who collaborate on each development. Their high standards and constant feedback are the engine of our continuous improvement, ensuring that every tool offers a superior sonic experience.",
            // Plugins
            "plugins-eyebrow": "SOFTWARE CATALOG",
            "plugins-title": "Our <span class=\"highlight\">Plugins</span>",
            "tab-todos": "All",
            "tab-guitar": "Guitar",
            "tab-bass": "Bass",
            "tab-collab": "Collaborations",
            "tab-free-title": "Free",
            "family-collab": "Special <span class=\"highlight\">Collaborations</span>",
            "family-impulso": "Family <span class=\"highlight\">Impulso Primario</span>",
            "family-frecuencia-base": "Family <span class=\"highlight\">Frecuencia Base</span>",
            "tag-free": "Free",
            "tag-paid": "Premium",
            "btn-buy": "Get it",
            "btn-download": "Download Free",
            "btn-learn-more": "Learn more",
            "btn-back": "← Back to catalog",
            "btn-read-manual": "Read user manual",
            "plugin-features-title": "Key Features",
            "zoom-hint": "🔍 Click to enlarge",

            "modal-donate-title": "Support the Project",
            "modal-donate-desc": "Your support allows me to continue developing high-quality audio tools and keeping many of them accessible.",

            "modal-prex": "PREX Transfer",
            "modal-prex-desc": "Direct transfer (LATAM region).",
            "modal-prex-name": "In the name of Álvaro (Uruguay Account)",

            "desc-carbonado": "Ideal for low tunings in high-gain contexts. A transparent push to tighten and clean up your signal before the amplifier. It hardens the attack and enhances definition.",
            "feat-carb-1": "+20dB of pure clean boost",
            "feat-carb-2": "One-knob EQ design",

            "desc-impulsoprimario": "Impulso Primario is the AMATISTA gain ecosystem, with a modern and versatile approach.",
            "feat-impulsoprimario-1": "Coherent architecture",
            "feat-impulsoprimario-2": "Each pedal serves its purpose",

            "desc-onix": "Inspired by the classics, but tuned for modern rigs. Push and presence. Saturation for articulate riffs and defined leads.",
            "feat-onix-1": "Variable 'Tight' filter",
            "feat-onix-2": "Signal sculptor with controlled low-end trimming and a natural dynamic response.",

            "desc-obsidiana": "Dense and massive fuzz. A dark and impenetrable wall of sound for extremely low tunings.",
            "feat-obs-1": "Infinite sustain",
            "feat-obs-2": "Shape the chaos with intention",

            "desc-amatista": "The ultimate distortion. Razor-sharp cut, precise highs, and the brand's flagship tone.",
            "feat-ama-1": "Preamp + Power Stage condensed in one pedal",
            "feat-ama-2": "Modern tone, clarity and presence",

            "desc-granate": "Modern saturation with parallel processing: maintains a solid low-end while adding character and texture to the mid-range.",
            "feat-granate-1": "Controlled blend (Clean/Drive)",
            "feat-granate-2": "Definition in low tunings",

            "desc-syko": "The ultimate collaboration with SYKO Cabs. A complete ecosystem, 4 amps, cabs, effects and an essential toolset to build your modern guitar tone, both in the studio and live.",
            "feat-syko-1": "Complete suite (Plugin and Standalone)",
            "feat-syko-2": "Total versatility from clean tones to high gain",

            "os-win-only": "Windows only (macOS coming soon)",
            "os-win-mac": "Windows / macOS (Unsigned)",

            "coming-soon-title": "Coming Soon",
            "coming-soon-bass": "We are forging the sub-bass frequency tools.",
            "coming-soon-collab": "Alliances with modern guitar tone artists on the way.",

            // Media
            "media-eyebrow": "DEMOS & REVIEWS",
            "media-title": "In <span class=\"highlight\">Action</span>",
            // Pact
            "pact-eyebrow": "ETHICAL MANIFESTO",
            "pact-title": "Our <span class=\"highlight\">Creative Pact</span>",
            "pact-desc": "We believe in transparency and respect for your working tools. No subscriptions, no invasive DRM, no planned obsolescence. Tools you buy once and own forever.",
            "pact-btn": "Read Full Pact",
            // Footer
            "footer-desc": "Boutique digital effects.",
            "footer-nav": "Navigation",
            "footer-home": "Home",
            "footer-legal": "Legal & Help",
            "footer-docs": "Manuals & Docs",
            "footer-terms": "Terms of Service",
            "footer-privacy": "Privacy",
            "footer-support": `Support: ${EMAIL_ADDRESS}`,
            "footer-copy": "&copy; 2026 Amatista Efectos. All rights reserved.",
            "footer-donate": "Support Amatista",
            "footer-pact": "Creative Pact"
        }
    };

    const langBtns = document.querySelectorAll('.lang-btn');

    function setLanguage(lang) {
        langBtns.forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        document.documentElement.lang = lang;
        try {
            localStorage.setItem('amatista_lang', lang);
        } catch (e) {}

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const translationKey = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][translationKey]) {
                el.innerHTML = translations[lang][translationKey];
            }
        });
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
        });
    });

    // Initialize language from localStorage or default to 'es'
    let initialLang = 'es';
    try {
        initialLang = localStorage.getItem('amatista_lang') || 'es';
    } catch (e) {}
    setLanguage(initialLang);

    // 6. Hero Parallax & Particle System
    const bgCanvas = document.getElementById('parallax-bg');
    const fgCanvas = document.getElementById('hero-particles');

    if (bgCanvas && fgCanvas) {
        const bgCtx = bgCanvas.getContext('2d');
        const fgCtx = fgCanvas.getContext('2d');
        let width, height;
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let targetMouseX = mouseX;
        let targetMouseY = mouseY;

        function resize() {
            const hero = document.querySelector('.hero');
            width = bgCanvas.width = fgCanvas.width = window.innerWidth;
            height = bgCanvas.height = fgCanvas.height = hero.offsetHeight;
        }

        window.addEventListener('resize', resize);
        resize();

        document.addEventListener('mousemove', (e) => {
            targetMouseX = e.clientX;
            targetMouseY = e.clientY;
        });

        class Particle {
            constructor(isForeground) {
                this.isForeground = isForeground;
                this.reset();
                this.y = Math.random() * height;
            }

            reset() {
                this.x = Math.random() * width;
                this.y = height + Math.random() * 100;
                this.size = this.isForeground ? Math.random() * 2 + 1 : Math.random() * 5 + 3;
                this.speedY = this.isForeground ? -(Math.random() * 0.4 + 0.1) : -(Math.random() * 0.2 + 0.05);
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.opacity = this.isForeground ? Math.random() * 0.4 + 0.1 : Math.random() * 0.08 + 0.02;

                const colors = ['138, 43, 226', '176, 102, 255', '200, 200, 255', '255, 255, 255'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.parallaxFactor = this.isForeground ? 0.04 : 0.015;
            }

            update(mx, my) {
                this.y += this.speedY;
                this.x += this.speedX;

                if (this.y < -50 || this.x < -50 || this.x > width + 50) {
                    this.reset();
                }

                const dx = (mx - width / 2) * this.parallaxFactor;
                const dy = (my - height / 2) * this.parallaxFactor;

                this.drawX = this.x - dx;
                this.drawY = this.y - dy;
            }

            draw(ctx) {
                ctx.beginPath();
                ctx.arc(this.drawX, this.drawY, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
                ctx.fill();
            }
        }

        const bgParticles = Array.from({ length: 30 }, () => new Particle(false));
        const fgParticles = Array.from({ length: 45 }, () => new Particle(true));

        let isAnimating = true;
        const heroSection = document.querySelector('.hero');

        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                isAnimating = entry.isIntersecting;
                if (isAnimating) {
                    requestAnimationFrame(animate);
                }
            });
        }, { threshold: 0 });

        if (heroSection) heroObserver.observe(heroSection);

        function animate() {
            if (!isAnimating) return;

            mouseX += (targetMouseX - mouseX) * 0.05;
            mouseY += (targetMouseY - mouseY) * 0.05;

            bgCtx.clearRect(0, 0, width, height);
            fgCtx.clearRect(0, 0, width, height);

            bgParticles.forEach(p => {
                p.update(mouseX, mouseY);
                p.draw(bgCtx);
            });

            fgParticles.forEach(p => {
                p.update(mouseX, mouseY);
                p.draw(fgCtx);
            });

            requestAnimationFrame(animate);
        }

        animate();
    }

    // =========================================
    // RENDERIZADO DINÁMICO DE VIDEOS (YOUTUBE)
    // =========================================
    const youtubeVideos = [
        {
            id: "NYB2dtHThKo",
            title: "GFF Impulso Primario (Review)"
        },
        {
            id: "gN-I8rfDbWw",
            title: "Wil Carbonado (Review)"
        },
        {
            id: "HSu0zbJ30ag",
            title: "Tazrus Carbonado (Demo)"
        },
        {
            id: "BYmKtey9NVg",
            title: "Wil Onix (Demo)"
        },
        {
            id: "aB9-BHBiv2M",
            title: "Wil Obsidiana (Demo)"
        },
        {
            id: "Xu1i8GOV_Lg",
            title: "Wil Amatista (Demo)"
        }
    ];

    function renderizarVideos() {
        const gallery = document.getElementById('youtube-gallery');

        if (!gallery) return;

        let HTMLContenido = '';

        youtubeVideos.forEach(video => {
            HTMLContenido += `
                <div class="video-container lazy-video" data-videoid="${video.id}" data-title="${video.title}">
                    <div class="video-placeholder" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(20, 20, 24, 0.35) 100%), url('https://img.youtube.com/vi/${video.id}/sddefault.jpg');">
                        <div class="play-btn">▶</div>
                        <p>${video.title}</p>
                    </div>
                </div>
            `;
        });

        gallery.innerHTML = HTMLContenido;

        document.querySelectorAll('.lazy-video').forEach(videoNode => {
            videoNode.addEventListener('click', function () {
                const vid = this.dataset.videoid;
                const vtit = this.dataset.title;
                this.innerHTML = `
                    <iframe 
                        src="https://www.youtube-nocookie.com/embed/${vid}?autoplay=1&rel=0&modestbranding=1" 
                        title="${vtit}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                `;
            });
        });
    }

    renderizarVideos();

    // Make plugin image containers clickable linking to their plugin pages
    document.querySelectorAll('.plugin-card').forEach(card => {
        const learnMoreBtn = card.querySelector('a[href^="plugin.html?id="]');
        const imgContainer = card.querySelector('.plugin-image-container');
        if (learnMoreBtn && imgContainer) {
            imgContainer.style.cursor = 'pointer';
            imgContainer.addEventListener('click', () => {
                window.location.href = learnMoreBtn.href;
            });
        }
    });

    // ==========================================
    // DONATION COMPONENT LOGIC
    // ==========================================
    function createDonationModal() {
        if (document.getElementById('donation-modal')) return;

        const modalHTML = `
            <div class="modal-overlay" id="donation-modal">
                <div class="modal-content">
                    <button class="modal-close" id="close-donation">&times;</button>
                    <div class="modal-header">
                        <h3 data-i18n="modal-donate-title">Apoyar el Proyecto</h3>
                        <p data-i18n="modal-donate-desc">Tu apoyo me permite seguir desarrollando herramientas de audio de alta calidad y mantener muchas de ellas accesibles.</p>
                    </div>
                    <div class="donation-options">
                        <div class="donate-btn-option" id="btn-prex-trigger">
                            <strong data-i18n="modal-prex">Transferencia PREX</strong>
                            <span data-i18n="modal-prex-desc">Transferencia directa (LATAM).</span>
                        </div>
                        <div id="prex-details" class="prex-details-card">
                            <p style="margin-bottom: 5px; color: var(--clr-text-muted); font-size: 0.9rem;" data-i18n="modal-prex-name">A nombre de Álvaro</p>
                            <h4 style="color: white; letter-spacing: 2px; font-size: 1.4rem; font-family: var(--font-mono);">PREX: <span id="prex-account">1840539</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        const modal = document.getElementById('donation-modal');
        const closeBtn = document.getElementById('close-donation');
        const prexTrigger = document.getElementById('btn-prex-trigger');
        const prexDetails = document.getElementById('prex-details');

        closeBtn.addEventListener('click', () => modal.classList.remove('active'));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });

        prexTrigger.addEventListener('click', () => {
            prexDetails.classList.toggle('show');
        });
    }

    document.body.addEventListener('click', (e) => {
        const donateBtn = e.target.closest('.btn-donate');
        if (donateBtn) {
            e.preventDefault();
            createDonationModal();

            let savedLang = 'es';
            try {
                savedLang = localStorage.getItem('amatista_lang') || 'es';
            } catch (err) {}
            setLanguage(savedLang);

            document.getElementById('donation-modal').classList.add('active');
        }
    });
});
