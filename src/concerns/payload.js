const {
    arwEvents,
    arwConcerns,
    paymentConcerns,
    websiteConcerns,
    others,
} = require('./buttonTemplates');

module.exports = async function Payload(context) {
    switch (context.event.payload) {
        case 'arw_events':
            arwEvents();
            break;
        case 'arw_concerns':
            arwConcerns();
            break;
        case 'payment_concerns':
            paymentConcerns();
            break;
        case 'website_concerns':
            websiteConcerns();
            break;
        default:
            others();
            break;
    }
};
