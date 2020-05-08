

with open('../static/json/completeSpellsDuplicate.json', encoding="utf-8") as f:
    lines = list(f)

for x in range(11, len(lines), 12):
    numChars = len(lines[x])
    # print(lines[x])
    if(lines[x][numChars-2] == ','):
        lines[x] = lines[x][0:numChars-3] + "\"\n"

newFile = open('../static/json/completeSpellsFinal.json', 'w', encoding="utf-8")
for line in lines:
    newFile.write(line)


