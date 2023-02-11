import React from "react";
import ServiceBlock from "../../Components/ServiceBlock/ServiceBlock";
import useWindowWidth from "../../Hooks/useScreenWidth/useScreenWidth";
import "./Services.css";

const Services = () => {
	const width = useWindowWidth();
	const dire = width < 650 ? "column" : "row";

	return (
		<>
			<div className="block-heading">
				<h3>Services</h3>
				<hr />
			</div>
			<h4 className="head-1">
				PLSP offers the following services depending on customer's needs
			</h4>
			<ServiceBlock
				img="src/assets/Services/packing.jpg"
				heading="Packing & Moving"
				text="Experience the ease of moving with PLSP Movers' expert packing and moving services. Our skilled team takes care of every detail, ensuring your possessions are packed and transported with the utmost care. From start to finish, we provide a seamless and stress-free experience. Trust PLSP to make your move effortless."
				imgtext="Effortless moves, expertly handled."
				direction={width > 650 ? `${dire}-reverse` : `${dire}`}
			/>
			<ServiceBlock
				img="src/assets/Services/relocation.jpg"
				heading="Relocations"
				text="Make your next move a breeze with PLSP Movers' comprehensive relocation services. Whether you're relocating your home, office, domestically or internationally, our experienced team is here to ensure a smooth and stress-free transition. From start to finish, we take care of all the details, ensuring that your possessions are safely packed and transported to your new location. Trust PLSP to make your next move effortless."
				direction={width > 650 ? `${dire}` : "column"}
			/>
			<ServiceBlock
				img="src/assets/Services/car.jpg"
				heading="Car Transport"
				text="Ensure the safe and timely transport of your prized possession with PLSP Movers' car carrier services. Our team of experts handle every aspect of the process, from pick-up to delivery, with the utmost care and attention to detail. We use state-of-the-art equipment and technology to ensure the safe transport of your vehicle. Trust PLSP to take the stress out of car transportation."
				direction={width > 650 ? `${dire}-reverse` : `${dire}`}
			/>
			<ServiceBlock
				img="src/assets/cardimg/l.jpg"
				heading="Cargo"
				text="Let PLSP Movers simplify the complexities of domestic and international cargo transportation. With years of experience and a global network of partners, we provide efficient and cost-effective solutions for all your cargo needs. Our team of experts ensures that each shipment is handled with care and delivered on time, every time. Experience hassle-free cargo transportation with PLSP Movers."
				direction={width > 650 ? `${dire}` : "column"}
			/>
			<ServiceBlock
				img="src/assets/services/fr.jpg"
				heading="Air & Sea Freight"
				text="Transport your cargo to anywhere in the world with ease and confidence with PLSP Movers' Air and Sea Freight services. Our extensive network and expertise in international shipping allow us to provide reliable, cost-effective solutions for all your freight needs. From air cargo to sea freight, we have the resources and experience to handle even the most complex logistics requirements. Trust PLSP Movers to get your goods where they need to go."
				direction={width > 650 ? `${dire}-reverse` : `${dire}`}
			/>
			<ServiceBlock
				img="src/assets/services/ie.jpg"
				heading="Import & Export"
				text="Transport your cargo to anywhere in the world with ease and confidence with PLSP Movers' Air and Sea Freight services. Our extensive network and expertise in international shipping allow us to provide reliable, cost-effective solutions for all your freight needs. From air cargo to sea freight, we have the resources and experience to handle even the most complex logistics requirements. Trust PLSP Movers to get your goods where they need to go."
				direction={width > 650 ? `${dire}` : "column"}
			/>
			<ServiceBlock
				img="src/assets/services/ls.jpg"
				heading="Logistic Solutions"
				text="Transport your cargo to anywhere in the world with ease and confidence with PLSP Movers' Air and Sea Freight services. Our extensive network and expertise in international shipping allow us to provide reliable, cost-effective solutions for all your freight needs. From air cargo to sea freight, we have the resources and experience to handle even the most complex logistics requirements. Trust PLSP Movers to get your goods where they need to go."
				direction={width > 650 ? `${dire}-reverse` : `${dire}`}
			/>
		</>
	);
};

export default Services;
