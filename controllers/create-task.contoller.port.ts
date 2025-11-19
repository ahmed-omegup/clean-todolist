import { CreateTaskRequest, CreateTaskResponse } from "../use-cases/create-task.port";

export interface CreateTaskPresenter {
    present(response: CreateTaskResponse): void;
}


export interface ICreateTaskController{
    handleRequest(request: CreateTaskRequest):void
}

export interface ICreateTaskControllerFactory {
    make(presenter:CreateTaskPresenter): ICreateTaskController
}
