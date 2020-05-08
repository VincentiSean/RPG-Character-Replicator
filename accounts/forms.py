from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Character

class RegistrationForm(UserCreationForm):
    username = forms.CharField(max_length=20, required=True)
    email = forms.EmailField(max_length=254, required=True)

    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'password1',
            'password2',
        ]
        
    
    def __init__(self, *args, **kwargs):
        super(RegistrationForm, self).__init__(*args, **kwargs)
        for field_name in ('username', 'email', 'password1', 'password2'):
            self.fields[field_name].help_text = ''

class RaceForm(forms.Form):
    raceChoices = [
        ('Aarakocra','Aarakocra'),
        ('Aasimar','Aasimar'),
        ('Dragonborn','Dragonborn'),
        ('Hill Dwarf','Hill Dwarf'),
        ('Mountain Dwarf','Mountain Dwarf'),
        ('Eladrin Elf','Eladrin Elf'),
        ('High Elf','High Elf'),
        ('Wood Elf','Wood Elf'),
        ('Air Genasi','Air Genasi'),
        ('Earth Genasi','Earth Genasi'),
        ('Fire Genasi','Fire Genasi'),
        ('Water Genasi','Water Genasi'),
        ('Deep Gnome','Deep Gnome'),
        ('Rock Gnome','Rock Gnome'),
        ('Goliath','Goliath'),
        ('Half-Elf','Half-Elf'),
        ('Half-Orc','Half-Orc'),
        ('Lightfoot Halfling','Lightfoot Halfling'),
        ('Stout Halfling','Stout Halfling'),
        ('Human','Human'),
        ('Tiefling','Tiefling'),
    ]

    classChoices = [
        ('Barbarian','Barbarian'),
        ('Bard','Bard'),
        ('Cleric','Cleric'),
        ('Druid','Druid'),
        ('Fighter','Fighter'),
        ('Monk','Monk'),
        ('Paladin','Paladin'),
        ('Ranger','Ranger'),
        ('Rogue','Rogue'),
        ('Sorcerer','Sorcerer'),
        ('Warlock','Warlock'),
        ('Wizard','Wizard'),
    ]

    skillChoices = [
        ('Acrobatics', 'Acrobatics'),
        ('Animal Handling', 'Animal Handling'),
        ('Arcana', 'Arcana'),
        ('Athletics', 'Athletics'),
        ('Deception', 'Deception'),
        ('History', 'History'),
        ('Insight', 'Insight'),
        ('Intimidation', 'Intimidation'),
        ('Investigation', 'Investigation'),
        ('Medicine', 'Medicine'),
        ('Nature', 'Nature'),
        ('Perception', 'Perception'),
        ('Performance', 'Performance'),
        ('Persuasion', 'Persuasion'),
        ('Religion', 'Religion'),
        ('Sleight of Hand', 'Sleight of Hand'),
        ('Stealth', 'Stealth'),
        ('Survival', 'Survival'),
    ]

    character_race = forms.ChoiceField(widget=forms.Select(attrs={'onchange':'raceChange()'}), label_suffix='', choices = raceChoices, required=True)
    character_class = forms.ChoiceField(widget=forms.Select(attrs={'onchange':'classChange()'}), label_suffix='', choices = classChoices, required=True)
    skillProfs = forms.MultipleChoiceField(widget=forms.CheckboxSelectMultiple(),label_suffix='', choices = skillChoices, required=True)

    class Meta:
        model = Character
        fields = [
            'character_race',
            'character_class',
        ]

    def __init__(self, *args, **kwargs):
        super(RaceForm, self).__init__(*args, **kwargs)
        self.initial['character_race'] = 'Aarakocra'
        self.initial['character_class'] = 'Barbarian'

class PathForm(forms.Form):
    pathValue = forms.CharField()

    class Meta:
        model = Character
        fields = [
            'character_path',
        ]

