import "./BlogCard.css"
const BlogCard = ({headText,date,photo,desc}) => {
  return (
    <div className="BlogCard">
        <h2>{headText}</h2>
        <p>{date}</p>
        <img src={photo} alt="" />
        <p className="desc">{desc}</p>
        <button className="cardBtn">MORE</button>
    </div>
  )
}

export default BlogCard