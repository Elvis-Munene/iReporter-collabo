import React from 'react'
import About from './About'
import Cases from './Cases'
import Footer from './Footer'

import Partners from './Partners'
import Testimonials from './Testimonials'


const LandingPage = () => {
  return (
    <div>
      <section className="bg-[url('https://user-images.githubusercontent.com/63696529/196103011-aea90416-5837-482b-bb5b-ae1dd3860186.png')] md:bg-[url('https://user-images.githubusercontent.com/63696529/196103716-50d76861-d72f-4db8-88ba-a582709c69e8.png')] lg:bg-[url('https://user-images.githubusercontent.com/63696529/196103519-341471f4-79ef-447d-a457-22dbfcad8401.png')] bg-no-repeat bg-cover">

      {/* <Herosection/> */}
       
      </section>

      <section className="">
        <div >
          <About/>
        </div>
      </section>


      <section className="">
        <div>
        <Partners/>
        </div>
      </section>

      <section className="">
        <div >
          <Cases/>
          
        </div>
      </section>


      <section className="">
        <div>
        <Testimonials/>
        </div>
      </section>

      <section className="">
        <Footer/>
      </section>
    </div>
  )
}

export default LandingPage