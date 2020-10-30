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
    }
  `)

  return (
    <Layout
      title="Westview Golf Cars | Carports"
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
        Car Ports
      </h2>
      <h1 className='text-center text-2xl mt-2 font-semibold'>Store vehicles, machinery, wood, and more.</h1>
      <div className="container my-6 max-w-4xl px-8 md:px-12 pb-4 lg:pb-8">
        <p className='mb-4'>
          Westview Golf Cars is proud to be an authorized dealer of American
          Steel Carports. We can help design and build the perfect storage
          solution for your machinery, golf cars, and project spaces.
        </p>
        <p className='mb-4'>
          American Steel Carports provides long-lasting structural solutions,
          including carports, garages, workshops, and barns. It’s the perfect
          place to put your equipment, get started on a new kind of project, or
          store your golf car. American Steel Carport structures have a lot of
          flexibility, so if you’re looking for something specific, we can work
          closely with you to get it done perfectly.
        </p>
        <p className='mb-4'>
          If you’re not sure what you’re looking for, stop by our property.
          We’ve got demos put up and we can walk you through your options.
        </p>
        <p className='mb-6'>
          Starting at $1220. For more pricing information, please get in touch.
        </p>
        <div className='max-w-xl mx-auto'>
          <Img fluid={data.authorized_dealer.childImageSharp.fluid} alt='car-ports' />
        </div>
      </div>
      <Footer className="bottom-0" />
    </Layout>
  )
}

export default CarPortsPage
