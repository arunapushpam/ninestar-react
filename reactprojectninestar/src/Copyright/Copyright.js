import React from 'react'
import './Copyright.css'
const Copyright = () => {
  return (
    <>
        <section className="copy">
			<div className="container">
				<div className="copyright">
					<div className="right">
						<p> © Copyright <strong>Ninestars</strong>. All Rights Reserved</p>
					</div>
					<div className="design">
						<p> Designed by <a href="">BootstrapMade</a></p>
					</div>
				</div>
			</div>
		</section>
		
		{/* <script>
        const navLinks=document.querySelectorAll(".nav-item") ;
        const  menuToggle=document.getElementById("navbarNavDropdown");
        let bsCollabse=new bootstrap.Collapse(menuToggle,{toggle:false})
        navLinks.forEach((e) =>{
            e.addEventListener("click",()=>{bsCollabse.toggle()})
        })
      </script> */}
    </>
  )
}

export default Copyright
