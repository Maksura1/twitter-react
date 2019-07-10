import React, {Component} from 'react'
import './Home.css'
import Profile from './Profile'
import Tweet from './Tweet'

class Home extends Component {
	// Data
	// Functions
	// Render
	render() {
		return (
			<div id="wrap">
				<Profile />
				<Tweet />
			</div>
		)
	}
}

export default Home;
