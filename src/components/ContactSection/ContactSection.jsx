import "./ContactSection.css"

const ContactSection = () => {
  return (
    <div className='ContactSection'>
    <div className="container">
    <div className="formSide">
      <div className="contact">
        <h1>Contacts</h1>
        <p>Address: <span>11559 Ventura Boulevard, Studio
City, CA 91604</span></p>
        <p>Phone: <span>123.456.7891</span></p>
        <p>Fax: <span>123.456.7892</span></p>
        <p>E-mail: <span>builderry@demolink.org</span></p>
      </div>
    <div className="formWrapper">
      <h1>Send us a message</h1>
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
    </div>
  )
}

export default ContactSection