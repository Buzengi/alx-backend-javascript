const Utils = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const gtotal = Utils.calculateNumber("SUM", totalAmount, totalShipping);
    console.log(`The total is: ${gtotal}`);
}

module.exports = sendPaymentRequestToApi;
