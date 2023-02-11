import React from "react";
import "./ServiceBlock.css";

const ServiceBlock = ({ img, text, heading, direction }) => {
	return (
		<div className="serviceblock" style={{ flexDirection: direction }}>
			<div className="dark-div"></div>
			<div
				className="serviceblock-1"
				style={{
					backgroundImage: `url(${img})`,
					backgroundSize: "cover",
				}}
			></div>
			<div className="serviceblock-2">
				<div>
					<div className="service-heading-s">
						<h2>{heading}</h2>
						<hr />
					</div>
					<p>{text}</p>
				</div>
			</div>
		</div>
	);
};

export default ServiceBlock;
