const Handler = require('./Handler.js');

const { museum, elite } = require('../concerns/buttonTemplates.js');
const ARWEventHandler = new Handler('ae');

ARWEventHandler.addEvents([
    {
        name: 'arw_events',
        action: (context) => {
            context.sendText(
                "This year's ARW will have 2 main events: It's Museum Day, Everyday and the ARW Elite."
            );
        },
    },
    {
        name: 'arw_museum',
        action: (context) => {
            museum(context);
        },
    },
    {
        name: 'arw_elite',
        action: (context) => {
            elite(context);
        },
    },
]);

module.exports = ARWEventHandler;
