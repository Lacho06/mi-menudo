export type Worker = {
    id: number,
    name: string,
    salary: number
}

export enum WorkerActionType {
    ADD = 'add',
    EDIT = 'edit',
    DELETE = 'delete'
}

export interface WorkerAction {
    type: WorkerActionType,
    payload: {
        id?: number,
        name: string,
        salary: number
    }
}
