from flask import Flask
from flask import request
from flask_cors import CORS
from flask import render_template
from flask import jsonify
import fitz
import json
import base64
from flask import send_file
import time
import random


app = Flask(__name__)
CORS(app)
hash = 0
gurl = ""
annotationData = [{
    "fileName": "SampleFile",
    "extension": "PDF",
    "path": "SampleFilePath",
    "annotation_info": [
        {
        "key": "PD_PurposeOfInsurance",
        "X1": 115,
        "Y1": 160,
        "X2": 290,
        "Y2": 170,
        "pageNo": 1
    },
        {
        "key": "PD_FirstName",
        "X1": 115,
        "Y1": 175,
        "X2": 290,
        "Y2": 185,
        "pageNo": 1
    },
        {
        "key": "PD_MiddleName",
        "X1": 115,
        "Y1": 190,
        "X2": 290,
        "Y2": 200,
        "pageNo": 1
    },
        {
        "key": "PD_LastName",
        "X1": 115,
        "Y1": 202,
        "X2": 290,
        "Y2": 212,
        "pageNo": 1
    },
        {
        "key": "PR_FirstName",
        "X1": 343,
        "Y1": 162,
        "X2": 515,
        "Y2": 172,
        "pageNo": 1
    },
        {
        "key": "PR_MiddleName",
        "X1": 343,
        "Y1": 173,
        "X2": 515,
        "Y2": 183,
        "pageNo": 1
    },
        {
        "key": "PR_LastName",
        "X1": 343,
        "Y1": 184,
        "X2": 515,
        "Y2": 194,
        "pageNo": 1
    },
        {
        "key": "DH_UsedAs",
        "X1": 105,
        "Y1": 45,
        "X2": 155,
        "Y2": 55,
        "pageNo": 2
    },
        {
        "key": "DH_Quantity",
        "X1": 180,
        "Y1": 45,
        "X2": 210,
        "Y2": 55,
        "pageNo": 2
    }]
}]


@app.route('/')
def hello():
    print(fetchAnnotataionCoordinates("PR_LastName"))
    return "Hello World"


# @app.route('/<name>')
# def hello_name(name):
#     return "Hello {}!".format(name)

@app.route('/highlight', methods=['POST'])
def Highlight_Text():
    req_data = request.get_json()
    key = req_data['key']
    print(key)
    x1, y1, x2, y2, pageNo = fetchAnnotataionCoordinates(key)
    HighlightPDF(x1, y1, x2, y2, pageNo)
    hash = random.randint(1, 1234567890)
    url = "http://0.0.0.0:8000/RealForm_output.pdf?q={}&page={}".format(hash,pageNo)
    print("URL")
    print(url)
    return jsonify(url)


def HighlightPDF(x1, y1, x2, y2, pageNo):
    doc = fitz.open("RealForm.pdf")
    page = doc[pageNo-1]
    region = fitz.Rect(x1, y1, x2, y2)
    high = page.addHighlightAnnot(region)
    doc.save("RealForm_output.pdf")

    # doc.save("https://drive.google.com/file/d/1-6MTdNWle5Puv4GIDGlNmPOot3mmxQHJ/view?usp=sharing")


def fetchAnnotataionCoordinates(key):
    for a in annotationData[0]['annotation_info']:
        if a['key'] == key:
            return (int(a['X1']), int(a['Y1']), int(a['X2']), int(a['Y2']), int(a['pageNo']))


if __name__ == '__main__':
    # app.run()
    app.run(host='localhost', port=9874)
