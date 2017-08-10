import React from 'react';

class Nav extends React.Component {
	render() {
		return (<nav>
		<ul>
    		<li><a href="#intro">Intro</a></li>
    		<li><a href="#one">What I Do</a></li>
    		<li><a href="#two">Who I Am</a></li>
    		<li><a href="#work">My Work</a></li>
    		<li><a href="#contact">Contact</a></li>
    	</ul>
		</nav>);
	}
}

export default Nav;
