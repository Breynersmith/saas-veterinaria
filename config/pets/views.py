from .models import Pet
from .serializers import PetSerializer
from core.views import BaseOrganizationViewSet

class PetViewSet(BaseOrganizationViewSet):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer
