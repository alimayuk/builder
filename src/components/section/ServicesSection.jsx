import SectionCard from "../sectionCard/SectionCard"
import "./section.css"

const ServicesSection = () => {
  return (
    <section className="servicesSection">
     <div className="container">
     <SectionCard 
       icon={"https://template63703.motopreview.com/mt-demo/63700/63703/mt-content/uploads/2017/05/mt-0950-home-icon-1.png"}
       headtext={"General Contracting"}
       subtext={"We have a long list of contractors, with whom our engineers and architects enjoy to work on a majority of our projects!"}
       />
        <SectionCard 
       icon={"https://template63703.motopreview.com/mt-demo/63700/63703/mt-content/uploads/2017/05/mt-0950-home-icon2.png"}
       headtext={"Building Information Modeling"}
       subtext={"Oftentimes physical and functional essence of any construction project needs to be represented digitally, in a 3D model format."}
       />
       <SectionCard 
       icon={"https://template63703.motopreview.com/mt-demo/63700/63703/mt-content/uploads/2017/05/mt-0950-home-icon3.png"}
       headtext={"Design-Build"}
       subtext={"We a project is not too complex, we may hire a designer-builder, to make the longevity of the construction shorter."}
       />
       <SectionCard 
       icon={"https://template63703.motopreview.com/mt-demo/63700/63703/mt-content/uploads/2017/05/mt-0950-home-icon4.png"}
       headtext={"Construction Services"}
       subtext={"Our customers love the pace/quality tempo that we show during each of the principal construction processes!"}
       />
       <SectionCard 
       icon={"https://template63703.motopreview.com/mt-demo/63700/63703/mt-content/uploads/2017/05/mt-0950-home-icon5.png"}
       headtext={"Pre-construction Services"}
       subtext={"We take our time on initial planning before any construction begins, to balance all the financial and efficiency issues beforehand…"}
       />
       <SectionCard 
       icon={"https://template63703.motopreview.com/mt-demo/63700/63703/mt-content/uploads/2017/05/mt-0950-home-icon6.png"}
       headtext={"Construction Management"}
       subtext={"Professional construction project management is essential for directing the entire process to achieve ideal results."}
       />
       <SectionCard 
       icon={""}
       headtext={""}
       subtext={""}
       />
     </div>
    </section>
  )
}

export default ServicesSection