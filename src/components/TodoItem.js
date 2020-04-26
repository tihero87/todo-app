import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({todo, index}) {

    return <li>
        <span>
            {index +1}
            <input type="checkbox" />
            {todo.title}
        </span>
        <button>&#10006;</button>
    </li>
}

TodoItem.propTypes = {
    todo: PropTypes.array.isRequired,
    index: PropTypes.number
};

export default TodoItem;