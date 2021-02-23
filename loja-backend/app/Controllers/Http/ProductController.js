'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with products
 */

const Product = use('App/Models/Product')

class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const products = await Product.query().orderBy('id', 'desc').fetch();
    return products
  }

  /**
   * Create/save a new product.
   * POST products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['name', 'description', 'price', 'image'])
    const product = await Product.create(data)
    return product
  }

  /**
   * Display a single product.
   * GET products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const product = await Product.findBy('id',params.id)
    if(product){
      return product
    }
    return response.status(404).send({message: "PRODUTO NÃO ENCONTRADO"})
  
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const product = await Product.findBy('id',params.id)
    if(product){
      const data = request.only(['name', 'description', 'price', 'image'])
      product.name = data.name
      product.description = data.description
      product.price = data.price
      product.image = data.image
      product.save()
      return product
    }
    return response.status(404).send({message: "PRODUTO NÃO ENCONTRADO"})
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const product = await Product.findBy('id',params.id)
    if(product){
      await product.delete()
      return product
    }
    return response.status(404).send({message: "PRODUTO NÃO ENCONTRADO"})
  }
}



module.exports = ProductController
