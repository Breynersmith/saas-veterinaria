from rest_framework import serializers
from .models import Appointment

class AppointmentSerializer(serializers.ModelSerializer):
    pet_name = serializers.CharField(source='pet.name', read_only=True)
    pet_species = serializers.CharField(source='pet.species', read_only=True)
    pet_breed = serializers.CharField(source='pet.breed', read_only=True)
    client_name = serializers.CharField(source='pet.client.name', read_only=True)

    class Meta:
        model = Appointment
        fields = '__all__'
