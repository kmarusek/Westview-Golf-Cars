import React from 'react'
import { Link } from 'gatsby'
import { Navs, ServiceNav } from './navs'
import HeroLogo from './hero-logo'
import Dropdown from './dropdown'

const Header = () => {
  const path = typeof window !== 'undefined' ? window.location.pathname : ''
  
  return (
    <div className="">
      <div>
        <div className="px-4">
          <div className="feedback">
            <a href='tel:2695555555'>
              <div className="feedback__block">
                <div className="feedback__block-phone-img"></div>
                <div className="feedback__block-phone-number">
                  269 - 555 - 5555
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="px-4">
          <div className="flex justify-center md:justify-between mt-6 md:mt-0">
            <div>
              <HeroLogo />
            </div>
            <ul className="hidden md:flex md:flex-wrap w-full pl-10 justify-around pt-10 xl:pt-20">
              {Navs.map(({ text, to }, idx) => {
                const isCartPortRoute = !(text !== 'Services' || !path.startsWith('/services'))
                if (!isCartPortRoute) {
                  return (
                    <li key={`${text}-${idx}`}>
                      <Link
                        to={to}
                        className={`uppercase pl-4 md:pl-8 lg:pl-16 ${text !== 'Carports' && path.startsWith('/services') ? 'xl:pl-8' : 'xl:pl-0'} inline-block h-10 font-semibold text-lg`}
                      >
                        {text}
                      </Link>
                    </li>
                  )
                }
                return (
                  <li key={`${text}-${idx}`} style={{height: 212}}>
                    <Dropdown
                      menuOptions={ServiceNav}
                    >
                      Services
                    </Dropdown>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
