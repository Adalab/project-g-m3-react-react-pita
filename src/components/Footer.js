	import React from "react";
	import logoAdalab from "./../images/logo-adalab-80px.png";
	import PropTypes from 'prop-types';


	class Footer extends React.Component {
		render() {
		  return (
	<React.Fragment>
	<footer className="page__footer">
				{" "}
				<span className="footer__copyright">
				Awesome profile-cards @2019
				</span>
				<a
				className="footer__link"
				href={this.props.linkAdalab}
				target="blank"
				>
				<img
					className="footer__logo"
					src={logoAdalab}
					alt="Logotipo de Adalab"
				/>
				</a>
			</footer>
		</React.Fragment>
		  ); 
		  }
		}

		Footer.propTypes = {
			linkAdalab: PropTypes.string
		}; 
	export default Footer; 