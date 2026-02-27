from django.shortcuts import render

from slider.models import Slide

# Create your views here.
def landing(request):
    slides = Slide.objects.all()
    return render(request, 'landing.html', {'slides': slides})
