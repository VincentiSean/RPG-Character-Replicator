# This script grabs the regular items from https://5e.tools/items.html

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import sys

# SET DRIVER TO FIREFOX AND GO TO THE WEBSITE
driver = webdriver.Chrome(executable_path=r"D:\\Program Files (x86)\\ChromeDriver\\chromedriver.exe")

# Open the file to store item information in json format
f = open('../fixtures/comepleteItemsRedo.json', 'w')
f.write('[\n')

sitePath = 'https://5e.tools/items.html'

driver.get(sitePath)

# Wait until page is properly loaded
try: 
    element = WebDriverWait(driver, 10).until(
                    lambda x: x.find_element_by_xpath('//*[@id="listcontainer"]/ul[1]/li'))
    itemsFound = driver.find_elements_by_xpath('//*[@id="listcontainer"]/ul[1]/li')
except:
    print("Unexpected error:", sys.exc_info())

# Go through each item, click on it, and get the full information
for x in range(len(itemsFound)):
    clickButton = itemsFound[x].click()
    itemNum = x
    
    # Item name
    itemName = driver.find_element_by_xpath('//*[@id="pagecontent"]/tr[2]/th/div/div/span').text
    
    # Cost and  Weight
    cost = '--'
    weight = '--'
    try:
        fullCostWeight = driver.find_element_by_xpath('//*[@id="pagecontent"]/tr[4]/td[1]').text

        fullCostWeightList = fullCostWeight.split(', ')
        if (len(fullCostWeightList) > 1):
            cost = fullCostWeightList[0]
            weight = fullCostWeightList[1]
        elif (fullCostWeightList[0].find('p') != -1):
            cost = fullCostWeightList[0]
            weight = '--'
        else:
            cost = '--'
            weight = fullCostWeightList[0]
    except:
        print("Unexpected error; Error 1:", sys.exc_info())

    # Description
    description = ''
    try:
        itemAllDescription = driver.find_elements_by_xpath('//*[@id="pagecontent"]/tr[6]/td/div/*')
        descriptionList = []
        for info in itemAllDescription:
            newInfo = info.text.replace('⅕', '1/5')
            descriptionList.append(newInfo.replace('\n', '\\n\\n'))

        description = ''.join(descriptionList)

    except:
        print("Unexpected error; Error 2:", sys.exc_info())

    # Item type/Tags
    itemType = ''
    tags = ''
    attacks = []
    try:
        itemType = driver.find_element_by_xpath('//*[@id="pagecontent"]/tr[3]/td').text
        tags = itemType

        if (itemType.find('melee') != -1):
            attacks.append('Melee')
        if (itemType.find('ranged') != -1):
            attacks.append('Ranged')
    except:
        print("Unexpected error; Error 3:", sys.exc_info())

    # A lot of the rest of the information
    properties = ''
    itemRange = ''
    damage = ''
    damageType = ''
    try:
        # If there is a roll for the weapon damage/if it's a weapon
        try:
            bulkInfo = driver.find_element_by_xpath('//*[@id="pagecontent"]/tr[4]/td[2]').text

            otherInfo = []
            if (bulkInfo.find('-') != -1):
                otherInfo = bulkInfo.split(' - ')
                damage = otherInfo[0].split(' ')[0]
                damageType = otherInfo[0].split(' ')[1]
                damageType = damageType.capitalize()
                damage = damage + ' ' + damageType
            else:
                otherInfo[0] = ''
                otherInfo[1] = bulkInfo

            restInfo = otherInfo[1]
            lastInfo = restInfo.split(',')

            propertyList = []
            if (len(lastInfo) == 1):
                print(itemName + ': 1')
                properties = lastInfo[0].capitalize()
            elif ((len(lastInfo) == 2) and lastInfo[0].find('ammunition') == -1):
                print(itemName + ': 2')
                propertyList.append(lastInfo[0].capitalize())
                propertyList.append(', ' + lastInfo[1].capitalize())
                
                properties = ''.join(propertyList)
            elif (len(lastInfo) >= 2):
                print(itemName + ': 3')

                for info in lastInfo:
                    if (info.find('thrown') != -1):
                        itemRange = info.strip('thrown ()')
                    elif (info.find('ammunition') != -1):
                        itemRange = info.strip('ammunition ()')
                    
                    propertie = info.strip(' ').capitalize()
                    print(propertie)
                    propertyList.append(propertie + ', ')
                
                properties = ''.join(propertyList)

        except:
            print("Unexpected error; Error 5:", sys.exc_info())

            properties = driver.find_element_by_xpath('//*[@id="pagecontent"]/tr[4]/td[2]').text
    
    except:
        print("Unexpected error; Error 4:", sys.exc_info())

    # Write the item information to the file
    pkString = '\t\t"pk\": {},\n'.format(itemNum)
    itemNumString = '\t\t\t\"itemNum\": {},\n'.format(itemNum)
    attackType = ''.join(attacks)

    f.write(',\n\t{\n')
    f.write('\t\t\"model\": \"accounts.Items\",\n')
    f.write(pkString)
    f.write('\t\t\"fields\": {\n')
    f.write(itemNumString)
    f.write('\t\t\t\"itemName\": \"' + itemName + '\",\n')
    f.write('\t\t\t\"weight\": \"' + weight + '\",\n')
    f.write('\t\t\t\"cost\": \"' + cost + '\",\n')
    f.write('\t\t\t\"description\": \"' + description + '\",\n')
    f.write('\t\t\t\"tags\": \"' + tags + '\",\n')
    f.write('\t\t\t\"properties\": \"' + properties +'\",\n')
    f.write('\t\t\t\"itemType\": \"' + itemType + '\",\n')
    f.write('\t\t\t\"range\": \"' + itemRange +'\",\n')
    f.write('\t\t\t\"damage\": \"' + damage + '\",\n')
    f.write('\t\t\t\"damageType\": \"' + damageType + '\",\n')
    f.write('\t\t\t\"attackType\": \"' + attackType + '\",\n')
    f.write('\t\t\t\"attunement\": \"False\",\n')
    f.write('\t\t\t\"changes\": \"\"\n')
    f.write('\t\t}\n\t}')

f.write('\n]')
f.close() 