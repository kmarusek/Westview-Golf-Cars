import React from 'react'
import { useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Footer from '../components/footer'
import Header from '../components/header'
import HeaderMobile from '../components/header-mobile'
import Layout from '../components/layout'

const RemoteServicePage = () => {
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
      title="Golf Cars Services | Welding Services"
      description="Automobile welding services for golf cars and utility vehicles. Westview Golf Cars can even pick up and drop off your project."
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
        Welding Services
      </h2>
      <h1 className="text-center text-2xl mt-2 font-semibold">
        Heavy-duty repairs and upgrades
      </h1>
      <div className="container my-6 max-w-4xl px-8 md:px-12 pb-4 lg:pb-8">
        <p className="mb-4">
          We’re in the business of putting metal back together again. Whether
          it’s a project we’re starting from scratch or some general repairs, we
          love a finely-welded line like it’s artwork.
        </p>
        <p className="mb-4">
          We build custom golf cars from scratch, piece by piece. Sometimes
          we’re repurposing an old frame and sometimes we’re starting fresh. But
          our vehicle welding services extend beyond just an axle here and
          there. We work on trailer couplers, recovery winches, new frames, and
          major repairs.
        </p>
        <p className="mb-4">
          If you broke something specific, we can get out to your place and put
          you back together in an afternoon. For more extensive jobs, we’ve got
          our full service shop and all the horsepower we need to get your
          machinery there and back.
        </p>
        <div className="mx-8 md:mx-12 xl:mx-24 mt-20">
          <Img
            fluid={data.logo.childImageSharp.fluid}
            className="w-full"
            alt="hero-image"
          />
        </div>
      </div>
      <Footer className="bottom-0" />
    </Layout>
  )
}

export default RemoteServicePage
