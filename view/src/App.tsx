import { useState } from 'react'
import type { ICreateTaskControllerFactory } from '../../controllers/create-task.controller.port'
import type { IListTaskControllerFactory } from '../../controllers/list-tasks.controller.port'
import { CreateTodo } from './CreateTodo'
import { ListTodos } from './ListTodos'



export const App = ({ di }: {
  di: {
    createTask: ICreateTaskControllerFactory,
    listTasks: IListTaskControllerFactory
  }
}) => {
  const [route, setRoute] = useState<'list' | 'create'>('list')
  return {
    list: <>
      <button onClick={() => setRoute('create')}>Add</button>
      <ListTodos di={di} />
    </>,
    create: <CreateTodo di={di} goHome={() => setRoute('list')} />
  }[route]
}