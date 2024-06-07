import React from "react";

function Footer() {
	return (
		<footer className="py-5 bg-dark text-white-50">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-3 mb-4">
						<h5>About Us</h5>
						<ul className="nav flex-column">
							<li className="nav-item">
								<a className="nav-link" href="#">
									Our Story
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Our Team
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Contact Us
								</a>
							</li>
						</ul>
					</div>
					<div className="col-md-3 mb-4">
						<h5>Resources</h5>
						<ul className="nav flex-column">
							<li className="nav-item">
								<a className="nav-link" href="#">
									Blog
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									FAQs
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Support
								</a>
							</li>
						</ul>
					</div>
					<div className="col-md-3 mb-4">
						<h5>Follow Us</h5>
						<ul className="nav flex-column">
							<li className="nav-item">
								<a className="nav-link" href="#">
									<i className="fab fa-facebook-f" /> Facebook
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									<i className="fab fa-twitter" /> Twitter
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									<i className="fab fa-instagram" /> Instagram
								</a>
							</li>
						</ul>
					</div>
					<div className="col-md-3 mb-4">
						<h5>Subscribe to our newsletter</h5>
						<p>Monthly digest of what's new and exciting from us.</p>
						<form>
							<div className="input-group mb-3">
								<input
									type="email"
									className="form-control"
									placeholder="Email address"
									aria-label="Email address"
									aria-describedby="button-addon2"
								/>
								<button
									className="btn btn-primary"
									type="button"
									id="button-addon2"
								>
									Subscribe
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className="text-center py-3">
					<p>
						&copy; {new Date().getFullYear()} Your Company Name. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