class StatsForm(forms.Form):
    strength = forms.IntegerField(widget=forms.NumberInput(attrs={'onchange':'StrChange()'}), label_suffix='', required=True)
    dexterity = forms.IntegerField(widget=forms.NumberInput(attrs={'onchange':'DexChange()'}), label_suffix='', required=True)
    constitution = forms.IntegerField(widget=forms.NumberInput(attrs={'onchange':'ConChange()'}), label_suffix='', required=True)
    intelligence = forms.IntegerField(widget=forms.NumberInput(attrs={'onchange':'IntChange()'}), label_suffix='', required=True)
    wisdom = forms.IntegerField(widget=forms.NumberInput(attrs={'onchange':'WisChange()'}), label_suffix='', required=True)
    charisma = forms.IntegerField(widget=forms.NumberInput(attrs={'onchange':'CharChange()'}), label_suffix='', required=True)

    class Meta:
        model = Character
        fields = [
            'strength',
            'dexterity',
            'constitution',
            'intelligence',
            'wisdom',
            'charisma',
        ]

    def __init__(self, *args, **kwargs):
        super(StatsForm, self).__init__(*args, **kwargs)


class BackgroundForm(forms.Form):
    backgroundChoices = [
        ('Acolyte','Acolyte'),
        ('Anthropologist','Anthropologist'),
        ('Archaeology','Archaeology'),
        ('Adopted','Adopted'),
        ('Caravan Specialist','Caravan Specialist'),
        ('Charlatan','Charlatan'),
        ('City Watch','City Watch'),
        ('Courtier','Courtier'),
        ('Criminal','Criminal'),
        ('Entertainer','Entertainer'),
        ('Failed Merchant','Failed Merchant'),
        ('Fisher','Fisher'),
        ('Folk Hero','Folk Hero'),
        ('Gambler','Gambler'),
        ('Guild Artisan','Guild Artisan'),
        ('Hermit','Hermit'),
        ('Marine','Marine'),
        ('Noble','Noble'),
        ('Outlander','Outlander'),
        ('Sage','Sage'),
        ('Sailor','Sailor'),
        ('Soldier','Soldier'),
        ('Urchin','Urchin'),
    ]

    character_background = forms.ChoiceField(widget=forms.Select(attrs={'onchange':'backgroundChange()'}), label_suffix='', choices = backgroundChoices, required=True)

    class Meta:
        model = Character
        fields = [
            'character_background',
        ]

    def __init__(self, *args, **kwargs):
        super(BackgroundForm, self).__init__(*args, **kwargs)
        self.initial['character_background'] = 'Acolyte'

class EquipmentForm(forms.Form):

    class Meta:
        model = Character

    def __init__(self, *args, **kwargs):
        super(EquipmentForm, self).__init__(*args, **kwargs)

