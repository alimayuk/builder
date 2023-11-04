import ProjectCard from "../ProjectCard/ProjectCard"
import "./ProjectsComp.css"

const ProjectsComp = () => {
  return (
    <div className="ProjectsComp">
      <div className="container">
      <div className="hero">
            <h1>Projects</h1>
            <h3>Our construction company has a long experience of work within numerous commercial, NGO and governmental fields and industries… Starting with entertainment facilities, shopping malls and business centers and all  the way down to the warehouses and military-grade structures, we’ve done it all!</h3>
            <p>We’ve learned to know that each specific building should serve a specific purpose, and we always express that in each of our construction projects… Here you can browse through the most frequent fields of businesses who usually file construction projects to our agency!</p>
        </div>
        <div className="projects">
            <ProjectCard
            img={"https://images.pexels.com/photos/2767756/pexels-photo-2767756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            title={"Commercial Projects"}
            text={"It’s probably the most diverse category of construction to work in. But we’ve got experience…"}
            />
           
            <ProjectCard
            img={"https://images.pexels.com/photos/668298/pexels-photo-668298.jpeg"}
            title={"Educational Projects"}
            text={"It’s Educational institutions can be much more creative, than your regular school or a college campus!…"}
            />
             <ProjectCard
            img={"https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            title={"Cultural & Lifestyle Projects"}
            text={"It’s Working on a socially important building, such as a park involves additional landscape construction expertise.…"}
            />
            
        </div>
      </div>
    </div>
  )
}

export default ProjectsComp