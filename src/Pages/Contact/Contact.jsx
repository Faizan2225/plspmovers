import React, { useState, useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useAlert } from "react-alert";

const Contact = () => {
	const alert = useAlert();

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_31lisrh",
				"template_p0redbs",
				form.current,
				"MS704aMmEvFXxLS4f"
			)
			.then(() => {
				alert.success(
					"Your message has been sent. We shall get back to you as soon as possible."
				);
			});
	};

	return (
		<div className="contact-page">
			<div className="block-heading">
				<h3>Contact Us</h3>
				<hr />
			</div>
			<div className="contact-block">
				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						className="form-name"
						name="name"
						required
						placeholder="Name"
					/>
					<input
						type="email"
						className="form-email"
						name="email"
						required
						placeholder="Email"
					/>
					<input
						type="number"
						className="form-num"
						name="number"
						required
						placeholder="Phone Number"
					/>
					<input
						type="text"
						className="form-service"
						name="service"
						required
						placeholder="Service you want to discuss"
					/>
					<textarea
						type="text"
						className="form-msg"
						name="message"
						required
						placeholder="Your Message..."
					/>
					<button type="submit">Send Message</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
