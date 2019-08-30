from flask import Flask, request
import hdb 
app = Flask(__name__)


@app.route('/hdbCalculator')
def hdbCalculator():
    r = request.args.get("r")
    PV = request.args.get("pv")
    t = request.args.get("t")
    result = hdb.calculateLoan(r, PV, t)
    return result

if __name__ == '__main__':
    app.run()