import { useEffect, useState } from 'react'
import "./Navbar.css"
import Logo from "../../commons/Logo"
import {menus} from "../../data"
import SocialHandles from "../../commons/SocialHandles"
import { TiThMenu } from 'react-icons/ti'
import Sidebar from '../../commons/Sidebar'
import { useMenuActivation } from '../../hook'
import ThemeToggle from '../../commons/ThemeToggle'

const Navbar = () => {
  const [openSidebar,setOpenSidebar] = useState(false)
  const [visible,setVisible] = useState(false)

  const handleScroll = () =>{
    const currentScrollPosition = window.scrollY;
    if (currentScrollPosition > 70){
      return setVisible(true);
    }
    else {
      setVisible(false);
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    return () => window.removeEventListener('scroll',handleScroll)
  })
  useMenuActivation(
    ".menu__container",
    ".menu__container .menu__item",
  )
  return (
    <nav className={`navigation__bar ${visible ? 'visible':''}`}>
      <Sidebar
       open={openSidebar}
       onClose={()=>setOpenSidebar(!openSidebar)}
      />
      <div className="column">
        <Logo/>
      </div>
      <div className="column menu__container">
        {
          menus.map((menu,index)=>(
            <a href={`#${menu.name.toLowerCase()}`} className='menu__item' key={index}>
              {menu.name}
            </a>
          ))
        }
      </div>
      <div className="column">
        <SocialHandles/>
        <ThemeToggle/>
        <a href="#contact" className='btn btn__primary'>Let Talk</a>
        <div className="menu__icon"  onClick={()=>setOpenSidebar(!openSidebar)}>
          <TiThMenu/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
