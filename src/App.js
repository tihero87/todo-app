import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';
import Context from './components/context';
import AddTodo from './components/AddTodo';

function App() {
    const [todos, setTodos] = useState([
        {id: 1, complete: false, title: "Приготовить ужин"},
        {id: 2, complete: false, title: "Помыть машину"},
        {id: 3, complete: true, title: "Починить пылесос"}
    ]);

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
            { todos.length !==0 ? <TodoList todos={todos} onToggle={toggleTodo} />: <p>Все дела выполнены!</p>}
        </div>
      </Context.Provider>
  );
}

export default App;
