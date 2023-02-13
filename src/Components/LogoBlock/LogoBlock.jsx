import React, { useRef, useEffect, useState } from "react";
import logo from "../../assets/logo1.png";
import "./LogoBlock.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const LogoBlock = () => {
	const header = useRef(null);
	const [headerT, setHeader] = useState(false);

	const handleMenuClick = () => {
		setHeader(!headerT);

		if (headerT) {
			header.current.style.transform = "translateY(38%)";
		} else {
			header.current.style.transform = "translateY(-61%)";
		}
	};

	return (
		<>
			<div className="header-tabs" ref={header}>
				<Link
					to="/"
					onClick={handleMenuClick}
					style={{ textDecoration: "none" }}
				>
					<div>Home</div>
				</Link>
				<hr />
				<Link
					to="/services"
					onClick={handleMenuClick}
					style={{ textDecoration: "none" }}
				>
					<div>Services</div>
				</Link>
				<hr />
				<Link
					to="/contact"
					onClick={handleMenuClick}
					style={{ textDecoration: "none" }}
				>
					<div>Contact Us</div>
				</Link>
				<hr />
				<Link
					to="/gallery"
					onClick={handleMenuClick}
					style={{ textDecoration: "none" }}
				>
					<div>Gallery</div>
				</Link>
			</div>
			<div className="logo-block">
				<div>
					<img src={logo} alt="" className="logo-block-img" />
					<div className="logo-block-inner">
						<h3 className="logo-block-h3">PACIFIC Logistics Services</h3>
						<h6>Pakistan</h6>
					</div>
				</div>
				<MenuIcon className="menu-icon" onClick={handleMenuClick} />
			</div>
		</>
	);
};

export default LogoBlock;
