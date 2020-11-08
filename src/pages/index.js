import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import tw from 'twin.macro'
import { mediumScreen } from '../utils/utils'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import Button from '../components/Button'
import { Navs, ServiceNav } from '../components/navs'
import Footer from '../components/footer'
import Dropdown from '../components/dropdown'
import '../../static/style/global.scss'
import './landingPage.scss'

const HeroContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
`

const CardImg = styled.div`
  ${tw`text-white absolute top-0 w-full h-full flex flex-col text-center justify-center items-center transition duration-300`}
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`

const CardService = styled.div`
  ${tw`w-full md:w-1/2 relative`}
  max-height: 240px
  @media (min-width: 1024px) {
    max-height: 320px;
  }
  .gatsby-image-wrapper {
    max-height: 240px @media (min-width: 1024px) {
      max-height: 320px;
    }
  }
`
const OperationBox = styled.div`
  background-color: rgba(0, 0, 0, 0.55);
  ${tw`text-white p-6 xl:p-10 uppercase`}
`

const OperationBoxV2 = styled.div`
  ${tw`text-black mx-4 p-6 xl:p-10 uppercase border-2 border-black`}
`

const LandingPage = () => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "landingBackground.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      carLeft: file(relativePath: { eq: "image3.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      carCenter: file(relativePath: { eq: "image5.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      carRight: file(relativePath: { eq: "image4.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      serviceLeft: file(relativePath: { eq: "image7.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      serviceRight: file(relativePath: { eq: "image2.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      locationMap: file(relativePath: { eq: "location-map.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logoMap: file(relativePath: { eq: "imageLogoAdreas.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageMap: file(relativePath: { eq: "imageMap.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout
      title="Home Page"
      description="It matters how you drive. Westview Golf Cars specializes in golf car repair, custom golf car builds, and steel golf car carports."
    >
      <div className="header-block">
        <div className="header-block content relative">
          <Img
            fluid={data.background.childImageSharp.fluid}
            className="w-full"
            alt="hero-image"
          />
          <HeroContainer>
            <div className="px-4">
              <div className="feedback">
                <a href='tel:2697207168'>
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
              <div className="menu">
                <div className="menu__logo"></div>
                <div className="menu__links">
                  <ul className="hidden md:block">
                    {Navs.map(({ text, to }, idx) => {
                      if (text !== 'Services') {
                        return (
                          <li key={`${text}-${idx}`}>
                            <Link to={to} className="hidden md:block font-semibold uppercase hover:text-dark-light-2 text-xl index">
                              {text}
                            </Link>
                          </li>
                        )
                      }
                      return (
                        <li key={`${text}-${idx}`} className='invisible md:visible absolute md:relative h-12'>
                          <Dropdown menuOptions={ServiceNav}>
                            <Link
                              to={to}
                              className="text-right uppercase font-semibold text-lg inline-block hover:text-dark-light-2"
                            >
                              Services
                            </Link>
                          </Dropdown>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </HeroContainer>
        </div>
      </div>
      <div className="desc">GOLF CARS</div>
      <div className="container">
        {/* <div className="p-4 lg:p-6">
          <p className="md:text-lg">
            It’s more than the easiest way to get around the course. A great
            golf car gives you style and confidence from the tee box to the
            green. We’re not sure how many strokes the perfect golf car can
            shave off your game, but we like to think it’s just as important as
            the right set of clubs. Drive more confidently, swing more
            confidently.
          </p>
        </div> */}
        <div className="row-cards1 p-4 lg:p-6">
          <div className="relative">
            <Img
              fluid={data.carLeft.childImageSharp.fluid}
              className="w-full"
              alt="hero-image"
            />
            <CardImg className="px-4 md:px-6 lg:px-10">
              <p>
                Perfect for shorter range driving. Easier to maintain than gas.
              </p>
              <Button className="margin-top1">Electric Golf Cars</Button>
            </CardImg>
          </div>
          <div className="relative">
            <Img
              fluid={data.carCenter.childImageSharp.fluid}
              className="w-full"
              alt="hero-image"
            />
            <CardImg className="px-4 md:px-6 lg:px-10">
              <p>Ideal if you need a longer range and more power.</p>
              <Button className="margin-top1">Gas Golf Cars</Button>
            </CardImg>
          </div>
          <div className="relative">
            <Img
              fluid={data.carRight.childImageSharp.fluid}
              className="w-full"
              alt="hero-image"
            />
            <CardImg className="px-4 md:px-6 lg:px-10">
              <p>Want something specific?</p>
              <p>We’ll design your perfect car.</p>
              <Button className="margin-top1">Custom Golf Cars</Button>
            </CardImg>
          </div>
        </div>
        {/* divider */}
        <div className="px-4 lg:px-6">
          <div className="delimiter">OTHER SERVICES</div>
        </div>
        {/* divider */}
        <div className="mt-4 flex flex-col md:flex-row px-4 lg:px-6">
          <CardService className="mb-4 md:mb-0 md:pr-4">
            <Img
              fluid={data.serviceLeft.childImageSharp.fluid}
              className="w-full"
              alt="hero-image"
              style={{ maxHeight: mediumScreen ? 390 : 260 }}
            />
            <CardImg className="px-10 md:px-8 lg:px-12 w-full">
              <p className="text-4xl font-extrabold uppercase">
                Services
              </p>
              <Link to="/small-engine-repair">
                <Button className="mt-4 py-4">Learn more</Button>
              </Link>
            </CardImg>
          </CardService>
          <CardService className="md:pl-4">
            <Img
              fluid={data.serviceRight.childImageSharp.fluid}
              className="w-full"
              alt="hero-image"
              style={{ maxHeight: mediumScreen ? 390 : 260 }}
            />
            <CardImg className="px-10 md:px-8 lg:px-12 w-full">
              <p className="text-4xl font-extrabold uppercase">
                Carports
              </p>
              <Link to="/car-ports">
                <Button className="mt-4">Store Your car</Button>
              </Link>
            </CardImg>
          </CardService>
        </div>
        {/* divider */}

        <div className="mt-4 px-4 h-16 lg:px-6">
          <div className="py-1 px-4 bg-primary flex justify-center items-center font-bold text-white">
            CALL OR COME IN TODAY | 269 - 720 - 7168
          </div>
        </div>

        {/* divider */}
        {/* <div className="row-cards3 margin-top1">
          <Card
            style={{ height: '100%', width: '100%', backgroundColor: 'white' }}
          >
            <div className="card-logo-img"></div>
            <Button className="margin-top1">GET DIRECTIONS</Button>
          </Card>
          <Card style={{ height: '100%', width: '100%' }} src="imageMap.png" />
          <div className="hours-opearation">
            <p className="hours-opearation__header">HOURS OF OPERATING</p>
            <div className="hours-opearation__container">
              <div>
                <p>MON</p>
                <p>TUE</p>
                <p>WED</p>
                <p>THUR</p>
                <p>FRI</p>
                <p>SAT</p>
                <p>SAN</p>
              </div>
              <div>
                <p>9:00 AM - 5:00 PM</p>
                <p>9:00 AM - 5:00 PM</p>
                <p>9:00 AM - 5:00 PM</p>
                <p>9:00 AM - 5:00 PM</p>
                <p>9:00 AM - 5:00 PM</p>
                <p>CLOSED</p>
                <p>CLOSED</p>
              </div>
            </div>
          </div>
        </div> */}
        {/* old footer */}
        {/* <div className="mt-4 container">
          <div className="px-4 lg:px-6 relative">
            <Img
              fluid={data.locationMap.childImageSharp.fluid}
              className="w-full"
              alt="hero-image"
            />
            <div className="md:absolute md:w-full md:top-0 md:flex md:p-10 md:justify-between md:items-center md:h-full lg:pr-16">
              <div className="w-1/3">
                <Img
                  fluid={data.logoMap.childImageSharp.fluid}
                  className="w-full"
                  alt="hero-image"
                />
              </div>
              <OperationBox className="">
                <h4 className="text-lg xl:text-xl font-extrabold tracking-wide px-2 mb-2">
                  HOURS OF OPERATING
                </h4>
                <div className="">
                  <div className="flex py-1 lg:py-2 font-semibold">
                    <p className="w-1/3">MON</p>
                    <p className="w-2/3">9:00 AM - 5:00 PM</p>
                  </div>
                  <div className="flex py-1 lg:py-2 font-semibold">
                    <p className="w-1/3">TUE</p>
                    <p className="w-2/3">9:00 AM - 5:00 PM</p>
                  </div>
                  <div className="flex py-1 lg:py-2 font-semibold">
                    <p className="w-1/3">WED</p>
                    <p className="w-2/3">9:00 AM - 5:00 PM</p>
                  </div>
                  <div className="flex py-1 lg:py-2 font-semibold">
                    <p className="w-1/3">THUR</p>
                    <p className="w-2/3">9:00 AM - 5:00 PM</p>
                  </div>
                  <div className="flex py-1 lg:py-2 font-semibold">
                    <p className="w-1/3">FRI</p>
                    <p className="w-2/3">9:00 AM - 5:00 PM</p>
                  </div>
                  <div className="flex py-1 lg:py-2 font-semibold">
                    <p className="w-1/3">SAT</p>
                    <p className="w-2/3">close</p>
                  </div>
                  <div className="flex py-1 lg:py-2 font-semibold">
                    <p className="w-1/3">Sun</p>
                    <p className="w-2/3">close</p>
                  </div>
                </div>
              </OperationBox>
            </div>
          </div>
        </div> */}

        <div className="mt-4 container">
          <div className="px-4 lg:px-6 flex flex-col md:flex-row">
            <div className="md:w-1/3 px-4 py-10 md:py-16 lg:py-20">
              <Img
                fluid={data.logo.childImageSharp.fluid}
                className="w-full"
                alt="hero-image"
              />
              <div className="text-center mt-4">
                <Link to="#">
                  <Button className="mt-4">Get directions</Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/3">
              <Img
                fluid={data.imageMap.childImageSharp.fluid}
                className="w-full"
                alt="hero-image"
              />
            </div>
            <div className="md:w-1/3 mt-4 md:mt-0">
              <OperationBoxV2 className="">
                <h4 className="text-lg xl:text-xl font-extrabold tracking-wide px-2 mb-2">
                  HOURS OF OPERATING
                </h4>
                <div className="">
                  <div className="flex py-1 lg:py-2 font-semibold">
                    <p className="w-1/3">MON</p>
                    <p className="w-2/3">9:00 AM - 5:00 PM</p>
                  </div>
                  <div className="flex py-1 lg:py-2 font-semibold">
                    <p className="w-1/3">TUE</p>
                    <p className="w-2/3">9:00 AM - 5:00 PM</p>
                  </div>
                  <div className="flex py-1 lg:py-2 font-semibold">
                    <p className="w-1/3">WED</p>
                    <p className="w-2/3">9:00 AM - 5:00 PM</p>
                  </div>
                  <div className="flex py-1 lg:py-2 font-semibold">
                    <p className="w-1/3">THUR</p>
                    <p className="w-2/3">9:00 AM - 5:00 PM</p>
                  </div>
                  <div className="flex py-1 lg:py-2 font-semibold">
                    <p className="w-1/3">FRI</p>
                    <p className="w-2/3">9:00 AM - 5:00 PM</p>
                  </div>
                  <div className="flex py-1 lg:py-2 font-semibold">
                    <p className="w-1/3">SAT</p>
                    <p className="w-2/3">close</p>
                  </div>
                  <div className="flex py-1 lg:py-2 font-semibold">
                    <p className="w-1/3">Sun</p>
                    <p className="w-2/3">close</p>
                  </div>
                </div>
              </OperationBoxV2>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </Layout>
  )
}

export default LandingPage
