import './style.scss'
import closeIcon from '../../assets/images/icon-cross.svg';

export const TaskList = () => {
  return (
    <div className='task-container'>
      <ul className='task-list'>
        <li className='task-item'>
          <label>
            <input type="checkbox" name="" id="task" />
            Task pattern
          </label>
          <button><img src={closeIcon} alt="close" /></button>
        </li>
      </ul>
      <div className='task-control'>
        <p>5 items left</p>
        <button>Clear Completed</button>
      </div>
    </div>
  )
}