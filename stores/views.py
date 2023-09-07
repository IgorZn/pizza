from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PizzeriaSerializer
from . import models
from .permissions import IsAuthorOrReadOnly

# Create your views here.


class PizzeriaViewSet(viewsets.ModelViewSet):
    queryset = models.Pizzeria.objects.all()
    serializer_class = PizzeriaSerializer
    permission_classes = (IsAuthorOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


