const Handler = require('../CommandHandler');

const ConclusionHandler = new Handler();

ConclusionHandler.addEvents([
    {
        name: 'end_chat',
        type: 'payload',
        blockConclusion: true,
        action: async (context) => {
            await context.sendText(
                'We hope that we were able to help you regarding your concerns. Please do not hesitate to message us again. Thank you for visiting our Facebook Page Message! We hope that you are safe and well. '
            );
        },
    },
    {
        name: 'continue_chat',
        type: 'payload',
        blockConclusion: true,
        action: async (context) => {
            await context.sendButtonTemplate(
                'We apologize that we failed to address your concern. Would you like to talk to one of our representatives or to the chatbot once again?',
                [
                    {
                        type: 'postback',
                        title: 'Talk to Human',
                        payload: 'to_human',
                    },
                    {
                        type: 'postback',
                        title: 'Talk to Chatbot',
                        payload: 'to_bot',
                    },
                ]
            );
        },
    },
    {
        name: 'to_human',
        type: 'payload',
        blockConclusion: true,
        action: async (context) => {
            await context.sendText(
                'This is noted. We will respond to you as soon as possible. Also stay updated with ARW by following our Facebook Page. Thank you!'
            );
        },
    },
]);

module.exports = ConclusionHandler;
