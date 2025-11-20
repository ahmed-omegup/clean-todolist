export interface CreateTaskRequest {
    title: string;
    description: string;
}

export type CreateTaskResponse = {
    success: true;
} | {
    success: false;
    reason: 'UnknownError';
};

export interface CreateTaskRequester {
    execute(request: CreateTaskRequest):void;
}

export interface CreateTaskPresenter{
    present(response: CreateTaskResponse): void;
}

export interface ICreateTaskRequesterFactory {
    make(presenter :CreateTaskPresenter): CreateTaskRequester
}