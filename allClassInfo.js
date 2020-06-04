var allClasses = {
    "paths" : [   
        /*      

        Barbarian

        */
        {
            "class":"Barbarian",
            "type": "Cannibal",
            "description": "While not evil per se, your acts of consumption would be shunned by most. To adventure as a Cannibal, you have learned to hide your customs from commoners, but partake openly in front of enemies and trusted allies.",
            "abilities": [
                {
                    "abilityTitle": "All Consuming Rage",
                    "abilityDescription": "Starting at 3rd level, during rage, when you reduce a hostile opponent to 0 hit points, you gain temporary hit points equal to your Constitution modifier + your barbarian level (minimum of 1)."
                },
                {
                    "abilityTitle": "Biting Rebuke",
                    "abilityDescription": "At 6th level, while in rage you can make a bite attack as a reaction when struck in melee by an opponent. This attack deals 1d4 + Strength modifier damage, and on a hit the opponent must succeed on a wisdom save DC 16 or be frightened, they may retest at the beginning of their next turn to overcome the frightened condition."
                },
                {
                    "abilityTitle": "Heart  of Enemies",
                    "abilityDescription": "Beginning at 10th level, by consuming a heart of a humanoid you have participated in slaying within the past hour, you regain your full hit points as if finishing a long rest. You must finish a long rest to regain use of this feature."
                },
                {
                    "abilityTitle": "Spirit of the Slain",
                    "abilityDescription": "At 14th level, by channeling the spirits of those you have eaten, you have advantage on your next attack. You can only do this a number of times each day equal to your proficiency bonus, and only once per turn."
                },
            ]
        },
        {   
            "class":"Barbarian",
            "type": "Path of the Ancestral Guardian",
            "description": "Some barbarians hail from cultures that revere their ancestors. These tribes teach that the warriors of the past linger in the world as mighty spirits, who can guide and protect the living. When a barbarian who follows this path rages, the barbarian contacts the spirit world and calls on these guardian spirits for aid. Barbarians who draw on their ancestral guardians can better fight to protect their tribes and their allies. In order to cement ties to their ancestral guardians, barbarians who follow this path cover themselves in elaborate tattoos that celebrate their ancestors’ deeds. These tattoos tell sagas of victories against terrible monsters and other fearsome rivals.",
            "abilities": [
                        {
                            "abilityTitle": "Ancestral Protectors",
                            "abilityDescription": "Starting when you choose this path at 3rd level, spectral warriors appear when you enter your rage. While you’re raging, the first creature you hit with an attack on your turn becomes the target of the warriors, which hinder its attacks. Until the start of your next turn, that target has disadvantage on any attack roll that isn’t against you, and when the target hits a creature other than you with an attack, that creature has resistance to the damage dealt by the attack. The effect on the target ends early if your rage ends."
                        },
                        {
                            "abilityTitle": "Spiritual Shield",
                            "abilityDescription": "Beginning at 6th level, the guardian spirits that aid you can provide supernatural protection to those you defend. If you are raging and another creature you can see within 30 feet of you takes damage, you can use your reaction to reduce that damage by 2d6. When you reach certain levels in this class. you can reduce the damage by more: by 3d6 at 10th level and by 4d6 at 14th level."
                        },
                        {
                            "abilityTitle": "Consult the Spirits",
                            "abilityDescription": "At 10th level, you gain the ability to consult with your ancestral spirits. When you do so, you cast the augury or clairvoyance spell, without using a spell slot or material components. Rather than creating a spherical sensor, this use of clairvoyance invisibly summons one Of your ancestral spirits to the chosen location. Wisdom is your spellcasting ability for these spells. After you cast either spell in this way, you can’t use this feature again until you finish a short or long rest."
                        },
                        {
                            "abilityTitle": "Vengeful Ancestors",
                            "abilityDescription": "At 14th level, your ancestral spirits grow powerful enough to retaliate. When you use your Spirit Shield to reduce the damage of an attack, the attacker takes an amount of force damage equal to the damage that your Spirit Shield prevents."
                        },
                    ]
        },
        {   
            "class":"Barbarian",
            "type": "Path of the Berserker",
            "description": "",
            "abilities": [
                        {
                            "abilityTitle": "Battlerager Armor",
                            "abilityDescription": "Battlerager Armor\nWhen you choose this path at 3rd level, you gain the ability to use spiked armor as a weapon (see below).\nWhile wearing spiked armor and are raging, you can use a bonus action to make one melee weapon attack with your armor spikes against a target within 5 feet of you. If the attack hits, the spikes deal 1d4 piercing damage, plus your Strength modifier.\nAdditionally, when you use the Attack action to grapple a creature, the target takes 3 piercing damage if your grapple check succeeds.\nSpiked Armor\nSpiked armor is a rare variety of medium armor, created only by battleragers. It consists of a leather coat and leggings covered in metal spikes.\nAC: 14 + Dexterity modifier (Max 2)\nStealth: Disadvantage\nWeight: 45 lbs\nCost: 75 GP"
                        },
                        {
                            "abilityTitle": "Reckless Abandon",
                            "abilityDescription": "Beginning at 6th level, when you use Reckless Attack while raging, you also gain temporary hit points equal to your Constitution modifier (minimum of 1). They vanish if any of them are left when your rage ends."
                        },
                        {
                            "abilityTitle": "Battlerager Charge",
                            "abilityDescription": "Beginning at 10th level, you can take the Dash action as a bonus action while you are raging."
                        },
                        {
                            "abilityTitle": "Spiked Retribution",
                            "abilityDescription": "Starting at 14th level, when a creature within 5 feet of you hits you with a melee attack, the attacker takes 3 piercing damage if you are raging, aren't incapacitated, and are wearing spiked armor."
                        },
                    ]
        },
        {
            "class":"Barbarian",
            "type": "Path of the Storm Herald",
            "description": "All barbarians harbor a fury within. Their rage grants them superior strength, durability, and speed. Barbarians who follow the Path of the Storm Herald learn to transform that rage into a mantle of primal magic, which swirls around them. When in a fury, a barbarian of this path taps into the forces of nature to create powerful magical effects. Storm heralds are typically elite champions who train alongside druids, rangers, and others sworn to protect nature. Other storm heralds hone their craft in lodges in regions wracked by storms, in the frozen reaches at the world’s end, or deep in the hottest deserts.",
            "abilities": [
                        {
                            "abilityTitle": "Storm Aura",
                            "abilityDescription": "Starting at 3rd level, you emanate a stormy, magical aura while you rage. The aura extends 10 feet from you in every direction, but not through total cover. Your aura has an effect that activates when you enter your rage, and you can activate the effect again on each of your turns as a bonus action. Choose desert, sea, or tundra. Your aura’s effect depends on that chosen environment, as detailed below. You can change your environment choice whenever you gain a level in this class. Your aura's effects require a saving throw, the DC equals 8 + your proficiency bonus + your Constitution modifier.\n\tDesert. When this effect is activated, all other creatures in your aura take 2 fire damage each. The damage increases when you reach certain levels in this class, increasing to 3 at 5th level, 4 at 10th level, 5 at 15th level, and 6 at 20th level.\n\tSea. When this effect is activated, you can choose one other creature you can see in your aura. The target must make a Dexterity saving throw. The target takes 1d6 lightning damage on a failed save, or half as much damage on a successful one. The damage increases when you reach certain levels in this class, increasing to 2d6 at 10th level, 3d6 at 15th level, and 4d6 at 20th level.\n\tTundra. When this effect is activated, each creature of your choice in your aura gains 2 temporary hit points, as icy spirits inure it to suffering. The temporary hit points increase when you reach certain levels in this class, increasing to 3 at 5th level, 4 at 10th level, 5 at 15th level, and 6 at 20th level."
                        },
                        {
                            "abilityTitle": "Storm Soul",
                            "abilityDescription": "At 6th level, the storm grants you benefits even when your aura isn’t active. The benefits are based on the environment you chose for your Storm Aura.\n\tDesert. You gain resistance to fire damage, and you don’t suffer the effects of extreme heat, as described in the Dungeon Master’s Guide. Moreover, as an action, you can touch a flammable object that isn’t being worn or carried by anyone else and set it on fire.\n\tSea.You gain resistance to lightning damage, and you can breathe underwater. You also gain a swimming speed of 30 feet.\n\tTundra. You gain resistance to cold damage, and you don’t suffer the effects of extreme cold, as described in the Dungeon Master’s Guide. Moreover, as an action, you can touch water and turn a 5-foot cube Of it into ice, which melts after 1 minute. This action fails if a creature is in the cube."
                        },
                        {
                            "abilityTitle": "Shielding the Storm",
                            "abilityDescription": "At 10th level, you learn to use your mastery of the storm to protect others. Each creature of your choice has the damage resistance you gained from the Storm Soul feature while the creature is in your Storm Aura."
                        },
                        {
                            "abilityTitle": "Raging Storm",
                            "abilityDescription": "At 14th level, the power of the storm you channel grows mightier, lashing out at your foes. The effect is based on the environment you chose for your Storm Aura.\n\tDesert.Immediately after a creature in your aura hits you with an attack, you can use your reaction to force that creature to make a Dexterity saving throw. On a failed save, the creature takes fire damage equal to half your barbarian level.\n\tSea. When you hit a creature in your aura with an attack, you can use your reaction to force that creature to make a Strength saving throw. On a failed save, the creature is knocked prone, as if struck by a wave.\n]tTundra. Whenever the effect of your Storm Aura is activated, you can choose one creature you can see in the aura. That creature must succeed on a Strength saving throw, or its speed is reduced to 0 until the start of your next turn, as magical frost covers it."
                        },
                    ]
        },
        /*      

        Ranger

        */
        {
            "class":"Ranger",
            "type": "Beast Master",
            "description": "The Beastmaster archetype embodies a friendship between the civilized races and the beasts of the world. United in focus, beast and ranger work as one to fight the monstrous foes that threaten civilization and the wilderness alike. Rmulating the Beastmaster archetype means committing yourself to this ideal, working in partnership with an animal as its companion and friend.            ",
            "abilities": [
                {
                    "abilityTitle": "Ranger’s Companion",
                    "abilityDescription": "At 3rd level, you gain a beast companion that accompanies you on your adventures and is trained to fight alongside you. Choose a beast that is no larger than Medium and that has a challenge rating of 1/4 or lower (the hawk, mastiff, and panther as examples).\nAdd your proficiency bonus to the beast's AC, attack rolls, and damage rolls, as well as to any saving throws and skills it is proficient in. Its hit point maximum equals its normal maximum or four times your ranger level, whichever is higher.\nThe beast obeys your commands as best as it can. It takes its turn on your initiative, though it doesn't take an action unless you command it to. On your turn, you can verbally command the beast where to move (no action required by you).        \nYou can use your action to verbally command it to take the Attack, Dash, Disengage, Dodge, or Help action. Once you have the Extra Attack feature, you can make one weapon attack yourself when you command the beast to take the Attack action.\nWhile traveling through your favored terrain with only the beast, you can move stealthily at a normal pace. lf the beast dies, you can obtain another one by spending 8 hours magically bonding with another beast that isn't hostile to you, either the same type of beast as before or a different one."
                },
                {
                    "abilityTitle": "Exceptional Training",
                    "abilityDescription": "Beginning at 7th level, on any of your turns when your beast companion doesn't attack, you can use a bonus action to command the beast to take the Dash, Disengage, Dodge, or Help action on its turn."
                },
                {
                    "abilityTitle": "Bestial Fury",
                    "abilityDescription": "Starting at 11th level, your beast companion can make two attacks when you command it to use the Attack action."
                },
                {
                    "abilityTitle": "Share Spells",
                    "abilityDescription": "Beginning at 15th level, when you cast a spell targeting yourself, you can also affect your beast companion with the spell if the beast is within 30 feet of YOU."
                },
            ]
        },
        {
            "class":"Ranger",
            "type": "Hunter",
            "description": "Emulating the Hunter archetype means accepting your place as a bulwark between civilization and the terrors of The Wilderness. As you walk the Hunter’s path, you learn specialized techniques for fighting the threats you face, from rampaging ogres and hordes of orcs to towering Giants and terrifying dragons.            ",
            "abilities": [
                {
                    "abilityTitle": "Hunter's Prey",
                    "abilityDescription": "At 3rd level, you gain one of the following features of your choice.\nColossus Slayer: Your tenacity can wear down the most potent foes. When you hit a creature with a weapon Attack, the creature takes an extra 1d8 damage if it’s below its hit point maximum. You can deal this extra damage only once per turn.\nGiant Killer: When a Large or larger creature within 5 feet of you hits or misses you with an Attack, you can use your reaction to Attack that creature immediately after its Attack, provided that you can see the creature.Horde Breaker: Once on each of your turns when you make a weapon Attack, you can make another Attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon."
                },
                {
                    "abilityTitle": "Defensive Tactics",
                    "abilityDescription": "At 7th level, you gain one of the following features of your choice.\nEscape the Horde: Opportunity Attacks against you are made with disadvantage.\nMultiattack Defense: When a creature hits you with an Attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn.\nSteel Will: You have advantage on saving throws against being Frightened."
                },
                {
                    "abilityTitle": "Multiattack",
                    "abilityDescription": "At 11th level, you gain one of the following features of your choice.\nVolley: You can use your action to make a ranged Attack against any number of creatures within 10 feet of a point you can see within your weapon’s range. You must have ammunition for each target, as normal, and you make a separate Attack roll for each target.\nWhirlwind Attack: You can use your action to make a melee Attack against any number of creatures within 5 feet of you, with a separate Attack roll for each target."
                },
                {
                    "abilityTitle": "Superior Hunter's Defense",
                    "abilityDescription": "At 15th level, you gain one of the following features of your choice.\nEvasion: When you are subjected to an effect, such as a red dragon’s fiery breath or a Lightning Bolt spell, that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.    \nStand Against the Tide: When a hostile creature misses you with a melee Attack, you can use your reaction to force that creature to repeat the same Attack against another creature (other than itself) of your choice.\nUncanny Dodge: When an attacker that you can see hits you with an Attack, you can use your reaction to halve the attack’s damage against you."
                },
            ]
        },
        /*      

        Bard

        */
        {
            "class":"Bard",
            "type": "College of Compulsion",
            "description": "This is a new bard college that focuses on charming enemies in battleWalk into an inn, get their clothes, their boots and their keys….and they'll thank you.",
            "abilities": [
                {
                    "abilityTitle": "Bonus Proficiencies",
                    "abilityDescription": "At level 3, the bard gains proficiency in constitution saving throws as well as the persuasion skill. If this skill is already a trained skill, gain one skill of choice."
                },
                {
                    "abilityTitle": "Lulling Voice",
                    "abilityDescription": "Also at level 3, the bard learns to weave soothing words of deception deep into the verbal components of charm spells. Whenever an opponent rolls a saving throw against one of the bard's charm spells, the bard can spend a bardic inspiration use to roll an inspiration die and lower the result of the opponent's saving throw by the result."
                },
                {
                    "abilityTitle": "Twin Charm",
                    "abilityDescription": "At level 6, the bard learns to double the effects of his single target charm spells. Whenever the bard casts a single target charm spell, as a bonus action he can effect a second target with the same casting of the spell."
                },
                {
                    "abilityTitle": "Combat Chamer",
                    "abilityDescription": "At level 14, the bard learns to thoroughly implant trust into his targets' minds. Damage taken by your charmed targets no longer breaks the spell, or allows the target an additional saving throw. This effect only applies during combat with one or more other non-charmed enemies."
                },
            ]
        },
        {
            "class":"Bard",
            "type": "College of Lore",
            "description": "",
            "abilities": [
                {
                    "abilityTitle": "Bonus Proficiencies",
                    "abilityDescription": "When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice.",
                },
                {
                    "abilityTitle": "Cutting Words",
                    "abilityDescription": "Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature’s roll. You can choose to use this feature after the creature makes its roll, but before the DM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can’t hear you or if it’s immune to being charmed."
                },
                {
                    "abilityTitle": "Additional Magical Secrets",
                    "abilityDescription": "At 6th level, you learn two spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you but don’t count against the number of bard spells you know."
                },
                {
                    "abilityTitle": "Peerless Skill",
                    "abilityDescription": "Starting at 14th level, when you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the DM tells you whether you succeed or fail."
                },
            ]
        },
        {
            "class":"Bard",
            "type": "College of Satire",
            "description": "",
            "abilities": [
                {
                    "abilityTitle": "Bonus Proficiencies",
                    "abilityDescription": "When you join the College of Satire at 3rd level, you gain proficiency with thieves’ tools. You also gain proficiency in Sleight of Hand and one additional skill of your choice. If you are already proficient with thieves’ tools or in Sleight of Hand, choose another skill proficiency for each proficiency you already have."
                },
                {
                    "abilityTitle": "Tumbling Fool",
                    "abilityDescription": "At 3rd level, you master a variety of acrobatic techniques that allow you to evade danger. As a bonus action, you can tumble. When you tumble, you gain the following benefits for the rest of your turn:\nYou gain the benefits of taking your choice of either the Dash or the Disengage actions.\nYou gain a climbing speed equal to your current speed.\nYou take half damage from falling."
                },
                {
                    "abilityTitle": "Fool's Insight",
                    "abilityDescription": "At 6th level, your ability to gather stories and lore gains a supernatural edge. You can cast detect thoughts up to a number of times equal to your Charisma modifier. You regain any expended uses of this ability after completing a long rest. If a creature resists your attempt to probe deeper and succeeds at its saving throw against your detect thoughts, it immediately suffers an embarrassing social gaffe. It might loudly pass gas, unleash a thunderous burp, trip and fall, or be compelled to tell a tasteless joke."
                },
                {
                    "abilityTitle": "Fool's Luck",
                    "abilityDescription": "Jesters seem to have a knack for pulling themselves out of tight situations, transforming what looks like sure failure into an embarrassing but effective success. At 14th level, you can expend one use of Bardic Inspiration after you fail an ability check, fail a saving throw, or miss with an attack roll. Roll a Bardic Inspiration die and add the number rolled to your attack, saving throw, or ability check, using the new result in place of the failed one.\nIf using this ability grants you a success on the attack, saving throw, or ability check, note the number you rolled on the Bardic Inspiration die. The DM can then apply that result as a penalty to an attack or check you make, and you cannot use this ability again until you suffer this drawback. When the DM invokes this penalty, describe an embarrassing gaffe or mistake you make as part of the affected die roll."
                },
            ]
        },
        {
            "class":"Bard",
            "type": "College of Swords",
            "description": "Bards of the College of Swords are called blades, and they entertain through daring feats of weapon prowess. Blades perform stunts such as sword swallowing, knife throwing and juggling, and mock combats. But though they use their weapons to entertain, they are also highly trained and skilled warriors in their own right. Their talent with weapons inspires many blades to lead double lives. One blade might use a circus troupe as cover for nefarious deeds such as assassination, robbery, and blackmail. Other blades strike at the wicked, bringing justice to bear against the cruel and powerful. Most troupes are happy to accept a blade’s talent for the excitement it adds to a performance, but few entertainers fully trust them.\nBlades who abandon lives as entertainers have often run into trouble that makes maintaining their secret activities impossible. A blade caught stealing or engaging in vigilante justice is too great a liability for most performer troupes. With their weapon skills as their greatest asset, these blades either take up work as enforcers for thieves’ guilds or strike out on their own as adventurers.",
            "abilities": [
                {
                    "abilityTitle": "Bonus Proficiencies",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "Fighting Style",
                    "abilityDescription": "At 3rd level, you learn to conduct impressive displays of skill with your weapons. When you use the Attack action on your turn and attack with a dagger, longsword, rapier, scimitar, or shortsword, you can attempt one of the following flourishes.\nDefensive Flourish\nYou spin your weapon around you in swift circles, creating a hypnotic display. As a bonus action, you expend one use of Bardic Inspiration, rolling a Bardic Inspiration die and applying the number rolled as a bonus to your AC until the start of your next turn.\nTrick Shooter’s Flourish.\nThis favorite trick of knife throwers allows you to expend one use of Bardic Inspiration as a bonus action. Roll a Bardic Inspiration die and apply the number rolled as a bonus to the next ranged attack roll you make with a dagger this turn. If the target of the attack is an unattended, inanimate object, the bonus equals double the die roll.\nUnnerving Flourish\nYour deadly display of combat prowess unnerves your opponents, leaving them cowering in fear and at your mercy. Whenever you reduce a creature to 0 hit points with a melee attack, you can use a bonus action to expend one use of Bardic Inspiration, and instead leave the creature at 1 hit point. The creature is frightened of you for a number of minutes equal to your Charisma modifier. It must also make a Charisma saving throw with a DC equal to your spellcasting DC + a bonus equal to\nthe roll of your Bardic Inspiration die. If the creature fails this saving throw, it answers truthfully any questions you ask it and obeys your direct orders while it is frightened by this effect."
                },
                {
                    "abilityTitle": "Extra Attack",
                    "abilityDescription": "Beginning at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
                },
                {
                    "abilityTitle": "Battle Magic",
                    "abilityDescription": "At 14th level, you have mastered the art of weaving spellcasting and weapon use into a single harmonious act. When you use your action to cast a bard spell, you can make one weapon attack as a bonus action."
                },
            ]
        },
        {
            "class":"Bard",
            "type": "College of Valor",
            "description": "",
            "abilities": [
                {
                    "abilityTitle": "Bonus Profinciencies",
                    "abilityDescription": "When you join the College of Valor at 3rd level, you gain proficiency with medium armor, shields, and martial weapons."
                },
                {
                    "abilityTitle": "Combat Inspiration",
                    "abilityDescription": "Also at 3rd level, you learn to inspire others in battle. A creature that has a Bardic Inspiration die from you can roll that die and add the number rolled to a weapon damage roll it just made. Alternatively, when an attack roll is made against the creature, it can use its reaction to roll the Bardic Inspiration die and add the number rolled to its AC against that attack, after seeing the roll but before knowing whether it hits or misses."
                },
                {
                    "abilityTitle": "Extra Attack",
                    "abilityDescription": "Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
                },
                {
                    "abilityTitle": "Battle Magic",
                    "abilityDescription": "At 14th level, you have mastered the art of weaving spellcasting and weapon use into a single harmonious act. When you use your action to cast a bard spell, you can make one weapon attack as a bonus action."
                },
            ]
        },
        /*      

        Wizard

        */
        {
            "class":"Wizard",
            "type": "Abjuration",
            "description": "The School of Abjuration emphasizes magic that blocks, banishes, or protects. Detractors of this school say that its tradition is about denial, negation rather than positive assertion. You understand, however, that ending harmful effects, protecting the weak, and banishing evil influences is anything but a philosophical void. It is a proud and respected vocation. Called abjurers, members of this school are sought when baleful spirits require exorcism, when important locations must be guarded against magical spying, and when portals to other planes of existence must be closed.",
            "abilities": [
                {
                    "abilityTitle": "Abjuration Savant",
                    "abilityDescription": "Beginning when you select this school at 2nd level, the gold and time you must spend to copy an abjuration spell into your spellbook is halved."
                },
                {
                    "abilityTitle": "Arcane Ward",
                    "abilityDescription": "Starting at 2nd level, you can weave magic around yourself for protection. When you cast an abjuration spell of 1st level or higher, you can simultaneously use a strand of the spell's magic to create a magical ward on yourself that lasts until you finish a long rest. The ward has hit points equal to twice your wizard level + your Intelligence modifier. Whenever you take damage, the ward takes the damage instead. If this damage reduces the ward to 0 hit points, you take any remaining damage.\nWhile the ward has 0 hit points, it can't absorb damage, but its magic remains. Whenever you cast an abjuration spell of 1st level or higher, the ward regains a number of hit points equal to twice the level of the spell. Once you create the ward, you can't create it again until you finish a long rest."
                },
                {
                    "abilityTitle": "Projected Ward",
                    "abilityDescription": "Starting at 6th level, when a creature that you can see within 10 metres of you takes damage, you can use your reaction to cause your Arcane Ward to absorb that damage. If this damage reduces the ward to 0 hit points, the warded creature takes any remaining damage."
                },
                {
                    "abilityTitle": "Immproved Abjuration",
                    "abilityDescription": "Beginning at 10th level, when you cast an abjuration spell that requires you to make an ability check as a part of casting that spell (as in counterspell and dispel magic), you add your proficiency bonus to that ability check."
                },
                {
                    "abilityTitle": "Spell Resistance",
                    "abilityDescription": "Starting at 14th level, you have advantage on saving throws against spells.\nFurthermore, you have +1 resistance to damage from spells. This feature can not increase your resistance above 1."
                },
            ]
        },
        {
            "class":"Wizard",
            "type": "Bladesong",
            "description": "Bladesingers are those who bravely defend their people and lands. They are wizards who master a school of sword fighting grounded in a tradition of arcane magic. In combat, a bladesinger uses a series of intricate, elegant manoeuvres that fend off harm and allow the bladesinger to channel magic into devastating attacks and a cunning defence.",
            "abilities": [
                {
                    "abilityTitle": "Training in War and Song",
                    "abilityDescription": "When you adopt this tradition at 2nd level, you gain proficiency with light armour, and you gain proficiency with one type of one-handed melee weapon of your choice.\nYou also gain proficiency in the Persuasion skill if you don't already have it."
                },
                {
                    "abilityTitle": "Bladesong",
                    "abilityDescription": "Starting at 2nd level, you can invoke a secret magic called the Bladesong, provided that you aren't wearing medium or heavy armour or using a shield. It graces you with supernatural speed, agility, and focus. You can use a half action to start the Bladesong, which lasts for 1 minute. It ends early if you are incapacitated, if you wear medium or heavy armour or a shield, or if you use two hands to make an attack with a weapon. You can also dismiss the Bladesong at any time you choose (no action required).\nWhile your Bladesong is active, you gain the following benefits:\nYou gain a bonus to your ER equal to your Intelligence modifier (minimum of +1).\nYour walking speed increases by 4 metres.\nYou have advantage on Acrobatics checks.\nYou gain a bonus to any Constitution saving throw you make to maintain your concentration on a spell. The bonus equals your Intelligence modifier (minimum of +1).\nYou can use this feature twice. You regain all expended uses of it when you finish a short or long rest."
                },
                {
                    "abilityTitle": "Extra Attack",
                    "abilityDescription": "Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
                },
                {
                    "abilityTitle": "Song of Defense",
                    "abilityDescription": "Beginning at 10th level, you can direct your magic to absorb damage while your Bladesong is active. When you take damage, you can use your reaction to expend one spell slot and reduce that damage to you by an amount equal to five times the spell slots level."
                },
                {
                    "abilityTitle": "Song of Victory",
                    "abilityDescription": "Starting at 14th level, you add your Intelligence modifier (minimum of +1) to the damage of your melee weapon attacks while your Bladesong is active."
                },
            ]
        },
        {
            "class":"Wizard",
            "type": "Conjuration",
            "description": "As a conjurer, you favour spells that produce objects and creatures out of thin air. You can conjure billowing clouds of killing fog or summon creatures from elsewhere to fight on your behalf. As your mastery grows, you learn spells of transportation and can teleport yourself across vast distances, even to other planes of existence, in an instant.",
            "abilities": [
                {
                    "abilityTitle": "Conjuration Savant",
                    "abilityDescription": "Beginning when you select this school at 2nd level, the gold and time you must spend to copy a conjuration spell into your spellbook is halved."
                },
                {
                    "abilityTitle": "Minor Conjuration",
                    "abilityDescription": "Starting at 2nd level when you select this school, you can use your full action to conjure up an inanimate object in your hand or on the ground in an unoccupied space that you can see within 4 metres of you. This object can be no larger than 1 metre on a side and weigh no more than 10 pounds, and its form must be that of a non-magical object that you have seen. The object is visibly magical, radiating dim light out to 2 metres. The object disappears after 1 hour, when you use this feature again, or if it takes any damage."
                },
                {
                    "abilityTitle": "Benign Transposition",
                    "abilityDescription": "Starting at 6th level, you can use your full action to teleport up to 10 metres to an unoccupied space that you can see. Alternatively, you can choose a space within range that is occupied by a Small or Medium creature. If that creature is willing, you both teleport, swapping places.\nOnce you use this feature, you can't use it again until you finish a long rest or you cast a conjuration spell of 1st level or higher."
                },
                {
                    "abilityTitle": "Focused Conjuration",
                    "abilityDescription": "Beginning at 10th level, while you are concentrating on a conjuration spell, your concentration can't be broken as a result of taking damage."
                },
                {
                    "abilityTitle": "Durable Summons",
                    "abilityDescription": "Starting at 14th level, any creature that you summon or create with a conjuration spell has 30 shielding."
                },
            ]
        },
        {
            "class":"Wizard",
            "type": "Divination",
            "description": "",
            "abilities": [
                {
                    "abilityTitle": "Divination Savant",
                    "abilityDescription": "Beginning when you select this school at 2nd level, the gold and time you must spend to copy a divination spell into your spellbook is halved."
                },
                {
                    "abilityTitle": "Portent",
                    "abilityDescription": "Starting at 2nd level when you choose this school, glimpses of the future begin to press in on your awareness. When you finish a long rest, roll two d20s and record the numbers rolled. You can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with one of these foretelling rolls. You must choose to do so before the roll, and you can replace a roll in this way only once per turn. Each foretelling roll can be used only once. When you finish a long rest, you lose any unused foretelling rolls."
                },
                {
                    "abilityTitle": "Expert Divination",
                    "abilityDescription": "Beginning at 6th level, casting divination spells comes so easily to you that it expends only a fraction of your spellcasting efforts. When you cast a divination spell of 2nd level or higher using a spell slot, you regain one expended spell slot. The slot you regain must be of a level lower than the spell you cast and can't be higher than 5th level."
                },
                {
                    "abilityTitle": "Third Eye",
                    "abilityDescription": "Starting at 10th level, you can use your action to increase your powers of perception. When you do so, choose one of the following benefits, which lasts until you are incapacitated or you take a short or long rest. You can't use the feature again until you finish a rest.\nDarkvision. You gain darkvision out to a range of 60 feet, as described in chapter 8.\nEthereal Sight. You can see into the Ethereal Plane within 60 feet of you.\nGreater Comprehension. You can read any language.\nSee Invisibility. You can see invisible creatures and objects within 10 feet of you that are within line of sight."
                },
                {
                    "abilityTitle": "Greater Portent",
                    "abilityDescription": "Starting at 14th level, the visions in your dreams intensify and paint a more accurate picture in your mind of what is to come. You roll three d20s for your Portent feature, rather than two."
                },
            ]
        },
        {
            "class":"Wizard",
            "type": "Enchantment",
            "description": "As a member of the School of Enchantment, you have honed your ability to magically entrance and beguile other people and monsters. Some enchanters are peacemakers who bewitch the violent to lay down their arms and charm the cruel into showing mercy. Others are tyrants who magically bind the unwilling into their service. Most enchanters fall somewhere in between.",
            "abilities": [
                {
                    "abilityTitle": "Enchantment Savant",
                    "abilityDescription": "Beginning when you select this school at 2nd level, the gold and time you must spend to copy an enchantment spell into your spellbook is halved."
                },
                {
                    "abilityTitle": "Hypnotic Gaze",
                    "abilityDescription": "Starting at 2nd level when you choose this school, your soft words and enchanting gaze can magically enthrall another creature. As a full action, choose one creature that you can see within 2 metres of you. If the target can see or hear you, it must succeed on a Wisdom saving throw against your wizard spell save DC or be charmed by you until the end of your next turn. The charmed creature's speed drops to 0, and the creature is incapacitated and visibly dazed.\nOn subsequent turns, you can use your full action to maintain this effect, extending its duration until the end of your next turn. However, the effect ends if you move more than 2 metres away from the creature, if the creature can neither see nor hear you, or if the creature takes damage.\nOnce the effect ends, or if the creature succeeds on its initial saving throw against this effect, you can't use this feature on that creature again until you finish a long rest."
                },
                {
                    "abilityTitle": "Instinctive Charm",
                    "abilityDescription": "Beginning at 6th level, when a creature you can see within 10 metres of you makes an attack roll against you, you can use your reaction to divert the attack, provided that another creature is within the attack’s range. The attacker must make a Wisdom saving throw against your wizard spell save DC. On a failed save, the attacker must target the creature that is closest to it, not including you or itself. If multiple creatures are closest, the attacker chooses which one to target. On a successful save, you can't use this feature on the attacker again until you finish a long rest. You must choose to use this feature before knowing whether the attack hits or misses. Creatures that can't be charmed are immune to this effect."
                },
                {
                    "abilityTitle": "Split Enchantment",
                    "abilityDescription": "Starting at 10th level, when you cast an enchantment spell of 1st level or higher that targets only one creature, you can have it target a second creature."
                },
                {
                    "abilityTitle": "Alter Memories",
                    "abilityDescription": "At 14th level, you gain the ability to make a creature unaware of your magical influence on it. When you cast an enchantment spell to charm one or more creatures, you can alter one creature's understanding so that it remains unaware of being charmed.\nAdditionally, once before the spell expires, you can use your action to try to make the chosen creature forget some of the time it spent charmed. The creature must succeed on an Intelligence saving throw against your wizard spell save DC or lose a number of hours of its memories equal to 1 + your Charisma modifier (minimum 1). You can make the creature forget less time, and the amount of time can't exceed the duration of your enchantment spell."
                },
            ]
        },
        {
            "class":"Wizard",
            "type": "Evocation",
            "description": "You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid. Some evokers find employment in military forces, serving as artillery to blast enemy armies from afar. Others use their spectacular power to protect the weak, while some seek their own gain as bandits, adventurers, or aspiring tyrants.",
            "abilities": [
                {
                    "abilityTitle": "Evocation Savant",
                    "abilityDescription": "Beginning when you select this school at 2nd level, the gold and time you must spend to copy an evocation spell into your spellbook is halved."
                },
                {
                    "abilityTitle": "Sculpt Spells",
                    "abilityDescription": "Beginning at 2nd level, you can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell's level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save."
                },
                {
                    "abilityTitle": "Potent Cantrip",
                    "abilityDescription": "Starting at 6th level, your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip's damage (if any) but suffers no additional effect from the cantrip."
                },
                {
                    "abilityTitle": "Empowered Evocation",
                    "abilityDescription": "Beginning at 10th level, you can add your Intelligence modifier to the damage roll of any wizard evocation spell you cast."
                },
                {
                    "abilityTitle": "Overchannel",
                    "abilityDescription": "Starting at 14th level, you can increase the power of your simpler spells. When you cast a wizard spell of 5th level or lower that deals damage, you can deal maximum damage with that spell.\nThe first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take 2d12 force damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the force damage per spell level increases by 1d12."
                },
            ]
        },
        {
            "class":"Wizard",
            "type": "Illusion",
            "description": "You focus your studies on magic that dazzles the senses, befuddles the mind, and tricks even the wisest folk. Your magic is subtle, but the illusions crafted by your keen mind make the impossible seem real. Some illusionists—including many foxin wizards—are benign tricksters who use their spells to entertain. Others are more sinister masters of deception, using their illusions to frighten and fool others for their personal gain.",
            "abilities": [
                {
                    "abilityTitle": "Illusion Savant",
                    "abilityDescription": "Beginning when you select this school at 2nd level, the gold and time you must spend to copy an illusion spell into your spellbook is halved."
                },
                {
                    "abilityTitle": "Improved Minor Illusion",
                    "abilityDescription": "When you choose this school at 2nd level, you learn the minor illusion cantrip. If you already know this cantrip, you learn a different wizard cantrip of your choice. The cantrip doesn't count against your number of cantrips known.\nWhen you cast minor illusion, you can create both a sound and an image with a single casting of the spell."
                },
                {
                    "abilityTitle": "Malleable Illusions",
                    "abilityDescription": "Starting at 6th level, when you cast an illusion spell that has a duration of 1 minute or longer, you can use your full action to change the nature of that illusion (using the spell's normal parameters for the illusion), provided that you can see the illusion."
                },
                {
                    "abilityTitle": "Illusory Self",
                    "abilityDescription": "Beginning at 10th level, you can create an illusory duplicate of yourself as an instant, almost instinctual reaction to danger. When a creature makes an attack roll against you, you can use your reaction to interpose the illusory duplicate between the attacker and yourself. The attack automatically misses you, then the illusion dissipates.\nOnce you use this feature, you can't use it again until you finish a short or long rest."
                },
                {
                    "abilityTitle": "Illusory Reality",
                    "abilityDescription": "By 14th level, you have learned the secret of weaving shadow magic into your illusions to give them a semi-reality. When you cast an illusion spell of 1st level or higher, you can choose one inanimate, non-magical object that is part of the illusion and make that object real. You can do this on your turn as a half action while the spell is ongoing. The object remains real for 1 minute. For example, you can create an illusion of a bridge over a chasm and then make it real long enough for your allies to cross. The object can't deal damage or otherwise directly harm anyone."
                },
            ]
        },
        {
            "class":"Wizard",
            "type": "Necromancy",
            "description": "",
            "abilities": [
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
            ]
        },
        {
            "class":"Wizard",
            "type": "Thaumaturgy",
            "description": "Your study of the general theory and practice of magic allows you to more fully understand and manipulate the workings of the Weave.",
            "abilities": [
                {
                    "abilityTitle": "Thaumaturgical Savant",
                    "abilityDescription": "Beginning when you select this school at 2nd level, the time (but not the gold cost) you spend to copy spells into your spellbook is halved."
                },
                {
                    "abilityTitle": "Arcane Identification",
                    "abilityDescription": "When you choose this school at 2nd level, you learn the Identify spell (choose another 1st level spell if already known) and can cast it without the material components. You may cast the spell once without using a spell slot and regain the ability to cast it this way after a short rest"
                },
                {
                    "abilityTitle": "Thaumaturgical Disruption",
                    "abilityDescription": "At level 6, you learn Dispel Magic and Counterspell (choose one or two other spells if one or both are already known). The spell DC for spells cast at a higher level than the spell slot you use is 8 + the spell level minus the level of the spell slot you use (8 + spell level - spell slot used). You may also choose to cast these spells using 1st or 2nd level spell slots."
                },
                {
                    "abilityTitle": "Arcane Concentration",
                    "abilityDescription": "Starting at level 10, you gain the ability to maintain the effects of two concentration spells at once. Any factor that affects your ability to maintain concentration is applied individually to each effect (e.g. upon taking damage make a Constitution saving throw for each spell)."
                },
                {
                    "abilityTitle": "Thaumaturgical Control",
                    "abilityDescription": "At level 14, you gain the ability to redirect the effects of concentration spells that target individual creatures, cast by you or another caster, from one target to a new recipient. The spells may be capable of targeting more than one creature (e.g. Slow or Hold Person) as long as the targeting is on individual creatures and not due to area of effect considerations (e.g. Cloud Kill). As a bonus action, you may change the target of any one concentration spell cast by you (subject to the limitation above) to a new recipient (including yourself). The new recipient, if it's unwilling, may make a saving throw against your spell save DC.\nThe duration of the spell continues from when the spell was first cast. Any effects that would otherwise be permanent after a full duration of concentration (e.g. True Polymorph) instead end upon expiration of the spell. As an action you may choose one target, including yourself, under the effect of one or more concentration spells cast by another caster (again, subject to the limitation above), and redirect one effect to a new recipient (including yourself, but not to the original caster unless it's willing). You don't need to know the spell or have the ability to cast it (such as a cleric or druid spell), but it must be of a level you can cast. If the caster is willing, the redirection automatically succeeds. Otherwise make an ability check, with advantage, using your spell casting ability against the spell save DC of the original caster.\nIf the target is the original caster, make the check with disadvantage instead. If the spell is from a tradition in which the caster has specialized (e.g. enchantment or transmutation) you also have disadvantage. On a successful check, choose a new recipient of the effect, who, again, may make a saving throw against your spell save DC if it's unwilling (if there are no other potential recipients besides the original caster, the spell simply ends). You then assume the concentration requirements, the spell continues from the original duration, and on your next turn you are considered the original caster for any further redirection effects (and thus you may now redirect any effects to the actual original caster). Again, any effects that would otherwise be permanent after a full duration of concentration instead end upon expiration of the spell."
                },
            ]
        },
        {
            "class":"Wizard",
            "type": "Transmutation",
            "description": "You are a student of spells that modify energy and matter. To you, the world is not a fixed thing, but eminently mutable, and you delight in being an agent of change. You wield the raw stuff of creation and learn to alter both physical forms and mental qualities. Your magic gives you the tools to become a smith on reality's forge. Some transmuters are tinkerers and pranksters, turning people into toads and transforming copper into silver for fun and occasional profit. Others pursue their magical studies with deadly seriousness, seeking the power of the gods to make and destroy worlds.",
            "abilities": [
                {
                    "abilityTitle": "Transmutation Savant",
                    "abilityDescription": "Beginning when you select this school at 2nd level, the gold and time you must spend to copy a transmutation spell into your spellbook is halved."
                },
                {
                    "abilityTitle": "Minor Alchemy",
                    "abilityDescription": "Starting at 2nd level when you select this school, you can temporarily alter the physical properties of one non-magical object, changing it from one substance into another. You perform a special alchemical procedure on one object composed entirely of wood, stone (but not a gemstone), iron, copper, or silver, transforming it into a different one of those materials. For each 10 minutes you spend performing the procedure, you can transform up to 30 litres of material. After 1 hour, or until you lose your concentration (as if you were concentrating on a spell), the material reverts to its original substance."
                },
                {
                    "abilityTitle": "Transmuter's Stone",
                    "abilityDescription": "Starting at 6th level, you can spend 8 hours creating a transmuter's stone that stores transmutation magic. You can benefit from the stone yourself or give it to another creature. A creature gains a benefit of your choice as long as the stone is in the creature's possession. When you create the stone, choose the benefit from the following options:\nDarkvision out to a range of 20 metres\nAn increase to speed of 4 metres while the creature is unencumbered\nProficiency in Constitution saving throws\n+1 resistance to acid, cold, fire, lightning, or thunder damage (your choice whenever you choose this benefit)\nEach time you cast a transmutation spell of 1st level or higher, you can change the effect of your stone if the stone is on your person.\nIf you create a new transmuter's stone, the previous one ceases to function."
                },
                {
                    "abilityTitle": "Shapechanger",
                    "abilityDescription": "At 10th level, you add the polymorph spell to your spellbook, if it is not there already. You can cast polymorph without expending a spell slot. When you do so, you can target only yourself and transform into a beast whose challenge rating is 1 or lower.\nOnce you cast polymorph in this way, you can't do so again until you finish a short or long rest, though you can still cast it normally using an available spell slot."
                },
                {
                    "abilityTitle": "Master Transmuter",
                    "abilityDescription": "Starting at 14th level, you can use your action to consume the reserve of transmutation magic stored within your transmuter's stone in a single burst. When you do so, choose one of the following effects. Your transmuter's stone is destroyed and can't be remade until you finish a long rest."
                },
            ]
        },
        {
            "class":"Wizard",
            "type": "Necromancy",
            "description": "The School of Necromancy explores the cosm ic forces of life, death, and undeath. As you focus your studies in this tradition, you learn to manipulate the energy that animates all living things. As you progress, you learn to sap the life force from a creature as your magic destroys its body, transforming that vital energy into magical power you can manipulate. Most people see necromancers as menacing, or evenvillainous, due to the close association with death. Not all necromancers are evil, but the forces they manipulate are considered taboo by many societies.",
            "abilities": [
                {
                    "abilityTitle": "Necromancy Savant",
                    "abilityDescription": "Beginning when you select this school at 2nd level, the gold and time you must spend to copy a necromancy spell into your spellbook is halved."
                },
                {
                    "abilityTitle": "Grim Harvest",
                    "abilityDescription": "At 2nd level, you gain the ability to reap life energy from creatures you kill with your spells. Once per turn when you kill one or more creatures with a spell of 1st level or higher, you regain hit points equal to twice the spell’s level, or three times its level if the spell belongs to the School of Necromancy. You don’t gain this benefit for killing constructs or undead."
                },
                {
                    "abilityTitle": "Undead Thralls",
                    "abilityDescription": "At 6th level, you add the animate dead spell to your spellbook if it is not there already. When you cast animate dead, you can target one additional corpse or pile of bones, creating another zombie or skeleton, as appropriate. Whenever you create an undead using a necromancy spell, it has additional benefits:\nThe creature’s hit point maximum is increased by an amount equal to your wizard level.\nThe creature adds your proficiency bonus to its weapon damage rolls."
                },
                {
                    "abilityTitle": "Injured to Undeath",
                    "abilityDescription": "Beginning at 10th level, you have resistance to necrotic damage, and your hit point maximum can't be reduced. You have spent so much time dealing with undead and the forces that animate them that you have become inured to some of their worst effects."
                },
                {
                    "abilityTitle": "Command Thrall",
                    "abilityDescription": "Starting at 14th level, you can use magic to bring undead under your control, even those created by other wizards. As an action, you can choose one undead that you can see within 60 feet of you. That creature must make a Charisma saving throw against your wizard spell save DC. If it succeeds, you can’t use this feature on it again. If it fails, it becomes friendly to you and obeys your commands until you use this feature again. Intelligent undead are harder to control in this way. If the target has an Intelligence of 8 or higher, it has advantage on the saving throw. If it fails the saving throw and has an Intelligence of 12 or higher, it can repeat the saving throw at the end of every hour until it succeeds and breaks free."
                },
            ]
        },
        /*      

        Cleric

        */
        {
            "class":"Cleric",
            "type": "Arcana Domain",
            "description": "",
            "abilities": [
                {
                    "abilityTitle": "Arcane Initiate",
                    "abilityDescription": "When you choose this domain at 1st level, you gain proficiency in the Arcana skill, and you gain two cantrips of your choice from the Wizard Spell List. For you, these cantrips count as cleric cantrips."
                },
                {
                    "abilityTitle": "Channel Divinity: Arcane Abjuration",
                    "abilityDescription": "Starting at 2nd level, you can use your Channel Divinity to abjure otherworldly creatures. As an action, you present your holy symbol and one celestial, elemental, fey, or fiend of your choice with 30 feet of you must make a Wisdom saving throw, provided it can see or hear you. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.\nA turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.\nAfter you reach 5th level, when a creature fails its saving throw against your Arcane Abjuration feature, the creature is banished for 1 minute (as the banishment spell, no concentration required) if it isn't on its plane of origin and its challenge rating is at or below a certain threshold, as shown on the table below."
                },
                {
                    "abilityTitle": "Spell Breaker",
                    "abilityDescription": "Starting at 6th level, when you restore hit points to an ally with a spell of 1st level or higher, you can also end one spell of your choice on that creature. The level of the spell you end must be equal or lower than the level of the spell slot you use to cast the healing spell."
                },
                {
                    "abilityTitle": "Potent Spellcasting",
                    "abilityDescription": "Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip."
                },
                {
                    "abilityTitle": "Arcane Mastery",
                    "abilityDescription": "At 17th level, you chose four spells from the Wizard Spell List, one for each of the following levels: 6th, 7th, 8th, and 9th. You add them to your list of domain spells. Like your other domain spells, they are always prepared and count as cleric spells for you."
                },
            ]
        },
        {
            "class":"Cleric",
            "type": "Death Domain",
            "description": "The Death domain is concerned with the forces that cause death, as well as the negative energy that gives rise to undead creatures. Deities such as Chemosh, Myrkul, and WeeJas are patrons of necromancers, death knights, liches, mummy lords, and vampires. Gods of the Death domain also embody murder (Anubis, Bhaal, and Pyremius), pain (Iuz or Loviatar), disease or poison (Incabulos, Talona, or Morgion), and the underworld (Hades and He!).",
            "abilities": [
                {
                    "abilityTitle": "Bonus Proficiency",
                    "abilityDescription": "When the cleric chooses this domain at 1st level, he or she gains proficiency with martial weapons."
                },
                {
                    "abilityTitle": "Reaper",
                    "abilityDescription": "At 1st level, the cleric learns one necromancy cantrip of his or her choice from any spell list. When the cleric casts a necromancy cantrip that normally targets only one creature, the spell can instead target two creatures within range and within 5 feet of each other."
                },
                {
                    "abilityTitle": "Channel Divinity: Touch of Death",
                    "abilityDescription": "Starting at 2nd level, the cleric can use Channel Divinity to destroy another creature's life force by touch.When the cleric hits a creature with a melee attack, the cleric can use Channel Divinity to deal extra necrotic damage to the target. The damage equals 5 + twice his or her cleric level."
                },
                {
                    "abilityTitle": "Inescapable Destruction",
                    "abilityDescription": "Starting at 6th level, the cleric's ability to channel negative energy becomes more potent. Necrotic damage dealt by the character's cleric spells and Channel Divinity options ignores resistance to necrotic damage."
                },
                {
                    "abilityTitle": "Divine Strike",
                    "abilityDescription": "At 8th level, the cleric gains the ability to infuse his or her weapon strikes with necrotic energy. Once on each of the cleric's turns when he or she hits a creature with a weapon attack, the cleric can cause the attack to deal an extra 1d8 necrotic damage to the target. When the cleric reaches 14th level, the extra damage increases to 2d8."
                },
                {
                    "abilityTitle": "Improved Reaper",
                    "abilityDescription": "Starting at 17th level, when the cleric casts a Necromancy spell of 1st through 5th level that targets only one creature, the spell can instead target two creatures within range and within 5 feet of each other. If the spell consumes its material components, the cleric must provide them for each target."
                },
            ]
        },
        {
            "class":"Cleric",
            "type": "Forge Domain",
            "description": "The gods of the forge are patrons of artisans who work with metal, from a humble blacksmith who keeps a village in horseshoes and plow blades to the mighty elf artisan whose diamond-tipped arrows of mithral have felled demon lords. The gods of the forge teach that, with patience and hard work, even the most intractable metal can transform from a lump of ore to a beautifully wrought object. Clerics of these deities quest to search for objects lost to the forces of darkness, liberate mines overrun by orcs, and uncover rare and wondrous materials necessary to create potent magic items. Followers of these gods take great pride in their work, and they are willing to craft and use heavy armor and powerful weapons to protect them. Deities of this domain include Gond, Reorx, Onatar, Moradin,Hephaestus, and Goibhniu.",
            "abilities": [
                {
                    "abilityTitle": "Bonus Proficiency",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "Blessing of the Forge",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "Channel Divinity: Artisan's Blessing",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "Soul of the Forge",
                    "abilityDescription": "Starting at 6th level, your mastery of the forge grants you a number of special abilities:\nYou gain a +1 bonus to AC while you are wearing medium or heavy armor.\nYou gain resistance to fire damage.\nWhen you hit a construct with an attack, you deal additional force damage to it equal to your cleric level."
                },
                {
                    "abilityTitle": "Divine Strike",
                    "abilityDescription": "At 8th level, you gain the ability to infuse your weapon strikes with the fiery power of the forge. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 fire damage to the target. When you reach 14th level, the extra damage increases to 2d8."
                },
                {
                    "abilityTitle": "Saint of Forge and Fire",
                    "abilityDescription": "At 17th level, your affinity for fire and metal becomes more powerful due to your deity’s blessing. You gain immunity to fire damage, andwhile you’re wearing heavy armor, you have resistance to bludgeoning, piercing, and slashing damage from non-magical attacks."
                },
            ]
        },
        {
            "class":"Cleric",
            "type": "Grave Domain",
            "description": "Gods of the grave watch over the line between life and death. To these deities, death and the afterlife are a foundational part of the multiverse’s workings. To resist death, or to desecrate the dead’s rest, is an abomination. Deities of the grave include Kelemvor, Wee Jas, the ancestral spirits of the Undying Court, Hades, Anubis, and Osiris. These deities teach their followers to respect the dead and pay them due homage. Followers of these deities seek to put restless spirits to rest, destroy the undead wherever they find them, and ease the suffering of dying creatures. Their magic also allows them to stave off a creature’s death, though they refuse to use such magic to extend a creature’s lifespan beyond its mortal limits.",
            "abilities": [
                {
                    "abilityTitle": "Bonus Proficiency",
                    "abilityDescription": "When you choose this domain at 1st level, you gain proficiency with heavy armor."
                },
                {
                    "abilityTitle": "Circle of Mortality",
                    "abilityDescription": "At 1st level, you gain the ability to manipulate the line between life and death. When you cast a spell that restores hit points to a living creature currently at 0, treat any dice rolled to determine the spell’s healing as having rolled their maximum result. In addition, if you have the spare the dying cantrip, you can cast it as a bonus action."
                },
                {
                    "abilityTitle": "Eyes of the Grave",
                    "abilityDescription": "Starting at 1st level, you gain an innate sense of creatures whose existence is an insult to the natural cycle of life. If you spend 1 minute in uninterrupted contemplation, you can determine the presence and nature of undead creatures in the area. This detection extends up to 1 mile in all directions. You learn the number of undead and their distance and direction from you. In addition, you learn the creature type of the undead in that area that has the highest challenge rating.Once you use this feature, you can’t use it again until you finish a long rest."
                },
                {
                    "abilityTitle": "Channel Divinity: Path of the Grave",
                    "abilityDescription": "Starting at 2nd level, you can use your Channel Divinity to mark another creature’s life force for termination. As an action, you touch a creature. The next time that creature takes damage from a spell or an attack from you or an ally, it is vulnerable to that spell or attack’s damage. If the source of damage has multiple damage types, the creature is vulnerable to all of them. The vulnerability applies only to the first time that source inflicts damage, and then ends. If the creature has resistance or is immune tothe damage, it instead loses its resistance or immunity against that spell or attack when it first applies damage."
                },
                {
                    "abilityTitle": "Sentinel at Death's Door",
                    "abilityDescription": "Starting at 6th level, you gain the ability to impede death’s progress. As a reaction when you or an ally that you can see within 30 feet of you suffers a critical hit, you can turn that attack into a normal hit. Any effects triggered by a critical hit are canceled. Once you use this feature, you can’t use it again until you finish a short or long rest."
                },
                {
                    "abilityTitle": "Divine Strike",
                    "abilityDescription": "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 necrotic damage. When you reach 14th level, the extra damage increases to 2d8."
                },
                {
                    "abilityTitle": "Keeper of Souls",
                    "abilityDescription": "At 17th level, you gain the ability to manipulate the boundary between life and death. When an enemy you can see dies within 30 feet of you, you or one ally of your choice that is within 30 feet of you regains hit points equal to the enemy’s number of Hit Dice. You can use thisfeature as long as you aren’t incapacitated, but no more than once per round."
                },
            ]
        },
        {
            "class":"Cleric",
            "type": "Knowledge Domain",
            "description": "The gods of knowledge—including Oghma, Boccob, Gilean, Aureon, and Thoth—value learning and understanding above all. Some teach that knowledge is to be gathered and shared in libraries and universities, or promote the practical knowledge of craft and invention. Some deities hoard knowledge and keep its secrets to themselves. And some promise their followers that they will gain tremendous power if they unlock the secrets of the multiverse. Followers of these gods study esoteric lore, collect old tomes, delve into the secret places of the earth, and learn all they can. Some gods of knowledge promote the practical knowledge of craft and invention, including smith deities like Gond, Reorx, Onatar, Moradin, Hephaestus, and Goibhniu.",
            "abilities": [
                {
                    "abilityTitle": "Blessings of Knowledge",
                    "abilityDescription": "At 1st level, you learn two languages of your choice. You also become proficient in your choice of two of the following skills: Arcana, History, Nature, or Religion. Your proficiency bonus is doubled for any ability check you make that uses either of those skills."
                },
                {
                    "abilityTitle": "Channel Divinity: Knowledge of the Ages",
                    "abilityDescription": "Starting at 2nd level, you can use your Channel Divinity to tap into a divine well of knowledge. As an action, you choose one skill or tool. For 10 minutes, you have proficiency with the chosen skill or tool."
                },
                {
                    "abilityTitle": "Channel Divinity: Read Thoughts",
                    "abilityDescription": "At 6th level, you can use your Channel Divinity to read a creature’s thoughts. You can then use your access to the creature’s mind to command it. As an action, choose one creature that you can see within 60 feet of you. That creature must make a Wisdom saving throw. If the creature succeeds on the saving throw, you can’t use this feature on it again until you finish a long rest.If the creature fails its save, you can read its surface thoughts (those foremost in its mind, reflecting its current emotions and what it is actively thinking about) when it is within 60 feet of you. This effect lasts for 1 minute. During that time, you can use your action to end this effect and cast the suggestion spell on the creature without expending a spell slot. The target automatically fails its saving throw against the spell."
                },
                {
                    "abilityTitle": "Potent Spellcasting",
                    "abilityDescription": "Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip."
                },
                {
                    "abilityTitle": "Visions of the Past",
                    "abilityDescription": "Starting at 17th level, you can call up visions of the past that relate to an object you hold or your immediate surroundings. You spend at least 1 minute in meditation and prayer, then receive dreamlike, shadowy glimpses of recent events. You can meditate in this way for a number o f minutes equal to your Wisdom score and must maintain concentration during that time, as if you were casting a spell.\nOnce you use this feature, you can’t use it again until you finish a short or long rest.\nObject Reading\nHolding an object as you meditate, you can see visions o f the object’s previous owner. After meditating for 1 minute, you learn how the owner acquired and lost the object, as well as the most recent significant event involving the object and that owner. If the object was owned by another creature in the recent past (within a number o f days equal to your Wisdom score), you can spend 1 additional minute for each owner to learn the same information about that creature.Area Reading\nAs you meditate, you see visions o f recent events in your immediate vicinity (a room, street, tunnel, clearing, or the like, up to a 50-foot cube), going back a number o f days equal to your Wisdom score. For each minute you meditate, you learn about one significant event, beginning with the most recent. Significant events typically involve powerful emotions, such as battles and betrayals, marriages and murders, births and funerals. However, they might also include more mundane events that are nevertheless important in your current situation."
                },
            ]
        },
        {
            "class":"Cleric",
            "type": "Life Domain",
            "description": "The Life domain focuses on the vibrant positive energy—one of the fundamental forces of the universe— that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities (such as Chauntea, Arawai, and Demeter), sun gods (such as Lathander, Pelor, and Re-Horakhty), gods of healing or endurance (such as Ilmater, Mishakal, Apollo, and Diancecht), and gods of home and community (such as Hestia, Hathor, and Boldrei).",
            "abilities": [
                {
                    "abilityTitle": "Bonus Proficiency",
                    "abilityDescription": "When you choose this domain at 1st level, you gain proficiency with heavy armor."
                },
                {
                    "abilityTitle": "Disciple of Life",
                    "abilityDescription": "Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell’s level."
                },
                {
                    "abilityTitle": "Channel Divinity: Preserve Life",
                    "abilityDescription": "Starting at 2nd level, you can use your Channel Divinity to heal the badly injured.As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can’t use this feature on an undead or a construct."
                },
                {
                    "abilityTitle": "Blessed Healer",
                    "abilityDescription": "Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell’s level."
                },
                {
                    "abilityTitle": "Divine Strike",
                    "abilityDescription": "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8."
                },
                {
                    "abilityTitle": "Supreme Healing",
                    "abilityDescription": "Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore 12."
                },
            ]
        },
        {
            "class":"Cleric",
            "type": "Light Domain",
            "description": "Gods of light—including Helm, Lathander, Pholtus, Branchala, the Silver Flame, Belenus, Apollo, and Re-Horakhty—promote the ideals of rebirth and renewal, truth, vigilance, and beauty, often using the symbol of the sun.\nSome of these gods are portrayed as the sun itself or as a charioteer who guides the sun across the sky. Others are tireless sentinels whose eyes pierce every shadow and see through every deception. Some are deities of beauty and artistry, who teach that art is a vehicle for the soul's improvement. Clerics of a god of light are enlightened souls infused with radiance and the power of their gods’ discerning vision, charged with chasing away lies and burning away darkness.",
            "abilities": [
                {
                    "abilityTitle": "Bonus Cantrip",
                    "abilityDescription": "When you choose this domain at 1st level, you gain the light cantrip if you don’t already know it."
                },
                {
                    "abilityTitle": "Warding Flare",
                    "abilityDescription": "Also at 1st level, you can interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can’t be blinded is immune to this feature. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
                },
                {
                    "abilityTitle": "Channel Divinity: Radiance of the Dawn",
                    "abilityDescription": "Starting at 2nd level, you can use your Channel Divinity to harness sunlight, banishing darkness and dealing radiant damage to your foes. As an action, you present your holy symbol, and any magical darkness within 30 feet of you is dispelled. Additionally, each hostile creature within 30 feet of you must make a Constitution saving throw. A creature takes radiant damage equal to 2d10 + your cleric level on a failed saving throw, and half as much damage on a successful one. A creature that has total cover from you is not affected."
                },
                {
                    "abilityTitle": "Improved Flare",
                    "abilityDescription": "Starting at 6th level, you can also use your Warding Flare feature when a creature that you can see within 30 feet of you attacks a creature other than you."
                },
                {
                    "abilityTitle": "Potent Spellcasting",
                    "abilityDescription": "Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip."
                },
                {
                    "abilityTitle": "Corona of Light",
                    "abilityDescription": "Starting at 17th level, you can use your action to activate an aura of sunlight that lasts for 1 minute or until you dismiss it using another action. You emit bright light in a 60-foot radius and dim light 30 feet beyond that. Your enemies in the bright light have disadvantage on saving throws against any spell that deals fire or radiant damage."
                },
            ]
        },
        {
            /*  

            Unfinished Domain!!!!

            */
            "class":"Cleric",
            "type": "Madness Domain",
            "description": "You embrace the madness that lurks deep in your heart, and can unleash it to drive your foes insane or to sacrifice certain abilities to hone others. The Gods of Madness – including Tharizdun, Cyric, and Sivanah – not only dwell in madness, but are empowered by it. They recognize the insanities of the multiverse and embrace it wholeheartedly. Their followers seek to cause turmoil wherever they go, bringing down even the stoutest into fits of lunacy. These clerics are so dedicated to bringing madness to others that they willing enter the realm of insanity themselves.",
            "abilities": [
                {
                    "abilityTitle": "Power of Madness",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "You're Insane",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "Bonus Proficiency",
                    "abilityDescription": "At 1st level, You learn the Vicious Mockery cantrip."
                },
                {
                    "abilityTitle": "Channel Divinity: Touch of Madness",
                    "abilityDescription": "At 2nd level, you can use your Channel Divinity to afflict short-term madness on all creatures of your choice within 30 feet of you. On a failed Wisdom saving throw, the creatures are randomly afflicted with a short-term madness determined by the Short-Term Madness Table (DMG pg. 259). This madness lasts for one minute or until the creature takes damage."
                },
                {
                    "abilityTitle": "Channel Divinity: Psychotic Episode",
                    "abilityDescription": "At 6th level, you can use your Channel Divinity to afflict long-term madness on a creature within 60 feet of you. On a failed Wisdom saving throw, the creature is randomly afflicted with a long-term madness determined by the Long-Term Madness Table (DMG pg. 260). It lasts 1d10 x 10 hours. The long-term madness ends early if the madness is cured, you lose concentration (as if you were concentrating on a spell) or you use this feature again. The long-term madness may be cured by a lesser restoration spell or more powerful restoration spell."
                },
                {
                    "abilityTitle": "Potent Spellcasting",
                    "abilityDescription": "Starting at 8th level, you add your wisdom modifier to the damage you deal with any cleric cantrip."
                },
                {
                    "abilityTitle": "Fight Fire with Madness",
                    "abilityDescription": "Starting at level 17, your madness deepens further, and you gain the ability to spread that madness through others magic.\nOn successful Wisdom save (@DADV), you may corrupt (afflicts short term madness) and you reflect the spell back to the originating caster, so long as that the cleric was the target of the spell (so to exclude AOE attacks).\nThe reflected spell effects the originating caster as if it were cast upon him/her.\nThe Madness effect lasts for 1 minute, or until the originating caster takes damage.Any damage from the reflection will not break the madness effect - unless that damage carries forward into the next round"
                },
            ]
        },
        {
            "class":"Cleric",
            "type": "Nature Domain",
            "description": "Gods of nature are as varied as the natural world itself, from inscrutable gods of the deep forests (such as Silvanus, Obad-Hai, Chislev, Balinor, and Pan) to friendly deities associated with particular springs and groves (such as Eldath). Druids revere nature as a whole and might serve one of these deities, practicing mysterious rites and reciting all-but-forgotten prayers in their own secret tongue. But many of these gods have clerics as well, champions who take a more active role in advancing the interests of a particular nature god. These clerics might hunt the evil monstrosities that despoil the woodlands, bless the harvest of the faithful, or wither the crops of those who anger their gods.",
            "abilities": [
                {
                    "abilityTitle": "Acolyte of Nature",
                    "abilityDescription": "At 1st level, you learn one druid cantrip of your choice. You also gain proficiency in one of the following skills of your choice: Animal Handling, Nature, or Survival."
                },
                {
                    "abilityTitle": "Bonus Proficiency",
                    "abilityDescription": "Also at 1st level, you gain proficiency with heavy armor."
                },
                {
                    "abilityTitle": "Channel Divinity: Charm Animals and Plants",
                    "abilityDescription": "Starting at 2nd level, you can use your Channel Divinity to charm animals and plants. As an action, you present your holy symbol and invoke the name of your deity. Each beast or plant creature that can see you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is charmed by you for 1 minute or until it takes damage. While it is charmed by you, it is friendly to you and other creatures you designate."
                },
                {
                    "abilityTitle": "Dampen Elements",
                    "abilityDescription": "Starting at 6th level, when you or a creature within 30 feet of you takes acid, cold, fire, lightning, or thunder damage, you can use your reaction to grant resistance to the creature against that instance of the damage."
                },
                {
                    "abilityTitle": "Divine Strike",
                    "abilityDescription": "At 17th level, you gain the ability to command animals and plant creatures. While creatures are charmed by your Charm Animals and Plants feature, you can take a bonus action on your turn to verbally command what each of those creatures will do on its next turn."
                },
                {
                    "abilityTitle": "Master of Nature",
                    "abilityDescription": "At 17th level, you gain the ability to command animals and plant creatures. While creatures are charmed by your Charm Animals and Plants feature, you can take a bonus action on your turn to verbally command what each of those creatures will do on its next turn."
                },
            ]
        },
        {
            "class":"Cleric",
            "type": "Protection Domain",
            "description": "The protection domain is the purview of deities who charge their followers to shield the weak from the strong. The gods’ faithful dwell in villages and towns on the borderlands, where they help bolster defenses and seek out evils to defeat. These gods believe that a strong shield and a suit of armor is the best defense against evil, second only to a stout mace on hand to respond to any attacks in kind. Deities who grant this domain include Helm, Ilmater, Torm, Tyr, Heironeous, St. Cuthbert, Paladine, Dol Dorn, the Silver Flame, Bahamut, Yondalla, Athena, and Odin.",
            "abilities": [
                {
                    "abilityTitle": "Bonus Proficiency",
                    "abilityDescription": "When you choose this domain at 1st level, you gain proficiency with heavy armor."
                },
                {
                    "abilityTitle": "Shield of the Faithful",
                    "abilityDescription": "Starting at 1st level, you gain the ability to hinder attacks intended for others. When a creature attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. To do so, you must be able to see both the attacker and the target. You interpose an arm, a shield, or some other part of yourself to try to throw the attack off target."
                },
                {
                    "abilityTitle": "Channel Divinity: Radiant Defense",
                    "abilityDescription": "Starting at 2nd level, you can use your Channel Divinity to cloak your allies in radiant armor. As an action, you channel blessed energy into an ally that you can see within 30 feet of you. The first time that ally is hit by an attack within the next minute, the attacker takes radiant damage equal to 2d10 + your cleric level."
                },
                {
                    "abilityTitle": "Blessed Healer",
                    "abilityDescription": "Beginning at 6th level, the healing spells you cast on others can heal you as well. When you cast a spell with a spell slot and it restores hit points to any creature other than you this turn, you regain hit points equal to 2 + the spell’s level."
                },
                {
                    "abilityTitle": "Divine Strike",
                    "abilityDescription": "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8."
                },
                {
                    "abilityTitle": "Indomitable Defense",
                    "abilityDescription": "At 17th level, you gain resistance to two damage types of your choice, choosing from bludgeoning, necrotic, piercing, radiant, and slashing. Whenever you finish a short or long rest, you can change the damage types you chose. As an action, you can temporarily give up this resistance and transfer it to one creature you touch. The creature keeps the resistance until the end of your next short or long rest or until you transfer it back to yourself as a bonus action."
                },
            ]
        },
        {
            "class":"Cleric",
            "type": "Tempest Domain",
            "description": "Gods whose portfolios include the Tempest domain - including Talos, Umberlee, Kord, Zeboim, the Devourer, Zeus, and Thor—govern storms, sea, and sky. They include gods of lightning and thunder, gods of earthquakes, some fire gods, and certain gods of violence, physical strength, and courage. In some pantheons, a god of this domain rules over other deities and is known for swift justice delivered by thunderbolts. In the pantheons of seafaring people, gods of this domain are ocean deities and the patrons of sailors. Tempest gods send their clerics to inspire fear in the common folk, either to keep those folk on the path of righteousness or to encourage them to offer sacrifices of propitiation to ward off divine wrath.",
            "abilities": [
                {
                    "abilityTitle": "Bonus Proficiencies",
                    "abilityDescription": "At 1st level, you gain proficiency with martial weapons and heavy armor."
                },
                {
                    "abilityTitle": "Wrath of the Storm",
                    "abilityDescription": "Also at 1st level, you can thunderously rebuke attackers. When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw. The creature takes 2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
                },
                {
                    "abilityTitle": "Channel Divinity: Destructive Domain",
                    "abilityDescription": "Starting at 2nd level, you can use your Channel Divinity to wield the power of the storm with unchecked ferocity. When you roll lightning or thunder damage, you can use your Channel Divinity to deal maximum damage, instead of rolling."
                },
                {
                    "abilityTitle": "Thunderbolt Strike",
                    "abilityDescription": "At 6th level, when you deal lightning damage to a Large or smaller creature, you can also push it up to 10 feet away from you."
                },
                {
                    "abilityTitle": "Divine Strike",
                    "abilityDescription": "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 thunder damage to the target. When you reach 14th level, the extra damage increases to 2d8."
                },
                {
                    "abilityTitle": "Stormborn",
                    "abilityDescription": "At 17th level, you have a flying speed equal to your current walking speed whenever you are not underground or indoors."
                },
            ]
        },
        {
            "class":"Cleric",
            "type": "Trickery Domain",
            "description": "Gods of trickery—such as Tymora, Beshaba, Olidammara, the Traveler, Garl Glittergold, and Loki—are mischief-makers and instigators who stand as a constant challenge to the accepted order among both gods and mortals. They’re patrons of thieves, scoundrels, gamblers, rebels, and liberators. Their clerics are a disruptive force in the world, puncturing pride, mocking tyrants, stealing from the rich, freeing captives, and flouting hollow traditions. They prefer subterfuge, pranks, deception, and theft rather than direct confrontation.",
            "abilities": [
                {
                    "abilityTitle": "Blessing of the Trickster",
                    "abilityDescription": "Starting when you choose this domain at 1st level, you can use your action to touch a willing creature other than yourself to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour or until you use this feature again."
                },
                {
                    "abilityTitle": "Channel Divinity: Invoke Duplicity",
                    "abilityDescription": "Starting at 2nd level, you can use your Channel Divinity to create an illusory duplicate of yourself. As an action, you create a perfect illusion of yourself that lasts for 1 minute, or until you lose your concentration (as if you were concentrating on a spell).\nThe illusion appears in an unoccupied space that you can see within 30 feet of you. As a bonus action on your turn, you can move the illusion up to 30 feet to a space you can see, but it must remain within 120 feet of you. For the duration, you can cast spells as though you were in the illusion’s space, but you must use your own senses. Additionally, when both you and your illusion are within 5 feet of a creature that can see the illusion, you have advantage on attack rolls against that creature, given how distracting the illusion is to the target."
                },
                {
                    "abilityTitle": "Channel Divinity: Cloak of Shadows",
                    "abilityDescription": "Starting at 6th level, you can use your Channel Divinity to vanish. As an action, you become invisible until the end of your next turn. You become visible if you attack or cast a spell."
                },
                {
                    "abilityTitle": "Divine Strike",
                    "abilityDescription": "At 8th level, you gain the ability to infuse your weapon strikes with poison—a gift from your deity. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 poison damage to the target. When you reach 14th level, the extra damage increases to 2d8."
                },
                {
                    "abilityTitle": "Improved Duplicity",
                    "abilityDescription": "At 17th level, you can create up to four duplicates of yourself, instead of one, when you use Invoke Duplicity. As a bonus action on your turn, you can move any number of them up to 30 feet, to a maximum range of 120 feet."
                },
            ]
        },
        {
            "class":"Cleric",
            "type": "War Domain",
            "description": "War has many manifestations. It can make heroes of ordinary people. It can be desperate and horrific, with acts of cruelty and cowardice eclipsing instances of excellence and courage. In either case, the gods of war watch over warriors and reward them for their great deeds. The clerics of such gods excel in battle, inspiring others to fight the good fight or offering acts of violence as prayers. Gods of war include champions of honor and chivalry (such as Torm, Heironeous, and Kiri- Jolith) as well as gods of destruction and pillage (such as Erythnul, the Fury, Gruumsh, and Ares) and gods of conquest and domination (such as Bane, Hextor, and Maglubiyet). Other war gods (such as Tempus, Nike, and Nuada) take a more neutral stance, promoting war in all its manifestations and supporting warriors in any circumstance.",
            "abilities": [
                {
                    "abilityTitle": "Bonus Proficiencies",
                    "abilityDescription": "At 1st level, you gain proficiency with martial weapons and heavy armor."
                },
                {
                    "abilityTitle": "War Priest",
                    "abilityDescription": "From 1st level, your god delivers bolts of inspiration to you while you are engaged in battle. When you use the Attack action, you can make one weapon attack as a bonus action. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
                },
                {
                    "abilityTitle": "Channel Divinity: Guided Strike",
                    "abilityDescription": "Starting at 2nd level, you can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses."
                },
                {
                    "abilityTitle": "Channel Divinity: War God's Blessing",
                    "abilityDescription": "At 6th level, when a creature within 30 feet of you makes an attack roll, you can use your reaction to grant that creature a +10 bonus to the roll, using your Channel Divinity. You make this choice after you see the roll, but before the DM says whether the attack hits or misses."
                },
                {
                    "abilityTitle": "Divine Strike",
                    "abilityDescription": "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 damage of the same type dealt by the weapon to the target. When you reach 14th level, the extra damage increases to 2d8."
                },
                {
                    "abilityTitle": "Avatar of Battle",
                    "abilityDescription": "At 17th level, you gain resistance to bludgeoning, piercing, and slashing damage from non-magical weapons."
                },
            ]
        },
        /*      

        Druid

        */
       {
            "class":"Druid",
            "type": "Circle of Anathema",
            "description": "The so called 'Urban Druid', planar druids, druids of plague and desolation… Rejected by their Circle, hated by all druid kind, most would assume nature itself would reject the corruption these souls represent. Some whisper that they do not truly worship nature, as they once did, but study it, bending the 'natural' forces of the world to their unnatural will. Moving grossly contrary to their vows, living in cities, or consorting with the defiled, the Anathema can expect to be hunted, or in the very, very most lenient cases, ignored by their kin. It is not so much that these druids have abandoned their devotion to nature—for that, a transgressor can sometimes be pardoned (on condition of exile)—but rather, that they have warped their supposed devotion into something truly abominable. Many of the Anathema claim they have done nothing wrong. Few listen.",
            "abilities": [
                {
                    "abilityTitle": "Outcast",
                    "abilityDescription": "Driven from the places they once called home, Anathema druids must learn to make their own way. At level 2, an Anathema learns the Thaumaturgy cantrip, and gains proficiency in their choice of one of the following skills: Deception, Persuasion, Stealth."
                },
                {
                    "abilityTitle": "Unnatural Dominion",
                    "abilityDescription": "Beginning at level 2, each Druid of Anathema chooses, consciously or unconsciously, an unnatural faction with which they sympathize. Though many factions exist, the most common are 'Urban', 'Planar', and 'Desolation'. The specific faction chosen by any given Anathema, however, is represented by their choice of two creature types from the following list:\n* Aberrations, Celestials, Constructs, Elementals, Fiends, Monstrosities, Oozes, Undead.\nThe Anathema is considered to have Dominion over the chosen types of creature. Any spell the Anathema casts which would normally target Beasts may also target these creatures."
                },
                {
                    "abilityTitle": "Aberrant Wild Shape",
                    "abilityDescription": "A Druid of Anathema of 6th level or higher may sacrifice a 1st level or higher spell slot to augment their Wild Shape ability in the following ways: \nThe Anathema may assume the form of any creature of the Beast type, or either of the creature types whom they have chosen Dominion over. \nThe maximum CR of the form assumed is equal to the spell slot used.\nIf the chosen form can speak, the Anathema may still cast spells.\nIf the chosen form possesses one of the following abilities, those abilities are not gained by the Anathema:\n* Spellcasting, Innate Spellcasting, Shapechanger, Change Shape, Rejuvenation, Regeneration, Magic Resistance, Teleport, Telepathy(any)."
                },
                {
                    "abilityTitle": "Command of Earth",
                    "abilityDescription": "As an action, an Anathema of 10th level may target one creature whom he or she can see within 30 feet. The target must make a Wisdom saving throw. On a failed save, the target must obey the Anathema's commands for the next 1 hour. A creature whose challenge rating is equal to or greater than half the Anathema's level is immune to this effect. Once the Anathema has used this ability 3 times, they may not do so again until they have completed a long or a short rest. Additionally, add Enthrall, Compulsion and Flesh to Stone to your spell list."
                },
                {
                    "abilityTitle": "Inured of Blasphemy",
                    "abilityDescription": "By 14th level, the Druid of Anathema has grown quite comfortable with their sin. Likewise, those they have aligned themselves with have grown to view the Anathema a their 'natural' representative and protector in the world. The Anathema gains two of the following benefits, based on their Un-natural Dominion:\nAberrations: You gain Immunity to the charmed and confused conditions.\nCelestials: Add Conjure Celestial to your spell list. Resistance to Radiant damage.\nConstructs: You are always considered two steps less fatigued than you actually are.\nElementals: You are considered native to any Plane you visit and suffer none of the normal environmental hazards of planar travel (do not take fire damage from being on the plane of fire (though you would take fire damage from other sources), and do not need to breath when on the elemental plane of water, etc).\nFiends: Add Conjure Fiend to your spell list. Advantage on all saves vs fear.\nMonstrosities: You gain Resistance to Poison damage and Immunity to the Poisoned condition.\nOozes: You gain Immunity to the Paralyzed and Stunned conditions.\nUndead: Mindless undead view you as one of their own kind and will not attack you unless commanded to do so. You have advantage on all saves vs Disease."
                },
                
            ]
        },
        {
            "class":"Druid",
            "type": "Circle of the Land",
            "description": "",
            "abilities": [
                {
                    "abilityTitle": "Bonus Cantrip",
                    "abilityDescription": "When you choose this circle at 2nd level, you learn one additional druid cantrip of your choice."
                },
                {
                    "abilityTitle": "Natural Recovery",
                    "abilityDescription": "Starting at 2nd level, you can regain some of your magical energy by sitting in meditation and communing with nature. During a short rest, you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), and none of the slots can be 6th level or higher. You can’t use this feature again until you finish a long rest. For example, when you are a 4th-level druid, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level slot or two 1st-level slots."
                },
                {
                    "abilityTitle": "Circle of Spells",
                    "abilityDescription": "Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid. Choose that land—arctic, coast, desert, forest, grassland, mountain, swamp, or Underdark—and consult the associated list of spells.\nOnce you gain access to a circle spell, you always have it prepared, and it doesn’t count against the number of spells you can prepare each day. If you gain access to a spell that doesn’t appear on the druid spell list, the spell is nonetheless a druid spell for you.\n\nArctic\nDruidLevel\tCircle Spells\n3rd\thold person, spike growth\n5th\tsleet storm, slow\n7th\tfreedom of movement, ice storm\n9th\tcommune with nature, cone of cold\n\nCoast\nDruid Level\tCircle Spells\n3rd\tmirror image, misty step\n5th\twater breathing, water walk\n7th\tcontrol water, freedom of movement\n9th\tconjure elemental, scrying\n\nDesert\nDruid Level\tCircle Spells\n3rd\tblur, silence\n5th\tcreate food and water, protection from energy\n7th\tblight, hallucinatory terrain\n9th\tinsect plague, wall of stone\n\nForest\nDruid Level\tCircle Spells\n3rd\tbarkskin, spider climb\n5th\tcall lightning, plant growth\n7th\tdivination, freedom of movement\n9th\tcommune with nature, tree stride\n\nGrassland\nDruid Level\tCircle Spells\n3rd\tinvisibility, pass without trace\n5th\tdaylight, haste\n7th\tdivination, freedom of movement\n9th\tdream, insect plague\n\nMountain\nDruid Level\tCircle Spells\n3rd\tspider climb, spike growth\n5th\tlightning bolt, meld into stone\n7th\tstone shape, stoneskin\n9th\tpasswall, wall of stone\n\nSwamp\nDruid Level\tCircle Spells\n3rd\tdarkness, melf’s acid arrow\n5th\twater walk, stinking cloud\n7th\tfreedom of movement, locate creature\n9th\tinsect plague, scrying\n\nUnderdark\nDruid Level\tCircle Spells\n3rd\tspider climb, web\n5th\tgaseous form, stinking clouds\n7th\tgreater invisibility, stone shape\n9th\tcloudkill, insect plague"
                },
                {
                    "abilityTitle": "Land's Stride",
                    "abilityDescription": "Starting at 6th level, moving through non-magical difficult terrain costs you no extra movement. You can also pass through non-magical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard. In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell."
                },
                {
                    "abilityTitle": "Nature's Ward",
                    "abilityDescription": "When you reach 10th level, you can’t be charmed or frightened by elementals or fey, and you are immune to poison and disease."
                },
                {
                    "abilityTitle": "Nature's Sanctuary",
                    "abilityDescription": "When you reach 14th level, creatures of the natural world sense your connection to nature and become hesitant to attack you. When a beast or plant creature attacks you, that creature must make a Wisdom saving throw against your druid spell save DC. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours.The creature is aware of this effect before it makes its attack against you."
                },
            ]
        },
        {
            "class":"Druid",
            "type": "Circle of the Moon",
            "description": "",
            "abilities": [
                {
                    "abilityTitle": "Combat Wild Shape",
                    "abilityDescription": "At 2nd level, you gain the ability to use Wild Shape on your turn as a bonus action, rather than an action. Additionally, when you are transformed by Wild Shape, you can use a bonus action to expend one spell slot to regain 1d8 hit points per level of the spell slot expended."
                },
                {
                    "abilityTitle": "Circle Forms",
                    "abilityDescription": "At 2nd level, you can use your Wild Shape to transform into a beast with a CR as high as 1. You must abide by the other limitations of Wild Shape. At 6th level, you can transform into any beast with a CR equal to or less than your druid level divided by 3 (round down)."
                },
                {
                    "abilityTitle": "Primal Strike",
                    "abilityDescription": "At 6th level, your attacks in beast form count as magical for the purposes of overcoming resistance and immunity to non-magical attacks and damage."
                },
                {
                    "abilityTitle": "Elemental Wild Shape",
                    "abilityDescription": "At 10th level, you can expend two uses of your wild shape at the same time to transform into an air elemental, earth elemental, fire elemental, or water elemental."
                },
                {
                    "abilityTitle": "Thousand Forms",
                    "abilityDescription": "At 14th level, you may alter your form in more subtle ways. You can cast the alter self spell at will."
                },
            ]
        },
        /*      

        Fighter

        */
        {
            "class":"Fighter",
            "type": "Battle Master",
            "description": "",
            "abilities": [
                {
                    "abilityTitle": "Combat Superiority",
                    "abilityDescription": "When you choose this archetype at 3rd level, you learn maneuvers that are fueled by special dice called superiority dice.\nManeuvers You learn three maneuvers of your choice, which are detailed under “Maneuvers” below. Many maneuvers enhance an attack in some way. You can use only one maneuver per attack. You learn two additional maneuvers of your choice at 7th, 10th, and 15th level. Each time you learn new maneuvers, you can also replace one maneuver you know with a different one.\nSuperiority Dice You have four superiority dice, which are d8s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a short or long rest. You gain another superiority die at 7th level and one more at 15th level.\nSaving Throws Some of your maneuvers require your target to make a saving throw to resist the maneuver’s effects. The saving throw DC is calculated as follows\nManeuver save DC = 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice)\nManeuvers\nCommander’s Strike. When you take the Attack action on your turn, you can forgo one of your attacks and use a bonus action to direct one of your companions to strike. When you do so, choose a friendly creature who can see or hear you and expend one superiority die. That creature can immediately use its reaction to make one weapon attack, adding the superiority dieto the attack’s damage roll.\nDisarming Attack. When you hit a creature with a weapon attack, you can expend one superiority dieto attempt to disarm the target, forcing it to drop one item of your choice that it’s holding. You add the superiority dieto the attack’s damage roll, and the target must make a Strength saving throw. On a failed save, it drops the object you choose. The object lands at its feet.\nDistracting Strike. When you hit a creature with a weapon attack, you can expend one superiority dieto distract the creature, giving your allies an opening. You add the superiority dieto the attack’s damage roll. The next attack roll against the target by an attacker other than you has advantage if the attack is made before the start of your next turn.\nEvasive Footwork. When you move, you can expend one superiority die, rolling the die and adding the number rolled to your AC until you stop moving.\nFeinting Attack. You can expend one superiority die and use a bonus action on your turn to feint, choosing one creature within 5 feet of you as your target. You have advantage on your next attack roll against that creature. If that attack hits, add the superiority dieto the attack’s damage roll.\nGoading Attack. When you hit a creature with a weapon attack, you can expend one superiority dieto attempt to goad the target into attacking you. You add the superiority dieto the attack’s damage roll, and the target must make a Wisdom saving throw. On a failed save, the target has disadvantage on all attack rolls against targets other than you until the end of your next turn.\nLunging Attack. When you make a melee weapon attack on your turn, you can expend one superiority dieto increase your reach for that attack by 5 feet. If you hit, you add the superiority dieto the attack’s damage roll.\nManeuvering Attack. When you hit a creature with a weapon attack, you can expend one superiority dieto maneuver one of your comrades into a more advantageous position. You add the superiority dieto the attack’s damage roll, and you choose a friendly creature who can see or hear you. That creature can use its reaction to move up to half its speed without provoking opportunity attacks from the target of your attack.\nMenacing Attack. When you hit a creature with a weapon attack, you can expend one superiority dieto attempt to frighten the target. You add the superiority dieto the attack’s damage roll, and the target must make a Wisdom saving throw. On a failed save, it is frightened of you until the end of your next turn.\nParry. When another creature damages you with a melee attack, you can use your reaction and expend one superiority dieto reduce the damage by the number you roll on your superiority die+ your Dexterity modifier.\nPrecision Attack. When you make a weapon attack roll against a creature, you can expend one superiority dieto add it to the roll. You can use this maneuver before or after making the attack roll, but before any effects of the attack are applied.\nPushing Attack. When you hit a creature with a weapon attack, you can expend one superiority dieto attempt to drive the target back. You add the superiority dieto the attack's damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you push the target up to 15 feet away from you.\nRally. On your turn, you can use a bonus action and expend one superiority dieto bolster the resolve of one of your companions. When you do so, choose a friendly creature who can see or hear you. That creature gains temporary hit points equal to the superiority dieroll + your Charisma modifier.\nRiposte. When a creature misses you with a melee attack, you can use your reaction and expend one superiority dieto make a melee weapon attack against the creature. If you hit, you add the superiority dieto the attack's damage roll.\nSweeping Attack. When you hit a creature with a melee weapon attack, you can expend one superiority dieto attempt to damage another creature with the same attack. Choose another creature within 5 feet of the original target and within your reach. If the original attack roll would hit the second creature, it takes damage equal to the number you roll on your superiority die. The damage is of the same type dealt by the original attack.\nTrip Attack. When you hit a creature with a weapon attack, you can expend one superiority dieto attempt to knock the target down. You add the superiority dieto the attack’s damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you knock the target prone."
                },
                {
                    "abilityTitle": "Student of War",
                    "abilityDescription": "At 3rd level, you gain proficiency with one type of artisan’s tools of your choice."
                },
                {
                    "abilityTitle": "Know Your Enemy",
                    "abilityDescription": "Starting at 7th level, if you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice:\nStrength score\nDexterity score\nConstitution score\nArmor Class\nCurrent hit points\nTotal class levels (if any)\nFighter class levels (if any)"
                },
                {
                    "abilityTitle": "Improved Combat Superiority",
                    "abilityDescription": "At 10th level, your superiority dice turn into d10s. At 18th level, they turn into d12s."
                },
                {
                    "abilityTitle": "Relentless",
                    "abilityDescription": "Starting at 15th level, when you roll initiative and have no superiority dice remaining, you regain 1 superiority die."
                },
            ]
        },
        {
            "class":"Fighter",
            "type": "Champion",
            "description": "",
            "abilities": [
                {
                    "abilityTitle": "Improved Critical",
                    "abilityDescription": "At 3rd level, your weapon attacks now score a critical hit on a roll of 19 or 20."
                },
                {
                    "abilityTitle": "Remarkable Athlete",
                    "abilityDescription": "At 7th level, you can add half your proficiency bonus (round up) to any Strength, dexterity, or Constitution check you make that doesn't already use you proficiency bonus. In addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier."
                },
                {
                    "abilityTitle": "Additional Fighting Style",
                    "abilityDescription": "At 10th level, you choose a second option from the Fighting Style class feature."
                },
                {
                    "abilityTitle": "Superior Critical",
                    "abilityDescription": "At 15th level, your weapon attacks score a critical hit on rolls of 18, 19, or 20."
                },
                {
                    "abilityTitle": "Survivor",
                    "abilityDescription": "At 18th level, you regain hit points equal to 5 + your Constitution modifier at the start of each of your turns, as long as you have less than half your maximum hit points left. You don't gain this benefit if you have 0 hit points."
                },
            ]
        },
        {
            "class":"Fighter",
            "type": "Eldritch Knight",
            "description": "",
            "abilities": [
                {
                    "abilityTitle": "Spellcasting",
                    "abilityDescription": "When you reach 3rd level, you augment your martial prowess with the ability to cast spells. See chapter 10 for the general rules of spellcasting and chapter 11 for the wizard spell list.\nCantrips You learn two cantrips of your choice from the wizard spells. You learn an additional wizard cantrip of your choice at 10th level.\nSpell Slots The Eldritch Knight Spellcasting table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest.For example, if you know the 1st-level spell shield and have a 1st-level and a 2nd-level spell slot available, you can cast shield using either slot.\nSpells Known of 1st-Level and Higher You know three 1st-level wizard spells of your choice, two of which you must choose from the abjuration and evocation spells on the wizard spell list.The Spells Known column of the Eldritch Knight Spellcasting table shows when you learn more wizard spells of 1st level or higher. Each of these spells must be an abjuration or evocation spell of your choice, and must be of a level for which you have spell slots. For instance, when you reach 7th level in this class, you can learn one new spell of 1st or 2nd level.The spells you learn at 8th, 14th, and 20th level can come from any school of magic.Whenever you gain a level in this class, you can replace one of the wizard spells you know with another spell of your choice from the wizard spell list. The new spell must be of a level for which you have spell slots, and it must be an abjuration or evocation spell, unless you’re replacing the spell you gained at 8th, 14th, or 20th level.\nSpellcasting Ability Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.\nSpell save DC = 8 + your proficiency bonus + your Intelligence modifier\nSpell attack modifier = your proficiency bonus + your Intelligence modifier\nFighter Level\tCantrips Known\tSpells Known\t1st\t2nd\t3rd\t4th\n3rd\t2\t3\t2\t—\t—\t—\n4th\t2\t4\t3\t—\t—\t—\n5th\t2\t4\t3\t—\t—\t—\n6th\t2\t4\t3\t—\t—\t—\n7th\t2\t5\t4\t2\t—\t—\n8th\t2\t6\t4\t2\t—\t—\n9th\t2\t6\t4\t2\t—\t—\n10th\t3\t7\t4\t3\t—\t—\n11th\t3\t8\t4\t3\t—\t—\n12th\t3\t8\t4\t3\t—\t—\n13th\t3\t9\t4\t3\t2\t—\n14th\t3\t10\t4\t3\t2\t—\n15th\t3\t10\t4\t3\t2\t—\n16th\t3\t11\t4\t3\t3\t—\n17th\t3\t11\t4\t3\t3\t—\n18th\t3\t11\t4\t3\t3\t—\n19th\t3\t12\t4\t3\t3\t1\n20th\t3\t13\t4\t3\t3\t1"
                },
                {
                    "abilityTitle": "Weapon Bond",
                    "abilityDescription": "At 3rd level, you learn a ritual that creates a magical bond between yourself and one weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest. The weapon must be within your reach throughout the ritual, at the conclusion of which you touch the weapon and forge the bond. Once you have bonded a weapon to yourself, you can’t be disarmed of that weapon unless you are incapacitated. If it is on the same plane of existence, you can summon that weapon as a bonus action on your turn, causing it to teleport instantly to your hand.You can have up to two bonded weapons, but can summon only one at a time with your bonus action. If you attempt to bond with a third weapon, you must break the bond with one of the other two."
                },
                {
                    "abilityTitle": "War Magic",
                    "abilityDescription": "Beginning at 7th level, when you use your action to cast a cantrip, you can make one weapon attack as a bonus action."
                },
                {
                    "abilityTitle": "Eldritch Strike",
                    "abilityDescription": "At 10th level, you learn how to make your weapon strikes undercut a creature’s resistance to your spells. When you hit a creature with a weapon attack, that creature has disadvantage on the next saving throw it makes against a spell you cast before the end of your next turn."
                },
                {
                    "abilityTitle": "Arcane Charge",
                    "abilityDescription": "At 15th level, you gain the ability to teleport up to 30 feet to an unoccupied space you can see when you use your Action Surge. You can teleport before or after the additional action."
                },
                {
                    "abilityTitle": "Improved War Magic",
                    "abilityDescription": "Starting at 18th level, when you use your action to cast a spell, you can make one weapon attack as a bonus action."
                },
            ]
        },
        {
            "class":"Fighter",
            "type": "Fencer",
            "description": "Finding balance in your weapon is the easy part. Finding balance in the world is the hard part. Achieving that goal will unlock the doors of legend. A fencer is an epitome of martial prowess, gracefully executing moves with seemingly little effort. They don't have to be a strong warrior, but a dexterous one.",
            "abilities": [
                {
                    "abilityTitle": "Precision Training",
                    "abilityDescription": "At 3rd Level, if your Dexterity is 15 or lower, add two to it or until it reaches 16. Every long rest, you can choose to take a short rest instead. Doing this three times will improve your Dexterity by 1, to a max of 16. If your Dexterity is 16 or above, but below 20, then it will take five long rests from 16-18, then seven for 19 and 20. Finishing this training (or already being at Dexterity score of 20) will allow you to add your proficiency bonus to the damage roll."
                },
                {
                    "abilityTitle": "Adaptable Balance",
                    "abilityDescription": "At 3rd Level, you learn to adapt to the balance of any weapon. All weapons that don't have the finesse property, are not heavy or two-handed, or deal bludgeoning damage now have the finesse property."
                },
                {
                    "abilityTitle": "Extra Skill Practicality",
                    "abilityDescription": "At 7th level, if you aren't proficient in them already, you gain proficiency in Acrobatics, Sleight of Hand, and Stealth."
                },
                {
                    "abilityTitle": "Speedy Fighter",
                    "abilityDescription": "At 10th level, your armor seems to feel like normal clothes to you, letting you be more fleet-of-foot. Add +5 feet to your walking speed and +2 to AC when not wearing Heavy Armor. This adds another 5 feet at 15th level and 18th level."
                },
                {
                    "abilityTitle": "Speed Training",
                    "abilityDescription": "At 15th Level, when you stop to take a long rest, you can choose to take a short rest instead. Doing this twice will increase your speed by 5 feet each time, to a maximum of 60 feet without taking the Dash action."
                },
                {
                    "abilityTitle": "Masterful Handling",
                    "abilityDescription": "At 18th Level, your grip on even the heaviest weapons allows you to swing effectively. All Two-Handed weapons lose that feature and gain the finesse so long they don't deal bludgeoning damage and are rigid (ex. not a Flail). All weapons meeting such criteria that also have the Versatile skill now deal their two-handed damage even if attacking one-handed."
                },
            ]
        },
        {
            "class":"Fighter",
            "type": "Purple Dragon Knight",
            "description": "Pledged to protect the crown, they take the fight against evil beyond their kingdom's borders. They are tasked with wandering the land as knights errant, relying on their judgment, bravery, and fidelity to the code of chivalry to guide them in defeating evildoers. Purple Dragon knights are warriors who hail from the kingdom of Cormyr. A Purple Dragon knight inspires greatness in others by committing brave deeds in battle. The mere presence of a knight in a hamlet is enough to cause some ores and bandits to seek easier prey. A lone knight is a skilled warrior, but a knight leading a band of allies can transform even the most poorly equipped militia into a ferocious war band. A knight prefers to lead through deeds, not words. As a knight spearheads an attack, the knight's actions can awaken reserves of courage and conviction in allies that they never suspected they had.",
            "abilities": [
                {
                    "abilityTitle": "Rallying Cry",
                    "abilityDescription": "When you choose this archetype at 3rd level, you learn how to inspire your allies to fight on past their injuries. When you use your Second Wind feature, you can choose up to three creatures within 60 feet of you that are allied with you. Each one regains hit points equal to your fighter level, provided that the creature can see or hear you."
                },
                {
                    "abilityTitle": "Royal Envoy",
                    "abilityDescription": "A Purple Dragon knight serves as an envoy of the Cormyrean crown. Knights of high standing are expected to conduct themselves with grace. At 7th level, you gain proficiency in the Persuasion skill. If you are already proficient in it, you gain proficiency in one of the following skills of your choice: Animal Handling, Insight, Intimidation, or Performance. Your proficiency bonus is doubled for any ability check you make that uses Persuasion. You receive this benefit regardless of the skill proficiency you gain from this feature."
                },
                {
                    "abilityTitle": "Inspiring Surge",
                    "abilityDescription": "Starting at 10th level, when you use your Action Surge feature, you can choose one creature within 60 feet of you that is allied with you. That creature can make one melee or ranged weapon attack with its reaction, provided that it can see or hear you. Starting at 17th level, you can choose two allies within 60 feet of you, rather than one."
                },
                {
                    "abilityTitle": "Bulwark",
                    "abilityDescription": "Beginning at 15th level, you can extend the benefit of your Indomitable feature to an ally. When you decide to use Indomitable to reroll an Intelligence, a Wisdom, or a Charisma saving throw and you aren't incapacitated, you can choose one ally within 60 feet of you that also failed its saving throw against the same effect. If that creature can see or hear you, it can reroll its saving throw and must use the new roll."
                },
            ]
        },
        {
            "class":"Fighter",
            "type": "Weapon Master",
            "description": "The Weapon Master is a warrior who not only seeks thrill and honor in combat but is revered for the way they fight. Tales of their combat prowess and proficiency on the battlefield echo throughout the planes.",
            "abilities": [
                {
                    "abilityTitle": "Brutal Precision",
                    "abilityDescription": "Starting at 3rd level, your strikes become so graceful, precise and swift, that you can easily target exposed vital organs of a creature before they have enough time to react. Your weapon attacks can score a critical hit on a roll of a 19 or 20. At 13th level, your weapon attacks score a critical hit on a roll of 18-20. You may also choose an additional fighting style from the fighting style list."
                },
                {
                    "abilityTitle": "Weapon Mastery",
                    "abilityDescription": "Beginning at Level 7, choose a weapon you are proficient in. You now deal an extra 1d6 damage with that weapon."
                },
                {
                    "abilityTitle": "Battle Hungry",
                    "abilityDescription": "When you attain 10th level in this archetype you gain the following benefits:\nYou now add your proficiency to your initiative rolls.\nOn your turn you can use your dash action as a bonus action and while dashing in this way you do not provoke attacks of opportunity\nSo long as you are carrying a weapon you have mastered you gain + 2 Armor Class."
                },
                {
                    "abilityTitle": "Greater Weapon Mastery",
                    "abilityDescription": "When you reach level 15 in this archetype, you may choose a second weapon to master. It deals an additional 1d6 damage dice. Your first chosen weapon now does increased damage of 2d6."
                },
                {
                    "abilityTitle": "One Man Army",
                    "abilityDescription": "When you reach 18th level in this Archetype you gain the following benefits:\nQuick strike: One extra attack which uses a bonus action, you can also forego this extra attack to give one of your other attacks advantage.\nPeerless blow: Once per long rest you can do max damage with one attack.\nBrothers in Arms: Allies within five feet of you gain +2 bonus AC. In addition, once per long rest, you may choose to receive the damage that an ally would have taken on an attack or a failed save."
                },
            ]
        },
        /*      

        Monk

        */
       {
            "class":"Monk",
            "type": "Way of the Shadow",
            "description": "",
            "abilities": [
                {
                    "abilityTitle": "Shadow Arts",
                    "abilityDescription": "Starting when you choose this tradition at 3rd level, you can use your ki to duplicate the effects of certain spells. As an action, you can spend 2 ki points to cast darkness, darkvision, pass without trace, or silence, without providing material components. Additionally, you gain the minor illusion cantrip if you don’t already know it."
                },
                {
                    "abilityTitle": "Shadow Step",
                    "abilityDescription": "At 6th level, you gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action you can teleport up to 60 feet to an unoccupied space you can see that is also in dim light or darkness. You then have advantage on the first melee attack you make before the end of the turn."
                },
                {
                    "abilityTitle": "Cloak of Shadows",
                    "abilityDescription": "By 11th level, you have learned to become one with the shadows. When you are in an area of dim light or darkness, you can use your action to become invisible. You remain invisible until you make an attack, cast a spell, or are in an area of bright light."
                },
                {
                    "abilityTitle": "Opportunist",
                    "abilityDescription": "At 17th level, you can exploit a creature's momentary distraction when it is hit by an attack. Whenever a creature within 5 feet of you is hit by an attack made by a creature other than you, you can use your reaction to make a melee attack against that creature."
                },
            ]
        },
        {
            "class":"Monk",
            "type": "Way of the Four Elements",
            "description": "",
            "abilities": [
                {
                    "abilityTitle": "Initiate of the Way",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "Disciple of the Elements",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "Adept of the Way",
                    "abilityDescription": "Once you reach the 5th level in this class, you can spend additional ki points to increase the level of an elemental discipline spell that you cast, provided that the spell has an enhanced effect at a higher level, as burning hands does. The spell’s level increases by 1 for each additional ki point you spend. For example, if you are a 5th-level monk and use Sweeping Cinder Strike to cast burning hands, you can spend 2 ki points to cast it as a 2nd-level spell (the discipline’s base cost of 1 ki point plus 1).\n\nThe maximum number of ki points you can spend to cast a spell in this way (including its base ki point cost and any additional ki points you spend to increase its level) is determined by your monk level, as shown in the table below\nMonk Levels\tMaximum Ki Points for a Spell\n5th-8th\t3\n9th-12th\t4\n13th-16th\t5\n17th-20th\t8\n\n\nElemental Discipline List\n3rd level\nBecome the Teapot: Cast absorb elements*.\nEffortless Step: Jump higher and further.\nEnduring Mountain Stance: Dodge action makes you immovable.\nFangs of the Fire Snake: +5ft. reach when attacking, spend ki to deal extra fire damage.\nFang of the Frost Wolf: Cast ice knife*.\nFist of Four Thunders: Cast thunderwave.\nFist of Unbroken Air: Increase range of unarmed strike, hit target is pushed and knocked prone.\nRumbling Badger: Cast earth tremor*.\nRush of the Gale Spirits: Cast gust of wind.\nShape of the Flowing River: Transform and reshape ice and water.\nSweeping Cinder Strike: Cast burning hands.\nWater Whip: Deal damage to target, pull or knock prone.\nUnrelenting Flames: Reroll 1’s on damage dice.\n\n6th level\nBurning Ember Flourish: Cast pyrotechnics*.\nClench of the North Wind: Cast hold person.\nCrushing Hand of the Mountain: Cast maximilian’s earthen grasp*.\nEyes of Fire: Gain infravision for 1 min.\nGolden Snake’s Icy Path: Movement after Dash action leaves trail of difficult terrain.\nGong of the Summit: Cast shatter.\nHatchling’s Flame: Cast aganazzar’s scorcher*.\nHowl of the North Wind: Cast warding wind*.\nI am a Leaf on the Wind: Slow Fall now activates automatically, gain ability to glide.\nImpenetrable Iron Tortoise Shell: Deflect Missiles ability now can be used on any ranged/melee attack within 30 feet.\nMote of the Sun: Cast flaming sphere.\nPatient Badger Listens: Gain tremorsense and burrow speed for 1 min.\nRed Dragon’s Claws: Cast scorching ray.\nSwarming Ice Rabbit: Cast snilloc’s snowball swarm*.\n\n11th level\nDance of Three Ways: Cast melf’s minute meteors*.\nEarth Reaches for Sky: Cast erupting earth*.\nEternal Mountain Defense: Cast stoneskin, targeting yourself.\nFalling Comet: Cast sleet storm.\nFlames of the Phoenix: Cast fireball.\nFist of the Elements: Cast elemental weapon, choosing either cold, fire, or thunder.\nHibernal Squall: Cast ice storm.\nHua’s Water Prison: Cast watery sphere.\nMist Stance: Cast gaseous form.\nOne with the Tides: Gain underwater adaptations for 8 hours.\nRaise the Still Waters: Cast wall of water*.\nRaise the Troubled Earth: Cast wall of sand*.\nRide the Wind: Cast fly.\nRiver of Hungry Flame: Cast wall of fire.\nSweeping Crosswind: Cast wind wall.\nTsunami: Cast tidal wave*.\n\n17th level\nAvatar of the Elements: Cast investiture of [element]*.\nBreath of Winter: Cast cone of cold.\nChanging the Tide: Redirect a missed attack against you to an adjacent creature.\nEye of the Hurricane: Cast control winds*.\nMold the Mountain: Cast transmute rock*.\nMoth’s Demise: Cast immolation*.\nSwirling Crab’s Revenge: Cast maelstrom*.\nWave of Rolling Earth: Cast wall of stone."
                },
            ]
        },
        {
            "class":"Monk",
            "type": "Way of the Open Hand",
            "description": "",
            "abilities": [
                {
                    "abilityTitle": "Open Hand Technique",
                    "abilityDescription": "Starting when you choose this tradition at 3rd level, you can manipulate your enemy’s ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects on that target:\nIt must succeed on a Dexterity saving throw or be knocked prone.\nIt must make a Strength saving throw. If it fails, you can push it up to 15 feet away from you.\nIt can’t take reactions until the end of your next turn."
                },
                {
                    "abilityTitle": "Wholeness of Body",
                    "abilityDescription": "At 6th level, you gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again."
                },
                {
                    "abilityTitle": "Tranquility",
                    "abilityDescription": "Beginning at 11th level, you can enter a special meditation that surrounds you with an aura of peace. At the end of a long rest, you gain the effect of a sanctuary spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 8 + your Wisdom modifier + your proficiency bonus."
                },
                {
                    "abilityTitle": "Quivering Palm",
                    "abilityDescription": "At 17th level, you gain the ability to set up lethal vibrations in someone’s body. When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level. The vibrations are harmless unless you use your action to end them.\n\nTo do so, you and the target must be on the same plane of existence. When you use this action, the creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d10 necrotic damage. You can have only one creature under the effect of this feature at a time. You can choose to end the vibrations harmlessly without using an action."
                },
            ]
        },
        /*      

        Paladin

        */
        {
            "class":"Paladin",
            "type": "Oath of Devotion",
            "description": "The Oath of Devotion binds a paladin to the loftiest ideals of justice, virtue, and order. Sometimes called cavaliers, white knights, or holy warriors, these paladins meet the ideal of the knight in shining armor, acting with honor in pursuit of justice and the greater good. They hold themselves to the highest standards of conduct, and some, for better or worse, hold the rest of the world to the same standards. Many who swear this oath are devoted to gods of law and good and use their gods’ tenets as the measure of their devotion. They hold angels—the perfect servants of good—as their ideals, and incorporate images of angelic wings into their helmets or coats of arms. \n\nTenets of Devotions\nThough the exact words and strictures of the Oath of Devotion vary, paladins of this oath share these tenets.\n\tHonesty. Don’t lie or cheat. Let your word be your promise.\n\tCourage. Never fear to act, though caution is wise.\n\tCompassion. Aid others, protect the weak, and punish those who threaten them. Show mercy to your foes, but temper it with wisdom.\n\tHonor. Treat others with fairness, and let your honorable deeds be an example to them. Do as much good as possible while causing the least amount of harm.\n\tDuty. Be responsible for your actions and their consequences, protect those entrusted to your care, and obey those who have just authority over you.\n\nOath Spells\nYou gain oath spells at the paladin levels listed.\nPaladin Level\tSpells\n3rd\tprotection from evil and good, sanctuary\n5th\tlesser restoration, zone of truth\n9th\tbeacon of hope, dispel magic\n13th\tfreedom of movement, guardian of faith\n17th\tcommune, flame strike",

            "abilities": [
                {
                    "abilityTitle": "Channel Divinity",
                    "abilityDescription": "When you take this oath at 3rd level, you gain the following two Channel Divinity options.\nSacred Weapon. As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier to attack rolls made with that weapon (with a minimum bonus of +1). The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becomes magical for the duration. You can end this effect on your turn as part of any other action. If you are no longer holding or carrying this weapon, or if you fall unconscious, this effect ends.\nTurn the Unholy. As an action, you present your holy symbol and speak a prayer censuring fiends and undead, using your Channel Divinity. Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage. A turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action."
                },
                {
                    "abilityTitle": "Aura of Devotion",
                    "abilityDescription": "Starting at 7th level, you and friendly creatures within 10 feet of you can’t be charmed while you are conscious. At 18th level, the range of this aura increases to 30 feet."
                },
                {
                    "abilityTitle": "Purity of Spirit",
                    "abilityDescription": "Beginning at 15th level, you are always under the effects of a protection from evil and good spell."
                },
                {
                    "abilityTitle": "Holy Nimbus",
                    "abilityDescription": "At 20th level, as an action, you can emanate an aura of sunlight. For 1 minute, bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that. Whenever an enemy creature starts its turn in the bright light, the creature takes 10 radiant damage. In addition, for the duration, you have advantage on saving throws against spells cast by fiends or undead. Once you use this feature, you can’t use it again until you finish a long rest."
                },
            ]
        },
        {
            "class":"Paladin",
            "type": "Oath of Vengeance",
            "description": "The Oath of Vengeance is a solemn commitment to punish those who have committed a grievous sin. When evil forces slaughter helpless villagers, when an entire people turns against the will of the gods, when a thieves’ guild grows too violent and powerful, when a dragon rampages through the countryside—at times like these, paladins arise and swear an Oath of Vengeance to set right that which has gone wrong. To these paladins— sometimes called avengers or dark knights —their own purity is not as important as delivering justice.\n\nTenets of Vengeance\nThe tenets of the Oath of Vengeance vary by paladin, but all the tenets revolve around punishing wrongdoers by any means necessary. Paladins who uphold these tenets are willing to sacrifice even their own righteousness to mete out justice upon those who do evil, so the paladins are often neutral or lawful neutral in alignment. The core principles of the tenets are brutally simple.\n\tFight the Greater Evil. Faced with a choice of fighting my sworn foes or combating a lesser evil. I choose the greater evil.\n\tNo Mercy for the Wicked. Ordinary foes might win my mercy, but my sworn enemies do not.\n\tBy Any Means Necessary. My qualms can’t get in the way of exterminating my foes.\n\tRestitution. If my foes seek to ruin the world, it is because I failed to stop them. I must help those harmed by their misdeeds.\n\nOath Spells\nYou gain oath spells at the paladin levels listed.\nPaladin Level\tSpells\n3rd\tBane, hunter’s mark\n5th\tHold person, misty step\n9th\tHaste, protection from energy\n13th\tBanishment, dimension door\n17th\tHold monster, scrying",
            "abilities": [
                {
                    "abilityTitle": "Channel Divinity",
                    "abilityDescription": "When you take this oath at 3rd level, you gain the following two Channel Divinity options.\nAbjure Enemy. As an action, you present your holy symbol and speak a prayer o f denunciation, using your Channel Divinity. Choose one creature within 60 feet of you that you can see. That creature must make a Wisdom saving throw, unless it is immune to being frightened. Fiends and undead have disadvantage on this saving throw.On a failed save, the creature is frightened for 1 minute or until it takes any damage. While frightened, the creature’s speed is 0, and it can’t benefit from any bonus to its speed.On a successful save, the creature’s speed is halved for 1 minute or until the creature takes any damage.\nVow of Enmity. As a bonus action, you can utter a vow of enmity against a creature you can see within 10 feet of you, using your Channel Divinity. You gain advantage on attack rolls against the creature for 1 minute or until it drops to 0 hit points or falls unconscious."
                },
                {
                    "abilityTitle": "Relentless Avenger",
                    "abilityDescription": "By 7th level, your supernatural focus helps you close off a foe’s retreat. When you hit a creature with an opportunity attack, you can move up to half your speed immediately after the attack and as part of the same reaction. This movement doesn’t provoke opportunity attacks."
                },
                {
                    "abilityTitle": "Soul of Vengeance",
                    "abilityDescription": "Starting at 15th level, the authority with which you speak your Vow o f Enmity gives you greater power over your foe. When a creature under the effect o f your Vow pf Enmity makes an attack, you can use your reaction to make a melee weapon attack against that creature if it is within range."
                },
                {
                    "abilityTitle": "Avenging Angel",
                    "abilityDescription": "At 20th level, you can assume the form of an angelic avenger. Using your action, you undergo a transformation. For 1 hour, you gain the following benefits:\nWings sprout from your back and grant you a flying speed of 60 feet.\nYou emanate an aura of menace in a 30-foot radius. The first time any enemy creature enters the aura or starts its turn there during a battle, the creature must succeed on a Wisdom saving throw or become frightened of you for 1 minute or until it takes any damage. Attack rolls against the frightened creature have advantage.\nOnce you use this feature, you can’t use it again until you finish a long rest."
                },
            ]
        },
        {
            "class":"Paladin",
            "type": "Oath of the Ancients",
            "description": "The Oath of the Ancients is as old as the race of elves and the rituals of the druids. Sometimes called fey knights, green knights, or horned knights, paladins who swear this oath cast their lot with the side of the light in the cosmic struggle against darkness because they love the beautiful and life-giving things of the world, not necessarily because they believe in principles of honor, courage, and justice. They adorn their armor and clothing with images of growing things-leaves, antlers, or flowers-to reflect their commitment to preserving life and light in the world.\n\nTenets of the Ancients\nThe tenets of the Oath of the Ancients have been preserved for uncounted centuries. This oath emphasizes the principles of good above any concerns of law or chaos. Its four central principles are simple.\n\tKindle the Light. Through your acts of mercy, kindness, and forgiveness, kindle the light of hope in the world, beating back despair.\n\tShelter the Light. Where there is good, beauty, love, and laughter in the world, stand against the wickedness that would swallow it. Where life flourishes, stand against the forces that would render it barren.\n\tPreserve Your Own Light. Delight in song and laughter, in beauty and art. If you allow the light to die in your own heart, you can't preserve it in the world.\n\tBe the Light. Be a glorious beacon for all who live in despair. Let the light of your joy and courage shine forth in all your deeds.\n\nOath Spells\nYou gain oath spells at the paladin levels listed.\nPaladin Level\tSpells\n3rd\tEnsnaring Strike, Speak with Animals\n5th\tMoonbeam, Misty Step\n9th\tPlant Growth, Protection from Energy\n13th\tIce storm, Stoneskin\n17th\tCommune with Nature, Tree Stride",
            "abilities": [
                {
                    "abilityTitle": "Channel Divinity",
                    "abilityDescription": "When you take this oath at 3rd level, you gain the following two Channel Divinity options.\nNature's Wrath. You can use your Channel Divinity to invoke primeval forces to ensnare a foe. As an action, you can cause spectral vines to spring up and reach for a creature within 10 feet of you that you can see. The creature must succeed on a Strength or Dexterity saving throw (its choice) or be restrained. While restrained by the vines, the creature repeats the saving throw at the end of each of its turns. On a success, it frees itself and the vines vanish.\nTurn the Faithless. You can use your Channel Divinity to utter ancient words that are painful for fey and fiends to hear. As an action, you present your holy symbol, and each fey or fiend within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage.A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action. If the creature's true form is concealed by an illusion, shapeshifting, or other effect, that form is revealed while it is turned."
                },
                {
                    "abilityTitle": "Aura of Warding",
                    "abilityDescription": "Beginning at 7th level, ancient magic lies so heavily upon you that it forms an eldritch ward. You and friendly creatures within 10 feet of you have resistance to damage from spells. At 18th level, the range of this aura increases to 30 feet."
                },
                {
                    "abilityTitle": "Undying Sentinel",
                    "abilityDescription": "Starting at 15th level, when you are reduced to 0 hit points and are not killed outright, you can choose to drop to 1 hit point instead. Once you use this ability, you can't use it again until you finish a long rest. Additionally, you suffer none of the drawbacks of old age, and you can't be aged magically."
                },
                {
                    "abilityTitle": "Elder Champion",
                    "abilityDescription": "At 20th level, you can assume the form of an ancient force of nature, taking on an appearance you choose. For example, your skin might turn green or take on a bark-like texture, your hair might become leafy or moss-like, or you might sprout antlers or a lion-like mane.Using your action, you undergo a transformation. For 1 minute, you gain the following benefits:\nAt the start of each of your turns, you regain 10 hit points.\nWhenever you cast a paladin spell that has a casting time of 1 action, you can cast it using a bonus action instead.\nEnemy creatures within 10 feet of you have disadvantage on saving throws against your paladin spells and Channel Divinity options.\nOnce you use this feature, you can't use it again until you finish a long rest."
                },
            ]
        },
        /*      

        Rogue

        */
        {
            "class":"Rogue",
            "type": "Arcane Trickster",
            "description": "Spellcasting\nWhen you reach 3rd level, you gain the ability to cast spells.\nCantrips. You learn three cantrips: mage hand and two other cantrips of your choice from the wizard spell list. You learn another wizard cantrip of your choice at 10th level.\nSpell Slots. The Arcane Trickster Spellcasting table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.For example, if you know the 1st-level spell charm person and have a 1st-level and a 2nd-level spell slot available, you can cast charm person using either slot.\nSpells Known of 1st-Level and Higher. You know three 1st-level wizard spells of your choice, two of which you must choose from the enchantment and illusion spells on the wizard spell list.The Spells Known column of the Arcane Trickster Spellcasting table shows when you learn more wizard spells of 1st level or higher. Each of these spells must be an enchantment or illusion spell of your choice, and must be of a level for which you have spell slots. For instance, when you reach 7th level in this class, you can learn one new spell of 1st or 2nd level.The spells you learn at 8th, 14th, and 20th level can come from any school of magic.Whenever you gain a level in this class, you can replace one of the wizard spells you know with another spell of your choice from the wizard spell list. The new spell must be of a level for which you have spell slots, and it must be an enchantment or illusion spell, unless you’re replacing the spell you gained at 8th, 14th, or 20th level.\nSpellcasting Ability. Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.\nSpell save DC = 8 + your proficiency bonus + your Intelligence modifier\nSpell attack modifier = your proficiency bonus + your Intelligence modifier\n\nRogueLevel\nCantrips Known\tSpells Known\t1st\t2nd\t3rd\t4th\n3rd\t3\t3\t2\t—\t—\t—\n4th\t3\t4\t3\t—\t—\t—\n5th\t3\t4\t3\t—\t—\t—\n6th\t3\t4\t3\t—\t—\t—\n7th\t3\t5\t4\t2\t—\t—\n8th\t3\t6\t4\t2\t—\t—\n9th\t3\t6\t4\t2\t—\t—\n10th\t4\t7\t4\t3\t—\t—\n11th\t4\t8\t4\t3\t—\t—\n12th\t4\t8\t4\t3\t—\t—\n13th\t4\t9\t4\t3\t2\t—\n14th\t4\t10\t4\t3\t2\t—\n15th\t4\t10\t4\t3\t2\t—\n16th\t4\t11\t4\t3\t3\t—\n17th\t4\t11\t4\t3\t3\t—\n18th\t4\t11\t4\t3\t3\t—\n19th\t4\t12\t4\t3\t3\t1\n20th\t4\t13\t4\t3\t3\t1",
            "abilities": [
                {
                    "abilityTitle": "Mage Hand Legerdemain",
                    "abilityDescription": "Starting at 3rd level, when you cast mage hand, you can make the spectral hand invisible, and you can perform the following additional tasks with it:\n\tYou can stow one object the hand is holding in a container worn or carried by another creature.\n\tYou can retrieve an object in a container worn or carried by another creature.\n\tYou can use thieves’ tools to pick locks and disarm traps at range.\n\nYou can perform one of these tasks without being noticed by a creature if you succeed on a Dexterity (Sleight of Hand) check contested by the creature’s Wisdom (Perception) check.In addition, you can use the bonus action granted by your Cunning Action to control the hand."
                },
                {
                    "abilityTitle": "Magical Ambush",
                    "abilityDescription": "Starting at 9th level, if you are hidden from a creature when you cast a spell on it, the creature has disadvantage on any saving throw it makes against the spell this turn."
                },
                {
                    "abilityTitle": "Versatile Trickster",
                    "abilityDescription": "At 13th level, you gain the ability to distract targets with your mage hand. As a bonus action on your turn, you can designate a creature within 5 feet of the spectral hand created by the spell. Doing so gives you advantage on attack rolls against that creature until the end of the turn."
                },
                {
                    "abilityTitle": "Spell Thief",
                    "abilityDescription": "At 17th level, you gain the ability to magically steal the knowledge of how to cast a spell from another spellcaster. Immediately after a creature casts a spell that targets you or includes you in its area of effect, you can use your reaction to force the creature to make a saving throw with its spellcasting ability modifier. The DC equals your spell save DC. On a failed save, you negate the spell’s effect against you, and you steal the knowledge of the spell if it is at least 1st level and of a level you can cast (it doesn’t need to be a wizard spell). For the next 8 hours, you know the spell and can cast it using your spell slots. The creature can’t cast that spell until the 8 hours have passed. Once you use this feature, you can’t use it again until you finish a long rest."
                },
            ]
        },
        {
            "class":"Rogue",
            "type": "Assassin",
            "description": "You focus your training on the grim art of death. Those who adhere to this archetype are diverse: hired killers, spies, bounty hunters, and even specially anointed priests trained to exterminate the enemies of their deity. Stealth, poison, and disguise help you eliminate your foes with deadly efficiency.",
            "abilities": [
                {
                    "abilityTitle": "Bonus Proficiencies",
                    "abilityDescription": "When you choose this archetype at 3rd level, you gain proficiency with the disguise kit and the poisoner's kit."
                },
                {
                    "abilityTitle": "Assassinate",
                    "abilityDescription": "Starting at 3rd level, you are at your deadliest when you get the drop on your enemies. You have advantage on attack rolls against any creature that hasn't taken a turn in the combat yet. In addition, any hit you score against a creature that is surprised is a critical hit."
                },
                {
                    "abilityTitle": "Infiltration Expertise",
                    "abilityDescription": "Starting at 9th level, you can unfailingly create false identities for yourself. You must spend seven days and 25 gp to establish the history, profession, and affiliations for an identity. Vou can't establish an identity that belongs to someone else. For example, you might acquire appropriate clothing, letters of introduction, and official looking certification to establish yourself as a member of a trading house from a remote city so you can insinuate yourself into the company of other wealthy merchants. Thereafter, if you adopt the new identity as a disguise, other creatures believe you to be that person until given an obvious reason not to."
                },
                {
                    "abilityTitle": "Imposter",
                    "abilityDescription": "At 13th level, you gain the ability to unerringly mimic another person's speech, writing, and behavior. You must spend at least three hours studying these three components of the person's behavior, listening to speech, examining handwriting, and observing mannerisms. Your ruse is indiscernible to the casual observer. If a wary creature suspects something is amiss, you have advantage on any Charisma (Deception) check you make to avoid detection."
                },
                {
                    "abilityTitle": "Death Strike",
                    "abilityDescription": "Starting at 17th level, you become a master of instant death. When you attack and hit a creature that is surprised, it must make a Constitution saving throw (DC 8 + your Dexterity modifier + your proficiency bonus). On a failed save, double the damage of your attack against the creature."
                },
            ]
        },
        {
            "class":"Rogue",
            "type": "Battle Master",
            "description": "Combat Superiority\nWhen you choose this archetype at 3rd level, you learn maneuvers that are fueled by special dice called superiority dice.\n\tManeuvers. You learn three maneuvers of your choice, which are detailed under “Maneuvers” below. Many maneuvers enhance an attack in some way. You can use only one maneuver per attack. You learn two additional maneuvers of your choice at 7th, 10th, and 15th level. Each time you learn new maneuvers, you can also replace one maneuver you know with a different one.\n\tSuperiority Dice. You have four superiority dice, which are d8s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a short or long rest. You gain another superiority die at 7th level and one more at 15th level.\n\tSaving Throws. Some of your maneuvers require your target to make a saving throw to resist the maneuver’s effects. The saving throw DC is calculated as follows:\n\t\tManeuver save DC = 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice)\n\nManeuvers\nCommander’s Strike. When you take the Attack action on your turn, you can forgo one of your attacks and use a bonus action to direct one of your companions to strike. When you do so, choose a friendly creature who can see or hear you and expend one superiority die. That creature can immediately use its reaction to make one weapon attack, adding the superiority die to the attack’s damage roll.\nDisarming Attack. When you hit a creature with a weapon attack, you can expend one superiority die to attempt to disarm the target, forcing it to drop one item of your choice that it’s holding. You add the superiority die to the attack’s damage roll, and the target must make a Strength saving throw. On a failed save, it drops the object you choose. The object lands at its feet.\nDistracting Strike. When you hit a creature with a weapon attack, you can expend one superiority die to distract the creature, giving your allies an opening. You add the superiority die to the attack’s damage roll. The next attack roll against the target by an attacker other than you has advantage if the attack is made before the start of your next turn.\nEvasive Footwork. When you move, you can expend one superiority die, rolling the die and adding the number rolled to your AC until you stop moving.\nFeinting Attack. You can expend one superiority die and use a bonus action on your turn to feint, choosing one creature within 5 feet of you as your target. You have advantage on your next attack roll against that creature. If that attack hits, add the superiority die to the attack’s damage roll.\nGoading Attack. When you hit a creature with a weapon attack, you can expend one superiority die to attempt to goad the target into attacking you. You add the superiority die to the attack’s damage roll, and the target must make a Wisdom saving throw. On a failed save, the target has disadvantage on all attack rolls against targets other than you until the end of your next turn.\nLunging Attack. When you make a melee weapon attack on your turn, you can expend one superiority die to increase your reach for that attack by 5 feet. If you hit, you add the superiority die to the attack’s damage roll.\nManeuvering Attack. When you hit a creature with a weapon attack, you can expend one superiority die to maneuver one of your comrades into a more advantageous position. You add the superiority die to the attack’s damage roll, and you choose a friendly creature who can see or hear you. That creature can use its reaction to move up to half its speed without provoking opportunity attacks from the target of your attack.\nMenacing Attack. When you hit a creature with a weapon attack, you can expend one superiority die to attempt to frighten the target. You add the superiority die to the attack’s damage roll, and the target must make a Wisdom saving throw. On a failed save, it is frightened of you until the end of your next turn.\nParry. When another creature damages you with a melee attack, you can use your reaction and expend one superiority die to reduce the damage by the number you roll on your superiority die + your Dexterity modifier.\nPrecision Attack. When you make a weapon attack roll against a creature, you can expend one superiority die to add it to the roll. You can use this maneuver before or after making the attack roll, but before any effects of the attack are applied.\nPushing Attack. When you hit a creature with a weapon attack, you can expend one superiority die to attempt to drive the target back. You add the superiority die to the attack's damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you push the target up to 15 feet away from you.\nRally. On your turn, you can use a bonus action and expend one superiority die to bolster the resolve of one of your companions. When you do so, choose a friendly creature who can see or hear you. That creature gains temporary hit points equal to the superiority die roll + your Charisma modifier.\nRiposte. When a creature misses you with a melee attack, you can use your reaction and expend one superiority die to make a melee weapon attack against the creature. If you hit, you add the superiority die to the attack's damage roll.\nSweeping Attack. When you hit a creature with a melee weapon attack, you can expend one superiority die to attempt to damage another creature with the same attack. Choose another creature within 5 feet of the original target and within your reach. If the original attack roll would hit the second creature, it takes damage equal to the number you roll on your superiority die. The damage is of the same type dealt by the original attack.\nTrip Attack. When you hit a creature with a weapon attack, you can expend one superiority die to attempt to knock the target down. You add the superiority die to the attack’s damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you knock the target prone.",
            "abilities": [
                {
                    "abilityTitle": "Student of War",
                    "abilityDescription": "At 3rd level, you gain proficiency with one type of artisan’s tools of your choice."
                },
                {
                    "abilityTitle": "Know Your Enemy",
                    "abilityDescription": "Starting at 7th level, if you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice:\n\tStrength score\n\tDexterity score\n\tConstitution score\n\tArmor Class\n\tCurrent hit points\n\tTotal class levels (if any)\n\tFighter class levels (if any)"
                },
                {
                    "abilityTitle": "Improved Combat Superiority",
                    "abilityDescription": "At 10th level, your superiority dice turn into d10s. At 18th level, they turn into d12s."
                },
                {
                    "abilityTitle": "Relentless",
                    "abilityDescription": "Starting at 15th level, when you roll initiative and have no superiority dice remaining, you regain 1 superiority die."
                },
            ]
        },
        {
            "class":"Rogue",
            "type": "Swashbuckler",
            "description": "You focus your training on the art of the blade, relying on speed, elegance, and charm in equal parts. While some warriors are brutes clad in heavy armor, your method of fighting looks almost like a performance. Duelists and pirates typically belong to this archetype. A Swashbuckler excels in single combat, and can fight with two weapons while safely darting away from an opponent.",
            "abilities": [
                {
                    "abilityTitle": "Fancy Footwork",
                    "abilityDescription": "When you choose this archetype at 3rd level, you learn how to land a s trike and then slip away without reprisal. During your turn, if you make a melee attack against a creature, that creature can't make opportunity attacks against you for the rest of your turn."
                },
                {
                    "abilityTitle": "Rakish Audacity",
                    "abilityDescription": "Starting at 3rd level, your unmistakable confidence propels you into battle. You can add your Charisma modifier to your initiative rolls. In addition, you don't need advantage on your attack roll to use your Sneak Attack if no creature other than your target is within 5 feet of you. All the other rules for the Sneak Attack class feature still apply to you."
                },
                {
                    "abilityTitle": "Panache",
                    "abilityDescription": "At 9th level, your charm becomes extraordinarily beguiling. As an action, you can make a Charisma (Persuasion) check contested by a creature's Wisdom (Insight) check. The creature must be able to hear you, and the two of you must share a language.If you succeed on the check and the creature is hostile to you, it has disadvantage on attack rolls against targets other than you and can't make opportunity attacks against targets other than you. This effect lasts for 1 minute, until one of your companions attacks the targetor affects it with a spell, or until you and the target are more than 60 feet apart. If you succeed on the check and the creature isn't hostile to you, it is charmed by you for 1 minute. While charmed, it regards you as a friendly acquaintance. This effect ends immediately if you or your companions do anything harmful to it."
                },
                {
                    "abilityTitle": "Elegant Maneuver",
                    "abilityDescription": "Starting at 13th level, you can use a bonus action on your turn to gain advantage on the next Dexterity (Acrobatics) or Strength (Athletics) check you make during the same turn."
                },
                {
                    "abilityTitle": "Master Duelist",
                    "abilityDescription": "Beginning at 17th level, your mastery of the blade lets you turn failure into success in combat. If you miss with an attack roll, you can roll it again with advantage. Once you do so, you can't use this feature again until you finish a short or long rest."
                },
            ]
        },
        {
            "class":"Rogue",
            "type": "Theif",
            "description": "",
            "abilities": [
                {
                    "abilityTitle": "Fast Hands",
                    "abilityDescription": "Starting at 3rd level, you can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) check, use your thieves' tools to disarm a trap or open a lock, or take the Use an Object action."
                },
                {
                    "abilityTitle": "Second-story Work",
                    "abilityDescription": "When you choose this archetype at 3rd level, you gain the ability to climb faster than normal; climbing no longer costs you extra movement. In addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier."
                },
                {
                    "abilityTitle": "Supreme Sneak",
                    "abilityDescription": "Starting at 9th level, you have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn."
                },
                {
                    "abilityTitle": "Use Magic Device",
                    "abilityDescription": "By 13th level, you have learned enough about the workings of magic that you can improvise the use of items even when they are not intended for YOU. You ignore all class, race, and level requirements on the use of magic items."
                },
                {
                    "abilityTitle": "Thief's Reflexes",
                    "abilityDescription": "When you reach 17th level, you have become adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your second turn at your initiative minus 10. You can't use this feature when you are surprised."
                },
            ]
        },
        /*      

        Sorcerer

        */
       {
            "class":"Sorcerer",
            "type": "Draconic Bloodline",
            "description": "Your innate magic comes from draconic magic that was mingled with your blood are that of your ancestors. Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times who made a bargain with a dragon are who might even have claimed a dragon parent. Some of these bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the first of a new bloodline, as a result of a pact are some other exceptional circumstance.",
            "abilities": [
                {
                    "abilityTitle": "Dragon Ancestor",
                    "abilityDescription": "At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.\n\nDraconic Ancestry\nDragon\tDamage Type\nBlack\tAcid\nBlue\tLightning\nBrass\tFire\nBronze\tLightning\nCopper\tAcid\nGold\tFire\nGreen\tPoison\nRed\tFire\nSilver\tCold\nWhite\tCold\n\nYou can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
                },
                {
                    "abilityTitle": "Draconic Resilience",
                    "abilityDescription": "As magic flows through your body, it causes physical traits of your dragon ancestors to emerge. At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, parts of your skin are covered by a thin sheen of dragon-like scales.\n\nWhen you aren't wearing armor, your AC equals 13 + your Dexterity modifier."
                },
                {
                    "abilityTitle": "Elemental Affinity",
                    "abilityDescription": "Starting at 6th level, when you cast a spell that deals damage of the type associated with your draconic ancestry, add your Charisma modifier to that damage. At the same time, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour."
                },
                {
                    "abilityTitle": "Dragon Wings",
                    "abilityDescription": "At 14th level, you gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current speed. You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn. You can't manifest your wings while wearing armor unless the armor is made to accommodate them, and clothing not made to accommodate your wings might be destroyed when you manifest them."
                },
                {
                    "abilityTitle": "Draconic Presence",
                    "abilityDescription": "Beginning at 18th level, you can channel the dread presence of your dragon ancestor, causing those around you to become awestruck or frightened. As an action, you can spend 5 sorcery points to draw on this power and exude an aura of awe or fear (your choice) to a distance of 60 feel. For 1 minute or until you lose your concentration (as if you were casting a concentration spell), each hostile creature that starts its turn in this aura must succeed on a Wisdom saving throw or be charmed (if you chose awe) or frightened (if you chose fear) until the aura ends. A creature that succeeds on this saving throw is immune to your aura for 24 hours."
                },
            ]
        },
        {
            "class":"Sorcerer",
            "type": "Favored Soul",
            "description": "",
            "abilities": [
                {
                    "abilityTitle": "Chosen of the Gods",
                    "abilityDescription": "At 1st level, you choose one of the cleric class’s divine domains. You add that domain’s spells for 1st-level clerics to your known spells. These spells do not count against the number of spells you can know, and they are considered to be sorcerer spells for you. When you reach 3rd, 5th, 7th, and 9th levels in the sorcerer class, you likewise learn your domain’s spells that become available at those levels.\nKnowledge Domain\nLife Domain\nLight Domain\nNature Domain\nTempest Domain\nTrickery Domain\nWar Domain\nMadness"
                },
                {
                    "abilityTitle": "Bonus Proficiencies",
                    "abilityDescription": "At 1st level, you gain proficiency in light armor, medium armor, shields, and simple weapons."
                },
                {
                    "abilityTitle": "Extra Attack",
                    "abilityDescription": "Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
                },
                {
                    "abilityTitle": "Divine Wings",
                    "abilityDescription": "At 14th level, you gain the ability to sprout a pair of wings from your back (feathered or bat-like, your choice), gaining a flying speed equal to your current walking speed. You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn. You can’t manifest your wings while wearing armor unless the armor is made to accommodate them, and clothing not made to accommodate your wings might be destroyed when you manifest them."
                },
                {
                    "abilityTitle": "Power of the Chosen",
                    "abilityDescription": "Starting at 18th level, when you cast one of the spells you learned from your Chosen of the Gods class feature, you regain hit points equal to your Charisma modifier (minimum +1) + the spell’s level."
                },
            ]
        },
        {
            "class":"Sorcerer",
            "type": "Node Sorcerer",
            "description": "Node sorcerers are fonts of magic, intersecting with, yet separate from, the Weave (ancient Node Sorcerers were in fact the source of magic that became the Weave). Their ability to manipulate the primal forces of magic is unparalleled.",
            "abilities": [
                {
                    "abilityTitle": "Arcane Understanding",
                    "abilityDescription": "Starting at 1st level, you don't need material components or an arcane focus in order to cast sorcerer spells (except for material components that have a gold piece value)."
                },
                {
                    "abilityTitle": "Arcane Sight",
                    "abilityDescription": "At 1st level you know and can cast Detect Magic at will, without expending a spell slot. This does not count against your spells known (you can not swap it out at later levels)."
                },
                {
                    "abilityTitle": "Arcane Disruption",
                    "abilityDescription": "At 6th level you learn two more Metamagic options (one of which must be Subtle Spell if not already known) and can now use two different Metamagic options on spells you cast (three if using the Empowered Spell option). Metamagic options are applied to the spell as cast so that, for example, a Fly spell that is Twinned and Extended will cost 4 sorcery points total, (3 for Twinning a 3rd level spell + 1 for Extended), and have the duration of both effects increased.\n\nIn addition you learn both Dispel Magic and Counterspell (choose one or two other spells if one or both are already known). They do not count against your spells known (you can not swap them out at later levels)."
                },
                {
                    "abilityTitle": "Arcane Casting",
                    "abilityDescription": "At 14th level you learn an additional Metamagic option and can now use four different Metamagic options on spells you cast (five if using the Empowered Spell option). In addition, you acquire the ability to create spell slots of the 6th and 7th levels (Costing 9 and 10 sorcery points respectively). These spell slots disappear after a short rest."
                },
                {
                    "abilityTitle": "Arcane Font",
                    "abilityDescription": "At 18th level you learn an additional Metamagic option and can use as many as you wish per spell (only one of each option). In addition, you acquire the ability to create spell slots of the 8th level (costing 11 sorcery points). These spell slots disappear after a short rest. Furthermore, you are able to overcome anti-magic effects (such as the Anti-magic spell, other magic \"dead zones\", or even being made to wear armor you're not proficient in). You may cast spells while in those effects and cast spells into those effects, affecting creatures/objects as though the effects did not exist. You must spend a number of sorcery points equal to the level of the spell you cast (cantrips require 1 sorcery point) in order to do so."
                },
            ]
        },
        {
            "class":"Sorcerer",
            "type": "Storm Magic",
            "description": "Stormborn\nThe arcane magic you command is infused with elemental air. You can speak, read, and write Primordial. In addition, you gain the following spells at the listed sorcerer level. These spells do not count against the number of sorcerer spells you know.\nSorcerer Level\tSpells\n1st\tFog cloud, thunderwave\n3rd\tGust of wind, levitate\n5th\tCall lightning, sleet storm\n7th\tConjure minor elementals1, ice storm\n9th\tConjure elemental2",
            "abilities": [
                {
                    "abilityTitle": "Tempestuous Magic",
                    "abilityDescription": "At 1st level, you are attuned to elemental air magic. Whenever you cast a spell other than a cantrip during your turn, whirling gusts of elemental air surround you. You can use a bonus action to fly 10 feet without provoking opportunity attacks."
                },
                {
                    "abilityTitle": "Heart of the Storm",
                    "abilityDescription": "At 6th level, you gain resistance to lightning and thunder damage. Whenever you cast a spell other than a cantrip that deals lightning or thunder damage, a stormy aura surrounds you. In addition to the spell’s effects, creatures of your choice within 10 feet of you take lightning or thunder damage (choose each time this ability activates) equal to half your sorcerer level."
                },
                {
                    "abilityTitle": "Storm Guide",
                    "abilityDescription": "At 6th level, you gain the ability to subtly control the weather around you. If it is raining, you can use an action to cause the rain to stop falling in a 20‐foot radius centered on you. You can end this effect as a bonus action. If it is windy, you can use a bonus action each round to choose the direction that the wind blows in a 100‐foot radius around you. The wind blows in that direction until the end of your next turn. You have no ability to alter the speed of the wind."
                },
                {
                    "abilityTitle": "Storm's Fury",
                    "abilityDescription": "At 14th level, the storm energy you channel through your magic seethes within your soul. When you are hit by a melee attack, you can use your reaction to deal lightning damage to the attacker equal to your sorcerer level. The attacker must also make a Strength saving throw, with a DC equal to 8 + your Charisma bonus + your proficiency bonus. On a failed save, the attacker is pushed in a straight line 20 feet away from you."
                },
                {
                    "abilityTitle": "Wind Soul",
                    "abilityDescription": "At 18th level, you gain a flying speed of 60 feet and immunity to lightning and thunder damage. As an action, you can reduce your flying speed to 30 feet for one hour and choose a number of creatures within 30 feet of you equal to 3 + your Charisma modifier. The chosen creatures gain a flying speed of 30 feet for 1 hour."
                },
            ]
        },
        {
            "class":"Sorcerer",
            "type": "Wild Magic",
            "description": "Your innate magic comes from the wild forces of chaos that underlie the order of creation. You might have endured exposure to some form of raw magic, perhaps through a planar portal leading to Limbo, the Elemental Planes, or the mysterious Far Realm. Perhaps you were blessed by a powerful fey creature or marked by a demon. Or your magic could be a fluke of your birth, with no apparent cause or reason. However it carne to be, this chaotic magic churns within you, waiting for any outlet.",
            "abilities": [
                {
                    "abilityTitle": "Wild Magic Surge",
                    "abilityDescription": "Starting when you choose this origin at 1st level, your spellcasting can unleash surges of untamed magic. Immediately after you cast a sorcerer spell of 1st level or higher, the DM can have you roll a d20. If you roll a 1, roll on the Wild Magic Surge table to create a random magical effect."
                },
                {
                    "abilityTitle": "Tides of Chaos",
                    "abilityDescription": "Starting at 1st level, you can manipulate the forces of chance and chaos to gain advantage on one attack roll, ability check, or saving throw. Once you do so, you must finish a long rest before you can use this feature again. Any time before you regain the use of this feature, the DM can have you roll on the Wild Magic Surge table immediately after you cast a sorcerer spell of 1st level or higher. You then regain the use of this feature."
                },
                {
                    "abilityTitle": "Bend Luck",
                    "abilityDescription": "Starting at 6th level, you have the ability to twist fate using your wild magic. When another creature you can see makes an attack roll, an ability check, or a saving throw, you can use your reaction and spend 2 sorcery points to roll 1d4 and apply the number rolled as a bonus or penalty (your choice) to the creature's roll. You can do so after the creature rolls but before any effects of the roll occur."
                },
                {
                    "abilityTitle": "Controlled Chaos",
                    "abilityDescription": "At 14th level, you gain a modicum of control over the surges of your wild magic. Whenever you roll on the Wild Magic Surge table, you can roll twice and use either number."
                },
                {
                    "abilityTitle": "Spell Bombardment",
                    "abilityDescription": "Beginning at 18th leveI, the harmful energy of your spells intensifies. When you roll damage for a spell and roll the highest number possible on any of the dice, choose one of those dice, roll it again and add that roll to the damage. You can use the feature only once per turn."
                },
            ]
        },
        /*      

        Warlock


        ALL UNFINISHED
        */
       {
            "class":"Warlock",
            "type": "",
            "description": "",
            "abilities": [
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
            ]
        },
        {
            "class":"Warlock",
            "type": "",
            "description": "",
            "abilities": [
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
            ]
        },
        {
            "class":"Warlock",
            "type": "",
            "description": "",
            "abilities": [
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
            ]
        },
        {
            "class":"Warlock",
            "type": "",
            "description": "",
            "abilities": [
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
            ]
        },
        {
            "class":"Warlock",
            "type": "",
            "description": "",
            "abilities": [
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
            ]
        },
        {
            "class":"Warlock",
            "type": "",
            "description": "",
            "abilities": [
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
            ]
        },
        {
            "class":"Warlock",
            "type": "",
            "description": "",
            "abilities": [
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
            ]
        },
    ],
    
}
            




        /*      

        Fighter

        */

/*
        {
            "class":"",
            "type": "",
            "description": "",
            "abilities": [
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
                {
                    "abilityTitle": "",
                    "abilityDescription": ""
                },
            ]
        },

*/