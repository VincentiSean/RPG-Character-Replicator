# Generated by Django 3.0.3 on 2020-04-09 20:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_character_userid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='character',
            name='id',
            field=models.IntegerField(default=0, primary_key=True, serialize=False),
        ),
    ]
