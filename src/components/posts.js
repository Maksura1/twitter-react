import React, {Component} from 'react'
import './Profile.css'

class Post extends Component {
	// Data
	state = {
		post: this.props.post
	}
	// Functions
	//to check if props are printing
	// componentWillMount(){
	// 	console.log(this.state.post)
	// }

	// Render
	render() {
		return (
			<div className="wrap p-2 m-2 tweet">

				<span className="mr-2 userName"><a href="">{this.state.post.userName}</a></span>
				<span className="mr-2 date">{this.state.post.date}</span>
				<span className="mr-2 time">{this.state.post.time}</span>
				<nav><div className="body">{this.state.post.body}</div></nav>
				<nav>
				<span><button className="hashtag">#{this.state.post.hashtag}</button></span>
				<span> <button className="like">Like:</button>{this.state.post.like}</span>
				</nav>

			</div>
		)
	}
}


export default Post
