import './styles/app.scss'
import { useContext } from 'react';
import { Footer } from './components/Footer';
import { Todo } from './components/Todo';
import { ThemeButton } from './components/ThemeButton';
import { ThemeContext } from './context/themeContext';

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <main className={`main ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
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
