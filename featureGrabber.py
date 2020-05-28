from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import sys

# SET DRIVER TO FIREFOX AND GO TO THE WEBSITE
driver = webdriver.Chrome(executable_path=r"D:\\Program Files (x86)\\ChromeDriver\\chromedriver.exe")
driver.get("https://5e.tools/feats.html#aberrant%20dragonmark_erlw")

# TRY AND FILTER FEATS TO GET A FULL LIST OF FEATS(MINUS A FEW UNWANTED ONES)
try:
    element = WebDriverWait(driver, 10).until(
                    lambda x: x.find_element_by_xpath('//*[@id="listcontainer"]/ul/li[1]'))
    filterButtons = driver.find_element_by_xpath('//*[@id="filter-search-input-group"]')
    filterButton = filterButtons.find_element_by_xpath('button[1]')
    filterButton.click() 
    
    # Click all the appropriate filters
    element = driver.find_element_by_class_name('fltr__pill')
    WebDriverWait(driver, 10).until(EC.visibility_of(element))
    nextFilter = driver.find_elements_by_class_name('fltr__pill')
    
    for x in range(7, 12): 
        nextFilter[x].click()
    
    saveButton = driver.find_elements_by_class_name('fltr__btn-close')
    # Javascript handles the clicking because the Selenium refused to do so...
    driver.execute_script("arguments[0].click();", saveButton[0])
    #saveButton[0].click()
except:
    print("Unexpected error:", sys.exc_info()[0])

try:
    element = WebDriverWait(driver, 10).until(
                    lambda x: x.find_element_by_xpath('//*[@id="listcontainer"]/ul/li[1]'))
    numFeats = len(driver.find_elements_by_xpath('//*[@id="listcontainer"]/ul/li'))
    print(numFeats)
    
    # Find all of the Features
    buttons = driver.find_elements_by_xpath('//*[@id="listcontainer"]/ul/li')
    
    # Set up the start of the JSON file
    f = open('../fixtures/completeFeatures.json', 'w')
    f.write('[\n')

    # Loop through all of the features
    featNum = 0
    for button in buttons:
        featNum += 1
        clicky = button.find_element_by_xpath('a/span[1]')
        clicky.click()

        # Get the Feature name
        featName = driver.find_element_by_xpath('//*[@id="pagecontent"]/tr[2]/th/div/div/span').text

        # Get the source book and pages
        sourceBook = driver.find_element_by_xpath('//*[@id="pagecontent"]/tr[2]/th/div/span/span[1]').text
        sourcePage = driver.find_element_by_xpath('//*[@id="pagecontent"]/tr[2]/th/div/span/span[2]').text
        sourceFull = sourceBook + ' ' + sourcePage

        # Check for prereqs
        prereqs = ''
        try:
            prereqs = driver.find_element_by_xpath('//*[@id="pagecontent"]/tr[3]/td/span').text
        except:
            print(prereqs)

        # Get the description
        descriptionContainer = button.find_elements_by_class_name('rd__b  rd__b--3')
        description = driver.find_elements_by_css_selector('#pagecontent > tr.text > td > div > *')
        descriptionList = []
        for item in description:
            newItem = item.text
            descriptionList.append(newItem.replace('\n', '\\n'))
        featDescription = ''.join(descriptionList)
        

        # Set up the file for each Feature
        pkString = '\t\t"pk\": {},\n'.format(featNum)
        featNumString = '\t\t\t\"featNum\": {},\n'.format(featNum)

        f.write(',\n\t{\n')
        f.write('\t\t\"model\": \"accounts.Features\",\n')
        f.write(pkString)
        f.write('\t\t\"fields\": {\n')
        f.write(featNumString)
        f.write('\t\t\t\"featureName\": \"' + featName + '\",\n')
        f.write('\t\t\t\"source\": \"' + sourceFull + '\",\n')
        f.write('\t\t\t\"prereq\": \"' + prereqs + '\",\n')
        f.write('\t\t\t\"description\": \"' + featDescription + '\"\n')
        f.write('\t\t}\n')
        f.write('\t}')

    f.write('\n]')
    f.close()
except:
    print("Unexpected error:", sys.exc_info())




