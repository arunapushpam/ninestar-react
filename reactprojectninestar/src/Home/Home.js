import React from 'react'
import About from '../About/About';
import Client from '../Client/Client';
import Portfolio from '../Portfolio/Portfolio';
import Faq from '../Faq/Faq';
import Service from '../Service/Service';
import Teams from '../Teams/Teams';
import './Home.css';
import Contact from '../Contact/Contact';
import Join from '../Join/Join';
import Footer from '../Footer/Footer';
import Copyright from '../Copyright/Copyright';

const Home = () => {
  return (
    <>
    <section  className="header">
		<nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-2">
			<div className="container">
				<a className="navbar-brand fs-2 secondary-color" href="">Ninestars</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item ">
							<a className="nav-link active pri-color" aria-current="home" href="#" >Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link page" href="#About">About Us</a>
						</li>
						<li className="nav-item">
							<a className="nav-link page" href="#Service">Services</a>
						</li>
						<li className="nav-item">
							<a className="nav-link page" href="#Portfolio">Portfolio</a>
						</li>
						<li className="nav-item">
							<a className="nav-link page" href="#Teams">Team</a>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link  page dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Dropdown
							</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<li><a className="dropdown-item" href="">Dropdown1</a></li>
									<li><a className="dropdown-item" href="">Dropdown2</a></li>
									<li><a className="dropdown-item" href="">Dropdown3</a></li>
									<li><a className="dropdown-item" href="">Dropdown4</a></li>
									<li><a className="dropdown-item" href="">Dropdown5</a></li>
								</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link page" href="">Contact</a>
						</li>
						<button type="button" className="btn btn-danger rounded-pill get">Get Started</button>
					</ul>
				</div>
			</div>
		</nav>
	</section>
    <section className="page1" id="Home">
		<div className="container"> 
			<div className="row ">
				<div className="col-sm-12 col-md-12 col-lg-6 order-1 order-lg-0">
					<h1>Bettter digital experience with Ninestars</h1>
					<p>We are team of talented designers making websites with Bootstrap</p>
					<div className="button">
						<button type="button" className=" text-white px-4">Get Started</button>
					</div>
				</div>
				<div className="col-sm-12 col-md-12 col-lg-6 ninestar order-0 order-lg-1" >
					<img  src="https://bootstrapmade.com/demo/templates/Ninestars/assets/img/hero-img.svg"  alt="" width="100%" /> 
				</div>
			</div>
		</div>
	</section>
	<About />
	<Service />
	<Portfolio />
	<Faq />
	<Teams />
	<Client />
	 <Contact /> 
	 <Join />
	<Footer />
	<Copyright />
    </>
    
  )
}

export default Home
