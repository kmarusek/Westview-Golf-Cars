import React from 'react'
import { useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Footer from '../components/footer'
import Header from '../components/header'
import HeaderMobile from '../components/header-mobile'
import Layout from '../components/layout'

const CarPortsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      authorized_dealer: file(relativePath: { eq: "authorized-dealer.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      carport1: file(relativePath: { eq: "Carport.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      carport2: file(relativePath: { eq: "Carport-Wood-Storage.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      carport3: file(relativePath: { eq: "Carports-For-Boat.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
    }
  `)

  return (
    <Layout
      title="Carports"
      description="As an authorized dealer of American Steel Carports, we build storage, garage spaces, vehicle and golf car storage, and other structures."
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
        Carports
      </h2>
      <h1 className="text-center text-2xl mt-2 font-semibold">
        Store vehicles, machinery, wood, and more.
      </h1>
      <div className="container my-6 max-w-4xl px-8 md:px-12 md:pb-12">
        <p className="mb-4">
          Westview Golf Cars is proud to be an authorized dealer of American
          Steel Carports.
        </p>
        <p className="mb-4">
          American Steel Carports provides long-lasting structural solutions,
          including carports, garages, workshops, and barns. It’s the perfect
          place to put your equipment, get started on a new project, or store
          your golf car. American Steel Carport structures have a lot of
          flexibility, so if you’re looking for something specific, you can
          likely find it here.
        </p>
        <p className="mb-4">
          If you’re not sure what you’re looking for, stop by our property. We
          have demos on site and can walk you through your options.
        </p>
        <p className="mb-6">
          Starting at $1190. Contact us for more pricing information.
        </p>
        <div className="container mt-20 md:flex md:justify-around">
          <div className='md:w-1/3 max-w-sm mx-auto px-4'>
            <Img
              fluid={data.carport1.childImageSharp.fluid}
              className="w-full"
              alt="hero-image"
            />
          </div>
          <div className='md:w-1/3 max-w-2xl mx-auto mt-4 md:mt-0 px-4'>
            <Img
              fluid={data.carport2.childImageSharp.fluid}
              className="w-full"
              alt="hero-image"
            />
          </div>
          <div className='md:w-1/3 max-w-2xl mx-auto mt-4 md:mt-0 px-4'>
            <Img
              fluid={data.carport3.childImageSharp.fluid}
              className="w-full"
              alt="hero-image"
            />
          </div>
        </div>
        <div className="max-w-xl mt-4 mx-auto">
          <Img
            fluid={data.authorized_dealer.childImageSharp.fluid}
            alt="car-ports"
          />
        </div>
      </div>
      <Footer className="bottom-0" />
    </Layout>
  )
}

export default CarPortsPage
