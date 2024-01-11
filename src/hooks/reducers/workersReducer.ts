import { Worker, WorkerAction, WorkerActionType } from "../../constants/types/worker"

export function workersReducer(workers: Worker[], action: WorkerAction){
    const { type, payload } = action
    switch(type){
        case WorkerActionType.ADD:
            return [...workers, { id: payload.id || workers.length+1, ci: payload.ci, name: payload.name, account: payload.account, salary: payload.salary, workedHours: payload.workedHours }]
        case WorkerActionType.EDIT:
            if(!payload.id) return workers
            return [...workers, { id: payload.id, ci: payload.ci, name: payload.name, account: payload.account, salary: payload.salary, workedHours: payload.workedHours }]
        case WorkerActionType.DELETE:
            if(!payload.id) return workers
            return workers.filter(worker => worker.id !== payload.id)
        default:
            return workers
    }
}