from django.contrib import admin
from adminsortable2.admin import SortableAdminMixin
from django.utils.safestring import mark_safe

from slider.models import Slide

# Register your models here.
@admin.register(Slide)
class SlideAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ('title', 'image_preview', 'order')
    readonly_fields = ('image_preview',)

    def image_preview(self, obj):
        if obj.image:
            return mark_safe(f'<img src="{obj.image.url}" width="100" height="70" style="object-fit: cover;" />')
        return "Нет изображения"
    
    image_preview.short_description = "Превью"