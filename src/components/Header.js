import { useLocation, NavLink } from 'react-router-dom'
import logo from '../images/header__logo.svg'

export default function Header({loggedIn, email, handleSignOut}) {
  const path = useLocation().pathname;

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип 'Mesto'"/>

      {loggedIn ? (
        <div className='header__menu'>
          <p className='header__email'>{email}</p>
          <p className='header__button' onClick={handleSignOut}>Выйти</p>
        </div>
      ) : (
        path === "/signin" ? 
          (
          <NavLink to="/signup" className='header__link'>
            Регистрация
          </NavLink>
        ) : (
          <NavLink to="/signin" className='header__link'>
            Войти
          </NavLink>
        )
      )}
    </header>
  )
}