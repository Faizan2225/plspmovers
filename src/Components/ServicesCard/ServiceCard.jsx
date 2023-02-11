import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ heading, text, img }) => {
	return (
		<div className="service-card">
			<div></div>
			<h3>{heading}</h3>
			<p>{text}</p>
			<img src={img} alt="" />
		</div>
	);
};

export default ServiceCard;
