import "./ServicesCard.css"

const ServicesCard = ({img,hText,subHtext,text}) => {
  return (
    <div className="row">
        <div className="image">
        <img
          src={img}
          alt=""
        />
        </div>
      
        <div className="content">
          <h1>{hText}</h1>
          <h3>
           {subHtext}
          </h3>
          <p>
            {text}
          </p>
        </div>
      </div>
  )
}

export default ServicesCard
