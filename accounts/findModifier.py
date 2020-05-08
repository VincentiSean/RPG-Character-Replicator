def getModifier(baseNum):
    modifier = 0

    if (baseNum == 1):
        modifier = -5
    elif (baseNum == 2 or baseNum == 3):
        modifier = -4
    elif (baseNum == 4 or baseNum == 5):
        modifier = -3
    elif (baseNum == 6 or baseNum == 7):
        modifier = -2
    elif (baseNum == 8 or baseNum == 9):
        modifier = -1
    elif (baseNum == 10 or baseNum == 11):
        modifier = +0
    elif (baseNum == 12 or baseNum == 13):
        modifier = +1
    elif (baseNum == 14 or baseNum == 15):
        modifier = +2
    elif (baseNum == 16 or baseNum == 17):
        modifier = +3
    elif (baseNum == 18 or baseNum == 19):
        modifier = +4
    elif (baseNum == 20 or baseNum == 21):
        modifier = +5
    elif (baseNum == 22 or baseNum == 23):
        modifier = +6
    elif (baseNum == 24 or baseNum == 25):
        modifier = +7
    elif (baseNum == 26 or baseNum == 27):
        modifier = +8
    elif (baseNum == 28 or baseNum == 29):
        modifier = +9
    elif (baseNum == 30):
        modifier = +10
    else:
        modifier = +0

    return modifier