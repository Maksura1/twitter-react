import React, {Component} from 'react'
import './Tweet.css'

class Tweet extends Component {
	// Data
	// Functions
	// Render
	render() {
		return (
			<div id="new-tweets">
					<form>
						<div className="input-group">
							<input type="text" className="form-control" />
							<div className="input-group-append">
								<button type="submit" className="btn btn-success">Send</button>
							</div>
						</div>
					</form>
				</div>
		)
	}
}

export default Tweet;
