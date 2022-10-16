# from django.contrib.auth.models import User
from rest_framework import serializers
from api.models import Users,Shops
from django.contrib.auth.models import User

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id','email','username','password')
        extra_kwargs={'password':{'write_only':True,'required':True}}
    def create(self,validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class ShopSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Shops
        fields = ('url','id','shopname','category','address','city','phone','image')
    
