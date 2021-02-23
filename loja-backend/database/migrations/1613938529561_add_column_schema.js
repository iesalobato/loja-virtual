'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddColumnSchema extends Schema {
  up () {
    this.alter('products', (table) => {
      table.binary('image');
    })
  }
}

module.exports = AddColumnSchema
