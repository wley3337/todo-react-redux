export interface ToDo{
    listId: number 
    title: string
    id?: number
    description?: string 
    due?: string
}
export const DELETE_TO_DO: string = "DELETE_TO_DO"

export interface deleteToDoAction{
    type: typeof DELETE_TO_DO,
    payload: ToDo
}

import { ToDo, deleteToDoAction } from "../ToDos.redux/ToDos.types"

export const CREATE_TO_DO:string = "CREATE_TO_DO"

export interface CreateToDoAction{
    type: typeof CREATE_TO_DO,
    payload: ToDo
}

export type CreateToDoActionTypes = CreateToDoAction | deleteToDoAction
