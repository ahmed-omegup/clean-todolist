import { useState } from 'react';
import { CreateTodo, type CreateTask } from './CreateTodo';
import { ListTodos, type ListTasks } from './ListTodos';

export const App = ({
  di,
}: {
  di: {
    createTask: CreateTask;
    listTasks: ListTasks;
  };
}) => {
  const [route, setRoute] = useState<'list' | 'create'>('list');
  return {
    list: (
      <>
        <button onClick={() => setRoute('create')}>Add</button>
        <ListTodos di={di} />
      </>
    ),
    create: <CreateTodo di={di} goHome={() => setRoute('list')} />,
  }[route];
};
