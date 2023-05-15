import './style.scss'
import sunIcon from '../../assets/images/icon-sun.svg';
import moonIcon from '../../assets/images/icon-moon.svg';

export const ThemeButton = () => {
  return (
    <button className='theme-btn'>
      <img src={sunIcon} alt="" />
    </button>
  )
}