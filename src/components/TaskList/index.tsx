import "./style.scss";
import closeIcon from "../../assets/images/icon-cross.svg";
import { ChangeEvent } from "react";
import { TodosType } from "../../types";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

interface TaskListProps {
  todos: TodosType[];
  onSetTodos: ([]) => void;
  filteredTodos: TodosType[];
  onClearCompletedTasks: () => void;
  onDragEnd: (result: DropResult) => void;
}

export const TaskList = ({
  todos,
  onSetTodos,
  filteredTodos,
  onClearCompletedTasks,
  onDragEnd,
}: TaskListProps) => {
  const tasksLeft = todos.filter((todo) => !todo.done);

  function handleCheckboxChange(
    event: ChangeEvent<HTMLInputElement>,
    todo: TodosType
  ) {
    const newTodo = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, done: event.target.checked };
      }
      return t;
    });

    onSetTodos(newTodo);
  }

  function handleRemoveTaskFromList(todo: TodosType) {
    const newTaskList = todos.filter((t) => t.id !== todo.id);
    onSetTodos(newTaskList);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="task-container">
        <Droppable droppableId="droppable">
          {(provided) => (
            <ul
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="task-list"
            >
              {filteredTodos.map((todo, index) => (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                  {(provided, snapshot) => (
                    <li
                      className="task-item"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <label>
                        <input
                          type="checkbox"
                          id={`task-${todo.id}`}
                          checked={todo.done}
                          onChange={(event) =>
                            handleCheckboxChange(event, todo)
                          }
                        />
                        {todo.task}
                      </label>
                      <button onClick={() => handleRemoveTaskFromList(todo)}>
                        <img src={closeIcon} alt="close" />
                      </button>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
        <div className="task-control">
          <p>{tasksLeft.length} items left</p>
          <button onClick={onClearCompletedTasks}>Clear Completed</button>
        </div>
      </div>
    </DragDropContext>
  );
};
