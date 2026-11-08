// Archivo para la sección: sykoOne
window.docsTranslations = window.docsTranslations || { es: {}, en: {} };

window.docsTranslations.es.sykoOne = {
    "langLabel": "Idioma",
    "meta": "Manual práctico · Colaboraciones",
    "kicker": "Manual práctico",
    "title": "SYKO One",
    "subtitle": "La colaboración definitiva con SYKO Cabs. Un ecosistema completo de modelado valvular, convolución dual y efectos diseñado para construir tu sonido moderno de guitarras, tanto en estudio como en vivo.",
    "chips": [
        "SYKO One",
        "4 Amplificadores",
        "Dual Cab & IR Loader",
        "Pre & Post FX",
        "EQ Gráfico",
        "Modo LIVE & Escenas"
    ],
    "asideBadges": [
        { "label": "Familia", "value": "Colaboraciones Especiales" },
        { "label": "Formatos", "value": "Plugin & Standalone" },
        { "label": "Enfoque", "value": "Estudio y Directo" },
        { "label": "Resultado", "value": "Tono Moderno Total" }
    ],

    "footerLeft": "AMATISTA · Efectos Digitales Boutique",
    "sections": [
        `<div class='plugin-manual' id='sykoone'>
            <h3>SYKO One · Visión General y Características Principales</h3>
            <p><strong>SYKO One</strong> es un ecosistema de modelado valvular y convolución diseñado en colaboración con <strong>SYKO Cabs</strong> para cubrir todas las exigencias del sonido moderno de guitarras en estudio y en directo.</p>
            <ul>
                <li><strong>Suite Completa (Plugin y Standalone):</strong> Úsalo dentro de tu DAW favorito o como aplicación independiente lista para tocar en vivo.</li>
                <li><strong>Versatilidad Total:</strong> Desde limpios boutique tridimensionales y <em>edge of breakup</em> hasta saturaciones <em>high-gain</em> y <em>ultra high-gain</em> para afinaciones extremas.</li>
                <li><strong>Tonos Optimizados para Mezcla y Directo:</strong> Respuesta ultra-dinámica al tacto de la púa, latencia cero y herramientas de escenario integradas.</li>
            </ul>

            <h4>Controles Maestros de la Interfaz</h4>
            <ul>
                <li><strong>Perilla Central del Amp:</strong> El control principal del plugin. Ajusta de forma musical la saturación, ecualización dinámica y volumen del amplificador seleccionado.</li>
                <li><strong>Input &amp; Output:</strong> Ajustes maestros para compensar el nivel de entrada de tu guitarra (según tus pastillas) y calibrar el volumen de salida final sin saturar tu DAW.</li>
                <li><strong>Mix (Balance Dry/Wet):</strong> Permite mezclar tu señal completamente limpia (<em>Dry</em>) con el sonido procesado del amplificador.</li>
                <li><strong>Gate (Sidechain Noise Gate):</strong> Puerta de ruido inteligente y rápida. Ajústala hacia la derecha para cortar acoples y siseo en tonos de alta ganancia con silencios absolutos.</li>
                <li><strong>Bypass Global y por Módulos:</strong> Control de bypass total de la suite o desactivación independiente de las etapas de <em>Amp</em>, <em>Cab</em> e <em>IRs</em>.</li>
            </ul>

            <h3>1. Los 4 Amplificadores Virtuales (4 Colores)</h3>
            <p>El selector de colores conmuta entre cuatro arquitecturas modeladas al componente con ecualización dinámica y emulación natural de compresión en la fuente de poder valvular (<strong>Power Sag</strong>):</p>
            <ul>
                <li>
                    🟠 <strong>ORANGE · High-Gain Británico</strong> <em>(Inspirado en Rockerverb / Carácter británico clásico)</em><br>
                    <strong>Carácter Sonoro:</strong> Oscuro, denso y con grano valvular grueso. Pared masiva de medios cavernosos con filtro <em>anti-fizz</em> para evitar asperezas.<br>
                    <strong>Topología DSP &amp; Sag:</strong> Saturación asimétrica con compresión elástica y respuesta esponjosa al pulsar con fuerza.<br>
                    <strong>Estilos ideales:</strong> Doom, Stoner Rock, Sludge, Grunge.
                </li>
                <li>
                    ⚫ <strong>BLACK · American Modern High-Gain</strong> <em>(Inspirado en Bogner Uberschall &amp; Shiva)</em><br>
                    <strong>Carácter Sonoro:</strong> High-Gain moderno, articulado y apretado. Graves profundos y controlados con máxima definición en acordes complejos, riffs densos y afinaciones bajas.<br>
                    <strong>Topología DSP &amp; Sag:</strong> Saturación profunda con balance armónico calibrado nota por nota.<br>
                    <strong>Estilos ideales:</strong> Metal Moderno, Hard Rock, Rítmicas Pesadas.
                </li>
                <li>
                    ⚪ <strong>WHITE · Boutique Quirúrgico</strong> <em>(Inspirado en amplificación Fortin)</em><br>
                    <strong>Carácter Sonoro:</strong> Ultra High-Gain quirúrgico, percusivo, agresivo y brillante con ataque de púa instantáneo.<br>
                    <strong>Topología DSP &amp; Sag:</strong> Respuesta ultrarrápida con filtrado pre-etapa que limpia la bola de graves en la entrada para que los <em>palm mutes</em> y afinaciones muy graves (7 y 8 cuerdas) suenen ultra definidos, sumado a una saturación cortante en medios-altos.<br>
                    <strong>Estilos ideales:</strong> Djent, Metalcore, 7 &amp; 8 Cuerdas, Chugs.
                </li>
                <li>
                    🟣 <strong>PURPLE · Boutique Clean / Dynamic</strong> <em>(Inspirado en Morgan &amp; Matchless)</em><br>
                    <strong>Carácter Sonoro:</strong> Desde limpios boutique cristalinos y tridimensionales hasta saturación orgánica al romper la señal (<em>Edge of Breakup</em>).<br>
                    <strong>Topología DSP &amp; Sag:</strong> Compresor óptico virtual integrado en la entrada y saturación dinámica reactiva a la fuerza con la que atacas las cuerdas.<br>
                    <strong>Estilos ideales:</strong> Clean, Indie, Shoegaze, Ambient.
                </li>
            </ul>

            <h3>2. Cabinas SYKO 4x12: Dual Cab Simulator &amp; IR Loader</h3>
            <p>Motor de convolución estéreo dual de <strong>latencia cero</strong> capturado en un gabinete real <strong>4x12 SYKO</strong>, permitiendo configurar simultáneamente dos canales independientes: <strong>Cab 1 / IR1 (Izquierda)</strong> y <strong>Cab 2 / IR2 (Derecha)</strong>.</p>
            <h4>Arquitectura &amp; Mezcla</h4>
            <ul>
                <li><strong>Mezcla Continua (Dual IR Blend):</strong> Balance fluido entre Cab 1 y Cab 2 para combinar distintas configuraciones de parlantes/micrófonos, crear texturas más densas y posicionar armónicamente el sonido en estéreo.</li>
                <li><strong>Latencia Cero:</strong> Motor optimizado para tocar en directo y grabar con respuesta inmediata sin retardo perceptible.</li>
            </ul>
            <h4>Altavoces &amp; Micrófonos</h4>
            <ul>
                <li><strong>Altavoces Disponibles:</strong> <strong>Greenback</strong> (medios amaderados cálidos y agudos sedosos) y <strong>Vintage 30</strong> (pegada contundente en graves y medios agresivos).</li>
                <li><strong>Micrófonos de Estudio:</strong> <strong>SM57</strong> (ataque clásico y corte directo), <strong>SM7B</strong> (cuerpo cálido y redondo) y <strong>VR1</strong> (micrófono de cinta pasivo, sedoso y natural).</li>
            </ul>
            <h4>Posicionamiento, Custom IR &amp; Opciones de Bypass</h4>
            <ul>
                <li><strong>Micro-Posicionamiento Continuo:</strong> Desplazamiento gradual del micrófono desde el centro del cono (más brillante y agresivo) hacia el borde exterior (más cálido y oscuro).</li>
                <li><strong>Cargador Custom IR:</strong> Permite cargar cualquier impulso externo de terceros arrastrando el archivo o seleccionándolo, con ajuste y normalización automática.</li>
                <li><strong>IR Bypass Independiente:</strong> Posibilidad de encender o apagar IR1 e IR2 por separado para audicionar cada lado al construir tu tono.</li>
                <li><strong>Cab Bypass:</strong> Apaga toda la sección de gabinete si prefieres utilizar tu propio cargador de impulsos externo en tu DAW o enviar la señal a una etapa de potencia real.</li>
                <li><strong>Amp Bypass:</strong> Apaga la etapa de amplificador si deseas usar únicamente los efectos y las cabinas SYKO con un preamplificador externo.</li>
            </ul>

            <h3>3. Pedales Pre-Amplificador (Input FX)</h3>
            <p>Haciendo clic en la vista de pedales (<strong>FX</strong>) accedes a la cadena virtual previa al amplificador, diseñada para moldear el ataque, limpiar ruidos y empujar la saturación:</p>
            <ul>
                <li>
                    <strong>Noise Gate Inteligente (Sidechain Gate):</strong> Puerta de ruido rápida diseñada para riffs entrecortados (<em>staccato</em>) y silencios absolutos.
                    <ul>
                        <li>Monitoriza la entrada limpia de la guitarra antes de saturar.</li>
                        <li>Corta silenciosamente a la salida del amplificador.</li>
                        <li>Conserva intactas las colas naturales de Delay y Reverb.</li>
                    </ul>
                </li>
                <li>
                    <strong>Carbonado Boost (Clean Boost):</strong> Inspirado en <em>Fortin 33</em>. Booster transparente que aprieta la señal y define el ataque.
                    <ul>
                        <li>Empuje limpio de decibelios puros que compacta los graves y resalta la articulación de la púa.</li>
                        <li>Filtro pre-configurado para eliminar frecuencias que ensucian la distorsión.</li>
                        <li>Control inmediato de una sola perilla mediante <strong>Pressure</strong>.</li>
                    </ul>
                </li>
                <li>
                    <strong>Ónix Overdrive (Mid-Boost Overdrive):</strong> Inspirado en el clásico <em>Tube Screamer</em> pero refinado para afinaciones modernas.
                    <ul>
                        <li>Curva de medios optimizada (<em>Mid-Hump</em>) que corta los bajos y agudos sueltos para destacar guitarras en la mezcla.</li>
                        <li>Clipping asimétrico cálido y orgánico.</li>
                        <li>Controles de <strong>Drive</strong>, <strong>Tone</strong> y <strong>Level</strong> con empuje extra de volumen.</li>
                    </ul>
                </li>
            </ul>

            <h3>4. Pedales Post-Amplificador (Loop FX / Tiempo &amp; Espacio)</h3>
            <p>Efectos de modulación, ambiente y ensanchamiento estéreo ubicados después de la etapa de ganancia para mantener máxima definición y claridad:</p>
            <ul>
                <li>
                    <strong>Ámbar Delay (Multi-Mode Stereo):</strong> Retardo estéreo versátil con controles de tiempo, repetición (<em>Feedback</em>) y mezcla, con 3 modos seleccionables:
                    <ul>
                        <li><strong>Normal:</strong> Repeticiones digitales nítidas y prístinas.</li>
                        <li><strong>Vintage:</strong> Eco analógico de cinta oscura con modulación cálida.</li>
                        <li><strong>Drone:</strong> Textura <em>shimmer</em> de partículas y retardo en reversa con movimiento espacial estéreo.</li>
                    </ul>
                </li>
                <li>
                    <strong>Ágata Reverb (Modulated Space):</strong> Reverberación envolvente de sala (<em>Hall</em>) y catedral con procesado tridimensional.
                    <ul>
                        <li>Pre-delay integrado para proteger la definición del ataque de la púa.</li>
                        <li>Chorus estéreo interno en la cola que aporta amplitud y riqueza espacial.</li>
                        <li>Controles intuitivos de tamaño, absorción y mezcla.</li>
                    </ul>
                </li>
                <li>
                    <strong>Stereo Doubler (Efecto Haas / Artificial Double Tracking):</strong> Simulador de guitarra doblada que ensancha pistas mono creando una imagen estéreo masiva.
                    <ul>
                        <li>Genera una copia con desfase calibrado y variaciones milimétricas de tiempo y tono enviadas a los canales izquierdo y derecho, dando la sensación de dos tomas reales de guitarra (<em>hard-panned</em>).</li>
                        <li>Procesamiento alineado en fase para evitar cancelaciones destructivas.</li>
                        <li>Ideal para engordar guitarras rítmicas al instante en vivo o en estudio.</li>
                    </ul>
                </li>
            </ul>

            <h3>5. Ecualizador Gráfico Maestro (Vista EQ)</h3>
            <p>Módulo avanzado <strong>post-amplificador y pre-cabina</strong> diseñado para esculpir quirúrgicamente el balance tonal general sin comprometer la agresividad, dinámica o claridad de tu señal original.</p>
            <ul>
                <li><strong>Filtros Continuos:</strong> Filtros Pasa-Altos (<em>High-Pass</em>) y Pasa-Bajos (<em>Low-Pass</em>) para limpiar subgraves problemáticos y suavizar agudos extremos.</li>
                <li><strong>9 Bandas Musicales de Precisión:</strong>
                    <ul>
                        <li><strong>Subgraves:</strong> Resonancia y profundidad del gabinete.</li>
                        <li><strong>Graves:</strong> Pegada y peso del cuerpo.</li>
                        <li><strong>Medios-Bajos:</strong> Limpieza de barro y acumulación.</li>
                        <li><strong>Cuerpo:</strong> Presencia y densidad tonal.</li>
                        <li><strong>Ataque:</strong> Mordida y toque de púa.</li>
                        <li><strong>Articulación:</strong> Definición y corte en la mezcla.</li>
                        <li><strong>Distorsión:</strong> Claridad armónica.</li>
                        <li><strong>Brillo:</strong> Apertura y claridad superior.</li>
                        <li><strong>Aire:</strong> <em>Sheen</em> y espacio armónico.</li>
                    </ul>
                </li>
            </ul>

            <h3>6. Flujo de Trabajo, Escenas, Afinador y Gestión de Presets</h3>
            <p>Herramientas integradas para agilizar tu flujo creativo tanto en sesión de grabación como sobre el escenario:</p>
            <ul>
                <li><strong>Afinador Cromático Integrado:</strong> Detección rápida y precisa en tiempo real siempre accesible en la interfaz. Muestra la nota actual y la desviación en <em>cents</em>, e incluye opción de silenciar la señal (<strong>Auto-Mute</strong>). Si muestra <code>--</code> e indica <code>Mute</code>, significa que no está entrando señal o es demasiado baja.</li>
                <li><strong>Sistema de 8 Escenas:</strong> Cambio instantáneo y sin cortes entre 8 configuraciones completas mediante clics de ratón, atajos de teclado o controladores MIDI.</li>
                <li><strong>Gestor de Presets (Fábrica, Artistas y Usuario):</strong> Navegador categorizado con importación y exportación rápida de archivos:
                    <ol>
                        <li>Modifica los parámetros del amplificador, cabinas, pedales y EQ hasta encontrar el sonido deseado.</li>
                        <li>Guarda tu configuración creando un nuevo preset con la opción <strong>Save Preset</strong>.</li>
                        <li>Accede a tus creaciones desde el menú desplegable bajo la categoría <strong>User</strong>, o compártelas mediante las funciones de importar y exportar.</li>
                    </ol>
                </li>
            </ul>

            <h3>7. La Sección LIVE (LIVE View · Modo Escenario)</h3>
            <p>La <strong>Vista LIVE</strong> transforma SYKO One en una herramienta optimizada para presentaciones en directo. Al activarla, la interfaz oculta los parámetros detallados de diseño sonoro y despliega una pantalla de alto contraste centrada únicamente en lo esencial para el escenario:</p>
            <ul>
                <li><strong>Afinador de Gran Visibilidad:</strong> Afinador cromático central de gran tamaño, diseñado para ser leído claramente a distancia bajo cualquier condición de iluminación.</li>
                <li><strong>Estado Inmediato del Rig:</strong> Indicadores claros e instantáneos de los pedales activos, la escena seleccionada y el canal de amplificador en uso.</li>
                <li><strong>Control MIDI en Vivo:</strong> Operación fluida mediante pedalera de piso para conmutar escenas y efectos sin tocar el ordenador, manteniendo tu enfoque absoluto en la interpretación.</li>
            </ul>
        </div>`
    ]
};

