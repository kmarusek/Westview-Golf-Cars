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
          whether or not we can do it - and if we can’t do it, we’re happy to
          pass out recommendations for someone who can.
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
          outerClassName="mb-4"
        >
          <p className="mb-4">
            No matter how much rust, dust, and grime—we can get it humming
            again. From old rusty engines with a mouse nest inside, to something
            shiny that just needs a new spark plug, we’ve seen it all. Our
            services range from minor engine repairs to complete engine rebuilds
            on old rusty motors.
          </p>
          <p className="mb-4">
            We specialize in golf cars, but a golf car engine is just a small
            engine that gets you around the course. We also handle small engine
            repair for various utility vehicles. If you have any questions about
            the kind of vehicles and engines that we can repair, give us a call!
          </p>
          <p className="mb-4">
            If your golf car or vehicle hasn’t moved in years, we can pick it
            up, repair it, and drop it back off. We know that when you need
            engine repair, it’s because your vehicle can’t move! We have all the
            gear to repair things on site or get it into the shop.
          </p>
        </CardCollapsible>
        <CardCollapsible sectionTitle="Welding Service" outerClassName="mb-4">
          <p className="mb-4">
            We’re in the business of putting metal back together again. Whether
            it’s a project we’re starting from scratch or some general repairs,
            we love a finely-welded line like it’s artwork.
          </p>
          <p className="mb-4">
            We build custom golf cars from scratch, piece by piece. Sometimes
            we’re repurposing an old frame and sometimes we’re starting fresh.
            But our vehicle welding services extend beyond just an axle here and
            there. We work on trailer couplers, recovery winches, new frames,
            and major repairs.
          </p>
          <p className="mb-4">
            If you broke something specific, we can get out to your place and
            put you back together in an afternoon. For more extensive jobs,
            we’ve got our full service shop and all the horsepower we need to
            get your machinery there and back.
          </p>
        </CardCollapsible>
        <CardCollapsible sectionTitle="Mobile Service" outerClassName="mb-4">
          <p className="mb-4">
            Look, we get it. If you could drive the golf car or vehicle up to
            our door, then it wouldn’t need repairs in the first place. That’s
            why we’ve spent years investing in our mobile services. There’s a
            lot of simple golf car repairs and maintenance that we can do onsite
            in a single visit.
          </p>
          <p className="mb-4">
            You may not have the gear to haul your golf car, but we certainly
            do. If you’ve got an old clunker that you want cleaned and rebuilt,
            we can put it on a trailer and bring it back only when it’s ready to
            take the course once again.
          </p>
          <p className="mb-4">
            We do all kinds of engine, mechanical, electrical, and welding
            services on golf cars and other vehicles. If you aren’t sure if it’s
            a job we can tackle, give us a call. We’ll be able to tell you
            quickly whether or not we can do it—and if we can’t do it, we’re
            happy to pass out recommendations for someone who can.
          </p>
        </CardCollapsible>
        <CardCollapsible sectionTitle="Golf Car Rentals" outerClassName="mb-4">
          <p className="mb-4">
            We love pairing custom carts with ecstatic owners, and we love
            helping people get their old cart back up and running again. But we
            also keep a selection of our favorites around to rent them out for
            events, golf, weddings, photos, and a list of things you wouldn’t
            believe. If you’ve got a strange request, get in touch, we’ve heard
            it before.
          </p>
          <h2 className="text-center text-2xl mt-2 font-semibold">
            Play a round of golf
          </h2>
          <p className="mb-4">
            Rent a single car or a set of cars for the group. It’s a way better
            way to get around the course—and you get great cars in perfect
            condition.
          </p>
          <p className="mb-4">
            Need to get cars for an event? Maybe you’re going golfing with your
            company, or you just want to get around your wedding with a bit more
            flare than the average bride and groom. Let’s talk.
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
