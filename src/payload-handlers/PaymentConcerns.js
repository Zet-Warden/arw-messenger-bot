const Handler = require('./Handler.js');

const PaymentConcernHandler = new Handler('pc');

PaymentConcernHandler.addEvents([
    {
        name: 'pay_registration',
        action: (context) => {
            context.sendText(
                "Org Registration Fee is paid through the Registration Form of the Organization. You can find the Registration Form in the ARW Website: arw.dlsucso.com under the Organization's Page."
            );
        },
    },
    {
        name: 'send_pop',
        action: (context) => {
            context.sendText(
                "Proof of payment is uploaded on the Registration Form which can be seen on the ARW Website: arw.dlsucso.com under the Organization's Page."
            );
        },
    },
]);

module.exports = PaymentConcernHandler;
