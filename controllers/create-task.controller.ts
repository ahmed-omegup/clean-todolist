import { CreateTaskRequest } from '../use-cases/create-task.port';
import { Requester } from '../use-cases/types';
import { CreateTaskCommand } from './create-task.controller.port';
import { Controller } from './type';

export class CreateTaskController implements Controller<CreateTaskCommand> {
  constructor(private requester: Requester<CreateTaskRequest>) {}

  handle(request: CreateTaskCommand): void {
    this.requester.execute({
      description: request.desc,
      title: request.title,
    });
  }
}
