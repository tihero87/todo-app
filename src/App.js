import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import './App.css';
import Context from './components/context';
import AddTodo from './components/AddTodo';
import Loader from './components/loader';

function App() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=7')
            .then(response => response.json())
            .then(todos => {
              setTimeout(() => {
                  setTodos(todos);
                  setLoading(false);
              }, 2000);
            })
    },[]);

    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if(todo.id === id){
                    todo.complete = !todo.complete;
                }
            return todo
    }))}
    function delTodo(id) {
        setTodos(
            todos.filter(todo => todo.id !== id)
        )
    }
    function addTodo(title) {
        setTodos(todos.concat([{
            title,
            id: Date.now(),
            complete: false
        }]))
    }

  return (
      <Context.Provider value = {{delTodo}}>
        <div className="App">
            <h1>Список задач на сегодня</h1>
            <AddTodo onCreate = {addTodo} />
            { loading && <Loader /> }
            { todos.length !==0 ? <TodoList todos={todos} onToggle={toggleTodo} />: loading ? null: <p>Все дела выполнены!</p>}
        </div>
      </Context.Provider>
  );
}

export default App;
