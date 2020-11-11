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
      logo: file(relativePath: { eq: "logo.png" }) {
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
          We love pairing custom carts with ecstatic owners, and we love helping
          people get their old cart back up and running again. But we also keep
          a selection of our favorites around to rent them out for events, golf,
          weddings, photos, and a list of things you wouldn’t believe. If you’ve
          got a strange request, get in touch, we’ve heard it before.
        </p>
        <h2 className="text-center text-2xl mt-2 font-semibold">Events</h2>
        <p className="mb-4">
          Need to get cars for an event? Maybe you’re going golfing with your
          company, or you just want to get around your wedding with a bit more
          flare than the average bride and groom. Let’s talk.
        </p>
        <div className="max-w-md xl:max-w-xl mx-auto mt-20">
          <Img
            fluid={data.logo.childImageSharp.fluid}
            className="w-full"
            alt="hero-image"
          />
        </div>
      </div>
      <Footer className="xl:absolute bottom-0" />
    </Layout>
  )
}

export default GolfCarsRental
