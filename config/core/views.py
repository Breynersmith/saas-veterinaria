from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied


class BaseOrganizationViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user

        if not user.is_authenticated or not user.organization:
            return self.queryset.none()

        return self.queryset.filter(organization=user.organization)

    def perform_create(self, serializer):
        user = self.request.user

        if not user.organization:
            raise PermissionDenied("No tienes organización")

        serializer.save(organization=user.organization)
