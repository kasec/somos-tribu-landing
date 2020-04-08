import React from "react"

const Footer = () => (
	<footer>
		<div class="footer-left">
			<h3>Somos<span>Tribu</span><span className="text -marked">.io</span></h3>

			<p class="footer-company-name">somostribu.io &copy; 2020</p>
		</div>

		<div class="footer-center">
			<div>
				<p><span>November 21th Street</span> Durango, Mexico</p>
			</div>
			<div>
				<p>+52 618 126 2923</p>
			</div>
			<div>
				<p><a href="#">contacto@somos-tribu.io</a></p>
			</div>
		</div>
		<div class="footer-right">
			<p class="footer-company-about">
				<span>About the company</span>
				We can create some kinds of web projects and native mobile applications for you.
				You can follow us and watch our activities.
			</p>
			<div class="footer-icons">
				<a href="#">
					<img className="footer-icon" src={'https://image.flaticon.com/icons/svg/1051/1051360.svg'} alt="sun icon"/>
				</a>
				<a href="#">
					<img className="footer-icon" src={'https://image.flaticon.com/icons/svg/1051/1051382.svg'} alt="sun icon"/>
				</a>
				<a href="#">
					<img className="footer-icon" src={'https://image.flaticon.com/icons/svg/1384/1384088.svg'} alt="sun icon"/>
				</a>
				<a href="#">
					<img className="footer-icon" src={'https://image.flaticon.com/icons/svg/1051/1051377.svg'} alt="sun icon"/>
				</a>
			</div>
		</div>
	</footer>
)

export default Footer 