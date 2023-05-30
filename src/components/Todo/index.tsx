import { FormEvent, useState } from 'react'
import { Filter } from '../Filter'
import { TaskList } from '../TaskList'
import { TextInput } from '../TextInput'
import './style.scss'
import { useLocalStorage } from '../../hooks/useLocalStorage'

const initialContent = [
  { task: 'Objeto 1', done: false },
  { task: 'Objeto 2', done: true },
  { task: 'Objeto 3', done: false },
  { task: 'Objeto 4', done: true },
  { task: 'Objeto 5', done: false },
];

export const Todo = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useLocalStorage("todo", initialContent);

  function handleChangeTaskInput(text: string) {
    setTask(text);
  }
  
  function handleSubmitTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    if (task.trim() === "") {
      return
    }

    const newTask = {
      task: task,
      done: false 
    }
   
    setTodos([...todos, newTask]);
    setTask('');
  }

  return (
    <form onSubmit={handleSubmitTask}>
      <div className="todo-container">
        <TextInput task={task} onTask={handleChangeTaskInput} />
        <TaskList todos={todos} onSetTodos={setTodos} />
        <Filter />
      </div>
    </form>
  )
}