import React from 'react'
import { ToDo } from '../redux/ToDos.redux/ToDos.types'

interface ToDoDetailProps{
    toDo: ToDo
}


const ToDoDetail: React.FC<ToDoDetailProps> = (toDo) =>{
    return(
        <div>
            tododetail 
        </div>
    )
}

export default ToDoDetail