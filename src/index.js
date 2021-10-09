const { router, route } = require('bottender/router');
const { chain } = require('bottender');
const quickReplies = require('./init/quickReplies.js');
const concerns = require('./init/payload.js');
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
