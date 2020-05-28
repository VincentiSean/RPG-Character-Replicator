# This program grabs the magic items from a premade JSON file I grabbed from another website.
# I'm reformatting the information to be submitted into the database and leaving blanks for 
# filling in information by hand. 

import sys

# Open the file containing the magic item information stored incorrectly
old = open('../fixtures/completeMagicItemsFinal.json', 'r')
oldInfo = []
for x in old:
    oldInfo.append(x)
old.close()

newLines = []

# Open the file to store the magic item information in the new json format
f = open('../fixtures/completeMagicItemsTwo.json', 'w')

itemCounter = 376
# newLineCount = 0
for x in range(len(oldInfo)):
    
    # newLineCount += 1

    if '[' in oldInfo[x] or ']' in oldInfo[x]:
        newLines.append(oldInfo[x])
    elif '},' in oldInfo[x-1] and '{' in oldInfo[x+1]:
        print('Not being included in the new file')
    elif '{' in oldInfo[x]:
        itemCounter += 1
        pkString = '\t\t"pk\": {},\n'.format(itemCounter)
        itemNumString = '\t\t\t\"itemNum\": {},\n'.format(itemCounter)
        limit = ''
        name = ''
        typeInfo = ''
        attunement = ''
        rarity = ''


        newLines.append(oldInfo[x])
        newLines.append('\t\t\t\"model\": \"accounts.Items\",\n')
        newLines.append(pkString)
        newLines.append('\t\t\"fields\": {\n')
        newLines.append(itemNumString)
        
        for y in range(7):
            if oldInfo[x+y].find("name") != -1: 
                name = oldInfo[x+y].split(':')[1].strip('",\n')
            elif "type" in oldInfo[x+y]:
                typeInfo = oldInfo[x+y].split(':')[1].strip('",\n')
            elif "limit" in oldInfo[x+y]:
                limit = oldInfo[x+y].split(':')[1].strip('",\n')
            elif "rarity" in oldInfo[x+y]:
                rarity = oldInfo[x+y].split(':')[1].strip('",\n') 
            elif "attunement" in oldInfo[x+y]:
                attuneType = oldInfo[x+y].split(':')[1].strip('",\n')
                if 'y' in attuneType:
                    attunement = 'True'
                else:
                    attunement = 'False' 
            elif "page" in oldInfo[x+y]:
                source = oldInfo[x+y].split(':')[1].strip('"') #
        
        newLines.append('\t\t\t\"name\": \"' + name + '\",\n')
        newLines.append('\t\t\t\"weight\": \"\",\n')
        newLines.append('\t\t\t\"cost\": \"\",\n')
        newLines.append('\t\t\t\"description\": \"\",\n')
        newLines.append('\t\t\t\"tags\": \"Wonderous Item, ' + typeInfo + '\",\n')
        if limit != '':
            newLines.append('\t\t\t\"properties\": \"Limit:' + limit + '\",\n')
        else:
            newLines.append('\t\t\t\"properties\": \"\",\n')
        newLines.append('\t\t\t\"itemType\": \"Wonderous Item, ' + rarity + '\",\n')
        newLines.append('\t\t\t\"range\": \"\",\n')
        newLines.append('\t\t\t\"damage\": \"\",\n')
        newLines.append('\t\t\t\"damageType\": \"\",\n')
        newLines.append('\t\t\t\"attackType\": \"\",\n')
        newLines.append('\t\t\t\"attunement\": \"' + attunement + '\",\n')
        newLines.append('\t\t\t\"changes\": \"\"\n')
        newLines.append('\t\t}\n')
        newLines.append('\t},\n')

for line in newLines:
    f.write(line)
f.close()

#       "model": "accounts.Items",
# 		"pk": 376,
# 		"fields": {
# 			"itemNum": 376,
# 			"itemName": "Shortsword",
# 			"weight": "2 lbs",
# 			"cost": "10 gp",
# 			"description": "Proficiency with a shortsword allows you to add your proficiency bonus to the attack roll for any attack you make with it.",
# 			"tags": "Combat, Damage",
# 			"properties": "Finesse, Light",
# 			"itemType": "Martial Melee Weapon",
# 			"range": "",
# 			"damage": "1d6 Piercing",
# 			"damageType": "Piercing",
# 			"attackType": "Melee",
# 			"attunement": "False",
# 			"changes": ""
# 		}