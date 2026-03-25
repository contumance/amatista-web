/**
 * Amatista Efectos - Core Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navbar Effect with Glassmorphism switch
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 1.5. Mobile Fullscreen Menu Logic
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    if (mobileMenuBtn && navbar) {
        mobileMenuBtn.addEventListener('click', () => {
            navbar.classList.toggle('nav-active');
            
            // Reemplazar icono si está activo o no
            if(navbar.classList.contains('nav-active')) {
                mobileMenuBtn.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
            } else {
                mobileMenuBtn.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
            }
        });
        
        const navItems = document.querySelectorAll('.nav-links a, .nav-right a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navbar.classList.remove('nav-active');
                mobileMenuBtn.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
            });
        });
    }

    // 2. Intersection Observer for Fade-in effects
    const faders = document.querySelectorAll('.fade-in-section');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // 3. Smooth scrolling for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Tabs Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active', 'is-visible'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Show corresponding pane
            const targetId = btn.getAttribute('data-target');
            const targetPane = document.getElementById(targetId);
            if (targetPane) {
                targetPane.classList.add('active');

                // Allow CSS transition to take effect
                setTimeout(() => {
                    targetPane.classList.add('is-visible');
                }, 50);
            }
        });
    });

    // correo
    const EMAIL_ADDRESS = "amatista.efectos@icloud.com";

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
            "hero-title": "SONIDO <span class=\"highlight\">EN ESTADO PURO</span>",
            "hero-subtitle": "Efectos digitales boutique diseñados con una obsesión por el detalle y estética minimalista. Creamos herramientas de alta resolución para el músico contemporáneo, logrando una sensación sonora inspirada en hardware real para definir tonos modernos y afinaciones bajas con precisión absoluta.",
            "hero-btn-primary": "Descubrir Plugins",
            "hero-btn-secondary": "Conocer la Marca",
            // About
            "about-title": "Sobre <span class=\"highlight\">Amatista</span>",
            "about-p1": "¡Hola, soy Álvaro! Desde Uruguay, combino mi profesión con mi mayor pasión: la <strong>música</strong> y, muy especialmente, el <strong>metal</strong>. Como músico aficionado, sé de primera mano lo obsesivos que podemos llegar a ser en la búsqueda de ese tono perfecto para nuestros instrumentos.",
            "about-p2": "De la intersección de estos dos mundos —<strong>el desarrollo de software y la música</strong>— surge <strong>Amatista Efectos</strong>. Me sumergí en el apasionante mundo del <strong>DSP</strong> (Digital Signal Processing) con un objetivo claro: emular la física del sonido al detalle y crear herramientas diseñadas para la exigencia de este género. Más que simples líneas de código, estos plugins son mi forma de compartir mi visión sobre estas herramientas musicales.",
            "about-p3": "Este proyecto no evoluciona en solitario. Quiero agradecer de corazón a todos los <strong>músicos y testers</strong> que colaboran actualmente y a los que lo harán en el futuro, probando los plugins. Su feedback constante y su nivel de exigencia son el motor que hace posible la mejora continua, asegurando que cada actualización suene y se sienta mejor que la anterior.",
            // Plugins
            "plugins-title": "Nuestros <span class=\"highlight\">Plugins</span>",
            "tab-guitar": "Guitarra",
            "tab-bass": "Bajo",
            "tab-collab": "Colaboraciones",
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

            "modal-donate-title": "Apoyar el Proyecto",
            "modal-donate-desc": "Tu apoyo me permite seguir desarrollando herramientas de audio de alta calidad y mantener muchas de ellas accesibles.",
            "modal-paypal": "Donar vía PayPal",
            "modal-paypal-desc": "Internacional, rápido y seguro.",
            "modal-prex": "Transferencia PREX",
            "modal-prex-desc": "Transferencia directa (LATAM).",
            "modal-prex-name": "A nombre de Álvaro",

            "desc-carbonado": "Empuje transparente para limpiar y apretar tu señal antes del amplificador. Claridad de diamante.",
            "feat-carb-1": "+20dB de limpieza pura",
            "feat-carb-2": "Ecualizador de un solo botón",

            "desc-impulsoprimario": "Impulso Primario es el ecosistema de ganancia de AMATISTA, con un enfoque moderno y versátil.",
            "feat-impulsoprimario-1": "Arquitectura coherente",
            "feat-impulsoprimario-2": "Cada pedal cumple su función",

            "desc-onix": "El empuje perfecto de alta ganancia. Aprieta los bajos y define los medios altos con violencia analógica oscura.",
            "feat-onix-1": "Filtro 'Tight' variable",
            "feat-onix-2": "Riffs articulados y leads definidos",

            "desc-obsidiana": "Fuzz denso y masivo. Un muro de sonido oscuro e impenetrable para afinaciones extremadamente graves.",
            "feat-obs-1": "Sustain infinito",
            "feat-obs-2": "Moldea el caos con intención",

            "desc-amatista": "La distorsión definitiva. Corte afilado, agudos precisos y el tono insignia de la marca.",
            "feat-ama-1": "Preamp + Power Stage condensado en un pedal",
            "feat-ama-2": "Tono moderno, claridad y presencia",

            "os-win-only": "Solo Windows (macOS próximamente)",
            "os-win-mac": "Windows / macOS (Unsigned)",

            "coming-soon-title": "Próximamente",
            "coming-soon-bass": "Estamos forjando las herramientas de frecuencias subgraves.",
            "coming-soon-collab": "Alianzas con artistas del metal moderno en camino.",

            // Media
            "media-title": "En <span class=\"highlight\">Acción</span>",
            // Pact
            "pact-title": "Nuestro <span class=\"highlight\">Pacto Creativo</span>",
            "pact-desc": "Creemos en la transparencia y el respeto por tu herramienta de trabajo. Sin suscripciones, sin DRM invasivo, sin obsolescencia programada. Herramientas que compras una vez y son tuyas para siempre.",
            "pact-btn": "Leer el Pacto Completo",
            // Footer
            "footer-desc": "Efectos digitales boutique.",
            "footer-nav": "Navegación",
            "footer-home": "Inicio",
            "footer-legal": "Legal",
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
            "hero-title": "PURE <span class=\"highlight\">SOUND</span>",
            "hero-subtitle": "Boutique digital effects designed with an obsession for detail and minimalist aesthetics. We create high-resolution tools for the contemporary musician, achieving a hardware-inspired sonic feel to define modern tones and low tunings with absolute precision.",
            "hero-btn-primary": "Discover Plugins",
            "hero-btn-secondary": "Know the Brand",
            // About
            "about-title": "About <span class=\"highlight\">Amatista</span>",
            "about-p1": "Hi, I'm Álvaro! From <strong>Uruguay</strong>, I combine my profession with my greatest passion: <strong>music</strong> and, very especially, <strong>metal</strong>. As a musician amateur, I know firsthand how obsessive we can get when searching for that perfect tone for our instruments.",
            "about-p2": "To unite these two worlds—<strong>software development and music</strong>—I created <strong>Amatista Efectos</strong>. What started as a huge technical challenge led me to dive deep into <strong>DSP (Digital Signal Processing)</strong> with a clear goal: to emulate the physics of sound in detail and create tools designed specifically for the demands of this genre. More than just lines of code, these plugins are my way of sharing the tools I always wanted with other musicians.",
            "about-p3": "This project doesn't evolve alone. I want to sincerely thank all the <strong>musicians and testers</strong> who currently collaborate and those who will do so in the future by testing the plugins. Your constant feedback and high standards are the driving force behind continuous improvement, ensuring that each update sounds and feels better than the last.",
            // Plugins
            "plugins-title": "Our <span class=\"highlight\">Plugins</span>",
            "tab-guitar": "Guitar",
            "tab-bass": "Bass",
            "tab-collab": "Collaborations",
            "family-impulso": "Family <span class=\"highlight\">Primal Impulse</span>",
            "family-frecuencia-base": "Family <span class=\"highlight\">Frecuencia Base</span>",
            "tag-free": "Free",
            "tag-paid": "Premium",
            "btn-buy": "Get it",
            "btn-download": "Download Free",
            "btn-learn-more": "Learn more",
            "btn-back": "← Back to catalog",
            "btn-read-manual": "Read user manual",
            "plugin-features-title": "Key Features",

            "modal-donate-title": "Support the Project",
            "modal-donate-desc": "Your support allows me to continue developing high-quality audio tools and keeping many of them accessible.",
            "modal-paypal": "Donate via PayPal",
            "modal-paypal-desc": "International, fast and secure.",
            "modal-prex": "PREX Transfer",
            "modal-prex-desc": "Direct transfer (LATAM region).",
            "modal-prex-name": "In the name of Álvaro",

            "desc-carbonado": "Transparent boost to clean and tighten your signal before the amp. Diamond clarity.",
            "feat-carb-1": "+20dB of pure clean boost",
            "feat-carb-2": "One-knob EQ design",

            "desc-impulsoprimario": "Primal Impulse is the AMATISTA gain ecosystem, with a modern and versatile approach.",
            "feat-impulsoprimario-1": "Coherent architecture",
            "feat-impulsoprimario-2": "Each pedal serves its purpose",

            "desc-onix": "The perfect high-gain push. Tighten the lows and define the high-mids with dark analog violence.",
            "feat-onix-1": "Variable 'Tight' filter",
            "feat-onix-2": "Articulate riffs and defined leads",

            "desc-obsidiana": "Dense and massive fuzz. A dark and impenetrable wall of sound for extremely low tunings.",
            "feat-obs-1": "Infinite sustain",
            "feat-obs-2": "Shape the chaos with intention",

            "desc-amatista": "The ultimate distortion. Razor-sharp cut, precise highs, and the brand's flagship tone.",
            "feat-ama-1": "Preamp + Power Stage condensed in one pedal",
            "feat-ama-2": "Modern tone, clarity and presence",

            "desc-granate": "Saturación moderna con procesamiento paralelo: mantiene el low-end sólido mientras aporta carácter y textura al rango medio.",
            "feat-granate-1": "Mezcla controlada (Clean/Drive)",
            "feat-granate-2": "Definición en afinaciones graves",

            "os-win-only": "Windows only (macOS coming soon)",
            "os-win-mac": "Windows / macOS (Unsigned)",

            "coming-soon-title": "Coming Soon",
            "coming-soon-bass": "We are forging the sub-bass frequency tools.",
            "coming-soon-collab": "Alliances with modern metal artists on the way.",

            // Media
            "media-title": "In <span class=\"highlight\">Action</span>",
            // Pact
            "pact-title": "Our <span class=\"highlight\">Creative Pact</span>",
            "pact-desc": "We believe in transparency and respect for your working tools. No subscriptions, no invasive DRM, no planned obsolescence. Tools you buy once and own forever.",
            "pact-btn": "Read Full Pact",
            // Footer
            "footer-desc": "Boutique digital effects.",
            "footer-nav": "Navigation",
            "footer-home": "Home",
            "footer-legal": "Legal",
            "footer-terms": "Terms of Service",
            "footer-privacy": "Privacy",
            "footer-support": `Support: ${EMAIL_ADDRESS}`,
            "footer-copy": "&copy; 2026 Amatista Efectos. All rights reserved.",
            "footer-donate": "Support Amatista",
            "footer-pact": "Creative Pact"
        }
    };

    const langBtns = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-i18n]');

    function setLanguage(lang) {
        // Update active button state
        langBtns.forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update document lang attribute
        document.documentElement.lang = lang;

        // Replace texts
        translatableElements.forEach(el => {
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

    // Initialize the default language on page load
    setLanguage('es');

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
                this.y = Math.random() * height; // initial random y
            }

            reset() {
                this.x = Math.random() * width;
                this.y = height + Math.random() * 100;
                // Optimization: Background particles larger & more transparent (bokeh effect) instead of using expensive blur filters
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

                // Smooth mouse tracking / parallax
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

        // Performance optimization: Pause particle animation when hero is off-screen
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

            // Smooth mouse interpolation (easing)
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

    // 1. Define tu catálogo de videos aquí
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

        // Puedes agregar más objetos aquí en el futuro
    ];

    // 2. Función para inyectar los videos en el DOM
    function renderizarVideos() {
        const gallery = document.getElementById('youtube-gallery');

        if (!gallery) return;

        let HTMLContenido = '';

        // Performance Optimization: Lazy Load YouTube videos using static placeholder and Facade pattern
        youtubeVideos.forEach(video => {
            HTMLContenido += `
                <div class="video-container lazy-video" data-videoid="${video.id}" data-title="${video.title}">
                    <div class="video-placeholder" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(20, 20, 24, 0.4) 100%), url('https://img.youtube.com/vi/${video.id}/sddefault.jpg');">
                        <div class="play-btn">▶</div>
                        <p>${video.title}</p>
                    </div>
                </div>
            `;
        });

        gallery.innerHTML = HTMLContenido;

        // Attach click listener to hot-load the iframe only on demand
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

    // 3. Ejecutar al cargar
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
                        <a href="https://paypal.me/alvagonz" target="_blank" class="donate-btn-option">
                            <strong data-i18n="modal-paypal">Donar vía PayPal</strong>
                            <span data-i18n="modal-paypal-desc">Internacional, rápido y seguro.</span>
                        </a>
                        <div class="donate-btn-option" id="btn-prex-trigger">
                            <strong data-i18n="modal-prex">Transferencia PREX</strong>
                            <span data-i18n="modal-prex-desc">Transferencia directa (LATAM).</span>
                        </div>
                        <div id="prex-details" class="prex-details-card">
                            <p style="margin-bottom: 5px; color: var(--clr-text-muted); font-size: 0.9rem;" data-i18n="modal-prex-name">A nombre de Álvaro</p>
                            <h4 style="color: white; letter-spacing: 2px; font-size: 1.4rem;">PREX: <span id="prex-account">1840539</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Events
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

    // Capture all clicks on any element with .btn-donate globally
    document.body.addEventListener('click', (e) => {
        const donateBtn = e.target.closest('.btn-donate');
        if (donateBtn) {
            e.preventDefault();
            createDonationModal();

            // Force translation pass on the new modal HTML
            const savedLang = localStorage.getItem('amatista_lang') || 'es';
            setLanguage(savedLang);

            // Show modal
            document.getElementById('donation-modal').classList.add('active');
        }
    });

});