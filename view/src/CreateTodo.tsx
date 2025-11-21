import { createRef } from 'react';
import type { CreateTaskCommand } from '../../controllers/create-task.controller.port';
import type { Controller } from '../../controllers/type';
import type {
  CreateTaskError,
  CreateTaskResult,
} from '../../use-cases/create-task.port';
import type { Presenter } from '../../use-cases/types';
import { useController } from './utils';

export type CreateTask = (
  q: Presenter<CreateTaskResult, CreateTaskError>
) => Controller<CreateTaskCommand>;

export const CreateTodo = ({
  di,
  goHome,
}: {
  goHome: () => void;
  di: {
    createTask: CreateTask;
  };
}) => {
  const ref = createRef<HTMLInputElement>();
  const ref1 = createRef<HTMLTextAreaElement>();

  const { controller, error } = useController(di.createTask, (err) => {
    if (!err) {
      goHome();
    }
  });
  const state = error ? `Failed to create task: ${error}` : '';

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        controller.handle({
          title: ref.current!.value,
          desc: ref1.current!.value,
        });
      }}
    >
      <input ref={ref} />
      <textarea ref={ref1} />
      {state}
      <button type="submit">Add</button>
    </form>
  );
};
