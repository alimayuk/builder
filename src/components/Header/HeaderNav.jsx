import { useRef} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css"
import { Link } from "react-router-dom";

const HeaderNav = () => {
    const navRef = useRef();
	
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header className="headerNav">
			<div className="container">
            <Link to="/" className="logo">
            <span className="dot"></span><h3 className="logoText">Builder</h3>
            </Link>
			<nav className="nav" ref={navRef}>
				<Link to="/about" onClick={showNavbar} >About</Link>
				<Link to="/subcontractors" onClick={showNavbar} >SUBCONTRACTORS</Link>
				<Link to="/services" onClick={showNavbar} >Services</Link>
				<Link to="/projects" onClick={showNavbar} >projects </Link>
                <Link to="/blog" onClick={showNavbar} >blog</Link>
                <Link to="/contact" onClick={showNavbar} >contact</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
            </div>
		</header>
	);
}

export default HeaderNav