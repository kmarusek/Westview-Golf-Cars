import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import HeaderMobile from '../components/header-mobile'
import Layout from '../components/layout'
import withImageLightbox from '../components/HOC/with-light-box'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const ServicesPage = (props) => {
  console.log(`ServicesPage -> props`, props)

  const data = useStaticQuery(graphql`
    query {
      sub1: file(relativePath: { eq: "IMG_4811.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub2: file(relativePath: { eq: "IMG_4812.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub3: file(relativePath: { eq: "IMG_6390.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub4: file(
        relativePath: { eq: "IMG_6396.png" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub5: file(relativePath: { eq: "IMG_6397.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(`ServicesPage -> data`, data)
  
  return (
    <Layout
      title="Golf Cars Services | Remote Services"
      description="You don’t need to take your golf car to the shop. With remote services through Westview Golf Cars, we can repair your cars remotely or tow them ourselves"
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
        Services
      </h1>
      <div className="container my-6 max-w-4xl px-8 md:px-12 pb-4">
        <p className="my-4">
          Look, we get it. If you could drive the golf car or vehicle up to our
          door, then it wouldn’t need repairs in the first place. That’s why
          we’ve spent years investing in our mobile services. There’s a lot of
          simple golf car repairs and maintenance that we can do onsite in a
          single visit.
        </p>
        <p className="my-4">
          You may not have the gear to haul your golf car, but we certainly do.
          If you’ve got an old clunker that you want cleaned and rebuilt, we can
          put it on a trailer and bring it back only when it’s ready to take the
          course once again.
        </p>
        <p className="my-4">
          We do all kinds of engine, mechanical, electrical, and welding
          services on golf cars and other vehicles. If you aren’t sure if it’s a
          job we can tackle, give us a call. We’ll be able to tell you quickly
          whether or not we can do it - and if we can’t do it, we’re happy to pass
          out recommendations for someone who can.
        </p>
      </div>
      <div className='flex flex-wrap justify-around max-w-4xl mx-auto pb-6'>
        {Object.values(data).map((val, idx) => (
          <div
            className='w-56 mx-6 mb-4'
            alt={`service-img-${idx}`}
            key={`service-img-${idx}`}
          >
            <Img
              fluid={val.childImageSharp.fluid}
            />
          </div>
        ))}
      </div>
      <Footer className='bottom-0' />
    </Layout>
  )
}

export default withImageLightbox(ServicesPage)
