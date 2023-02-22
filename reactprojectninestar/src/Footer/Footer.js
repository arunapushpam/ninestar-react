import React from 'react'
import './Footer.css'
const Footer = () => {
  return (

      <>
      <section className="page10">
		<div className="container">
			<div className="row">
				<div className="col col-sm-12 col-md-6 col-lg-3">
					<div className="nine">
						<h3>Ninestars</h3>
						<p> A108 Adam Street </p>
						<p>  New York, NY 535022</p>
						<p> United States </p>
						<div class="emails">
							<p><b>Phone:</b> +1 5589 55488 55</p>
							<p><b>Email:</b> info@example.com</p>
						</div>
					
					</div>
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<div className="use">
						<h3>Useful  Links</h3>
						<ul>
                            <li><iconify-icon icon="bx:chevron-right"></iconify-icon>
                            <a href="#">Home</a></li>
                            <li><iconify-icon icon="bx:chevron-right"></iconify-icon>
                            <a href="#">About</a></li>
                            <li><iconify-icon icon="bx:chevron-right"></iconify-icon>
                            <a href="#">Services</a></li>
                            <li><iconify-icon icon="bx:chevron-right"></iconify-icon>
                            <a href="#">Teams of Services</a></li>
                            <li><iconify-icon icon="bx:chevron-right"></iconify-icon>
                            <a href="#">Privacy policy</a></li>
                        </ul>
					</div>
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<div className="use">
						<h3>Our services</h3>
						<ul>
                            <li><iconify-icon icon="bx:chevron-right"></iconify-icon>
                            <a href="#">Web design</a></li>
                            <li><iconify-icon icon="bx:chevron-right"></iconify-icon>
                            <a href="#">Web development</a></li>
                            <li><iconify-icon icon="bx:chevron-right"></iconify-icon>
                            <a href="#">Product Management</a></li>
                            <li><iconify-icon icon="bx:chevron-right"></iconify-icon>
                            <a href="#">Marketing</a></li>
                            <li><iconify-icon icon="bx:chevron-right"></iconify-icon>
                            <a href="#">Graphic Design</a></li>

                        </ul>
						
					</div>
				</div>
				<div className="col col-sm-12 col-md-6 col-lg-3">
					<div className="net">
						<h3>Our Social Networks</h3>
						<p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
					</div>
						<div className="twitter">
							<div className="twit">
								<iconify-icon icon="bi:twitter"></iconify-icon>
							</div>
							<div className="twit">
								<iconify-icon icon="bi:facebook"></iconify-icon>
							</div>
							<div className="twit">
								<iconify-icon icon="bi:instagram"></iconify-icon>
							</div>
							<div className="twit">
								<iconify-icon icon="bxl:skype"></iconify-icon>
							</div>
							<div className="twit">
								<iconify-icon icon="bi:linkedin"></iconify-icon>
							</div>
							
						</div>
				</div>
			</div>
		</div>
	</section>
      </>
    
  )
}

export default Footer
