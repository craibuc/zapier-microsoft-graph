const authenticate = async (z, bundle) => {

  const options = {
    url: `https://login.microsoftonline.com/${bundle.authData.tenant_id}/oauth2/v2.0/token`,
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'accept': 'application/json'
    },
    body: {
      'client_id': bundle.authData.client_id,
      'client_secret': bundle.authData.client_secret,
      'grant_type': 'client_credentials',
      'scope': bundle.authData.scope,
    }
  }
  
  return z.request(options)
    .then((response) => {
      response.throwForStatus();
      const results = response.json;
  
      return {
        'sessionKey': results.access_token
      };
    });

};

const testAuth = async (z, bundle) => {
  const options = {
    url: 'https://graph.microsoft.com/v1.0/users',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${bundle.authData.sessionKey}`,
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    return results;
  });
};

module.exports = {
  type: 'session',
  test: testAuth,
  fields: [
    {
      computed: false,
      key: 'client_id',
      required: true,
      label: 'Client ID',
      type: 'string',
      helpText:
        'Microsoft Azure > App registrations > [your app] > `Application (client) ID`',
    },
    {
      computed: false,
      key: 'client_secret',
      required: true,
      label: 'Client Secret',
      type: 'password',
      helpText:
        'Microsoft Azure > App registrations > [your app] > Certificates & secrets > `value`',
    },
    {
      computed: false,
      key: 'tenant_id',
      required: true,
      label: 'Tenant ID',
      type: 'string',
      helpText:
        'Microsoft Azure > App registration > [your app] > `Directory (tenant) ID`',
    },
    {
      computed: false,
      key: 'scope',
      required: true,
      label: 'Scope',
      type: 'string',
      default: 'https://graph.microsoft.com/.default',
    },
  ],
  sessionConfig: {
    perform: authenticate
  },
};
