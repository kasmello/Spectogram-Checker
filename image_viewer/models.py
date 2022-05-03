from django.db import models

def grab_least_checked():
    return_model = image_data.objects.order_by('check_count').first()
    return return_model.url, return_model.label

class image_data(models.Model):
    url = models.TextField(unique=True)
    width = models.IntegerField()
    height = models.IntegerField()
    label = models.TextField()
    check_count = models.IntegerField(default=0)
    



