import { ListTaskRequest } from '../use-cases/list-tasks.port';
import { Requester } from '../use-cases/types';
import { ListTaskQuery } from './list-tasks.controller.port';
import { Controller } from './type';

export class ListTasksController implements Controller<ListTaskQuery> {
  constructor(private requester: Requester<ListTaskRequest>) {}
  handle(_: ListTaskQuery): void {
    this.requester.execute({});
  }
}
