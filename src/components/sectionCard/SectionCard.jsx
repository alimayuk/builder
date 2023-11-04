import "./card.css";

const SectionCard = ({ icon, headtext, subtext }) => {
  return (
    <div className="sectionCard">
      <img src={icon} alt="" />
      <div className="content">
        <h3>{headtext}</h3>
        <p>{subtext}</p>
      </div>
    </div>
  );
};

export default SectionCard;
