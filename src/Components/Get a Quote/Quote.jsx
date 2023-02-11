import React from "react";
import "./quote.css";
import { Link } from "react-router-dom";

const Quote = () => {
	return (
		<div className="quote-block">
			<h3>Get a Quote, Get a Move on!</h3>
			<Link to="/contact">
				<button>Request a Quote</button>
			</Link>
		</div>
	);
};

export default Quote;
