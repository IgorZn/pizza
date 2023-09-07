from .views import PizzeriaViewSet
from django.urls import include, path
from rest_framework import routers


router = routers.SimpleRouter()
router.register('', PizzeriaViewSet, basename='pizzeria')


urlpatterns = router.urls
