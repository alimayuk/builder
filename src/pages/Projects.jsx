import React from 'react'
import ContactComp from '../components/ContactComp/ContactComp'
import ProjectsComp from '../components/ProjectsComp/ProjectsComp'

const Projects = () => {
  return (
    <div>
        <ProjectsComp />
        <ContactComp
        text={"If you can envision it, then we can build it. Tell us more about your project"}
        />
    </div>
  )
}

export default Projects