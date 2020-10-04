import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'

const Layout = ({ children, title, description }) => (
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
    render={data => (
      <>
        <Helmet
          title={title || data.site.siteMetadata.title}
        >
          {/* eslint-disable-next-line */}
          <script async src='https://www.googletagmanager.com/gtag/js?id=UA-175978479-1'></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-175978479-1');
            `}
          </script>
          <meta name='description' content={description || data.site.siteMetadata.description} />
          <meta property='og:site_name' content='Westview Golf Cars' />
          <meta
            name='og:image'
            content='https://lh3.googleusercontent.com/p/AF1QipMO_XMipbRTzF_rQqxKQ3Ytqqkoql95hLFdEQk7=w600-h0'
          />
          <html lang='en' />
        </Helmet>
        <Header siteTitle={title || data.site.siteMetadata.title} />
        <div className=''>{children}</div>
      </>
    )}
  />
)

export default Layout
