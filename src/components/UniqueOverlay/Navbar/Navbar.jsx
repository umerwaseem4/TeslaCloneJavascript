import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import {GoThreeBars} from "react-icons/go"
import  {SidebarData}  from './sidedata';
import './Navbar.css';
import { IconContext } from 'react-icons';
import "./Navbar.css"

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#000' }}>
        <div className='navbar'>
          <a href='/#' className='menu-bars'>
            <GoThreeBars onClick={showSidebar} />
          </a>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <a href='/#' className='menu-bars-cross'>
                <AiIcons.AiOutlineClose />
              </a>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <a href={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;