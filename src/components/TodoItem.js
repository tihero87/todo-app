import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Context from './context';

function TodoItem({todo, index, onChange}) {
    const {delTodo} = useContext(Context);
    const classes = [];
    if (todo.complete){
        classes.push("done");
    }
    const myStyle = {
        border: "1px solid #ccc",
        borderRadius: 5
    };
    return <li style={myStyle}>
        <span className={classes.join(' ')}>
            <input
                type="checkbox"
                onChange={() => onChange(todo.id)}
                checked={todo.complete}
            />
            {index +1} &nbsp; {todo.title}
        </span>
        <button onClick={() => delTodo(todo.id)}>&#10006;</button>
    </li>
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
};

export default TodoItem;