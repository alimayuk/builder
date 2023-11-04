import './SeniorCard.css'

const SeniorCard = ({img,title,subTitle,text}) => {
  return (
    <div className='SeniorCard'>
    <img src={img} alt="" />
    <h2>{title}</h2>
    <h4>{subTitle}</h4>
    <p>{text}</p>
    </div>
  )
}

export default SeniorCard
