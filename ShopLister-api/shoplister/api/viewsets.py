from rest_framework import viewsets
from django.contrib.auth import authenticate
from . import models
from . import serializers
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

class UserViewSet(viewsets.ModelViewSet):
    queryset = models.Users.objects.all()
    serializer_class = serializers.UserSerializer


class ShopViewSet(viewsets.ModelViewSet):
    queryset = models.Shops.objects.all()
    serializer_class = serializers.ShopSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)
