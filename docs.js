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
                "<p><strong>Base:</strong> Carbonado → Ónix → Amatista</p>",
                "<p><strong>Texturas:</strong> Obsidiana → Amatista</p>",
                "<p class='muted' style='color:#666; font-size:0.9em; margin-top:10px;'>Tip: Menos ganancia y más balance suele sonar más pesado.</p>"
            ],
            "asideNoteTitle": "Si suena filoso",
            "asideNoteBody": "Bajá Presence (Amatista) o Tone (Ónix). Si la pared queda muy brillante, bajá Treble en Obsidiana primero.",
            "asideRecipesTitle": "3 recetas rápidas",
            "asideRecipesBody": "Riff tight: Carbonado medio, Ónix drive bajo level alto, Amatista structure bajo.<br/>Pared densa: Obsidiana gain medio + EQ, Amatista structure medio/alto.<br/>Lead sustain: Ónix drive medio, Amatista gain medio/alto con presence moderado.",
            "footerLeft": "AMATISTA · Efectos Digitales Boutique",
            "sections": [
                "<h2>Filosofía general</h2><p>Impulso Primario es el ecosistema de ganancia de AMATISTA. Cada pedal cumple una función clara. No están pensados para competir entre sí, sino para apilarse como una arquitectura coherente.</p>",
                "<div class='plugin-manual'><h3>CARBONADO BOOST</h3><p><strong>Qué es:</strong> un boost moderno de control. Menos “volumen extremo”, más preparación de señal antes de la ganancia.</p><p><strong>Qué escuchar:</strong> graves más firmes, ataque más definido y un empuje estable que ayuda a que el riff no se desarme.</p><h4>Cómo usarlo</h4><ul><li>Primero en la cadena, antes de cualquier distorsión para ajustar low-end.</li><li>Pressure moderado para claridad y pegada.</li><li>En capas, ayuda a que cada toma quede más “separada”.</li></ul><h4>Errores comunes</h4><ul><li>Demasiado Pressure aplana dinámica y puede sentirse muy comprimido.</li><li>Si todo se achica, bajá Pressure y subí salida más adelante.</li></ul></div>",
                "<div class='plugin-manual'><h3>ÓNIX OVERDRIVE</h3><p><strong>Qué es:</strong> un overdrive de medios refinado, inspirado en lo clásico pero ajustado para rigs modernos.</p><p><strong>Qué escuchar:</strong> más presencia en mezcla, grano controlado y empuje que tightenea hi-gain sin volverse “chillón”.</p><h4>Cómo usarlo</h4><ul><li><strong>Como empuje:</strong> Drive bajo, Level alto.</li><li><strong>Como drive principal:</strong> Drive arriba, Level a unidad.</li><li>Tone es una válvula de brillo.</li></ul><h4>Errores comunes</h4><ul><li>Mucho Drive puede comprimir de más y quitar “vida” al ataque.</li><li>Si se afina, bajá Tone un poco y subí Level levemente.</li></ul></div>",
                "<div class='plugin-manual'><h3>OBSIDIANA FUZZ</h3><p><strong>Qué es:</strong> un fuzz denso pero controlable, pensado para capas y texturas, no solo caos.</p><p><strong>Qué escuchar:</strong> una masa sólida con carácter rugoso, capaz de ocupar espacio sin perder toda la definición.</p><h4>Cómo usarlo</h4><ul><li>Antes de dist para construir pared; la dist la solidifica y la “pone adelante”.</li><li>Usá Bass/Treble para encajarlo en mezcla (clave si hacés capas).</li><li>Probá menos treble del que pensás. Dejá que el amp/cab agregue aire.</li></ul><h4>Errores comunes</h4><ul><li>Mucho Bass hace bola rápido. Bajá Bass antes de bajar gain.</li><li>Si hay demasiado ruido, bajá gain y recuperá con level.</li></ul></div>",
                "<div class='plugin-manual'><h3>AMATISTA DISTORTION</h3><p><strong>Qué es:</strong> el motor principal hi-gain. Define carácter, respuesta y el contorno final del tono.</p><p><strong>Qué escuchar:</strong> distorsión sólida con articulación, y un control de presencia que puede ser agresivo sin volverse hielo.</p><h4>Cómo usarlo</h4><ul><li><strong>Structure bajo:</strong> tight moderno, riffs rápidos.</li><li><strong>Structure medio:</strong> feel más amp-like, más cuerpo.</li><li><strong>Structure alto:</strong> densidad, textura y más compresión de pared.</li><li>Balanceá <strong>Body</strong> y <strong>Presence</strong> como decisión de mezcla, no solo de “solo tone”.</li></ul><h4>Errores comunes</h4><ul><li>Mucho Gain sin balance Body/Presence puede quedar fizz o barro.</li><li>Si está filoso: bajá Presence y luego bajá un toque el gain.</li></ul></div>",
                "<div class='plugin-manual'><h3>Cómo combinarlos</h3><p><strong>Cadena base:</strong> Carbonado → Ónix → Amatista. Te da low-end firme, medios enfocados y hi-gain controlado.</p><p><strong>Cadena pared:</strong> Obsidiana → Amatista. El fuzz arma la masa; la dist la define y la coloca al frente.</p><div class='rule' style='height:1px; background:#ddd; margin:15px 0;'></div><p class='muted' style='color:#666;'>Buena práctica: si se ensucia, bajá gain y construí peso con level + balance.</p></div>"
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
            headerTitle: "Amatista Effects",
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
            "asideTitle": "Quick order",
            "asideBody": [
                "<p><strong>Base:</strong> Carbonado → Ónix → Amatista</p>",
                "<p><strong>Textures:</strong> Obsidiana → Amatista</p>",
                "<p class='muted' style='color:#666; font-size:0.9em; margin-top:10px;'>Tip: Less gain, more level and balance usually sounds heavier.</p>"
            ],
            "asideNoteTitle": "If it feels harsh",
            "asideNoteBody": "Lower Presence (Amatista) or Tone (Ónix). If the wall is too bright, reduce treble on Obsidiana first.",
            "asideRecipesTitle": "3 fast recipes",
            "asideRecipesBody": "Tight riffs: Carbonado medium, Ónix low drive high level, Amatista low structure.<br/>Dense wall: Obsidiana mid gain + EQ, Amatista mid/high structure.<br/>Lead sustain: Ónix mid drive, Amatista mid/high gain with moderate presence.",
            "footerLeft": "AMATISTA · Boutique Digital Effects",
            "sections": [
                "<h2>Philosophy</h2><p>Primary Impulse is AMATISTA’s gain ecosystem. Each pedal has a clear role. They’re not meant to compete, but to stack into one coherent architecture.</p>",
                "<div class='plugin-manual'><h3>CARBONADO BOOST</h3><p><strong>What it is:</strong> a modern control-focused boost. It’s less about extreme volume, more about preparing the signal before gain.</p><p><strong>What to hear:</strong> tighter lows, clearer pick attack, and a stable push that helps riffs stay defined.</p><h4>How to use it</h4><ul><li>Place it before any distortion to tighten the low-end.</li><li>Keep Pressure moderate for clarity and punch.</li><li>If you’re layering guitars, Carbonado helps each take stay “separated”.</li></ul><h4>Common mistakes</h4><ul><li>Too much Pressure can flatten dynamics and feel overly compressed.</li><li>If everything feels smaller, back it off and raise output level later.</li></ul></div>",
                "<div class='plugin-manual'><h3>ÓNIX OVERDRIVE</h3><p><strong>What it is:</strong> a refined, mid-focused overdrive inspired by classic designs, tuned for modern rigs.</p><p><strong>What to hear:</strong> more presence in the mix, a controlled grain, and a push that makes high-gain tighter without getting fizzy.</p><h4>How to use it</h4><ul><li><strong>As a push:</strong> Low Drive, high Level.</li><li><strong>As main drive:</strong> Drive up, Level to unity.</li><li>Use Tone is a “brightness valve”.</li></ul><h4>Common mistakes</h4><ul><li>Too much Drive can over-compress and make riffs feel less alive.</li><li>If it’s thin, lower Tone a bit and increase Level slightly.</li></ul></div>",
                "<div class='plugin-manual'><h3>OBSIDIANA FUZZ</h3><p><strong>What it is:</strong> a dense, controllable fuzz designed for layers and textures, not just chaos.</p><p><strong>What to hear:</strong> a solid mass with gritty character, able to fill space without losing all definition.</p><h4>How to use it</h4><ul><li>Before distortion to build a “wall” that the dist can solidify.</li><li>Use Bass/Treble to fit it into the mix (this matters a lot in layers).</li><li>Try slightly lower treble than you think. Let the amp/cab add air.</li></ul><h4>Common mistakes</h4><ul><li>Too much bass can get muddy fast. Reduce Bass first before reducing gain.</li><li>If noise feels high, lower gain and raise level instead.</li></ul></div>",
                "<div class='plugin-manual'><h3>AMATISTA DISTORTION</h3><p><strong>What it is:</strong> the main hi-gain engine. It defines character, response, and the final contour of your tone.</p><p><strong>What to hear:</strong> solid distortion with articulation, plus a presence control that can stay aggressive without turning into ice.</p><h4>How to use it</h4><ul><li><strong>Structure low:</strong> modern tight, fast riffs.</li><li><strong>Structure mid:</strong> more amp-like feel, bigger body.</li><li><strong>Structure high:</strong> dense textures, more compression and “wall”.</li><li>Balance <strong>Body</strong> and <strong>Presence</strong> like a mix decision, not a solo tone decision.</li></ul><h4>Common mistakes</h4><ul><li>High Gain without balancing Body/Presence can get fizzy or muddy.</li><li>If it’s harsh: lower Presence, then reduce gain a touch.</li></ul></div>",
                "<div class='plugin-manual'><h3>Combining them</h3><p><strong>Base chain:</strong> Carbonado → Ónix → Amatista. This gives tight lows, focused mids, and controlled hi-gain.</p><p><strong>Wall chain:</strong> Obsidiana → Amatista. The fuzz builds the mass; the distortion places it forward and solid.</p><div class='rule' style='height:1px; background:#ddd; margin:15px 0;'></div><p class='muted' style='color:#666;'>Rule of thumb: if it’s too messy, reduce gain and build weight with level + balance instead.</p></div>"
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

        // 5. Render 'Manuales (Impulso Primario)'
        const secMan = document.getElementById('manuales');
        if (secMan && t.impulsoPrimario) {
            let html = `<h2>${t.common.idx4}: ${t.impulsoPrimario.title}</h2>`;
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
