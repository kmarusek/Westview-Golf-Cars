import React from 'react'
import { Link } from 'gatsby'
import { Navs } from './navs'
import HeroLogo from './hero-logo'
import Dropdown from './dropdown'

const Header = () => {
  return (
    <div className="">
      <div>
        <div className="px-4">
          <div className="feedback">
            <div className="feedback__block">
              <div className="feedback__block-phone-img"></div>
              <div className="feedback__block-phone-number">
                269 - 555 - 5555
              </div>
            </div>
          </div>
        </div>
        <div className="px-4">
          <div className="flex justify-center md:justify-between mt-6 md:mt-0">
            <div>
              <HeroLogo />
            </div>
            <ul className="hidden md:flex md:flex-wrap w-full pl-10 justify-around pt-10 xl:pt-20">
              {Navs.map(({ text, to }, idx) => {
                if (text !== 'Services') {
                  return (
                    <li key={`${text}-${idx}`}>
                      <Link
                        to={to}
                        className="uppercase pl-4 md:pl-8 inline-block h-10 font-semibold text-lg"
                      >
                        {text}
                      </Link>
                    </li>
                  )
                }
                return (
                  <li
                    key={`${text}-${idx}`}
                  >

                  <Dropdown
                    menuOptions={[
                      {
                        text: 'Home',
                        to: '/',
                      },
                      {
                        text: 'About',
                        to: '#',
                      },
                    ]}
                  >
                    <p className="uppercase pl-4 md:pl-8 inline-block h-10 font-semibold text-lg">
                      Services
                    </p>
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
