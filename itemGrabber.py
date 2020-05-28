# This program gets most of the item information from DNDBeyond.com (regular items). 
# Some information needs to be added manually if the item is a weapon
### **** If this script is ran more than 3 or 4 times, the site locksdown and must prove you are not a robot ****###

# 
#   A NEW SCRIPT WAS WRITTEN FOR A DIFFERENT WEBSITE FOR A FULLER ITEM LIST
#

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import sys

itemNum = 0

# SET DRIVER TO FIREFOX AND GO TO THE WEBSITE
driver = webdriver.Chrome(executable_path=r"D:\\Program Files (x86)\\ChromeDriver\\chromedriver.exe")

# Open the file to store item information in json format
f = open('../fixtures/comepleteItems.json', 'w')
f.write('[\n')

for x in range(1, 14):
    if x == 1:
        sitePath = 'https://www.dndbeyond.com/equipment'
    else:
        sitePath = 'https://www.dndbeyond.com/equipment?page={}'.format(x)

    driver.get(sitePath)

    # Wait until page is properly loaded
    numItems = 0
    try: 
        element = WebDriverWait(driver, 10).until(
                        lambda x: x.find_element_by_xpath('//*[@id="content"]/section/div/div/div/div[2]/ul/li[1]'))
        itemList = driver.find_elements_by_xpath('//*[@id="content"]/section/div/div/div/div[2]/ul/li/div')
        
    except:
        print("Unexpected error:", sys.exc_info())

    try:
        # Loop through all items on the page and click on each on for full description
        count = 0
        for item in itemList:
            count += 1
            #itemDiv = item.find_element_by_xpath('div')
            item.click()

            itemNum += 1
            # Get item name
            itemName = item.find_element_by_xpath('div[2]/div/div[1]/div/a').text
            
            # Get item type
            itemType = item.find_element_by_xpath('div[2]/div/div[2]/div').text

            # Get cost
            cost = item.find_element_by_xpath('div[3]/div/div/div').text

            # Get weight
            weight = item.find_element_by_xpath('div[4]/div/div/div').text

            # Get damage
            damageType = item.find_element_by_xpath('div[5]/div/div/div').text

            # Get tags
            tags = item.find_element_by_xpath('div[6]/div/div/div').text

            # Change itemDiv to next div for more information about the item
            path = '//*[@id="content"]/section/div/div/div/div[2]/ul/li[{}]/div[2]'.format(count)
            itemDiv = driver.find_element_by_xpath(path)

            # Get item description
            description = itemDiv.find_element_by_xpath('div[1]/div/p').text


            pkString = '\t\t"pk\": {},\n'.format(itemNum)
            itemNumString = '\t\t\t\"itemNum\": {},\n'.format(itemNum)

            # Write information in the file
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
            f.write('\t\t\t\"properties\": \"\",\n')
            f.write('\t\t\t\"itemType\": \"' + itemType + '\",\n')
            f.write('\t\t\t\"range\": \"\",\n')
            f.write('\t\t\t\"damage\": \"\",\n')
            f.write('\t\t\t\"damageType\": \"' + damageType + '\",\n')
            f.write('\t\t\t\"attackType\": \"\",\n')
            f.write('\t\t\t\"attunement\": \"False\",\n')
            f.write('\t\t\t\"changes\": \"\"\n')
            f.write('\t\t}\n\t}')

    except:
        print("Unexpected error:", sys.exc_info())

f.write('\n]')
f.close()