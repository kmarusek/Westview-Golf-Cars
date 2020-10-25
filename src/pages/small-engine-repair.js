import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import HeaderMobile from '../components/header-mobile'
import Layout from '../components/layout'

const SmallEngineRepairPage = () => {
  return (
    <Layout
      title="Golf Cars Services | Small Engine Repair"
      description="Golf car engine repair lets your favorite old car ride again. We also handle engine repair for vehicles like trucks, motorcycles, service vehicles, and ATVs."
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
        Small Engine Repair
      </h1>
      <h1 className="text-center text-2xl mt-2 font-semibold">
        Drive it again.
      </h1>
      <div className="container my-6 max-w-4xl px-8 md:px-12 pb-4 lg:pb-8">
        <p className="mb-4">
          No matter how much rust, dust, and grime—we can get it humming again.
          From old rusty engines with a mouse nest inside, to something shiny
          that just needs a new spark plug, we’ve seen it all. Our services
          range from minor engine repairs to complete engine rebuilds on old
          rusty motors.
        </p>
        <p className="mb-4">
          We specialize in golf cars, but a golf car engine is just a small
          engine that gets you around the course. We also handle small engine
          repair for various utility vehicles. If you have any questions about
          the kind of vehicles and engines that we can repair, give us a call!
        </p>
        <p className="mb-4">
          If your golf car or vehicle hasn’t moved in years, we can pick it up,
          repair it, and drop it back off. We know that when you need engine
          repair, it’s because your vehicle can’t move! We have all the gear to
          repair things on site or get it into the shop.
        </p>
      </div>
      <Footer className="absolute bottom-0" />
    </Layout>
  )
}

export default SmallEngineRepairPage
