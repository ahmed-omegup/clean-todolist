import { CreateTaskRequesterFactory } from "../use-cases/create-task";
import { CreateTaskPresenter, CreateTaskRequest, CreateTaskRequester } from "../use-cases/create-task.port";
import { ICreateTaskController, ICreateTaskControllerFactory } from "./create-task.controller.port";


export class CreateTaskController implements ICreateTaskController {
    constructor( private requester: CreateTaskRequester) { }

     handleRequest(request: CreateTaskRequest): void {
        this.requester.execute(request)
       
    }
}


export class CreateTaskControllerFactory implements ICreateTaskControllerFactory{
    constructor(private requesterFactory: CreateTaskRequesterFactory){}
    make(presenter: CreateTaskPresenter): CreateTaskController {
       return new CreateTaskController(this.requesterFactory.make(presenter))
    } 
}