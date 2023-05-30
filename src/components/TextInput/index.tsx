import "./style.scss";

interface TextInputProps {
  task: string;
  onTask: (v: string) => void;
}

export const TextInput = ({ task, onTask }:TextInputProps) => {
  return (
    <div className="input-container">
      <input
        type="text"
        name="task"
        id="task"
        placeholder="Create a new todo..."
        value={task}
        onChange={event => onTask(event.target.value)}
      />
    </div>
  );
};
