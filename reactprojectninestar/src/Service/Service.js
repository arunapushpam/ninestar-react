import React from 'react'
import './Service.css';
const Service = () => {
  return (
    <>
        <section className="page3" id="Service">
		<div className="container">
			<div className="service">
				<h2>Services</h2>
				<h1>Check out the great services we offer</h1>
			</div>
			
	
			<div className="row">
				<div className="col-sm-12 col-md-6 col-lg-3  ">
					<div className="ser shadow-sm">
						<iconify-icon icon="bxl:dribbble"></iconify-icon>
						<h5>Lorem Ipsum</h5>
						<p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
					</div>
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<div class="ser shadow-sm">
						<iconify-icon icon="bx:file"></iconify-icon>
						<h5>Sed ut perspiciatis</h5>
						<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
					</div>
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<div className="ser shadow-sm">
						<iconify-icon icon="bx:tachometer"></iconify-icon>
						<h5>Magni Dolores</h5>
						<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</p>
					</div>
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<div className="ser shadow-sm">
						<iconify-icon icon="bx:world"></iconify-icon>
						<h5>Nemo Enim</h5>
						<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}

export default Service
