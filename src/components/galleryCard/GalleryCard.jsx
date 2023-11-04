import { Link } from "react-router-dom";
import "./card.css";

const GalleryCard = ({ img, link,linkText }) => {
  return (
    <div className="GalleryCard">
      <div className="imageContainer">
        <img src={img} alt="building text" />
        <Link to={link} className="imageLink">
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default GalleryCard;
