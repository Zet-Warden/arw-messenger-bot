const {
    arwEvents,
    arwConcerns,
    paymentConcerns,
    websiteConcerns,
    museum,
    elite,
    others,
} = require('./buttonTemplates');

module.exports = async function Payload(context) {
    switch (context.event.payload) {
        case 'arw_events_2':
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
        case 'arw_museum':
            museum(context);
            break;
        case 'arw_elite':
            elite(context);
            break;
        default:
            others(context);
            break;
    }
};
