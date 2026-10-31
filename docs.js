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
            html += `<p class="muted">${t.pactoCreativo.subtitle}</p>`;
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
            html += `<p class="muted">${t.instalacion.subtitle}</p>`;

            html += `<h3>${t.instalacion.systemRequirementsTitle}</h3>`;
            html += `<h4>${t.instalacion.macTitle}</h4><ul style="padding-left:20px;">${t.instalacion.macReq.map(li => `<li>${li}</li>`).join('')}</ul>`;
            html += `<h4>${t.instalacion.winTitle}</h4><ul style="padding-left:20px; margin-bottom:15px;">${t.instalacion.winReq.map(li => `<li>${li}</li>`).join('')}</ul>`;

            html += `<div class="plugin-manual manual-aside">`;
            html += `<h4>${t.instalacion.testedTitle}</h4><p class="muted" style="font-size:0.9em;">${t.instalacion.testedNote}</p>`;
            html += `<ul style="padding-left:20px; font-size:0.95em;">${t.instalacion.testedDaws.map(li => `<li>${li}</li>`).join('')}</ul>`;
            html += `</div>`;

            html += `<h3>${t.instalacion.installTitle}</h3>`;
            html += `<h4>${t.instalacion.winInstallTitle}</h4>`;
            html += `<p><strong>${t.instalacion.summaryWin}</strong> <code>${t.instalacion.vst3PathWin}</code></p>`;
            html += `<p>${t.instalacion.restartRescan}</p>`;

            html += `<h4 style="margin-top:20px;">${t.instalacion.macInstallTitle}</h4>`;
            html += `<p><strong>${t.instalacion.unsignedTitle}</strong>: ${t.instalacion.unsignedBody}</p>`;
            html += `<ul style="list-style:none; padding-left:0;">`;
            html += `<li style="margin-bottom:8px;"><strong>${t.instalacion.vst3Label}</strong> <code>${t.instalacion.vst3PathMac}</code></li>`;
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
                html += `<p class="muted">${t.impulsoPrimario.subtitle}</p>`;

                html += t.impulsoPrimario.sections.join('');

                html += `<div class="docs-aside-grid">`;
                html += `<div class="plugin-manual manual-aside">`;
                html += `<h4>${t.impulsoPrimario.asideTitle}</h4>`;
                html += t.impulsoPrimario.asideBody.join('');
                html += `</div>`;

                html += `<div class="plugin-manual manual-aside">`;
                html += `<h4>${t.impulsoPrimario.asideNoteTitle}</h4>`;
                html += `<p>${t.impulsoPrimario.asideNoteBody}</p>`;
                html += `</div>`;
                html += `</div>`;

                html += `<div class="plugin-manual manual-recipes">`;
                html += `<h4>${t.impulsoPrimario.asideRecipesTitle}</h4>`;
                html += `<p>${t.impulsoPrimario.asideRecipesBody}</p>`;
                html += `</div>`;
                html += `</div>`;
            }

            if (t.frecuenciaBase) {
                html += `<div class="manual-family" style="margin-top: 60px;">`;
                html += `<h2>${t.frecuenciaBase.title}</h2>`;
                html += `<p class="muted">${t.frecuenciaBase.subtitle}</p>`;

                html += t.frecuenciaBase.sections.join('');

                html += `<div class="docs-aside-grid">`;
                html += `<div class="plugin-manual manual-aside">`;
                html += `<h4>${t.frecuenciaBase.asideTitle}</h4>`;
                html += t.frecuenciaBase.asideBody.join('');
                html += `</div>`;

                html += `<div class="plugin-manual manual-aside">`;
                html += `<h4>${t.frecuenciaBase.asideNoteTitle}</h4>`;
                html += `<p>${t.frecuenciaBase.asideNoteBody}</p>`;
                html += `</div>`;
                html += `</div>`;

                html += `<div class="plugin-manual manual-recipes-bass">`;
                html += `<h4>${t.frecuenciaBase.asideRecipesTitle}</h4>`;
                html += `<p>${t.frecuenciaBase.asideRecipesBody}</p>`;
                html += `</div>`;
                html += `</div>`;
            }

            if (t.sykoOne) {
                html += `<div class="manual-family" style="margin-top: 60px;">`;
                html += `<h2>${t.sykoOne.title}</h2>`;
                html += `<p class="muted">${t.sykoOne.subtitle}</p>`;

                html += t.sykoOne.sections.join('');

                html += `</div>`;
            }
            secMan.innerHTML = html;
        }
    }

    function applyDocsLang(lang) {
        langBtns.forEach(b => {
            if (b.dataset.lang === lang) {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });
        document.documentElement.lang = lang;
        try {
            localStorage.setItem('amatista_lang', lang);
        } catch (e) {}
        renderDocs(lang);
    }

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            applyDocsLang(btn.dataset.lang);
        });
    });

    let initialLang = 'es';
    try {
        initialLang = localStorage.getItem('amatista_lang') || 'es';
    } catch (e) {}
    applyDocsLang(initialLang);
});
