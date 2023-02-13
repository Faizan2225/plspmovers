import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import useWindowWidth from "../../Hooks/useScreenWidth/useScreenWidth";

const Header = () => {
	const width = useWindowWidth();

	if (width < 450) {
		return <div></div>;
	} else {
		return (
			<div className="header">
				<div className="header-links-box">
					<div>
						<Link to="/" style={{ textDecoration: "none" }}>
							<h4>Home</h4>
						</Link>
					</div>
					<div>
						<Link to="/services" style={{ textDecoration: "none" }}>
							<h4>Services</h4>
						</Link>
					</div>
					<div>
						<Link to="/contact" style={{ textDecoration: "none" }}>
							<h4>Contact Us</h4>
						</Link>
					</div>
					<div>
						<Link to="/gallery" style={{ textDecoration: "none" }}>
							<h4>Gallery</h4>
						</Link>
					</div>
				</div>
			</div>
		);
	}
};

export default Header;
