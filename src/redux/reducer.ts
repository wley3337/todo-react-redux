import { combineReducers } from 'redux';

const itWorks: any = (state: AppState) =>{
 return true
}



const reducers = combineReducers({
    itWorks
})

export default reducers;

export type AppState = ReturnType<typeof reducers>;