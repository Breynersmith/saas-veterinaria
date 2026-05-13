from .models import Client
from .serializers import ClientSerializer
from core.views import BaseOrganizationViewSet

class ClientViewSet(BaseOrganizationViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
