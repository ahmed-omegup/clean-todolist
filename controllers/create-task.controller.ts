import { CreateTaskRequest, CreateTaskRequester } from "../use-cases/create-task.port";
import { CreateTaskPresenter, ICreateTaskController, ICreateTaskControllerFactory } from "./create-task.contoller.port";


export class CreateTaskController implements ICreateTaskController {
    constructor(private presenter: CreateTaskPresenter, private requester: CreateTaskRequester) { }

    async handleRequest(request: CreateTaskRequest): Promise<void> {
       const res =  await this.requester.execute(request)
       this.presenter.present(res)
    }
}


export class CreateTaskControllerFactory implements ICreateTaskControllerFactory{
    constructor(private requester: CreateTaskRequester){}
    make(presenter: CreateTaskPresenter): CreateTaskController {
       return new CreateTaskController(presenter, this.requester)
    } 
}