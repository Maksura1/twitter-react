import React, {Component} from 'react'
import './Profile.css'

class Post extends Component {
	// Data
	// Functions
	// Render
	render() {
		return (
			<div className="wrap p-2 m-2 tweet">

				<span className="mr-2 userName"><a href="">@UserName</a></span>
				<span className="mr-2 date"> 9 July, 2019</span>
				<span className="mr-2 time">12:23 PM </span>
				<nav><div class="body" >Hey!! How has it been going? Let's hang out!"</div></nav>
				<nav>
				<span><button className="hashtag"> #FUN </button></span>
				<span><button className="like">Like:</button> 51 </span>
				</nav>

			</div>
		)
	}
}

export default Post
