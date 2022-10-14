# from django.contrib.auth.models import User
from rest_framework import serializers
from api.models import Users,Shops

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Users
        fields = "__all__"

class ShopSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Shops
        fields = "__all__"
    
