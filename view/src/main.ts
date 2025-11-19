import { CreateTaskControllerFactory } from "../../controllers/create-task.controller";
import { CreateTaskInteractor } from "../../use-cases/create-task";
import { InMemoryDB } from "../../in-memory-db/in-memory.db";
import { bootstrap } from "./bootstap";


const db = new InMemoryDB()
const requester = new CreateTaskInteractor(db)
const factory = new CreateTaskControllerFactory(requester)


bootstrap(factory);