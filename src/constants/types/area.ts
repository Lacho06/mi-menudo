export type Area = {
    id: number,
    name: string
}

export enum AreaActionType {
    ADD = 'add',
    EDIT = 'edit',
    DELETE = 'delete'
}

export interface AreaAction {
    type: AreaActionType,
    payload: Area
}
