from django.db import models

# Create your models here.
class whale_images(models.Model):
    url = models.TextField()
    width = models.IntegerField()
    height = models.IntegerField()
    label = models.TextField()
