from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(null= True, blank= True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    # rating = models.DecimalField(max_length=6, max_digits=2)
    def __str__(self):
        return self.name