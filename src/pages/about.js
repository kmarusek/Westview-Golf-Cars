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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          porttitor, ipsum pulvinar pretium vestibulum, nibh ipsum commodo
          justo, vel tempus ante tortor lobortis neque. Nunc at nisl imperdiet
          nunc tempus efficitur at vitae ante. Praesent suscipit lorem mi, non
          sagittis ex faucibus quis. Nulla eu dui vitae augue pulvinar convallis
          suscipit sit amet nisl. Suspendisse vitae felis ac leo vulputate
          tempus vel eget felis. Aliquam erat volutpat. In fermentum et quam
          eget maximus. In fringilla felis justo, et volutpat est eleifend ut.
          Donec vel commodo libero.
        </p>
        <p className="mb-4">
          Praesent accumsan ipsum in tortor aliquet imperdiet. Sed leo odio,
          condimentum eget sapien eu, egestas mollis nisl. Donec vel mauris a
          dolor viverra posuere. Duis eu justo augue. Nam quis sem sit amet
          magna pretium sodales. Suspendisse in lorem id est venenatis sodales.
          Proin ut faucibus mauris. Nulla facilisi. Ut urna nisi, eleifend eu mi
          non, semper scelerisque eros. Morbi vehicula et enim vel dictum.
          Quisque vel est elit. Aliquam placerat quam id erat maximus, vel
          vulputate massa placerat. Etiam consectetur ornare laoreet.
        </p>
        <p className="mb-4">
          Suspendisse potenti. Curabitur orci risus, ultrices vel eleifend eget,
          mollis sed magna. Fusce efficitur neque ut mollis viverra.
          Pellentesque finibus pellentesque lacinia. Praesent vel nibh eu felis
          ultricies ultricies. In sit amet tellus mauris. In hac habitasse
          platea dictumst. Aliquam cursus ipsum eu molestie venenatis. Nunc
          tincidunt neque ligula, a viverra diam fermentum vitae. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Fusce neque enim, semper at est nec, fringilla tempor nibh. Sed
          faucibus gravida diam, at accumsan erat elementum eget. Proin ac nisi
          nulla. Vestibulum purus ligula, interdum in odio eu, vulputate
          consequat purus. Duis volutpat lacus nec volutpat euismod. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
        <div className='mx-8 md:mx-12 xl:mx-24 mt-20'>
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
