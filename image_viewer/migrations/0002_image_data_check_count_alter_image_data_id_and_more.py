# Generated by Django 4.0.4 on 2022-05-03 00:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('image_viewer', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='image_data',
            name='check_count',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='image_data',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterModelTable(
            name='image_data',
            table=None,
        ),
    ]