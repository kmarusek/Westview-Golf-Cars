import React from 'react'
import { useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Footer from '../components/footer'
import Header from '../components/header'
import HeaderMobile from '../components/header-mobile'
import Layout from '../components/layout'

const GolfCarsRental = () => {
  const data = useStaticQuery(graphql`
    query {
      rentals1: file(relativePath: { eq: "Golf-Car-Rentals-min.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rentals2: file(relativePath: { eq: "Golf-Car-Rentals.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout
      title="Golf Car Rentals"
      description="Need an awesome car for the day? Westview Golf Cars offers golf car rentals with gas and electric engines, lights, and soundbars."
    >
      <HeaderMobile />
      <div className="container px-4">
        {/* header */}
        <Header />
      </div>
      <h2
        className="bg-black text-white uppercase text-4xl text-center font-semibold mt-8"
        style={{ letterSpacing: '0.15em' }}
      >
        Rentals
      </h2>
      <h1 className="text-center text-2xl mt-2 font-semibold">
        An incredible ride for an unforgettable round
      </h1>
      <div className="container my-6 max-w-4xl px-8 md:px-12 pb-4 lg:pb-8">
        <p className="mb-4">
          We offer golf car rentals for weddings, race weekends, camping, family reunions and other special events. 
          Rental options range from daily to weekly, call for pricing and delivery availability.
        </p>
        <div className="container mt-20 md:flex md:justify-around">
          <div className='md:w-1/2 max-w-sm mx-auto'>
            <Img
              fluid={data.rentals1.childImageSharp.fluid}
              className="w-full"
              alt="hero-image"
            />
          </div>
          <div className='md:w-1/3 max-w-2xl mx-auto mt-4 md:mt-0'>
            <Img
              fluid={data.rentals2.childImageSharp.fluid}
              className="w-full"
              alt="hero-image"
            />
          </div>
        </div>
      </div>
      <Footer className="bottom-0" />
    </Layout>
  )
}

export default GolfCarsRental
