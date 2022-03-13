import React from 'react'
//Import react-icons
import * as FaIcon from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as MdIcons from 'react-icons/md'
import { IconContext } from 'react-icons'
//Import SidebarData
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu'
//Import styles
import './navbar.scss'

const Navbar = ({ logout, history, isAuthenticated }) => {
  const [sidebar, setSidebar] = React.useState(false)
  const [settings, setSettings] = React.useState(false)

  //Show and hide sidebar
  const showSidebar = () => {
    setSidebar(!sidebar)
  }

  //Sidebar menu
  const sideBar = SidebarData.map((item, index) => (
    <SubMenu key={index} item={item} />
  ))

  //Show and hide logout
  const showSettings = () => {
    setSettings(!settings)
  }

  const settingsMenu = (
    <div className={settings ? 'settings active' : 'settings'}>
      <ul>
        <li>
          <a href="#!" className="settings__nav">
            <MdIcons.MdSettings className="settings__icons" /> Profile
          </a>
        </li>
        <li>
          <button className="settings__nav">
            <MdIcons.MdExitToApp className="settings__icons" /> Logout
          </button>
        </li>
      </ul>
    </div>
  )

  return (
    <React.Fragment>
      <IconContext.Provider value={{color:'#ede9e8'}}>
        <div className="navbar__header">
          <FaIcon.FaBars onClick={showSidebar} className="navbar__nav-menu" />
          <div className="navbar__logo">
            <div className="navbar__logo--img">
              <img
                src="https://cdn-icons-png.flaticon.com/512/560/560216.png"
                alt="Imgaen del usario"
              />
            </div>
            <span className="navbar__logo-text">
              <span className="navbar__logo-text--main" onClick={showSettings}>
                TeloWeb
                <MdIcons.MdKeyboardArrowDown className="navbar__nav-menu--down" />
              </span>
              {settingsMenu}
            </span>
          </div>
        </div>
        <nav className={sidebar ? 'navbar__menu active' : 'navbar__menu'}>
          <ul className="navbar__menu--items">
            <li className="navbar__toggle">
              <AiIcons.AiOutlineClose
                className="navbar__nav-menu-close"
                onClick={showSidebar}
              />
            </li>
            {sideBar}
          </ul>
        </nav>
      </IconContext.Provider>
    </React.Fragment>
  )
}

export default (Navbar)
