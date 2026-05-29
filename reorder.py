import re

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Match sections using regex
# We will match the entire <section ...> ... </section> blocks
# Because they might contain nested tags, it's easier to find their indices.

def get_section(content, section_id):
    start_tag = f'<section id="{section_id}"'
    start_idx = content.find(start_tag)
    if start_idx == -1:
        return ""
    
    # Simple nested tag counter to find the end of the section
    end_idx = start_idx
    depth = 0
    i = start_idx
    while i < len(content):
        if content[i:i+9] == '<section ' or content[i:i+9] == '<section>':
            depth += 1
            i += 8
        elif content[i:i+10] == '</section>':
            depth -= 1
            if depth == 0:
                end_idx = i + 10
                break
            i += 9
        else:
            i += 1
            
    return content[start_idx:end_idx]

about_sec = get_section(html, "about")
plugins_sec = get_section(html, "plugins")
media_sec = get_section(html, "media")

# The new pact section
pacto_sec = """
    <section id="pacto-creativo" class="section pacto-section">
        <div class="container fade-in-section">
            <div class="pacto-container">
                <h2 class="section-title center" data-i18n="pact-title" style="margin-bottom: 2rem;">Nuestro <span class="highlight">Pacto Creativo</span></h2>
                <p class="center" data-i18n="pact-desc" style="max-width: 800px; margin: 0 auto 2rem; font-size: 1.15rem; color: var(--clr-text-muted);">Creemos en la transparencia y el respeto por tu herramienta de trabajo. Sin suscripciones, sin DRM invasivo, sin obsolescencia programada. Herramientas que compras una vez y son tuyas para siempre.</p>
                <div style="text-align: center;">
                    <a href="docs.html#pacto-creativo" class="btn btn-primary glow-effect" data-i18n="pact-btn">Leer el Pacto Completo</a>
                </div>
            </div>
        </div>
    </section>
"""

# Replace the old sequence with the new sequence
old_total = about_sec + "\n\n" + plugins_sec + "\n\n" + media_sec
# Wait, they might have specific spacing between them. 
# It's safer to find the start of 'about' and the end of 'media' and replace that chunk.
start_replace = html.find(about_sec)
end_replace = html.find(media_sec) + len(media_sec)

new_total = plugins_sec + "\n\n" + media_sec + "\n\n" + about_sec + "\n\n" + pacto_sec

new_html = html[:start_replace] + new_total + html[end_replace:]

with open("index.html", "w", encoding="utf-8") as f:
    f.write(new_html)

print("index.html successfully updated.")
