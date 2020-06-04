var raceData = {
    "races" : [
        {
            "race": "Aarakocra",
            "raceBonus": "dex+2;wis+1",
            "description": "Sequestered in high mountains atop tall trees, the aarakocra, sometimes called birdfolk, evoke fear and wonder.",
            "abilityScoreIncrease": "Your Dexterity score increases by 2, and your Wisdom score increases by 1.",
            "age": "Aarakocra reach maturity by age 3. Compared to humans, aarakocra don’t usually live longer than 30 years.",
            "alignment": "Most aarakocra are good and rarely choose sides when it comes to law and chaos. Tribal leaders and warriors might be lawful, while explorers and adventurers might tend toward chaotic.",
            "size": "Aarakocra are about 5 feet tall. They have thin, lightweight bodies that weigh between 80 and 100 pounds. Your size is Medium.",
            "speed": "Your base walking speed is 25 feet.",
            "speedNum": "25",
            "abilities": [
                {
                    "abilityName": "Flight",
                    "abilityDescription": "You have a flying speed of 50 feet. To use this speed, you can’t be wearing medium or heavy armor."
                },
                {
                    "abilityName": "Talons",
                    "abilityDescription": "You are proficient with your unarmed strikes, which deal 1d4 slashing damage on a hit."  
                }
            ],
            "languages": "You can speak, read, and write Common, Aarakocra, and Auran.",
            "languageList": "Common,Aarakocra,Auran"
        },
        {
            "race": "Dragonborn",
            "raceBonus": "str+2;char+1",
            "description": "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings.",
            "abilityScoreIncrease": "Your Strength score increases by 2, and your Charisma score increases by 1.",
            "age": "Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",
            "alignment": "Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil (represented by Bahamut and Tiamat, respectively). Most dragonborn are good, but those who side with Tiamat can be terrible villains.",
            "size": "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",
            "speed": "Your base walking speed is 30 feet.",
            "speedNum": "30",
            "abilities": [
                {
                    "abilityName": "Draconic Ancestry",
                    "abilityDescription": "You have draconic ancestry. Choose one type of dragon from the table. Your breath weapon and damage resistance are determined by the dragon type.\n\nBlack\tAcid\t5 by 30 ft. line(Dex save)\nBlue\tLightning\t5 by 30 ft. line(Dex save)\nBrass\tFire\t5 by 30 ft. line(Dex save)\nBronze\tLightning\t5 by 30 ft. line(Dex save)\nCopper\tAcid\t5 by 30 ft. line(Dex save)\nGold\tFire\t15 ft. cone(Dex save)\nGreen\tPoison\t15 ft. cone(Con save)\nRed\tFire\t15 ft. cone(Dex save)\nSilver\tCold\t15 ft. cone(Con save)\nWhite\tCold\t15 ft. cone(Con save)"
                },
                {
                    "abilityName": "Breathe Weapon",
                    "abilityDescription": "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a short or long rest."
                },
                {
                    "abilityName": "Damage Resistance",
                    "abilityDescription": "You have resistance to the damage type associated with your draconic ancestry."
                }
            ],
            "languages": "You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.",
            "languageList": "Common,Draconic"
        },
        {
            "race": "Hill Dwarf",
            "raceBonus": "con+2;wis+1",
            "description": "Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.",
            "abilityScoreIncrease": "Your Constitution score increases by 2, and your Wisdom score increases by 1.",
            "age": "Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years.",
            "alignment": "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
            "size": "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",
            "speed": "Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.",
            "speedNum": "25",
            "abilities": [
                {
                    "abilityName": "Darkvision",
                    "abilityDescription": "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
                },
                {
                    "abilityName": "Dwarven Resilience",
                    "abilityDescription": "You have advantage on saving throws against poison, and you have resistance against poison damage."
                },
                {
                    "abilityName": "Tool Proficiency",
                    "abilityDescription": "You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools."
                },
                {
                    "abilityName": "Stonecunning",
                    "abilityDescription": "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."
                },
                {
                    "abilityName": "Dwarven Toughness",
                    "abilityDescription": "Your hit point maximum increases by 1, and it increases by 1 every time you gain a level."
                }
            ],
            "languages": "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak."
        },
        {
            "race": "Mountain Dwarf",
            "raceBonus": "con+2;str+2",
            "description": "Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.",
            "abilityScoreIncrease": "Your Constitution score increases by 2, and your Strength score increases by 2.",
            "age": "Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years.",
            "alignment": "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
            "size": "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",
            "speed": "Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.",
            "speedNum": "25",
            "abilities": [
                {
                    "abilityName": "Darkvision",
                    "abilityDescription": "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
                },
                {
                    "abilityName": "Dwarven Resilience",
                    "abilityDescription": "You have advantage on saving throws against poison, and you have resistance against poison damage."
                },
                {
                    "abilityName": "Tool Proficiency",
                    "abilityDescription": "You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools."
                },
                {
                    "abilityName": "Stonecunning",
                    "abilityDescription": "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus."
                },
                {
                    "abilityName": "Dwarven Armor Training",
                    "abilityDescription": "You have proficiency with light and medium armor."
                }
            ],
            "languages": "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.",
            "languageList": "Common,Dwarvish"
        },
        {
            "race": "Eladrin Elf",
            "raceBonus": "dex+2;int+1",
            "description": "Creatures of magic with strong ties to nature, eladrin live in the twilight realm of the Feywild. Their cities sometimes cross over to the Material Plane, appearing briefly in mountain valleys or deep forest glades before fading back into the Feywild.",
            "abilityScoreIncrease": "Your Dexterity score increases by 2, and your Intelligence score increases by 1.",
            "age": "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
            "alignment": "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others’ freedom as well as their own, and they are more often good than not. The drow are an exception; their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not.",
            "size": "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
            "speed": "Your base walking speed is 30 feet.",
            "speedNum": "30",
            "abilities": [
                {
                    "abilityName": "Darkvision",
                    "abilityDescription": "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
                },
                {
                    "abilityName": "Keen Senses",
                    "abilityDescription": "You have proficiency in the Perception skill."
                },
                {
                    "abilityName": "Fey Ancestry",
                    "abilityDescription": "You have advantage on saving throws against being charmed, and magic can’t put you to sleep."
                },
                {
                    "abilityName": "Trance",
                    "abilityDescription": "Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
                },
                {
                    "abilityName": "Elf Weapon Training",
                    "abilityDescription": "You have proficiency with the longsword, shortsword, shortbow, and longbow."
                },
                {
                    "abilityName": "Fey Step",
                    "abilityDescription": "You can cast the misty step spell once using this trait. You regain the ability to do so when you finish a short or long rest."
                }
            ],
            "languages": "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.",
            "languageList": "Common,Elvish"
        },
        {
            "race": "High Elf",
            "raceBonus": "dex+2;int+1;",
            "description": "As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many of the worlds of D&D, there are two kinds of high elves. One type (which includes the gray elves and valley elves of Greyhawk, the Silvanesti of Dragonlance, and the sun elves of the Forgotten Realms) is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type (including the high elves of Greyhawk, the Qualinesti of Dragonlance, and the moon elves of the Forgotten Realms) are more common and more friendly, and often encountered among humans and other races.",
            "abilityScoreIncrease": "Your Dexterity score increases by 2, and your Intelligence score increases by 1.",
            "age": "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
            "alignment": "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others’ freedom as well as their own, and they are more often good than not. The drow are an exception; their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not.",
            "size": "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
            "speed": "Your base walking speed is 30 feet.",
            "speedNum": "30",
            "abilities": [
                {
                    "abilityName": "Darkvision",
                    "abilityDescription": "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
                },
                {
                    "abilityName": "Keen Senses",
                    "abilityDescription": "You have proficiency in the Perception skill."
                },
                {
                    "abilityName": "Fey Ancestry",
                    "abilityDescription": "You have advantage on saving throws against being charmed, and magic can’t put you to sleep."
                },
                {
                    "abilityName": "Trance",
                    "abilityDescription": "Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
                },
                {
                    "abilityName": "Elf Weapon Training",
                    "abilityDescription": "You have proficiency with the longsword, shortsword, shortbow, and longbow."
                },
                {
                    "abilityName": "Cantrip",
                    "abilityDescription": "You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it."
                },
                {
                    "abilityName": "Extra Language",
                    "abilityDescription": "You can speak, read, and write one extra language of your choice."
                }
            ],
            "languages": "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.",
            "languageList": "Common,Elvish"
        },
        {
            "race": "Wood Elf",
            "raceBonus": "dex+2;wis+1",
            "description": "As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests. This category includes the wild elves (grugach) of Greyhawk and the Kagonesti of Dragonlance, as well as the races called wood elves in Greyhawk and the Forgotten Realms. In Faerûn, wood elves (also called wild elves, green elves, or forest elves) are reclusive and distrusting of non-elves. Wood elves’ skin tends to be copperish in hue, sometimes with traces of green. Their hair tends toward browns and blacks, but it is occasionally blond or copper-colored. Their eyes are green, brown, or hazel.",
            "abilityScoreIncrease": "Your Dexterity score increases by 2, and your Wisdom score increases by 1.",
            "age": "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
            "alignment": "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others’ freedom as well as their own, and they are more often good than not. The drow are an exception; their exile into the Underdark has made them vicious and dangerous. Drow are more often evil than not.",
            "size": "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
            "speed": "Your base walking speed is 30 feet.",
            "speedNum": "30",
            "abilities": [
                {
                    "abilityName": "Darkvision",
                    "abilityDescription": "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
                },
                {
                    "abilityName": "Keen Senses",
                    "abilityDescription": "You have proficiency in the Perception skill."
                },
                {
                    "abilityName": "Fey Ancestry",
                    "abilityDescription": "You have advantage on saving throws against being charmed, and magic can’t put you to sleep."
                },
                {
                    "abilityName": "Trance",
                    "abilityDescription": "Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
                },
                {
                    "abilityName": "Elf Weapon Training",
                    "abilityDescription": "You have proficiency with the longsword, shortsword, shortbow, and longbow."
                },
                {
                    "abilityName": "Fleet of Foot",
                    "abilityDescription": "Your base walking speed increases to 35 feet."
                },
                {
                    "abilityName": "Mask of the Wild",
                    "abilityDescription": "You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
                }
            ],
            "languages": "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.",
            "languageList": "Common,Elvish"
        },
        {
            "race": "Air Genasi",
            "raceBonus": "con+2;dex+1",
            "description": "As an air genasi, you are descended from the djinn. As changeable as the weather, your moods shift from calm to wild and violent with little warning, but these storms rarely last long. Air genasi typically have light blue skin, hair, and eyes. A faint but constant breeze accompanies them, tousling the hair and stirring the clothing. Some air genasi speak with breathy voices, marked by a faint echo. A few display odd patterns in their flesh or grow crystals from their scalps.",
            "abilityScoreIncrease": "Your Constitution score increases by 2, and your Dexterity score increases by 1.",
            "age": "Genasi mature at about the same rate as humans and reach adulthood in their late teens. They live somewhat longer than humans do, up to 120 years.",
            "alignment": "Independent and self-reliant, genasi tend toward a neutral alignment.",
            "size": "Genasi are as varied as their mortal parents but are generally built like humans, standing anywhere from 5 feet to over 6 feet tall. Your size is Medium.",
            "speed": "Your base walking speed is 30 feet.",
            "speedNum": "30",
            "abilities": [
                {
                    "abilityName": "Unending Breath",
                    "abilityDescription": "You can hold your breath indefinitely while you’re not incapacitated."
                },
                {
                    "abilityName": "Mingle with the Wind",
                    "abilityDescription": "You can cast the levitate spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this spell."
                }
            ],
            "languages": "You can speak, read, and write Common and Primordial. Primordial is a guttural language, filled with harsh syllables and hard consonants.",
            "languageList": "Common,Primordial"
        },
        {
            "race": "Earth Genasi",
            "raceBonus": "con+2;str+1",
            "description": "As an earth genasi, you are descended from the cruel and greedy dao, though you aren’t necessarily evil. You have inherited some measure of control over earth, reveling in superior strength and solid power. You tend to avoid rash decisions, pausing long enough to consider your options before taking action. Elemental earth manifests differently from one individual to the next. Some earth genasi always have bits of dust falling from their bodies and mud clinging to their clothes, never getting clean no matter how often they bathe. Others are as shiny and polished as gemstones, with skin tones of deep brown or black, eyes sparkling like agates. Earth genasi can also have smooth metallic flesh, dull iron skin spotted with rust, a pebbled and rough hide, or even a coating of tiny embedded crystals. The most arresting have fissures in their flesh, from which faint light shines.",
            "abilityScoreIncrease": "Your Constitution score increases by 2, and your Strength score increases by 1.",
            "age": "Genasi mature at about the same rate as humans and reach adulthood in their late teens. They live somewhat longer than humans do, up to 120 years.",
            "alignment": "Independent and self-reliant, genasi tend toward a neutral alignment.",
            "size": "Genasi are as varied as their mortal parents but are generally built like humans, standing anywhere from 5 feet to over 6 feet tall. Your size is Medium.",
            "speed": "Your base walking speed is 30 feet.",
            "speedNum": "30",
            "abilities": [
                {
                    "abilityName": "Earth Walk",
                    "abilityDescription": "You can move across difficult terrain made of earth or stone without expending extra movement."
                },
                {
                    "abilityName": "Merge with Stone",
                    "abilityDescription": "You can cast the pass without trace spell once with this trait, requiring no material components, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for this spell."
                }
            ],
            "languages": "You can speak, read, and write Common and Primordial. Primordial is a guttural language, filled with harsh syllables and hard consonants.",
            "languageList": "Common,Primordial"
        },
        {
            "race": "Fire Genasi",
            "raceBonus": "con+2;int+1",
            "description": "As a fire genasi, you have inherited the volatile mood and keen mind of the efreet. You tend toward impatience and making snap judgments. Rather than hide your distinctive appearance, you exult in it. Nearly all fire genasi are feverishly hot as if burning inside, an impression reinforced by flaming red, coal- black, or ash-gray skin tones. The more human-looking have fiery red hair that writhes under extreme emotion, while more exotic specimens sport actual flames dancing on their heads. Fire genasi voices might sound like crackling flames, and their eyes flare when angered. Some are accompanied by the faint scent of brimstone.",
            "abilityScoreIncrease": "Your Constitution score increases by 2, and your Intelligence score increases by 1.",
            "age": "Genasi mature at about the same rate as humans and reach adulthood in their late teens. They live somewhat longer than humans do, up to 120 years.",
            "alignment": "Independent and self-reliant, genasi tend toward a neutral alignment.",
            "size": "Genasi are as varied as their mortal parents but are generally built like humans, standing anywhere from 5 feet to over 6 feet tall. Your size is Medium.",
            "speed": "Your base walking speed is 30 feet.",
            "speedNum": "30",
            "abilities": [
                {
                    "abilityName": "Darkvision",
                    "abilityDescription": "You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. Your ties to the Elemental Plane of Fire make your darkvision unusual: everything you see in darkness is in a shade of red."
                },
                {
                    "abilityName": "Fire Resistance",
                    "abilityDescription": "You have resistance to fire damage."
                },
                {
                    "abilityName": "Reach to the Blaze",
                    "abilityDescription": "You know the produce flame cantrip. Once you reach 3rd level, you can cast the burning hands spell once with this trait as a 1st-level spell, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for these spells."
                }
            ],
            "languages": "You can speak, read, and write Common and Primordial. Primordial is a guttural language, filled with harsh syllables and hard consonants.",
            "languageList": "Common,Primordial"
        },
        {
            "race": "Water Genasi",
            "raceBonus": "con+2;wis+1",
            "description": "The lapping of waves, the spray of sea foam on the wind, the ocean depths—all of these things call to your heart. You wander freely and take pride in your independence, though others might consider you selfish. Most water genasi look as if they just finished bathing, with beads of moisture collecting on their skin and hair. They smell of fresh rain and clean water. Blue or green skin is common, and most have somewhat overlarge eyes, blue-black in color. A water genasi’s hair might float freely, swaying and waving as if underwater. Some have voices with undertones reminiscent of whale song or trickling streams.",
            "abilityScoreIncrease": "Your Constitution score increases by 2, and your Wisdom score increases by 1.",
            "age": "Genasi mature at about the same rate as humans and reach adulthood in their late teens. They live somewhat longer than humans do, up to 120 years.",
            "alignment": "Independent and self-reliant, genasi tend toward a neutral alignment.",
            "size": "Genasi are as varied as their mortal parents but are generally built like humans, standing anywhere from 5 feet to over 6 feet tall. Your size is Medium.",
            "speed": "Your base walking speed is 30 feet.",
            "speedNum": "30",
            "abilities": [
                {
                    "abilityName": "Acid Resistance",
                    "abilityDescription": "You have resistance to acid damage."
                },
                {
                    "abilityName": "Amphibious",
                    "abilityDescription": "You can breathe air and water."
                },
                {
                    "abilityName": "Swim",
                    "abilityDescription": "You have a swimming speed of 30 feet."
                },
                {
                    "abilityName": "Call to the Wave",
                    "abilityDescription": "You know the shape water cantrip. When you reach 3rd level, you can cast the create or destroy water spell as a 2nd-level spell once with this trait, and you regain the ability to cast it this way when you finish a long rest. Constitution is your spellcasting ability for these spells."
                }
            ],
            "languages": "You can speak, read, and write Common and Primordial. Primordial is a guttural language, filled with harsh syllables and hard consonants.",
            "languageList": "Common,Primordial"
        },
        {
            "race": "Deep Gnome",
            "raceBonus": "int+2;dex+1",
            "description": "Forest gnomes and rock gnomes are the gnomes most commonly encountered in the lands of the surface world. There is another subrace of gnomes rarely seen by any surface-dweller: deep gnomes, also known as svirfneblin. Guarded, and suspicious of outsiders, svirfneblin are cunning and taciturn, but can be just as kind-hearted, loyal, and compassionate as their surface cousins.",
            "abilityScoreIncrease": "Your Intelligence score increases by 2, and your Dexterity score increases by 1.",
            "age": "Deep gnomes are short-lived for gnomes. They mature at the same rate humans do and are considered full-grown adults by 25. They live 200 to 250 years, although hard toil and the dangers of the Underdark often claim them before their time.",
            "alignment": "Svirfneblin believe that survival depends on avoiding entanglements with other creatures and not making enemies, so they favor neutral alignments. They rarely wish others ill, and they are unlikely to take risks on behalf of others.",
            "size": "Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.",
            "speed": "Your base walking speed is 25 feet.",
            "speedNum": "25",
            "abilities": [
                {
                    "abilityName": "Gnome Cunning",
                    "abilityDescription": "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
                },
                {
                    "abilityName": "Darkvision",
                    "abilityDescription": "Your darkvision has a radius of 120 feet."
                },
                {
                    "abilityName": "Stone Camouflage",
                    "abilityDescription": "You have advantage on Dexterity (stealth) checks to hide in rocky terrain."
                }
            ],
            "languages": "You can speak, read, and write Common, Gnomish, and Undercommon. The svirfneblin dialect is more guttural than surface Gnomish, and most svirfneblin know only a little bit of Common, but those who deal with outsiders (and that includes you as an adventurer) pick up enough Common to get by in other lands.",
            "languageList": "Common,Gnomish,Undercommon"
        },
        {
            "race": "Rock Gnome",
            "raceBonus": "int+2;con+1",
            "description": "As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes. Most gnomes in the worlds of D&D are rock gnomes, including the tinker gnomes of the Dragonlance setting.",
            "abilityScoreIncrease": "Your Intelligence score increases by 2, and your Constitution score increases by 1.",
            "age": "Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.",
            "alignment": "Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.",
            "size": "Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.",
            "speed": "Your base walking speed is 25 feet.",
            "speedNum": "25",
            "abilities": [
                {
                    "abilityName": "Darkvision",
                    "abilityDescription": "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
                },
                {
                    "abilityName": "Gnome Cunning",
                    "abilityDescription": "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
                },
                {
                    "abilityName": "Artificer's Lore",
                    "abilityDescription": "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply."
                },
                {
                    "abilityName": "Tinker",
                    "abilityDescription": "You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options:\nClockwork Toy. This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.\nFire Starter. The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action.\nMusic Box. When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song’s end or when it is closed."
                }
            ],
            "languages": "You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.",
            "languageList": "Common,Gnomish"
        },
        {
            "race": "Goliath",
            "raceBonus": "str+2;con+1",
            "description": "Strong and reclusive, every day brings a new challenge to a goliath.",
            "abilityScoreIncrease": "Your Strength score increases by 2, and your Constitution score increases by 1.",
            "age": "Goliaths have lifespans comparable to humans. They enter adulthood in their late teens and usually live less than a century.",
            "alignment": "Goliath society, with its clear roles and tasks, has a strong lawful bent. The goliath sense of fairness, balanced with an emphasis on self- sufficiency and personal accountability, pushes them toward neutrality.",
            "size": "Goliaths are between 7 and 8 feet tall and weigh between 280 and 340 pounds. Your size is Medium.",
            "speed": "Your base walking speed is 30 feet.",
            "speedNum": "30",
            "abilities": [
                {
                    "abilityName": "Natural Athlete",
                    "abilityDescription": "You have proficiency in the Athletics skill."
                },
                {
                    "abilityName": "Stone's Endurance",
                    "abilityDescription": "You can focus yourself to occasionally shrug off injury. When you take damage, you can use your reaction to roll a d12. Add your Constitution modifier to the number rolled, and reduce the damage by that total. After you use this trait, you can’t use it again until you finish a short or long rest."
                },
                {
                    "abilityName": "Powerful Build",
                    "abilityDescription": "You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."
                },
                {
                    "abilityName": "Mountain Born",
                    "abilityDescription": "You’re acclimated to high altitude, including elevations above 20,000 feet. You’re also naturally adapted to cold climates."
                }
            ],
            "languages": "You can speak, read, and write Common and Giant.",
            "languageList": "Common,Giant"
        },
        {
            "race": "Half-Elf",
            "raceBonus": "char+2;other+1;other+1",
            "description": "Half-elves combine what some say are the best qualities of their elf and human parents.",
            "abilityScoreIncrease": "Your Charisma score increases by 2, and two other ability scores of your choice increase by 1.",
            "age": "Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.",
            "alignment": "Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others’ demands, and sometimes prove unreliable, or at least unpredictable.",
            "size": "Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.",
            "speed": "Your base walking speed is 30 feet.",
            "speedNum": "30",
            "abilities": [
                {
                    "abilityName": "Darkvision",
                    "abilityDescription": "Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
                },
                {
                    "abilityName": "Fey Ancestry",
                    "abilityDescription": "You have advantage on saving throws against being charmed, and magic can’t put you to sleep."
                },
                {
                    "abilityName": "Skill Versatility",
                    "abilityDescription": "You gain proficiency in two skills of your choice."
                }
            ],
            "languages": "You can speak, read, and write Common, Elvish, and one extra language of your choice.",
            "languageList": "Common,Elvish"
        },
        {
            "race": "Half-Orc",
            "raceBonus": "str+2;con+1",
            "description": "Half-orcs’ grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and towering builds make their orcish heritage plain for all to see.",
            "abilityScoreIncrease": "Your Strength score increases by 2, and your Constitution score increases by 1.",
            "age": "Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.",
            "alignment": "Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.",
            "size": "Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.",
            "speed": "Your base walking speed is 30 feet.",
            "speedNum": "30",
            "abilities": [
                {
                    "abilityName": "Darkvision",
                    "abilityDescription": "Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
                },
                {
                    "abilityName": "Menacing",
                    "abilityDescription": "You gain proficiency in the Intimidation skill."
                },
                {
                    "abilityName": "Relentless Endurance",
                    "abilityDescription": "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest."
                },
                {
                    "abilityName": "Savage Attacks",
                    "abilityDescription": "When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit."
                }
            ],
            "languages": "You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.",
            "languageList": "Common,Orc"
        },
        {
            "race": "Lightfoot Halfling",
            "raceBonus": "dex+2;char+1",
            "description": "As a lightfoot halfling, you can easily hide from notice, even using other people as cover. You’re inclined to be affable and get along well with others. In the Forgotten Realms, lightfoot halflings have spread the farthest and thus are the most common variety. Lightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life. In the world of Greyhawk, these halflings are called hairfeet or tallfellows.",
            "abilityScoreIncrease": "Your Dexterity score increases by 2, and your Charisma score increases by 1.",
            "age": "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.",
            "alignment": "Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.",
            "size": "Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.",
            "speed": "Your base walking speed is 25 feet.",
            "speedNum": "25",
            "abilities": [
                {
                    "abilityName": "Lucky",
                    "abilityDescription": "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."
                },
                {
                    "abilityName": "Brave",
                    "abilityDescription": "You have advantage on saving throws against being frightened."
                },
                {
                    "abilityName": "Halfling Nimbleness",
                    "abilityDescription": "You can move through the space of any creature that is of a size larger than yours."
                },
                {
                    "abilityName": "Naturally Stealthy",
                    "abilityDescription": "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you."
                }
            ],
            "languages": "You can speak, read, and write Common and Halfling. The Halfling language isn’t secret, but halflings are loath to share it with others. They write very little, so they don’t have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.",
            "languageList": "Common,Halfling"
        },
        {
            "race": "Stout Halfling",
            "raceBonus": "dex+2;con+1",
            "description": "As a stout halfling, you’re hardier than average and have some resistance to poison. Some say that stouts have dwarven blood. In the Forgotten Realms, these halflings are called stronghearts, and they’re most common in the south.",
            "abilityScoreIncrease": "Your Dexterity score increases by 2, and your Constitution score increases by 1.",
            "age": "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.",
            "alignment": "Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.",
            "size": "Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.",
            "speed": "Your base walking speed is 25 feet.",
            "speedNum": "25",
            "abilities": [
                {
                    "abilityName": "Lucky",
                    "abilityDescription": "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."
                },
                {
                    "abilityName": "Brave",
                    "abilityDescription": "You have advantage on saving throws against being frightened."
                },
                {
                    "abilityName": "Halfling Nimbleness",
                    "abilityDescription": "You can move through the space of any creature that is of a size larger than yours."
                },
                {
                    "abilityName": "Stout Resilience",
                    "abilityDescription": "You have advantage on saving throws against poison, and you have resistance against poison damage."
                }
            ],
            "languages": "You can speak, read, and write Common and Halfling. The Halfling language isn’t secret, but halflings are loath to share it with others. They write very little, so they don’t have a rich body of literature. Their oral tradition, however, is very strong. Almost all halflings speak Common to converse with the people in whose lands they dwell or through which they are traveling.",
            "languageList": "Common,Halfling"
        },
        {
            "race": "Human",
            "raceBonus": "all+1",
            "description": "Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.",
            "abilityScoreIncrease": "Two different ability scores of your choice increase by 1.",
            "age": "Humans reach adulthood in their late teens and live less than a century.",
            "alignment": "Humans tend toward no particular alignment. The best and the worst are found among them.",
            "size": "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.",
            "speed": "Your base walking speed is 30 feet.",
            "speedNum": "30",
            "abilities": [
                {
                    "abilityName": "Skills",
                    "abilityDescription": "You gain proficiency in one skill of your choice."
                },
                {
                    "abilityName": "Feat",
                    "abilityDescription": "You gain one feat of your choice."
                }
            ],
            "languages": "You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.",
            "languageList": "Common"
        },
        {
            "race": "Tiefling",
            "raceBonus": "char+2;int+1",
            "description": "To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling.",
            "abilityScoreIncrease": "Your Intelligence score increases by 1, and your Charisma score increases by 2.",
            "age": "Tieflings mature at the same rate as humans but live a few years longer.",
            "alignment": "Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.",
            "size": "Tieflings are about the same size and build as humans. Your size is Medium.",
            "speed": "Your base walking speed is 30 feet.",
            "speedNum": "30",
            "abilities": [
                {
                    "abilityName": "Darkvision",
                    "abilityDescription": "Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
                },
                {
                    "abilityName": "Hellish Resistance",
                    "abilityDescription": "You have resistance to fire damage."
                },
                {
                    "abilityName": "Infernal Legacy",
                    "abilityDescription": "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells."
                }
            ],
            "languages": "You can speak, read, and write Common and Infernal.",
            "languageList": "Common,Infernal"
        },
        {
            "race": "Aasimar",
            "raceBonus": "char+2",
            "description": "Whereas tieflings have fiendish blood in their veins, aasimar are the descendants of celestial beings. These folk generally appear as glorious humans with lustrous hair, flawless skin, and piercing eyes. Aasimar often attempt to pass as humans in order to right wrongs and defend goodness on the Material Plane without drawing undue attention to their celestial heritage. They strive to fit into society, although they usually rise to the top, becoming revered leaders and honorable heroes.",
            "abilityScoreIncrease": "Your Wisdom score increases by 1, and your Charisma score increases by 2.",
            "age": "Aasimar mature at the same rate as humans but live a few years longer.",
            "alignment": "Imbued with celestial power, most aasimar are good. Outcast aasimar are most often neutral or even evil.",
            "size": "Aasimar are built like well-proportioned humans. Your size is Medium.",
            "speed": "Your base walking speed is 30 feet.",
            "speedNum": "30",
            "abilities": [
                {
                    "abilityName": "Darkvision",
                    "abilityDescription": "Thanks to your celestial heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray."
                },
                {
                    "abilityName": "Celestial Legacy",
                    "abilityDescription": "You know the light cantrip. Once you reach 3rd level, you can cast the lesser restoration spell once with this trait, and you regain the ability to do so when you finish a long rest. Once you reach 5th level, you can cast the daylight spell once with this trait as a 3rd-level spell, and you regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells."
                },
                {
                    "abilityName": "Celestial Resistance",
                    "abilityDescription": "You have resistance to necrotic damage and radiant damage."
                }
            ],
            "languages": "You can speak, read, and write Common and Celestial.",
            "languageList": "Common,Celestial"
        }]
}