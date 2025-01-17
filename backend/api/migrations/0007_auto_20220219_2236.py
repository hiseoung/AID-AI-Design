# Generated by Django 3.2 on 2022-02-19 13:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20220219_2205'),
    ]

    operations = [
        migrations.AlterField(
            model_name='goods_info',
            name='delete_flag',
            field=models.CharField(blank=True, db_column='delete_flag', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='goods_info',
            name='designer',
            field=models.CharField(blank=True, db_column='designer', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='goods_info',
            name='goods_type',
            field=models.CharField(blank=True, db_column='goods_type', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='goods_info',
            name='size',
            field=models.CharField(blank=True, db_column='size', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='goods_info',
            name='style',
            field=models.CharField(blank=True, db_column='style', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='goods_info',
            name='title',
            field=models.CharField(blank=True, db_column='title', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='goods_info',
            name='title_changed',
            field=models.CharField(blank=True, db_column='title_changed', max_length=100, null=True),
        ),
    ]
