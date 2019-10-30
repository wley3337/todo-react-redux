import React from 'react';
import ToDoDetail from './ToDoDetail';
import { ListType } from '../redux/Lists.redux/Lists.types';

interface ListDetailProps{
  list: ListType
}

const ListDetail: React.FC<ListDetailProps> = ({list:{heading, toDos}}) =>{
    return(
        <div>
           <h1>{heading}</h1>
           {toDos.map( (td, i) => <ToDoDetail key={`${heading}-${i}`} toDo={td}/> )}
        </div>
    )
}

export default ListDetail