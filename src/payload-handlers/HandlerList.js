const handlers = [
    require('./ARWEvents.js'),
    require('./ARWConcerns.js'),
    require('./PaymentConcerns.js'),
    require('./WebsiteConcerns.js'),

    require('./MuseumConcerns.js'),
    require('./EliteConcerns.js'),
    require('./OtherConcerns.js'),
];

module.exports = handlers.map((handler) => handler.Action.bind(handler));
