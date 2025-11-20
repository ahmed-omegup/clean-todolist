import { CreateTaskPresenter, CreateTaskRequest, CreateTaskResponse } from "../use-cases/create-task.port";



export interface ICreateTaskController{
    handleRequest(request: CreateTaskRequest):void
}

export interface ICreateTaskControllerFactory {
    make(presenter: CreateTaskPresenter): ICreateTaskController
}
