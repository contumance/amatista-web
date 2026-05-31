import re

with open('plugin.js', 'r', encoding='utf-8') as f:
    content = f.read()

# We want to clear downloadUrl for paid plugins only.
# It's safer to just replace all `downloadUrl: "..."` with `downloadUrl: ""` 
# but only if they also have `badgeClass: "tag-paid"`.
# This is a bit tricky with regex, let's just do a simple line-by-line state machine

with open('plugin.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
is_paid = False
for line in lines:
    if 'tag-paid' in line:
        is_paid = True
    elif 'tag-free' in line:
        is_paid = False
        
    if is_paid and 'downloadUrl:' in line:
        new_lines.append('            downloadUrl: "",\n')
    else:
        new_lines.append(line)

with open('plugin.js', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
