import HeaderNav from "../../components/Header/HeaderNav"
import HeaderTop from "../../components/Header/HeaderTop"
import "./navbar.css"
const Navbar = () => {
  return (
    <div className="navbarContainer">
    <HeaderTop/>
    <HeaderNav/>
    </div>
  )
}

export default Navbar