import { Worker, WorkerAction, WorkerActionType } from "../../constants/types/worker"

export function workersReducer(workers: Worker[], action: WorkerAction){
    const { type, payload } = action
    switch(type){
        case WorkerActionType.ADD:
            return [...workers, { id: payload.id || workers.length+1, name: payload.name, salary: payload.salary }]
        case WorkerActionType.EDIT:
            if(!payload.id) return workers
            return [...workers, { id: payload.id, name: payload.name, salary: payload.salary }]
        case WorkerActionType.DELETE:
            if(!payload.id) return workers
            return workers.filter(worker => worker.id !== payload.id)
    }
    return workers
}