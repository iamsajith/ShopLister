# from django.contrib.auth.models import User
from rest_framework import serializers
from api.models import Users,Shops

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Users
        fields = ['id','email','username','fullname','phone','password']

class ShopSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Shops
        fields = ['url','id','shopname','category','address','city','phone','image']
    
