import CircleCard from "../CircleCard/CircleCard";
import SeniorCard from "../SeniorCard/SeniorCard";
import ShortInfoCard from "../ShortInfoCard/ShortInfoCard";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import GalleryCard from "../galleryCard/GalleryCard";
import "./SectionAbout.css";

const SectionAbout = () => {
  return (
    <div className="SectionAbout">
      <div className="content">
      <h1 className="title">About Our Company</h1>
       <div className="infoRows">
       <div className="row">
          <ShortInfoCard
            title={"General Contracting"}
            subText={
              "Builderry’s core values have been shaped over more than 10 years of delivering the finest construction services to our clients. They stood to the test of time and these principles remain our bedrock lynchpins. We never tried to cut on either quality, the pace of work or any other construction aspect. We stay true to our full promise of efficiency!"
            }
          />
          <ShortInfoCard
            title={"Pace"}
            subText={
              "Our love for detailed, bullet-point preparations, as well as to open and clear project management and communication is what makes us faster than the competition. Recently we compared a technically similar 10-stories building that we built, and the other built by our main competitor. Their price and pace was 2 times lower than hours!"
            }
          />
        </div>
        <div className="row">
        <ShortInfoCard
            title={"Innovative Solutions"}
            subText={
              "To be honest, we just love when a new client challenges our creative and technical thinking with a challenging project at hand! We foster innovation and creativity, alongside experience and skillful execution, as part of our culture. Because of this, over a long history, many clients have selected us for unorthodox, complex projects in which engineering and designing enigmas produce innovative, industry defying solutions."
            }
          />
           <ShortInfoCard
            title={"Quality"}
            subText={
              "Quality is focal in every little aspect of the construction. The mindset of both our senior employees and all the way to our on-site contractors and construction workers centers on attention. It’s out attention to details that allows us to work on a multitude of projects simultaneously, while staying on schedule!"
            }
          />
        </div>
        <div className="row">
        <ShortInfoCard
            title={"Environment friendliness"}
            subText={
              "Besides valuing your time, your money and your vision for the project, we also value the Mother Nature as well…It cannot be denied anymore, that even the small construction implements the nature in a bad way… That’s why we’re leading the effort to use only eco-friendly materials and comply with keeping the environment unpollluted by the work we do!"
            }
          />
        </div>
       </div>
       <div className="circleScors">
        <CircleCard
        score={"250"}
        text={"Projects Completed"}
        />
        <CircleCard
        score={"302"}
        text={"Staff members"}
        />
        <CircleCard
        score={"15"}
        text={"Million Man-hours"}
        />
        <CircleCard
        score={"99"}
        text={"Awards won"}
        />
       </div>
       <div className="seniorInfo">
        <h1>Senior managers</h1>
        <div className="row">
        <SeniorCard
        img={"https://template63703.motopreview.com/mt-demo/63700/63703/mt-content/uploads/2017/05/mt-0950-team-img1.jpg"}
        title={"Calvin Fitzgerald"}
        subTitle={"Final Budget"}
        text={"Calvin Fitzgerald is an established and well-respected expert in the construction industry. With more than 35 years of practical experience in the business, Calvin has built his career on bringing the most outlandish conceptual visions from blueprints to a street next to yours… His leadership skills cemented Builderry’s dominating positions among our competitors."}
        />
        <SeniorCard
        img={"https://template63703.motopreview.com/mt-demo/63700/63703/mt-content/uploads/2017/05/mt-0950-team-img2.jpg"}
        title={"Taylor Wilson"}
        subTitle={"Chief Executive Officer"}
        text={"Previously Taylor’s been involved in the construction business since the 1970’s… His profound experience in building miscellaneous types of projects and his innovative mindset makes him the leading force in our company. The BIM and Db methods that he implemented are now the lynchpins of our business operations with all of our clients…"}
        />
        <SeniorCard
        img={"https://template63703.motopreview.com/mt-demo/63700/63703/mt-content/uploads/2017/05/mt-0950-team-img3.jpg"}
        title={"Josh Wagner"}
        subTitle={"Design Chief Officer"}
        text={"Calvin Josh leads our creative team of designers and engineers…His proven ability to manage the most complex projects and bring the craziest concepts to life is what makes him as efficient as he is. Together, this creative team can be the launchpad of any project, giving it a head start at the earliest stages of the construction project’s planning."}
        />
        <SeniorCard
        img={"https://template63703.motopreview.com/mt-demo/63700/63703/mt-content/uploads/2017/05/mt-0950-team-img4.jpg"}
        title={"Luis Maxwell"}
        subTitle={"Contractors Operations Head"}
        text={"Calvin While we do all the pre-construction planning and sketching, scheduling and managing on an in-house basis, we hire a lot of 3rd party contractors for the actual on-site work. Luis Maxwell is the person to manage all our contractors across all of our projects being currently in development."}
        />
        </div>
       </div>
       <div className="testimonials">
       <h1>Testimonials</h1>
        <div className="row">
        <TestimonialCard
        img={"https://template63703.motopreview.com/mt-demo/63700/63703/mt-content/uploads/2017/05/mt-0950-testimonials-img1.jpg"}
        text={"As an official fro North Dakota’s state government, I want to thank the Builderry construction company. On behalf of the citizens of the state, we’re so grateful for this new, innovative building! This allows North Dakota to hold its legislative operations in a contemporary, progressive architectural environment!"}
        title={"Deborah Quagmire"}
        />
        <TestimonialCard
        img={"https://template63703.motopreview.com/mt-demo/63700/63703/mt-content/uploads/2017/05/mt-0950-testimonials-img2.jpg"}
        text={"This bridge project was funded by small and medium business of Rhode Island, as well as by its private citizens. After the hurricane hit our shores recently, we all were concerned for the Okaloppo river not having a proper landline connection. But now, after Builderry company finished the project, the county can enjoy its new, beautiful infrastructure!"}
        title={"Benedict Arnold"}
        />
        <TestimonialCard
        img={"https://template63703.motopreview.com/mt-demo/63700/63703/mt-content/uploads/2017/05/mt-0950-testimonials-img3.jpg"}
        text={"A a part of our expansion effort, we decided to open a location in the state of Georgia. We were impressed, to say the least, when we saw the bold design concept, penned by Builderry company. But the completed shopping mall’s building, finished 2 (!) weeks earlier than planned, just left us speechless and delighted!"}
        title={"Gerald Cutler"}
        />
        </div>
       </div>
       <div className="featureProjects">
        <h1>Featured Projects</h1>
       <div className="row">
       <GalleryCard
       img={"https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
       link={""}
       linkText={"Amazon's Warehouse, SD"}
         />
       <GalleryCard
       img={"https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
       link={""}
       linkText={"Chicagoland Recreational Park, IL"}
         />
       <GalleryCard
       img={"https://images.pexels.com/photos/1320737/pexels-photo-1320737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
       link={""}
       linkText={"Navy shipyard #123, Norfolk, VA"}
         />
       <GalleryCard
       img={"https://images.pexels.com/photos/220885/pexels-photo-220885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
       link={""}
       linkText={"Yahoo's Data Center"}
         />
       <GalleryCard
       img={"https://images.pexels.com/photos/1091430/pexels-photo-1091430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
       link={""}
       linkText={"Tesla's Gigafactory"}
         />
       <GalleryCard
       img={"https://images.pexels.com/photos/443399/pexels-photo-443399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
       link={""}
       linkText={"Trump's Biggest Tower in Arlington, Virginia"}
         />
       </div>
       </div>
      </div>
    </div>
  );
};

export default SectionAbout;
