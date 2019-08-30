const url = 'http://localhost:5001/'
export function hdbCalculator(r, pv, t) {
    const queryString = url + 'hdbCalculator?r=' + r + '&pv=' + pv + '&t=' + t;
    return fetch(queryString)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(err => {
            console.log(err)
        });
}