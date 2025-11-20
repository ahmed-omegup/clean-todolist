import { createRef, useState } from 'react'
import type { ICreateTaskControllerFactory } from '../../controllers/create-task.controller.port'
import type { CreateTaskResponse } from '../../use-cases/create-task.port'




export const CreateTodo = ({ di, goHome }: { goHome: () => void, di: { createTask: ICreateTaskControllerFactory } }) => {
    const ref = createRef<HTMLInputElement>()
    const ref1 = createRef<HTMLTextAreaElement>()

    const [response, setResponse] = useState<CreateTaskResponse | null>(null)
    const controller = di.createTask.make({
        present(response) {
            if (response.success) {
                goHome()
            } else {
                setResponse(response)
            }
        }
    })
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
