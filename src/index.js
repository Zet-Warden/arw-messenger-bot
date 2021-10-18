const { chain } = require('bottender');
const handlers = require('./HandlerList.js');

module.exports = async function App(context) {
    console.log('init');
    return chain([...handlers]);
};
