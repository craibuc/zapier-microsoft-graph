require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe.skip('Create - create_user', () => {
  zapier.tools.env.inject();

  it('should create an object', async () => {
    const bundle = {
      authData: {
        sessionKey: process.env.AUTH_TOKEN,
      },

      inputData: {
        displayName: 'First Last',
        givenName: 'First',
        surname: 'Last',
        userPrincipalName: 'first.last@domain.tld',
      },
    };

    const result = await appTester(
      App.creates['create_user'].operation.perform,
      bundle
    );

    result.should.not.be.an.Array();
  });
});
