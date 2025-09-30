import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Financial Advisor, passionate about helping clients to plan for their future.
						</div>

						<div className="trusted-partners">
						<h3>Our Trusted Partners</h3>
						<ul>
							<li>
							<img src="../equitable.png" alt="Equitable Life of Canada" />
							{/* <span>Equitable Life of Canada</span> */}
							</li>
							<li>
							<img src="../bmo.png" alt="BMO" />
							{/* <span>BMO</span> */}
							</li>
							<li>
							<img src="../canada-protection.png" alt="Canada Protection Plan" />
							{/* <span>Canada Protection Plan</span> */}
							</li>
							<li>
							<img src="../ivari.png" alt="Ivari" />
							{/* <span>Ivari</span> */}
							</li>
						</ul>

						<style jsx>{`
							.trusted-partners ul {
							list-style: none;
							padding: 0;
							margin: 0;
							}

							.trusted-partners li {
							display: flex;
							align-items: center;
							margin-bottom: 20px;
							}

							.trusted-partners li img {
							height: 50px;
							margin-right: 15px;
							}

							.trusted-partners li span {
							font-size: 18px;
							font-weight: 500;
							color: #333;
							}
						`}</style>
						</div>

						<div className="projects-list">
							<AllProjects />
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

export default Projects;
