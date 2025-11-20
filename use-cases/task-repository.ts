import { TaskEntity } from "../entities/Task";

export interface TaskRepository {
    save: (task: TaskEntity) => Promise<void>;
    getAll:()=>Promise<TaskEntity[]>
    
}