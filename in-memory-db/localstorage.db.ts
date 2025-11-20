import { TaskEntity } from "../entities/Task";
import { TaskRepository } from "../use-cases/task-repository";

export class LocalStorageDB implements TaskRepository {
    private tasks: TaskEntity[] = JSON.parse(localStorage.getItem('tasks') || '[]') ;
    async save(task: TaskEntity): Promise<void> {
        this.tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    async getAll() {
        return this.tasks
    }
}