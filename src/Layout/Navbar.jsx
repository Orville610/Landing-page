// src/layout/Navbar.js
import React from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";

const Navbar = () => {
	return (
		<BootstrapNavbar bg="dark" variant="dark" expand="lg">
			<Container>
				<BootstrapNavbar.Brand href="#">TechBrand</BootstrapNavbar.Brand>
				<BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
				<BootstrapNavbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#about">About</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
					</Nav>
				</BootstrapNavbar.Collapse>
			</Container>
		</BootstrapNavbar>
	);
};

export default Navbar;
