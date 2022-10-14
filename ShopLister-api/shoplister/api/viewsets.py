from rest_framework import viewsets
from . import models
from . import serializers

class UserViewSet(viewsets.ModelViewSet):
    queryset = models.Users.objects.all()
    serializer_class = serializers.UserSerializer

class ShopViewSet(viewsets.ModelViewSet):
    queryset = models.Shops.objects.all()
    serializer_class = serializers.ShopSerializer