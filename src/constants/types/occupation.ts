export type Occupation = {
    id: number,
    name: string
}

export enum OccupationActionType {
    ADD = 'add',
    EDIT = 'edit',
    DELETE = 'delete'
}

export interface OccupationAction {
    type: OccupationActionType,
    payload: {
        id?: number,
        name: string
    }
}