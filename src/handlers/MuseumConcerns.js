const dedent = require('dedent');

const Handler = require('../CommandHandler.js');
const MuseumConcernHandler = new Handler('mu');

MuseumConcernHandler.addEvents([
    {
        name: 'museum_what',
        type: 'payload',
        action: async (context) => {
            await context.sendText(
                'Similar to the typical booth set-up per org during face to face classes, this time we will be doing it through zoom. It’s Museum Day, Everyday will be an avenue for CSO organizations to recruit and promote their hearts outs by virtually connecting to the Lasallian community.'
            );
        },
    },
    {
        name: 'museum_sched',
        type: 'payload',
        action: async (context) => {
            await context.sendText(
                dedent(`ASPIRE: November 22, Monday
                        PROBE: November 23, Tuesday
                        ENGAGE: November 24, Wednesday
                        CAP13: November 25, Thursday
                        ASO: November 26, Friday`)
            );
        },
    },
    {
        name: 'museum_part',
        type: 'payload',
        action: async (context) => {
            await context.sendText(
                dedent(`Zoom links per organization will be provided through the It's Museum Day, Everyday google form. You can register through this link:

                        <<link>>

                        Each day, this google form will be changed based on the cluster scheduled per day.`)
            );
        },
    },
]);

module.exports = MuseumConcernHandler;