class TraitsForm(forms.Form):
    genderChoices = [
        ('', ''),
        ('Male', 'Male'),
        ('Female', 'Female'),
    ]

    heightChoices = [
        ('2\'7\"', '2\'7\"'),
        ('2\'8\"', '2\'8\"'),
        ('2\'9\"', '2\'9\"'),
        ('2\'10\"', '2\'10\"'),
        ('2\'11\"', '2\'11\"'),
        ('3\'0\"', '3\'0\"'),
        ('3\'1\"', '3\'1\"'),
        ('3\'2\"', '3\'2\"'),
        ('3\'3\"', '3\'3\"'),
        ('3\'4\"', '3\'4\"'),
        ('3\'5\"', '3\'5\"'),
        ('3\'6\"', '3\'6\"'),
        ('3\'7\"', '3\'7\"'),
        ('3\'8\"', '3\'8\"'),
        ('3\'9\"', '3\'9\"'),
        ('3\'10\"', '3\'10\"'),
        ('3\'11\"', '3\'11\"'),
        ('4\'0\"', '4\'0\"'),
        ('4\'1\"', '4\'1\"'),
        ('4\'2\"', '4\'2\"'),
        ('4\'3\"', '4\'3\"'),
        ('4\'4\"', '4\'4\"'),
        ('4\'5\"', '4\'5\"'),
        ('4\'6\"', '4\'6\"'),
        ('4\'7\"', '4\'7\"'),
        ('4\'8\"', '4\'8\"'),
        ('4\'9\"', '4\'9\"'),
        ('4\'10\"', '4\'10\"'),
        ('4\'11\"', '4\'11\"'),
        ('5\'0\"', '5\'0\"'),
        ('5\'1\"', '5\'1\"'),
        ('5\'2\"', '5\'2\"'),
        ('5\'3\"', '5\'3\"'),
        ('5\'4\"', '5\'4\"'),
        ('5\'5\"', '5\'5\"'),
        ('5\'6\"', '5\'6\"'),
        ('5\'7\"', '5\'7\"'),
        ('5\'8\"', '5\'8\"'),
        ('5\'9\"', '5\'9\"'),
        ('5\'10\"', '5\'10\"'),
        ('5\'11\"', '5\'11\"'),
        ('6\'0\"', '6\'0\"'),
        ('6\'1\"', '6\'1\"'),
        ('6\'2\"', '6\'2\"'),
        ('6\'3\"', '6\'3\"'),
        ('6\'4\"', '6\'4\"'),
        ('6\'5\"', '6\'5\"'),
        ('6\'6\"', '6\'6\"'),
        ('6\'7\"', '6\'7\"'),
        ('6\'8\"', '6\'8\"'),
        ('6\'9\"', '6\'9\"'),
        ('6\'10\"', '6\'10\"'),
        ('6\'11\"', '6\'11\"'),
        ('7\'0\"', '7\'0\"'),
        ('7\'1\"', '7\'1\"'),
        ('7\'2\"', '7\'2\"'),
        ('7\'3\"', '7\'3\"'),
        ('7\'4\"', '7\'4\"'),
        ('7\'5\"', '7\'5\"'),
        ('7\'6\"', '7\'6\"'),
        ('7\'7\"', '7\'7\"'),
        ('7\'8\"', '7\'8\"'),
        ('7\'9\"', '7\'9\"'),
        ('7\'10\"', '7\'10\"'),
        ('7\'11\"', '7\'11\"'),
        ('8\'0\"', '8\'0\"'),
        ('8\'1\"', '8\'1\"'),
        ('8\'2\"', '8\'2\"'),
    ]

    alignmentChoices = [
        ('Lawful Good','Lawful Good'),
        ('Neutral Good','Neutral Good'),
        ('Chaotic Good','Chaotic Good'),
        ('Lawful Neutral','Lawful Neutral'),
        ('Neutral','Neutral'),
        ('Chaotic Neutral','Chaotic Neutral'),
        ('Lawful Evil','Lawful Evil'),
        ('Neutral Evil','Neutral Evil'),
        ('Chaotic Evil','Chaotic Evil'),
    ]

    character_name = forms.CharField(max_length=50, required=True)
    character_gender = forms.CharField(widget=forms.Select(choices=genderChoices), max_length=10, required=False)
    character_age = forms.IntegerField(widget=forms.NumberInput(), required=False)
    character_height = forms.CharField(widget=forms.Select(choices=heightChoices), max_length=10, required=False)
    character_weight = forms.IntegerField(widget=forms.NumberInput(), label_suffix=" in lbs:", min_value=27, max_value=500, required=False)
    character_level = forms.IntegerField(widget=forms.NumberInput())
    character_deity = forms.CharField(max_length=30, required=False)
    character_alignment = forms.CharField(widget=forms.Select(choices=alignmentChoices), max_length=30, required=False)


    class Meta:
        model = Character
        fields = [
            'character_name',
            'character_gender',
            'character_age',
            'character_height',
            'character_weight',
            'character_level',
            'character_deity',
            'character_alignment',
        ]

    def __init__(self, *args, **kwargs):
        super(TraitsForm, self).__init__(*args, **kwargs)