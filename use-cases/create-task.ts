import { CreateTaskRequest } from './create-task.port';
import { TaskRepository } from './task-repository';
import { Presenter, Requester } from './types';

export class CreateTaskInteractor implements Requester<CreateTaskRequest> {
  constructor(
    private taskRepository: TaskRepository,
    private presenter: Presenter<void, 'UnknownError'>
  ) {}
  async execute(request: CreateTaskRequest): Promise<void> {
    try {
      await this.taskRepository.save({
        ...request,
        date: new Date(),
        status: 'pending',
      });
      this.presenter.present({ success: true, data: undefined });
    } catch {
      this.presenter.present({ success: false, error: 'UnknownError' });
    }
  }
}
