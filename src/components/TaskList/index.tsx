import './style.scss'
import closeIcon from '../../assets/images/icon-cross.svg';
import { ChangeEvent } from 'react';

type TodosType = {
  task: string;
  done: boolean;
}

interface TaskListProps {
  todos: TodosType[];
  onSetTodos: ([]) => void;
}

export const TaskList = ({ todos, onSetTodos }: TaskListProps) => {

  function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>, todo: TodosType) {
    const newTodo = todos.map(t => {
      if (t.task === todo.task) {
        return { ...t, done: event.target.checked }
      }
      return t;
    });
    
    onSetTodos(newTodo);
  }

  return (
    <div className="task-container">
      <ul className="task-list">
        {todos.map((todo) => (
          <li key={todo.task} className="task-item">
            <label>
              <input
                type="checkbox"
                id={`task-${todo.task}`}
                checked={todo.done}
                onChange={(event) => handleCheckboxChange(event, todo)}
              />
              {todo.task}
            </label>
            <button>
              <img src={closeIcon} alt="close" />
            </button>
          </li>
        ))}
      </ul>
      <div className="task-control">
        <p>5 items left</p>
        <button>Clear Completed</button>
      </div>
    </div>
  );
}