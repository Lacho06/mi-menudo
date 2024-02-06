export type Department = {
    id: number,
    name: string,
    areaId: number
}

export enum DepartmentActionType {
    ADD = 'add',
    EDIT = 'edit',
    DELETE = 'delete'
}

export interface DepartmentAction {
    type: DepartmentActionType,
    payload: Department
}
