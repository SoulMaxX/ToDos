/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'


Route.get('/', async ({ response }) => {
    response.redirect().toRoute('todos.index')
})

Route.get('/todos','TodosController.index').as('todos.index')
Route.post('/todos','TodosController.store').as('todos.store')
Route.get('/todos/:id/completed','TodosController.completed').as('todos.completed')
Route.get('/todos/:id/delete','TodosController.destroy').as('todos.delete')
Route.get('/todos/:id/edit','TodosController.edit').as('todos.edit')
Route.post('/todos/:id/update','TodosController.update').as('todos.update')

