import GalleryCard from "../galleryCard/GalleryCard"
import "./gallery.css"

const ProjectGallery = () => {
  return (
    <div className="projectgallery">
        <GalleryCard
        img={"https://images.pexels.com/photos/629142/pexels-photo-629142.jpeg"}
        linkText={"Cultural & Lifestyle Projects"}
        />
        <GalleryCard 
        img={"https://images.pexels.com/photos/1145434/pexels-photo-1145434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
        linkText={"Government Projects"}
        />
        <GalleryCard 
        img={"https://images.pexels.com/photos/190417/pexels-photo-190417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
        linkText={"Industrial Projects"}
        />
        <GalleryCard 
        img={"https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
        linkText={"Technology Projects"}
        />
    </div>
  )
}

export default ProjectGallery