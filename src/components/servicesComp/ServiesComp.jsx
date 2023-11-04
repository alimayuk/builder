import ServicesCard from "../servicesCard/ServicesCard";
import "./ServiesComp.css";

const ServiesComp = () => {
  return (
    <div className="ServiesComp">
     <div className="container">
     <ServicesCard 
     img={"https://template63703.motopreview.com/mt-demo/63700/63703/mt-content/uploads/2017/05/mt-0950-home-services-img1.jpg"}
     hText={"General Contracting"}
     subHtext={"We have a long list of professional contractors, whom our engineers and architects enjoy to work with on a majority of our projects!"}
     text={"Throughout our years in business, we’ve accumulated a strong expertise both in managing and completing any type of a construction, as well as in choosing the right vendors and sub-contractors… We understand how vital it is to coordinate the project in a timely, cost-efficient way. As of now we’ve alreeady dealt with numerous mid and large scale constructions, so we’ve mastered the art of minimizing the extra expenses, completing each project’s stage on schedule and implementing a live project intact with both original engineering solutions and the client’s initial vision…"}
     />
     <ServicesCard
     img={"https://template63703.motopreview.com/mt-demo/63700/63703/mt-content/uploads/2017/05/mt-0950-home-services-img2.jpg"}
     hText={"Construction Management"}
     subHtext={"Professional construction project management is essential for facilitating and directing the entire process to achieve ideal results."}
     text={"As you may know, the construction planning process has always been far from perfect… In the past, project schedules were unrealistically optimistic… That resulted in an average of 45% of work promised in a week actually being completed at a later date than its deadline dictated. This kind of protraction left subcontractors waiting for the previous task to be completed, even before the next stage of work could have proceeded further… To fix that issue, our construction bureau has implemented the Pull Planning process, coordinated with the trade contractors on a weekly basis. Pull Planning method estimates the scheduling in reverse. While fixing a required end date, we obtain the critical dates and input from trade contractors. Then a general schedule is being sketched on a large project board. Different types of tasks, like daily and weekly tasks are color-coded and maintained for overall progress.The info obtained from all trade contractors combined allows us to schedule the project on a much more detailed level while maintaining a critical completion date."}
     />
     <ServicesCard
     img={"https://template63703.motopreview.com/mt-demo/63700/63703/mt-content/uploads/2017/05/mt-0950-home-services-img3.jpg"}
     hText={"Design-Build"}
     subHtext={"If a project is not too complex, we may hire a designer-builder type of contractor, to make the longevity of the construction shorter."}
     text={"Throughout With the help of such project delivery method, we’ll be able to overlap the design and the construction part, to eliminate any kind of postponing or schedule delays… Also, while many people think that this fast-paced kind of project delivery can be led by architect only, we practiced a designer, engineer and a contractor as team leaders and it proved to be just as efficient. By using this work method, we’ll be able to complete your project much faster!"}
     />
     <ServicesCard
     img={"https://template63703.motopreview.com/mt-demo/63700/63703/mt-content/uploads/2017/05/mt-0950-home-services-img4.jpg"}
     hText={"Pre-construction Services"}
     subHtext={"We take our time on initial planning before any construction begins, to balance all the financial and efficiency issues beforehand…"}
     text={"his traditional type of construction management works great for big scale buildings and structures. The fact that in this scenario the design stage is done before the actual on-site construction even begins, allows us to estimate all the resources and man-hours needed fort project’s completion. That kind of a step-by-step, preliminary construction planning will allow you to be right on schedule while your big project will get built."}
     />
     <ServicesCard
     img={"https://template63703.motopreview.com/mt-demo/63700/63703/mt-content/uploads/2017/05/mt-0950-home-services-img5.jpg"}
     hText={"Construction Services"}
     subHtext={"Our customers love the pace/quality tempo that we show during each of the principal construction processes!"}
     text={"We’re comfortable with any kind of a project that you want us to build! As long as it’s technically possible to convert your vision to a standing structure, we’ll be more than glad to do it. These are not mere words, as since 2006 we’ve been building both small, private and commercial buildings like houses and shops, as well as huge, complex megastructures like a military warehouse, a commercial high-rise business centre or a university’s campus are… As long as we’re building your project, you can stop worrying about the schedule and enjoy our time-wise and cost-efficient services!"}
     />
     <ServicesCard
     img={"https://template63703.motopreview.com/mt-demo/63700/63703/mt-content/uploads/2017/05/mt-0950-home-services-img6.jpg"}
     hText={"Building Information Modeling"}
     subHtext={"Oftentimes physical and functional essence of any construction project needs to be represented digitally, in a 3D model format."}
     text={"In short, the construction industry is undergoing fundamental changes, not comparable in impact with anything before it, not even with the rise of lean manufacturing in auto-making in the 1980s. An innovative and time-saving tool called Building Information Modeling, or BIM, is the reason for that revolution. BIM technology rapidly enhances complex building processes, shortcutting any project completion date, cutting the expenses and improving the overall quality of the construction. Builderry construction company is the leading industry exponent, with approximately $30 billion in BIM project experience. We want clients to understand the incredible advantages that the BIM offers and we want them to get prepared to embrace this new technology."}
     />
     </div>
    </div>
  );
};

export default ServiesComp;
