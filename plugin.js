document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const pluginId = urlParams.get('id');

    const pluginDatabase = {
        "carbonado": {
            id: "carbonado",
            badgeClass: "tag-free",
            osWinOnly: false,
            images: ["assets/carbonado.png"],
            price: "",
            downloadUrl: "https://amatistaefectos.gumroad.com/l/carbonadoboostfree",
            videoId: "gN-I8rfDbWw",
            docsHash: "#carbonado",
            translations: {
                es: {
                    badge: "Gratis",
                    ctaText: "Descargar Gratis",
                    osText: "Windows / macOS (Unsigned)",
                    title: "Carbonado Boost",
                    family: "Familia Impulso Primario",
                    description: "Carbonado es un booster rápido, agresivo y diseñado para empujar lo que venga después. No colorea innecesariamente. Simplemente empuja y clarifica la señal.<br><br><strong>Qué está pasando por dentro</strong><br>Oversampling 2x para evitar artefactos, Tightening (High Pass filter ~100Hz) antes de aplicar ganancia, seguido por saturación tipo op-amp que simula los límites eléctricos reales a altas presiones.",
                    features: [
                        "+22dB de boost musical y agresivo",
                        "Control 'Pressure' de una perilla",
                        "High Pass filter pre configurado para guitarras modernas",
                        "Mejora la definición sin alterar carácter del amp"
                    ]
                },
                en: {
                    badge: "Free",
                    ctaText: "Download Free",
                    osText: "Windows / macOS (Unsigned)",
                    title: "Carbonado Boost",
                    family: "Primal Impulse Family",
                    description: "Carbonado is a fast, aggressive booster designed to push whatever comes next. It doesn't color unnecessarily. It just pushes and clarifies the signal.<br><br><strong>What happens inside</strong><br>2x Oversampling to avoid artifacts, Tightening (High Pass filter ~100Hz) applied before the gain stage, followed by an op-amp style saturation simulating real electrical limits at high pressures.",
                    features: [
                        "+22dB of aggressive, musical boost",
                        "Single-knob 'Pressure' control",
                        "Pre-configured High Pass filter for modern guitar",
                        "Enhance the definition without altering the amp’s character"
                    ]
                }
            }
        },
        "impulso-primario": {
            id: "impulso-primario",
            badgeClass: "tag-paid",
            osWinOnly: true,
            images: [
                "assets/bundle_impulso_primario.png",
                "assets/carbonado.png",
                "assets/onix.png",
                "assets/amatista.png",
                "assets/obsidiana.png"
            ],
            price: "40.00",
            downloadUrl: "",
            videoId: "NYB2dtHThKo",
            docsHash: "#manuales",
            translations: {
                es: {
                    badge: "Premium",
                    ctaText: "Adquirir",
                    osText: "Solo Windows (macOS próximamente)",
                    title: "Impulso Primario Pack",
                    family: "Bundle",
                    description: "Este bundle incluye la suite completa de ganancia AMATISTA: <strong>Carbonado Boost, Ónix Overdrive, Amatista Distortion y Obsidiana Fuzz.</strong><br><br>Diseñada como una progresión natural del sonido, donde cada elemento redefine el límite del otro. No es una simple colección de efectos; es un ecosistema creado bajo la filosofía visual y auditiva de la marca para abarcar todo el espectro moderno y experimental de ganancia.",
                    features: [
                        "4 herramientas de ganancia en resoluciones altas (2x/4x Oversampling)",
                        "Carbonado: Boost estricto y claro",
                        "Ónix: Overdrive enfocado para Metal/Djent",
                        "Amatista: Preamplificación cortante y articulada",
                        "Obsidiana: Caos masivo para tunings bajos"
                    ]
                },
                en: {
                    badge: "Premium",
                    ctaText: "Get it",
                    osText: "Windows only (macOS coming soon)",
                    title: "Primal Impulse Pack",
                    family: "Bundle",
                    description: "This bundle includes the complete AMATISTA gain suite: <strong>Carbonado Boost, Ónix Overdrive, Amatista Distortion, and Obsidiana Fuzz.</strong><br><br>Designed as a natural progression of sound, where each element redefines the limit of the other. It is not a simple collection of effects; it is an ecosystem created under the visual and auditory philosophy of the brand to cover the entire modern and experimental gain spectrum.",
                    features: [
                        "4 gain tools in high resolutions (2x/4x Oversampling)",
                        "Carbonado: Strict and clear boost",
                        "Ónix: Focused overdrive for Metal/Djent",
                        "Amatista: Cutting and articulate pre-amplification",
                        "Obsidiana: Massive chaos for low tunings"
                    ]
                }
            }
        },
        "onix": {
            id: "onix",
            badgeClass: "tag-paid",
            osWinOnly: true,
            images: ["assets/onix.png"],
            price: "17.00",
            downloadUrl: "",
            videoId: "BYmKtey9NVg",
            docsHash: "#onix",
            translations: {
                es: {
                    badge: "Premium",
                    ctaText: "Adquirir",
                    osText: "Solo Windows (macOS próximamente)",
                    title: "Ónix Overdrive",
                    family: "Familia Impulso Primario",
                    description: "Ónix es la herramienta precisa para ajustar amplificadores high-gain en contextos modernos. Aprieta los bajos, añade mordida en los medios altos e inyecta la cantidad justa de agresión sin embarrar el sonido.<br><br>A diferencia de los overdrives clásicos, el Ónix posee una topología de Overdrive limpio (Clean-blend dinámico) que asimetrizado en combinación con un filtro Mid-Boost afinado a ~720Hz da a la guitarra articulación extrema.",
                    features: [
                        "Doble capa de filtrado: Pre-shaping en bajos e inyección en medios",
                        "Clipping asimétrico de tono orgánico",
                        "Oversampling interno a 4x de alta calidad",
                        "Controles de Drive, Tone, y Level optimizados"
                    ]
                },
                en: {
                    badge: "Premium",
                    ctaText: "Get it",
                    osText: "Windows only (macOS coming soon)",
                    title: "Ónix Overdrive",
                    family: "Primal Impulse Family",
                    description: "Ónix is the precise tool for tightening high-gain amplifiers in modern contexts. It tightens the lows, adds bite to the high-mids, and injects exactly the right amount of aggression without blurring the outcome.<br><br>Unlike classic overdrives, Ónix possesses a Clean-Overdrive topology (dynamic Clean-blend) asymmetrized in combination with a Mid-Boost filter tuned to ~720Hz giving the guitar extreme articulation.",
                    features: [
                        "Double filtering layer: Bass Pre-shaping and mid injection",
                        "Organic tone asymmetric clipping",
                        "High quality internal 4x Oversampling",
                        "Optimized Drive, Tone, and Level knobs"
                    ]
                }
            }
        },
        "amatista": {
            id: "amatista",
            badgeClass: "tag-paid",
            osWinOnly: true,
            images: ["assets/amatista.png"],
            price: "17.00",
            downloadUrl: "",
            videoId: "Xu1i8GOV_Lg",
            docsHash: "#amatista",
            translations: {
                es: {
                    badge: "Premium",
                    ctaText: "Adquirir",
                    osText: "Solo Windows (macOS próximamente)",
                    title: "Amatista Distortion",
                    family: "Familia Impulso Primario",
                    description: "El buque insignia de la marca. Amatista es un Preamp y Power Stage completamente independiente comprimido en el formato de un pedal analógico. Donde la mayoría destripa frecuencias, Amatista esculpe.<br><br>Cuenta con un mando de <strong>Structure</strong> radical: Entre 0 y 0.3 actúa como un amplificador ajustado de Djent. Más allá, la distorsión cambia las reglas y clippea fuertemente simulando un voltaje colapsando por caída de potencia (SAG effect).",
                    features: [
                        "Múltiples etapas de ganancia (Pre y Power)",
                        "Perilla Structure(ADN): Cambia topología de simetría y headroom",
                        "Filtro dinámico De-Fizz integrado",
                        "EQ independiente de Cuerpo (120Hz) y Presencia (3.8kHz)"
                    ]
                },
                en: {
                    badge: "Premium",
                    ctaText: "Get it",
                    osText: "Windows only (macOS coming soon)",
                    title: "Amatista Distortion",
                    family: "Primal Impulse Family",
                    description: "The brand's flagship. Amatista is a completely independent Preamp and Power Stage compressed into the format of an analog pedal. Where most gut frequencies, Amatista sculpts.<br><br>Featuring a radical <strong>Structure</strong> knob: Between 0 and 0.3 it acts like a tight Djent amplifier. Pushed further, the distortion changes rules and clips heavily simulating voltage sink (SAG effect).",
                    features: [
                        "Multiple gain stages (Pre and Power)",
                        "Structure Knob (DNA): Modifies symmetry topology and headroom",
                        "Integrated dynamic De-Fizz filter",
                        "Independent EQ for Body (120Hz) and Presence (3.8kHz)"
                    ]
                }
            }
        },
        "obsidiana": {
            id: "obsidiana",
            badgeClass: "tag-paid",
            osWinOnly: true,
            images: ["assets/obsidiana.png"],
            price: "17.00",
            downloadUrl: "",
            videoId: "aB9-BHBiv2M",
            docsHash: "#obsidiana",
            translations: {
                es: {
                    badge: "Premium",
                    ctaText: "Adquirir",
                    osText: "Solo Windows (macOS próximamente)",
                    title: "Obsidiana Fuzz",
                    family: "Familia Impulso Primario",
                    description: "Obsidiana no es discreto, busca imponer presencia. Base sólida para tonos masivos y densos. Saturación orgánica, abierta con graves profundos y presentes. Muro de sonido y textura con carácter real.<br><br>Construcción basada en una etapa limitadora tanh no lineal agresiva. Hecho para Doom, Sludge y Modern Metal masivo.",
                    features: [
                        "Nivel de caos interactivo e implacable",
                        "Saturación de alta no-linealidad",
                        "Manejo avanzado de Frecuencias graves (Bass Cut/Boost +-12dB)",
                        "Sobremuestreo masivo (4x) para contención de distorsión digital"
                    ]
                },
                en: {
                    badge: "Premium",
                    ctaText: "Get it",
                    osText: "Windows only (macOS coming soon)",
                    title: "Obsidiana Fuzz",
                    family: "Primal Impulse Family",
                    description: "Obsidiana isn’t subtle, it aims to dominate the mix. A solid foundation for massive, dense tones. Organic, open saturation with deep, present lows. A wall of sound and texture with real character.<br><br>Construction based on an aggressive non-linear tanh limiting stage. Made for Doom, Sludge, and massive Modern Metal.",
                    features: [
                        "Interactive and unrelenting level of chaos",
                        "High non-linearity saturation",
                        "Advanced management of low frequencies (Bass Cut/Boost +-12dB)",
                        "Massive Internal Oversampling (4x) for digital clipping restraint"
                    ]
                }
            }
        },
        "granate": {
            id: "granate",
            badgeClass: "tag-free",
            osWinOnly: false,
            images: ["assets/granate.png"],
            price: "",
            downloadUrl: "https://amatistaefectos.gumroad.com/l/granatebasssaturatorfree",
            videoId: "VEYRQPGR5eA",
            docsHash: "#granate",
            translations: {
                es: {
                    badge: "Gratis",
                    ctaText: "Descargar Gratis",
                    osText: "Windows / macOS (Unsigned)",
                    title: "Granate Bass Saturator",
                    family: "Familia Frecuencia Base",
                    description: "El compañero definitivo en la cadena de bajos modernos. Granate está diseñado para aplicar saturación en el rango de medios-altos y aportar el grano esencial de una pista agresiva de bajo sin comprometer los subgraves del track. Su arquitectura de diseño paralelo fusiona dos vías totalmente controlables.<br><br>Usa 'Clank' para invocar la presencia metálica de la cuerda (ideal para pick) y 'Granate' para distorsionarla, controlando ambos pesos mediante 'Blend'.",
                    features: [
                        "Arquitectura paralela (Clean/Saturated mix)",
                        "Botón 'Clank' para añadir ataque en el cruce de 2-3 kHz",
                        "Saturación que incrementa control dinámico del High-Pass interno",
                        "Definición y pegada preservada sin importar el Drive"
                    ]
                },
                en: {
                    badge: "Free",
                    ctaText: "Download Free",
                    osText: "Windows / macOS (Unsigned)",
                    title: "Granate Bass Saturator",
                    family: "Frecuencia Base Family",
                    description: "The ultimate companion in modern bass chains. Granate is designed to apply saturation in the mid-high range and provide the essential grit of an aggressive bass track without compromising the sub-lows. Its parallel design architecture merges two fully controllable paths.<br><br>Turn 'Clank' to summon the metallic presence of the string (ideal for picking) and 'Granate' to distort it, mediating both weights via 'Blend'.",
                    features: [
                        "Parallel architecture (Clean/Saturated mix)",
                        "Clank knob for attack addition around 2-3 kHz",
                        "Saturation that automatically raises dynamic HP filter control",
                        "Definition and punch preserved regardless of Drive scale"
                    ]
                }
            }
        }
    };

    const data = pluginDatabase[pluginId];
    if (!data) {
        document.querySelector('.plugin-single-section').innerHTML = "<h2 style='text-align:center; color:white; padding: 100px;'>Plugin no encontrado.</h2>";
        return;
    }

    function updatePluginContent(lang) {
        const langData = data.translations[lang] || data.translations['es'];
        document.getElementById('pg-title').innerHTML = langData.title;
        document.getElementById('pg-family').innerHTML = langData.family;
        document.getElementById('pg-desc').innerHTML = langData.description;

        const featuresUl = document.getElementById('pg-features');
        featuresUl.innerHTML = '';
        langData.features.forEach(f => {
            const li = document.createElement('li');
            li.innerHTML = f;
            featuresUl.appendChild(li);
        });

        document.getElementById('pg-badge').innerHTML = langData.badge;
        document.getElementById('pg-cta-btn').innerHTML = langData.ctaText;

        const osAlert = document.getElementById('pg-os-alert');
        if (data.osWinOnly) {
            osAlert.innerHTML = `⚠️ <span>${langData.osText}</span>`;
            osAlert.style.color = '#ff9800';
        } else {
            osAlert.innerHTML = `<span>${langData.osText}</span>`;
            osAlert.style.color = 'var(--clr-text-muted)';
        }
    }

    const currentLang = document.documentElement.lang || 'es';
    updatePluginContent(currentLang);

    // Watch for click events on the language buttons via event delegation over the body
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('lang-btn')) {
            updatePluginContent(e.target.dataset.lang);
        }
    });

    // Populate images
    const mainImg = document.getElementById('pg-main-img');
    mainImg.src = data.images[0] || '';

    const thumbsContainer = document.getElementById('pg-thumbnails');
    if (data.images.length > 1) {
        data.images.forEach((imgSrc, idx) => {
            const thumb = document.createElement('img');
            thumb.src = imgSrc;
            thumb.className = idx === 0 ? 'thumb active' : 'thumb';
            thumb.onclick = () => {
                mainImg.src = imgSrc;
                document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            };
            thumbsContainer.appendChild(thumb);
        });
    }

    // Populate Badge styling
    document.getElementById('pg-badge').className = `tag ${data.badgeClass}`;

    const priceContainer = document.getElementById('pg-price-container');
    if (data.price) {
        document.getElementById('pg-price').innerText = `$${data.price} USD`;
    } else {
        priceContainer.style.display = 'none';
    }

    // CTA & Docs Links
    const ctaBtn = document.getElementById('pg-cta-btn');
    const paypalContainer = document.getElementById('paypal-button-container');
    const downloadSection = document.getElementById('pg-download-section');
    const downloadBtn = document.getElementById('pg-download-btn');

    if (data.price) {
        // Plugin de pago: Inyectar formulario de PayPal HTML
        ctaBtn.style.display = 'none';
        paypalContainer.style.display = 'block';

        const langData = data.translations[currentLang];

        const prexPrice = (parseFloat(data.price) / 2).toFixed(2);
        
        paypalContainer.innerHTML = `
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_xclick">
                <input type="hidden" name="business" value="alvaroh.gonz@gmail.com">
                <input type="hidden" name="item_name" value="${langData.title}">
                <input type="hidden" name="amount" value="${data.price}">
                <input type="hidden" name="currency_code" value="USD">
                <input type="hidden" name="return" value="${window.location.origin}/gracias.html?id=${data.id}">
                <input type="hidden" name="cancel_return" value="${window.location.origin}/cancelado.html">
                <button type="submit" class="btn btn-primary btn-block glow-effect" style="margin-top: 15px;">Comprar — $${data.price} USD</button>
            </form>
            <div style="margin-top: 20px; padding: 15px; border: 1px solid rgba(175, 122, 235, 0.3); border-radius: var(--radius); background: rgba(175, 122, 235, 0.05); text-align: center;">
                <p style="color: var(--clr-amethyst-light); font-weight: 600; margin-bottom: 12px; font-size: 0.9rem;">¿Tienes PREX? (Argentina / Uruguay)</p>
                <div class="donate-btn-option" style="cursor: pointer; margin-bottom: 0;" onclick="document.getElementById('plugin-prex-details').classList.toggle('show')">
                    <strong>Transferencia PREX (50% OFF)</strong>
                    <span>Pago directo y envío de comprobante.</span>
                </div>
                <div id="plugin-prex-details" class="prex-details-card">
                    <p style="color: var(--clr-text-muted); font-size: 0.9rem; margin-bottom: 15px;">Monto exacto a transferir: <strong style="color: #1ed760; font-size: 1.1rem;">$${prexPrice} USD</strong></p>
                    <p style="margin-bottom: 5px; color: var(--clr-text-muted); font-size: 0.9rem;">A nombre de Álvaro</p>
                    <h4 style="color: white; letter-spacing: 2px; font-size: 1.4rem;">PREX: 1840539</h4>
                    <p style="color: var(--clr-text-muted); margin-top: 15px; font-size: 0.85rem; line-height: 1.4;">Envía tu comprobante de pago a <strong style="color: #fff;">amatista.efectos@icloud.com</strong> para recibir el plugin de forma manual a mitad de precio.</p>
                </div>
            </div>
        `;
    } else {
        // Plugin gratuito: usar el enlace CTA predeterminado (por defecto link de descarga directo)
        ctaBtn.style.display = 'block';
        paypalContainer.style.display = 'none';
        ctaBtn.href = data.downloadUrl || '#';
    }

    if (data.docsHash) {
        document.getElementById('pg-docs-btn').href = `docs.html${data.docsHash}`;
    }

    // Lazy load video
    if (data.videoId) {
        const videoSection = document.getElementById('pg-video-section');
        videoSection.style.display = 'block';
        const videoContainer = document.getElementById('pg-video-container');
        videoContainer.innerHTML = `
            <div class="video-container lazy-video" style="max-width: 800px; margin: 0 auto; border: 1px solid var(--clr-border); border-radius: var(--radius); overflow: hidden; cursor: pointer;">
                <div class="video-placeholder" style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(20, 20, 24, 0.4) 100%), url('https://img.youtube.com/vi/${data.videoId}/sddefault.jpg'); display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; aspect-ratio: 16/9; background-size: cover; background-position: center;">
                    <div class="play-btn">▶</div>
                    <p style="color: white; font-weight: 600; text-shadow: 0 2px 4px rgba(0,0,0,0.8);">Test Demo Video</p>
                </div>
            </div>
        `;

        videoContainer.querySelector('.lazy-video').addEventListener('click', function () {
            this.innerHTML = `
                <iframe 
                    src="https://www.youtube-nocookie.com/embed/${data.videoId}?autoplay=1&rel=0&modestbranding=1" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    referrerpolicy="strict-origin-when-cross-origin"
                    style="width: 100%; aspect-ratio: 16/9;"
                    allowfullscreen>
                </iframe>
            `;
        });
    }
});
