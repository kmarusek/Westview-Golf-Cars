import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import HeaderMobile from './header-mobile'

const Layout = ({ children, title, description, keywords }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data) => {
      const { siteMetadata } = data.site

      return (
        <>
          <Helmet title={title || siteMetadata.title}>
            {/* eslint-disable-next-line */}
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=UA-175978479-1"
            ></script>
            <script>
              {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-175978479-1');
            `}
            </script>
            <meta
              name="description"
              content={description || siteMetadata.description}
            />
            <meta name="keywords" content={keywords || siteMetadata.keywords} />
            <meta property="og:type" content="services" />
            <meta
              property="og:url"
              content="https://www.facebook.com/WestviewGolfCars/"
            />
            <meta
              property="og:title"
              content="Westview Golf Cars & More LLC."
            />
            <meta property="og:site_name" content="Westview Golf Cars" />
            <meta
              name="og:image"
              content="https://lh3.googleusercontent.com/p/AF1QipMO_XMipbRTzF_rQqxKQ3Ytqqkoql95hLFdEQk7=w600-h0"
            />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://www.facebook.com/WestviewGolfCars/" />
            <meta
              property="twitter:title"
              content="Westview Golf Cars & More LLC."
            />
            <meta
              property="twitter:description"
              content={description || siteMetadata.description}
            />
            <meta
              property="twitter:image"
              content="https://lh3.googleusercontent.com/p/AF1QipMO_XMipbRTzF_rQqxKQ3Ytqqkoql95hLFdEQk7=w600-h0"
            />
            <html lang="en" />
          </Helmet>
          <HeaderMobile />
          <div className="h-screen relative" id='site-layout'>{children}</div>
        </>
      )
    }}
  />
)

export default Layout
