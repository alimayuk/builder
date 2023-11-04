import "./heroSection.css";

const HeroSection = ({ bgImg, hText, subText }) => {
  return (
    <div className="HeroSection" style={{ backgroundImage: `url("${bgImg}")` }}>
    <div className="container">
	<div className="content ">
        <h1>{hText}</h1>
        <h3>{subText}</h3>
      </div>
	</div>
    </div>
  );
};

export default HeroSection;
