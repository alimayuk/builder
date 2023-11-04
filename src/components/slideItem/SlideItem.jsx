import React from 'react'
import "./slideItem.css"
import { Link } from 'react-router-dom'
const SlideItem = ({title,content,btnText,btnLink}) => {
  return (
    <div className="slideItem">
              <h1>{title}</h1>
              <h3>
              {content}              </h3>
              <Link to={btnLink}  className="swiperBtn">{btnText} </Link>
            </div>
  )
}

export default SlideItem