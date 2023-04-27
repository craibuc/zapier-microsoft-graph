require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe.skip('Create - delete_user', () => {
  zapier.tools.env.inject();

  it('should create an object', async () => {
    const bundle = {
      authData: {
        sessionKey: process.env.AUTH_TOKEN,
      },

      inputData: {
        id: '9A82CC63-EF32-4E2B-A114-64E3615F072D'
      },
    };

    const result = await appTester(
      App.creates['delete_user'].operation.perform,
      bundle
    );

    result.should.not.be.an.Array();
  });
});
