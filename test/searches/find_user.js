require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);

describe('Search - find_user', () => {
  zapier.tools.env.inject();

  it('should get an array', async () => {
    const bundle = {
      authData: {
        sessionKey: process.env.AUTH_TOKEN,
      },

      inputData: {
        email_address: process.env.VALID_EMAIL_ADDRESS
      },
    };
    
    // mock create contact
    // jest.spyOn(find_user, 'create_employee').mockReturnValue(
    //   [{
    //     businessPhones: [],
    //     displayName: 'First Last',
    //     givenName: null,
    //     jobTitle: null,
    //     mail: 'first.last@domain.tld',
    //     mobilePhone: null,
    //     officeLocation: null,
    //     preferredLanguage: null,
    //     surname: null,
    //     userPrincipalName: 'first.last@domain.tld',
    //     id: '32d99ef2-a6cb-4781-b7cd-79111f8ffc81',
    //   }]
    // )

    const results = await appTester(
      App.searches['find_user'].operation.perform,
      bundle
    );

    results.should.be.an.Array();
    results.length.should.be.aboveOrEqual(0);
    results[0].should.have.property('id');

  });
});
