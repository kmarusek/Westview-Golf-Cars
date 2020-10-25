import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Footer from '../components/footer'
import HeaderMobile from '../components/header-mobile'
import Layout from '../components/layout'
import { mediumScreen } from '../utils/utils'
import Header from '../components/header'

const Sales = ({ pageContext }) => {
  const { products } = pageContext

  return (
    <Layout
      title="Westview Golf Cars | For Sale"
      description="We sell new and refurbished gas, electric, and custom golf cars. If you’re looking for a custom golf car, get in touch and we’ll build something you love."
    >
      <HeaderMobile />
      <div className="container px-4">
        {/* header */}
        <Header />
      </div>
      <h1
        className="bg-black text-white uppercase text-4xl text-center font-semibold mt-8"
        style={{ letterSpacing: '0.15em' }}
      >
        For sale
      </h1>
      <div>
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
            <div key={product.productId} className="mb-6 lg:mb-12">
              <div className="max-w-xs">
                <Link className="w-full" to={`/products/${product.productId}`}>
                  {/* <img src={product.image.file.url} alt="product-img" /> */}
                  <Img
                    fluid={product.image.fluid}
                    alt="product-image"
                    style={{ width: mediumScreen ? '16rem' : '20rem' }}
                  />
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
      <Footer />
    </Layout>
  )
}

export default Sales
