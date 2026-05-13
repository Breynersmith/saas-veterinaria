from rest_framework import serializers
from .models import Client
from pets.models import Pet

class PetBriefSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ['id', 'name', 'species', 'breed', 'photo']

class ClientSerializer(serializers.ModelSerializer):
    pets = PetBriefSerializer(many=True, read_only=True)

    class Meta:
        model = Client
        fields = '__all__'
        read_only_fields = ('organization',)
