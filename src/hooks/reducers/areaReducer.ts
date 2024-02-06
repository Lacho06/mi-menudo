import { Area, AreaAction, AreaActionType } from "../../constants/types/area"

export function areaReducer(areas: Area[], action: AreaAction){
    const { type, payload } = action

    switch(type){
        case AreaActionType.ADD:
            return [...areas, { id: payload.id, name: payload.name } ]
        case AreaActionType.DELETE:
            return areas.filter(area => area.id !== payload.id)
    }
    return areas
}