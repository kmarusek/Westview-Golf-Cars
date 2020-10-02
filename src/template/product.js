import { Link } from 'gatsby'
import React, { useCallback, useState } from 'react'
import Footer from '../components/footer'
import HeroLogo from '../components/hero-logo'
import Layout from '../components/layout'
import { Navs } from '../components/navs'

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

  const onSelectImg = useCallback((idx) => {
    const nextImg = relatedImages[idx]
    onSetProductImage(nextImg)
  }, [onSetProductImage, relatedImages])

  return (
    <Layout>
      <div className="container px-4">
        {/* header */}
        <div>
          <div className="px-8 md:px-12 lg:px-24">
            <div className="feedback">
              <div className="feedback__block">
                <div className="feedback__block-phone-img"></div>
                <div className="feedback__block-phone-number">
                  269 - 555 - 5555
                </div>
              </div>
            </div>
          </div>
          <div className="px-8 md:px-12 lg:px-24">
            <div className="flex justify-center md:justify-between mt-6 md:mt-0">
              <div>
                <HeroLogo />
              </div>
              <ul className="hidden md:flex md:flex-wrap w-full pl-10 justify-around items-center">
                {Navs.map(({ text, to }, idx) => (
                  <li key={`${text}-${idx}`}>
                    <Link
                      to={to}
                      className="uppercase px-4 md:px-8 inline-block h-10"
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
            <img src={productImageShowing} alt='product-img' />
            {relatedImages.length > 0 && (
              <div className="flex mt-2">
                {relatedImages.map((url, idx) => {
                  function select() {
                    onSelectImg(idx)
                  }
                  const selected = url === productImageShowing

                  return (
                    <img
                      key={`img-${idx}`}
                      src={url}
                      className={`w-12 h-12 mr-1 cursor-pointer rounded${
                        selected ? ' border-2 border-blue-500' : ''
                      }`}
                      onClick={select}
                      role='button'
                      tabIndex="0"
                      alt='related-img'
                    />
                  )
                })}
              </div>
            )}
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
              <>
                <p key={`description-${idx}`}>{d}</p>
                <br />
              </>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  )
}

export default Product
