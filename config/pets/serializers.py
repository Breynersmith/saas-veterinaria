from rest_framework import serializers
from .models import Pet

class PetSerializer(serializers.ModelSerializer):
    client_name = serializers.CharField(source='client.name', read_only=True)

    class Meta:
        model = Pet
        fields = '__all__'
        read_only_fields = ('organization',)

    def validate(self, data):
        request = self.context.get('request')
        org = request.user.organization
        client = data.get('client')
        if client.organization != org:
            raise serializers.ValidationError(
                "El cliente no pertenece a tu organización"
            )
        return data
