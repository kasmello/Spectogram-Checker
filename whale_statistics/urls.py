from django.urls import path
from . import views

urlpatterns = [
    path('',views.show_stats),
    path('hello', views.say_hello)
]
