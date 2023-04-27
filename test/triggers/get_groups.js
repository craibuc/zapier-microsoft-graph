require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe.skip('Trigger - get_groups', () => {
  zapier.tools.env.inject();

  it('should get an array', async () => {
    const bundle = {
      authData: {
        sessionKey: process.env.AUTH_TOKEN,
      },

      inputData: {},
    };

    const results = await appTester(
      App.triggers['get_groups'].operation.perform,
      bundle
    );

    results.should.be.an.Array();
  
  });
});
