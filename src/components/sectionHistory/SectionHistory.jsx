import React from 'react'
import { Link } from 'react-router-dom'
import "./section.css"
const SectionHistory = () => {
  return (
    <div className='SectionHistory'>
        <div className="wrapper">
        <div className="container">
           <h1>Our History</h1>
        <h3>
        The Builderry construction company has been founded 10 years ago, at the very peak of the building frenzy in the US…
        </h3>
        <p>
        Since then we’ve built hundreds of commercial, government and private buildings and facilities. It may not sound like a lot, but if you estimate the manpower, working hours, materials, planning and correlating that were all involved in completing each separate project, then our productivity is immense! With 200+ projects completed, that means we’ve been finishing 1 construction work per each 3 weeks, on average… That’s a threshold that we’re proud to keep up!  
        </p>
        <Link to="" className='btn'>READ MORE ABOUT US</Link> 
        </div>
        </div>
        
    </div>
  )
}

export default SectionHistory