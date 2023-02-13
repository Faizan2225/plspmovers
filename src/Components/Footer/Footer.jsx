import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="nav-left">
				<div className="footer-services">
					<h3>Services</h3>
					<hr />
					<ul>
						<li>
							<span></span>Moving & Packing
						</li>
						<li>
							<span></span>Relocation
						</li>
						<li>
							<span></span>Car Transport
						</li>
						<li>
							<span></span>Domestic & Internation Cargo
						</li>
						<li>
							<span></span>Project Logistics
						</li>
						<li>
							<span></span>Air & Sea Freight
						</li>
						<li>
							<span></span>Import & Export
						</li>
						<li>
							<span></span>Logistics Solutions
						</li>
					</ul>
				</div>
				<div className="footer-contact">
					<h3>Contact Details</h3>
					<hr />
					<div>
						<div>
							<h4>Office</h4>
							<p>
								Suite # 10, Second Floor, Rahim Complex, Main Market Gulberg-II,
								Lahore, Pakistan
							</p>
						</div>
						<div>
							<h4>Cell</h4>
							<p>+92-321-4264526</p>
						</div>
						<div>
							<h4>Email</h4>
							<p>plspmovers@yahoo.com</p>
						</div>
					</div>
				</div>
			</div>
			<div className="nav-right">
				<img src={logo} alt="" />
			</div>
		</footer>
	);
};

export default Footer;
