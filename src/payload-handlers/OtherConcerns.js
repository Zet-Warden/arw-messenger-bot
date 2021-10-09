const Handler = require('./Handler.js');

const OtherConcernHandler = new Handler('ot');

OtherConcernHandler.addEvents([
    {
        name: 'join_org',
        action: (context) => {
            context.sendText(
                'No, it is not required to join organizations. However, joining an organization allows you to meet various people and gain new experiences. It can also provide you with many opportunities that can help you grow and make your college life memorable.'
            );
        },
    },
    {
        name: 'join_requirements',
        action: (context) => {
            context.sendText(
                "It may vary depending on the organization's decisions."
            );
        },
    },
]);

module.exports = OtherConcernHandler;
