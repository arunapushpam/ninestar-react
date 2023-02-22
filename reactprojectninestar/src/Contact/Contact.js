import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    
    <>
        <section className="page8" id="Contact">
		<div className="container">
			<div className="service">
				<h2>Contact Us</h2>
				<h1>Contact us the get started</h1>
			</div>
			<div className="contact">
				<div className="row">
					<div className="col-lg-5 d-flex align-items-stretch;">
						<div className="info">
							<div className="address">
								<div className="info1">
									<iconify-icon icon="bi:geo-alt"></iconify-icon>
								</div>
								<h4>Location:</h4>
								<p>A108 Adam Street, New York, NY 535022</p>
							</div>
							<div className="email">
								<div className="info1">
									<iconify-icon icon="bi:envelope"></iconify-icon>
								</div>
								<h4>Email:</h4>
								<p>info@example.com</p>
							</div>
							<div className="phone">
								<div className="info1">
									<iconify-icon icon="bi:phone"></iconify-icon>
								</div>
								<h4>Call:</h4>
								<p>+1 5589 55488 55s</p>
							</div>
							<div className="map">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63068.03260541834!2d77.38679026616693!3d8.90262966237057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b042658f6756999%3A0x65c163fa24eb85b5!2sKeezhapavur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1666712680232!5m2!1sen!2sin" w height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
							</div>
						</div>
					</div>
					<div className="col-lg-7 d-flex align-items-stretch;">
						<div className="fname info" >
							<div className="row">
								<div className="form-group col-md-6 mt-1">
									<label for="name">Your Name</label>
									<input type="text"  className="form-control" placeholder="Your Name"></input>
								</div>
								<div className="form-group col-md-6 mt-1">
									<label for="name">Your Email</label>
									<input type="Email"  className="form-control" placeholder="Your Email"></input>
								</div>
								<div className="form-group col-md-12 mt-1">
									<label for="name">Subject</label>
									<input type="text"  className="form-control" placeholder="Subject"></input>
								</div>
								<div className="form-group col-md-12 mt-4">
									<label for="name">Message</label>
									<textarea name="message"  className="form-control" rows="10" cols="50"></textarea>
								</div>
								<div class="formbut text-center mt-3" >
									<button type="button" className="btn">Send Message</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>

  )
}

export default Contact
