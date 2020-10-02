import React from 'react'
import { Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const LogoWrapper = styled.div`
  width: 200px;
  @media (min-width: 768px) {
    width: 260px;
  }
  @media (min-width: 1280px) {
    width: 360px;
  }
`

const HeroLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "imageLogoAdreas.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return(
    <div className='self-center'>
      <Link className='no-underline text-inherit mb-0' to='/'>
        <LogoWrapper className='w-64 mb-0'>
          <Img fluid={data.file.childImageSharp.fluid} alt='logo' />
        </LogoWrapper>
      </Link>
    </div>
  )
}

export default HeroLogo
