import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Todo from 'App/Models/Todo'

export default class TodosController {
  public async index({ view }: HttpContextContract) {
    const todos = await Todo.query().orderBy('id','desc')
    return view.render('todos', { todos: todos })
  }


  public async store({ request, response }: HttpContextContract) {
    const title = request.input('title')
    const todo = new Todo()
    todo.title = title
    await todo.save()
    response.redirect().toRoute('todos.index')
  }

  public async completed({ params,response }: HttpContextContract) {
    const id = params.id
    const todo = await Todo.find(id)
    if(todo?.status == 'completed'){
      todo!.status = 'inprogress'
    }else {
      todo!.status = 'completed'
    }
    await todo?.save()    
    response.redirect().toRoute('todos.index')
  }

  public async edit({ params, view }: HttpContextContract) {
    const id = params.id
    const todo = await Todo.find(id)
    const todos = await Todo.all()
    return view.render('todos', { todos: todos ,todo: todo})
  }

  public async update({params, request, response }: HttpContextContract) {
    const id = params.id
    const todo = await Todo.find(id)
    todo!.title = request.input('title')
    await todo?.save()
    response.redirect().toRoute('todos.index')
  }

  public async destroy({  params, response}: HttpContextContract) {
    const id = params.id
    const todo = await Todo.find(id)
    await todo?.delete()
    response.redirect().toRoute('todos.index')
  }

}
