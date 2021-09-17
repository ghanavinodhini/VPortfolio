import React,{useState} from 'react';
import {MenuItems} from './MenuItems';
import {Link} from 'react-scroll';
import './Navbar.css';

function NavBar() {
  const [clicked,setClicked] = useState(false);

  const handleClick = () => {
      setClicked(!clicked);
  }

  return (
        <nav className="NavbarItems">
          <h1 className="navbar-logo">Develop<span>er</span> <i className="fab fa-react"></i></h1>
          <div className="menu-icon" onClick={()=>handleClick()}>
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
              {MenuItems.map((item,index) => {
                return (
              <li key={index}>
                <Link className={item.cName} to={item.url} smooth={true} duration={500}>{item.title}</Link>
              </li>
                )
              })}
            </ul>
            
        </nav>
  );
}
export default NavBar;