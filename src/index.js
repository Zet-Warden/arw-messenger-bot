const { chain } = require('bottender');
const handlers = require('./HandlerList.js');

module.exports = async function App(context) {
    return chain([init, ...handlers]);
};
