#accounts/urls.py
from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('signup/', views.register, name="signup"),
    path('creation/', views.race, name="create"),
    path('creation/classSpecifics/', views.classSpecifics, name="classSpecifics"),
    path('creation/stats/', views.stats, name="stats"),
    path('creation/backgrounds/', views.backgrounds, name="backgrounds"),
    path('creation/equipment/', views.equipment, name="equipment"),
    path('creation/traits/', views.traits, name="traits"),
    path('character/', views.character, name="character"),
    path('character/spellFilter', views.spellFilter, name='spellFilter'),
    path('character/learn', views.learnButton, name='learnButton'),
    path('character/spellSearch', views.spellSearch, name="spellSearch"),
]