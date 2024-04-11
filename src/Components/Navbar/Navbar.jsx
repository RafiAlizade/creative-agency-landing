import './Navbar.css'
import navLogo from './../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { List } from 'react-bootstrap-icons';

function Navbar() {

  function toggleMenu() {
    const menuTarget = document.querySelector('.header__right_mobile');
    if (menuTarget.style.display == 'none') {
      menuTarget.style.display = 'block';
    } else {
      menuTarget.style.display = 'none'
    }
  }

  return (
        <header className='app_header'>
               <div className="header__inner">
               <div className="header__left">
                <div className="header__logo_container">
                        <img src={navLogo} alt="" />
                    </div>
                </div>

                <div className="header__right">
                        <ul className="header_list">
                            <li> <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink></li>
                           <li> <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink></li>
                            <li><NavLink to='/service' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Service</NavLink></li>
                            <li><NavLink to='/service' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Projects</NavLink></li>
                            <li className='active-every'><a href="mailto:refielizade3@gmail.com">Schedule a Call</a></li>
                        </ul>

                        <div className="header__menu_icon" onClick={toggleMenu}>
                        <List />
                        </div>
                </div>

                <div className="header__right_mobile">
                <ul className="header_list_mobile">
                           <li> <NavLink to='/about'>About</NavLink></li>
                            <li><NavLink to='/service'>Service</NavLink></li>
                            <li><NavLink to='/service'>Projects</NavLink></li>
                            <li className='active-every-mobile'><a href="mailto:refielizade3@gmail.com">Schedule a Call</a></li>
                        </ul>
                </div>
               </div>
        </header>
  );
}

export default Navbar;