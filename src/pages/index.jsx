import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Button from '../components/Button'
import Card, { Card2 } from '../components/Card'
import '../../static/style/global.scss'
import './landingPage.scss'
import tw from 'twin.macro'
import { mediumScreen } from '../utils/utils'

const HeroContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
`

const CardImg = styled.div`
  ${tw`text-white absolute top-0 h-full flex flex-col text-center justify-center items-center`}
`

const CardService = styled.div`
  ${tw`w-full md:w-1/2 relative`}
  max-height: 240px
  @media (min-width: 1024px) {
    max-height: 320px
  }
  .gatsby-image-wrapper {
    max-height: 240px
    @media (min-width: 1024px) {
      max-height: 320px
    }
  }
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
    }
  `)

  return (
    <>
      <div className="header-block">
        <div className="header-block content relative">
          <Img
            fluid={data.background.childImageSharp.fluid}
            className="w-full"
            alt="hero-image"
          />
          <HeroContainer>
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
              <div className="menu">
                <div className="menu__logo"></div>
                <div className="menu__links">
                  <ul>
                    <li>
                      <Link to="/">HOME</Link>
                    </li>
                    <li>
                      <Link>ABOUT</Link>
                    </li>
                    <li>
                      <Link>SERVICES</Link>
                    </li>
                    <li>
                      <Link>CARPORTS</Link>
                    </li>
                    <li>
                      <Link>NEWS</Link>
                    </li>
                    <li>
                      <Link>CONTACT</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </HeroContainer>
        </div>
      </div>
      <div className="desc">GOLF CARS</div>
      <div className="container">
        <div className="p-4 lg:p-6">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat.
        </div>
        <div className="row-cards1 p-4 lg:p-6">
          <div className="relative">
            <Img
              fluid={data.carLeft.childImageSharp.fluid}
              className="w-full"
              alt="hero-image"
            />
            <CardImg className="px-4 md:px-6 lg:px-10">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, similique.
              </p>
              <Button className="margin-top1">LOREM IPSUM</Button>
            </CardImg>
          </div>
          <div className="relative">
            <Img
              fluid={data.carCenter.childImageSharp.fluid}
              className="w-full"
              alt="hero-image"
            />
            <CardImg className="px-4 md:px-6 lg:px-10">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, similique.
              </p>
              <Button className="margin-top1">LOREM IPSUM</Button>
            </CardImg>
          </div>
          <div className="relative">
            <Img
              fluid={data.carRight.childImageSharp.fluid}
              className="w-full"
              alt="hero-image"
            />
            <CardImg className="px-4 md:px-6 lg:px-10">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, similique.
              </p>
              <Button className="margin-top1">LOREM IPSUM</Button>
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
              style={{ maxHeight: mediumScreen ? 360 : 260 }}
            />
            <CardImg className="px-10 md:px-8 lg:px-12 w-full">
              <p className='text-4xl font-extrabold uppercase'>Small Engine Repair</p>
              <Button className="mt-4">LOREM IPSUM</Button>
            </CardImg>
          </CardService>
          <CardService className="md:pl-4">
            <Img
              fluid={data.serviceRight.childImageSharp.fluid}
              className="w-full"
              alt="hero-image"
              style={{ maxHeight: mediumScreen ? 360 : 260 }}
            />
            <CardImg className="px-10 md:px-8 lg:px-12 w-full">
              <p className='text-4xl font-extrabold uppercase'>Carrot Installations</p>
              <Button className="mt-4">LOREM IPSUM</Button>
            </CardImg>
          </CardService>
        </div>
        {/* divider */}

        <div className="mt-4 px-4 lg:px-6">
          <div className="delimiter">
            CALL OR COME IN TODAY | 269 - 555 - 5555
          </div>
        </div>

        {/* divider */}
        <div className="row-cards3 margin-top1">
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
        </div>
      </div>
      <div className="mt-6 bg-black py-2 text-sm">
        <div className="container w-full flex justify-between">
          <ul className="max-w-xl flex flex-wrap">
            <li className="px-4 font-semibold">
              <Link to="/" className="text-white">
                HOME
              </Link>
            </li>
            <li className="px-4 font-semibold">
              <Link className="text-white">ABOUT</Link>
            </li>
            <li className="px-4 font-semibold">
              <Link className="text-white">SERVICES</Link>
            </li>
            <li className="px-4 font-semibold">
              <Link className="text-white">CARPORTS</Link>
            </li>
            <li className="px-4 font-semibold">
              <Link className="text-white">NEWS</Link>
            </li>
            <li className="px-4 font-semibold">
              <Link className="text-white">CONTACT</Link>
            </li>
          </ul>
          <p className="text-white font-semibold">
            COPYRIGHT © WESTVIEW GOLF CARS 2020 | ABOVE MEDIA
          </p>
        </div>
      </div>
    </>
  )
}

export default LandingPage
