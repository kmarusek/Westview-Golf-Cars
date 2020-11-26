import React, { useCallback, useState } from "react";
import { useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import Footer from "../components/footer";
import Header from "../components/header";
import HeaderMobile from "../components/header-mobile";
import Layout from "../components/layout";
import Lightbox from 'react-image-lightbox'

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      sub1: file(relativePath: { eq: "Showroom.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub2: file(relativePath: { eq: "Golf-Car-Rentals.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sub3: file(relativePath: { eq: "Mobile-Service.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const [photoIndex, setPhotoIdx] = useState(-1);

  const onClickImg = useCallback(
    (idx) => {
      setPhotoIdx(idx);
    },
    [setPhotoIdx]
  );

  const mainSrc = Object.values(data).map(
    (val) => val.childImageSharp.fluid.src
  );

  return (
    <Layout title="Westview Golf Cars | About">
      <HeaderMobile />
      <div className="container px-4">
        {/* header */}
        <Header />
      </div>
      <h2
        className="bg-black text-white uppercase text-4xl text-center font-semibold mt-8"
        style={{ letterSpacing: "0.15em" }}
      >
        About
      </h2>
      <h1 className="text-center text-2xl mt-2 font-semibold">About</h1>
      <div className="container my-6 max-w-4xl px-8 md:px-12 pb-4 lg:pb-8">
        <p className="mb-4">
          Originally founded in 2001, Westview Golf Cars Inc. successfully
          operated out of a pole barn on beautiful, family-run Westview Fruit
          Farm in Mattawan, Michigan. After having served its customers for over
          16 years, in 2017, it transitioned to its current owner, Bob
          Twardowski, and Westview Golf Cars & More, LLC was born. Having 8
          years experience running the shop, mobile service repairs and golf
          course lease management, Bob was able to seamlessly convert the
          business to its new home in West Paw Paw with a customer-focused
          business approach.
        </p>
        <p className="mb-4">
          Initially focusing on leasing, wholesale and servicing and repairs of
          EZ-GO© golf cars, WGC has since expanded to offering customers a
          convenient location, a showroom, repairs and custom builds of all
          major makes/models of golf cars and utility vehicles as well as
          internet access to its services and available cars. Continuing to
          provide the same services and standards, our business focuses on
          accessibility and customer and community engagement.
        </p>
        <div className="flex flex-wrap justify-around max-w-4xl mx-auto pt-6 lg:pt-10 pb-6">
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
      </div>
      <Footer className="bottom-0" />
    </Layout>
  );
};

export default AboutPage;
