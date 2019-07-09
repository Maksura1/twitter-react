import React, {Component} from 'react';
import './Register.css'

class Register extends Component {
	render() {
  return (
		<div className="container">
	 <div className="row">
		 <div className="col-lg-10 col-xl-9 mx-auto">
			 <div className="card card-signin flex-row my-5">
				 <div className="card-img-left d-none d-md-flex">
				 </div>

				 <div className="card-body">
					 <h5 className="card-title text-center">Register</h5>
					 <form className="form-signin">
						 <div className="form-label-group">
							 <input type="text" id="inputUserame" className="form-control" placeholder="Username" required autofocus/>
							 <label for="inputUserame">Username</label>
						 </div>

						 <div className="form-label-group">
							 <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required/>
							 <label for="inputEmail">Email address</label>
						 </div>

						 <hr/>

						 <div className="form-label-group">
							 <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
							 <label for="inputPassword">Password</label>
						 </div>

						 <div className="form-label-group">
							 <input type="password" id="inputConfirmPassword" className="form-control" placeholder="Password" required/>
							 <label for="inputConfirmPassword">Confirm password</label>
						 </div>

						 <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
						 <a className="d-block text-center mt-2 small" href="http://localhost:3000/">Sign In</a>
						 <hr className="my-4"/>

					 </form>
				 </div>
			 </div>
		 </div>
	 </div>
 </div>
  )
 }
}


export default Register;
