const perform = async (z, bundle) => {
  const options = {
    url: 'https://graph.microsoft.com/v1.0/groups',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${bundle.authData.sessionKey}`,
    },
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    return results.value;
  });
};

module.exports = {
  operation: {
    perform: perform,
    sample: {
      id: '0a7bc93d-0fe6-4731-81c1-3bf9f8a7d45e',
      deletedDateTime: null,
      classification: null,
      createdDateTime: '2023-01-01T00:00:00Z',
      creationOptions: [],
      description: 'Quae nihil in nisi. Architecto et asperiores nihil. Dicta aut omnis et occaecati harum. Dolor sequi autem eum nihil dignissimos et.',
      displayName: 'Lorem Ipsum',
      expirationDateTime: null,
      groupTypes: [],
      isAssignableToRole: null,
      mail: null,
      mailEnabled: false,
      mailNickname: 'loremipsum',
      membershipRule: null,
      membershipRuleProcessingState: null,
      onPremisesDomainName: 'domain.local',
      onPremisesLastSyncDateTime: '2023-01-01T00:00:00Z',
      onPremisesNetBiosName: 'DOMAIN',
      onPremisesSamAccountName: 'Lorem Ipsum',
      onPremisesSecurityIdentifier: 'abcdefghijklmnopqrstuvwxyz',
      onPremisesSyncEnabled: true,
      preferredDataLocation: null,
      preferredLanguage: null,
      proxyAddresses: [],
      renewedDateTime: '2023-01-01T00:00:00Z',
      resourceBehaviorOptions: [],
      resourceProvisioningOptions: [],
      securityEnabled: true,
      securityIdentifier: 'abcdefghijklmnopqrstuvwxyz',
      theme: null,
      visibility: null,
      onPremisesProvisioningErrors: [],
    },
    outputFields: [{ key: 'id' }, { key: 'displayName' }],
  },
  key: 'get_groups',
  noun: 'Group',
  display: {
    label: 'Get Groups',
    description: 'Get the list of Azure Active Directory groups.',
    hidden: true,
    important: false,
  },
};
