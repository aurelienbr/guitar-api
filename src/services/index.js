const videos = require('./videos/videos.service.js');
const dictionary = require('./dictionary/dictionary.service.js');
module.exports = function (app) {
  app.configure(videos);
  app.configure(dictionary);
};
