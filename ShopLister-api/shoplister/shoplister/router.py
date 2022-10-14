from api.viewsets import UserViewSet,ShopViewSet
from rest_framework import routers


router = routers.DefaultRouter()
router.register('users',UserViewSet)
router.register('shops',ShopViewSet)
