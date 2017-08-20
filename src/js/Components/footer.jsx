
const React = require('react');

class Footer extends React.Component {
	
	render() {
		return (<footer>
		<div className = "Items">
			<a href="#"><span className="icon-twitter"></span></a>
			<a href="#"><span className="icon-facebook"></span></a>
			<a href="#"><span className="icon-instagram"></span></a>
		</div>

		<p className = "LastP">&copy; Terms &amp; conditions | Design & Development: <a href="#">JoaoRacedo</a></p>
		
		</footer>);
	}
}

export default Footer;
