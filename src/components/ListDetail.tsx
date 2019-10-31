import React from 'react';
import ToDoDetail from './ToDoDetail';
import { ListType } from '../redux/Lists.redux/Lists.types';
import CreateToDoForm from './CreateToDoForm';
interface ListDetailProps{
  list: ListType
}

const ListDetail: React.FC<ListDetailProps> = ({list:{heading, toDos, id}}) =>{
    return(
        <div>
           <h1>{heading}</h1>
           {toDos.map( td => <ToDoDetail key={`${heading}-${id}`} toDo={td}/> )}
           <CreateToDoForm listId={id}/>
        </div>
    )
}

export default ListDetail