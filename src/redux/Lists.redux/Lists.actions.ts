import { listActionTypes, SET_LISTS, ListType } from "./Lists.types";



export const setLists = (listsArray:Array<ListType>):listActionTypes =>{
    return{ type: SET_LISTS, payload: listsArray}
}