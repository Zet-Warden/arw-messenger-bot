const Handler = require('../CommandHandler.js');

const ARWEventHandler = new Handler();

ARWEventHandler.addEvents([
    {
        name: 'arw_events2021',
        type: 'payload',
        action: async (context) => {
            await context.sendText(
                "This year's ARW will have 2 main events: It's Museum Day, Everyday and the ARW Elite."
            );
        },
    },
]);

module.exports = ARWEventHandler;
