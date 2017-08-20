
const React = require('react');

class Contact extends React.Component {
	
	render() {
		return (<section className = "FifthSection">
			<div className = "div5">
					<h2 className = "Sec5">Say Hello.</h2>
					<p className = "FifthP">Lorem ipsum dolor sit amet et sapien sed elementum egestas dolore condimentum.</p>
					<form className = "FormContat" method="post" action="#">
						<div><input type="text" name="name" placeholder="Name" /></div>
						<div><input type="email" name="email" placeholder="Email" /></div>
						<div><textarea name="message" placeholder="Message" rows="6"></textarea></div>
						<div>
							<input type="submit" value="Send Message" />
						</div>
					</form>
			</div>
				</section>);
	}
}

export default Contact;
