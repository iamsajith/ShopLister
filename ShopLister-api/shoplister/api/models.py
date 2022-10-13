from django.db import models

# Create your models here.
class Users(models.Model):
    email = models.EmailField()
    username = models.CharField(max_length = 240)
    fullname = models.CharField(max_length = 240)
    phone = models.CharField(max_length=12)
    password = models.CharField(max_length = 240)
    # def __str__(self):
    #     return self.name

class Shops(models.Model):
    email = models.EmailField()
    username = models.CharField(max_length = 50)
    fullname = models.CharField(max_length = 50)
    phone = models.CharField(max_length=12)
    password = models.CharField(max_length = 240)
    image = models.TextField()
    # def __str__(self):
    #     return self.name


