import './style.scss'

export const TextInput = () => {
  return (
    <div className='input-container'>
      <input type="text" name="task" id="task" placeholder='Create a new todo...' />
    </div>
  )
}