import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Button from '../components/Button'
import Card from '../components/Card'
import '../../static/style/global.scss'
import './landingPage.scss'

const HeroContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  // top: 10%;
  // left: 12%;
  // @media (min-width: 768px) {
  //   top: 10%;
  // }
  // @media (min-width: 1024px) {
  //   top: 15%;
  // }
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
            <div className='px-8 md:px-12 lg:px-24'>
            <div className="feedback">
              <div className="feedback__block">
                <div className="feedback__block-phone-img"></div>
                <div className="feedback__block-phone-number">
                  269 - 555 - 5555
                </div>
              </div>
            </div>
            </div>
            <div className='px-8 md:px-12 lg:px-24'>
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
      <div className="content-block content margin-top1">
        <div className="margin-top1 text" style={{ padding: '0 1em' }}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat.
        </div>
        <div className="row-cards1 margin-top1">
          <Card src="image3.jpg">
            <div className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              similique.
            </div>
            <Button className="margin-top1">LOREM IPSUM</Button>
          </Card>
          <Card src="image5.jpg">
            <div className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              similique.
            </div>
            <Button className="margin-top1">LOREM IPSUM</Button>
          </Card>
          <Card src="image4.jpg">
            <div className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              similique.
            </div>
            <Button className="margin-top1">LOREM IPSUM</Button>
          </Card>
        </div>
        <div className="delimiter margin-top1">OTHER SERVICES</div>
        <div className="row-cards2 margin-top1">
          <Card src="image7.jpg">
            <div className="card-text-bold">
              SMALL ENGINE <br></br>
              REPAIR
            </div>
            <Button className="margin-top1">LOREM IPSUM</Button>
          </Card>
          <Card src="image2.jpg">
            <div className="card-img"></div>
          </Card>
        </div>
        <div className="delimiter margin-top1">
          CALL OR COME IN TODAY | 269 - 555 - 5555
        </div>
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
      <div className="footer-links margin-top1">
        <div className="content row" style={{ height: '100%', margin: 0 }}>
          <ul className="col-0 col-lg-5">
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

          <p
            className="offset-0 col-12 offset-lg-1 col-lg-6 conditions"
            style={{ paddingRight: '0' }}
          >
            COPYRIGHT © WESTVIEW GOLF CARS 2020 | ABOVE MEDIA
          </p>
        </div>
      </div>
    </>
  )
}

export default LandingPage
