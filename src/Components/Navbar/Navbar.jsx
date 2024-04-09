import './Navbar.css'
import navLogo from './../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

function Navbar() {

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
                           <li> <NavLink to='/about'>About</NavLink></li>
                            <li><NavLink to='/service'>Service</NavLink></li>
                            <li><NavLink to='/service'>Projects</NavLink></li>
                            <li><a href="mailto:refielizade3@gmail.com" className='active-every'>Schedule a Call</a></li>
                        </ul>
                </div>
               </div>
        </header>
  );
}

export default Navbar;