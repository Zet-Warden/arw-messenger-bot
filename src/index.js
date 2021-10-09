const { router, text, payload } = require('bottender/router');
const quickReplies = require('./concerns/quickReplies');

module.exports = async function App(context) {
    return router([
        payload('GET_STARTED', quickReplies),
        payload([
            'arw_events',
            'arw_concerns',
            'payment_concerns',
            'website_concerns',
            'others',
        ]),
    ]);
};
