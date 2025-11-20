import { ListTaskRequesterFactory, ListTaskPresenter, ListTaskRequest, ListTaskRequester } from "./list-tasks.port";
import { TaskRepository } from "./task-repository";




export class ListTaskInteractor implements ListTaskRequester{
    constructor(private repository: TaskRepository, private presenter : ListTaskPresenter)
    {}
    async execute(_: ListTaskRequest) {
        try {
            const res = await this.repository.getAll()
        this.presenter.present({
            success:true,
            data:res})
        } catch (error) {
            this.presenter.present({
                success:false,
                error:"UnknownError"
            })
        }
    }
}

export class ListTaskInteractorFactory implements ListTaskRequesterFactory{
    constructor(private repository : TaskRepository){

    }
    make(presenter: ListTaskPresenter): ListTaskRequester {
        return new ListTaskInteractor(this.repository, presenter)
    }
}