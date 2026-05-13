from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static
from billing.views import InvoiceViewSet


from clients.views import ClientViewSet
from pets.views import PetViewSet
from appointments.views import AppointmentViewSet

router = DefaultRouter()
router.register(r'clients', ClientViewSet)
router.register(r'pets', PetViewSet)
router.register(r'appointments', AppointmentViewSet)
router.register(r'invoices', InvoiceViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/auth/', include('accounts.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
