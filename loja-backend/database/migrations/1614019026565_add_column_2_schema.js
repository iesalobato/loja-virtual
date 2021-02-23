'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddColumn2Schema extends Schema {
  up () {
    this.alter('products', (table) => {
      table.string('image_str');
    })
  }
}

module.exports = AddColumn2Schema
