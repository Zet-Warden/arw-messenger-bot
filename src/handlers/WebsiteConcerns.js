const Handler = require('../CommandHandler.js');

const WebsiteConcernHandler = new Handler('wc');

WebsiteConcernHandler.addEvents([
    {
        name: 'website_open',
        type: 'payload',
        action: async (context) => {
            await context.sendText(
                'The ARW Website is accessible on November 21, 2021 at _:00 AM.'
            );
        },
    },
    {
        name: 'website_24/7',
        type: 'payload',
        action: async (context) => {
            await context.sendText(
                'Yes. The website can be accessed 24/7 but you can only join orgs from from 8:00 AM - 5:00 PM during the Annual Recruitment Week.'
            );
        },
    },
]);

module.exports = WebsiteConcernHandler;
