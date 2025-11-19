import { TaskEntity } from "../entities/Task";
import { TaskRepository } from "../use-cases/task-repository";

export class InMemoryDB implements TaskRepository {
    private tasks: TaskEntity[] = [];
    async save(task: TaskEntity): Promise<void> {
        this.tasks.push(task);
    }
}