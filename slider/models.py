from django.db import models
from filer.fields.image import FilerImageField

class Slide(models.Model):
    title = models.CharField("Название", max_length=200)
    image = FilerImageField(
        on_delete=models.CASCADE,
        verbose_name="Изображение",
        related_name="slides",
    )
    order = models.PositiveIntegerField("Порядок", default=0)

    class Meta:
        ordering = ['order']
        verbose_name = "Слайд"
        verbose_name_plural = "Слайды"

    def __str__(self):
        return self.title