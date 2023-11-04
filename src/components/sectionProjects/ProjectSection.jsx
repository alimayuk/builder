import ProjectGallery from "../SectionProjectsGallery/ProjectGallery"
import "./section.css"

const ProjectSection = () => {
  return (
    <div className="ProjectSection">
      <div className="container">
      <h1>Our Projects</h1>
      <h3>
      Our construction company has a long experience of work within numerous commercial, NGO and governmental fields and industries… 
      </h3>
    </div>
    <ProjectGallery />
    </div>
    
  )
}

export default ProjectSection