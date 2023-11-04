import "./SubHero.css"

const SubHero = () => {
  return (
    <div className="SubHero">
        <div className="content">
       <div className="topSide">
       <h1 className="title">Subcontractors</h1>
        <div className="row">
            <p className="rowItem">Builderry Construction Company believes in maintaining strong, long-term partnerships with our current subcontractors. Professionals choose to work with us time after time because they know that our staff and work methods are as efficient as a clockwork! We simultaneously ran numerous well-managed projects, always filed timely payments and supported the businesses’ continued growth. In return, our subcontractors and materials suppliers are productive, committed and centered on doing their best job!</p>
            <p className="rowItem">Builderry success is permanently tied to our subcontractors’ qualifications, expertise and commitment. Because of that we make it vocal to keep creating and maintaining close operational ties with all our current and new subcontractors. Despite having our very own in-house procurement and pre-construction experts, Builderry maintains a corporate subcontractor committee with its primary focus to “keep forging” these important partnerships.</p>
        </div>
        <div className="rowFile">
            <h3>How can we become your subcontractors?</h3>
            <p>Builderry is always looking to sign up new qualified subcontractors and suppliers to partner with. Our award-winning team encourages you to download the Subcontractor Vendor Information Packet below and return the form to builderry@demolink.com, in case you’re interested in a long-term cooperation with us!</p>
            <button>SUBCONTRACTOR VENDOR INFORMATION PACKET</button>
        </div>
       </div>
       <div className="formSide">
        <h1>You can also send us a message using the form below!</h1>
        <form className="form">
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" id="name"/>

            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id=""/>

            <label htmlFor="company">Company</label>
            <input type="text" name="company" id="company" />

            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject" />

            <label htmlFor="message">Your Message</label>
            <textarea  name="message" id="message" />
            <button>SEND</button>
        </form>
       </div>
        </div>
    </div>
  )
}

export default SubHero