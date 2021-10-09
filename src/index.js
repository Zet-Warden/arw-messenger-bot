const { router, text, payload } = require('bottender/router');
const quickReplies = require('./concerns/quickReplies.js');
const concerns = require('./concerns/payload.js');

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
    ]);
};
