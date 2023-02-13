import React from "react";
import "./Home.css";
import useWindowWidth from "../../Hooks/useScreenWidth/useScreenWidth";
import ServiceCard from "../../Components/ServicesCard/ServiceCard";

//pics import
import banner1 from "../../assets/banners/3.png";
import banner2 from "../../assets/banners/2.png";
import director from "../../assets/team/1.jpeg";
import frontlogo from "../../assets/banners/4.jpg";
import materials from "../../assets/cardimg/materials.jpg";
import p from "../../assets/cardimg/p.jpg";
import l from "../../assets/cardimg/l.jpg";

const Home = () => {
	const width = useWindowWidth();
	return (
		<>
			<div className="banner">
				<img src={width < 800 ? banner1 : banner2} alt="banner" />
			</div>
			<div className="intro-box">
				<div className="intro-heading">
					<h3>Introduction</h3>
					<hr />
				</div>
				<div className="intro-main">
					<hr className="left-line-intro" />
					<div className="intro-main-1">
						<p>
							Welcome to{" "}
							<span>
								<strong>PLSP Movers</strong>
							</span>
							, where logistics becomes a delight. Our full-service company is
							dedicated to providing you with premium solutions and exceptional
							customer service. From packing and moving to transportation,
							import, export and relocations, we've got you covered. Our
							experienced team is equipped with a commitment to excellence,
							ensuring each shipment is handled with care and delivered on time,
							every time. Let us make your transition effortless leaving you
							with a peace of mind. Choose PLSP for a truly stress-free
							logistics experience.
						</p>
						<img src={frontlogo} alt="" />
					</div>
				</div>
				<div className="intro-heading">
					<h3>Our Services</h3>
					<hr />
				</div>
				<div className="services-box">
					<ServiceCard
						heading="Door to Door Delivery"
						text="Our door-to-door service guarantees that your packages will be delivered promptly and in perfect condition. Choose PLSP for all your shipping and delivery needs and experience the convenience and reliability of our door-to-door service."
						className="service-card-2"
						img={materials}
					/>
					<ServiceCard
						heading="Packaging"
						text="Our packaging services ensure that your products are handled with care and reach their destination safely. Our team will work with you to design a customized packaging solution to meet your specific needs. Trust PLSP to deliver your products with care."
						className="service-card-2"
						img={p}
					/>
					<ServiceCard
						heading="Logistics"
						text="Our team at PLSP is dedicated to taking care of every step of the process. Trust PLSP for effortless logistics. Our team delivers reliable, on-time shipments. Cost-effective solutions and customer-first approach. PLSP: your partner for smooth logistics."
						className="service-card-2"
						img={l}
					/>
				</div>
				<div className="intro-heading">
					<h3>Why Choose Us</h3>
					<hr />
				</div>
				<div className="whyus-block">
					<div className="text-portion">
						<div>
							<span></span>
							<h4>
								A reputable logistics company has years of experience in the
								industry, providing reliable and efficient solutions to meet
								customer needs.
							</h4>
						</div>
						<div>
							<span></span>
							<h4>
								A reputable logistics company places a high priority on the
								safety and security of shipments, ensuring that goods are
								handled and transported with care.
							</h4>
						</div>
						<div>
							<span></span>
							<h4>
								The company prioritizes customer service, offering support and
								solutions tailored to meet specific needs and requirements.
							</h4>
						</div>
						<div>
							<span></span>
							<h4>
								The company can provide flexible and scalable solutions to
								accommodate changes in demand and meet the evolving needs of
								customers.
							</h4>
						</div>
						<div>
							<span></span>
							<h4>
								The company have a global network and presence, providing
								international transportation and logistics solutions for
								customers looking to expand into new markets.
							</h4>
						</div>
					</div>
				</div>
				<div className="intro-heading">
					<h3>Managing Director</h3>
					<hr />
				</div>
				<div className="team-block">
					<img src={director} alt="" />
					<div className="team-block-2">
						<h3>Chaudhary Azhar Bilal</h3>
						<a href="tel:+9">+92-321-4264526</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
