from django.db import models

# Create your models here.
class Users(models.Model):
    email = models.EmailField()
    username = models.CharField(max_length = 240)
    fullname = models.CharField(max_length = 240)
    phone = models.CharField(max_length=12)
    password = models.CharField(max_length = 240)

class Shops(models.Model):
    shopname = models.CharField(max_length = 50)
    category = models.CharField(max_length = 50)
    address = models.CharField(max_length = 240)
    city = models.CharField(max_length = 50)
    phone = models.CharField(max_length=10)
    image = models.TextField()


