import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Mapeo de links de gumroad a ids
mapping = {
    'carbonadoboostfree': 'carbonado',
    'impulsoprimario': 'impulso-primario',
    'onixoverdrive': 'onix',
    'obsidianafuzz': 'obsidiana',
    'amatistadistortion': 'amatista',
    'granatebasssaturatorfree': 'granate'
}

for gumroad_id, plugin_id in mapping.items():
    pattern = r'href="https://amatistaefectos\.gumroad\.com/l/' + gumroad_id + r'"\s*target="_blank"'
    replacement = f'href="plugin.html?id={plugin_id}"'
    content = re.sub(pattern, replacement, content)
    
    # Also without target blank just in case
    pattern2 = r'href="https://amatistaefectos\.gumroad\.com/l/' + gumroad_id + r'"'
    content = re.sub(pattern2, replacement, content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
