import { Filter } from '../Filter'
import { TaskList } from '../TaskList'
import { TextInput } from '../TextInput'
import './style.scss'

export const Todo = () => {
  return (
    <div className="todo-container">
      <TextInput />
      <TaskList />
      <Filter />
    </div>
  )
}