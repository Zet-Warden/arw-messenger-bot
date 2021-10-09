const handlers = [
    require('./ARWEvents.js'),
    require('./ARWConcerns.js'),
    require('./PaymentConcerns.js'),
    require('./WebsiteConcerns.js'),
    require('./OtherConcerns.js'),
    require('./MuseumConcerns.js'),
    require('./EliteConcerns.js'),
];

module.exports = handlers.map((handler) => handler.Action);
