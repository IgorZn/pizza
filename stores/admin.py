from django.contrib import admin
from . import models

# Register your models here.

@admin.register(models.Pizzeria)
class AdminPizza(admin.ModelAdmin):
    pass