let oneEuro = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
};

function fromDollarToYen(dollars) {
    return (dollars / oneEuro["USD"]) * oneEuro["JPY"];
}

function fromEuroToDollar(euros) {
    return euros * oneEuro["USD"];
}

function fromYenToPound(yen) {
    return (yen / oneEuro["JPY"]) * oneEuro["GBP"];
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };