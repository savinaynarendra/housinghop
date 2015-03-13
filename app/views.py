from django.shortcuts import render_to_response
from django.core.mail import send_mail
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login
from django.http import HttpResponseRedirect
from pymongo import MongoClient
from bson.objectid import ObjectId
from django.http import HttpResponse
from bson.json_util import dumps
import datetime
import time
import json

auth_url_redirect = "https://accounts.housing.com/?redirect_to="
initial_url = "https://pa.housing.com/app"
token = ''

# def loginHandler(request):
#     if 'auth_token' not in request.COOKIES:
#         return False
#     # if 'auth_token' in request.COOKIES:
#     token = request.COOKIES['auth_token']
#     print token
#     host = "https://pa.housing.com/app"
#     if token is not None:
#         return True
#     else:
#         return False
    # return render_to_response("app/login.html", {"returnedData" : "1"})

@csrf_exempt
# @loginHandler
def bar(request):
    # token = request.COOKIES.get('auth_token')
    # print token
    # print request
    # if not loginHandler(request):
    #     print "not authenticated"
    #     return HttpResponseRedirect(auth_url_redirect + initial_url)
    # else:
    print request
    client = MongoClient()
    # collection = []
    db = client['vasu']
    if request.POST:
        # print request.POST
        todate = request.POST['toDate']
        fromdate = request.POST['fromDate']
        service = request.POST['service']
        platform = request.POST['platform']
        # print todate.encode('utf-8'), fromdate.encode('utf-8'), type(todate.encode('utf-8'))
        todate_array = todate.encode('utf-8').split("/")
        fromdate_array = fromdate.encode('utf-8').split("/")
        print todate_array, fromdate_array
        todate_month = todate_array[0]
        todate_day = todate_array[1]
        todate_year = todate_array[2]
        fromdate_month = fromdate_array[0]
        fromdate_day = fromdate_array[1]
        fromdate_year = fromdate_array[2]
        # print int(fromdate_year)
        y = datetime.datetime(int(fromdate_year), int(fromdate_month), int(fromdate_day)-1)
        t = datetime.datetime(int(todate_year), int(todate_month), int(todate_day))
        print "dates are:"
        print y,t
        ts_y =  int(time.mktime(y.timetuple())*1000)
        ts_t = int(time.mktime(t.timetuple())*1000)
        yutcd = datetime.datetime.utcfromtimestamp(ts_y/1000)
        tutcd = datetime.datetime.utcfromtimestamp(ts_t/1000)
        yutcoid = ObjectId.from_datetime(yutcd)
        tutcoid = ObjectId.from_datetime(tutcd)
        print yutcoid, tutcoid, service, platform
        print ''
        data={}
        data['activeusers'] = []
        data['conversion'] = []
        data['contact_requests'] = []
        data['user_engagement'] = []
        # data['registered_users'] = []
        # data['live_listings'] = []
        collection_active_users = db.properData.find({'timeStamp': {'$gte': yutcoid, '$lte': tutcoid}, 'chart':'Active_Users', 'service': service, 'device': platform},{"_id":0, "timeStamp": 0})
        collection_conversion = db.properData.find({'timeStamp': {'$gte': yutcoid, '$lte': tutcoid}, 'chart':'Conversion', 'service': service, 'device': platform},{"_id":0, "timeStamp": 0})
        collection_contact_requests = db.properData.find({'timeStamp': {'$gte': yutcoid, '$lte': tutcoid}, 'chart':'Contact Requests', 'service': service, 'device': platform},{"_id":0, "timeStamp": 0})
        collection_user_engagement = db.properData.find({'timeStamp': {'$gte': yutcoid, '$lte': tutcoid}, 'chart':'User Engagement', 'service': service, 'device': platform},{"_id":0, "timeStamp": 0})
        # collection_registered_users = db.testData.find({'timeStamp': {'$gte': yutcoid, '$lte': tutcoid}, 'chart':'Registered Users', 'service': service, 'device': platform},{"_id":0, "timeStamp": 0})
        # collection_live_listings = db.testData.find({'timeStamp': {'$gte': yutcoid, '$lte': tutcoid}, 'chart':'Live Listings', 'service': service, 'device': platform},{"_id":0, "timeStamp": 0})
        # print strftime("%Y%m%d", y), strftime("%Y%m%d", t)
        print collection_conversion, collection_active_users, collection_contact_requests, collection_user_engagement
        for obj in collection_active_users:
            # print obj
            data['activeusers']+=[obj]
            for obj in collection_conversion:
                data['conversion']+=[obj]
            for obj in collection_contact_requests:
                data['contact_requests']+=[obj]
            for obj in collection_user_engagement:
                data['user_engagement']+=[obj]
        # for obj in collection_registered_users:
        #     data['registered_users']+=[obj]
        # for obj in collection_live_listings:
        #     data['live_listings']+=[obj]
        print data
        return HttpResponse(json.dumps(data), content_type="application/json")

    else:
        return render_to_response("app/index.html", {"returnedData" : ''})

@csrf_exempt
def sendemail(request):
    print request.POST
    print "Received request"
    msg = request.POST['message']
    from_email = request.POST['from_email']
    print msg, from_email
    # send_mail('Data request', msg, 'hopapp@housing.com', ['rakesh.raman@housing.com', 'savinay.narendra@housing.com', 'deepak.singh@housing.com', 'rahul.khanna@housing.com', 'vasu395@gmail.com', 'somya.mishra@housing.com'], fail_silently=False)
    send_mail('Data request', msg, from_email, ['savinay.narendra@housing.com'], fail_silently=False)
    return render_to_response("app/index.html", {"returnedData" : "1"})

# Create your views here.
