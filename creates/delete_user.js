const perform = async (z, bundle) => {
  const options = {
    url: `https://graph.microsoft.com/v1.0/users/${bundle.inputData.id}`,
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${bundle.authData.sessionKey}`,
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    return {};
  });
};

module.exports = {
  key: 'delete_user',
  noun: 'User',
  display: {
    label: 'Delete User',
    description: 'Deletes an Azure Active Directory User.',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: [
      {
        key: 'id',
        label: 'ID',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    perform: perform,
  },
};
