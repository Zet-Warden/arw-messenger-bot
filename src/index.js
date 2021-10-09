const { chain } = require('bottender');
const handlers = require('./HandlerList.js');

module.exports = async function App(context) {
<<<<<<< Updated upstream
    return chain([init, ...handlers]);
=======
    return chain([...handlers]);
>>>>>>> Stashed changes
};
