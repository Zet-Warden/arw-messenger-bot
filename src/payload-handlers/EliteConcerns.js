const Handler = require('./Handler.js');

const EliteConcernHandler = new Handler('et');

EliteConcernHandler.addEvents([
    {
        name: 'elite_what',
        action: (context) => {
            context.sendText(
                'The first ever ARW Elite is a month-long competition that aims to highlight the different goals, culture, and values of the organizations under the Council of Student Organizations. The selected elites of the organization should embody the values and culture of their respective organizations and showcase the specific platforms and projects their organization offers so as to attract the student body to join their organization.'
            );
        },
    },
    {
        name: 'elite_when',
        action: (context) => {
            context.sendText(
                'The launch date for the ARW Elite will be on October 26, 2021. Elites who will advance to the final round will be announced live on November 15, 2021. The coronation night will be on November 27, 2021.'
            );
        },
    },
    {
        name: 'elite_watch',
        action: (context) => {
            context.sendText(
                'You can watch the Live Announcement of Top 10 and Coronation Night in the official facebook page of ARW 2021: <<link>>>'
            );
        },
    },
]);

module.exports = EliteConcernHandler;
