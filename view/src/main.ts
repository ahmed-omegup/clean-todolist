import { LocalStorageDB } from '../../in-memory-db/localstorage.db';
import { ListTasksController } from '../../controllers/list-tasks.controller';
import { CreateTaskController } from '../../controllers/create-task.controller';
import { CreateTaskInteractor } from '../../use-cases/create-task';
import { ListTaskInteractor } from '../../use-cases/list-tasks';
import { bootstrap } from './bootstap';

const db = new LocalStorageDB();

bootstrap({
  createTask: (presenter) =>
    new CreateTaskController(new CreateTaskInteractor(db, presenter)),
  listTasks: (presenter) =>
    new ListTasksController(new ListTaskInteractor(db, presenter)),
});
