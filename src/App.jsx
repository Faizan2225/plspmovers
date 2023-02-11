import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import LogoBlock from "./Components/LogoBlock/LogoBlock";
import TopHeader from "./Components/TopHeader/TopHeader";
import Services from "./Pages/Services/Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Quote from "./Components/Get a Quote/quote";
import Footer from "./Components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";

function App() {
	return (
		<Router>
			<TopHeader />
			<LogoBlock />
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/services" element={<Services />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Quote />
			<Footer />
			<div className="cr-block">
				<h5>PLSP Movers & Movers © 2023 All Rights Reserved.</h5>
			</div>
		</Router>
	);
}

export default App;
