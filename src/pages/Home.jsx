import React from "react";
import { Container, Row, Col, Button, hr } from "react-bootstrap";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import * as Icon from "react-bootstrap-icons";

const Home = () => {
	return (
		<div>
			<Navbar />
			<hr />
			<section className="heroes-section py-5">
				<Container className="text-center">
					<img
						src="hero-image.jpg"
						alt="Hero Image"
						className="img-fluid mb-4"
					/>
					<h1 className="display-3">Welcome to TechBrand</h1>
					<p className="lead">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
						odio. Praesent libero. Sed cursus ante dapibus diam.
					</p>
					<Button variant="primary" size="lg" className="mt-4">
						Learn More
					</Button>
				</Container>
			</section>
			<hr />
			<section className="features-section py-5">
				<Container>
					<Row className="justify-content-center">
						<Col md={4} className="mb-4">
							<h2>Artificial Intelligence</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
								nec odio. Praesent libero. Sed cursus ante dapibus diam.
							</p>
						</Col>
						<Col md={4} className="mb-4">
							<h2>Blockchain</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
								nec odio. Praesent libero. Sed cursus ante dapibus diam.
							</p>
						</Col>
						<Col md={4} className="mb-4">
							<h2>Internet of Things (IoT)</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
								nec odio. Praesent libero. Sed cursus ante dapibus diam.
							</p>
						</Col>
					</Row>
				</Container>
			</section>
			<hr />
			<section className="features-with-title py-5">
				<Container>
					<h2 className="text-center mb-4">Features with title</h2>
					<Row className="justify-content-center">
						<Col md={6} className="mb-4">
							<h2 className="fw-bold text-body-emphasis">
								Left-aligned title explaining these awesome features
							</h2>
							<p className="text-body-secondary">
								Paragraph of text beneath the heading to explain the heading.
								We'll add onto it with another sentence and probably just keep
								going until we run out of words.
							</p>
							<Button variant="primary" size="lg" className="mt-4">
								Primary button
							</Button>
						</Col>
						<Col md={6} className="mb-4">
							<Row className="row-cols-1 row-cols-sm-2 g-4">
								<Col className="mb-4">
									<div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
										<Icon.Collection />
									</div>
									<h4 className="fw-semibold mb-0 text-body-emphasis">
										Featured title
									</h4>
									<p className="text-body-secondary">
										Paragraph of text beneath the heading to explain the
										heading.
									</p>
								</Col>
								<Col className="mb-4">
									<div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
										<Icon.GearFill />
									</div>
									<h4 className="fw-semibold mb-0 text-body-emphasis">
										Featured title
									</h4>
									<p className="text-body-secondary">
										Paragraph of text beneath the heading to explain the
										heading.
									</p>
								</Col>
								<Col className="mb-4">
									<div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
										<Icon.Speedometer />
									</div>
									<h4 className="fw-semibold mb-0 text-body-emphasis">
										Featured title
									</h4>
									<p className="text-body-secondary">
										Paragraph of text beneath the heading
									</p>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</section>
			<hr />
			<Footer />
		</div>
	);
};

export default Home;