window.docsTranslations.en.sykoOne = {
    "langLabel": "Language",
    "meta": "Practical Manual · Collaborations",
    "kicker": "Practical manual",
    "title": "SYKO One",
    "subtitle": "The ultimate collaboration with SYKO Cabs. A complete tube modeling, dual convolution, and effects ecosystem engineered to build your modern guitar tone, both in the studio and live.",
    "chips": [
        "SYKO One",
        "4 Amplifiers",
        "Dual Cab & IR Loader",
        "Pre & Post FX",
        "Graphic EQ",
        "LIVE Mode & Scenes"
    ],
    "asideBadges": [
        { "label": "Family", "value": "Special Collaborations" },
        { "label": "Formats", "value": "Plugin & Standalone" },
        { "label": "Approach", "value": "Studio & Stage" },
        { "label": "Result", "value": "Complete Modern Tone" }
    ],

    "footerLeft": "AMATISTA · Boutique Digital Effects",
    "sections": [
        `<div class='plugin-manual' id='sykoone'>
            <h3>SYKO One · Overview &amp; Key Features</h3>
            <p><strong>SYKO One</strong> is a tube modeling and convolution ecosystem engineered in collaboration with <strong>SYKO Cabs</strong> to meet every demand of modern guitar production in the studio and on stage.</p>
            <ul>
                <li><strong>Complete Suite (Plugin &amp; Standalone):</strong> Run it inside your favorite DAW or as a standalone application ready for live performance.</li>
                <li><strong>Total Versatility:</strong> From pristine 3D boutique cleans and <em>edge of breakup</em> to massive <em>high-gain</em> and surgical <em>ultra high-gain</em> for extreme low tunings.</li>
                <li><strong>Optimized for Mix &amp; Stage:</strong> Ultra-dynamic pick response, zero-latency convolution, and dedicated stage tools built in.</li>
            </ul>

            <h4>Master Interface Controls</h4>
            <ul>
                <li><strong>Central Amp Knob:</strong> The core control of the plugin. Musically scales the saturation, dynamic EQ, and volume of the selected amplifier.</li>
                <li><strong>Input &amp; Output:</strong> Master gain controls to match your guitar's pickup output at the input and calibrate final output levels in your DAW.</li>
                <li><strong>Mix (Dry/Wet Balance):</strong> Blends your completely clean (<em>Dry</em>) DI signal with the processed amplifier tone.</li>
                <li><strong>Gate (Sidechain Noise Gate):</strong> Fast, intelligent noise gate. Turn it clockwise to eliminate feedback and hiss in high-gain tones with dead-silent stops.</li>
                <li><strong>Global &amp; Module Bypass:</strong> Full suite bypass or independent toggling for the <em>Amp</em>, <em>Cab</em>, and individual <em>IR</em> stages.</li>
            </ul>

            <h3>1. The 4 Virtual Amplifiers (4 Colors)</h3>
            <p>The color selector switches between four component-level modeled architectures featuring dynamic equalization and natural tube power supply compression (<strong>Power Sag</strong>):</p>
            <ul>
                <li>
                    🟠 <strong>ORANGE · Classic British High-Gain</strong> <em>(Inspired by Rockerverb / Classic British high-gain)</em><br>
                    <strong>Sonic Character:</strong> Dark, thick tube grain with a massive midrange wall and anti-fizz filtering to tame harshness.<br>
                    <strong>DSP Topology &amp; Sag:</strong> Asymmetrical saturation with elastic compression and a spongy feel under hard picking.<br>
                    <strong>Ideal Styles:</strong> Doom, Stoner Rock, Sludge, Grunge.
                </li>
                <li>
                    ⚫ <strong>BLACK · American Modern High-Gain</strong> <em>(Inspired by Bogner Uberschall &amp; Shiva)</em><br>
                    <strong>Sonic Character:</strong> Modern, articulate, and tight high-gain with deep, controlled lows and maximum clarity in complex chords and low tunings.<br>
                    <strong>DSP Topology &amp; Sag:</strong> Deep saturation with harmonic balance calibrated note by note.<br>
                    <strong>Ideal Styles:</strong> Modern Metal, Hard Rock, Tight Rhythms.
                </li>
                <li>
                    ⚪ <strong>WHITE · Surgical Boutique</strong> <em>(Inspired by Fortin amplification)</em><br>
                    <strong>Sonic Character:</strong> Surgical, percussive, aggressive ultra high-gain with instant pick attack.<br>
                    <strong>DSP Topology &amp; Sag:</strong> Ultra-fast response with pre-stage input filtering that removes low-end mud so palm mutes and extended-range guitars (7 &amp; 8 strings) stay razor-sharp, paired with cutting upper-midrange saturation.<br>
                    <strong>Ideal Styles:</strong> Djent, Metalcore, 7 &amp; 8 Strings, Chugs.
                </li>
                <li>
                    🟣 <strong>PURPLE · Boutique Clean / Dynamic</strong> <em>(Inspired by Morgan &amp; Matchless)</em><br>
                    <strong>Sonic Character:</strong> From pristine 3D boutique cleans to organic breakup when digging into the strings (<em>Edge of Breakup</em>).<br>
                    <strong>DSP Topology &amp; Sag:</strong> Integrated virtual optical compressor at the input with touch-sensitive dynamic saturation.<br>
                    <strong>Ideal Styles:</strong> Clean, Indie, Shoegaze, Ambient.
                </li>
            </ul>

            <h3>2. SYKO 4x12 Cabinets: Dual Cab Simulator &amp; IR Loader</h3>
            <p>A <strong>zero-latency</strong> dual stereo convolution engine captured from a real <strong>4x12 SYKO</strong> cabinet, allowing you to configure two independent channels simultaneously: <strong>Cab 1 / IR1 (Left)</strong> and <strong>Cab 2 / IR2 (Right)</strong>.</p>
            <h4>Architecture &amp; Blend</h4>
            <ul>
                <li><strong>Continuous Dual IR Blend:</strong> Smooth balance between Cab 1 and Cab 2 to blend speaker/microphone combinations, craft denser textures, and position your tone harmoniously across the stereo field.</li>
                <li><strong>Zero Latency:</strong> Optimized engine for live performance and studio tracking with instant response.</li>
            </ul>
            <h4>Speakers &amp; Microphones</h4>
            <ul>
                <li><strong>Available Speakers:</strong> <strong>Greenback</strong> (warm woody mids and silky highs) and <strong>Vintage 30</strong> (punchy low-end and aggressive midrange).</li>
                <li><strong>Studio Microphones:</strong> <strong>SM57</strong> (classic attack and mix cut), <strong>SM7B</strong> (warm, rounded body), and <strong>VR1</strong> (silky, natural passive ribbon).</li>
            </ul>
            <h4>Positioning, Custom IR &amp; Bypass Options</h4>
            <ul>
                <li><strong>Continuous Micro-Positioning:</strong> Smooth, gradual microphone placement from the center of the cone (bright and aggressive) to the outer edge (warm and dark).</li>
                <li><strong>Custom IR Loader:</strong> Drag and drop or browse to load any third-party impulse response with automatic level adjustment.</li>
                <li><strong>Independent IR Bypass:</strong> Enable or disable IR1 and IR2 independently to audition each side while dialing in your tone.</li>
                <li><strong>Cab Bypass:</strong> Disables the entire cabinet section if you prefer using an external impulse loader in your DAW or routing into a physical power amp and cab.</li>
                <li><strong>Amp Bypass:</strong> Disables the amplifier section if you wish to use only the pedals and SYKO cabinets with an external preamp.</li>
            </ul>

            <h3>3. Pre-Amp Pedalboard (Input FX)</h3>
            <p>Clicking the pedalboard view (<strong>FX</strong>) reveals the pre-amplifier virtual stompboxes, engineered to sculpt pick attack, eliminate unwanted noise, and push saturation before the amp:</p>
            <ul>
                <li>
                    <strong>Smart Noise Gate (Sidechain Gate):</strong> Fast, surgical noise gate built for staccato riffing and dead silence.
                    <ul>
                        <li>Monitors the clean guitar input before saturation.</li>
                        <li>Silently attenuates at the amplifier output.</li>
                        <li>Preserves natural Delay and Reverb tails completely intact.</li>
                    </ul>
                </li>
                <li>
                    <strong>Carbonado Boost (Clean Boost):</strong> Inspired by <em>Fortin 33</em>. Transparent booster designed to tighten the front end and define pick attack.
                    <ul>
                        <li>Clean decibel push that compacts low frequencies and enhances articulation.</li>
                        <li>Pre-configured filtering to remove mud before high gain.</li>
                        <li>Immediate single-knob <strong>Pressure</strong> control.</li>
                    </ul>
                </li>
                <li>
                    <strong>Ónix Overdrive (Mid-Boost Overdrive):</strong> Inspired by the legendary <em>Tube Screamer</em> and tuned for modern rigs.
                    <ul>
                        <li>Mid-focused curve (<em>Mid-Hump</em>) that trims loose lows and highs to make guitars cut cleanly through any mix.</li>
                        <li>Warm, organic asymmetrical clipping.</li>
                        <li><strong>Drive</strong>, <strong>Tone</strong>, and <strong>Level</strong> controls with generous output boost.</li>
                    </ul>
                </li>
            </ul>

            <h3>4. Post-Amp FX (Time &amp; Space / FX Loop)</h3>
            <p>Modulation, spatial processing, and stereo widening placed after the gain stages for pristine, spacious definition:</p>
            <ul>
                <li>
                    <strong>Ámbar Delay (Multi-Mode Stereo):</strong> Versatile stereo delay with time, feedback, and mix controls, featuring 3 selectable modes:
                    <ul>
                        <li><strong>Normal:</strong> Crisp, high-fidelity digital repeats.</li>
                        <li><strong>Vintage:</strong> Warm dark tape echo with subtle modulation.</li>
                        <li><strong>Drone:</strong> Shimmer particle texture and reverse ambient delay with stereo movement.</li>
                    </ul>
                </li>
                <li>
                    <strong>Ágata Reverb (Modulated Space):</strong> Enveloping Hall and cathedral reverberation with three-dimensional depth.
                    <ul>
                        <li>Integrated pre-delay to protect note attack definition.</li>
                        <li>Internal stereo chorus across the reverb tail that expands width and spatial richness.</li>
                        <li>Intuitive controls for room size, damping, and mix.</li>
                    </ul>
                </li>
                <li>
                    <strong>Stereo Doubler (Haas Effect / Artificial Double Tracking):</strong> Double-track simulator that widens mono tracks into an expansive stereo wall of sound.
                    <ul>
                        <li>Generates a calibrated delay offset with minute timing and pitch variations sent to the left and right channels, giving the feel of two separately tracked guitars (<em>hard-panned</em>).</li>
                        <li>Phase-aligned processing to prevent destructive phase cancellation.</li>
                        <li>Ideal for instant massive rhythm guitars live or in the studio.</li>
                    </ul>
                </li>
            </ul>

            <h3>5. Master Graphic Equalizer (EQ View)</h3>
            <p>An advanced <strong>post-amplifier and pre-cabinet</strong> module engineered to surgically sculpt the overall tonal balance without compromising the aggression, dynamics, or clarity of your original signal.</p>
            <ul>
                <li><strong>Continuous Filters:</strong> High-Pass and Low-Pass filters to clean up sub-low rumble and smooth out harsh top-end frequencies.</li>
                <li><strong>9 Musical Frequency Bands:</strong>
                    <ul>
                        <li><strong>Sub-Bass:</strong> Cabinet resonance and depth.</li>
                        <li><strong>Lows:</strong> Body punch and weight.</li>
                        <li><strong>Low-Mids:</strong> Mud cleanup.</li>
                        <li><strong>Body:</strong> Presence and tonal density.</li>
                        <li><strong>Attack:</strong> Pick bite and clarity.</li>
                        <li><strong>Articulation:</strong> Mix cut and definition.</li>
                        <li><strong>Distortion:</strong> Harmonic clarity.</li>
                        <li><strong>Brightness:</strong> Openness and upper clarity.</li>
                        <li><strong>Air:</strong> Top-end sheen and harmonic space.</li>
                    </ul>
                </li>
            </ul>

            <h3>6. Workflow, Scenes, Tuner &amp; Preset Management</h3>
            <p>Built-in utilities designed to streamline your creative workflow both in recording sessions and on stage:</p>
            <ul>
                <li><strong>Integrated Chromatic Tuner:</strong> Fast, accurate real-time pitch detection always accessible on the interface. Displays the current note and deviation in <em>cents</em>, with silent tuning (<strong>Auto-Mute</strong>). If you see <code>--</code> and <code>Mute</code>, no signal is entering or the input is too low.</li>
                <li><strong>8 Instant Scenes:</strong> Seamless, gapless switching between 8 complete rig configurations via mouse clicks, keyboard hotkeys, or MIDI controllers.</li>
                <li><strong>Preset Manager (Factory, Artist &amp; User):</strong> Categorized browser with fast file import and export:
                    <ol>
                        <li>Dial in the amplifier, cabinets, pedals, and EQ parameters until you find the tone you want to keep.</li>
                        <li>Create a new user patch using the <strong>Save Preset</strong> option.</li>
                        <li>Access your saved patches anytime from the dropdown menu under the <strong>User</strong> category, or share them using the import/export functions.</li>
                    </ol>
                </li>
            </ul>

            <h3>7. LIVE View (Stage Mode)</h3>
            <p>The <strong>LIVE View</strong> transforms SYKO One into an optimized stage tool for live performances. When activated, the interface conceals detailed sound design parameters and reveals a high-contrast display focused strictly on what matters on stage:</p>
            <ul>
                <li><strong>High-Visibility Tuner:</strong> Large central chromatic tuner engineered to be clearly readable from a distance under any stage lighting conditions.</li>
                <li><strong>Immediate Rig Status:</strong> Clear, instant indicators showing active stompboxes, the selected scene, and the current amplifier channel.</li>
                <li><strong>Hands-Free MIDI Control:</strong> Seamless floorboard operation for switching scenes and toggling effects without touching your computer, keeping your absolute focus on playing.</li>
            </ul>
        </div>`
    ]
};
