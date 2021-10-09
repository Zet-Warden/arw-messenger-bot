const dedent = require('dedent');
const Handler = require('../CommandHandler.js');

const EliteButtonHandler = new Handler();

let templateTitle = 'What do you wanna know more about?';

EliteButtonHandler.addEvents([
    {
        name: 'arw_elite',
        type: 'payload',
        blockConclusion: true,
        action: async (context) => {
            const title = dedent`${templateTitle}
                                    1. What is The ARW Elite
                                    2. When is The ARW Elite
                                    3. Where and how can we watch the event`;
            await context.sendButtonTemplate(title, [
                {
                    type: 'postback',
                    title: 'Option 1',
                    payload: 'elite_what',
                },
                {
                    type: 'postback',
                    title: 'Option 2',
                    payload: 'elite_when',
                },
                {
                    type: 'postback',
                    title: 'Option 3',
                    payload: 'elite_watch',
                },
            ]);
        },
    },
]);

module.exports = EliteButtonHandler;
