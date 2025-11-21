export interface CreateTaskRequest {
    title: string;
    description: string;
}

export type CreateTaskResult = void

export type CreateTaskError = 'UnknownError'

