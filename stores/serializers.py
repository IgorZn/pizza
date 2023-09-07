from . import models
from rest_framework import serializers


class PizzeriaSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Pizzeria
        fields = [
            'url',
            'pizzeria_name',
            'street',
            'city',
            'state',
            'zip_code',
            'website',
            'phone_number',
            'description',
            'logo_image',
            'email',
            'active',
            'id'
        ]

