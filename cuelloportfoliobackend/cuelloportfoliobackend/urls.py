"""cuelloportfoliobackend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from django.conf.urls import url, include
from django.conf.urls.static import static

from django.shortcuts import render
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.views.decorators.csrf import csrf_exempt
from django.views.generic.base import TemplateView

from cuelloportfoliobackend.settings import *
from django.contrib import messages
from django.core.mail import send_mail

import sendgrid
import os
from sendgrid.helpers.mail import *


@api_view(["POST"])
def send_email(request):

    form_name = request.data.get("name")
    form_email = request.data.get("email")
    # form_phone = request.data.get("phone")
    form_message = request.data.get("message")
    form_subject = request.data.get("subject")

    sg = sendgrid.SendGridAPIClient(apikey=os.environ.get(
        'SENDGRID_API_KEY'))  #os.environ.get('SENDGRID_API_KEY'))
    print(sg)
    to_email = Email(EMAIL_HOST_USER)
    from_email = Email(form_email)
    subject = form_subject
    content = Content("text/plain", form_message + " ")
    mail = Mail(from_email, subject, to_email, content)
    response = sg.client.mail.send.post(request_body=mail.get())

    return Response({
        "status": response.status_code,
        "body": response.body,
        "headers": response.headers
    })
    # return Response({"status": "name", "body": "body", "headers": "nañew"})


urlpatterns = [
    # path('admin/', admin.site.urls),
    url(r'^send_email', csrf_exempt(send_email)),
    url(r'^.*',
        TemplateView.as_view(template_name="home_page.html"),
        name="home"),  #angular URL
]
