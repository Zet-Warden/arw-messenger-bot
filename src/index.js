const { router, text } = require('bottender/router');
const quickReplies = require('./quickreplies')

module.exports = async function App(context) {
  return router([
    text('hi', quickReplies),
  ]);
};
