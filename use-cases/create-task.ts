import { CreateTaskRequester, CreateTaskRequest, CreateTaskResponse } from "./create-task.port";
import { TaskRepository } from "./task-repository";




export class CreateTaskInteractor implements CreateTaskRequester {
    constructor(private taskRepository: TaskRepository) { }
    async execute(request: CreateTaskRequest): Promise<CreateTaskResponse> {
        try {
            await this.taskRepository.save({ ...request, date: new Date(), status: "pending" });
            return { success: true };
        } catch {
            return { success: false, reason: 'UnknownError' };
        }
    }
}
