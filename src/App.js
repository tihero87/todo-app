import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
    const todos = [
        {id: 1, complete: false, title: "Купить молоко"},
        {id: 2, complete: false, title: "Купить хлеб"},
        {id: 3, complete: false, title: "Починить машину"}
    ];

  return (
    <div className="App">
        <p>Список задач на сегодня</p>
        <input type="text"></input>
        <TodoList todos={todos} />
    </div>
  );
}

export default App;
