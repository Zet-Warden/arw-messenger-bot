const { router, text, payload } = require('bottender/router');
const quickReplies = require('./concerns/quickreplies')

module.exports = async function App(context) {
  return router([
    text('hi', quickReplies),
    payload(['arw events', 'arw concerns', 'payment concerns', 'website concerns', 'others'])
  ]);
};
