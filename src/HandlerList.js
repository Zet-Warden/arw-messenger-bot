const fs = require('fs');
const path = require('path');

const handlers = [];
const fileNames = fs.readdirSync(path.join(__dirname, 'handlers'));

fileNames.forEach((fileName) => {
    if (fileName.endsWith('.js')) {
        handlers.push(require(`./handlers/${fileName}`));
    }
});

module.exports = handlers.map((handler) => handler.Action.bind(handler));
