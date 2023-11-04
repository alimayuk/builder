import BlogCard from "../BlogCard/BlogCard"
import "./BlogCardSide.css"

const BlogCardSide = () => {
  return (
    <div className="BlogCardSide">
      <div className="container">
      <BlogCard
      headText={"The most common mistakes when managing personal finances"}
      date={" 14.05.2017"}
      photo={"https://template63703.motopreview.com/mt-demo/63700/63703/mt-content/uploads/2017/05/mt-0950-blog-img7.jpg"}
      desc={"The ability to manage money competently is especially valuable quality in the conditions of financial crisis, when the purchasing power of the population is shrinking, inflation is rising, and currency exchange rates are completely unpredictable. Below are the common mistakes related to money affairs along with financial planning advice to help manage your own finances properly."}
      />
      </div>
    </div>
  )
}

export default BlogCardSide
