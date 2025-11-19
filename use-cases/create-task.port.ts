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
    execute(request: CreateTaskRequest): Promise<CreateTaskResponse>;
}