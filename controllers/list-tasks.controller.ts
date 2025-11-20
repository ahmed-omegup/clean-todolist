import { ListTaskInteractor } from "../use-cases/list-tasks";
import { ListTaskPresenter, ListTaskRequester, ListTaskRequesterFactory } from "../use-cases/list-tasks.port";
import { IListTaskController, IListTaskControllerFactory } from "./list-tasks.controller.port";



export class ListTasksController implements IListTaskController{
    constructor(private requester: ListTaskRequester){

    }
    handleRequest(request: ListTaskInteractor): void {
        this.requester.execute(request)
    }
}

export class ListTaskControllerFactory implements IListTaskControllerFactory{
 
    constructor(private requesterFactory : ListTaskRequesterFactory ){}
    make(presenter: ListTaskPresenter): IListTaskController {
        return new ListTasksController(this.requesterFactory.make(presenter))
    }
}