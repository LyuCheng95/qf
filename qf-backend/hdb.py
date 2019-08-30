def calculateLoan(r, PV, t):
    return (r/12*PV)/(1-(1+r/12)**(-12*t))