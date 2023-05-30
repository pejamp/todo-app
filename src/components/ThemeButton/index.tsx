import './style.scss'
import sunIcon from '../../assets/images/icon-sun.svg';

export const ThemeButton = () => {
  return (
    <button className='theme-btn'>
      <img src={sunIcon} alt="" />
    </button>
  )
}