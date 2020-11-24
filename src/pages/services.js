import React, { useCallback, useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import HeaderMobile from '../components/header-mobile'
import Layout from '../components/layout'
import withImageLightbox from '../components/HOC/with-light-box'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Lightbox from 'react-image-lightbox'
import { CardCollapsible } from '../components/card-collapsible'

const ServicesPage = (props) => {
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
      sub4: file(relativePath: { eq: "IMG_6396.png" }) {
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
      sub6: file(relativePath: { eq: "IMG_5825.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub7: file(relativePath: { eq: "IMG_5826.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [photoIndex, setPhotoIdx] = useState(-1)

  const onClickImg = useCallback(
    (idx) => {
      setPhotoIdx(idx)
    },
    [setPhotoIdx]
  )

  const mainSrc = Object.values(data).map(
    (val) => val.childImageSharp.fluid.src
  )
  // console.log('ServicesPage -> mainSrc', mainSrc.length)
  // console.log('ServicesPage -> photoIndex', photoIndex)

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
      <div className="container my-6 max-w-4xl px-8 md:px-12">
        <p className="my-4">
        We offer all kinds of engine, mechanical, electrical, and welding services for golf cars and other utility vehicles. 
    If you aren’t sure if it’s a job we can tackle, give us a call. 
        </p>
        <h2 className="uppercase font-bold text-lg text-center tracking-widest pt-4">
          Our services include the following
        </h2>
      </div>
      {/* <div className="max-w-6xl uppercase mx-auto flex justify-around px-4 lg:px-0 pb-8 flex-wrap">
        <Link to='/small-engine-repair'>
          <button className="bg-black text-white p-2 w-48 px-4 tracking-widest uppercase font-semibold m-4 md:m-0">
            Small engine repair
          </button>
        </Link>
        <Link to='/gold-car-rentals'>
          <button className="bg-black text-white p-2 w-40 px-4 tracking-widest uppercase font-semibold m-4 md:m-0">
            Golf car rentals
          </button>
        </Link>
        <Link to='/remote-services'>
          <button className="bg-black text-white p-2 w-40 px-4 tracking-widest uppercase font-semibold m-4 md:m-0">
            Remote service
          </button>
        </Link>
        <Link to='/welding-services'>
          <button className="bg-black text-white p-2 w-40 px-4 tracking-widest uppercase font-semibold m-4 md:m-0">
            Welding Service
          </button>
        </Link>
      </div> */}
      <div className="px-4 max-w-5xl mx-auto mb-6">
        <CardCollapsible
          sectionTitle="Small Engine Repair"
          outerClassName="mb-4">
          <p className="mb-4">
          No matter how much rust, dust, and grime—we can get it humming again. 
          From old rusty engines with a mouse nest inside to something newer that just needs a tuneup. 
          Our services range from minor engine repairs to complete engine rebuilds on old rusty motors.
          </p>
          <p className="mb-4">
          We specialize in golf cars,  but we also handle small engine repair for various utility vehicles. 
          If you have any questions about the kind of vehicles and engines that we can repair, give us a call!
          </p>
          <p className="mb-4">
          We offer pick up and delivery services for non-running vehicles or repairs that cannot be made onsite. 
          </p>
        </CardCollapsible>
        <CardCollapsible sectionTitle="Welding Service" outerClassName="mb-4">
          <p className="mb-4">
           General weld repair on stainless, aluminum and mild steel. 
           Please contact us to see if we can help you with your welding needs.
          </p> 
        </CardCollapsible>
        <CardCollapsible sectionTitle="Mobile Service" outerClassName="mb-4">
          <p className="mb-4">
         We’ve spent years investing in our mobile services, there are many repairs that can be done onsite in a single visit. 
         Our mobile services offer customers a convenient alternative to having to find a way to bring their vehicle in for repair. 
         Our goal is to make the repair process as seamless to our customers as possible. 
          </p>
        </CardCollapsible>
        <CardCollapsible sectionTitle="Golf Car Rentals" outerClassName="mb-4">
          <p className="mb-4">
          We offer golf car rentals for weddings, race weekends, camping, family reunions and other special events. 
          Rental options range from daily to weekly, call for pricing and delivery availability. 
          </p>
        </CardCollapsible>
      </div>
      <div className="flex flex-wrap justify-around max-w-4xl mx-auto pb-6">
        {Object.values(data).map((val, idx) => (
          <div
            className="w-56 mx-6 mb-4 cursor-pointer"
            role="button"
            tabIndex={idx}
            alt={`service-img-${idx}`}
            key={`service-img-${idx}`}
            onClick={() => onClickImg(mainSrc.length * 100 + idx)}
          >
            <Img fluid={val.childImageSharp.fluid} alt="service-img" />
          </div>
        ))}
      </div>
      {photoIndex >= 0 && (
        <Lightbox
          mainSrc={mainSrc[photoIndex % mainSrc.length]}
          nextSrc={mainSrc[photoIndex % mainSrc.length]}
          prevSrc={mainSrc[photoIndex % mainSrc.length]}
          // nextSrc={mainSrc[(photoIndex + 1) % mainSrc.length]}
          // prevSrc={mainSrc[(photoIndex + mainSrc.length - 1) % mainSrc.length]}
          enableZoom={false}
          onCloseRequest={() => setPhotoIdx(-1)}
          reactModalStyle={{
            overlay: {
              zIndex: 3000,
            },
          }}
          onMovePrevRequest={() => setPhotoIdx((v) => v - 1)}
          onMoveNextRequest={() => setPhotoIdx((v) => v + 1)}
        />
      )}
      <Footer className="bottom-0" />
    </Layout>
  )
}

export default withImageLightbox(ServicesPage)
