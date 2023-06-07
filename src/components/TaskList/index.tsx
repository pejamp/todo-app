import './style.scss'
import closeIcon from '../../assets/images/icon-cross.svg';
import { ChangeEvent } from 'react';
import { TodosType } from '../../types';
interface TaskListProps {
  todos: TodosType[];
  onSetTodos: ([]) => void;
  filteredTodos: TodosType[];
  onClearCompletedTasks: () => void;
}

export const TaskList = ({ todos, onSetTodos, filteredTodos, onClearCompletedTasks }: TaskListProps) => {
  const tasksLeft = todos.filter(todo => !todo.done);

  function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>, todo: TodosType) {
    const newTodo = todos.map(t => {
      if (t.id === todo.id) {
        return { ...t, done: event.target.checked }
      }
      return t;
    });
    
    onSetTodos(newTodo);
  }

  function handleRemoveTaskFromList(todo: TodosType) {
    const newTaskList = todos.filter(t => t.id !== todo.id);
    onSetTodos(newTaskList);
  }

  return (
    <div className="task-container">
      <ul className="task-list">
        {filteredTodos.map((todo) => (
          <li key={todo.id} className="task-item">
            <label>
              <input
                type="checkbox"
                id={`task-${todo.id}`}
                checked={todo.done}
                onChange={(event) => handleCheckboxChange(event, todo)}
              />
              {todo.task}
            </label>
            <button onClick={() => handleRemoveTaskFromList(todo)}>
              <img src={closeIcon} alt="close" />
            </button>
          </li>
        ))}
      </ul>
      <div className="task-control">
        <p>{tasksLeft.length} items left</p>
        <button onClick={onClearCompletedTasks}>Clear Completed</button>
      </div>
    </div>
  );
}