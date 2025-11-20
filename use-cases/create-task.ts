import { CreateTaskPresenter, CreateTaskRequest, CreateTaskRequester, ICreateTaskRequesterFactory } from "./create-task.port";
import { TaskRepository } from "./task-repository";





export class CreateTaskInteractor implements CreateTaskRequester {
    constructor(private taskRepository: TaskRepository, private presenter: CreateTaskPresenter) { }
    async execute(request: CreateTaskRequest): Promise<void> {
        try {
            await this.taskRepository.save({ ...request, date: new Date(), status: "pending" });
            this.presenter.present({ success: true });
        } catch {
            this.presenter.present({ success: false, reason: 'UnknownError' });
        }
    }
}


export class CreateTaskRequesterFactory implements ICreateTaskRequesterFactory {
    constructor(private taskRepository: TaskRepository) { }
    make(presenter: CreateTaskPresenter): CreateTaskRequester {
        return new CreateTaskInteractor(this.taskRepository, presenter);
    }
}