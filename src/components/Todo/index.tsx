import './style.scss'
import { v4 as uuidv4 } from 'uuid';
import { FormEvent, useState, useEffect } from 'react'
import { Filter } from '../Filter'
import { TaskList } from '../TaskList'
import { TextInput } from '../TextInput'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { TodosType } from '../../types';
import { DropResult } from '@hello-pangea/dnd';

const initialContent = [
  { id: uuidv4(), task: 'Objeto 1', done: false },
  { id: uuidv4(), task: 'Objeto 2', done: true },
  { id: uuidv4(), task: 'Objeto 3', done: false },
  { id: uuidv4(), task: 'Objeto 4', done: true },
  { id: uuidv4(), task: 'Objeto 5', done: false },
];

const reorder = (list: [], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed);

  return result;
}

export const Todo = () => {
  const [todos, setTodos] = useLocalStorage("todo");
  const [task, setTask] = useState('');
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
   
    setTodos([...filteredTasks, newTask]);
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

  function handleDragEnd({ destination, source }: DropResult) {
    if (!destination) return;

    setFilteredTasks(reorder(filteredTasks, source.index, destination.index))
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
          onDragEnd={handleDragEnd}
        />
        <Filter onFilterTasks={handleFilterTasks} />
      </div>
    </form>
  );
}