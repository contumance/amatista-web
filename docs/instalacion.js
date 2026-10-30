// Archivo para la sección: instalacion
window.docsTranslations = window.docsTranslations || { es: {}, en: {} };

window.docsTranslations.es.instalacion = {
    "lang": "Idioma",
    "meta": "Manual de instalación · Windows / macOS",
    "kicker": "Instalación y solución de problemas",
    "title": "Manual de instalación",
    "subtitle": "Instrucciones para instalar VST3 en Windows y VST3 / Audio Unit en macOS. Incluye guía para versiones sin firmar.",
    "systemRequirementsTitle": "Requisitos del sistema",
    "macTitle": "macOS",
    "macReq": [
        "macOS 10.13 o superior",
        "DAW compatible con VST3 o Audio Unit"
    ],
    "winTitle": "Windows",
    "winReq": [
        "Windows 10 o superior",
        "DAW compatible con VST3"
    ],
    "testedTitle": "Probado en",
    "testedNote": "Otros DAWs compatibles con VST3/AU deberían funcionar correctamente.",
    "testedDaws": [
        "Ableton Live",
        "Logic Pro",
        "Cubase",
        "Reaper",
        "Studio One",
        "FL Studio"
    ],
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
};

window.docsTranslations.en.instalacion = {
    "lang": "Language",
    "meta": "Installation Manual · Windows / macOS",
    "kicker": "Installation & troubleshooting",
    "title": "Installation manual",
    "subtitle": "Install instructions for VST3 on Windows and VST3 / Audio Unit on macOS. Includes guidance for unsigned builds.",
    "systemRequirementsTitle": "System requirements",
    "macTitle": "macOS",
    "macReq": [
        "macOS 10.13 or later",
        "VST3 or Audio Unit compatible DAW"
    ],
    "winTitle": "Windows",
    "winReq": [
        "Windows 10 or later",
        "VST3 compatible DAW"
    ],
    "testedTitle": "Tested in",
    "testedNote": "Other VST3/AU compatible DAWs should work correctly.",
    "testedDaws": [
        "Ableton Live",
        "Logic Pro",
        "Cubase",
        "Reaper",
        "Studio One",
        "FL Studio"
    ],
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
};
