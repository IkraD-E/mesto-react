import logo from '../images/header__logo.svg'

export default function Header({loggedIn}) {
    return (
        <header className="header">
          <img className="header__logo" src={logo} alt="Логотип 'Mesto'"/>

          <p className='header__link'>Войти</p>
        </header>
    )
}