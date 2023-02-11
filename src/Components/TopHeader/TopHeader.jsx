import React from "react";
import "./TopHeader.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import useWindowWidth from "../../Hooks/useScreenWidth/useScreenWidth";

const TopHeader = () => {
	const width = useWindowWidth();

	if (width < 990) {
		return (
			<div className="top-header-2">
				<div>
					<div className="contant-box">
						<CallIcon />
						<h5>
							<a href="tel:+92-321-4264526" className="pnumber">
								+92-321-4264526
							</a>
						</h5>
					</div>
					<div className="email-box">
						<EmailIcon />
						<h5>plspmovers@yahoo.com</h5>
					</div>
				</div>
				<div className="address-box">
					<LocationOnIcon className="icon" />
					<h5>
						Suite # 10, Second Floor, Rahim Complex, Main Market Gulberg-II,
						Lahore, Pakistan
					</h5>
				</div>
			</div>
		);
	} else {
		return (
			<div className="top-header">
				<div className="address-box">
					<LocationOnIcon />
					<h5>
						Suite # 10, Second Floor, Rahim Complex, Main Market Gulberg-II,
						Lahore, Pakistan
					</h5>
				</div>
				<div className="contant-box">
					<CallIcon />
					<h5>
						<a href="tel:+92-321-4264526" className="pnumber">
							+92-321-4264526
						</a>
					</h5>
				</div>
				<div className="email-box">
					<EmailIcon />
					<h5>plspmovers@yahoo.com</h5>
				</div>
			</div>
		);
	}
};

export default TopHeader;
