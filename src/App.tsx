import './styles/app.scss'
import mobileDarkBg from './assets/images/bg-mobile-dark.jpg';
import { Footer } from './components/Footer';
import { Todo } from './components/Todo';

function App() {

  return (
    <>
      <main className='main'>
        <div style={{ backgroundImage: `url(${mobileDarkBg})` }} className='header-bg'></div>
        <div className='container'>
          <div className='header-box'>
            <h1>Todo</h1>
            <button>change theme</button>
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
