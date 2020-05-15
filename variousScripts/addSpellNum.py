with open('../fixtures/completeSpellsFinalAgain.json', encoding="utf-8") as f:
    lines = list(f)

newSpellList = []
spellNum = 0

newSpellList.append("[\n")

for x in range(len(lines)):
    if (lines[x].find('\t{') != -1):
        spellNum += 1
        newSpellList.append(lines[x])
        newSpellList.append(lines[x+1])
        newSpellList.append(lines[x+2])
        newSpellList.append(lines[x+3])
        newSpellList.append('\t\t\t\"spellNumber\": {},'.format(spellNum))
        newSpellList.append("\n"+lines[x+4])
        newSpellList.append(lines[x+5])
        newSpellList.append(lines[x+6])
        newSpellList.append(lines[x+7])
        newSpellList.append(lines[x+8])
        newSpellList.append(lines[x+9])
        newSpellList.append(lines[x+10])
        newSpellList.append(lines[x+11])
        newSpellList.append(lines[x+12])
        newSpellList.append(lines[x+13])
        newSpellList.append(lines[x+14])
        newSpellList.append(lines[x+15])
        newSpellList.append(lines[x+16])
        newSpellList.append(lines[x+17])
        newSpellList.append(lines[x+18])
        newSpellList.append(lines[x+19])

newSpellList.append("]\n")

newFile = open('../fixtures/completeSpellsFinal.json', 'w', encoding='utf-8')
for line in newSpellList:
    newFile.write(line)