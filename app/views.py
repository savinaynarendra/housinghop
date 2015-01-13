from django.shortcuts import render_to_response
from pymongo import MongoClient

def bar(request):
    client = MongoClient()
    db = client['vasu']
    collection = db.vasu_coll.find()
    print collection
    return render_to_response("app/index.html", {"returnedData" : collection})

# Create your views here.
