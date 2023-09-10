from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PizzeriaSerializer
from . import models
from .permissions import IsAuthorOrReadOnly
from django.contrib.auth.models import User

# Create your views here.


class PizzeriaViewSet(viewsets.ModelViewSet):
    queryset = models.Pizzeria.objects.all()
    serializer_class = PizzeriaSerializer
    permission_classes = (IsAuthorOrReadOnly,)

    def perform_create(self, serializer):
        if self.request.user.__str__() == 'AnonymousUser':
            author = User.objects.get(pk=1)
            serializer.save(author=author)
        else:
            serializer.save(author=self.request.user)


