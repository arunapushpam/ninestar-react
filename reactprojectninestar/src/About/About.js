import React from 'react'
import './About.css';
const About = () => {
  return (
    <>
    <section className="page2" id="About">
		<div className="container">
			<div className="row">
				<div className="col-sm-12 col-md-12 col-lg-6">
					<img src="https://bootstrapmade.com/demo/templates/Ninestars/assets/img/about-img.svg"></img>
				</div>
				<div className="col">
					<h1>Voluptatem dignissimos provident quasi</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit.</p>
					<div className="row">
						<div className="col-sm-12 col-md-6 col-lg-6">
							<iconify-icon icon="bx:receipt"></iconify-icon>
							<h5>Corporis voluptates sit</h5>
							<p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
						</div>
						<div className="col">
							<iconify-icon icon="bx:cube-alt"></iconify-icon>
							<h5>Ullamco laboris nisi</h5>
							<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}

export default About
