/**
 * Amatista Efectos - Docs Multilingual Script
 */

const docsTranslations = {
    es: {
        common: {
            back: "← Volver a la Web Principal",
            headerTitle: "Amatista Efectos",
            headerDesc: "Manuales de Usuario y Documentación Técnica",
            indexTitle: "Índice",
            idx1: "1. Bienvenida",
            idx2: "2. Nuestro Pacto Creativo",
            idx3: "3. Guía de Instalación",
            idx4: "4. Manuales de Plugins"
        },
        bienvenida: {
            "langLabel": "Idioma",
            "meta": "AMATISTA · Plugins<br/>Versión 1.0.0",
            "kicker": "Bienvenido a AMATISTA",
            "headline": "Gracias por utilizar nuestros plugins",
            "subhead": "y por formar parte del ecosistema <strong>AMATISTA</strong> efectos digitales boutique.",
            "main": [
                "<p>AMATISTA nace como un proyecto independiente, enfocado en el desarrollo de pedales digitales minimalistas, inspirados en el sonido del metal moderno, las afinaciones bajas y una filosofía clara: <strong>controles simples, propósito definido y carácter sonoro sólido</strong>.</p>",
                "<p>Cada plugin está diseñado con atención al detalle, tanto en sonido como en experiencia de uso, priorizando herramientas que realmente aporten valor en un contexto musical real.</p>",
                "<div class=\"rule\" role=\"separator\" style=\"height:1px; background:#ddd; margin:20px 0;\"></div>",
                "<div class=\"callout\" style=\"padding:15px; border-left:4px solid var(--docs-accent); background:#f8f9fa; margin-bottom:15px;\"><div class=\"t\"><strong>Tu apoyo deja huella</strong></div><p style=\"margin:5px 0 0 0;\">AMATISTA se sostiene con comunidad. Tu compra ayuda a mejorar, mantener y crear los próximos artefactos.</p></div>",
                "<div class=\"callout\" style=\"padding:15px; border-left:4px solid #7cf1c6; background:rgba(124,241,198,.06);\"><div class=\"t\"><strong>Influenciá el futuro</strong></div><p style=\"margin:5px 0 0 0;\">Quienes apoyan AMATISTA participan en votaciones y feedback para definir el rumbo de próximos plugins.</p></div>"
            ],
            "linksLabel": "Enlaces",
            "contactLabel": "Contacto y comunidad",
            "siteLabel": "Sitio web:",
            "copyright": "© AMATISTA efectos digitales boutique",
            "footerSig": "AMATISTA · Efectos Digitales Boutique"
        },
        impulsoPrimario: {
            "langLabel": "Idioma",
            "meta": "Manual práctico · Impulso Primario",
            "kicker": "Manual práctico",
            "title": "Impulso Primario · Arquitectura de la Saturación",
            "subtitle": "Guía orientada al músico para Boost, Overdrive, Fuzz y Distortion. Roles simples, resultados sólidos.",
            "chips": ["Carbonado Boost", "Ónix Overdrive", "Obsidiana Fuzz", "Amatista Distortion", "Combos y fixes"],
            "asideBadges": [
                { "label": "Familia", "value": "Impulso primario" },
                { "label": "Objetivo", "value": "Ganancia coherente" },
                { "label": "Enfoque", "value": "Controles simples" },
                { "label": "Resultado", "value": "Listo mezcla" }
            ],
            "asideTitle": "Orden rápido",
            "asideBody": [
                "<p><strong>Cadena base:</strong> Guitarra &rarr; Carbonado &rarr; Ónix &rarr; Amatista &rarr; Obsidiana &rarr; Amp / IR</p>",
                "<p>Pensalo as&iacute;: Carbonado empuja, Ónix limpia, Amatista construye, Obsidiana destruye.</p>",
                "<p class='muted' style='color:#666; font-size:0.9em; margin-top:10px;'>Tip: Stackear pedales con menos gain suena mejor que uno solo al m&aacute;ximo.</p>"
            ],
            "asideNoteTitle": "El input manda",
            "asideNoteBody": "Todo responde a tu guitarra, pickups y ataque. Baj&aacute; el volumen de la guitarra y prob&aacute;: vas a descubrir otro pedal dentro del mismo.",
            "asideRecipesTitle": "3 recetas r&aacute;pidas",
            "asideRecipesBody": "Modern Metal: Carbonado(50-70%) &rarr; Ónix(Tone alto) &rarr; Amatista(Structure bajo).<br/>Doom/Sludge: Ónix &rarr; Obsidiana(Gain alto, Bass alto) &rarr; Amatista(Structure alto).<br/>Clean Boost + Edge: Carbonado &rarr; Ónix(drive bajo).",
            "footerLeft": "AMATISTA · Efectos Digitales Boutique",
            "sections": [
                "<h2>Visi&oacute;n General y Filosof&iacute;a</h2><p>La suite AMATISTA est&aacute; dise&ntilde;ada como una progresi&oacute;n natural:</p><ul><li>Carbonado (Boost) &rarr; Impulso</li><li>Ónix (Overdrive) &rarr; Enfoque</li><li>Amatista (Distortion) &rarr; Estructura</li><li>Obsidiana (Fuzz) &rarr; Colapso</li></ul><p>Cada uno no solo agrega ganancia... redefine el comportamiento del siguiente. Esto no es una colecci&oacute;n de efectos. Es un sistema. Cada etapa es una decisi&oacute;n. Cada decisi&oacute;n cambia lo que viene despu&eacute;s.</p>",
                "<div class='plugin-manual' id='carbonado'><h3>CARBONADO BOOST</h3><p><strong>Qu&eacute; es:</strong> un booster r&aacute;pido, agresivo y dise&ntilde;ado para empujar lo que venga despu&eacute;s. No colorea innecesariamente. Empuja.</p><p><strong>Controles:</strong></p><ul><li><strong>Pressure:</strong> El &uacute;nico control. Hasta +22 dB de boost. Crece de forma musical, no lineal.</li><li><strong>Bypass:</strong> Ruta limpia directa.</li></ul><h4>Qu&eacute; est&aacute; pasando por dentro</h4><ul><li><strong>Oversampling (2x):</strong> Mejora calidad y evita artefactos.</li><li><strong>Tightening (High Pass):</strong> Recorta graves antes del boost (~100 Hz).</li><li><strong>Anti-Hiss (Low Pass):</strong> Suaviza agudos extremos (~10 kHz).</li><li><strong>Saturaci&oacute;n tipo op-amp:</strong> Simulando l&iacute;mites el&eacute;ctricos reales a altas presiones.</li></ul><h4>C&oacute;mo usarlo</h4><ul><li><strong>Tight Boost:</strong> Pressure 40-70% antes de distorsi&oacute;n para ataque definido.</li><li><strong>Clean Push:</strong> Pressure 10-30% para levantar volumen.</li></ul><p><em>Nota: Este pedal no es neutral en graves; siempre tiende a ajustar el low-end. Funciona mejor como primer elemento de la cadena.</em></p></div>",
                "<div class='plugin-manual' id='onix'><h3>ÓNIX OVERDRIVE</h3><p><strong>Qu&eacute; es:</strong> un overdrive moderno refinado para contexto actual. Menos barro, mejor respuesta en mezcla. Hecho para enfocar la se&ntilde;al.</p><p><strong>Controles:</strong></p><ul><li><strong>Drive:</strong> Aumenta la saturaci&oacute;n y compresi&oacute;n sin perder claridad.</li><li><strong>Tone:</strong> Filtro pasa bajos din&aacute;mico, afecta arm&oacute;nicos.</li><li><strong>Level:</strong> Volumen de salida (-18 dB a +12 dB).</li></ul><h4>Qu&eacute; est&aacute; pasando por dentro</h4><ul><li><strong>Oversampling (4x) y Pre-shaping:</strong> Recorte de graves y filtro de agudos suave.</li><li><strong>Mid Boost:</strong> Refuerzo en medios (~720 Hz) para cortar en mezcla.</li><li><strong>Clipping asim&eacute;trico y mezcla din&aacute;mica:</strong> Sensaci&oacute;n m&aacute;s org&aacute;nica, menos 'digital'. A bajo drive hay m&aacute;s se&ntilde;al limpia.</li></ul><h4>C&oacute;mo usarlo</h4><ul><li><strong>Clean Boost:</strong> Drive 0-15%, Tone 50-70%, Level alto.</li><li><strong>Crunch moderno:</strong> Drive 30-60%, Tone 50%.</li></ul><p><em>Nota: Recorta graves antes de saturar para mantener claridad. Excelente como 'tightener' en metal moderno.</em></p></div>",
                "<div class='plugin-manual' id='amatista'><h3>AMATISTA DISTORTION</h3><p><strong>Qu&eacute; es:</strong> un preamp + power stage condensado. Puede comportarse como un amplificador moderno, un crunch org&aacute;nico, o colapsar en una textura viva. Donde Obsidiana destruye, Amatista esculpe.</p><p><strong>Controles:</strong></p><ul><li><strong>Gain:</strong> Controla m&uacute;ltiples etapas de ganancia.</li><li><strong>Structure:</strong> El ADN del pedal. 0.0-0.30 Tight/Modern; 0.30-0.65 Amp-like; 0.65-1.0 Collapse/Textural. Cambia simetr&iacute;a y headroom.</li><li><strong>Body:</strong> Ecualizador low shelf (~120 Hz).</li><li><strong>Presence:</strong> High shelf (~3.8 kHz) para claridad y corte.</li></ul><h4>Qu&eacute; est&aacute; pasando por dentro</h4><ul><li><strong>Oversampling (2x) y Preamp Stage:</strong> Define din&aacute;mica.</li><li><strong>Distortion Stage:</strong> Clipping controlado suave y asim&eacute;trico.</li><li><strong>SAG:</strong> En valores altos de Structure la se&ntilde;al 'cede', simulando ca&iacute;da de voltaje.</li><li><strong>De-Fizz:</strong> Filtro din&aacute;mico para suavizar agudos.</li></ul><h4>C&oacute;mo usarlo</h4><ul><li><strong>Modern Metal Tight:</strong> Gain 50-70%, Structure 10-25%.</li><li><strong>Collapse Mode:</strong> Gain alto, Structure 75-100%.</li></ul><p><em>Nota: Structure cambia TODO. Si algo no suena bien, mov&eacute; este knob primero.</em></p></div>",
                "<div class='plugin-manual' id='obsidiana'><h3>OBSIDIANA FUZZ</h3><p><strong>Qu&eacute; es:</strong> dise&ntilde;ado para transformar tu se&ntilde;al en una masa densa y viva. No es un fuzz educado: es un artefacto que responde a cu&aacute;nto caos invoqu&eacute;s.</p><p><strong>Controles:</strong></p><ul><li><strong>Level (Collapse):</strong> Controla el volumen final sin cambiar el car&aacute;cter (-18 a +12 dB).</li><li><strong>Gain (Fury):</strong> Intensidad del fuzz, llegando a compresi&oacute;n extrema.</li><li><strong>Bass:</strong> Cortes o boosts de hasta &plusmn;12 dB alrededor de ~100 Hz.</li><li><strong>Treble (Caos):</strong> Generador de comportamiento. Cambia c&oacute;mo distorsiona y abre/cierra la frecuencia.</li></ul><h4>Qu&eacute; est&aacute; pasando por dentro</h4><ul><li><strong>Oversampling (4x) y Pre-filtering:</strong> Recorte de graves antes del fuzz.</li><li><strong>Non-linearity:</strong> Saturaci&oacute;n tipo tanh y clipping duro, mezcla con se&ntilde;al rectificada (estilo octave-fuzz).</li><li><strong>Post filtering:</strong> Suaviza el 'fizz'.</li></ul><h4>C&oacute;mo usarlo</h4><ul><li><strong>Tight Modern Metal:</strong> Gain 60-80%, Bass 30-45%, Treble 60-75%.</li><li><strong>Doom / Sludge:</strong> Gain alto, Bass 70-100%, Treble bajo.</li></ul><p><em>Nota: Reacciona mucho al volumen de tu guitarra. Obsidiana no busca ser transparente. Busca ser inevitable.</em></p></div>"
            ]
        },
        frecuenciaBase: {
            "langLabel": "Idioma",
            "meta": "Manual práctico · Frecuencia Base",
            "kicker": "Manual práctico",
            "title": "Frecuencia Base · Saturación para Bajo",
            "subtitle": "Granate Bass Saturator: mantiene el fundamento sólido, agrega carácter en el rango medio-alto y permite controlar cuánto grano entra en la mezcla.",
            "chips": ["Granate Bass Saturator", "Posicionamiento", "Contextos"],
            "asideBadges": [
                { "label": "Familia", "value": "Frecuencia Base" },
                { "label": "Objetivo", "value": "Bajo moderno" },
                { "label": "Enfoque", "value": "Pegada y control" },
                { "label": "Resultado", "value": "Ataque definido" }
            ],
            "asideTitle": "Posición en la cadena",
            "asideBody": [
                "<p><strong>Antes del amp sim:</strong> Actúa como si fuera un pedal físico empujando el amplificador. Ataque definido y graves firmes.</p>",
                "<p><strong>Después del amp sim:</strong> No empuja el ampli, colorea el resultado final. Sensación más controlada, ideal para estudio.</p>",
                "<p class='muted' style='color:#666; font-size:0.9em; margin-top:10px;'>Tip: Granate antes del compresor te da una distorsión más estable y 'tight'. Después del compresor suena más homogéneo y procesado.</p>"
            ],
            "asideNoteTitle": "Filosofía",
            "asideNoteBody": "Granate no busca cubrir el bajo de distorsión. Busca reforzar su carácter. Punto de partida: GRANATE 45%, CLANK 40%, BLEND 50%.",
            "asideRecipesTitle": "Contextos de uso",
            "asideRecipesBody": "Metal moderno: Granate medio-alto, Clank medio, Blend 50-65%.<br/>Rock alternativo: Granate medio, Clank medio-alto, Blend 45-55%.<br/>Studio shaping: Granate bajo, Clank bajo, Blend 30-40%.",
            "footerLeft": "AMATISTA · Efectos Digitales Boutique",
            "sections": [
                "<h2>Visi&oacute;n General</h2><p>Granate es un saturador pensado para bajo moderno: mantiene el fundamento sólido, agrega carácter en el rango medio-alto y permite controlar con precisión cuánto grano entra en la mezcla. La idea es simple: pegada, definición y control del low-end, sin perder identidad.</p>",
                "<div class='plugin-manual' id='granate'><h3>GRANATE BASS SATURATOR</h3><p><strong>Arquitectura sonora:</strong> Granate trabaja en dos caminos. La señal limpia mantiene el low-end estable, y la señal saturada es filtrada y moldeada para aportar textura sin embarrar. Ambas se mezclan de forma controlada.</p><p><strong>Controles:</strong></p><ul><li><strong>Granate:</strong> Controla la cantidad de saturación. Valores bajos aportan calor y densidad. En rango medio aparece grano articulado. Alto ofrece saturación agresiva. T&eacute;cnicamente aumenta el drive y ajusta el filtrado interno.</li><li><strong>Clank:</strong> Define el ataque y presencia. Bajo da un tono redondo. Medio da ataque claro (ideal con p&uacute;a). Alto da m&aacute;s presencia en 2–3 kHz. Funciona como un realce din&aacute;mico.</li><li><strong>Blend:</strong> El coraz&oacute;n del pedal. Mezcla se&ntilde;al limpia y saturada. Mantener entre 40% y 60% para no perder pegada en afinaciones bajas.</li><li><strong>Level:</strong> Controla el volumen de salida. Incluye compensaci&oacute;n interna para mantener balance al subir el drive.</li></ul><h4>Recomendaciones pr&aacute;cticas</h4><ul><li>Si el bajo pierde peso, baja BLEND antes de bajar DRIVE.</li><li>Si la mezcla se vuelve opaca, sub&iacute; CLANK antes de subir agudos en el ampli.</li><li>Para l&iacute;neas con p&uacute;a, CLANK es tu aliado.</li></ul></div>"
            ]
        },
        pactoCreativo: {
            "langLabel": "Idioma",
            "docKicker": "Documento de licencia",
            "title": "Licencia de Confianza · Pacto Creativo",
            "subtitle": "AMATISTA es un proyecto independiente de efectos digitales boutique. No usamos DRM ni activaciones intrusivas. Elegimos confiar.",
            "metaTop": "Licencia de Confianza · Pacto Creativo",
            "metaVersion": "Versión 1.0",
            "brandName": "AMATISTA",
            "brandTag": "Efectos Digitales Boutique",
            "p1": "AMATISTA es un proyecto independiente de efectos digitales boutique. Cada plugin nace del cruce entre diseño sonoro, criterio musical y tiempo real de desarrollo.",
            "p2": "No usamos sistemas de activación, DRM ni licencias intrusivas. Elegimos confiar.",
            "p3": "Esta licencia no es un reglamento. Es un pacto creativo entre quien desarrolla y quien usa estas herramientas.",
            "h_support": "Qué significa apoyar AMATISTA",
            "support_p1": "Al comprar un plugin AMATISTA no estás pagando solo un archivo digital.",
            "support_p2": "Estás apoyando:",
            "support_li": [
                "horas de desarrollo y testing,",
                "decisiones de diseño y sonido,",
                "mantenimiento, mejoras y evolución futura,",
                "la posibilidad de que el proyecto siga creciendo de forma honesta e independiente."
            ],
            "support_p3": "Comprar es una forma de decir: esto me sirve, esto tiene valor, quiero que continúe.",
            "h_can": "Lo que podés hacer",
            "can_li": [
                "Usar el plugin libremente en proyectos personales o comerciales.",
                "Instalarlo en tus equipos personales.",
                "Integrarlo en tu flujo creativo sin restricciones técnicas."
            ],
            "can_p1": "No hay activaciones. No hay límites artificiales. No hay interrupciones en tu proceso creativo.",
            "h_ask": "Lo que te pedimos",
            "ask_li": [
                "No redistribuir el plugin públicamente como si fuera propio.",
                "Si lo compartís con alguien para probarlo, invitá a que apoye el proyecto si decide usarlo.",
                "Respetar que este trabajo existe gracias a una relación de confianza."
            ],
            "ask_p1": "No por obligación. Por coherencia.",
            "h_belong": "Pertenencia y participación",
            "belong_p1": "Quienes apoyan AMATISTA forman parte activa del proyecto.",
            "belong_p2": "Eso significa:",
            "belong_li": [
                "acceso a votaciones sobre el rumbo de futuros plugins,",
                "posibilidad de influir en ideas, enfoques y prioridades,",
                "participación en un desarrollo abierto y transparente."
            ],
            "belong_p3": "No todos deciden todo. Pero cada apoyo deja una huella real en lo que viene.",
            "h_ifcant": "Si no podés pagar ahora",
            "ifcant_p1": "Usá el plugin igual.",
            "ifcant_p2": "Si te acompaña, si se vuelve parte de tu sonido, si empieza a aparecer en tus sesiones y decisiones creativas, apoyar el proyecto más adelante es la forma natural de cerrar el círculo.",
            "h_last": "Un último acuerdo",
            "last_p1": "AMATISTA se desarrolla con la misma honestidad con la que se entrega: sin protecciones invasivas, sin trampas técnicas, sin ruido innecesario.",
            "last_p2": "Confiamos en que quienes valoran estas herramientas también valoran que puedan seguir existiendo.",
            "last_p3": "Gracias por ser parte.",
            "h_contact": "Contacto y comunidad"
        },
        instalacion: {
            "lang": "Idioma",
            "meta": "Manual de instalación · Windows / macOS",
            "kicker": "Instalación y solución de problemas",
            "title": "Manual de instalación",
            "subtitle": "Instrucciones para instalar VST3 en Windows y VST3 / Audio Unit en macOS. Incluye guía para versiones sin firmar.",
            "systemRequirementsTitle": "Requisitos del sistema",
            "macTitle": "macOS",
            "macReq": ["macOS 10.13 o superior", "DAW compatible con VST3 o Audio Unit"],
            "winTitle": "Windows",
            "winReq": ["Windows 10 o superior", "DAW compatible con VST3"],
            "testedTitle": "Probado en",
            "testedNote": "Otros DAWs compatibles con VST3/AU deberían funcionar correctamente.",
            "testedDaws": ["Ableton Live", "Logic Pro", "Cubase", "Reaper", "Studio One", "FL Studio"],
            "installTitle": "Instalación",
            "winInstallTitle": "Windows (VST3)",
            "restartRescan": "Reiniciá tu DAW. Si no aparece, realizá un re-escaneo de plugins.",
            "summaryWin": "Windows VST3:",
            "vst3PathWin": "C:\\Program Files\\Common Files\\VST3\\",
            "macInstallTitle": "macOS (Unsigned)",
            "unsignedTitle": "Versión sin firmar",
            "unsignedBody": "Este plugin no está firmado con Developer ID. macOS puede bloquearlo hasta que lo habilites manualmente. Esto es normal en builds independientes.",
            "vst3Label": "VST3 (.vst3):",
            "vst3PathMac": "/Library/Audio/Plug-Ins/VST3/",
            "auLabel": "AU (.component):",
            "auPathMac": "/Library/Audio/Plug-Ins/Components/",
            "troublesTitle": "Solución de problemas",
            "winTroubleTitle": "Windows",
            "winTroubleHead": "El plugin no aparece en mi DAW:",
            "winTroubleSteps": [
                "Asegurate de copiar el plugin EXACTAMENTE en: C:\\Program Files\\Common Files\\VST3\\",
                "Reiniciá el DAW.",
                "Forzá un re-escaneo de plugins desde el DAW.",
                "Reiniciar la PC suele resolver problemas de caché / escaneo."
            ],
            "macTroubleTitle": "macOS",
            "macErrDamaged": "ERROR: “has been modified or damaged”",
            "macFixTerminal": "Solución (Terminal):",
            "macAfterRestartDaw": "Luego reiniciá el DAW.",
            "macErrVerify": "ERROR: “developer cannot be verified”",
            "macVerifyHint": "Misma causa. Revisá:",
            "privacyPath": "System Settings → Privacy & Security → Open Anyway"
        }
    },
    en: {
        common: {
            back: "← Back to Main Website",
            headerTitle: "Amatista Efectos",
            headerDesc: "User Manuals & Technical Documentation",
            indexTitle: "Index",
            idx1: "1. Welcome",
            idx2: "2. Our Creative Pact",
            idx3: "3. Installation Guide",
            idx4: "4. Plugin Manuals"
        },
        bienvenida: {
            "langLabel": "Language",
            "meta": "AMATISTA · Plugins<br/>Version 1.0.0",
            "kicker": "Welcome to AMATISTA",
            "headline": "Thank you for using our plugins",
            "subhead": "and for being part of the <strong>AMATISTA</strong> boutique digital effects ecosystem.",
            "main": [
                "<p>AMATISTA is an independent project focused on minimalist digital pedals, inspired by modern heavy tones, low tunings, and a clear philosophy: <strong>simple controls, defined purpose, and solid sonic character</strong>.</p>",
                "<p>Each plugin is built with attention to detail in both sound and user experience, prioritizing tools that truly add value in real musical contexts.</p>",
                "<div class=\"rule\" role=\"separator\" style=\"height:1px; background:#ddd; margin:20px 0;\"></div>",
                "<div class=\"callout\" style=\"padding:15px; border-left:4px solid var(--docs-accent); background:#f8f9fa; margin-bottom:15px;\"><div class=\"t\"><strong>Your support matters</strong></div><p style=\"margin:5px 0 0 0;\">AMATISTA grows through community. Your purchase helps improve, maintain, and build the next artifacts.</p></div>",
                "<div class=\"callout\" style=\"padding:15px; border-left:4px solid #7cf1c6; background:rgba(124,241,198,.06);\"><div class=\"t\"><strong>Influence what’s next</strong></div><p style=\"margin:5px 0 0 0;\">Supporters can join feedback rounds and votes to help shape upcoming plugins.</p></div>"
            ],
            "linksLabel": "Links",
            "contactLabel": "Contact & community",
            "siteLabel": "Website:",
            "copyright": "© AMATISTA boutique digital effects",
            "footerSig": "AMATISTA · Boutique Digital Effects"
        },
        impulsoPrimario: {
            "langLabel": "Language",
            "meta": "Practical Manual · Primary Impulse",
            "kicker": "Practical manual",
            "title": "Primary Impulse · Saturation Architecture",
            "subtitle": "A musician-focused guide to Boost, Overdrive, Fuzz and Distortion. Simple roles, solid results.",
            "chips": ["Carbonado Boost", "Ónix Overdrive", "Obsidiana Fuzz", "Amatista Distortion", "Combos & quick fixes"],
            "asideBadges": [
                { "label": "Family", "value": "Primary Impulse" },
                { "label": "Goal", "value": "Coherent gain" },
                { "label": "Approach", "value": "Simple controls" },
                { "label": "Result", "value": "Mix-ready" }
            ],
            "asideTitle": "Recommended Order",
            "asideBody": [
                "<p><strong>Base chain:</strong> Guitar &rarr; Carbonado &rarr; Ónix &rarr; Amatista &rarr; Obsidiana &rarr; Amp / IR</p>",
                "<p><strong>Think of it like this:</strong> Carbonado pushes, Ónix cleans, Amatista builds, Obsidiana destroys.</p>",
                "<p class='muted' style='color:#666; font-size:0.9em; margin-top:10px;'>Tip: Less gain, more level and balance usually sounds heavier.</p>"
            ],
            "asideNoteTitle": "The input rules",
            "asideNoteBody": "Everything responds to your guitar, pickups, and attack. Lower the guitar volume to discover another pedal inside the same one.",
            "asideRecipesTitle": "3 fast recipes",
            "asideRecipesBody": "Tight riffs: Carbonado(50-70) &rarr; Ónix(Tone high) &rarr; Amatista(Structure low).<br/>Dense wall: Ónix &rarr; Obsidiana(Gain high, Bass high) &rarr; Amatista(Structure high).<br/>Clean Boost + Edge: Carbonado &rarr; Ónix(low drive).",
            "footerLeft": "AMATISTA · Boutique Digital Effects",
            "sections": [
                "<h2>Overview and Philosophy</h2><p>The AMATISTA suite is designed as a natural progression:</p><ul><li>Carbonado (Boost) &rarr; Impulse</li><li>Ónix (Overdrive) &rarr; Focus</li><li>Amatista (Distortion) &rarr; Structure</li><li>Obsidiana (Fuzz) &rarr; Collapse</li></ul><p>Each not only adds gain... it redefines the behavior of the next. This is not a collection of effects. It is a system. Every stage is a decision. Every decision changes what comes next.</p>",
                "<div class='plugin-manual' id='carbonado'><h3>CARBONADO BOOST</h3><p><strong>What it is:</strong> a fast, aggressive booster designed to push whatever comes next. Doesn't color unnecessarily. It just pushes.</p><p><strong>Controls:</strong></p><ul><li><strong>Pressure:</strong> The only control. Up to +22 dB of boost. Grows musically, not linearly.</li><li><strong>Bypass:</strong> Direct clean path.</li></ul><h4>What happens inside</h4><ul><li><strong>Oversampling (2x):</strong> Improves quality and avoids artifacts.</li><li><strong>Tightening (High Pass):</strong> Cuts lows before the boost (~100 Hz).</li><li><strong>Anti-Hiss (Low Pass):</strong> Smooths extreme highs (~10 kHz).</li><li><strong>Op-amp saturation:</strong> Simulates real electrical limits at high pressures.</li></ul><h4>How to use it</h4><ul><li><strong>Tight Boost:</strong> Pressure 40-70% before distortion for a defined attack.</li><li><strong>Clean Push:</strong> Pressure 10-30% to lift volume.</li></ul><p><em>Note: This pedal is not low-end neutral; it always tends to tighten the lows. Works best as the first element in the chain.</em></p></div>",
                "<div class='plugin-manual' id='onix'><h3>ÓNIX OVERDRIVE</h3><p><strong>What it is:</strong> a modern overdrive refined for today's context. Less mud, better mix response. Made to focus the signal.</p><p><strong>Controls:</strong></p><ul><li><strong>Drive:</strong> Increases saturation and compression without losing clarity.</li><li><strong>Tone:</strong> Dynamic low-pass filter, affects harmonics.</li><li><strong>Level:</strong> Output volume (-18 dB to +12 dB).</li></ul><h4>What happens inside</h4><ul><li><strong>Oversampling (4x) & Pre-shaping:</strong> Bass cut and smooth treble filter.</li><li><strong>Mid Boost:</strong> Mid push (~720 Hz) to cut through the mix.</li><li><strong>Asymmetrical Clipping & Dynamic Mix:</strong> Organic feel, less 'digital'. More clean signal at lower drive.</li></ul><h4>How to use it</h4><ul><li><strong>Clean Boost:</strong> Drive 0-15%, Tone 50-70%, Level high.</li><li><strong>Modern Crunch:</strong> Drive 30-60%, Tone 50%.</li></ul><p><em>Note: Cuts lows before saturation to maintain clarity. Excellent as a 'tightener' in modern metal.</em></p></div>",
                "<div class='plugin-manual' id='amatista'><h3>AMATISTA DISTORTION</h3><p><strong>What it is:</strong> a preamp + power stage condensed. Can act as a modern amp, an organic crunch, or collapse into a living texture. Where Obsidiana destroys, Amatista sculpts.</p><p><strong>Controls:</strong></p><ul><li><strong>Gain:</strong> Controls multiple gain stages.</li><li><strong>Structure:</strong> The pedal's DNA. 0.0-0.30 Tight/Modern; 0.30-0.65 Amp-like; 0.65-1.0 Collapse/Textural. Changes symmetry and headroom.</li><li><strong>Body:</strong> Low shelf EQ (~120 Hz).</li><li><strong>Presence:</strong> High shelf (~3.8 kHz) for clarity and cut.</li></ul><h4>What happens inside</h4><ul><li><strong>Oversampling (2x) & Preamp Stage:</strong> Defines dynamics.</li><li><strong>Distortion Stage:</strong> Smooth asymmetrical controlled clipping.</li><li><strong>SAG:</strong> At high Structure values, the signal 'sags', simulating voltage drops.</li><li><strong>De-Fizz:</strong> Dynamic filter to smooth highs.</li></ul><h4>How to use it</h4><ul><li><strong>Modern Metal Tight:</strong> Gain 50-70%, Structure 10-25%.</li><li><strong>Collapse Mode:</strong> High Gain, Structure 75-100%.</li></ul><p><em>Note: Structure changes EVERYTHING. If something sounds off, move this knob first.</em></p></div>",
                "<div class='plugin-manual' id='obsidiana'><h3>OBSIDIANA FUZZ</h3><p><strong>What it is:</strong> designed to transform your signal into a dense, living mass. Not a polite fuzz: an artifact that responds to how much chaos you invoke.</p><p><strong>Controls:</strong></p><ul><li><strong>Level (Collapse):</strong> Final volume without changing character (-18 to +12 dB).</li><li><strong>Gain (Fury):</strong> Fuzz intensity, reaching extreme compression.</li><li><strong>Bass:</strong> Cuts or boosts up to &plusmn;12 dB around ~100 Hz.</li><li><strong>Treble (Chaos):</strong> Behavior generator. Changes how it distorts and opens/closes the frequency ceiling.</li></ul><h4>What happens inside</h4><ul><li><strong>Oversampling (4x) & Pre-filtering:</strong> Bass cut before the fuzz.</li><li><strong>Non-linearity:</strong> Tanh saturation and hard clipping, mixed with a rectified signal (octave-fuzz style).</li><li><strong>Post filtering:</strong> Smooths out 'fizz'.</li></ul><h4>How to use it</h4><ul><li><strong>Tight Modern Metal:</strong> Gain 60-80%, Bass 30-45%, Treble 60-75%.</li><li><strong>Doom / Sludge:</strong> High Gain, Bass 70-100%, Treble low.</li></ul><p><em>Note: Highly responsive to your guitar's volume. Obsidiana doesn't seek to be transparent. It seeks to be inevitable.</em></p></div>"
            ]
        },
        frecuenciaBase: {
            "langLabel": "Language",
            "meta": "Practical Manual · Base Frequency",
            "kicker": "Practical manual",
            "title": "Base Frequency · Bass Saturation",
            "subtitle": "Granate Bass Saturator: keeps the solid foundation, adds character in the mid-high range, and allows precise control over the grit.",
            "chips": ["Granate Bass Saturator", "Placement", "Contexts"],
            "asideBadges": [
                { "label": "Family", "value": "Base Frequency" },
                { "label": "Goal", "value": "Modern bass" },
                { "label": "Approach", "value": "Punch & control" },
                { "label": "Result", "value": "Defined attack" }
            ],
            "asideTitle": "Chain Placement",
            "asideBody": [
                "<p><strong>Before amp sim:</strong> Acts like a physical pedal pushing the amp. Defined attack and tight lows.</p>",
                "<p><strong>After amp sim:</strong> Doesn't push the amp, colors the final result. More controlled feel, ideal for studio.</p>",
                "<p class='muted' style='color:#666; font-size:0.9em; margin-top:10px;'>Tip: Granate before a compressor gives a more stable and 'tight' distortion. After a compressor, it sounds more homogeneous and processed.</p>"
            ],
            "asideNoteTitle": "Philosophy",
            "asideNoteBody": "Granate doesn't seek to cover the bass in distortion. It seeks to reinforce its character. Starting point: GRANATE 45%, CLANK 40%, BLEND 50%.",
            "asideRecipesTitle": "Usage Contexts",
            "asideRecipesBody": "Modern Metal: Granate mid-high, Clank mid, Blend 50-65%.<br/>Alt Rock: Granate mid, Clank mid-high, Blend 45-55%.<br/>Studio shaping: Granate low, Clank low, Blend 30-40%.",
            "footerLeft": "AMATISTA · Boutique Digital Effects",
            "sections": [
                "<h2>Overview</h2><p>Granate is a saturator designed for modern bass: it maintains the solid foundation, adds character in the mid-high range, and allows precise control over how much grit enters the mix. The idea is simple: punch, definition, and low-end control without losing identity.</p>",
                "<div class='plugin-manual' id='granate'><h3>GRANATE BASS SATURATOR</h3><p><strong>Sonic Architecture:</strong> Granate works on two paths. The clean signal keeps the low-end stable, and the saturated signal is filtered and shaped to add texture without muddying. Both are mixed in a controlled way.</p><p><strong>Controls:</strong></p><ul><li><strong>Granate:</strong> Controls saturation amount. Low values add warmth. Mid range gives articulated grit. High offers aggressive saturation. Technically increases drive and adjusts internal filtering.</li><li><strong>Clank:</strong> Defines attack and presence. Low gives a round tone. Mid gives clear attack (ideal for pick). High adds presence at 2-3 kHz. Works as a dynamic boost.</li><li><strong>Blend:</strong> The heart of the pedal. Mixes clean and saturated signals. Keep between 40% and 60% to maintain punch in low tunings.</li><li><strong>Level:</strong> Output volume. Includes internal compensation to maintain balance as drive goes up.</li></ul><h4>Practical Recommendations</h4><ul><li>If the bass loses weight, lower BLEND before lowering DRIVE.</li><li>If the mix gets muddy, raise CLANK before boosting treble on the amp.</li><li>For pick lines, CLANK is your ally.</li></ul></div>"
            ]
        },
        pactoCreativo: {
            "langLabel": "Language",
            "docKicker": "License document",
            "title": "License of Trust · Creative Pact",
            "subtitle": "AMATISTA is an independent boutique digital effects project. No DRM, no intrusive activation. We choose trust.",
            "metaTop": "License of Trust · Creative Pact",
            "metaVersion": "Version 1.0",
            "brandName": "AMATISTA",
            "brandTag": "Efectos Digitales Boutique",
            "p1": "AMATISTA is an independent boutique digital effects project. Each plugin is born at the intersection of sound design, musical judgment, and real development time.",
            "p2": "We don’t use activation systems, DRM, or intrusive licensing. We choose trust.",
            "p3": "This license is not a rulebook. It’s a creative pact between the builder and the people who use these tools.",
            "h_support": "What supporting AMATISTA means",
            "support_p1": "When you buy an AMATISTA plugin, you’re not paying for a file.",
            "support_p2": "You’re supporting:",
            "support_li": [
                "hours of development and testing,",
                "design and tone decisions,",
                "maintenance, improvements, and future evolution,",
                "the possibility for the project to grow honestly and independently."
            ],
            "support_p3": "Buying is a way of saying: this helps me, this has value, keep it alive.",
            "h_can": "What you can do",
            "can_li": [
                "Use the plugin freely in personal or commercial projects.",
                "Install it on your personal computers.",
                "Integrate it into your creative workflow without technical restrictions."
            ],
            "can_p1": "No activations. No artificial limits. No interruptions in your creative process.",
            "h_ask": "What we ask from you",
            "ask_li": [
                "Please don’t publicly redistribute the plugin as if it were your own.",
                "If you share it with someone to try, invite them to support the project if they decide to use it.",
                "Respect that this work exists thanks to a relationship built on trust."
            ],
            "ask_p1": "Not out of obligation. Out of coherence.",
            "h_belong": "Belonging and participation",
            "belong_p1": "People who support AMATISTA become an active part of the project.",
            "belong_p2": "That means:",
            "belong_li": [
                "access to roadmap votes for upcoming plugins,",
                "the ability to influence ideas, approaches, and priorities,",
                "participation in an open and transparent development process."
            ],
            "belong_p3": "Not everyone decides everything. But every contribution leaves a real mark on what comes next.",
            "h_ifcant": "If you can’t pay right now",
            "ifcant_p1": "Use the plugin anyway.",
            "ifcant_p2": "If it sticks with you, if it becomes part of your sound, if it starts showing up in your sessions and creative decisions, supporting the project later is the natural way to close the circle.",
            "h_last": "One last agreement",
            "last_p1": "AMATISTA is built with the same honesty with which it’s delivered: no invasive protections, no technical traps, no unnecessary noise.",
            "last_p2": "We trust that people who value these tools also value that they can keep existing.",
            "last_p3": "Thanks for being part of it.",
            "h_contact": "Contact and community"
        },
        instalacion: {
            "lang": "Language",
            "meta": "Installation Manual · Windows / macOS",
            "kicker": "Installation & troubleshooting",
            "title": "Installation manual",
            "subtitle": "Install instructions for VST3 on Windows and VST3 / Audio Unit on macOS. Includes guidance for unsigned builds.",
            "systemRequirementsTitle": "System requirements",
            "macTitle": "macOS",
            "macReq": ["macOS 10.13 or later", "VST3 or Audio Unit compatible DAW"],
            "winTitle": "Windows",
            "winReq": ["Windows 10 or later", "VST3 compatible DAW"],
            "testedTitle": "Tested in",
            "testedNote": "Other VST3/AU compatible DAWs should work correctly.",
            "testedDaws": ["Ableton Live", "Logic Pro", "Cubase", "Reaper", "Studio One", "FL Studio"],
            "installTitle": "Installation",
            "winInstallTitle": "Windows (VST3)",
            "restartRescan": "Restart your DAW. If the plugin doesn’t appear, run a plugin rescan.",
            "summaryWin": "Windows VST3:",
            "vst3PathWin": "C:\\Program Files\\Common Files\\VST3\\",
            "macInstallTitle": "macOS (Unsigned)",
            "unsignedTitle": "Unsigned version",
            "unsignedBody": "This plugin is not signed with an Apple Developer ID. macOS may block it until you manually allow it. This is normal for independent builds.",
            "vst3Label": "VST3 (.vst3):",
            "vst3PathMac": "/Library/Audio/Plug-Ins/VST3/",
            "auLabel": "AU (.component):",
            "auPathMac": "/Library/Audio/Plug-Ins/Components/",
            "troublesTitle": "Troubleshooting",
            "winTroubleTitle": "Windows",
            "winTroubleHead": "The plugin doesn’t show up in my DAW:",
            "winTroubleSteps": [
                "Make sure the plugin is copied EXACTLY to: C:\\Program Files\\Common Files\\VST3\\",
                "Restart the DAW.",
                "Force a plugin rescan from your DAW settings.",
                "Restarting the PC often fixes cache / scan issues."
            ],
            "macTroubleTitle": "macOS",
            "macErrDamaged": "ERROR: “has been modified or damaged”",
            "macFixTerminal": "Fix (Terminal):",
            "macAfterRestartDaw": "Then restart your DAW.",
            "macErrVerify": "ERROR: “developer cannot be verified”",
            "macVerifyHint": "Same cause. Check:",
            "privacyPath": "System Settings → Privacy & Security → Open Anyway"
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langBtns = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-i18n]');

    function renderDocs(lang) {
        const t = docsTranslations[lang];
        if (!t) return;

        // 1. Update basic static strings mapped by data-i18n
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t.common && t.common[key]) {
                el.innerHTML = t.common[key];
            }
        });

        // 2. Render 'Bienvenida'
        const secBienvenida = document.getElementById('bienvenida');
        if (secBienvenida && t.bienvenida) {
            let html = `<h2>${t.common.idx1}</h2>`;
            html += `<h3>${t.bienvenida.headline} ${t.bienvenida.subhead}</h3>`;
            html += t.bienvenida.main.join("");
            secBienvenida.innerHTML = html;
        }

        // 3. Render 'Pacto Creativo'
        const secPacto = document.getElementById('pacto-creativo');
        if (secPacto && t.pactoCreativo) {
            let html = `<h2>${t.common.idx2}: ${t.pactoCreativo.title}</h2>`;
            html += `<p class="muted" style="color:#666;">${t.pactoCreativo.subtitle}</p>`;
            html += `<p>${t.pactoCreativo.p1}</p><p>${t.pactoCreativo.p2}</p><p>${t.pactoCreativo.p3}</p>`;

            html += `<h3>${t.pactoCreativo.h_support}</h3>`;
            html += `<p>${t.pactoCreativo.support_p1} ${t.pactoCreativo.support_p2}</p>`;
            html += `<ul style="padding-left:20px;">${t.pactoCreativo.support_li.map(li => `<li style="margin-bottom:5px;">${li}</li>`).join('')}</ul>`;
            html += `<p>${t.pactoCreativo.support_p3}</p>`;

            html += `<h3>${t.pactoCreativo.h_can}</h3>`;
            html += `<p>${t.pactoCreativo.can_p1}</p>`;
            html += `<ul style="padding-left:20px;">${t.pactoCreativo.can_li.map(li => `<li style="margin-bottom:5px;">${li}</li>`).join('')}</ul>`;

            html += `<h3>${t.pactoCreativo.h_ask}</h3>`;
            html += `<p>${t.pactoCreativo.ask_p1}</p>`;
            html += `<ul style="padding-left:20px;">${t.pactoCreativo.ask_li.map(li => `<li style="margin-bottom:5px;">${li}</li>`).join('')}</ul>`;

            html += `<h3>${t.pactoCreativo.h_belong}</h3>`;
            html += `<p>${t.pactoCreativo.belong_p1} ${t.pactoCreativo.belong_p2}</p>`;
            html += `<ul style="padding-left:20px;">${t.pactoCreativo.belong_li.map(li => `<li style="margin-bottom:5px;">${li}</li>`).join('')}</ul>`;
            html += `<p>${t.pactoCreativo.belong_p3}</p>`;

            html += `<h3>${t.pactoCreativo.h_ifcant}</h3>`;
            html += `<p>${t.pactoCreativo.ifcant_p1} ${t.pactoCreativo.ifcant_p2}</p>`;

            html += `<h3>${t.pactoCreativo.h_last}</h3>`;
            html += `<p>${t.pactoCreativo.last_p1}</p><p>${t.pactoCreativo.last_p2}</p><p>${t.pactoCreativo.last_p3}</p>`;

            secPacto.innerHTML = html;
        }

        // 4. Render 'Instalacion'
        const secInst = document.getElementById('instalacion');
        if (secInst && t.instalacion) {
            let html = `<h2>${t.common.idx3}: ${t.instalacion.title}</h2>`;
            html += `<p class="muted" style="color:#666;">${t.instalacion.subtitle}</p>`;

            html += `<h3>${t.instalacion.systemRequirementsTitle}</h3>`;
            html += `<h4>${t.instalacion.macTitle}</h4><ul style="padding-left:20px;">${t.instalacion.macReq.map(li => `<li>${li}</li>`).join('')}</ul>`;
            html += `<h4>${t.instalacion.winTitle}</h4><ul style="padding-left:20px; margin-bottom:15px;">${t.instalacion.winReq.map(li => `<li>${li}</li>`).join('')}</ul>`;

            html += `<div class="plugin-manual" style="background:#f8f9fa;">`;
            html += `<h4>${t.instalacion.testedTitle}</h4><p style="font-size:0.9em; color:#666;">${t.instalacion.testedNote}</p>`;
            html += `<ul style="padding-left:20px; font-size:0.95em;">${t.instalacion.testedDaws.map(li => `<li>${li}</li>`).join('')}</ul>`;
            html += `</div>`;

            html += `<h3>${t.instalacion.installTitle}</h3>`;
            html += `<h4>${t.instalacion.winInstallTitle}</h4>`;
            html += `<p><strong>${t.instalacion.summaryWin}</strong> <code>${t.instalacion.vst3PathWin}</code></p>`;
            html += `<p>${t.instalacion.restartRescan}</p>`;

            html += `<h4 style="margin-top:20px;">${t.instalacion.macInstallTitle}</h4>`;
            html += `<p><strong>${t.instalacion.unsignedTitle}</strong>: ${t.instalacion.unsignedBody}</p>`;
            html += `<ul style="list-style:none; padding-left:0;">`;
            html += `<li><strong>${t.instalacion.vst3Label}</strong> <code>${t.instalacion.vst3PathMac}</code></li>`;
            html += `<li><strong>${t.instalacion.auLabel}</strong> <code>${t.instalacion.auPathMac}</code></li>`;
            html += `</ul>`;

            html += `<h3>${t.instalacion.troublesTitle}</h3>`;
            html += `<div class="plugin-manual">`;
            html += `<h4>${t.instalacion.winTroubleTitle}</h4>`;
            html += `<p><strong>${t.instalacion.winTroubleHead}</strong></p><ul style="padding-left:20px;">${t.instalacion.winTroubleSteps.map(li => `<li style="margin-bottom:4px;">${li}</li>`).join('')}</ul>`;

            html += `<h4 style="margin-top:20px;">${t.instalacion.macTroubleTitle}</h4>`;
            html += `<ul style="padding-left:20px;">`;
            html += `<li style="margin-bottom:10px;"><strong>${t.instalacion.macErrDamaged}:</strong><br/>${t.instalacion.macFixTerminal} <br/><code>xattr -cr /Library/Audio/Plug-Ins/Components/Amatista.component</code><br/>${t.instalacion.macAfterRestartDaw}</li>`;
            html += `<li><strong>${t.instalacion.macErrVerify}:</strong><br/>${t.instalacion.macVerifyHint} <code>${t.instalacion.privacyPath}</code></li>`;
            html += `</ul></div>`;

            secInst.innerHTML = html;
        }

        // 5. Render 'Manuales (Plugin Docs)'
        const secMan = document.getElementById('manuales');
        if (secMan) {
            let html = ``;
            if (t.impulsoPrimario) {
                html += `<div class="manual-family">`;
                html += `<h2>${t.common.idx4}: ${t.impulsoPrimario.title}</h2>`;
                html += `<p class="muted" style="color:#666;">${t.impulsoPrimario.subtitle}</p>`;

                html += t.impulsoPrimario.sections.join('');

                html += `<div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px; margin-top:20px;">`;
                html += `<div class="plugin-manual" style="background:#f8f9fa;">`;
                html += `<h4>${t.impulsoPrimario.asideTitle}</h4>`;
                html += t.impulsoPrimario.asideBody.join('');
                html += `</div>`;

                html += `<div class="plugin-manual" style="background:#f8f9fa;">`;
                html += `<h4>${t.impulsoPrimario.asideNoteTitle}</h4>`;
                html += `<p>${t.impulsoPrimario.asideNoteBody}</p>`;
                html += `</div>`;
                html += `</div>`;

                html += `<div class="plugin-manual" style="background:#eef0f2; border-left-color:#33ccff;">`;
                html += `<h4>${t.impulsoPrimario.asideRecipesTitle}</h4>`;
                html += `<p>${t.impulsoPrimario.asideRecipesBody}</p>`;
                html += `</div>`;
                html += `</div>`;
            }

            if (t.frecuenciaBase) {
                html += `<div class="manual-family" style="margin-top: 60px;">`;
                html += `<h2>${t.frecuenciaBase.title}</h2>`;
                html += `<p class="muted" style="color:#666;">${t.frecuenciaBase.subtitle}</p>`;

                html += t.frecuenciaBase.sections.join('');

                html += `<div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px; margin-top:20px;">`;
                html += `<div class="plugin-manual" style="background:#f8f9fa;">`;
                html += `<h4>${t.frecuenciaBase.asideTitle}</h4>`;
                html += t.frecuenciaBase.asideBody.join('');
                html += `</div>`;

                html += `<div class="plugin-manual" style="background:#f8f9fa;">`;
                html += `<h4>${t.frecuenciaBase.asideNoteTitle}</h4>`;
                html += `<p>${t.frecuenciaBase.asideNoteBody}</p>`;
                html += `</div>`;
                html += `</div>`;

                html += `<div class="plugin-manual" style="background:#eef0f2; border-left-color:#ff4d4d;">`;
                html += `<h4>${t.frecuenciaBase.asideRecipesTitle}</h4>`;
                html += `<p>${t.frecuenciaBase.asideRecipesBody}</p>`;
                html += `</div>`;
                html += `</div>`;
            }

            secMan.innerHTML = html;
        }
    }

    // Toggle logic Event Listeners
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            // set active state visually on the buttons
            langBtns.forEach(b => b.classList.remove('active'));
            // since docs.html may have its own structure, toggle colors carefully
            langBtns.forEach(b => {
                if (b.dataset.lang === lang) {
                    b.classList.add('active');
                    b.style.fontWeight = '600';
                    b.style.color = 'var(--docs-heading)';
                } else {
                    b.style.fontWeight = '400';
                    b.style.color = '#888';
                }
            });

            document.documentElement.lang = lang;
            renderDocs(lang);
        });
    });

    // Auto-init based on page language, or default to Spanish
    renderDocs('es');
});
