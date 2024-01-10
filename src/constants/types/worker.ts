export type Worker = {
    id?: number,
    name: string,
    ci?: number,
    account?: number,
    workedHours?: number,
    salary?: number
}

export enum WorkerActionType {
    ADD = 'add',
    EDIT = 'edit',
    DELETE = 'delete'
}

export interface WorkerAction {
    type: WorkerActionType,
    payload: Worker
}
