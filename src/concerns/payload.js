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
            arwEvents(context);
            break;
        case 'arw_concerns':
            arwConcerns(context);
            break;
        case 'payment_concerns':
            paymentConcerns(context);
            break;
        case 'website_concerns':
            websiteConcerns(context);
            break;
        default:
            others(context);
            break;
    }
};
