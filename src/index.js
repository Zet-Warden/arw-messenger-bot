const { router, route, chain } = require('bottender/router');
const quickReplies = require('./concerns/quickReplies.js');
const concerns = require('./concerns/payload.js');
const handlers = require('./payload-handlers/HandlerList.js');

function init(context, { next }) {
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
        route('*', next),
    ]);
}

module.exports = async function App(context) {
    return chain([init, ...handlers]);
};
