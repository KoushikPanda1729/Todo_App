
import { useEffect, useState } from 'react';
import './index.css'
import TodoForm from './TodoForm'
import Todo from './Todo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const getLocalTodo = () => {
  let todo = localStorage.getItem('todo')

  if (todo) {
    return JSON.parse(localStorage.getItem('todo'))
  }else{
    return [];
  }
}

function App() {
  const [todos, setTodos] = useState(getLocalTodo());
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
  let newDate = new Date().toLocaleString();


  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos))
  }, [todos])

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
