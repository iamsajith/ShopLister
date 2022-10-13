# from django.contrib.auth.models import User
from api.models import Users
from rest_framework import generics
from rest_framework import permissions
from api.serializers import UserSerializer


class UserViewSet(generics.ListAPIView):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Users.objects.all()
    serializer_class = UserSerializer
    # permission_classes = [permissions.IsAuthenticated]


