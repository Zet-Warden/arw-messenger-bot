const Handler = require('./Handler.js');

const MuseumConcernHandler = new Handler('mu');

MuseumConcernHandler.addEvents([
    {
        name: 'museum_what',
        action: (context) => {
            context.sendText(
                'Similar to the typical booth set-up per org during face to face classes, this time we will be doing it through zoom. It’s Museum Day, Everyday will be an avenue for CSO organizations to recruit and promote their hearts outs by virtually connecting to the Lasallian community.'
            );
        },
    },
    {
        name: 'museum_sched',
        action: (context) => {
            context.sendText(
                `ASPIRE: November 22, Monday
PROBE: November 23, Tuesday
ENGAGE: November 24, Wednesday
CAP13: November 25, Thursday
ASO: November 26, Friday`
            );
        },
    },
    {
        name: 'museum_part',
        action: (context) => {
            context.sendText(`Zoom links per organization will be provided through the It's Museum Day, Everyday google form. You can register through this link:

<<link>>

Each day, this google form will be changed based on the cluster scheduled per day.`);
        },
    },
]);

module.exports = MuseumConcernHandler;
