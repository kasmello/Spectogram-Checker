from django.urls import path
from . import views

urlpatterns = [
    path('',views.image_viewer),
    path('home', views.ImageViewer.as_view())

]
