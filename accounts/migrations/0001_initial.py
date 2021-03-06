# Generated by Django 3.0.3 on 2020-05-15 15:40

from django.db import migrations, models
import time


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Character',
            fields=[
                ('id', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('userID', models.IntegerField(default=-1)),
                ('character_pic', models.ImageField(default=' ', upload_to='')),
                ('character_name', models.CharField(default='Ronald', max_length=50)),
                ('character_gender', models.CharField(choices=[('', ''), ('Male', 'Male'), ('Female', 'Female')], default='Male', max_length=10)),
                ('character_age', models.IntegerField()),
                ('character_height', models.CharField(default=' ', max_length=10)),
                ('character_weight', models.CharField(default=' ', max_length=10)),
                ('character_race', models.CharField(default=' ', max_length=30)),
                ('race_bonus', models.CharField(default=' ', max_length=30)),
                ('character_class', models.CharField(default=' ', max_length=30)),
                ('character_path', models.CharField(default=' ', max_length=30)),
                ('character_level', models.IntegerField(default=1)),
                ('character_alignment', models.CharField(default=' ', max_length=30)),
                ('character_deity', models.CharField(default=' ', max_length=20)),
                ('character_background', models.CharField(default=' ', max_length=30)),
                ('strength', models.IntegerField(default=10)),
                ('dexterity', models.IntegerField(default=10)),
                ('constitution', models.IntegerField(default=10)),
                ('intelligence', models.IntegerField(default=10)),
                ('wisdom', models.IntegerField(default=10)),
                ('charisma', models.IntegerField(default=10)),
                ('strMod', models.IntegerField(default=0)),
                ('dexMod', models.IntegerField(default=0)),
                ('conMod', models.IntegerField(default=0)),
                ('intMod', models.IntegerField(default=0)),
                ('wisMod', models.IntegerField(default=0)),
                ('charMod', models.IntegerField(default=0)),
                ('str_save', models.IntegerField(default=0)),
                ('strProf', models.BooleanField(default=False)),
                ('dex_save', models.IntegerField(default=0)),
                ('dexProf', models.BooleanField(default=False)),
                ('con_save', models.IntegerField(default=0)),
                ('conProf', models.BooleanField(default=False)),
                ('int_save', models.IntegerField(default=0)),
                ('intProf', models.BooleanField(default=False)),
                ('wis_save', models.IntegerField(default=0)),
                ('wisProf', models.BooleanField(default=False)),
                ('char_save', models.IntegerField(default=0)),
                ('charProf', models.BooleanField(default=False)),
                ('proficiency_bonus', models.IntegerField(default=0)),
                ('passive_wisdom', models.IntegerField(default=0)),
                ('inspiration', models.BooleanField(default=False)),
                ('acrobatics', models.IntegerField(default=0)),
                ('acrobaticsProf', models.BooleanField(default=False)),
                ('animal_handling', models.IntegerField(default=0)),
                ('animalProf', models.BooleanField(default=False)),
                ('arcana', models.IntegerField(default=0)),
                ('arcanaProf', models.BooleanField(default=False)),
                ('athletics', models.IntegerField(default=0)),
                ('athleticProf', models.BooleanField(default=False)),
                ('deception', models.IntegerField(default=0)),
                ('deceptionProf', models.BooleanField(default=False)),
                ('history', models.IntegerField(default=0)),
                ('historyProf', models.BooleanField(default=False)),
                ('insight', models.IntegerField(default=0)),
                ('insightProf', models.BooleanField(default=False)),
                ('intimidation', models.IntegerField(default=0)),
                ('intimidationProf', models.BooleanField(default=False)),
                ('investigation', models.IntegerField(default=0)),
                ('investigationProf', models.BooleanField(default=False)),
                ('medicine', models.IntegerField(default=0)),
                ('medicineProf', models.BooleanField(default=False)),
                ('nature', models.IntegerField(default=0)),
                ('natureProf', models.BooleanField(default=False)),
                ('perception', models.IntegerField(default=0)),
                ('perceptionProf', models.BooleanField(default=False)),
                ('performance', models.IntegerField(default=0)),
                ('performanceProf', models.BooleanField(default=False)),
                ('persuasion', models.IntegerField(default=0)),
                ('persuasionProf', models.BooleanField(default=False)),
                ('religion', models.IntegerField(default=0)),
                ('religionProf', models.BooleanField(default=False)),
                ('sleight_of_hand', models.IntegerField(default=0)),
                ('sleightProf', models.BooleanField(default=False)),
                ('stealth', models.IntegerField(default=0)),
                ('stealthProf', models.BooleanField(default=False)),
                ('survival', models.IntegerField(default=0)),
                ('survivalProf', models.BooleanField(default=False)),
                ('spellcasting_ability', models.CharField(default=' ', max_length=30)),
                ('spell_save_dc', models.IntegerField(default=0)),
                ('spell_attack_bonus', models.IntegerField(default=0)),
                ('armor_class', models.IntegerField(default=0)),
                ('initiative', models.IntegerField(default=0)),
                ('speed', models.IntegerField(default=0)),
                ('current_hitpoints', models.IntegerField(default=0)),
                ('max_hitpoints', models.IntegerField(default=0)),
                ('temp_hitpoints', models.IntegerField(default=0)),
                ('hit_dice', models.CharField(default=' ', max_length=20)),
                ('success_one', models.BooleanField(default=False)),
                ('success_two', models.BooleanField(default=False)),
                ('success_three', models.BooleanField(default=False)),
                ('failures_one', models.BooleanField(default=False)),
                ('failures_two', models.BooleanField(default=False)),
                ('failures_three', models.BooleanField(default=False)),
                ('platinum_pieces', models.IntegerField(default=0)),
                ('gold_pieces', models.IntegerField(default=0)),
                ('electrum_pieces', models.IntegerField(default=0)),
                ('silver_pieces', models.IntegerField(default=0)),
                ('copper_pieces', models.IntegerField(default=0)),
                ('senses', models.CharField(max_length=200, null=True)),
                ('armorProfs', models.CharField(default='None', max_length=200)),
                ('weaponProfs', models.CharField(default='None', max_length=200)),
                ('toolProfs', models.CharField(default='None', max_length=200)),
                ('languageProfs', models.CharField(default='None', max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Equipment',
            fields=[
                ('equipmentID', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('equipmentName', models.CharField(default=time.time, max_length=50, unique=True)),
                ('weight', models.IntegerField(default=0)),
                ('cost', models.CharField(default='Unknown', max_length=30)),
                ('notes', models.CharField(default='Unknown', max_length=500)),
                ('description', models.CharField(default='Unknown', max_length=1000)),
                ('tags', models.CharField(default='Unknown', max_length=100)),
                ('properties', models.CharField(default='Unknown', max_length=100)),
                ('itemType', models.CharField(default='Unknown', max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Features',
            fields=[
                ('featureID', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('featureName', models.CharField(default=1589557215.675572, max_length=30)),
                ('description', models.CharField(default='None', max_length=500)),
                ('source', models.CharField(default='Unknown', max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Spells',
            fields=[
                ('spellNumber', models.IntegerField(default=1589557215.675572, primary_key=True, serialize=False, unique=True)),
                ('spellName', models.CharField(default=1589557215.675572, max_length=30, unique=True)),
                ('level', models.CharField(default='None', max_length=15)),
                ('school', models.CharField(default='None', max_length=30)),
                ('castTime', models.CharField(default='None', max_length=30)),
                ('duration', models.CharField(default='None', max_length=30)),
                ('ritual', models.CharField(default='', max_length=10)),
                ('spellRange', models.CharField(default='None', max_length=30)),
                ('components', models.CharField(max_length=10)),
                ('description', models.CharField(default='None', max_length=500)),
                ('tags', models.CharField(default='None', max_length=50)),
                ('damage', models.CharField(max_length=30, null=True)),
                ('save', models.CharField(max_length=30, null=True)),
                ('source', models.CharField(default='None', max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Tools',
            fields=[
                ('toolID', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('toolName', models.CharField(default=time.time, max_length=50, unique=True)),
                ('weight', models.IntegerField(default=0)),
                ('cost', models.CharField(default='Unknown', max_length=30)),
                ('notes', models.CharField(default='Unknown', max_length=500)),
                ('description', models.CharField(default='Unknown', max_length=1000)),
                ('tags', models.CharField(default='Unknown', max_length=100)),
                ('properties', models.CharField(default='Unknown', max_length=100)),
                ('itemType', models.CharField(default='Unknown', max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='UsersFeatures',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userID', models.IntegerField()),
                ('featureID', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='UsersItems',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userID', models.IntegerField()),
                ('itemID', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='UsersSpells',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userID', models.IntegerField()),
                ('spellID', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Weapons',
            fields=[
                ('weaponID', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('weaponName', models.CharField(default=time.time, max_length=50, unique=True)),
                ('weight', models.IntegerField(default=0)),
                ('cost', models.CharField(default='Unknown', max_length=30)),
                ('notes', models.CharField(default='Unknown', max_length=500)),
                ('description', models.CharField(default='Unknown', max_length=1000)),
                ('tags', models.CharField(default='Unknown', max_length=100)),
                ('properties', models.CharField(default='Unknown', max_length=100)),
                ('itemType', models.CharField(default='Unknown', max_length=30)),
                ('range', models.IntegerField()),
                ('reach', models.IntegerField()),
                ('damage', models.CharField(max_length=30)),
                ('damageType', models.CharField(max_length=30)),
                ('attackType', models.CharField(max_length=30)),
            ],
        ),
    ]
