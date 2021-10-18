const Handler = require('../CommandHandler.js');

const StartupHandler = new Handler();

StartupHandler.addEvents([
    {
        name: 'GET_STARTED',
        type: 'payload',
        blockConclusion: true,
        action: async (context) => {
            context.sendText(
                'Good Day, Lasallian! ARW 2021 will reply within the day. In the meantime, you may start chatting with our bot by typing "!start".'
            );
        },
    },
    {
        name: '!start',
        type: 'text',
        blockConclusion: true,
        action: createQuickReplies,
    },
    {
        name: 'to_bot',
        type: 'payload',
        blockConclusion: true,
        action: createQuickReplies,
    },
    {
        name: 'help',
        type: 'payload',
        blockConclusion: true,
        action: async (context) => {
            context.sendText('Type "!start" to start chatting with the bot.');
        },
    },
]);

async function createQuickReplies(context) {
    await context.sendText('What are your concerns?', {
        quickReplies: [
            {
                contentType: 'text',
                title: 'ARW Events',
                payload: 'arw_events',
            },
            {
                contentType: 'text',
                title: 'ARW Concerns',
                payload: 'arw_concerns',
            },
            {
                contentType: 'text',
                title: 'Payment Concerns',
                payload: 'payment_concerns',
            },
            {
                contentType: 'text',
                title: 'Website Concerns',
                payload: 'website_concerns',
            },
            {
                contentType: 'text',
                title: 'Others',
                payload: 'others',
            },
        ],
    });
}
module.exports = StartupHandler;
