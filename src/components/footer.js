import React from 'react'
import { Link } from 'gatsby'
// import FacebookIcon from '../../static/svg/facebook-icon.svg'

const Footer = ({className = ''}) => {
  return (
    <div className={`mt-6 bg-black py-2 text-sm w-full ${className}`} id='footer'>
      <div className="container w-full md:flex md:justify-between">
        <ul className="max-w-3xl flex justify-center items-center md:justify-start pb-2 md:pb-0 flex-wrap">
          <li className="px-3 md:px-4 font-semibold">
            <Link to="/" className="text-white">
              HOME
            </Link>
          </li>
          <li className="px-3 md:px-4 font-semibold">
            <Link to="/about" className="text-white">
              ABOUT
            </Link>
          </li>
          <li className="px-3 md:px-4 font-semibold">
            <Link to="/for-sale" className="text-white uppercase">
              For sale
            </Link>
          </li>
          <li className="px-3 md:px-4 font-semibold">
            <Link to="/for-sale" className="text-white uppercase">
              Rentals
            </Link>
          </li>
          <li className="px-3 md:px-4 font-semibold">
            <Link to="/services" className="text-white">
              SERVICES
            </Link>
          </li>
          <li className="px-3 md:px-4 font-semibold">
            <Link to="/car-ports" className="text-white">
              CARPORTS
            </Link>
          </li>
          <li className="px-3 md:px-4 font-semibold">
            <Link to="/contact" className="text-white">
              CONTACT
            </Link>
          </li>
          <li className="px-3 md:px-4 font-semibold">
            <a href="https://www.facebook.com/WestviewGolfCars/" className="inline-block" target='_blank'>
              {/* <FacebookIcon className='bg-white w-10 h-10' /> */}
              <img src='../../images/facebook-icon.jpg' alt='facebook-icon' className='inline-block w-10 h-10' />
            </a>
          </li>
        </ul>
        <p className="text-white font-semibold text-center md:text-right pr-4">
          COPYRIGHT © WESTVIEW GOLF CARS 2020 | ABOVE MEDIA
        </p>
      </div>
    </div>
  )
}

export default Footer
