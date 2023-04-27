const perform = async (z, bundle) => {
  const options = {
    url: `https://graph.microsoft.com/v1.0/groups/${bundle.inputData.group_id}/members/$ref`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${bundle.authData.sessionKey}`,
    },
    body: {
      '@odata.id': `https://graph.microsoft.com/v1.0/directoryObjects/${bundle.inputData.user_id}`,
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    return results;
  });
};

module.exports = {
  key: 'assign_user_to_group',
  noun: 'Group',
  display: {
    label: 'Assign User to Group',
    description:
      'Assign an Azure Active Directory user to an Active Directory group.',
    hidden: false,
    important: true,
  },
  operation: {
    inputFields: [
      {
        key: 'user_id',
        label: 'User Id',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'group_id',
        label: 'Group',
        type: 'string',
        dynamic: 'get_groups.id.displayName',
        required: false,
        list: false,
        altersDynamicFields: false,
      },
    ],
    perform: perform,
  },
};
