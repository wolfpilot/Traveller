import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

	return (
		<footer className="footer">
			<Link className="footer__credit hyperlink hyperlink--bordered" to="https://unsplash.com/developers" target="_blank">Made with <span className="char char--heart">&#10084;</span> using Unsplash API</Link>
		</footer>
	);
}

export default Footer;
