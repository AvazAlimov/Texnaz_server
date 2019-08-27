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
      Permissions.SHOW_SHIPMENTS_PENDING_SALES,
      Permissions.SHOW_SHIPMENTS_APPROVED_SALES,
      Permissions.SHOW_SHIPMENTS_FINISHED,
      Permissions.SHOW_SHIPMENTS_REJECTED,
      Permissions.SHOW_SHIPMENTS_ACCOUNTING,
      Permissions.SHOW_PAYMENTS,
      Permissions.SHOW_MY_EXPANSES,
      Permissions.SHOW_SETTINGS,
      Permissions.SHOW_TABELS,
      Permissions.SHOW_MOTIVATIONS,
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
      Permissions.SHOW_SALES_INFORMATION,
      Permissions.SHOW_SALES_PENDING,
      Permissions.SHOW_SALES_APPROVED,
      Permissions.SHOW_WAREHOUSE_INFORMATION,
      Permissions.SHOW_WAREHOUSE_MOVE,
      Permissions.SHOW_WAREHOUSE_BOOKING,
      Permissions.SHOW_WAREHOUSE_RETURN,
      Permissions.SHOW_WAREHOUSE_RETURN_CLIENT,
      Permissions.SHOW_WAREHOUSE_LOST_STOCKS,
      Permissions.SHOW_WAREHOUSE_SALE,
      Permissions.SHOW_WAREHOUSE_SHIPMENTS,
      Permissions.SHOW_WAREHOUSE_PRE_STOCKS,
      Permissions.SHOW_WAREHOUSE_ACCEPTANCE,
    ])
    // MANAGER
      .concat(getBindings(2, [
        Permissions.SHOW_PRICES,
        Permissions.SHOW_TABELS,
        Permissions.SHOW_MOTIVATIONS,
        Permissions.SHOW_PRICES_PRICED,
        Permissions.SHOW_WAREHOUSES,
        Permissions.SHOW_SHIPMENTS,
        Permissions.SHOW_SHIPMENTS_PENDING_SALES,
        Permissions.SHOW_SHIPMENTS_APPROVED_SALES,
        Permissions.SHOW_SHIPMENTS_FINISHED,
        Permissions.SHOW_SHIPMENTS_REJECTED,
        Permissions.SHOW_CLIENTS,
        Permissions.SHOW_SETTINGS,
        Permissions.CAN_BOOK,
        Permissions.SHOW_SALES_MY_SALES,
        Permissions.SHOW_WAREHOUSE_INFORMATION,
        Permissions.SHOW_WAREHOUSE_BOOKING,
        Permissions.SHOW_WAREHOUSE_RETURN_CLIENT,
        Permissions.SHOW_WAREHOUSE_SALE,
      ]))
    // OPERATOR
      .concat(getBindings(3, [
        Permissions.SHOW_WAREHOUSES,
        Permissions.SHOW_MANAGERS,
        Permissions.SHOW_CLIENTS,
        Permissions.SHOW_SHIPMENTS,
        Permissions.SHOW_SHIPMENTS_PENDING_SALES,
        Permissions.SHOW_SHIPMENTS_APPROVED_SALES,
        Permissions.SHOW_SHIPMENTS_FINISHED,
        Permissions.SHOW_SHIPMENTS_REJECTED,
        Permissions.SHOW_PAYMENTS,
        Permissions.SHOW_SETTINGS,
        Permissions.SHOW_TABELS,
        Permissions.SHOW_MOTIVATIONS,
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
        Permissions.SHOW_SALES_INFORMATION,
        Permissions.SHOW_SALES_PENDING,
        Permissions.SHOW_SALES_APPROVED,
        Permissions.SHOW_WAREHOUSE_INFORMATION,
      ]))
    // WAREHOUSE OWNER
      .concat(getBindings(4, [
        Permissions.SHOW_WAREHOUSES,
        Permissions.SHOW_SETTINGS,
        Permissions.SHOW_WAREHOUSE_INFORMATION,
        Permissions.SHOW_WAREHOUSE_MOVE,
        Permissions.SHOW_WAREHOUSE_RETURN,
        Permissions.SHOW_WAREHOUSE_RETURN_CLIENT,
        Permissions.SHOW_WAREHOUSE_LOST_STOCKS,
        Permissions.SHOW_WAREHOUSE_SHIPMENTS,
        Permissions.SHOW_WAREHOUSE_PRE_STOCKS,
        Permissions.SHOW_WAREHOUSE_ACCEPTANCE,
      ]))
    // ACCOUNTANT
      .concat(getBindings(5, [
        Permissions.SHOW_SHIPMENTS,
        Permissions.SHOW_SHIPMENTS_ACCOUNTING,
        Permissions.SHOW_SETTINGS,
      ]))
    // CHIEF
      .concat(getBindings(6, [
        Permissions.SHOW_WAREHOUSES,
        Permissions.SHOW_MANAGERS,
        Permissions.SHOW_CLIENTS,
        Permissions.SHOW_SHIPMENTS,
        Permissions.SHOW_SHIPMENTS_PENDING_SALES,
        Permissions.SHOW_SHIPMENTS_APPROVED_SALES,
        Permissions.SHOW_SHIPMENTS_FINISHED,
        Permissions.SHOW_SHIPMENTS_REJECTED,
        Permissions.SHOW_SHIPMENTS_ACCOUNTING,
        Permissions.SHOW_PAYMENTS,
        Permissions.SHOW_SETTINGS,
        Permissions.SHOW_TABELS,
        Permissions.SHOW_MOTIVATIONS,
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
        Permissions.SHOW_SALES_INFORMATION,
        Permissions.SHOW_SALES_PENDING,
        Permissions.SHOW_SALES_APPROVED,
        Permissions.SHOW_WAREHOUSE_INFORMATION,
      ]))
      // SUPERVISOR
      .concat(getBindings(7, [
        Permissions.SHOW_PRICES,
        Permissions.SHOW_WAREHOUSES,
        Permissions.SHOW_MANAGERS,
        Permissions.SHOW_CLIENTS,
        Permissions.SHOW_SHIPMENTS,
        Permissions.SHOW_SHIPMENTS_PENDING_SALES,
        Permissions.SHOW_SHIPMENTS_APPROVED_SALES,
        Permissions.SHOW_SHIPMENTS_FINISHED,
        Permissions.SHOW_SHIPMENTS_REJECTED,
        Permissions.SHOW_SHIPMENTS_ACCOUNTING,
        // Permissions.SHOW_PAYMENTS,
        Permissions.SHOW_SETTINGS,
        Permissions.SHOW_TABELS,
        Permissions.SHOW_MOTIVATIONS,
        Permissions.SHOW_CALCULATOR_APPROVED,
        Permissions.SHOW_CALCULATOR_NON_APPROVED,
        Permissions.SHOW_PRICES_PRICED,
        Permissions.SHOW_PRICES_UNPRICED,
        Permissions.SHOW_SALES_INFORMATION,
        Permissions.SHOW_SALES_PENDING,
        Permissions.SHOW_SALES_APPROVED,
        Permissions.SHOW_WAREHOUSE_INFORMATION,
        Permissions.SHOW_WAREHOUSE_MOVE,
        Permissions.SHOW_WAREHOUSE_BOOKING,
        Permissions.SHOW_WAREHOUSE_RETURN,
        Permissions.SHOW_WAREHOUSE_RETURN_CLIENT,
        Permissions.SHOW_WAREHOUSE_LOST_STOCKS,
        Permissions.SHOW_WAREHOUSE_SALE,
        Permissions.SHOW_WAREHOUSE_SHIPMENTS,
        Permissions.SHOW_WAREHOUSE_PRE_STOCKS,
        Permissions.SHOW_WAREHOUSE_ACCEPTANCE,
      ]))
      // PROVINCE CEO
      .concat(getBindings(8, [
        Permissions.SHOW_PRICES,
        Permissions.SHOW_WAREHOUSES,
        Permissions.SHOW_MANAGERS,
        Permissions.SHOW_CLIENTS,
        Permissions.SHOW_SHIPMENTS,
        Permissions.SHOW_SHIPMENTS_PENDING_SALES,
        Permissions.SHOW_SHIPMENTS_APPROVED_SALES,
        Permissions.SHOW_SHIPMENTS_FINISHED,
        Permissions.SHOW_SHIPMENTS_REJECTED,
        Permissions.SHOW_SHIPMENTS_ACCOUNTING,
        // Permissions.SHOW_PAYMENTS,
        Permissions.SHOW_SETTINGS,
        Permissions.SHOW_TABELS,
        Permissions.SHOW_MOTIVATIONS,
        Permissions.SHOW_CALCULATOR_APPROVED,
        Permissions.SHOW_CALCULATOR_NON_APPROVED,
        Permissions.SHOW_PRICES_PRICED,
        Permissions.SHOW_PRICES_UNPRICED,
        Permissions.SHOW_SALES_INFORMATION,
        Permissions.SHOW_SALES_PENDING,
        Permissions.SHOW_SALES_APPROVED,
        Permissions.SHOW_WAREHOUSE_INFORMATION,
        Permissions.SHOW_WAREHOUSE_MOVE,
        Permissions.SHOW_WAREHOUSE_BOOKING,
        Permissions.SHOW_WAREHOUSE_RETURN,
        Permissions.SHOW_WAREHOUSE_RETURN_CLIENT,
        Permissions.SHOW_WAREHOUSE_LOST_STOCKS,
        Permissions.SHOW_WAREHOUSE_SALE,
        Permissions.SHOW_WAREHOUSE_SHIPMENTS,
        Permissions.SHOW_WAREHOUSE_PRE_STOCKS,
        Permissions.SHOW_WAREHOUSE_ACCEPTANCE,
      ]))
    // Sales Representative
      .concat(getBindings(9, [
        Permissions.SHOW_PRICES,
        Permissions.SHOW_TABELS,
        Permissions.SHOW_MOTIVATIONS,
        Permissions.SHOW_PRICES_PRICED,
        Permissions.SHOW_WAREHOUSES,
        Permissions.SHOW_SHIPMENTS,
        Permissions.SHOW_SHIPMENTS_PENDING_SALES,
        Permissions.SHOW_SHIPMENTS_APPROVED_SALES,
        Permissions.SHOW_SHIPMENTS_FINISHED,
        Permissions.SHOW_SHIPMENTS_REJECTED,
        Permissions.SHOW_CLIENTS,
        Permissions.SHOW_SETTINGS,
        Permissions.CAN_BOOK,
        Permissions.SHOW_SALES_MY_SALES,
        Permissions.SHOW_WAREHOUSE_INFORMATION,
        Permissions.SHOW_WAREHOUSE_BOOKING,
        Permissions.SHOW_WAREHOUSE_RETURN_CLIENT,
        Permissions.SHOW_WAREHOUSE_SALE,
      ])),
    {}),

  down: queryInterface => queryInterface.bulkDelete('RolePermissions', null, {}),
};
