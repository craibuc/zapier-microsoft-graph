const perform = async (z, bundle) => {
  const options = {
    url: 'https://graph.microsoft.com/v1.0/users',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${bundle.authData.sessionKey}`,
    },
    body: {
      givenName: bundle.inputData.givenName,
      surname: bundle.inputData.surname,
      displayName: `${bundle.inputData.givenName} ${bundle.inputData.surname}`,
      userPrincipalName: bundle.inputData.userPrincipalName,
      mailNickname: bundle.inputData.mailNickname,
      accountEnabled: bundle.inputData.accountEnabled,
      passwordPolicies: 'DisablePasswordExpiration',
      passwordProfile: {
        password: bundle.inputData.password,
        forceChangePasswordNextSignIn: true,
      },
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    return results;
  });
};

module.exports = {
  key: 'create_user',
  noun: 'User',
  display: {
    label: 'Create User',
    description: 'Creates a tenant User.',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: [
      {
        key: 'givenName',
        label: 'First Name',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'surname',
        label: 'Last Name',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'mailNickname',
        label: 'Nickname',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'userPrincipalName',
        label: 'Email Address',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'password',
        label: 'Initial Password',
        type: 'password',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'accountEnabled',
        label: 'Enabled',
        type: 'boolean',
        default: 'true',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      '@odata.context': 'https://graph.microsoft.com/v1.0/$metadata#users/$entity',
      id: '2c0bd919-91d7-419a-b686-1cf46834f8d6',
      businessPhones: [],
      displayName: 'First Last',
      givenName: 'first',
      jobTitle: null,
      mail: null,
      mobilePhone: null,
      officeLocation: null,
      preferredLanguage: null,
      surname: 'last',
      userPrincipalName: 'first.last@lorenzbus.com',
    },
    outputFields: [
      { key: '@odata.context' },
      { key: 'id' },
      { key: 'displayName' },
      { key: 'givenName' },
      { key: 'jobTitle' },
      { key: 'mail' },
      { key: 'mobilePhone' },
      { key: 'officeLocation' },
      { key: 'preferredLanguage' },
      { key: 'surname' },
      { key: 'userPrincipalName' },
    ],
    perform: perform,
  },
};
