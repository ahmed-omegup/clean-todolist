import {
  ListTaskError,
  ListTaskRequest,
  ListTaskResult,
} from './list-tasks.port';
import { TaskRepository } from './task-repository';
import { Presenter, Requester } from './types';

export class ListTaskInteractor implements Requester<ListTaskRequest> {
  constructor(
    private repository: TaskRepository,
    private presenter: Presenter<ListTaskResult, ListTaskError>
  ) {}
  async execute(_: ListTaskRequest) {
    try {
      const res = await this.repository.getAll();
      this.presenter.present({
        success: true,
        data: res,
      });
    } catch (error) {
      this.presenter.present({
        success: false,
        error: 'UnknownError',
      });
    }
  }
}
