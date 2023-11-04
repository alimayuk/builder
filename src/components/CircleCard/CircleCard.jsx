import './CircleCard.css'

const CircleCard = ({score,text}) => {
  return (
    <div className='CircleCard'>
      <div className="score">{score}</div>
      <p>{text}</p>
    </div>
  )
}

export default CircleCard
