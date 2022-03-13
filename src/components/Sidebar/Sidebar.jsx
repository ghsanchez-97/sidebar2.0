import React from 'react'
// styled
import './index.scss'
// Import Icon
import * as MdIcons from 'react-icons/md'
//
import { SidebarData } from 'components/Navbar/SidebarData'
import SubMenu from 'components/Navbar/SubMenu'

const Sidebar = () => {
  const sideBar = SidebarData.map((item, index) => (
    <SubMenu key={index} item={item} />
  ))

  return (
    <div className='sidebar'>
      <div className='sidebar__content'>
        <div className='sidebar__content__hamburger'>
          <MdIcons.MdMenu className='sidebar__content__hamburger__icons' />
        </div>
        <div className='sidebar__content__menuIcon'>
          {SidebarData.map((item, index) => (
            <div key={index} className='sidebar__content__menuIcon__item'>
              {item.icon}
              <div key={index} className='sidebar__content__menuIcon__item__title'>
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Sidebar
