import { createRef, useState } from 'react'
import type { ICreateTaskControllerFactory } from '../../controllers/create-task.controller.port'
import type { CreateTaskResponse } from '../../use-cases/create-task.port'


const useController = (createTask: ICreateTaskControllerFactory) => {
  const [response, setResponse] = useState<CreateTaskResponse | null>(null)
  const controller = createTask.make({
    present(response) {
      setResponse(response)
    }
  })
  return { response, controller }
}


export const AppHOC = (createTask: ICreateTaskControllerFactory) => {
  const App = () => {
    const ref = createRef<HTMLInputElement>()
    const ref1 = createRef<HTMLTextAreaElement>()

    const { response, controller } = useController(createTask)
    const state = response ? (response.success ? "Task created successfully" : `Failed to create task: ${response.reason}`) : ""

    return (
      <form onSubmit={e => {
        e.preventDefault()
        controller.handleRequest({
          title: ref.current!.value,
          description: ref1.current!.value
        })


      }}>
        <input ref={ref} />
        <textarea ref={ref1} />
        {state}
        <button type="submit">Add</button>
      </form>
    )
  }
  return App
}
