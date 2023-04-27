const perform = async (z, bundle) => {
  const options = {
    url: `https://graph.microsoft.com/v1.0/users/${bundle.inputData.id}`,
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${bundle.authData.sessionKey}`,
    },
    body: {
      accountEnabled: bundle.inputData.enabled,
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    return {};
  });
};

module.exports = {
  key: 'update_user',
  noun: 'User',
  display: {
    label: 'Update User',
    description: "Update a tenant's User.",
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: [
      {
        key: 'id',
        label: 'Id',
        type: 'string',
        helpText: "The User's primary key (a GUID).",
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'enabled',
        label: 'Enabled',
        type: 'boolean',
        helpText: 'Is the account enabled?',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
    ],
    perform: perform,
  },
};
