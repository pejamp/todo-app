import './style.scss'
import { v4 as uuidv4 } from 'uuid';
import { FormEvent, useState, useEffect } from 'react'
import { Filter } from '../Filter'
import { TaskList } from '../TaskList'
import { TextInput } from '../TextInput'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { TodosType } from '../../types';

const initialContent = [
  { id: uuidv4(), task: 'Objeto 1', done: false },
  { id: uuidv4(), task: 'Objeto 2', done: true },
  { id: uuidv4(), task: 'Objeto 3', done: false },
  { id: uuidv4(), task: 'Objeto 4', done: true },
  { id: uuidv4(), task: 'Objeto 5', done: false },
];

export const Todo = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useLocalStorage("todo", initialContent);
  const [filteredTasks, setFilteredTasks] = useState(todos);

  function handleChangeTaskInput(text: string) {
    setTask(text);
  }
  
  function handleAddNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    if (task.trim() === "") {
      return
    }

    const newTask = {
      id: uuidv4(),
      task: task,
      done: false 
    }
   
    setTodos([...todos, newTask]);
    setTask('');
  }

  function handleFilterTasks(filter: string) {
    let tasksToDisplay = [];

    if (filter === 'all') {
      tasksToDisplay = todos;
    } else if (filter === 'active') {
      tasksToDisplay = todos.filter((todo: TodosType) => !todo.done);
    } else if (filter === 'completed') {
      tasksToDisplay = todos.filter((todo: TodosType) => todo.done);
    }

    setFilteredTasks(tasksToDisplay);
  }

  function handleClearCompletedTasks() {
    const uncompletedTasks = todos.filter((todo: TodosType) => !todo.done);
    setTodos(uncompletedTasks);
  }

  useEffect(() => {
    setFilteredTasks(todos)
  }, [todos])

  return (
    <form onSubmit={handleAddNewTask}>
      <div className="todo-container">
        <TextInput task={task} onTask={handleChangeTaskInput} />
        <TaskList
          todos={todos}
          filteredTodos={filteredTasks}
          onSetTodos={setTodos}
          onClearCompletedTasks={handleClearCompletedTasks}
        />
        <Filter onFilterTasks={handleFilterTasks} />
      </div>
    </form>
  );
}