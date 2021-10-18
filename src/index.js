const { chain } = require('bottender');
const handlers = require('./HandlerList.js');

module.exports = async function App(context) {
    // return chain([init, ...handlers]);

    await context.sendText('hi', { personaId: '337754377725622' });
    await context.sendText('hi', { personaId: '1542383836115368' });
};
