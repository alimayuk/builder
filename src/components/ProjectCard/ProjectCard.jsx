import "./ProjectCard.css";

const ProjectCard = ({ img, title, text }) => {
  return (
    <div className="ProjectCard">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
      <button className="cardBtn">View Projects</button>
    </div>
  );
};

export default ProjectCard;
