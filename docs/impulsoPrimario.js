// Archivo para la sección: impulsoPrimario
window.docsTranslations = window.docsTranslations || { es: {}, en: {} };

window.docsTranslations.es.impulsoPrimario = {
    "langLabel": "Idioma",
    "meta": "Manual práctico · Impulso Primario",
    "kicker": "Manual práctico",
    "title": "Impulso Primario · Arquitectura de la Saturación",
    "subtitle": "Guía orientada al músico para Boost, Overdrive, Fuzz y Distortion. Roles simples, resultados sólidos.",
    "chips": [
        "Carbonado Boost",
        "Ónix Overdrive",
        "Obsidiana Fuzz",
        "Amatista Distortion",
        "Combos y fixes"
    ],
    "asideBadges": [
        {
            "label": "Familia",
            "value": "Impulso primario"
        },
        {
            "label": "Objetivo",
            "value": "Ganancia coherente"
        },
        {
            "label": "Enfoque",
            "value": "Controles simples"
        },
        {
            "label": "Resultado",
            "value": "Listo mezcla"
        }
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
    "asideRecipesBody": "Tight riffs: Carbonado(50-70) &rarr; Ónix(Tone high) &rarr; Amatista(Structure low).<br/>Muro denso: Ónix &rarr; Obsidiana(Gain high, Bass high) &rarr; Amatista(Structure high).<br/>Clean Boost + Edge: Carbonado &rarr; Ónix(low drive).",
    "footerLeft": "AMATISTA · Efectos Digitales Boutique",
    "sections": [
        "<h2>Visi&oacute;n General y Filosof&iacute;a</h2><p>La suite AMATISTA est&aacute; dise&ntilde;ada como una progresi&oacute;n natural:</p><ul><li>Carbonado (Boost) &rarr; Impulso</li><li>Ónix (Overdrive) &rarr; Enfoque</li><li>Amatista (Distortion) &rarr; Estructura</li><li>Obsidiana (Fuzz) &rarr; Colapso</li></ul><p>Cada uno no solo agrega ganancia... redefine el comportamiento del siguiente. Esto no es una colecci&oacute;n de efectos. Es un sistema. Cada etapa es una decisi&oacute;n. Cada decisi&oacute;n cambia lo que viene despu&eacute;s.</p>",
        "<div class='plugin-manual' id='carbonado'><h3>CARBONADO BOOST</h3><p><strong>Qu&eacute; es:</strong> un booster r&aacute;pido, agresivo y dise&ntilde;ado para empujar lo que venga despu&eacute;s. No colorea innecesariamente. Empuja.</p><p><strong>Controles:</strong></p><ul><li><strong>Pressure:</strong> El &uacute;nico control. Hasta +22 dB de boost. Crece de forma musical, no lineal.</li><li><strong>Bypass:</strong> Ruta limpia directa.</li></ul><h4>Qu&eacute; est&aacute; pasando por dentro</h4><ul><li><strong>Oversampling (2x):</strong> Mejora calidad y evita artefactos.</li><li><strong>Tightening (High Pass):</strong> Recorta graves antes del boost (~100 Hz).</li><li><strong>Anti-Hiss (Low Pass):</strong> Suaviza agudos extremos (~10 kHz).</li><li><strong>Saturaci&oacute;n tipo op-amp:</strong> Simulando l&iacute;mites el&eacute;ctricos reales a altas presiones.</li></ul><h4>C&oacute;mo usarlo</h4><ul><li><strong>Tight Boost:</strong> Pressure 40-70% antes de distorsi&oacute;n para ataque definido.</li><li><strong>Clean Push:</strong> Pressure 10-30% para levantar volumen.</li></ul><p><em>Nota: Este pedal no es neutral en graves; siempre tiende a ajustar el low-end. Funciona mejor como primer elemento de la cadena.</em></p></div>",
        "<div class='plugin-manual' id='onix'><h3>ÓNIX OVERDRIVE</h3><p><strong>Qu&eacute; es:</strong> un overdrive moderno refinado para contexto actual. Menos barro, mejor respuesta en mezcla. Hecho para enfocar la se&ntilde;al.</p><p><strong>Controles:</strong></p><ul><li><strong>Drive:</strong> Aumenta la saturaci&oacute;n y compresi&oacute;n sin perder claridad.</li><li><strong>Tone:</strong> Filtro pasa bajos din&aacute;mico, afecta arm&oacute;nicos.</li><li><strong>Level:</strong> Volumen de salida (-18 dB a +12 dB).</li></ul><h4>Qu&eacute; est&aacute; pasando por dentro</h4><ul><li><strong>Oversampling (4x) y Pre-shaping:</strong> Recorte de graves y filtro de agudos suave.</li><li><strong>Mid Boost:</strong> Refuerzo en medios (~720 Hz) para cortar en mezcla.</li><li><strong>Clipping asim&eacute;trico y mezcla din&aacute;mica:</strong> Sensaci&oacute;n m&aacute;s org&aacute;nica, menos 'digital'. A bajo drive hay m&aacute;s se&ntilde;al limpia.</li></ul><h4>C&oacute;mo usarlo</h4><ul><li><strong>Clean Boost:</strong> Drive 0-15%, Tone 50-70%, Level alto.</li><li><strong>Crunch moderno:</strong> Drive 30-60%, Tone 50%.</li></ul><p><em>Nota: Recorta graves antes de saturar para mantener claridad. Excelente como 'tightener' en mezclas modernas.</em></p></div>",
        "<div class='plugin-manual' id='amatista'><h3>AMATISTA DISTORTION</h3><p><strong>Qu&eacute; es:</strong> un preamp + power stage condensado. Puede comportarse como un amplificador moderno, un crunch org&aacute;nico, o colapsar en una textura viva. Donde Obsidiana destruye, Amatista esculpe.</p><p><strong>Controles:</strong></p><ul><li><strong>Gain:</strong> Controla m&uacute;ltiples etapas de ganancia.</li><li><strong>Structure:</strong> El ADN del pedal. 0.0-0.30 Tight/Modern; 0.30-0.65 Amp-like; 0.65-1.0 Collapse/Textural. Cambia simetr&iacute;a y headroom.</li><li><strong>Body:</strong> Ecualizador low shelf (~120 Hz).</li><li><strong>Presence:</strong> High shelf (~3.8 kHz) para claridad y corte.</li></ul><h4>Qu&eacute; est&aacute; pasando por dentro</h4><ul><li><strong>Oversampling (2x) y Preamp Stage:</strong> Define din&aacute;mica.</li><li><strong>Distortion Stage:</strong> Clipping controlado suave y asim&eacute;trico.</li><li><strong>SAG:</strong> En valores altos de Structure la se&ntilde;al 'cede', simulando ca&iacute;da de voltaje.</li><li><strong>De-Fizz:</strong> Filtro din&aacute;mico para suavizar agudos.</li></ul><h4>C&oacute;mo usarlo</h4><ul><li><strong>Modern High Gain Tight:</strong> Gain 50-70%, Structure 10-25%.</li><li><strong>Collapse Mode:</strong> Gain alto, Structure 75-100%.</li></ul><p><em>Nota: Structure cambia TODO. Si algo no suena bien, mov&eacute; este knob primero.</em></p></div>",
        "<div class='plugin-manual' id='obsidiana'><h3>OBSIDIANA FUZZ</h3><p><strong>Qu&eacute; es:</strong> dise&ntilde;ado para transformar tu se&ntilde;al en una masa densa y viva. No es un fuzz educado: es un artefacto que responde a cu&aacute;nto caos invoqu&eacute;s.</p><p><strong>Controles:</strong></p><ul><li><strong>Level (Collapse):</strong> Controla el volumen final sin cambiar el car&aacute;cter (-18 a +12 dB).</li><li><strong>Gain (Fury):</strong> Intensidad del fuzz, llegando a compresi&oacute;n extrema.</li><li><strong>Bass:</strong> Cortes o boosts de hasta &plusmn;12 dB alrededor de ~100 Hz.</li><li><strong>Treble (Caos):</strong> Generador de comportamiento. Cambia c&oacute;mo distorsiona y abre/cierra la frecuencia.</li></ul><h4>Qu&eacute; est&aacute; pasando por dentro</h4><ul><li><strong>Oversampling (4x) y Pre-filtering:</strong> Recorte de graves antes del fuzz.</li><li><strong>Non-linearity:</strong> Saturaci&oacute;n tipo tanh y clipping duro, mezcla con se&ntilde;al rectificada (estilo octave-fuzz).</li><li><strong>Post filtering:</strong> Suaviza el 'fizz'.</li></ul><h4>C&oacute;mo usarlo</h4><ul><li><strong>Tight Modern High Gain:</strong> Gain 60-80%, Bass 30-45%, Treble 60-75%.</li><li><strong>Doom / Sludge:</strong> Gain alto, Bass 70-100%, Treble bajo.</li></ul><p><em>Nota: Reacciona mucho al volumen de tu guitarra. Obsidiana no busca ser transparente. Busca ser inevitable.</em></p></div>"
    ]
};

window.docsTranslations.en.impulsoPrimario = {
    "langLabel": "Language",
    "meta": "Practical Manual · Primary Impulse",
    "kicker": "Practical manual",
    "title": "Primary Impulse · Saturation Architecture",
    "subtitle": "A musician-focused guide to Boost, Overdrive, Fuzz and Distortion. Simple roles, solid results.",
    "chips": [
        "Carbonado Boost",
        "Ónix Overdrive",
        "Obsidiana Fuzz",
        "Amatista Distortion",
        "Combos & quick fixes"
    ],
    "asideBadges": [
        {
            "label": "Family",
            "value": "Primary Impulse"
        },
        {
            "label": "Goal",
            "value": "Coherent gain"
        },
        {
            "label": "Approach",
            "value": "Simple controls"
        },
        {
            "label": "Result",
            "value": "Mix-ready"
        }
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
        "<div class='plugin-manual' id='onix'><h3>ÓNIX OVERDRIVE</h3><p><strong>What it is:</strong> a modern overdrive refined for today's context. Less mud, better mix response. Made to focus the signal.</p><p><strong>Controls:</strong></p><ul><li><strong>Drive:</strong> Increases saturation and compression without losing clarity.</li><li><strong>Tone:</strong> Dynamic low-pass filter, affects harmonics.</li><li><strong>Level:</strong> Output volume (-18 dB to +12 dB).</li></ul><h4>What happens inside</h4><ul><li><strong>Oversampling (4x) & Pre-shaping:</strong> Bass cut and smooth treble filter.</li><li><strong>Mid Boost:</strong> Mid push (~720 Hz) to cut through the mix.</li><li><strong>Asymmetrical Clipping & Dynamic Mix:</strong> Organic feel, less 'digital'. More clean signal at lower drive.</li></ul><h4>How to use it</h4><ul><li><strong>Clean Boost:</strong> Drive 0-15%, Tone 50-70%, Level high.</li><li><strong>Modern Crunch:</strong> Drive 30-60%, Tone 50%.</li></ul><p><em>Note: Cuts lows before saturation to maintain clarity. Excellent as a 'tightener' in modern mixes.</em></p></div>",
        "<div class='plugin-manual' id='amatista'><h3>AMATISTA DISTORTION</h3><p><strong>What it is:</strong> a preamp + power stage condensed. Can act as a modern amp, an organic crunch, or collapse into a living texture. Where Obsidiana destroys, Amatista sculpts.</p><p><strong>Controls:</strong></p><ul><li><strong>Gain:</strong> Controls multiple gain stages.</li><li><strong>Structure:</strong> The pedal's DNA. 0.0-0.30 Tight/Modern; 0.30-0.65 Amp-like; 0.65-1.0 Collapse/Textural. Changes symmetry and headroom.</li><li><strong>Body:</strong> Low shelf EQ (~120 Hz).</li><li><strong>Presence:</strong> High shelf (~3.8 kHz) for clarity and cut.</li></ul><h4>What happens inside</h4><ul><li><strong>Oversampling (2x) & Preamp Stage:</strong> Defines dynamics.</li><li><strong>Distortion Stage:</strong> Smooth asymmetrical controlled clipping.</li><li><strong>SAG:</strong> At high Structure values, the signal 'sags', simulating voltage drops.</li><li><strong>De-Fizz:</strong> Dynamic filter to smooth highs.</li></ul><h4>How to use it</h4><ul><li><strong>Modern Tight:</strong> Gain 50-70%, Structure 10-25%.</li><li><strong>Collapse Mode:</strong> High Gain, Structure 75-100%.</li></ul><p><em>Note: Structure changes EVERYTHING. If something sounds off, move this knob first.</em></p></div>",
        "<div class='plugin-manual' id='obsidiana'><h3>OBSIDIANA FUZZ</h3><p><strong>What it is:</strong> designed to transform your signal into a dense, living mass. Not a polite fuzz: an artifact that responds to how much chaos you invoke.</p><p><strong>Controls:</strong></p><ul><li><strong>Level (Collapse):</strong> Final volume without changing character (-18 to +12 dB).</li><li><strong>Gain (Fury):</strong> Fuzz intensity, reaching extreme compression.</li><li><strong>Bass:</strong> Cuts or boosts up to &plusmn;12 dB around ~100 Hz.</li><li><strong>Treble (Chaos):</strong> Behavior generator. Changes how it distorts and opens/closes the frequency ceiling.</li></ul><h4>What happens inside</h4><ul><li><strong>Oversampling (4x) & Pre-filtering:</strong> Bass cut before the fuzz.</li><li><strong>Non-linearity:</strong> Tanh saturation and hard clipping, mixed with a rectified signal (octave-fuzz style).</li><li><strong>Post filtering:</strong> Smooths out 'fizz'.</li></ul><h4>How to use it</h4><ul><li><strong>Tight Modern High Gain:</strong> Gain 60-80%, Bass 30-45%, Treble 60-75%.</li><li><strong>Doom / Sludge:</strong> High Gain, Bass 70-100%, Treble low.</li></ul><p><em>Note: Highly responsive to your guitar's volume. Obsidiana doesn't seek to be transparent. It seeks to be inevitable.</em></p></div>"
    ]
};
