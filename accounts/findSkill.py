def findSkill(proficient, proficiencyBonus, modifier):
    skillNum = 0

    if (proficient):
        skillNum = proficiencyBonus + modifier
    else:
        skillNum = modifier

    return skillNum