import { ToDo } from "../ToDos.redux/ToDos.types";

export const SET_LISTS: string = "SET_LISTS"




export interface ListType{
    heading: string 
    toDos: Array<ToDo>
}

export interface setListAction{
    type: typeof SET_LISTS
    payload: Array<ListType>
}

export type listActionTypes = setListAction
