import React from 'react'
import { useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Footer from '../components/footer'
import Header from '../components/header'
import HeaderMobile from '../components/header-mobile'
import Layout from '../components/layout'

const AboutPage = () => {
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
      title="Westview Golf Cars | About"
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
        About
      </h2>
      <h1 className="text-center text-2xl mt-2 font-semibold">About</h1>
      <div className="container my-6 max-w-4xl px-8 md:px-12 pb-4 lg:pb-8">
        <p className="mb-4">
         Originally founded in 2001, Westview Golf Cars Inc. successfully operated out of a pole barn on beautiful, family-run Westview Fruit Farm in Mattawan, Michigan. 
         After having served its customers for over 16 years, in 2017, it transitioned to its current owner, Bob Twardowski, and Westview Golf Cars & More, LLC was born. 
         Having 8 years experience running the shop, mobile service repairs and golf course lease management, Bob was able to seamlessly convert the business to its new 
         home in West Paw Paw with a customer-focused business approach. 
        </p>
        <p className="mb-4">
       Initially focusing on leasing, wholesale and servicing and repairs of EZ-GO© golf cars, WGC has since expanded to offering customers a convenient location, a showroom, 
       repairs and custom builds of all major makes/models of golf cars and utility vehicles as well as internet access to its services and available cars. Continuing to provide 
       the same services and standards, our business focuses on accessibility and customer and community engagement. 
        </p>
    <div className='max-w-md xl:max-w-xl mx-auto mt-20'>
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

export default AboutPage
