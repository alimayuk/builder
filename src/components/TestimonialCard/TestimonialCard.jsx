import './TestimonialCard.css'
import {FaQuoteLeft} from "react-icons/fa6"
const TestimonialCard = ({img,title,text}) => {
  return (
    <div className='TestimonialCard'>
    <img src={img} alt="" />
    <FaQuoteLeft className='icon' />
    <p className='text'>{text}</p>
    <h2>- {title}</h2>
    </div>
  )
}

export default TestimonialCard
