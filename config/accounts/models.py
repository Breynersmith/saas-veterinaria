# accounts/models.py

from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('vet', 'Veterinario'),
        ('assistant', 'Asistente'),
    )

    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='assistant')

    organization = models.ForeignKey(
        'organizations.Organization',
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )

    def __str__(self):
        return f"{self.username} ({self.role})"
