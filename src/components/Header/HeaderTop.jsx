import "./header.css"
import {FaLocationDot} from "react-icons/fa6"
import {BiLogoFacebookCircle,BiLogoInstagramAlt, BiLogoLinkedinSquare} from "react-icons/bi"
const HeaderTop = () => {
  return (
    <div className="headerTop">
       <div className="headerTopWrapper">
       <div className="headerText">
        If you can envision it, then we can build it!
        </div>
        <div className="location">
        <FaLocationDot className="icon"/> 11559 Ventura Boulevard, Studio City, CA 91604
        </div>
        <div className="socialsIcons">
            <BiLogoFacebookCircle/>
            <BiLogoInstagramAlt/>
            <BiLogoLinkedinSquare/>
        </div>
       </div>
    </div>
  )
}

export default HeaderTop