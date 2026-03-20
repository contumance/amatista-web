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

    // 5. Language Switcher Logic
    const translations = {
        es: {
            // Navbar
            "nav-about": "Sobre Amatista",
            "nav-plugins": "Plugins",
            "nav-media": "Media",
            "nav-cta": "Ver Catálogo",
            // Hero
            "hero-title": "SONIDO <span class=\"highlight\">EN ESTADO PURO</span>",
            "hero-subtitle": "Efectos digitales boutique diseñados con una obsesión por el detalle y estética minimalista. Creamos herramientas de alta resolución para el músico contemporáneo, logrando una sensación sonora inspirada en hardware real para definir tonos modernos y afinaciones bajas con precisión absoluta.",
            "hero-btn-primary": "Descubrir Plugins",
            "hero-btn-secondary": "Conocer la Marca",
            // About
            "about-title": "Sobre <span class=\"highlight\">Amatista</span>",
            "about-p1": "¡Hola, soy Álvaro! Soy de <strong>Uruguay</strong>. Lic. en Sistemas es mi profesión, y desde hace mucho tiempo mi pasión ha estado en la <strong>música</strong>, específicamente en el <strong>metal</strong>. Sé lo obsesivos que podemos ser buscando ese tono ideal para nuestros instrumentos.",
            "about-p2": "Decidí unir mis dos mundos: la <strong>tecnología y la música</strong>. Así nació <strong>Amatista Efectos</strong>, como un proyecto personal impulsado por un desafío técnico inmenso. Me sumergí de lleno en el aprendizaje del <strong>DSP (Digital Signal Processing)</strong> con un objetivo claro: emular la física del sonido hasta el más mínimo detalle. Más que código, estos plugins son mi forma de poner a disposición de otros músicos las herramientas que yo mismo siempre quise tener.",
            // Plugins
            "plugins-title": "Nuestros <span class=\"highlight\">Plugins</span>",
            "tab-guitar": "Guitarra",
            "tab-bass": "Bajo",
            "tab-collab": "Colaboraciones",
            "family-impulso": "Familia <span class=\"highlight\">Impulso Primario</span>",
            "tag-free": "Gratis",
            "tag-paid": "Premium",
            "btn-buy": "Adquirir en Gumroad",
            "btn-download": "Descargar Gratis",

            "desc-carbonado": "Empuje transparente para limpiar y apretar tu señal antes del amplificador. Claridad de diamante.",
            "feat-carb-1": "+20dB de limpieza pura",
            "feat-carb-2": "Ecualizador de un solo botón",

            "desc-onix": "El empuje perfecto de alta ganancia. Aprieta los bajos y define los medios altos con violencia analógica oscura.",
            "feat-onix-1": "Filtro 'Tight' variable",
            "feat-onix-2": "Ruido base ultra bajo",

            "desc-obsidiana": "Fuzz denso y masivo. Un muro de sonido oscuro e impenetrable para afinaciones extremadamente graves.",
            "feat-obs-1": "Sustain infinito",
            "feat-obs-2": "Control de \"Doom\"",

            "desc-amatista": "La distorsión definitiva. Corte afilado, agudos precisos y el tono insignia de la marca.",
            "feat-ama-1": "Gate integrado (Lookahead)",
            "feat-ama-2": "Oversampling 4x/8x",

            "os-win-only": "Solo Windows (macOS próximamente)",
            "os-win-mac": "Windows / macOS (Unsigned)",

            "coming-soon-title": "Próximamente",
            "coming-soon-bass": "Estamos forjando las herramientas de frecuencias subgraves.",
            "coming-soon-collab": "Alianzas con artistas del metal moderno en camino.",

            // Media
            "media-title": "En <span class=\"highlight\">Acción</span>",
            "media-vid-1": "Odin's Grip - Playthrough en mezcla",
            "media-vid-2": "Void Gate - Prueba extrema",
            // Footer
            "footer-desc": "Plugins de grado de estudio para el metal del futuro.",
            "footer-nav": "Navegación",
            "footer-home": "Inicio",
            "footer-legal": "Legal",
            "footer-terms": "Términos de Servicio",
            "footer-privacy": "Privacidad",
            "footer-support": "Soporte",
            "footer-copy": "&copy; 2026 Amatista Efectos. Todos los derechos reservados."
        },
        en: {
            // Navbar
            "nav-about": "About Amatista",
            "nav-plugins": "Plugins",
            "nav-media": "Media",
            "nav-cta": "View Catalog",
            // Hero
            "hero-title": "PURE <span class=\"highlight\">SOUND</span>",
            "hero-subtitle": "Boutique digital effects designed with an obsession for detail and minimalist aesthetics. We create high-resolution tools for the contemporary musician, achieving a hardware-inspired sonic feel to define modern tones and low tunings with absolute precision.",
            "hero-btn-primary": "Discover Plugins",
            "hero-btn-secondary": "Know the Brand",
            // About
            "about-title": "About <span class=\"highlight\">Amatista</span>",
            "about-p1": "Hi, I'm Álvaro! I'm from <strong>Uruguay</strong>. A Systems Graduate by profession, and for a long time my passion has been in <strong>music</strong>, specifically in <strong>metal</strong>. I know how obsessive we can be looking for that ideal tone for our instruments.",
            "about-p2": "I decided to merge my two worlds: <strong>technology and music</strong>. That's how <strong>Amatista Efectos</strong> was born, as a personal project driven by an immense technical challenge. I dove fully into learning <strong>DSP (Digital Signal Processing)</strong> with a clear goal: to emulate the physics of sound down to the smallest detail. More than code, these plugins are my way of making the tools I always wanted available to other musicians.",
            // Plugins
            "plugins-title": "Our <span class=\"highlight\">Plugins</span>",
            "tab-guitar": "Guitar",
            "tab-bass": "Bass",
            "tab-collab": "Collaborations",
            "family-impulso": "Family <span class=\"highlight\">Primal Impulse</span>",
            "tag-free": "Free",
            "tag-paid": "Premium",
            "btn-buy": "Get it on Gumroad",
            "btn-download": "Download Free",

            "desc-carbonado": "Transparent boost to clean and tighten your signal before the amp. Diamond clarity.",
            "feat-carb-1": "+20dB of pure clean boost",
            "feat-carb-2": "One-knob EQ design",

            "desc-onix": "The perfect high-gain push. Tighten the lows and define the high-mids with dark analog violence.",
            "feat-onix-1": "Variable 'Tight' filter",
            "feat-onix-2": "Ultra-low noise floor",

            "desc-obsidiana": "Dense and massive fuzz. A dark and impenetrable wall of sound for extremely low tunings.",
            "feat-obs-1": "Infinite sustain",
            "feat-obs-2": "\"Doom\" control",

            "desc-amatista": "The ultimate distortion. Razor-sharp cut, precise highs, and the brand's flagship tone.",
            "feat-ama-1": "Built-in Gate (Lookahead)",
            "feat-ama-2": "4x/8x Oversampling",

            "os-win-only": "Windows only (macOS coming soon)",
            "os-win-mac": "Windows / macOS (Unsigned)",

            "coming-soon-title": "Coming Soon",
            "coming-soon-bass": "We are forging the sub-bass frequency tools.",
            "coming-soon-collab": "Alliances with modern metal artists on the way.",

            // Media
            "media-title": "In <span class=\"highlight\">Action</span>",
            "media-vid-1": "Odin's Grip - In the mix playthrough",
            "media-vid-2": "Void Gate - Extreme test",
            // Footer
            "footer-desc": "Studio-grade plugins for the metal of the future.",
            "footer-nav": "Navigation",
            "footer-home": "Home",
            "footer-legal": "Legal",
            "footer-terms": "Terms of Service",
            "footer-privacy": "Privacy",
            "footer-support": "Support",
            "footer-copy": "&copy; 2026 Amatista Efectos. All rights reserved."
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

        function animate() {
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
});
