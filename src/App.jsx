
import { useState } from 'react';
import './index.css'
import TodoForm from './TodoForm'
import Todo from './Todo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const toggleChange = (id) => {
    setTodos(prev => {
      return prev.map(todo => {
        if (todo.id === id) {
          return { ...todo, status: !todo.status }
        } else {
          return todo;
        }
      })
    })
  }

  const removeTodo = (id) => {
    setTodos(prev => {
      return prev.filter(todo => {
        return (todo.id !== id)
      })
    })
  }
  var newDate =  new Date().toLocaleString();
  
 
  return (
    <div className='container'>
      <h1 className='heading'>Todo App <span className='time'>Time: {newDate}</span></h1>
      <TodoForm addTodo={addTodo} />
      {todos.map(todo => <Todo {...todo} key={todo.id} toggleChange={toggleChange} removeTodo={removeTodo} />)}
      <ToastContainer />
    </div>
  )
}

export default App
