import './style.scss'
import sunIcon from '../../assets/images/icon-sun.svg';
import moonIcon from '../../assets/images/icon-moon.svg';
import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

export const ThemeButton = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const themeIcon = isDarkMode ? sunIcon : moonIcon;

  return (
    <button className='theme-btn' onClick={toggleDarkMode}>
      <img src={themeIcon} alt="" />
    </button>
  )
}