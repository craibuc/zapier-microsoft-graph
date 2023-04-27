const authentication = require('./authentication');
const getGroupsTrigger = require('./triggers/get_groups.js');
const updateUserCreate = require('./creates/update_user.js');
const createUserCreate = require('./creates/create_user.js');
const deleteUserCreate = require('./creates/delete_user.js');
// const assignUserToGroupCreate = require('./creates/assign_user_to_group.js');
const findUserSearch = require('./searches/find_user.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  searches: {
    [findUserSearch.key]: findUserSearch,
  },
  creates: {
    [updateUserCreate.key]: updateUserCreate,
    [createUserCreate.key]: createUserCreate,
    [deleteUserCreate.key]: deleteUserCreate,
    // [assignUserToGroupCreate.key]: assignUserToGroupCreate,
  },
  triggers: { [getGroupsTrigger.key]: getGroupsTrigger },
};
