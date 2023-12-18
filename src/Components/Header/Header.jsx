import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/myteam (2).svg'
function Header() {
  return (
    <div className='bg__qism'>
      <header className='container'>
        <nav>
        <a href="#">
        <img className='myteam__logo' src={logo} alt="" />
      </a>
      <ul className="nav__list">
        <li className="nav__item">
          <Link to='/'> Home</Link>
        </li>
        <li className="nav__item">
        <Link to='/about'>About</Link>
        </li>
        <li className="nav__item">
        <Link to='/contact'>Contact</Link>
        </li>
      </ul>
        </nav>
      </header>

      
    </div>
  )
}

export default Header
