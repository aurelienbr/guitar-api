// Initializes the `dictionary` service on path `/dictionary`
const createService = require('feathers-nedb');
const createModel = require('../../models/dictionary.model');
const hooks = require('./dictionary.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'dictionary',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/dictionary', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('dictionary');

  service.hooks(hooks);
};
