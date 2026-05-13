from django.db import models

class Invoice(models.Model):
    STATUS_CHOICES = [
        ('paid', 'Pagado'),
        ('pending', 'Pendiente'),
        ('cancelled', 'Cancelado'),
    ]

    client = models.ForeignKey(
        'clients.Client',
        on_delete=models.CASCADE,
        related_name='invoices'
    )
    pet = models.ForeignKey(
        'pets.Pet',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='invoices'
    )
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    date = models.DateTimeField(auto_now_add=True)
    notes = models.TextField(blank=True)

    def __str__(self):
        return f"FAC-{self.id:04d} - {self.client.name}"
