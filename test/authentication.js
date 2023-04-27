require('should');

const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);

describe('Authentication', () => {
  zapier.tools.env.inject();

  it('returns a token', async () => {
    const bundle = {
      authData: {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        tenant_id: process.env.TENANT_ID,
        scope: process.env.SCOPE,
      },

      inputData: {},
    };
    
    const results = await appTester(
      App.authentication.sessionConfig.perform,
      bundle
    );

    results.should.not.be.null;
  });
});
