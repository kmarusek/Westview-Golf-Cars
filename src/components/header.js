import React from 'react'
import { Link } from 'gatsby'
import { Navs } from './navs'
import HeroLogo from './hero-logo'

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
            <ul className="hidden md:flex md:flex-wrap w-full pl-10 justify-around items-center">
              {Navs.map(({ text, to }, idx) => (
                <li key={`${text}-${idx}`}>
                  <Link
                    to={to}
                    className="uppercase pl-4 md:pl-8 inline-block h-10 font-semibold text-lg"
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
