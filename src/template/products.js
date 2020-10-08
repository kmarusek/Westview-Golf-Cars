import { Link } from 'gatsby'
import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import HeroLogo from '../components/hero-logo'
import Layout from '../components/layout'
import { Navs } from '../components/navs'

const Sales = ({ pageContext }) => {
  const { products } = pageContext

  return (
    <Layout>
      <Header />
      <div className='px-4'>
        <div className="container">
          <div>
            <div className="px-8">
              <div className="feedback">
                <div className="feedback__block">
                  <div className="feedback__block-phone-img"></div>
                  <div className="feedback__block-phone-number">
                    269 - 555 - 5555
                  </div>
                </div>
              </div>
            </div>
            <div className="px-8">
              <div className="flex justify-center md:justify-between mt-6 md:mt-0">
                <div>
                  <HeroLogo />
                </div>
                <ul className="hidden md:flex md:flex-wrap w-full pl-10 justify-around items-center">
                  {Navs.map(({ text, to }, idx) => (
                    <li key={`${text}-${idx}`}>
                      <Link
                        to={to}
                        className="uppercase pl-4 md:pl-8 inline-block h-10"
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
        <div>
          <div className="bg-black text-white p-4">
            <h1
              className="uppercase text-4xl text-center font-semibold"
              style={{ letterSpacing: '0.15em' }}
            >
              For sale
            </h1>
          </div>
          <p className="text-xl text-center uppercase mt-6 mb-2 tracking-widest font-semibold">
            Filters
          </p>
          <div className="container bg-primary py-2 mb-4">
            <div className="max-w-4xl mx-auto flex justify-around px-4 lg:px-0">
              <button className="bg-black text-white p-2 px-4 tracking-widest uppercase font-semibold">
                Electric
              </button>
              <button className="bg-black text-white p-2 px-4 tracking-widest uppercase font-semibold">
                Gas
              </button>
              <button className="bg-black text-white p-2 px-4 tracking-widest uppercase font-semibold">
                Custom
              </button>
            </div>
          </div>
          <div className="container px-4 flex flex-wrap justify-center md:justify-between">
            {products.map((product) => (
              <div key={product.productId} className='mb-4 md:mb-0'>
                <div className="max-w-xs">
                  <Link to={`/products/${product.productId}`}>
                    <img src={product.image.file.url} alt="product-img" />
                  </Link>
                </div>
                <p className="text-xl p-2 text-center font-semibold">
                  {product.name}
                </p>
                <p className="text-lg text-center">
                  {Number(product.price).toLocaleString('en-US', {
                    currency: 'USD',
                    style: 'currency',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                  })}
                </p>
                <Link to={`/products/${product.productId}`}>
                  <div className="flex justify-center mt-2">
                    <button className="bg-black text-white p-2 px-8 tracking-widest uppercase font-semibold">
                      View
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export default Sales
