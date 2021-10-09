const { arwEvents, arwConcerns } = require('./buttonTemplates');

module.exports = async function Payload(context) {
    switch (context.event.payload) {
        case 'arw_events':
            arwEvents();
            break;
        case 'arw_concerns':
            arwConcerns();
            break;
        case 'payment_concerns':
            break;
        case 'website_concerns':
            break;
        default:
            break;
    }
};
