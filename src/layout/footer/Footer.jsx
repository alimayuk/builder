import { Link } from "react-router-dom";
import "./footer.css";
import { BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoLinkedinSquare } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
       <div className="footerTopSide">
       <div className="footerLeft">
          <div className="logo">
            <span className="dot"></span>
            <h3 className="logoText">Builder</h3>
          </div>
        </div>
        <div className="footerMid">
          <div className="first">
            <Link to="">PROJECTS</Link>
            <Link to="">SERVICES</Link>
            <Link to="">SUBCONTRACTORS</Link>
          </div>
          <div className="second">
            <Link to="">BLOG</Link>
            <Link to="">ABOUT</Link>
            <Link to="">TERMS OF USE</Link>
          </div>
        </div>
        <div className="footerRight">
          <h2>Newsletter</h2>
          <form className="emailInput">
          <input type="email" placeholder="Email Adress"/>
          <button>SUBSCRIBE</button>
          </form>
          <div className="socialsIcons">
            <BiLogoFacebookCircle/>
            <BiLogoInstagramAlt/>
            <BiLogoLinkedinSquare/>
        </div>
        </div>
       </div>
        
      </div>
    </footer>
  );
};

export default Footer;
