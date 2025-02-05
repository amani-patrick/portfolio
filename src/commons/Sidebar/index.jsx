
import "./Sidebar.css"
import Logo from '../Logo'
import { menus } from '../../data'
import { FaTimes } from 'react-icons/fa'
import ThemeToggle from '../ThemeToggle'

const Sidebar = ({
    open=false,
    onClose,
}) => {
  return (
    <>
      {
        open ? (<div className="sidebar__overlay" onClick={onClose}></div>):""
      }
      <aside className={`sidebar ${open ? 'active':''}`}>
        <div className="sidebar__top">
            <Logo/>
            <div className="icon__container close__btn" onClick={onClose}>
                <FaTimes/>
            </div>
        </div>
        <div className="sidebar__middle">
            {
                menus.map((menu,index)=>(
                    <a href={`#${menu.name.toLowerCase()}`} className='menu__item' key={index} onClick={onClose}>
                     <h3>{menu.name}</h3>
                    </a>
                  ))
            }
        </div>
        <div className="sidebar__bottom">
          <ThemeToggle/>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
