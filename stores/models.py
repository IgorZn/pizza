from django.db import models
from django.core.validators import RegexValidator
from django.contrib.auth.models import User

# Create your models here.


class Pizzeria(models.Model):
    pizzeria_name = models.CharField(max_length=200, blank=False)
    street = models.CharField(max_length=400, blank=True)
    city = models.CharField(max_length=400, blank=True)
    state = models.CharField(max_length=2, null=True, blank=True)
    zip_code = models.IntegerField(blank=True, default=0)
    website = models.URLField(max_length=420, blank=True)
    phone_number = models.CharField(
        validators=[RegexValidator(regex=r'^([+]\d{,2})?\d{10}$')],
        max_length=12,
        blank=True
    )
    description = models.TextField(blank=True)
    logo_image = models.ImageField(
        upload_to='pizzariaImages',
        blank=True,
        default="pizzariaImages/pizzalogo.png"
    )
    email = models.EmailField(max_length=245, blank=True)
    active = models.BooleanField(default=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.pizzeria_name}, {self.city}'
