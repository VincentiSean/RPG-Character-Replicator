def getSorcSpellAmt(sorcLvl) :
    sorcererSpells = []

    if (sorcLvl == 2):
        sorcererSpells.append(3)
        sorcererSpells.append(4)
        sorcererSpells.append(3)
    elif (sorcLvl == 3):
        sorcererSpells.append(4)
        sorcererSpells.append(4)
        sorcererSpells.append(4)
        sorcererSpells.append(2)
    elif (sorcLvl == 4):
        sorcererSpells.append(5)
        sorcererSpells.append(5)
        sorcererSpells.append(4)
        sorcererSpells.append(3)
    elif (sorcLvl == 5):
        sorcererSpells.append(6)
        sorcererSpells.append(5)
        sorcererSpells.append(4)
        sorcererSpells.append(3)
        sorcererSpells.append(2)
    elif (sorcLvl == 6):
        sorcererSpells.append(7)
        sorcererSpells.append(5)
        sorcererSpells.append(4)
        sorcererSpells.append(3)
        sorcererSpells.append(3)
    elif (sorcLvl == 7):
        sorcererSpells.append(8)
        sorcererSpells.append(5)
        sorcererSpells.append(4)
        sorcererSpells.append(3)
        sorcererSpells.append(3)
        sorcererSpells.append(1)
    elif (sorcLvl == 8):
        sorcererSpells.append(9)
        sorcererSpells.append(5)
        sorcererSpells.append(4)
        sorcererSpells.append(3)
        sorcererSpells.append(3)
        sorcererSpells.append(2)
    elif (sorcLvl == 9):
        sorcererSpells.append(10)
        sorcererSpells.append(5)
        sorcererSpells.append(4)
        sorcererSpells.append(3)
        sorcererSpells.append(3)
        sorcererSpells.append(3)
        sorcererSpells.append(1)
    elif (sorcLvl == 10):
        sorcererSpells.append(11)
        sorcererSpells.append(6)
        sorcererSpells.append(4)
        sorcererSpells.append(3)
        sorcererSpells.append(3)
        sorcererSpells.append(3)
        sorcererSpells.append(2)
    elif (sorcLvl == 11):
        sorcererSpells.append(12)
        sorcererSpells.append(6)
        sorcererSpells.append(4)
        sorcererSpells.append(3)
        sorcererSpells.append(3)
        sorcererSpells.append(3)
        sorcererSpells.append(2)
        sorcererSpells.append(1)
    elif (sorcLvl == 13):
        sorcererSpells.append(13)
        sorcererSpells.append(6)
        sorcererSpells.append(4)
        sorcererSpells.append(3)
        sorcererSpells.append(3)
        sorcererSpells.append(3)
        sorcererSpells.append(2)
        sorcererSpells.append(1)
        sorcererSpells.append(1)
    elif (sorcLvl == 15):
        sorcererSpells.append(14)
        sorcererSpells.append(6)
        sorcererSpells.append(4)
        sorcererSpells.append(3)
        sorcererSpells.append(3)
        sorcererSpells.append(3)
        sorcererSpells.append(2)
        sorcererSpells.append(1)
        sorcererSpells.append(1)
        sorcererSpells.append(1)
    elif (sorcLvl == 17):
        sorcererSpells.append(15)
        sorcererSpells.append(6)
        sorcererSpells.append(4)
        sorcererSpells.append(3)
        sorcererSpells.append(3)
        sorcererSpells.append(3)
        sorcererSpells.append(2)
        sorcererSpells.append(1)
        sorcererSpells.append(1)
        sorcererSpells.append(1)
        sorcererSpells.append(1)
    elif (sorcLvl == 18):
        sorcererSpells.append(15)
        sorcererSpells.append(6)
        sorcererSpells.append(4)
        sorcererSpells.append(3)
        sorcererSpells.append(3)
        sorcererSpells.append(3)
        sorcererSpells.append(3)
        sorcererSpells.append(1)
        sorcererSpells.append(1)
        sorcererSpells.append(1)
        sorcererSpells.append(1)
    elif (sorcLvl == 19):
        sorcererSpells.append(15)
        sorcererSpells.append(6)
        sorcererSpells.append(4)
        sorcererSpells.append(3)
        sorcererSpells.append(3)
        sorcererSpells.append(3)
        sorcererSpells.append(3)
        sorcererSpells.append(2)
        sorcererSpells.append(1)
        sorcererSpells.append(1)
        sorcererSpells.append(1)
    elif (sorcLvl == 20):
        sorcererSpells.append(15)            
        sorcererSpells.append(6)
        sorcererSpells.append(4)
        sorcererSpells.append(3)
        sorcererSpells.append(3)
        sorcererSpells.append(3)
        sorcererSpells.append(3)
        sorcererSpells.append(2)
        sorcererSpells.append(2)
        sorcererSpells.append(1)
        sorcererSpells.append(1)
    else:
        sorcererSpells.append(2)
        sorcererSpells.append(4)
        sorcererSpells.append(2)

    return sorcererSpells