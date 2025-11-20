import { useEffect, useMemo, useState } from "react";
import type { IListTaskControllerFactory } from "../../controllers/list-tasks.controller.port";
import type { TaskEntity } from "../../entities/Task";



export const ListTodos = ({ di }: { di: { listTasks: IListTaskControllerFactory } }) => {
    const [todos, setTodos] = useState<Array<TaskEntity> | null>(null)
    const controller = useMemo(() => di.listTasks.make({
        present(response) {
            if (response.success) {
                setTodos(response.data)
            }
        }
    }), [di])

    useEffect(() => {
        controller.handleRequest({})
    }, [controller])
    return (
        <>
        <div>List Todos</div>
        {todos ? todos.map((todo, index) => <div key={index}>{todo.title}</div>) : "Loading..."}
        </>


    )
}