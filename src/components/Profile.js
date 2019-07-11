import React, {Component} from 'react'
 import './Profile.css'
 import Tweet from './Tweet.js'

class Profile extends Component {
	// Data
	// Functions
	// Render
	render() {
		return (
			<div className="container">

				<div className ="row" id="header">
					<div className ="col">

						<span className="mr-4"><a href=""> Home </a></span>
						<span className="mr-4"><a href=""> About </a></span>
						<span className="mr-4"><a href="">Search Here </a></span>
						<span className="mr-4">Have an account? <a href="">Login</a></span>

				</div>


				<div className="row" id="jumbotron">
					<div className="col">

					</div>
				</div>

				<div className="row pt-4 pb-4" id="icons">

					<div className="col-3">
						<div id="profile"></div>
					</div>

					<div id='menuTab' className="col-6"  >
		        <span className="mr-4"> <a href=""> Tweets </a></span>
						 <span className="mr-4"><a href=""> Folllowers </a></span>
						 <span className="mr-4"><a href=""> Likes</a></span>
					</div>
					<div className="col-3" id="following" >
		         <a href=""> Following </a>
					</div>

				</div>

				<div className="row" id="main">
					<div className="col-3" id="sidebar" >
		        <h5>Poonam Alam</h5>

						<p>Hello! I'm a budding developer, working with my buds to create this
						website. It's a work in progress but we are working very hard to get it
					  up and going. Let me know if you like it!</p>

						<form>
		        <input type="button" value="Follow Me" onclick="window.location.href='http://www.hyperlinkcode.com/button-links.php'" />
		        </form>

					</div>
					<div id="tweetsContainer" className="col-6">
						<div className="row">
							<div className="col-12" id="tweets" >
				         Look at my tweets!
								 <div className="wrap p-2 m-2 tweet">
									 <span className="mr-2"><a href="">@UserName</a></span>
									 <span className="mr-2"> 9 July, 2019</span>
									 <span className="mr-2">12:23 PM </span>
									 <nav><div class="body">Hey!! How has it been going? Let's hang out!"</div></nav>
									 <nav>
									 <span><button className="blue"> #FUN </button></span>
									 <span><button className="blue">Like:</button> 51 </span>
									 </nav>

								 </div>

								 <div className="wrap p-2 m-2 tweet">
									 <span className="mr-2"><a href="">@UserName</a></span>
									 <span className="mr-2"> 9 July, 2019</span>
									 <span className="mr-2">12:23 PM </span>
									 <nav><div class="body">Hey!! How has it been going? Let's hang out!"</div></nav>
								 </div>

								 <div className="wrap p-2 m-2 tweet">
									 <span className="mr-2"><a href="">@UserName</a></span>
									 <span className="mr-2"> 9 July, 2019</span>
									 <span className="mr-2">12:23 PM </span>
									 <nav><div class="body">Hey!! How has it been going? Let's hang out!"</div></nav>
								 </div>
	            </div>
					</div>
					<div className="row" id="tweet">
					<div className="col-12">
					<Tweet />
					</div>
					</div>
					</div>

					<div className="col-3" id="hashtags" >
		        <h5>Who to Follow!</h5>
						<ul className="list-unstyled">
							<li className="active"> <a href=""> #NoFilter </a> </li>
							<li><a href=""> #NoMakeup </a></li>
							<li><a href=""> #FUN </a></li>
							<li><a href=""> #Elephants</a></li>
							<li><a href=""> #BFF</a></li>
						</ul>
					</div>
				</div>
      </div>
		</div>
		)
	}
}

export default Profile;
