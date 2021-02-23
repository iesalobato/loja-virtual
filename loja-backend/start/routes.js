'use strict'

const ProductController = require('../app/Controllers/Http/ProductController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/product', 'ProductController.store')
Route.get('/product', 'ProductController.index')
Route.get('/product/:id', 'ProductController.show')
Route.put('product/:id', 'ProductController.update')
Route.delete('product/:id', 'ProductController.destroy')
