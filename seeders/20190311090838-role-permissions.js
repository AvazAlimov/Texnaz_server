const Permissions = require('../util/permissions');

function getBindings(roleId, permissions) {
  return permissions.map(permission => ({
    roleId,
    permissionId: permission.id,
  }));
}

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('RolePermissions',
    // CEO
    getBindings(1, [
      Permissions.SHOW_STATISTICS,
      Permissions.SHOW_CALCULATOR,
      Permissions.SHOW_PRICES,
      Permissions.SHOW_WAREHOUSES,
      Permissions.SHOW_MANAGERS,
      Permissions.SHOW_CLIENTS,
      Permissions.SHOW_SHIPMENTS,
      Permissions.SHOW_PAYMENTS,
      Permissions.SHOW_MY_EXPANSES,
      Permissions.SHOW_SETTINGS,
      Permissions.SHOW_CALCULATOR_APPROVED,
      Permissions.SHOW_CALCULATOR_NON_APPROVED,
      Permissions.SHOW_PRICES_PRICED,
      Permissions.SHOW_PRICES_UNPRICED,
      Permissions.SHOW_SETTINGS_PRODUCTS,
      Permissions.SHOW_SETTINGS_BRANDS,
      Permissions.SHOW_SETTINGS_PRODUCT_TYPES,
      Permissions.SHOW_SETTINGS_UNITS,
      Permissions.SHOW_SETTINGS_PURPOSES,
      Permissions.SHOW_SETTINGS_TAGS,
      Permissions.SHOW_SETTINGS_USERS,
      Permissions.SHOW_SETTINGS_EXPANSES,
      Permissions.SHOW_SETTINGS_CONFIGURATIONS,
      Permissions.SHOW_SETTINGS_REGIONS,
    ])
    // MANAGER
      .concat(getBindings(2, [
        Permissions.SHOW_PRICES,
        Permissions.SHOW_PRICES_PRICED,
        Permissions.SHOW_WAREHOUSES,
        Permissions.SHOW_MANAGERS,
        Permissions.SHOW_CLIENTS,
        Permissions.SHOW_SETTINGS,
        Permissions.CAN_BOOK,
      ]))
    // OPERATOR
      .concat(getBindings(3, [
        Permissions.SHOW_STATISTICS,
        Permissions.SHOW_CALCULATOR,
        Permissions.SHOW_PRICES,
        Permissions.SHOW_WAREHOUSES,
        Permissions.SHOW_MANAGERS,
        Permissions.SHOW_CLIENTS,
        Permissions.SHOW_SHIPMENTS,
        Permissions.SHOW_PAYMENTS,
        Permissions.SHOW_SETTINGS,
        Permissions.SHOW_CALCULATOR_APPROVED,
        Permissions.SHOW_PRICES_PRICED,
        Permissions.SHOW_SETTINGS_PRODUCTS,
        Permissions.SHOW_SETTINGS_BRANDS,
        Permissions.SHOW_SETTINGS_PRODUCT_TYPES,
        Permissions.SHOW_SETTINGS_UNITS,
        Permissions.SHOW_SETTINGS_PURPOSES,
        Permissions.SHOW_SETTINGS_TAGS,
        Permissions.SHOW_SETTINGS_USERS,
        Permissions.SHOW_SETTINGS_REGIONS,
      ]))
    // WAREHOUSE OWNER
      .concat(getBindings(4, [
        Permissions.SHOW_WAREHOUSES,
        Permissions.SHOW_SETTINGS,
      ]))
    // ACCOUNTANT
      .concat(getBindings(5, [
        Permissions.SHOW_WAREHOUSES,
        Permissions.SHOW_PAYMENTS,
        Permissions.SHOW_CLIENTS,
        Permissions.SHOW_SETTINGS,
      ]))
    // Chief
      .concat(getBindings(6, [
        Permissions.SHOW_PRICES,
        Permissions.SHOW_PRICES_PRICED,
        Permissions.SHOW_WAREHOUSES,
        Permissions.SHOW_MANAGERS,
        Permissions.SHOW_CLIENTS,
        Permissions.SHOW_SETTINGS,
        Permissions.CAN_BOOK,
      ])),
    {}),

  down: queryInterface => queryInterface.bulkDelete('RolePermissions', null, {}),
};
