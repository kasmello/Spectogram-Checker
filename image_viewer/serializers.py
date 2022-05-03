from rest_framework import serializers

from image_viewer.models import image_data

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = image_data
        fields = ('id','url', 'width', 'height', 'label')