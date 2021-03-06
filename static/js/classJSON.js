var classData = {
        "classes" : [
                {
                    "class": "Barbarian",
                    "classDescription": "A fierce warrior of primitive background who can enter a battle rage.",
                    "primaryStat": "Strength",
                    "saves": "Strength & Constitution",
                    "spellCastingAbility": "",
                    "hitPoints": {
                        "hitDice": "1d12 per barbarian level",
                        "hitPointHidden": "12",
                        "hitPointsStart": "12 + your Constitution modifier",
                        "hitPointsHigh": "1d12 (or 7) + your Constitution modifier per barbarian level after 1st"
                    },
                    "proficiencies": {
                        "armor": "Light armor, medium armor, shields",
                        "weapons": "Simple weapons, martial weapons",
                        "tools": "None",
                        "savingThrows": "Strength, Constitution",
                        "skills": "Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival",
                        "numSkills": "2",
                        "skillsList": "Animal Handling;Athletics;Intimidation;Nature;Perception;Survival"
                    },
                    "classAbilities": [
                        {
                            "name": "Rage",
                            "level": "1st level",
                            "description": "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.\nWhile raging, you gain the following benefits if you aren’t wearing heavy armor:\nYou have advantage on Strength checks and Strength saving throws.\nWhen you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table.\nYou have resistance to bludgeoning, piercing, and slashing damage.\n\nIf you are able to cast spells, you can’t cast them or concentrate on them while raging.\n\nYour rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.\nOnce you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again."
                        },
                        {
                            "name": "Unarmored Defense",
                            "level": "1st level",
                            "description": "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit."
                        },
                        {
                            "name": "Relentless Attack",
                            "level": "2nd level",
                            "description": "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn."
                        },
                        {
                            "name": "Danger Sense",
                            "level": "2nd level",
                            "description": "At 2nd level, you gain an uncanny sense of when things nearby aren’t as they should be, giving you an edge when you dodge away from danger.\nYou have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can’t be blinded, deafened, or incapacitated."
                        },
                        {
                            "name": "Primal Path",
                            "level": "3rd level",
                            "description": "At 3rd level, you choose a path that shapes the nature of your rage. The Path of the Berserker is detailed at the end of the class description, and additional primal paths are available in other sources. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels."
                        },
                        {
                            "name": "Ability Score Improvement",
                            "level": "4th, 8th, 12th, 16th, 19th levels",
                            "description": "You can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.Using the optional feats rule, you can forgo taking this feature to take a feat of your choice instead."
                        },
                        {
                            "name": "Extra Attack",
                            "level": "5th level",
                            "description": "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
                        },
                        {
                            "name": "Fast Movement",
                            "level": "5th level",
                            "description": "Starting at 5th level, your speed increases by 10 feet while you aren’t wearing heavy armor."
                        },
                        {
                            "name": "Feral Instinct",
                            "level": "7th level",
                            "description": "By 7th level, your instincts are so honed that you have advantage on initiative rolls.\nAdditionally, if you are surprised at the beginning of combat and aren’t incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn."
                        },
                        {
                            "name": "Brutal Critical",
                            "level": "9th, 13th, 17th levels",
                            "description": "Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.\nThis increases to two additional dice at 13th level and three additional dice at 17th level."
                        },
                        {
                            "name": "Relentless Rage",
                            "level": "11th level",
                            "description": "Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you’re raging and don’t die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.\nEach time you use this feature after the first, the C increases by 5. When you finish a short or long rest, the DC resets to 10."
                        },
                        {
                            "name": "Persistent Rage",
                            "level": "15th level",
                            "description": "Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it."
                        },
                        {
                            "name": "Indomitable Might",
                            "level": "18th level",
                            "description": "Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total."
                        },
                        {
                            "name": "Primal Champion",
                            "level": "20th level",
                            "description": "At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24."
                        }
                    ]
                },
                {
                    "class": "Bard",
                    "classDescription": "An inspiring magician whose power echoes the music of creation",
                    "primaryStat": "Charisma",
                    "saves": "Dexterity & Charisma",
                    "spellCastingAbility": "Charisma",
                    "hitPoints": {
                        "hitDice": "1d8 per bard level",
                        "hitPointHidden": "8",
                        "hitPointsStart": "8 + your Constitution modifier",
                        "hitPointsHigh": "1d8 (or 5) + your Constitution modifier per bard level after 1st"
                    },
                    "proficiencies": {
                        "armor": "Light armor",
                        "weapons": "Simple weapons, hand crossbows, longswords, rapiers, shortswords",
                        "tools": "Three musical instruments of your choice",
                        "savingThrows": "Dexterity, Charisma",
                        "skills": "Choose any three",
                        "numSkills": "3",
                        "skillsList": "Acrobatics;Animal Handling;Arcana;Athletics;Deception;History;Insight;Intimidation;Investigation;Medicine;Nature;Perception;Performance;Persuasion;Religion;Sleight of Hand;Stealth;Survival"
                    },
                    "classAbilities": [
                        {
                            "name": "Spellcasting",
                            "level": "1st level",
                            "description": "You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations. See Spells Rules for the general rules of spellcasting and the Spells Listing for the bard spell list.\nCantrips\nYou know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Bard table.\nSpell Slots\nThe Bard table shows how many spell slots you have to cast your bard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.\nFor example, if you know the 1st-level spell cure wounds and have a 1st-level and a 2nd-level spell slot available, you can cast cure wounds using either slot.\nSpells Known of 1st Level and Higher\nYou know four 1st-level spells of your choice from the bard spell list.\nThe Spells Known column of the Bard table shows when you learn more bard spells of your choice. Each of these spells must be of a level for which you have spell slots, as shown on the table. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.\nAdditionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots.\nSpellcasting Ability\nCharisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.                          \nSpell save DC = 8 + your proficiency bonus + your Charisma modifier\nSpell attack modifier = your proficiency bonus + your Charisma modifier\nRitual Casting\nYou can cast any bard spell you know as a ritual if that spell has the ritual tag. \nSpellcasting Focus\nYou can use a musical instrument (see the Tools section) as a spellcasting focus for your bard spells."
                        },
                        {
                            "name": "Bardic Inspiration",
                            "level": "1st level",
                            "description": "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.\nOnce within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.\nYou can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.\nYour Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
                        },
                        {
                            "name": "Jack of All Trades",
                            "level": "2nd level",
                            "description": "Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn’t already include your proficiency bonus."
                        },
                        {
                            "name": "Song of Rest",
                            "level": "2nd, 9th, 13th, 17th levels",
                            "description": "Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points.\nThe extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
                        },
                        {
                            "name": "Bard College",
                            "level": "3rd level",
                            "description": "At 3rd level, you delve into the advanced techniques of a bard college of your choice: the College of Lore detailed at the end of the class description or another from the Player's Handbook or other sources. Your choice grants you features at 3rd level and again at 6th and 14th level."
                        },
                        {
                            "name": "Expertise",
                            "level": "3rd, 10th levels",
                            "description": "At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies."
                        },
                        {
                            "name": "Ability Score Improvement",
                            "level": "4th, 8th, 12th, 16th, 19th levels",
                            "description": "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.\nUsing the optional feats rule, you can forgo taking this feature to take a feat of your choice instead."
                        },
                        {
                            "name": "Font of Inspiration",
                            "level": "5th level",
                            "description": "Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest."
                        },
                        {
                            "name": "Countercharm",
                            "level": "6th level",
                            "description": "At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required)."
                        },
                        {
                            "name": "Magical Secrets",
                            "level": "10th, 14th, 18th levels",
                            "description": "By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.\nThe chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.\nYou learn two additional spells from any classes at 14th level and again at 18th level."
                        },
                        {
                            "name": "Superior Inspiration",
                            "level": "20th level",
                            "description": "At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use."
                        }
                    ]
                },
                {
                    "class": "Cleric",
                    "classDescription": "A priestly champion who wields divine magic in service of a higher power",
                    "primaryStat": "Wisdom",
                    "saves": "Wisdom & Charisma",
                    "spellCastingAbility": "Wisdom",
                    "hitPoints": {
                        "hitDice": "1d8 per cleric level",
                        "hitPointHidden": "8",
                        "hitPointsStart": "8 + your Constitution modifier",
                        "hitPointsHigh": "1d8 (or 5) + your Constitution modifier per cleric level after 1st"
                    },
                    "proficiencies": {
                        "armor": "Light armor, medium armor, shields",
                        "weapons": "Simple weapons",
                        "tools": "None",
                        "savingThrows": "Wisdom, Charisma",
                        "skills": "Choose two from History, Insight, Medicine, Persuasion, and Religion",
                        "numSkills": "2",
                        "skillsList": "History;Insight;Medicine;Persuasion;Religion"
                    },
                    "classAbilities": [
                        {
                            "name": "Spellcasting",
                            "level": "1st level",
                            "description": "As a conduit for divine power, you can cast cleric spells. See Spells Rules for the general rules of spellcasting and the Spells Listing for the cleric spell list.\nCantrips\nAt 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table.\nPreparing and Casting Spells\nThe Cleric table shows how many spell slots you have to cast your cleric spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.\nYou prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots.\nFor example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn’t remove it from your list of prepared spells.\nYou can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.\nSpellcasting Ability\nWisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.\nSpell save DC = 8 + your proficiency bonus + your Wisdom modifier\nSpell attack modifier = your proficiency bonus + your Wisdom modifier\nRitual Casting\nYou can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared.\nSpellcasting Focus\nYou can use a holy symbol (see the Adventuring Gear section) as a spellcasting focus for your cleric spells."
                        },
                        {
                            "name": "Divine Domain",
                            "level": "1st level",
                            "description": "Choose one domain related to your deity: Knowledge, Life, Light, Nature, Tempest, Trickery, or War. The Life domain is detailed at the end of the class description and provides examples of gods associated with it. See the Player’s Handbook for details on all the domains.Your choice grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.\nDomain Spells\nEach domain has a list of spells — its domain spells — that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day.\nIf you have a domain spell that doesn’t appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
                        },
                        {
                            "name": "Channel Divinity",
                            "level": "2nd level",
                            "description": "At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.\nWhen you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.\nSome Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.\nBeginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.\nChannel Divinity: Turn Undead\nAs an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.\nA turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action."
                        },
                        {
                            "name": "Ability Score Improvement",
                            "level": "4th, 8th, 12th, 16th, 19th levels",
                            "description": "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.\nUsing the optional feats rule, you can forgo taking this feature to take a feat of your choice instead."
                        },
                        {
                            "name": "Destroy Undead",
                            "level": "5th level",
                            "description": "Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold, as shown in the Destroy Undead table.\nDestroy Undead Table\nCleric Level\nDestroys Undead of CR ...\n5th\n1/2 or lower\n8th\n1 or lower\n11th\n2 or lower\n14th\n3 or lower\n17th\n4 or lower"
                        },
                        {
                            "name": "Divine Intervention",
                            "level": "10th level",
                            "description": "Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.\nImploring your deity’s aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The DM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate.\nIf your deity intervenes, you can’t use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.\nAt 20th level, your call for intervention succeeds automatically, no roll required."
                        }
                    ]
                },
                {
                    "class": "Druid",
                    "classDescription": "A priest of the Old Faith, wielding the powers of nature and adopting animal forms",
                    "primaryStat": "Wisdom",
                    "saves": "Intelligence & Wisdom",
                    "spellCastingAbility": "Wisdom",
                    "hitPoints": {
                        "hitDice": "1d8 per druid level",
                        "hitPointHidden": "8",
                        "hitPointsStart": "8 + your Constitution modifier",
                        "hitPointsHigh": "1d8 (or 5) + your Constitution modifier per druid level after 1st"
                    },
                    "proficiencies": {
                        "armor": "Light armor, medium armor, shields (druids will not wear armor or use shields made of metal)",
                        "weapons": "Clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears",
                        "tools": "Herbalism kit",
                        "savingThrows": "Intelligence, Wisdom",
                        "skills": "Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival",
                        "numSkills": "2",
                        "skillsList": "Animal Handling;Insight;Medicine;Perception;Religion;Survival"
                    },
                    "classAbilities": [
                        {
                            "name": "Druidic",
                            "level": "1st level",
                            "description": "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message’s presence with a successful DC 15 Wisdom (Perception) check but can’t decipher it without magic."
                        },
                        {
                            "name": "Spellcasting",
                            "level": "1st level",
                            "description": "Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will. See Spells Rules for the general rules of spellcasting and the Spells Listing for the druid spell list.\nCantrips\nAt 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table.\nPreparing and Casting Spells\nThe Druid table shows how many spell slots you have to cast your druid spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.\nYou prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level (minimum of one spell). The spells must be of a level for which you have spell slots.\nFor example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn’t remove it from your list of prepared spells.\nYou can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.\nSpellcasting Ability\nWisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.\nSpell save DC = 8 + your proficiency bonus + your Wisdom modifier\nSpell attack modifier = your proficiency bonus + your Wisdom modifier\nRitual Casting\nYou can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.\nSpellcasting Focus\nYou can use a druidic focus (see the Adventuring Gear section) as a spellcasting focus for your druid spells."
                        },
                        {
                            "name": "Wild Shape",
                            "level": "2nd level",
                            "description": "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.\nYour druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn’t have a flying or swimming speed.\nBeast Shapes\nLevel\tMax CR\tLimitations\tExample\n2nd\t1/4\tNo flying or swimming speed\tWolf\n4th\t1/2\tNo flying speed\tCrocodile\n8th\t1\t—\tGiant eagle\nYou can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.\nWhile you are transformed, the following rules apply:\nYour game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature’s bonus instead of yours. If the creature has any legendary or lair actions, you can’t use them.\nWhen you transform, you assume the beast’s hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn’t reduce your normal form to 0 hit points, you aren’t knocked unconscious.\nYou can’t cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn’t break your concentration on a spell you’ve already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you’ve already cast.\nYou retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can’t use any of your special senses, such as darkvision, unless your new form also has that sense.\nYou choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the DM decides whether it is practical for the new form to wear a piece of equipment, based on the creature’s shape and size. Your equipment doesn’t change size or shape to match the new form, and any equipment that the new form can’t wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
                        
                        },
                        {
                            "name": "Druidic Circle",
                            "level": "2nd level",
                            "description": "At 2nd level, you choose to identify with a circle of druids: the Circle of the Land detailed at the end of the class description or one from the Player's Handbook or other sources. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
                        },
                        {
                            "name": "Wild Shape Improvement",
                            "level": "4th level",
                            "description": "At 4th level, you can use your action to magically assume the shape of a beast that you have seen before of challenge rating 1/2 or lower that doesn't have a flying speed. You can use this feature twice. You regain expended uses when you finish a short or long rest."
                        },
                        {
                            "name": "Ability Score Improvement",
                            "level": "4th, 8th, 12th, 16th, 19th levels",
                            "description": "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.\nUsing the optional feats rule, you can forgo taking this feature to take a feat of your choice instead."
                        },
                        {
                            "name": "Wild Shape Improvement",
                            "level": "8th level",
                            "description": "At 8th level, you can use your action to magically assume the shape of a beast that you have seen before of challenge rating 1 or lower. You can use this feature twice. You regain expended uses when you finish a short or long rest."
                        },
                        {
                            "name": "Timeless Body",
                            "level": "18th level",
                            "description": "Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year."
                        },
                        {
                            "name": "Beast Spells",
                            "level": "18th level",
                            "description": "Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren’t able to provide material components."
                        },
                        {
                            "name": "Archdruid",
                            "level": "20th level",
                            "description": "At 20th level, you can use your Wild Shape an unlimited number of times.\nAdditionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren’t consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape."
                        }
                    ]
                },
                {
                    "class": "Fighter",
                    "classDescription": "A master of martial combat, skilled with a variety of weapons and armor",
                    "primaryStat": "Strength or Dexterity",
                    "saves": "Strength & Constitution",
                    "spellCastingAbility": "Intelligence",
                    "hitPoints": {
                        "hitDice": "1d10 per fighter level",
                        "hitPointHidden": "10",
                        "hitPointsStart": "10 + your Constitution modifier",
                        "hitPointsHigh": "1d10 (or 6) + your Constitution modifier per fighter level after 1st"
                    },
                    "proficiencies": {
                        "armor": "All armor, shields",
                        "weapons": "Simple weapons, martial weapons",
                        "tools": "None",
                        "savingThrows": "Strength, Constitution",
                        "skills": "Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival",
                        "numSkills": "2",
                        "skillsList": "Acrobatics;Animal Handling;Athletics;History;Insight;Intimidation;Perception;Survival"
                    },
                    "classAbilities": [
                        {
                            "name": "Fighting Style",
                            "level": "1st level",
                            "description": "You adopt a particular style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again."
                        },
                        {
                            "name": "Second Wind",
                            "level": "1st level",
                            "description": "You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again."
                        },
                        {
                            "name": "Action Surge",
                            "level": "2nd level",
                            "description": "Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action.\nOnce you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn."
                        },
                        {
                            "name": "Martial Archetype",
                            "level": "3rd level",
                            "description": "At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques. Choose Champion, Battle Master, or Eldritch Knight, all detailed at the end of the class description. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level."
                        },
                        {
                            "name": "Ability Score Improvement",
                            "level": "4th, 6th, 8th, 12th, 14th, 16th, 19th levels",
                            "description": "When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.\nUsing the optional feats rule, you can forgo taking this feature to take a feat of your choice instead."
                        },
                        {
                            "name": "Extra Attack",
                            "level": "5th level",
                            "description": "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.\nThe number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class."
                        },
                        {
                            "name": "Indomitable",
                            "level": "9th level",
                            "description": "Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can’t use this feature again until you finish a long rest.\nYou can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level."
                        },
                        {
                            "name": "Extra Attack",
                            "level": "11th level",
                            "description": "Beginning at 11th level, you can attack three times, instead of twice, whenever you take the Attack action on your turn.\nThe number of attacks increases to four when you reach 20th level in this class."
                        },
                        {
                            "name": "Extra Attack",
                            "level": "20th level",
                            "description": "At 20th level, you can attack four times, instead of three, whenever you take the Attack action on your turn."
                        }
                    ]
                },
                {
                    "class": "Monk",
                    "classDescription": "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection",
                    "primaryStat": "Dexterity & Wisdom",
                    "saves": "Strength & Dexterity",
                    "spellCastingAbility": "Wisdom",
                    "hitPoints": {
                        "hitDice": "1d8 per monk level",
                        "hitPointHidden": "8",
                        "hitPointsStart": "8 + your Constitution modifier",
                        "hitPointsHigh": "1d8 (or 5) + your Constitution modifier per monk level after 1st"
                    },
                    "proficiencies": {
                        "armor": "None",
                        "weapons": "Simple weapons, shortswords",
                        "tools": "Choose one type of artisan’s tools or one musical instrument",
                        "savingThrows": "Strength, Dexterity",
                        "skills": "Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth",
                        "numSkills": "2",
                        "skillsList": "Acrobatics;Athletics;History;Insight;Religion;Stealth"
                    },
                    "classAbilities": [
                        {
                            "name": "Unarmored Defense",
                            "level": "1st level",
                            "description": "Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier."
                        },
                        {
                            "name": "Martial Arts",
                            "level": "1st level",
                            "description": "At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don’t have the two-handed or heavy property.\nYou gain the following benefits while you are unarmed or wielding only monk weapons and you aren’t wearing armor or wielding a shield:\nYou can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.\nWhen you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven’t already taken a bonus action this turn.\nCertain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon in the Weapons section."
                        },
                        {
                            "name": "Ki",
                            "level": "2nd level",
                            "description": "Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table.\nYou can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.\nWhen you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.\nSome of your ki features require your target to make a saving throw to resist the feature’s effects. The saving throw DC is calculated as follows:\nKi save DC = 8 + your proficiency bonus + your Wisdom modifier\nFlurry of Blows\nImmediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action.\nPatient Defense\nYou can spend 1 ki point to take the Dodge action as a bonus action on your turn.\nStep of the Wind\nYou can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn."
                        },
                        {
                            "name": "Unarmored Movement",
                            "level": "2nd level",
                            "description": "Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table.\nAt 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move."
                        },
                        {
                            "name": "Monastic Tradition",
                            "level": "3rd level",
                            "description": "When you reach 3rd level, you commit yourself to a monastic tradition: the Way of the Open Hand, detailed at the end of the class description or one from another source. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level."
                        },
                        {
                            "name": "Deflect Missiles",
                            "level": "3rd level",
                            "description": "Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level.\nIf you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack, which has a normal range of 20 feet and a long range of 60 feet."
                        },
                        {
                            "name": "Ability Score Improvement",
                            "level": "4th, 8th, 12th, 16th, 19th levels",
                            "description": "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.\nUsing the optional feats rule, you can forgo taking this feature to take a feat of your choice instead."
                        },
                        {
                            "name": "Slow Fall",
                            "level": "4th level",
                            "description": "Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level."
                        },
                        {
                            "name": "Extra Attack",
                            "level": "5th level",
                            "description": "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
                        },
                        {
                            "name": "Stunning Strike",
                            "level": "5th level",
                            "description": "Starting at 5th level, you can interfere with the flow of ki in an opponent’s body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn."
                        },
                        {
                            "name": "Ki-Empowered Strikes",
                            "level": "6th level",
                            "description": "Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
                        },
                        {
                            "name": "Unarmored Movement",
                            "level": "6th level",
                            "description": "At 6th level, your Unarmored Speed speed bonus increases to 15 feet while you are not wearing armor or wielding a shield."
                        },
                        {
                            "name": "Evasion",
                            "level": "7th level",
                            "description": "At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon’s lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
                        },
                        {
                            "name": "Stillness of Mind",
                            "level": "7th level",
                            "description": "Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened."
                        },
                        {
                            "name": "Unarmored Movement Improvement",
                            "level": "9th level",
                            "description": "At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during your move."
                        },
                        {
                            "name": "Purity of Body",
                            "level": "10th level",
                            "description": "At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison."
                        },
                        {
                            "name": "Unarmored Movement",
                            "level": "10th level",
                            "description": "At 10th level, your Unarmored Speed speed bonus increases to 20 feet while you are not wearing armor or wielding a shield."
                        },
                        {
                            "name": "Tongue of the Sun and Moon",
                            "level": "13th level",
                            "description": "Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say."
                        },
                        {
                            "name": "Diamond Soul",
                            "level": "14th level",
                            "description": "Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.\nAdditionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result."
                        },
                        {
                            "name": "Unarmored Movement",
                            "level": "14th level",
                            "description": "At 14th level, your Unarmored Speed speed bonus increases to 25 feet while you are not wearing armor or wielding a shield."
                        },
                        {
                            "name": "Timeless Body",
                            "level": "15th level",
                            "description": "At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can’t be aged magically. You can still die of old age, however. In addition, you no longer need food or water."
                        },
                        {
                            "name": "Empty Body",
                            "level": "18th level",
                            "description": "Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.\nAdditionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can’t take any other creatures with you."
                        },
                        {
                            "name": "Unarmored Movement",
                            "level": "18th level",
                            "description": "At 18th level, your Unarmored Speed speed bonus increases to 30 feet while you are not wearing armor or wielding a shield."
                        },
                        {
                            "name": "Perfect Self",
                            "level": "20th level",
                            "description": "At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points."
                        }
                    ]
                },
                {
                    "class": "Paladin",
                    "classDescription": "A holy warrior bound to a sacred oath",
                    "primaryStat": "Strength & Charisma",
                    "saves": "Wisdom & Charisma",
                    "spellCastingAbility": "Charisma",
                    "hitPoints": {
                        "hitDice": "1d10 per paladin level",
                        "hitPointHidden": "10",
                        "hitPointsStart": "10 + your Constitution modifier",
                        "hitPointsHigh": "1d10 (or 6) + your Constitution modifier per paladin level after 1st"
                    },
                    "proficiencies": {
                        "armor": "All armor, shields",
                        "weapons": "Simple weapons, martial weapons",
                        "tools": "None",
                        "savingThrows": "Wisdom, Charisma",
                        "skills": "Choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion",
                        "numSkills": "2",
                        "skillsList": "Athletics;Insight;Intimidation;Medicine;Persuasion;Religion"
                    },
                    "classAbilities": [
                        {
                            "name": "Divine Sense",
                            "level": "1st level",
                            "description": "The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell.\nYou can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses."
                        },
                        {
                            "name": "Lay on Hands",
                            "level": "1st level",
                            "description": "Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level × 5.\nAs an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.\nAlternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.\nThis feature has no effect on undead and constructs."
                        },
                        {
                            "name": "Fighting Style",
                            "level": "2nd level",
                            "description": "At 2nd level, you adopt a style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again."
                        },
                        {
                            "name": "Spellcasting",
                            "level": "2nd level",
                            "description": "By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does. See Spells Rules for the general rules of spellcasting and the Spells Listing for the paladin spell list.\nPreparing and Casting Spells\nThe Paladin table shows how many spell slots you have to cast your paladin spells. To cast one of your paladin spells of 1st level or higher, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.\nYou prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.\nFor example, if you are a 5th-level paladin, you have four 1st-level and two 2nd-level spell slots. With a Charisma of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn’t remove it from your list of prepared spells.\nYou can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.\nSpellcasting Ability\nCharisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one.\nSpell save DC = 8 + your proficiency bonus + your Charisma modifier\nSpell attack modifier = your proficiency bonus + your Charisma modifier\nSpellcasting Focus\nYou can use a holy symbol (see the Adventuring Gear section) as a spellcasting focus for your paladin spells."
                        },
                        {
                            "name": "Divine Smite",
                            "level": "2nd level",
                            "description": "Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon’s damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend, to a maximum of 6d8."
                        },
                        {
                            "name": "Divine Health",
                            "level": "3rd level",
                            "description": "By 3rd level, the divine magic flowing through you makes you immune to disease."
                        },
                        {
                            "name": "Sacred Oath",
                            "level": "3rd level",
                            "description": "When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose the Oath of Devotion detailed at the end of the class description or one from another source.\nYour choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature.\nOath Spells\nEach oath has a list of associated spells. You gain access to these spells at the levels specified in the oath description. Once you gain access to an oath spell, you always have it prepared. Oath spells don’t count against the number of spells you can prepare each day\nIf you gain an oath spell that doesn’t appear on the paladin spell list, the spell is nonetheless a paladin spell for you.\nChannel Divinity\nYour oath allows you to channel divine energy to fuel magical effects. Each Channel Divinity option provided by your oath explains how to use it.\nWhen you use your Channel Divinity, you choose which option to use. You must then finish a short or long rest to use your Channel Divinity again.\nSome Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your paladin spell save DC."
                        },
                        {
                            "name": "Ability Score Improvement",
                            "level": "4th, 8th, 12th, 16th, 19th levels",
                            "description": "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.\nUsing the optional feats rule, you can forgo taking this feature to take a feat of your choice instead."
                        },
                        {
                            "name": "Extra Attack",
                            "level": "5th level",
                            "description": "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
                        },
                        {
                            "name": "Aura of Protection",
                            "level": "6th level",
                            "description": "Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.\nAt 18th level, the range of this aura increases to 30 feet."
                        },
                        {
                            "name": "Aura of Courage",
                            "level": "10th level",
                            "description": "Starting at 10th level, you and friendly creatures within 10 feet of you can’t be frightened while you are conscious.\nAt 18th level, the range of this aura increases to 30 feet."
                        },
                        {
                            "name": "Improved Divine Smite",
                            "level": "11th level",
                            "description": "By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage."
                        },
                        {
                            "name": "Cleansing Touch",
                            "level": "14th level",
                            "description": "Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch.\nYou can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest."
                        },
                        {
                            "name": "Aura Improvements",
                            "level": "18th level",
                            "description": "At 18th level, the range of your auras increase to 30 feet."
                        }
                    ]
                },
                {
                    "class": "Ranger",
                    "classDescription": "A warrior who combats threats on the edges of civilization",
                    "primaryStat": "Dexterity & Wisdom",
                    "saves": "Strength & Dexterity",
                    "spellCastingAbility": "Wisdom",
                    "hitPoints": {
                        "hitDice": "1d10 per ranger level",
                        "hitPointHidden": "10",
                        "hitPointsStart": "10 + your Constitution modifier",
                        "hitPointsHigh": "1d10 (or 6) + your Constitution modifier per ranger level after 1st"
                    },
                    "proficiencies": {
                        "armor": "Light armor, medium armor, shields",
                        "weapons": "Simple weapons, martial weapons",
                        "tools": "None",
                        "savingThrows": "Strength, Dexterity",
                        "skills": "Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival",
                        "numSkills": "3",
                        "skillsList": "Animal Handling;Athletics;Insight;Investigation;Nature;Perception;Survival;Stealth"
                    },
                    "classAbilities": [
                        {
                            "name": "Favored Enemy",
                            "level": "1st level",
                            "description": "Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.\nChoose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.\nYou have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.\nWhen you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.\nYou choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures."
                        },
                        {
                            "name": "Natural Explorer",
                            "level": "1st level",
                            "description": "You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in.\nWhile traveling for an hour or more in your favored terrain, you gain the following benefits:\nDifficult terrain doesn’t slow your group’s travel.\nYour group can’t become lost except by magical means.\nEven when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.\nIf you are traveling alone, you can move stealthily at a normal pace.\nWhen you forage, you find twice as much food as you normally would.\nWhile tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.\nYou choose additional favored terrain types at 6th and 10th level."
                        },
                        {
                            "name": "Fighting Style",
                            "level": "2nd level",
                            "description": "At 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. \nYou can’t take a Fighting Style option more than once, even if you later get to choose again."
                        },
                        {
                            "name": "Spellcasting",
                            "level": "2nd level",
                            "description": "By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does. See Spells Rules for the general rules of spellcasting and the Spells Listing for the ranger spell list.\nSpell Slots\nThe Ranger table shows how many spell slots you have to cast your ranger spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.\nFor example, if you know the 1st-level spell animal friendship and have a 1st-level and a 2nd-level spell slot available, you can cast animal friendship using either slot.\nSpells Known of 1st Level and Higher\nYou know two 1st-level spells of your choice from the ranger spell list.\nThe Spells Known column of the Ranger table shows when you learn more ranger spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 5th level in this class, you can learn one new spell of 1st or 2nd level.\nAdditionally, when you gain a level in this class, you can choose one of the ranger spells you know and replace it with another spell from the ranger spell list, which also must be of a level for which you have spell slots.\nSpellcasting Ability\nWisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a ranger spell you cast and when making an attack roll with one.\nSpell save DC = 8 + your proficiency bonus + your Wisdom modifier\nSpell attack modifier = your proficiency bonus + your Wisdom modifier"
                        },
                        {
                            "name": "Ranger Archetype",
                            "level": "3rd level",
                            "description": "At 3rd level, you choose an archetype that you strive to emulate: the Hunter that is detailed at the end of the class description or one from another source. Your choice grants you features at 3rd level and again at 7th, 11th, and 15th level."
                        },
                        {
                            "name": "Primeval Awareness",
                            "level": "3rd level",
                            "description": "Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn’t reveal the creatures’ location or number."
                        },
                        {
                            "name": "Ability Score Improvement",
                            "level": "4th, 8th, 12th, 16th, 19th levels",
                            "description": "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.\nUsing the optional feats rule, you can forgo taking this feature to take a feat of your choice instead."
                        },
                        {
                            "name": "Extra Attack",
                            "level": "5th level",
                            "description": "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
                        },
                        {
                            "name": "Favored Enemy",
                            "level": "6th level",
                            "description": "At 6th level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.\nChoose an additional type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.\nYou have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.\nWhen you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.\nYou choose one additional favored enemy, as well as an associated language, at 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures."
                        },
                        {
                            "name": "Land's Stride",
                            "level": "8th level",
                            "description": "Starting at 8th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.\nIn addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell."
                        },
                        {
                            "name": "Hide in Plain Sight",
                            "level": "10th level",
                            "description": "Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.\nOnce you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit."
                        },
                        {
                            "name": "Vanish",
                            "level": "14th level",
                            "description": "Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can’t be tracked by nonmagical means, unless you choose to leave a trail."
                        },
                        {
                            "name": "Favored Enemy",
                            "level": "14th level",
                            "description": "At 14th level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.\nChoose an additional type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.\nYou have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.\nWhen you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all."
                        },
                        {
                            "name": "Feral Senses",
                            "level": "18th level",
                            "description": "At 18th level, you gain preternatural senses that help you fight creatures you can’t see. When you attack a creature you can’t see, your inability to see it doesn’t impose disadvantage on your attack rolls against it.\nYou are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn’t hidden from you and you aren’t blinded or deafened."
                        },
                        {
                            "name": "Foe Slayer",
                            "level": "20th level",
                            "description": "At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied."
                        }
                    ]
                },
                {
                    "class": "Rogue",
                    "classDescription": "A scoundrel who uses stealth and trickery to overcome obstacles and enemies",
                    "primaryStat": "Dexterity",
                    "saves": "Dexterity & Intelligence",
                    "spellCastingAbility": "Intelligence",
                    "hitPoints": {
                        "hitDice": "1d8 per rogue level",
                        "hitPointHidden": "8",
                        "hitPointsStart": "8 + your Constitution modifier",
                        "hitPointsHigh": "1d8 (or 5) + your Constitution modifier per rogue level after 1st"
                    },
                    "proficiencies": {
                        "armor": "Light armor",
                        "weapons": "Simple weapons, hand crossbows, longswords, rapiers, shortswords",
                        "tools": "Thieves’ tools",
                        "savingThrows": "Dexterity, Intelligence",
                        "skills": "Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance, Persuasion, Sleight of Hand, and Stealth",
                        "numSkills": "4",
                        "skillsList": "Acrobatics;Athletics;Deception;Insight;Intimidation;Investigation;Perception;Performance;Persuasion;Sleight of Hand;Stealth"
                    },
                    "classAbilities": [
                        {
                            "name": "Expertise",
                            "level": "1st level",
                            "description": "At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves’ tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.\nAt 6th level, you can choose two more of your proficiencies (in skills or with thieves’ tools) to gain this benefit."
                        },
                        {
                            "name": "Sneak Attack",
                            "level": "1st level",
                            "description": "Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.\nYou don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll.\nThe amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table."
                        },
                        {
                            "name": "Thieves' Cant",
                            "level": "1st level",
                            "description": "During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves’ cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.\nIn addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run."
                        },
                        {
                            "name": "Cunning Action",
                            "level": "2nd level",
                            "description": "Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action."
                        },
                        {
                            "name": "Roguish Archetype",
                            "level": "3rd level",
                            "description": "At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities: Thief, detailed at the end of the class description, or one from another source. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level."
                        },
                        {
                            "name": "Ability Score Improvement",
                            "level": "",
                            "description": "When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.\nUsing the optional feats rule, you can forgo taking this feature to take a feat of your choice instead."
                        },
                        {
                            "name": "Uncanny Dodge",
                            "level": "5th level",
                            "description": "Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack’s damage against you."
                        },
                        {
                            "name": "Expertise",
                            "level": "6th level",
                            "description": "At 6th level, choose two more of your skill proficiencies, or one more of your skill proficiencies and your proficiency with thieves’ tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies."
                        },
                        {
                            "name": "Evasion",
                            "level": "7th level",
                            "description": "Beginning at 7th level, you can nimbly dodge out of the way of certain area effects, such as an ancient red dragon’s fiery breath or an ice storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
                        },
                        {
                            "name": "Reliable Talent",
                            "level": "11th level",
                            "description": "By 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10."
                        },
                        {
                            "name": "Blindsense",
                            "level": "14th level",
                            "description": "Starting at 14th level, if you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you."
                        },
                        {
                            "name": "Slippery Mind",
                            "level": "15th level",
                            "description": "By 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws."
                        },
                        {
                            "name": "Elusive",
                            "level": "18th level",
                            "description": "Beginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren’t incapacitated."
                        },
                        {
                            "name": "Stroke of Luck",
                            "level": "20th level",
                            "description": "At 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20.\nOnce you use this feature, you can’t use it again until you finish a short or long rest."
                        }
                    ]
                },
                {
                    "class": "Sorcerer",
                    "classDescription": "A spellcaster who draws on inherent magic from a gift or bloodline",
                    "primaryStat": "Charisma",
                    "saves": "Charisma & Constitution",
                    "spellCastingAbility": "Charisma",
                    "hitPoints": {
                        "hitDice": "1d6 per sorcerer level",
                        "hitPointHidden": "6",
                        "hitPointsStart": "6 + your Constitution modifier",
                        "hitPointsHigh": "1d6 (or 4) + your Constitution modifier per sorcerer level after 1st"
                    },
                    "proficiencies": {
                        "armor": "None",
                        "weapons": "Daggers, darts, slings, quarterstaffs, light crossbows",
                        "tools": "None",
                        "savingThrows": "Constitution, Charisma",
                        "skills": "Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, and Religion",
                        "numSkills": "2",
                        "skillsList": "Arcana;Deception;Insight;Intimidation;Persuasion;Religion"
                    },
                    "classAbilities": [
                        {
                            "name": "Spellcasting",
                            "level": "1st level",
                            "description": "An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells. See Spells Rules for the general rules of spellcasting and the Spells Listing for the sorcerer spell list.\nCantrips\nAt 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn additional sorcerer cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Sorcerer table.\nSpell Slots\nThe Sorcerer table shows how many spell slots you have to cast your sorcerer spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.\nFor example, if you know the 1st-level spell burning hands and have a 1st-level and a 2nd-level spell slot available, you can cast burning hands using either slot.\nSpells Known of 1st Level and Higher\nYou know two 1st-level spells of your choice from the sorcerer spell list.\nThe Spells Known column of the Sorcerer table shows when you learn more sorcerer spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.\nAdditionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots.\nSpellcasting Ability\nCharisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one.\nSpell save DC = 8 + your proficiency bonus + your Charisma modifier\nSpell attack modifier = your proficiency bonus + your Charisma modifier\nSpellcasting Focus\nYou can use an arcane focus (see the Adventuring Gear section) as a spellcasting focus for your sorcerer spells."
                        },
                        {
                            "name": "Sorcerous Origin",
                            "level": "1st level",
                            "description": "Choose a sorcerous origin, which describes the source of your innate magical power: Draconic Bloodline, detailed at the end of the class description, or one from another source.\nYour choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level."
                        },
                        {
                            "name": "Font of Magic",
                            "level": "2nd level",
                            "description": "At 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.\nSorcery Points\nYou have 2 sorcery points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer table. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest.\nFlexible Casting\nYou can use your sorcery points to gain additional spell slots, or sacrifice spell slots to gain additional sorcery points. You learn other ways to use your sorcery points as you reach higher levels.\nCreating Spell Slots. You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th.\nAny spell slot you create with this feature vanishes when you finish a long rest.\nCreating Spell Slots\nSPELL SLOT LEVEL\tSORCERY POINT COST\n1st\t2\n2nd\t3\n3rd\t5\n4th\t6\n5th\t7\nConverting a Spell Slot to Sorcery Points. As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot’s level."
                        },
                        {
                            "name": "Metamagic",
                            "level": "3rd level",
                            "description": "At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.\nYou can use only one Metamagic option on a spell when you cast it, unless otherwise noted."
                        },
                        {
                            "name": "Ability Score Increase",
                            "level": "4th, 8th, 12th, 16th, 19th levels",
                            "description": "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.\nUsing the optional feats rule, you can forgo taking this feature to take a feat of your choice instead."
                        },
                        {
                            "name": "Sorcerous Restoration",
                            "level": "20th level",
                            "description": "At 20th level, you regain 4 expended sorcery points whenever you finish a short rest."
                        }
                    ]
                },
                {
                    "class": "Warlock",
                    "classDescription": "A wielder of magic that is derived from a bargain with an extraplanar entity",
                    "primaryStat": "Charisma",
                    "saves": "Wisdom & Charisma",
                    "spellCastingAbility": "Charisma",
                    "hitPoints": {
                        "hitDice": "1d8 per warlock level",
                        "hitPointHidden": "8",
                        "hitPointsStart": "8 + your Constitution modifier",
                        "hitPointsHigh": "1d8 (or 5) + your Constitution modifier per warlock level after 1st"
                    },
                    "proficiencies": {
                        "armor": "Light armor",
                        "weapons": "Simple weapons",
                        "tools": "None",
                        "savingThrows": "Wisdom, Charisma",
                        "skills": "Choose two skills from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion",
                        "numSkills": "2",
                        "skillsList": "Arcana;Deception;History;Intimidation;Investigation;Nature;Religion"
                    },
                    "classAbilities": [
                        {
                            "name": "Otherworldly Patron",
                            "level": "1st level",
                            "description": "At 1st level, you have struck a bargain with an otherworldly being of your choice: the Fiend, which is detailed at the end of the class description, or one from another source. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level."
                        },
                        {
                            "name": "Pact Magic",
                            "level": "1st level",
                            "description": "Your arcane research and the magic bestowed on you by your patron have given you facility with spells. See Spells Rules for the general rules of spellcasting and the Spells Listing for the warlock spell list.\nCantrips\nYou know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table.\nSpell Slots\nThe Warlock table shows how many spell slots you have to cast your warlock spells of 1st through 5th level. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.\nFor example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell witch bolt, you must spend one of those slots, and you cast it as a 3rd-level spell.\nSpells Known of 1st Level and Higher\nAt 1st level, you know two 1st-level spells of your choice from the warlock spell list.\nThe Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level and higher. A spell you choose must be of a level no higher than what’s shown in the table’s Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.\nAdditionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots.\nSpellcasting Ability\nCharisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one.\nSpell save DC = 8 + your proficiency bonus + your Charisma modifier\nSpell attack modifier = your proficiency bonus + your Charisma modifier\nSpellcasting Focus\nYou can use an arcane focus (see the Adventuring Gear section) as a spellcasting focus for your warlock spells."
                        },
                        {
                            "name": "Eldritch Invocations",
                            "level": "2nd level",
                            "description": "In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability. A level prerequisite refers to your level in this class.\nAt 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table.\nAdditionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level.\nIf an eldritch invocation has prerequisites, you must meet them to learn it. You can learn the invocation at the same time that you meet its prerequisites. A level prerequisite refers to your level in this class."
                        },
                        {
                            "name": "Pact Boon",
                            "level": "3rd level",
                            "description": "At 3rd level, your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice."
                        },
                        {
                            "name": "Ability Score Increase",
                            "level": "4th, 8th, 12th, 16th, 19th levels",
                            "description": "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.\nUsing the optional feats rule, you can forgo taking this feature to take a feat of your choice instead."
                        },
                        {
                            "name": "Mystic Arcanum (6th level)",
                            "level": "11th level",
                            "description": "At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th-level spell from the warlock spell list as this arcanum.\nYou can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.\nAt higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th-level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest."
                        },
                        {
                            "name": "Mystic Arcanum (7th level)",
                            "level": "13th level",
                            "description": "At 13th level, your patron bestows upon you a magical secret called an arcanum. Choose one 7th-level spell from the warlock spell list as this arcanum.\nYou can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.\nAt higher levels, you gain more warlock spells of your choice that can be cast in this way: one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest."
                        },
                        {
                            "name": "Mystic Arcanum (8th level)",
                            "level": "15th level",
                            "description": "At 15th level, your patron bestows upon you a magical secret called an arcanum. Choose one 8th-level spell from the warlock spell list as this arcanum.\nYou can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.\nAt 17th level, you gain a 9th-level warlock spell of your choice that can be cast in this way. You regain all uses of your Mystic Arcanum when you finish a long rest."
                        },
                        {
                            "name": "Mystic Arcanum (9th level)",
                            "level": "17th level",
                            "description": "At 17th level, your patron bestows upon you a magical secret called an arcanum. Choose one 9th-level spell from the warlock spell list as this arcanum.\nYou can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.\nYou regain all uses of your Mystic Arcanum when you finish a long rest."
                        },
                        {
                            "name": "Eldritch Master",
                            "level": "20th level",
                            "description": "At 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature. Once you regain spell slots with this feature, you must finish a long rest before you can do so again."
                        }
                    ]
                },
                {
                    "class": "Wizard",
                    "classDescription": "A scholarly magic-user capable of manipulating the structures of reality",
                    "primaryStat": "Intelligence",
                    "saves": "Intelligence & Wisdom",
                    "spellCastingAbility": "Intelligence",
                    "hitPoints": {
                        "hitDice": "1d6 per wizard level",
                        "hitPointHidden": "6",
                        "hitPointsStart": "6 + your Constitution modifier",
                        "hitPointsHigh": "1d6 (or 4) + your Constitution modifier per wizard level after 1st"
                    },
                    "proficiencies": {
                        "armor": "None",
                        "weapons": "Daggers, darts, slings, quarterstaffs, light crossbows",
                        "tools": "None",
                        "savingThrows": "Intelligence, Wisdom",
                        "skills": "Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion",
                        "numSkills": "2",
                        "skillsList": "Arcana;History;Insight;Investigation;Medicine;Religion"
                    },
                    "classAbilities": [
                        {
                            "name": "Spellcasting",
                            "level": "1st level",
                            "description": "As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power. See Spells Rules for the general rules of spellcasting and the Spells Listing for the wizard spell list.\nCantrips\nAt 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table.\nSpellbook\nAt 1st level, you have a spellbook containing six 1st-level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind.\nPreparing and Casting Spells\nThe Wizard table shows how many spell slots you have to cast your wizard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.\nYou prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.\nFor example, if you’re a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your spellbook. If you prepare the 1st-level spell magic missile, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn’t remove it from your list of prepared spells.\nYou can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list.\nSpellcasting Ability\nIntelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.\nSpell save DC = 8 + your proficiency bonus + your Intelligence modifier\nSpell attack modifier = your proficiency bonus + your Intelligence modifier\nRitual Casting\nYou can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don’t need to have the spell prepared.\nSpellcasting Focus\nYou can use an arcane focus (see the Adventuring Gear section) as a spellcasting focus for your wizard spells.\nLearning Spells of 1st Level and Higher\nEach time you gain a wizard level, you can add two wizard spells of your choice to your spellbook for free. Each of these spells must be of a level for which you have spell slots, as shown on the Wizard table. On your adventures, you might find other spells that you can add to your spellbook (see the “Your Spellbook” sidebar)\nYOUR SPELLBOOK\nThe spells that you add to your spellbook as you gain levels reflect the arcane research you conduct on your own, as well as intellectual breakthroughs you have had about the nature of the multiverse. You might find other spells during your adventures. You could discover a spell recorded on a scroll in an evil wizard’s chest, for example, or in a dusty tome in an ancient library.\nCopying a Spell into the Book. When you find a wizard spell of 1st level or higher, you can add it to your spellbook if it is of a spell level you can prepare and if you can spare the time to decipher and copy it.\nCopying that spell into your spellbook involves reproducing the basic form of the spell, then deciphering the unique system of notation used by the wizard who wrote it. You must practice the spell until you understand the sounds or gestures required, then transcribe it into your spellbook using your own notation.\nFor each level of the spell, the process takes 2 hours and costs 50 gp. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it. Once you have spent this time and money, you can prepare the spell just like your other spells.\nReplacing the Book. You can copy a spell from your own spellbook into another book—for example, if you want to make a backup copy of your spellbook. This is just like copying a new spell into your spellbook, but faster and easier, since you understand your own notation and already know how to cast the spell. You need spend only 1 hour and 10 gp for each level of the copied spell.\nIf you lose your spellbook, you can use the same procedure to transcribe the spells that you have prepared into a new spellbook. Filling out the remainder of your spellbook requires you to find new spells to do so, as normal. For this reason, many wizards keep backup spellbooks in a safe place.\nThe Book’s Appearance. Your spellbook is a unique compilation of spells, with its own decorative flourishes and margin notes. It might be a plain, functional leather volume that you received as a gift from your master, a finely bound gilt-edged tome you found in an ancient library, or even a loose collection of notes scrounged together after you lost your previous spellbook in a mishap."
                        },
                        {
                            "name": "Arcane Recovery",
                            "level": "1st level",
                            "description": "You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.\nFor example, if you’re a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots."
                        },
                        {
                            "name": "Arcane Tradition",
                            "level": "2nd level",
                            "description": "When you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of eight schools: Abjuration, Conjuration, Divination, Enchantment, Evocation, Illusion, Necromancy, or Transmutation. The School of Evocation is detailed at the end of the class description, and more choices are available in other sources.\nYour choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
                        },
                        {
                            "name": "Ability Score Improvement",
                            "level": "4th, 8th, 12th, 16th ,19th levels",
                            "description": "When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can’t increase an ability score above 20 using this feature.nUsing the optional feats rule, you can forgo taking this feature to take a feat of your choice instead."
                        },
                        {
                            "name": "Spell Mastery",
                            "level": "18th level",
                            "description": "At 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal.\nBy spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels."
                        },
                        {
                            "name": "Signature Spell",
                            "level": "20th level",
                            "description": "When you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don’t count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can’t do so again until you finish a short or long rest.\nIf you want to cast either spell at a higher level, you must expend a spell slot as normal."
                        }
                    ]
                }]
        }