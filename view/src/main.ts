import { CreateTaskControllerFactory } from "../../controllers/create-task.controller";
import { ListTaskControllerFactory} from "../../controllers/list-tasks.controller";
import { LocalStorageDB } from "../../in-memory-db/localstorage.db";
import { CreateTaskRequesterFactory } from "../../use-cases/create-task";
import { ListTaskInteractorFactory} from "../../use-cases/list-tasks";
import { bootstrap } from "./bootstap";


const db = new LocalStorageDB()
const createTaskRequestFactory = new CreateTaskRequesterFactory(db)
const createTaskControllerFactory = new CreateTaskControllerFactory(createTaskRequestFactory)
const listTaskRequestFactory = new ListTaskInteractorFactory(db)
const listTaskControllerFactory = new ListTaskControllerFactory(listTaskRequestFactory)


bootstrap({ createTask: createTaskControllerFactory, listTasks:listTaskControllerFactory });