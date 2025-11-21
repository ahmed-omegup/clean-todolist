import { TaskEntity } from '../entities/Task';

export interface ListTaskRequest {}

export interface ListTaskRequester {
  execute(request: ListTaskRequest): void;
}

export type ListTaskResult = TaskEntity[];

export type ListTaskError = 'UnknownError';
