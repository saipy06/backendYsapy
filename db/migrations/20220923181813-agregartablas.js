'use strict';

const { CategorySchema, CATEGORY_TABLE } = require('./../models/category.model');
const { CustomerSchema, CUSTOMER_TABLE } = require('./../models/customer.model');
const { ProductSchema, PRODUCT_TABLE} = require('./../models/product.model');
const { OrderSchema, ORDER_TABLE} = require('./../models/order.model');



module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
   await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
   await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
   await queryInterface.createTable(ORDER_TABLE, OrderSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(CUSTOMER_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(ORDER_TABLE);
  }
};
