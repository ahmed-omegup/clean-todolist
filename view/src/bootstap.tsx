import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import type { ICreateTaskControllerFactory } from '../../controllers/create-task.controller.port'
import type { IListTaskControllerFactory } from '../../controllers/list-tasks.controller.port'
import { App } from './App'


export const bootstrap = (di : {createTask: ICreateTaskControllerFactory,
  listTasks: IListTaskControllerFactory
}) => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App di={di}/>
    </StrictMode>,
  )
}
