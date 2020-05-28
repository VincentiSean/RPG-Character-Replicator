# import requests
# from bs4 import BeautifulSoup

# URL = 'https://donjon.bin.sh/5e/spells/'
# page = requests.get(URL)

# soup = BeautifulSoup(page.content, 'html5lib')

# spells = soup.find_all('tr')
# print(spells)

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# SET DRIVER TO FIREFOX AND GO TO THE WEBSITE
driver = webdriver.Firefox()
driver.get("https://donjon.bin.sh/5e/spells")

# TRY AND GET THE PROPER ELEMENTS FOR THE SPELLS AND POPULATE THE JSON FILE 
try:
    element = driver.find_element_by_xpath('//*[@id="spell_sheet"]/tr[1]')
    WebDriverWait(driver, 10).until(EC.visibility_of(element))
    sortButton = driver.find_element_by_xpath('/html/body/div[2]/div[2]/table/thead/tr/th[1]/span')
    sortButton.click()
    
    numSpells = len(driver.find_elements_by_xpath('//*[@id="spell_sheet"]/tr'))
    
    # Loop through all of the spells clicking each one to get full info
    f = open("../static/json/completeSpells.json", "w")
    f.write("[\n")
    for x in range(numSpells + 1):
        print(x)
        if x != 0:
            path = '//*[@id="spell_sheet"]/tr[{}]/td[1]'.format(x)
            spell = driver.find_element_by_xpath(path)
            spell.click()
            # Get the spell information
            try:
                element = WebDriverWait(driver, 10).until(
                    lambda x: x.find_element_by_xpath('//*[@id="pop_card"]/div/h2'))
                spellName = driver.find_element_by_xpath('//*[@id="pop_card"]/div/h2').text
                levelSchoolClass = driver.find_element_by_xpath('//*[@id="pop_card"]/div/p[1]').text
                rawCasting = driver.find_element_by_xpath('//*[@id="pop_card"]/div/p[2]').text
                rawSpellRange = driver.find_element_by_xpath('//*[@id="pop_card"]/div/p[3]').text
                rawComponents = driver.find_element_by_xpath('//*[@id="pop_card"]/div/p[4]').text
                rawDuration = driver.find_element_by_xpath('//*[@id="pop_card"]/div/p[5]').text
                source = driver.find_element_by_xpath('//*[@class="source"]').text

                levelSchool = levelSchoolClass.split('   ')[0].split(' ')
                if levelSchool[1] == 'Cantrip':
                    level = levelSchool[1]
                    school  = levelSchool[0]
                else:
                    level = levelSchool[0]
                    school = levelSchool[1]
                classes = levelSchoolClass.split('   ')[1].strip('()')
                castTime = rawCasting.split(': ')[1]
                spellRange = rawSpellRange.split(': ')[1]
                components = rawComponents.split(': ')[1]
                duration = rawDuration.split(': ')[1]
                description = ''
                try:
                    rawDescription = driver.find_elements_by_xpath('//*[@id="pop_card"]/div/div/p')
                    for item in rawDescription:
                        description += item.text
                        description += '\n'
                except:
                    description = "Error!!"

                f.write("{\n\t\"spellName\": \"" + spellName + "\",\n")
                f.write("\t\"level\": \"" + level + "\",\n")
                f.write("\t\"school\": \"" + school + "\",\n")
                f.write("\t\"castTime\": \"" + castTime + "\",\n")
                f.write("\t\"duration\": \"" + duration + "\",\n")
                f.write("\t\"spellRange\": \"" + spellRange + "\",\n")
                f.write("\t\"components\": \"" + components + "\",\n")
                f.write("\t\"description\": \"" + description + "\",\n")
                f.write("\t\"classes\": \"" + classes + "\",\n")
                f.write("\t\"source\": \"" + source + "\",\n")
                f.write("},\n")
            except:
                print("Not found")

            driver.find_element_by_xpath("//html").click()
    f.write('\n]')
    f.close()
except:
    element = None



