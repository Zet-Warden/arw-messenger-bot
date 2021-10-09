const dedent = require('dedent');
const Handler = require('../CommandHandler.js');

const MuseumButtonHandler = new Handler();

let templateTitle = 'What do you wanna know more about?';

MuseumButtonHandler.addEvents([
    {
        name: 'arw_museum',
        type: 'payload',
        blockConclusion: true,
        action: async (context) => {
            const title = dedent`${templateTitle}
                                    1. What is "It's Museum Day Everyday"
                                    2. What is the schedule for the Museum Day Everyday
                                    3. How can we participate in the Museum Day Everyday`;
            await context.sendButtonTemplate(title, [
                {
                    type: 'postback',
                    title: 'Option 1',
                    payload: 'museum_what',
                },
                {
                    type: 'postback',
                    title: 'Option 2',
                    payload: 'museum_sched',
                },
                {
                    type: 'postback',
                    title: 'Option 3',
                    payload: 'museum_part',
                },
            ]);
        },
    },
]);

module.exports = MuseumButtonHandler;
