from django.db import models

class Appointment(models.Model):
    pet = models.ForeignKey(
        'pets.Pet',
        on_delete=models.CASCADE,
        related_name='appointments'
    )
    date = models.DateTimeField()
    status = models.CharField(max_length=50, default='pending')
    notes = models.TextField(blank=True)

    def __str__(self):
        return f"{self.pet.name} - {self.date}"
