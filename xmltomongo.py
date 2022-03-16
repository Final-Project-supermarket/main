import pymongo
import xml.etree.ElementTree as ET

client = pymongo.MongoClient("mongodb+srv://nadav:nadav123@cluster0.gfmrz.mongodb.net/Project?retryWrites=true&w=majority")
mydb = client["Supermarket"]
mycol = mydb["Super1"]

tree = ET.parse('data.xml')

itt = tree.findall('Item')

for i in itt:
    icode = i.find('ItemCode').text
    iname = i.find('ItemName').text
    iprice = i.find('ItemPrice').text

    stu_dict = [
                {'ItemCode': icode, 'ItemName': iname, 'ItemPrice': iprice}
               ]

    x = mycol.insert_many(stu_dict)

for y in mycol.find():
  print(y)