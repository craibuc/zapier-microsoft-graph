const perform = async (z, bundle) => {
  const options = {
    url: `https://graph.microsoft.com/v1.0/users/${bundle.inputData.email_address}`,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${bundle.authData.sessionKey}`,
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;
    return [results];
  });
};

module.exports = {
  key: 'find_user',
  noun: 'User',
  display: {
    label: 'Find User',
    description: 'Find a user by email address.',
    hidden: false,
    important: true,
  },
  operation: {
    perform: perform,
    inputFields: [
      {
        key: 'email_address',
        label: 'Email Address',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      }
    ],
    sample: {
      businessPhones: [],
      displayName: 'First Last',
      givenName: null,
      jobTitle: null,
      mail: 'first.last@domain.tld',
      mobilePhone: null,
      officeLocation: null,
      preferredLanguage: null,
      surname: null,
      userPrincipalName: 'first.last@domain.tld',
      id: '32d99ef2-a6cb-4781-b7cd-79111f8ffc81',
    },
    outputFields: [
      { key: 'displayName' },
      { key: 'givenName' },
      { key: 'jobTitle' },
      { key: 'mail' },
      { key: 'mobilePhone' },
      { key: 'officeLocation' },
      { key: 'preferredLanguage' },
      { key: 'surname' },
      { key: 'userPrincipalName' },
      { key: 'id' },
    ],
  },
};
