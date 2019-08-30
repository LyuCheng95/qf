from flask import Flask, request
from flask_cors import CORS
import hdb 
app = Flask(__name__)
CORS(app)

@app.route('/hdbCalculator')
def hdbCalculator():
    r = float(request.args.get("r"))
    PV = float(request.args.get("pv"))
    t = float(request.args.get("t"))
    result = str(hdb.calculateLoan(r, PV, t))
    return {'result': result}

if __name__ == '__main__':
    app.run()