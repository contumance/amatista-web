import re

with open('plugin.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    if 'ctaLink' in line:
        if '//<--ctaLink' in line:
            continue # just remove this commented line
        else:
            # For free plugins, they need a downloadUrl instead of ctaLink
            # We can just rename ctaLink to downloadUrl and empty the gumroad value.
            # However, for paid plugins they should set their own downloadUrl.
            # It's safer to just change the key to downloadUrl and empty the string if it contains gumroad.
            new_line = re.sub(r'ctaLink:\s*"[^"]*"', 'downloadUrl: ""', line)
            new_lines.append(new_line)
    elif 'Gumroad' in line:
        new_line = line.replace('Gumroad o ', '')
        new_lines.append(new_line)
    else:
        new_lines.append(line)

with open('plugin.js', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
