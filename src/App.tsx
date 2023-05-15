import './styles/app.scss'
import { Footer } from './components/Footer';
import { Todo } from './components/Todo';
import { ThemeButton } from './components/ThemeButton';

function App() {

  return (
    <>
      <main className='main'>
        <div className='header-bg'></div>
        <div className='container'>
          <div className='header-box'>
            <h1>Todo</h1>
            <ThemeButton />
          </div>
          <Todo />
          <p className='info-box'>Drag and drop to reorder list</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
