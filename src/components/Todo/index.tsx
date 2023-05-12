import { Filter } from '../Filter'
import { TextInput } from '../TextInput'
import './style.scss'

export const Todo = () => {
  return (
    <div className="todo-container">
      <TextInput />
      <div>
        lista de checkbox
        <div>
          {'<!--'} Add dynamic number {'-->'} items left
          <button>Clear Completed</button>
        </div>
      </div>
      <Filter />
    </div>
  )
}