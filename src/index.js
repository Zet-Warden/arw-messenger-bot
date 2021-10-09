const { router, text, payload, route } = require('bottender/router');
const quickReplies = require('./concerns/quickReplies.js');
const concerns = require('./concerns/payload.js');

const arwEventsReply = require('./arw-events.js');
const arwConcernsReply = require('./arw-concerns.js');
const paymentConcernsReply = require('./payment-concerns.js');
const websiteConcernsReply = require('./website-concerns.js');
const othersConcernsReply = require('./others-concerns.js');
const museumConcernsReply = require('./museum-concerns.js');
const eliteConcernsReply = require('./elite-concerns.js');

function Unknown(context) {
    context.sendText('Nu gingagawa mu?');
}

module.exports = async function App(context) {
    return router([
        text('hi', quickReplies),
        payload(
            [
                'arw_events',
                'arw_concerns',
                'payment_concerns',
                'website_concerns',
                'others',
            ],
            concerns
        ),
        payload(/^ae/i, arwEventsReply),
        payload(/^ac/i, arwConcernsReply),
        payload(/^pc/i, paymentConcernsReply),
        payload(/^wc/i, websiteConcernsReply),
        payload(/^ot/i, othersConcernsReply),
        payload(/^mu/i, museumConcernsReply),
        payload(/^et/i, eliteConcernsReply),
        route('*', Unknown),
    ]);
};
