import { listActionTypes, SET_LISTS, ListType } from "./Lists.types";

const initialState:Array<ListType> = []

export const lists = (state= initialState, action:listActionTypes):Array<ListType> =>{
    switch(action.type){
        case SET_LISTS:
            return action.payload
        default:
            return state
    }
}