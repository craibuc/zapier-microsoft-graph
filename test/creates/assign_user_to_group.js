require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe.skip('Create - assign_user_to_group', () => {
  zapier.tools.env.inject();

  it('should create an object', async () => {
    const bundle = {
      authData: {
        sessionKey: process.env.AUTH_TOKEN,
      },

      inputData: {
        user_id: '0BF48234-22AF-402D-975B-FDE73C66519A',
        group_id: '472B5A55-72D7-459B-A5F0-44E38D300ED0'
      },
    };

    const result = await appTester(
      App.creates['assign_user_to_group'].operation.perform,
      bundle
    );
    
    result.should.not.be.an.Array();
  });
});
