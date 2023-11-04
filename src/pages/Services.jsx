import React from 'react'
import HeroSection from '../components/heroSection/HeroSection'
import ContactComp from '../components/ContactComp/ContactComp'
import ServiesComp from '../components/servicesComp/ServiesComp'

const Services = () => {
  return (
    <div>
        <HeroSection
        bgImg={"https://images.pexels.com/photos/912124/pexels-photo-912124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
        hText={"Services"}
        subText={"The size of our team and our protracted expertise allow us to accomplish absolutely any type of a building, regardless of its height and/or complexity!"}
        />
       <ServiesComp />
        <ContactComp
        text={"If you can envision it, then we can build it. Tell us more about your project"} />
    </div>
  )
}

export default Services