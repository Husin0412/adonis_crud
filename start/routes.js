'use strict'

const BukuController = require('../app/Controllers/Http/BukuController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'BukuController.index')
Route.get('/daftar-buku', 'BukuController.daftarBuku')
Route.get('/input-buku', 'BukuController.inputBuku')
Route.get('/edit-buku/:id', 'BukuController.editBuku')
Route.get('/delete-buku/:id', 'BukuController.deleteBuku')

Route.post('/store', 'BukuController.store')
Route.post('/update-buku/:id', 'BukuController.updateBuku')

// Route.on('/').render('welcome')

// Route.get('/testing', () =>  "hello dunia" ).as('get.hellow')
// Route.put('/', () => 'ini adalah put')
// Route.post('/', () => 'ini adalah post')
// Route.delete('/', () => 'ini adalah delete')
// Route.patch('/', () => 'ini adalah patch')

// Route.route('/', () => 'ini adalah multyple method', ['GET', 'PUT', 'POST', 'DELETE'])

// Route.get('post/:id?', ({ params }) => {
//     return `post id ${params.id}`;
// })

// Route.get('/adonis','BelajarAdoniController.index')
// Route.post('/adonis/create','BelajarAdoniController.create')
// Route.put('/adonis/update','BelajarAdoniController.update')
