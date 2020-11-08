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
            <a href='tel:2697207168'>
              <div className="feedback__block">
                <div className="feedback__block-phone-img"></div>
                <div className="feedback__block-phone-number">
                  269 - 720 - 7168
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
              {Navs.map(({ text, to }, idx) => (
                <li key={`${text}-${idx}`}>
                  <Link
                    to={to}
                    className={`uppercase pl-4 md:pl-8 lg:pl-16 xl:pl-0 inline-block h-10 font-semibold text-lg hover:text-dark-light-2`}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
