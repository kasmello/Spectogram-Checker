from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def image_viewer(request):
    context = {"Text": "This is the image viewer page :)"}
    return render(request, 'image_viewer.html', context)
