const assert = require('assert');
const app = require('../../src/app');

describe('\'dictionary\' service', () => {
  it('registered the service', () => {
    const service = app.service('dictionary');

    assert.ok(service, 'Registered the service');
  });
});
