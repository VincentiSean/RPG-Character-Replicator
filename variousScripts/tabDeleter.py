with open('../static/json/completeSpellsFinal.json', encoding="utf-8") as f:
    lines = list(f)

for x in lines:
    numChars = len(x)
    x.replace(" \n", "\n")
    x.replace("    \n", "\n")

newFile = open('../static/json/completeSpells.json', 'w', encoding="utf-8")
for line in lines:
    newFile.write(line)

