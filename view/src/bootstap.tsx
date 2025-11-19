import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import type { ICreateTaskControllerFactory } from '../../controllers/create-task.controller.port'
import { AppHOC } from './App'


export const bootstrap = (createTask: ICreateTaskControllerFactory) => {
  const App = AppHOC(createTask)
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
