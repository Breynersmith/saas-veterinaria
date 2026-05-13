from rest_framework import serializers
from django.contrib.auth import get_user_model
from organizations.models import Organization

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    organization = serializers.StringRelatedField()

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'role', 'organization')


class RegisterSerializer(serializers.ModelSerializer):
    organization_name = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only=True, min_length=6)

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'organization_name')

    def validate_username(self, value):
        if User.objects.filter(username=value).exists():
            raise serializers.ValidationError("El username ya está en uso")
        return value

    def validate_email(self, value):
        if value and User.objects.filter(email=value).exists():
            raise serializers.ValidationError("El email ya está en uso")
        return value

    def validate_organization_name(self, value):
        if Organization.objects.filter(name=value).exists():
            raise serializers.ValidationError("La clínica ya existe")
        return value

    def create(self, validated_data):
        org_name = validated_data.pop('organization_name')

        # 🔐 Crear organización
        organization = Organization.objects.create(
            name=org_name
        )

        # 👤 Crear usuario admin
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email'),
            password=validated_data['password'],
            role='admin',
            organization=organization
        )

        return user
