
with open('../static/json/completeSpellsFinal.json', encoding="utf-8") as f:
    lines = list(f)

newSpellList = []
spellNum = 0

newSpellList.append("[\n")

for x in range(len(lines)):
    numChars = len(lines[x])
    # print(lines[x])
    if (lines[x].find('{') != -1):
        print("spell ", spellNum)
        spellNum += 1
        newSpellList.append(lines[x])
        newSpellList.append("\t\t\"model\": \"accounts.Spells\",")
        newSpellList.append("\n\t\t\"pk\": {},".format(spellNum))
        newSpellList.append("\n\t\t\"fields\": {")
        newSpellList.append("\n\t"+lines[x+1])
        newSpellList.append("\t"+lines[x+2])
        newSpellList.append("\t"+lines[x+3])
        newSpellList.append("\t"+lines[x+4])
        newSpellList.append("\t"+lines[x+5])
        newSpellList.append("\t"+lines[x+6])
        newSpellList.append("\t"+lines[x+7])
        newSpellList.append("\t"+lines[x+8])
        newSpellList.append("\t"+lines[x+9])
        newSpellList.append("\t\t\t\"tags\": \"\",\n")
        newSpellList.append("\t\t\t\"damage\": \"\",\n")
        newSpellList.append("\t\t\t\"save\": \"\",\n")
        newSpellList.append("\t"+lines[x+10])
        newSpellList.append("\t\t}\n")
        newSpellList.append(lines[x+11])

newSpellList.append("]\n")

newFile = open('../static/json/completeSpellsFinalAgain.json', 'w', encoding='utf-8')
for line in newSpellList:
    newFile.write(line)


        # lineTempOne = lines[x+1]
        # lineTempTwo = lines[x+2]
        # lineTempThree = lines[x+3]

        # lines[x+1] = "\n\t\"model\": \"accounts.Spells\","
        # lines[x+2] = "\n\t\"pk\": {},".format(spellNum)
        # lines[x+3] = "\n\t\"fields\": {"
        # lines 