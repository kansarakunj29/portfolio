import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const mailtoLink = `mailto:${INFO.main.email}?subject=${encodeURIComponent(
			formData.subject || "New message from your website"
		)}&body=${encodeURIComponent(
			`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
		)}`;

		window.location.href = mailtoLink;
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />

				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">Get in Touch</div>

						<div className="subtitle contact-subtitle">
							Have a question or want to collaborate? Fill out the
							form below or email me directly at{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							.
						</div>

						<form className="contact-form" onSubmit={handleSubmit}>
							<div className="form-group">
								<label htmlFor="name">Name</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="form-group">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</div>

							<div className="form-group">
								<label htmlFor="subject">Subject</label>
								<input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="message">Message</label>
								<textarea
									id="message"
									name="message"
									rows="5"
									value={formData.message}
									onChange={handleChange}
									required
								></textarea>
							</div>

							<button type="submit" className="contact-button">
								Send Message
							</button>
						</form>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
