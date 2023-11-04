import  './ContactComp.css'

const ContactComp = ({text}) => {
  return (
    <div className='ContactComp'>
        <div className="text">{text}</div>
        <button>CONTACT US</button>
    </div>
  )
}

export default ContactComp