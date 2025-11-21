import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import type { CreateTask } from './CreateTodo';
import type { ListTasks } from './ListTodos';

export const bootstrap = (di: {
  createTask: CreateTask;
  listTasks: ListTasks;
}) => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App di={di} />
    </StrictMode>
  );
};
