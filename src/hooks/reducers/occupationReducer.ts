import { Occupation, OccupationAction, OccupationActionType } from "../../constants/types/occupation"

export function occupationReducer (occupations: Occupation[], action: OccupationAction) {
    const { type, payload } = action
    
    switch(type){
        case OccupationActionType.ADD:
            return [...occupations, { id: payload.id || occupations.length+1, name: payload.name }]
        case OccupationActionType.EDIT:
            if(!payload.id) return occupations
            return [...occupations, { id: payload.id, name: payload.name }]
        case OccupationActionType.DELETE:
            if(!payload.id) return occupations
            return occupations.filter(occupation => occupation.id !== payload.id)
    }

    return occupations
}