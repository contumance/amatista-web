document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const pluginId = urlParams.get('id');

    // =========================================================================
    // CONFIGURACIÓN DE PUESTA EN PRODUCCIÓN (FEATURE FLAGS)
    // =========================================================================
    // false = Muestra aviso "Próximamente lanzamiento 11/11" y bloquea compra/descarga
    // true  = Deja la página habilitada con los enlaces de compra y descarga activos
    const SYKO_ONE_RELEASED = false;

    const pluginDatabase = {
        "syko-one": {
            id: "syko-one",
            isReleased: SYKO_ONE_RELEASED,
            badgeClass: "tag-paid",
            osWinOnly: true,
            images: ["assets/sykoOne.png", "assets/sykoOne_screenshot.png", "assets/sykoOne_combo.png", "assets/sykoOne_pedalboard.png", "assets/sykoOne_purple_amp.png"],
            price: "99.00",
            gumroadUrl: "https://amatistaefectos.gumroad.com/l/sykoone",
            downloadUrl: "",
            videoId: "",
            docsHash: "#sykoone",
            translations: {
                es: {
                    badge: "Premium",
                    ctaText: "Adquirir",
                    osText: "Solo Windows (macOS próximamente)",
                    title: "SYKO One",
                    family: "Colaboraciones Especiales",
                    description: "La colaboración definitiva con SYKO Cabs. Un ecosistema completo, 4 amps, cabs, efectos y un set de herramientas suficiente para construir tu sonido moderno de guitarras, tanto en estudio como en vivo.",
                    features: [
                        "Suite completa (Plugin y Standalone)",
                        "Versatilidad total desde tonos cleans hasta highgain",
                        "Tonos optimizados para mezcla y directo",
                        "Respuesta ultra-dinámica"
                    ]
                },
                en: {
                    badge: "Premium",
                    ctaText: "Get it",
                    osText: "Windows only (macOS coming soon)",
                    title: "SYKO One",
                    family: "Special Collaborations",
                    description: "The ultimate collaboration with SYKO Cabs. A complete ecosystem, 4 amps, cabs, effects and an essential toolset to build your modern guitar tone, both in the studio and live.",
                    features: [
                        "Complete suite (Plugin and Standalone)",
                        "Total versatility from clean tones to high gain",
                        "Optimized tones for mix and live performances",
                        "Ultra-dynamic response"
                    ]
                }
            },
            specs: {
                es: {
                    headerBadge: "SPECS",
                    headerTitle: "Especificaciones <span class='highlight'>SYKO One</span>",
                    headerSubtitle: "Un ecosistema de modelado valvular y convolución diseñado para el sonido moderno de guitarras en estudio y vivo.",
                    labels: {
                        character: "Carácter Sonoro",
                        dsp: "Topología DSP & Sag"
                    },
                    ampsTitle: "1. Los 4 Amplificadores Virtuales",
                    ampsDesc: "Arquitecturas modeladas al componente con ecualización dinámica y emulación natural de compresión de válvulas (Power Sag).",
                    amps: [
                        {
                            class: "amp-orange",
                            badge: "High-Gain Británico",
                            icon: "🟠",
                            name: "ORANGE",
                            inspiration: "Inspirado en Rockerverb / Carácter británico clásico",
                            character: "Oscuro, denso y con grano valvular grueso. Pared masiva de medios con filtro anti-fizz para evitar asperezas.",
                            dsp: "Saturación asimétrica con compresión elástica y respuesta esponjosa al pulsar con fuerza.",
                            tags: ["Doom", "Stoner Rock", "Sludge", "Grunge"]
                        },
                        {
                            class: "amp-black",
                            badge: "American Modern High-Gain",
                            icon: "⚫",
                            name: "BLACK",
                            inspiration: "Inspirado en Bogner Uberschall & Shiva",
                            character: "High-Gain moderno, articulado y enfocado. Graves profundos y controlados con máxima definición en afinaciones bajas.",
                            dsp: "Saturación profunda con balance armónico calibrado nota por nota.",
                            tags: ["Metal Moderno", "Hard Rock", "Rítmicas Pesadas"]
                        },
                        {
                            class: "amp-white",
                            badge: "Boutique Quirúrgico",
                            icon: "⚪",
                            name: "WHITE",
                            inspiration: "Inspirado en amplificación Fortin",
                            character: "Ultra High-Gain quirúrgico y agresivo con ataque percusivo instantáneo.",
                            dsp: "Respuesta ultrarrápida sin bola de graves y saturación cortante en medios-altos.",
                            tags: ["Djent", "Metalcore", "7 & 8 Cuerdas", "Chugs"]
                        },
                        {
                            class: "amp-purple",
                            badge: "Boutique Clean / Dynamic",
                            icon: "🟣",
                            name: "PURPLE",
                            inspiration: "Inspirado en Morgan & Matchless",
                            character: "Desde limpios cristalinos y tridimensionales hasta saturación orgánica al romper la señal (Edge of Breakup).",
                            dsp: "Compresor óptico virtual integrado y saturación dinámica reactiva al tacto de la púa.",
                            tags: ["Clean", "Indie", "Shoegaze", "Ambient"]
                        }
                    ],
                    cabTitle: "2. Sección de Cabinas: Dual Cab Simulator & IR Loader",
                    cabDesc: "Convolución estéreo dual de latencia cero capturada en gabinete real con balance continuo.",
                    cabCol1Title: "Arquitectura & Mezcla",
                    cabCol1Items: [
                        { name: "Mezcla Continua (Dual IR Blend)", desc: "Balance fluido entre Cab 1 y Cab 2 para posicionar armónicamente el sonido en estéreo." },
                        { name: "Latencia Cero", desc: "Motor optimizado para tocar en directo y grabar con respuesta inmediata sin retardo." }
                    ],
                    cabCol2Title: "Altavoces & Micrófonos",
                    cabCol2Items: [
                        { name: "Altavoces Disponibles", desc: "Greenback (medios cálidos y agudos sedosos) y Vintage 30 (pegada contundente y medios agresivos)." },
                        { name: "Micrófonos de Estudio", desc: "SM57 (ataque clásico), SM7B (cuerpo cálido) y VR1 (cinta sedoso y natural)." }
                    ],
                    cabCol3Title: "Posicionamiento & Custom IR",
                    cabCol3Items: [
                        { name: "Micro-Posicionamiento Continuo", desc: "Desplazamiento gradual del micrófono desde el centro hacia el borde exterior del cono." },
                        { name: "Cargador Custom IR", desc: "Carga cualquier impulso externo arrastrando el archivo, con ajuste y normalización automática." }
                    ],
                    preFxTitle: "3. Pedales Pre-Amplificador (Input FX)",
                    preFxDesc: "Pedales analógicos virtuales para moldear el ataque, limpiar ruidos y empujar la saturación antes del amplificador.",
                    preFx: [
                        {
                            name: "Noise Gate Inteligente",
                            tag: "Sidechain Gate",
                            desc: "Puerta de ruido rápida diseñada para riffs entrecortados y silencios absolutos.",
                            points: [
                                "Monitoriza la entrada limpia antes de saturar",
                                "Corta silenciosamente a la salida del amplificador",
                                "Conserva intactas las colas naturales de Delay y Reverb"
                            ]
                        },
                        {
                            name: "Carbonado Boost",
                            tag: "Clean Boost",
                            desc: "Inspirado en Fortin 33. Booster transparente que aprieta la señal y define el ataque.",
                            points: [
                                "Empuje limpio que compacta los graves y resalta el ataque",
                                "Filtro pre-configurado para eliminar frecuencias que ensucian la distorsión",
                                "Control sencillo mediante perilla Pressure"
                            ]
                        },
                        {
                            name: "Ónix Overdrive",
                            tag: "Mid-Boost Overdrive",
                            desc: "Inspirado en Tube Screamer con acento en frecuencias medias para cortar en la mezcla.",
                            points: [
                                "Curva de medios optimizada para destacar guitarras en la mezcla",
                                "Clipping asimétrico cálido y orgánico",
                                "Controles de Drive, Tone y Level con empuje extra de volumen"
                            ]
                        }
                    ],
                    postFxTitle: "4. Pedales Post-Amplificador (Loop FX / Tiempo & Espacio)",
                    postFxDesc: "Efectos de modulación y ambiente ubicados después de la etapa de ganancia para máxima claridad.",
                    postFx: [
                        {
                            name: "Ámbar Delay",
                            tag: "Multi-Mode Stereo",
                            desc: "Retardo estéreo versátil con controles de repetición y mezcla, con 3 modos seleccionables:",
                            points: [
                                "Normal: Repeticiones digitales nítidas y prístinas",
                                "Vintage: Eco analógico de cinta con modulación cálida",
                                "Drone: Textura shimmer y retardo en reversa con movimiento estéreo"
                            ]
                        },
                        {
                            name: "Ágata Reverb",
                            tag: "Modulated Space",
                            desc: "Reverberación envolvente de sala y catedral con procesado tridimensional.",
                            points: [
                                "Pre-delay integrado para proteger la definición de la púa",
                                "Chorus estéreo interno que aporta amplitud y riqueza espacial",
                                "Controles intuitivos de tamaño, absorción y mezcla"
                            ]
                        },
                        {
                            name: "Stereo Doubler",
                            tag: "Efecto Haas",
                            desc: "Simulador de guitarra doblada que ensancha pistas mono creando una imagen estéreo amplia.",
                            points: [
                                "Desfase calibrado para dar sensación de dos tomas de guitarra",
                                "Procesamiento alineado para evitar cancelaciones de fase",
                                "Ideal para rítmicas masivas y envolventes"
                            ]
                        }
                    ],
                    eqTitle: "5. Ecualizador Gráfico Maestro",
                    eqDesc: "Módulo post-amplificador y pre-cabina para esculpir de forma precisa el tono general.",
                    eqFilters: "<strong>Filtros Continuos:</strong> Filtros Pasa-Altos y Pasa-Bajos para limpiar subgraves y suavizar agudos extremos.",
                    eqBands: [
                        { f: "Subgraves", r: "Resonancia y profundidad" },
                        { f: "Graves", r: "Pegada y peso del cuerpo" },
                        { f: "Medios-Bajos", r: "Limpieza de barro" },
                        { f: "Cuerpo", r: "Presencia y densidad" },
                        { f: "Ataque", r: "Mordida y toque de púa" },
                        { f: "Articulación", r: "Definición en la mezcla" },
                        { f: "Distorsión", r: "Claridad armónica" },
                        { f: "Brillo", r: "Apertura y claridad" },
                        { f: "Aire", r: "Sheen y espacio armónico" }
                    ],
                    utilTitle: "6. Flujo de Trabajo & Utilidades",
                    utilDesc: "Herramientas integradas para agilizar tu flujo tanto en sesión de estudio como en vivo.",
                    utils: [
                        { name: "Afinador Cromático", desc: "Detección rápida en tiempo real con opción de silenciar la señal (Auto-Mute)." },
                        { name: "Sistema de 8 Escenas", desc: "Cambio instantáneo entre configuraciones mediante clics, teclado o pedalera MIDI." },
                        { name: "Gestor de Presets", desc: "Navegador de fábrica, artistas y usuario con importación y exportación rápida." },
                        { name: "Controles Maestros", desc: "Ajuste general de entrada y salida, balance Dry/Wet y bypass total de la suite." }
                    ],
                    live: {
                        badge: "MODO ESCENARIO",
                        title: "La Sección LIVE (LIVE View)",
                        desc: "Transforma SYKO One en una herramienta optimizada para presentaciones en directo. La interfaz oculta los parámetros detallados de diseño sonoro y despliega una pantalla de alto contraste centrada únicamente en lo esencial para el escenario.",
                        features: [
                            {
                                title: "Afinador de Gran Visibilidad",
                                desc: "Afinador cromático central de gran tamaño, diseñado para ser leído claramente a distancia bajo cualquier iluminación."
                            },
                            {
                                title: "Estado Inmediato del Rig",
                                desc: "Indicadores claros e instantáneos de los pedales encendidos y el canal de amplificador activo."
                            },
                            {
                                title: "Control MIDI en Vivo",
                                desc: "Operación fluida mediante pedalera de piso para cambiar escenas y efectos sin tocar el ordenador, manteniendo tu enfoque absoluto en la interpretación."
                            }
                        ]
                    }
                },
                en: {
                    headerBadge: "SPECS",
                    headerTitle: "<span class='highlight'>SYKO One</span> Specifications",
                    headerSubtitle: "A tube modeling and convolution ecosystem engineered for the modern guitar sound in the studio and live.",
                    labels: {
                        character: "Sonic Character",
                        dsp: "DSP Topology & Sag"
                    },
                    ampsTitle: "1. The 4 Virtual Amplifiers",
                    ampsDesc: "Component-level modeled architectures with dynamic EQ and natural tube power supply compression (Power Sag).",
                    amps: [
                        {
                            class: "amp-orange",
                            badge: "Classic British High-Gain",
                            icon: "🟠",
                            name: "ORANGE",
                            inspiration: "Inspired by Rockerverb / Classic British high-gain",
                            character: "Dark, thick tube grain with a massive midrange wall and anti-fizz filtering to tame harshness.",
                            dsp: "Asymmetrical saturation with elastic compression and a spongy feel under hard picking.",
                            tags: ["Doom", "Stoner Rock", "Sludge", "Grunge"]
                        },
                        {
                            class: "amp-black",
                            badge: "American Modern High-Gain",
                            icon: "⚫",
                            name: "BLACK",
                            inspiration: "Inspired by Bogner Uberschall & Shiva",
                            character: "Modern, articulate high-gain with deep, controlled lows and maximum clarity in low tunings.",
                            dsp: "Deep saturation with harmonic balance calibrated note by note.",
                            tags: ["Modern Metal", "Hard Rock", "Tight Rhythms"]
                        },
                        {
                            class: "amp-white",
                            badge: "Surgical Boutique",
                            icon: "⚪",
                            name: "WHITE",
                            inspiration: "Inspired by Fortin amplification",
                            character: "Surgical, aggressive ultra high-gain with instant percussive pick attack.",
                            dsp: "Ultra-fast response with zero low-end mud and razor-sharp upper-midrange saturation.",
                            tags: ["Djent", "Metalcore", "7 & 8 Strings", "Chugs"]
                        },
                        {
                            class: "amp-purple",
                            badge: "Boutique Clean / Dynamic",
                            icon: "🟣",
                            name: "PURPLE",
                            inspiration: "Inspired by Morgan & Matchless",
                            character: "From pristine 3D cleans to organic breakup when digging into the strings (Edge of Breakup).",
                            dsp: "Integrated virtual optical compressor with touch-sensitive dynamic response.",
                            tags: ["Clean", "Indie", "Shoegaze", "Ambient"]
                        }
                    ],
                    cabTitle: "2. Dual Cab Simulator & IR Loader",
                    cabDesc: "Zero-latency dual stereo convolution captured from a real cabinet with smooth blending.",
                    cabCol1Title: "Architecture & Blend",
                    cabCol1Items: [
                        { name: "Continuous Dual IR Blend", desc: "Smooth balance between Cab 1 and Cab 2 to position your tone harmoniously across the stereo field." },
                        { name: "Zero Latency", desc: "Optimized engine for live performance and recording with instant response." }
                    ],
                    cabCol2Title: "Speakers & Microphones",
                    cabCol2Items: [
                        { name: "Available Speakers", desc: "Greenback (warm woody mids, silky highs) and Vintage 30 (punchy lows and aggressive midrange)." },
                        { name: "Studio Microphones", desc: "SM57 (classic attack), SM7B (warm body), and VR1 (silky passive ribbon)." }
                    ],
                    cabCol3Title: "Positioning & Custom IR",
                    cabCol3Items: [
                        { name: "Continuous Micro-Positioning", desc: "Smooth, gradual microphone placement from cone center to outer edge." },
                        { name: "Custom IR Loader", desc: "Drag and drop any third-party impulse response with automatic adjustment." }
                    ],
                    preFxTitle: "3. Pre-Amp Pedalboard (Input FX)",
                    preFxDesc: "Virtual analog pedals to sculpt pick attack, eliminate unwanted noise, and push saturation before the amp.",
                    preFx: [
                        {
                            name: "Smart Noise Gate",
                            tag: "Sidechain Gate",
                            desc: "Fast, surgical noise gate built for staccato riffing and dead silence.",
                            points: [
                                "Monitors the clean guitar input before saturation",
                                "Silently attenuates at the amplifier output",
                                "Preserves Delay and Reverb tails completely intact"
                            ]
                        },
                        {
                            name: "Carbonado Boost",
                            tag: "Clean Boost",
                            desc: "Inspired by Fortin 33. Transparent booster designed to tighten the front end and define pick attack.",
                            points: [
                                "Clean push that compacts low frequencies and enhances definition",
                                "Pre-configured filtering to remove mud before high gain",
                                "Single-knob Pressure control for immediate results"
                            ]
                        },
                        {
                            name: "Ónix Overdrive",
                            tag: "Mid-Boost Overdrive",
                            desc: "Inspired by Tube Screamer with a focused midrange bump to cut cleanly through any mix.",
                            points: [
                                "Mid-focused curve to highlight lead and rhythm guitars",
                                "Organic, warm asymmetrical clipping",
                                "Drive, Tone, and Level controls with generous output boost"
                            ]
                        }
                    ],
                    postFxTitle: "4. Post-Amp FX (Time & Space / FX Loop)",
                    postFxDesc: "Modulation and spatial processing placed after the gain stages for pristine, spacious definition.",
                    postFx: [
                        {
                            name: "Ámbar Delay",
                            tag: "Multi-Mode Stereo",
                            desc: "Versatile stereo delay with feedback and mix controls, featuring 3 selectable modes:",
                            points: [
                                "Normal: Crisp, high-fidelity digital repeats",
                                "Vintage: Warm tape echo with subtle modulation",
                                "Drone: Shimmer texture and reverse ambient delay with stereo movement"
                            ]
                        },
                        {
                            name: "Ágata Reverb",
                            tag: "Modulated Space",
                            desc: "Enveloping room and cathedral reverberation with three-dimensional depth.",
                            points: [
                                "Integrated pre-delay to protect note attack definition",
                                "Internal stereo chorus that expands width and richness",
                                "Intuitive controls for room size, damping, and mix"
                            ]
                        },
                        {
                            name: "Stereo Doubler",
                            tag: "Haas Effect",
                            desc: "Double-track simulator that widens mono tracks into an expansive stereo wall of sound.",
                            points: [
                                "Calibrated delay offset giving the feel of two tracked guitars",
                                "Phase-aligned processing to avoid destructive cancellation",
                                "Ideal for instant massive rhythm tracks"
                            ]
                        }
                    ],
                    eqTitle: "5. Master Graphic Equalizer",
                    eqDesc: "Post-amplifier and pre-cabinet module to sculpt the overall tonal balance with precision.",
                    eqFilters: "<strong>Continuous Filters:</strong> High-Pass and Low-Pass filters to clean sub-lows and smooth out harsh highs.",
                    eqBands: [
                        { f: "Sub-Bass", r: "Cabinet resonance and depth" },
                        { f: "Lows", r: "Body punch and weight" },
                        { f: "Low-Mids", r: "Mud cleanup" },
                        { f: "Body", r: "Presence and density" },
                        { f: "Attack", r: "Pick bite and clarity" },
                        { f: "Articulation", r: "Mix cut and definition" },
                        { f: "Distortion", r: "Harmonic clarity" },
                        { f: "Brightness", r: "Openness and sheen" },
                        { f: "Air", r: "Top-end space" }
                    ],
                    utilTitle: "6. Workflow & Utilities",
                    utilDesc: "Built-in tools to streamline your creative process both in the studio and live.",
                    utils: [
                        { name: "Chromatic Tuner", desc: "Real-time accurate pitch detection with silent tuning (Auto-Mute)." },
                        { name: "8 Instant Scenes", desc: "Instant preset switching via mouse clicks, keyboard hotkeys, or MIDI." },
                        { name: "Preset Manager", desc: "Categorized browser for factory, artist, and user patches with fast import/export." },
                        { name: "Master Controls", desc: "Master input/output gain, Dry/Wet mix balance, and complete suite bypass." }
                    ],
                    live: {
                        badge: "STAGE MODE",
                        title: "LIVE View (Stage Section)",
                        desc: "Transforms SYKO One into an optimized stage tool. The interface conceals detailed sound design knobs and reveals a high-contrast display focused strictly on what matters during live performance.",
                        features: [
                            {
                                title: "High-Visibility Tuner",
                                desc: "Large central chromatic tuner engineered to be clearly readable from a distance under any stage lighting conditions."
                            },
                            {
                                title: "Immediate Rig Status",
                                desc: "Clear, instant indicators showing active stompbox states and the current amplifier channel."
                            },
                            {
                                title: "Hands-Free MIDI Control",
                                desc: "Seamless floorboard operation for switching scenes and effects without touching your computer, keeping your focus on playing."
                            }
                        ]
                    }
                }
            }
        },
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
                    family: "Impulso Primario Family",
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
            gumroadUrl: "https://amatistaefectos.gumroad.com/l/impulsoprimario",
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
                        "Ónix: Overdrive enfocado para sonido moderno y afinaciones bajas",
                        "Amatista: Preamplificación cortante y articulada",
                        "Obsidiana: Caos masivo para tunings bajos"
                    ]
                },
                en: {
                    badge: "Premium",
                    ctaText: "Get it",
                    osText: "Windows only (macOS coming soon)",
                    title: "Impulso Primario Pack",
                    family: "Bundle",
                    description: "This bundle includes the complete AMATISTA gain suite: <strong>Carbonado Boost, Ónix Overdrive, Amatista Distortion, and Obsidiana Fuzz.</strong><br><br>Designed as a natural progression of sound, where each element redefines the limit of the other. It is not a simple collection of effects; it is an ecosystem created under the visual and auditory philosophy of the brand to cover the entire modern and experimental gain spectrum.",
                    features: [
                        "4 gain tools in high resolutions (2x/4x Oversampling)",
                        "Carbonado: Strict and clear boost",
                        "Ónix: Focused overdrive for modern tone and low tunings",
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
            gumroadUrl: "https://amatistaefectos.gumroad.com/l/onixoverdrive",
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
                    family: "Impulso Primario Family",
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
            gumroadUrl: "https://amatistaefectos.gumroad.com/l/amatistadistortion",
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
                    family: "Impulso Primario Family",
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
            gumroadUrl: "https://amatistaefectos.gumroad.com/l/obsidianafuzz",
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
                    description: "Obsidiana no es discreto, busca imponer presencia. Base sólida para tonos masivos y densos. Saturación orgánica, abierta con graves profundos y presentes. Muro de sonido y textura con carácter real.<br><br>Construcción basada en una etapa limitadora tanh no lineal agresiva. Hecho para Doom, Sludge y sonidos modernos masivos.",
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
                    family: "Impulso Primario Family",
                    description: "Obsidiana isn’t subtle, it aims to dominate the mix. A solid foundation for massive, dense tones. Organic, open saturation with deep, present lows. A wall of sound and texture with real character.<br><br>Construction based on an aggressive non-linear tanh limiting stage. Made for Doom, Sludge, and massive modern sounds.",
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

        renderActionBox(lang);
        renderSpecs(lang);
    }

    function renderSpecs(lang) {
        const specsContainer = document.getElementById('pg-specs-section');
        if (!specsContainer) return;

        if (!data.specs) {
            specsContainer.style.display = 'none';
            return;
        }

        const s = data.specs[lang] || data.specs['es'];
        specsContainer.style.display = 'block';

        specsContainer.innerHTML = `
            <div class="specs-header">
                <span class="specs-badge">${s.headerBadge}</span>
                <h2 class="specs-title">${s.headerTitle}</h2>
                <p class="specs-subtitle">${s.headerSubtitle}</p>
            </div>

            <!-- 1. Los 4 Amplificadores -->
            <div class="specs-block">
                <div class="specs-block-header">
                    <h3 class="specs-block-title">${s.ampsTitle}</h3>
                    <p class="specs-block-desc">${s.ampsDesc}</p>
                </div>
                <div class="specs-amps-grid">
                    ${s.amps.map(amp => `
                        <div class="amp-spec-card ${amp.class}">
                            <div class="amp-header">
                                <span class="amp-badge">${amp.badge}</span>
                                <span style="font-size: 1.1rem;">${amp.icon}</span>
                            </div>
                            <h4 class="amp-title">${amp.name}</h4>
                            <div class="amp-sub">${amp.inspiration}</div>
                            <div class="amp-spec-item">
                                <span class="label">${s.labels.character}</span>
                                <span class="val">${amp.character}</span>
                            </div>
                            <div class="amp-spec-item">
                                <span class="label">${s.labels.dsp}</span>
                                <span class="val">${amp.dsp}</span>
                            </div>
                            <div class="amp-tags">
                                ${amp.tags.map(t => `<span class="amp-tag">${t}</span>`).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- 2. Dual Cab Simulator & IR Loader -->
            <div class="specs-block">
                <div class="specs-block-header">
                    <h3 class="specs-block-title">${s.cabTitle}</h3>
                    <p class="specs-block-desc">${s.cabDesc}</p>
                </div>
                <div class="specs-cab-container">
                    <div>
                        <h4 class="cab-col-title">${s.cabCol1Title}</h4>
                        <div class="cab-pill-group">
                            ${s.cabCol1Items.map(item => `
                                <div class="cab-pill-item">
                                    <strong>${item.name}</strong>
                                    <span>${item.desc}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div>
                        <h4 class="cab-col-title">${s.cabCol2Title}</h4>
                        <div class="cab-pill-group">
                            ${s.cabCol2Items.map(item => `
                                <div class="cab-pill-item">
                                    <strong>${item.name}</strong>
                                    <span>${item.desc}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div>
                        <h4 class="cab-col-title">${s.cabCol3Title}</h4>
                        <div class="cab-pill-group">
                            ${s.cabCol3Items.map(item => `
                                <div class="cab-pill-item">
                                    <strong>${item.name}</strong>
                                    <span>${item.desc}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <!-- 3. Pre-Amp Pedalboard (Input FX) -->
            <div class="specs-block">
                <div class="specs-block-header">
                    <h3 class="specs-block-title">${s.preFxTitle}</h3>
                    <p class="specs-block-desc">${s.preFxDesc}</p>
                </div>
                <div class="specs-cards-grid">
                    ${s.preFx.map(fx => `
                        <div class="fx-spec-card">
                            <div class="fx-top">
                                <span class="fx-name">${fx.name}</span>
                                <span class="fx-tag">${fx.tag}</span>
                            </div>
                            <p class="fx-desc">${fx.desc}</p>
                            <ul class="fx-features-list">
                                ${fx.points.map(p => `<li>${p}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- 4. Post-Amp FX (Tiempo & Espacio) -->
            <div class="specs-block">
                <div class="specs-block-header">
                    <h3 class="specs-block-title">${s.postFxTitle}</h3>
                    <p class="specs-block-desc">${s.postFxDesc}</p>
                </div>
                <div class="specs-cards-grid">
                    ${s.postFx.map(fx => `
                        <div class="fx-spec-card">
                            <div class="fx-top">
                                <span class="fx-name">${fx.name}</span>
                                <span class="fx-tag">${fx.tag}</span>
                            </div>
                            <p class="fx-desc">${fx.desc}</p>
                            <ul class="fx-features-list">
                                ${fx.points.map(p => `<li>${p}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- 5 & 6. EQ Maestro & Utilidades Globales -->
            <div class="specs-block">
                <div class="specs-split-grid">
                    <!-- EQ Maestro -->
                    <div class="specs-panel">
                        <h3 class="specs-panel-title">${s.eqTitle}</h3>
                        <p class="specs-panel-sub">${s.eqDesc}</p>
                        <div style="font-size: 0.82rem; color: #cbd5e1; margin-bottom: 0.8rem; background: rgba(255,255,255,0.03); padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.06);">
                            ${s.eqFilters}
                        </div>
                        <div class="eq-bands-wrapper">
                            ${s.eqBands.map(b => `
                                <div class="eq-band-chip">
                                    <span class="freq">${b.f}</span>
                                    <span class="role">${b.r}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Utilidades Globales -->
                    <div class="specs-panel">
                        <h3 class="specs-panel-title">${s.utilTitle}</h3>
                        <p class="specs-panel-sub">${s.utilDesc}</p>
                        <div class="util-grid">
                            ${s.utils.map(u => `
                                <div class="util-card">
                                    <strong>${u.name}</strong>
                                    <p>${u.desc}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <!-- 7. Modo LIVE -->
            ${s.live ? `
            <div class="specs-block" style="margin-bottom: 1rem;">
                <div class="specs-live-card">
                    <div class="specs-live-header">
                        <span class="specs-live-badge">${s.live.badge}</span>
                        <h3 class="specs-live-title">${s.live.title}</h3>
                        <p class="specs-live-desc">${s.live.desc}</p>
                    </div>
                    <div class="specs-live-grid">
                        ${s.live.features.map(f => `
                            <div class="specs-live-feature">
                                <strong>${f.title}</strong>
                                <p>${f.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            ` : ''}
        `;
    }

    function renderActionBox(lang) {
        const ctaBtn = document.getElementById('pg-cta-btn');
        const purchaseContainer = document.getElementById('purchase-container');
        const downloadSection = document.getElementById('pg-download-section');
        const comingSoonContainer = document.getElementById('pg-coming-soon-container');

        // Soporte opcional para probar rápidamente vía URL: ?released=true o ?released=false
        const urlReleased = urlParams.get('released');
        const isReleased = (urlReleased !== null)
            ? (urlReleased === 'true' || urlReleased === '1')
            : (data.isReleased !== false);

        if (!isReleased) {
            // ==========================================
            // MODO PRE-LANZAMIENTO: Aviso de lanzamiento 11/11
            // ==========================================
            if (ctaBtn) ctaBtn.style.display = 'none';
            if (purchaseContainer) purchaseContainer.style.display = 'none';
            if (downloadSection) downloadSection.style.display = 'none';

            if (comingSoonContainer) {
                comingSoonContainer.style.display = 'block';
                comingSoonContainer.innerHTML = `
                    <div class="coming-soon-box">
                        <div class="coming-soon-icon">🚀</div>
                        <h3 class="coming-soon-title">
                            ${lang === 'en' ? 'Coming Soon: Launch 11/11' : 'Próximamente lanzamiento 11/11'}
                        </h3>
                        <p class="coming-soon-desc">
                            ${lang === 'en'
                        ? 'SYKO One will be available for purchase and download on November 11th. In the meantime, you can explore the user manual and technical specifications below.'
                        : 'SYKO One estará disponible para adquisición y descarga a partir del 11 de Noviembre. Mientras tanto, puedes explorar las especificaciones y el manual de usuario a continuación.'}
                        </p>
                        <button class="btn btn-primary btn-block btn-coming-soon" disabled>
                            ${lang === 'en' ? 'Available on 11/11' : 'Próximamente lanzamiento 11/11'}
                        </button>
                    </div>
                `;
            }

            const badgeEl = document.getElementById('pg-badge');
            if (badgeEl) {
                badgeEl.innerHTML = lang === 'en' ? 'Coming Soon (11/11)' : 'Próximamente (11/11)';
            }
            return;
        }

        // ==========================================
        // MODO PRODUCCIÓN: Habilitado para compra/descarga
        // ==========================================
        if (comingSoonContainer) {
            comingSoonContainer.style.display = 'none';
            comingSoonContainer.innerHTML = '';
        }

        const langData = data.translations[lang] || data.translations['es'];
        const badgeEl = document.getElementById('pg-badge');
        if (badgeEl) {
            badgeEl.innerHTML = langData.badge;
        }

        if (data.price) {
            // Plugin de pago: Inyectar formulario HTML
            if (ctaBtn) ctaBtn.style.display = 'none';
            if (purchaseContainer) purchaseContainer.style.display = 'block';

            let discountMultiplier = 0.5;
            let discountLabel = "50% OFF";
            let promoText = "a mitad de precio";

            if (data.id === "syko-one") {
                discountMultiplier = 0.67; // 33% OFF -> pay 67%
                discountLabel = "33% OFF";
                promoText = "con descuento";
            }

            const prexPrice = (parseFloat(data.price) * discountMultiplier).toFixed(2);

            purchaseContainer.innerHTML = `
                <a href="${data.gumroadUrl}" target="_blank" class="btn btn-primary btn-block glow-effect" style="margin-top: 15px; display: inline-block; text-align: center; text-decoration: none;">Comprar — $${data.price} USD</a>
                
                <div style="margin-top: 20px; padding: 15px; border: 1px solid rgba(175, 122, 235, 0.3); border-radius: var(--radius); background: rgba(175, 122, 235, 0.05); text-align: center;">
                    <p style="color: var(--clr-amethyst-light); font-weight: 600; margin-bottom: 12px; font-size: 0.9rem;">¿Tienes PREX? (Argentina / Uruguay)</p>
                    <div class="donate-btn-option" style="cursor: pointer; margin-bottom: 0;" onclick="document.getElementById('plugin-prex-details').classList.toggle('show')">
                        <strong>Transferencia PREX (${discountLabel})</strong>
                        <span>Pago directo y envío de comprobante.</span>
                    </div>
                    <div id="plugin-prex-details" class="prex-details-card">
                        <p style="color: var(--clr-text-muted); font-size: 0.9rem; margin-bottom: 15px;">Monto exacto a transferir: <strong style="color: #1ed760; font-size: 1.1rem;">$${prexPrice} USD</strong></p>
                        <p style="margin-bottom: 5px; color: var(--clr-text-muted); font-size: 0.9rem;">A nombre de Álvaro (Cuenta Uruguay)</p>
                        <h4 style="color: white; letter-spacing: 2px; font-size: 1.4rem;">PREX: 1840539</h4>
                        <p style="color: var(--clr-text-muted); margin-top: 15px; font-size: 0.85rem; line-height: 1.4;">Envía tu comprobante de pago a <strong style="color: #fff;">orders@amatista-efectos.online</strong> para recibir el plugin de forma manual ${promoText}.</p>
                    </div>
                </div>
            `;
        } else {
            // Plugin gratuito: usar el enlace CTA predeterminado (link de descarga directo)
            if (ctaBtn) {
                ctaBtn.style.display = 'block';
                ctaBtn.href = data.downloadUrl || '#';
            }
            if (purchaseContainer) purchaseContainer.style.display = 'none';
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
