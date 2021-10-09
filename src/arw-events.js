module.exports = async function (context) {
    const { museum, elite } = require('./concerns/buttonTemplates.js');

    const msg = context.event.payload;

    switch (msg) {
        case 'ae_arw_events_2':
            await context.sendText(
                "This year's ARW will have 2 main events: It's Museum Day, Everyday and the ARW Elite."
            );
            break;

        case 'ae_arw_museum':
            await museum(context);
            break;

        case 'ae_arw_elite':
            await elite(context);
            break;
    }
};
