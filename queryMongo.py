import pymongo
import xml.etree.ElementTree as ET

client = pymongo.MongoClient(
    "mongodb+srv://nadav:nadav123@cluster0.gfmrz.mongodb.net/Project?retryWrites=true&w=majority")
mydb = client["Supermarket"]
mycol = mydb["Super1"]

myquery = {"ItemPrice": "19.90"}

mydoc = mycol.find(myquery)
v = []
for x in mydoc:
    v.append(x)

print(v.__getitem__(5))
