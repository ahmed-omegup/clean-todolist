import { ListTaskPresenter, ListTaskRequest } from "../use-cases/list-tasks.port";



export interface IListTaskController{
    handleRequest(request: ListTaskRequest):void
}

export interface IListTaskControllerFactory {
    make(presenter: ListTaskPresenter): IListTaskController
}
