import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <div className="mt-6 bg-black py-2 text-sm">
      <div className="container w-full flex justify-between">
        <ul className="max-w-xl flex flex-wrap">
          <li className="px-4 font-semibold">
            <Link to="/" className="text-white">
              HOME
            </Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="#" className="text-white">
              ABOUT
            </Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="#" className="text-white">
              SERVICES
            </Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="#" className="text-white">
              CARPORTS
            </Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="#" className="text-white">
              NEWS
            </Link>
          </li>
          <li className="px-4 font-semibold">
            <Link to="#" className="text-white">
              CONTACT
            </Link>
          </li>
        </ul>
        <p className="text-white font-semibold">
          COPYRIGHT © WESTVIEW GOLF CARS 2020 | ABOVE MEDIA
        </p>
      </div>
    </div>
  )
}

export default Footer
