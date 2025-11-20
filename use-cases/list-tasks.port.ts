import { TaskEntity } from "../entities/Task";

export interface ListTaskRequest{} 

export interface ListTaskPresenter{
    present(response: ListTaskResponse):void
}

export interface ListTaskRequester {
    execute(request: ListTaskRequest):void;
}

export type  ListTaskResponse = {
    success:true,
    data: TaskEntity[]
}|{
    success:false,
    error : 'UnknownError'
}

export interface ListTaskRequesterFactory {
    make(presenter:ListTaskPresenter):ListTaskRequester
}
