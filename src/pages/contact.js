import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import HeaderMobile from '../components/header-mobile'
import Layout from '../components/layout'

const ContactPage = () => {
  return (
    <Layout
      title="Westview Golf Cars | Contact"
      description="Questions about the golf cars, rentals, and repairs we offer? Get in touch and we’ll talk about how we can help."
    >
      <HeaderMobile />
      <div className="container px-4">
        {/* header */}
        <Header />
      </div>
      <h1
        className="uppercase text-4xl text-center font-semibold mt-8"
        style={{ letterSpacing: '0.15em' }}
      >
        Contact
      </h1>
      <div className="container my-6 max-w-4xl px-8 md:px-12">
        <p className="my-4">
          We’d love to help. If you have any questions about the cars, services,
          repairs, and rentals that we offer, please get in touch. Just give us
          your prefered method of contact and we’ll get back to you as soon as
          we can.
        </p>
        <h2 className='font-semibold text-2xl text-center mt-6'>What can we do for you?</h2>
      </div>
      <Footer className='absolute bottom-0' />
    </Layout>
  )
}

export default ContactPage
