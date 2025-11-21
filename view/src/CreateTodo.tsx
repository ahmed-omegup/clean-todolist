import { createRef, useState } from 'react';
import type { CreateTaskCommand } from '../../controllers/create-task.controller.port';
import type { Controller } from '../../controllers/type';
import type {
  CreateTaskError,
  CreateTaskResult,
} from '../../use-cases/create-task.port';
import type { Presenter } from '../../use-cases/types';

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

  const [response, setResponse] = useState<CreateTaskError | null>(null);
  const controller = di.createTask({
    present(response) {
      if (response.success) {
        goHome();
      } else {
        setResponse(response.error);
      }
    },
  });
  const state = response ? `Failed to create task: ${response}` : '';

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
