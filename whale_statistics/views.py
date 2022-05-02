from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def say_hello(request):
    return render(request, 'whale_statistics.html')

def show_stats(request):
    context = {'Text':'waow'}
    return render(request, 'whale_statistics.html', context)

#this is a test
