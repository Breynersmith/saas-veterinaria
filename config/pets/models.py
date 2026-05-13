# config/pets/models.py

from django.db import models

class Pet(models.Model):
    organization = models.ForeignKey(
        'organizations.Organization',
        on_delete=models.CASCADE
    )
    client = models.ForeignKey(
        'clients.Client',
        on_delete=models.CASCADE,
        related_name='pets'
    )

    name = models.CharField(max_length=255)
    species = models.CharField(max_length=50)
    breed = models.CharField(max_length=100, blank=True)

    gender = models.CharField(
        max_length=10,
        choices=[('male', 'Macho'), ('female', 'Hembra')],
        blank=True
    )

    weight = models.FloatField(null=True, blank=True)

    birth_date = models.DateField(null=True, blank=True)

    photo = models.ImageField(
        upload_to='pets/',
        null=True,
        blank=True
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
