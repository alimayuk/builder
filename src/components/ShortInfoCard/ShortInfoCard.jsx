import './ShortInfoCard.css'

const ShortInfoCard = ({title,subText}) => {
  return (
    <div className='ShortInfoCard'>
        <h3>{title}</h3>
        <p>{subText}</p>
    </div>
  )
}

export default ShortInfoCard