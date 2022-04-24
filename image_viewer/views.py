from django.shortcuts import render
from django.http import HttpResponse
from image_viewer.models import image_data

# Create your views here.
def image_viewer(request):
    context = {"Text": "This is the image viewer page :)"}
    obj, created = image_data.objects.get_or_create(
        id = 0,
        defaults={'url': 'www.google.com', 'width': 224, 'height': 224, 'label': 'a'},
    )
    obj_2, created = image_data.objects.get_or_create(
        id = 5,
        defaults={'url': 'www.youtube.com', 'width': 224, 'height': 224, 'label': 'y'},
    )
    context['image_url'] = obj_2.url
    return render(request, 'image_viewer.html', context)
