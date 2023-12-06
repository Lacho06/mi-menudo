import { Department, DepartmentAction, DepartmentActionType } from "../../constants/types/department"

export function departmentReducer(departments: Department[], action: DepartmentAction){
    const { type, payload } = action

    switch(type){
        case DepartmentActionType.ADD:
            return [...departments, { id: payload.id, name: payload.name } ]
        case DepartmentActionType.DELETE:
            return departments.filter(department => department.id !== payload.id)
    }
    return departments
}