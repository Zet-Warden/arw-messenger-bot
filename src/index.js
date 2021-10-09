console.log(process.env.MESSENGER_ACCESS_TOKEN);

const { router, text, payload } = require('bottender/router');
const quickReplies = require('./quickReplies');
const concerns = require('./payload');

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
