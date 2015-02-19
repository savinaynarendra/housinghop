from django.conf.urls import patterns, url

from app import views

urlpatterns = patterns('',
    url(r'^$', views.bar, name='bar'),
    # url(r'^login/$', views.login, name='login'),
    url(r'^sendemail/$', views.sendemail, name='sendemail')
)