import React from 'react'
import { Link } from 'gatsby'

const PageNotFound = () => {
  return (
    <div className='container mt-6'>
      <h1 className='text-center text-2xl'>Page not found</h1>
      <p className='text-center mt-4'>
        Go back <Link to="/" className='text-primary'>Homepage</Link>
      </p>
    </div>
  )
}

export default PageNotFound
