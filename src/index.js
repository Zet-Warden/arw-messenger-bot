const { chain } = require('bottender');
const handlers = require('./HandlerList.js');

module.exports = async function App(context) {
    context.usePersona(process.env.MESSENGER_PERSONA_ID);
    return chain([...handlers]);
};
