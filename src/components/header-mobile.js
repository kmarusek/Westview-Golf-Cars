import React from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import { Navs, menuConfig } from './navs'
import MenuSvg from '../../static/svg/menu.svg'

const HeaderMobile = () => {
  
  return (
    <>
      <div className='md:hidden'>
        <Menu
          styles={menuConfig}
          customBurgerIcon={
            <div className='bg-primary p-2'>
              <MenuSvg />
            </div>
          }
        >
          {Navs.map((nav) => (
            <NavSmallItem key={nav.text} text={nav.text} to={nav.to} />
          ))}
        </Menu>
      </div>
    </>
  ) 
}

const NavSmallItem = ({ text = 'Nav', to = '#', }) => (
  <Link className='menu-item block py-2 font-semibold text-2xl' to={to === '#' ? '/#' : to}>
    {text}
  </Link>
)

export default HeaderMobile
