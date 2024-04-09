import React, { useState } from 'react';
import './App.css';

function App() {
    const [todoInput, setTodoInput] = useState('');
    const [todoList, setTodoList] = useState([]);

    const addNewTodo = () => {
        if (todoInput.trim() !== '') {
            const newTodo = {
                id: Date.now(),
                task: todoInput.trim()
            };
            setTodoList([...todoList, newTodo]);
            setTodoInput('');
        } else {
            alert('Please enter a valid task');
        }
    };

    const deleteTodo = (id) => {
        const updatedTodos = todoList.filter(todo => todo.id !== id);
        setTodoList(updatedTodos);
    };

    return (
        <div className="container mt-5">
            <h2 className='text-center'>Todo App using React</h2>
            <div className="input-group mb-3">
                <input type='text' className='form-control' value={todoInput}
                    onChange={(e) => setTodoInput(e.target.value)} />
                <button className="btn btn-primary" onClick={addNewTodo}>Add</button>
            </div>
            <ul className="list-group">
                {todoList.map(todo => (
                    <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {todo.task}
                        <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
