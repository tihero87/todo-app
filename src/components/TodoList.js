import React from 'react';
import TodoItem from './TodoItem'

function Todolist(props) {

    return (
        <ul>
          { props.todos.map(todo => {
                return <TodoItem todo={todo} key={todo.id} />
          })}
        </ul>
    )
}
export default Todolist;