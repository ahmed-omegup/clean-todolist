import { useEffect } from 'react';
import type { ListTaskQuery } from '../../controllers/list-tasks.controller.port';
import type { Controller } from '../../controllers/type';
import type {
  ListTaskError,
  ListTaskResult,
} from '../../use-cases/list-tasks.port';
import type { Presenter } from '../../use-cases/types';
import { useController } from './utils';

export type ListTasks = (
  q: Presenter<ListTaskResult, ListTaskError>
) => Controller<ListTaskQuery>;

export const ListTodos = ({
  di,
}: {
  di: {
    listTasks: ListTasks;
  };
}) => {
  const { controller, result: todos } = useController(di.listTasks);

  useEffect(() => {
    controller.handle({});
  }, [controller]);
  return (
    <>
      <div>List Todos</div>
      {todos
        ? todos.map((todo, index) => <div key={index}>{todo.title}</div>)
        : 'Loading...'}
    </>
  );
};
