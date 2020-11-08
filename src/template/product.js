import { Link } from 'gatsby'
import React, { useCallback, useState } from 'react'
import Footer from '../components/footer'
import HeaderMobile from '../components/header-mobile'
import HeroLogo from '../components/hero-logo'
import Layout from '../components/layout'
import { Navs } from '../components/navs'
import LeftArrow from '../../static/svg/left-arrow.svg'

const BackButton = React.forwardRef(({ children, ...props }, ref) => {
  const onClick = (e) => {
    e.preventDefault()
    window.history.back()
  }
  return (
    <a
      {...props}
      ref={ref}
      href={typeof window !== 'undefined' ? document.referrer : ''}
      onClick={onClick}
    >
      {children}
    </a>
  )
})

function Product({ pageContext }) {
  const { product } = pageContext
  const productImage = product?.image?.file?.url
  const description = product?.description?.description?.split('\n\n')
  const relatedImages =
    product?.relatedImages
      ?.map((item) => item?.file?.url)
      .filter((item) => !!item) || []
  relatedImages.unshift(productImage)
  const [productImageShowing, onSetProductImage] = useState(productImage)

  const onSelectImg = useCallback(
    (idx) => {
      const nextImg = relatedImages[idx]
      onSetProductImage(nextImg)
    },
    [onSetProductImage, relatedImages]
  )

  return (
    <Layout
      title='Westview Golf Cars | For Sale'
      description='We sell new and refurbished gas, electric, and custom golf cars. If you’re looking for a custom golf car, get in touch and we’ll build something you love.'
    >
      <HeaderMobile />
      <div className="container px-4">
        {/* header */}
        <div>
          <div className="px-4">
            <div className="feedback">
              <a href='tel:2695555555'>
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
              <ul className="hidden md:flex md:flex-wrap w-full pl-10 justify-around items-center">
                {Navs.map(({ text, to }, idx) => (
                  <li key={`${text}-${idx}`}>
                    <Link
                      to={to}
                      className="uppercase pl-4 md:pl-8 inline-block h-10 font-semibold text-lg"
                      key={`${to}-${idx}`}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* content */}
        <div className="flex flex-col lg:flex-row p-4">
          <div className="lg:w-2/5 px-4">
            <img
              src={productImageShowing}
              alt="product-img"
              className="mb-4 mx-auto lg:mx-0 max-w-sm"
            />
            {relatedImages.length > 0 && (
              <div className="flex mt-2 my-2 lg:my-0 justify-center lg:justify-start">
                {relatedImages.map((url, idx) => {
                  function select() {
                    onSelectImg(idx)
                  }
                  const selected = url === productImageShowing

                  return (
                    <img
                      key={`img-${idx}`}
                      src={url}
                      className={`w-16 h-16 mr-1 cursor-pointer rounded${
                        selected ? ' border-2 border-blue-500' : ''
                      }`}
                      onClick={select}
                      onKeyPress={select}
                      role="button"
                      tabIndex="0"
                      alt="related-img"
                    />
                  )
                })}
              </div>
            )}
            <BackButton>
              <div
                role="button"
                className="ml-4 lg:ml-0 mt-2 lg:mt-4 pl-4 text-xl py-1 rounded font-semibold w-48 mb-4 flex items-center bg-primary inline"
              >
                <LeftArrow className="inline-block" />
                <span className="ml-2">Go back</span>
              </div>
            </BackButton>
          </div>
          <div className="lg:w-3/5 p-8 pt-0">
            <p className="bg-primary text-xl p-2 text-center font-semibold">
              {product.name}
            </p>
            <p className="text-lg text-center my-4">
              {Number(product.price).toLocaleString('en-US', {
                currency: 'USD',
                style: 'currency',
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
              })}
            </p>
            {description.map((d, idx) => (
              <div key={`description-${idx}`}>
                <p>{d}</p>
                <br />
              </div>
            ))}
            <div
              role="button"
              className="mx-auto text-xl py-1 rounded font-semibold w-40 text-center bg-primary"
            >
              Contact
            </div>
          </div>
        </div>
      </div>
      <Footer className="md:absolute bottom-0" />
    </Layout>
  )
}

export default Product
