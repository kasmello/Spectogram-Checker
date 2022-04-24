from django.db import models

# Create your models here.
class image_data(models.Model):
    id = models.AutoField(primary_key=True)
    url = models.TextField()
    width = models.IntegerField()
    height = models.IntegerField()
    label = models.TextField()
    class Meta:
        db_table = "image_data"
