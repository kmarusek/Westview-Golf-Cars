import React, { useCallback } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Footer from '../components/footer'
import Header from '../components/header'
import HeaderMobile from '../components/header-mobile'
import Layout from '../components/layout'
import Button from '../components/Button'

const Input = styled.input`
  ${tw`text-white bg-black p-4`}
  ::placeholder {
    ${tw`text-white`}
  }
`
const TextArea = styled.textarea`
  ${tw`text-white bg-black p-4`}
  ::placeholder {
    ${tw`text-white`}
  }
`

const ContactPage = () => {
  const onSubmit = useCallback((ev) => {
    ev.preventDefault()
    const form = new FormData(ev.target)
    fetch('https://formspree.io/f/xknpvaza', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: form,
    })
      .then(res => res.json())
      .then(res => {
        // console.log('res: ',res)
        // notify.show('Submitted successfully!', 'success')
        alert('Submitted successfully!')
      }).catch(err => {
        console.log('err: ',err)
      })
  }, [])

  return (
    <Layout
      title="Contact"
      description="Questions about the golf cars, rentals, and repairs we offer? Get in touch and we’ll talk about how we can help."
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
        Contact
      </h1>
      <div className="container my-6 max-w-4xl px-8 md:px-12">
        <p className="my-4">
          We’re here to help. If you have any questions about the services we
          offer, please get in touch. Fill out the form below and we will get
          back to you as soon as we can.
        </p>
        <h2 className="font-semibold text-2xl text-center mt-6">
          What can we do for you?
        </h2>
        <div className='md:flex mt-6'>
          <div className='md:w-1/2'>
            <div className='max-w-sm ml-auto p-6 border-3 border-black '>
              <h3 className='text-2xl mb-2'>Summer hours</h3>
              <div className='flex'>
                <p className='inline-block w-36'>Monday - Friday:</p>
                <p className='inline-block w-36'>8:00am - 4:00pm</p>
              </div>
              <div className='flex'>
                <p className='inline-block w-36'>Saturday:</p>
                <p className='inline-block w-36'>8:00am - 1:00pm</p>
              </div>
              <div className='flex'>
                <p className='inline-block w-36'>Sunday</p>
                <p className='inline-block w-36'>Close</p>
              </div>
              <h3 className='text-2xl mb-2 mt-6'>Winter hours</h3>
              <div className='flex'>
                <p className='inline-block w-36'>Monday - Friday:</p>
                <p className='inline-block w-36'>8:00am - 4:00pm</p>
              </div>
              <div className='flex'>
                <p className='inline-block w-36'>Saturday:</p>
                <p className='inline-block w-36'>Close</p>
              </div>
              <div className='flex'>
                <p className='inline-block w-36'>Sunday</p>
                <p className='inline-block w-36'>Close</p>
              </div>
            </div>
         </div>
          <div className='md:w-1/2 mx-auto mt-4 md:px-6 md:mt-0 lg:px-12'>
            <div className='max-w-sm'>
              <form onSubmit={onSubmit}>
                <Input name='name' placeholder='Name' className='block w-full mb-4' />
                <Input name='email' placeholder='Email' className='block w-full mb-4' />
                <TextArea name='what_can_we_do' placeholder='What Can We Do For You?' className='block w-full h-40'  />
                <div className='flex justify-end'>
                  <button className='block px-4 py-2 text-white rounded mt-4 bg-primary text-right' type='submit'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer className="lg:relative bottom-0" />
    </Layout>
  )
}

export default ContactPage
