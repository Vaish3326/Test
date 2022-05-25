import React, {Component} from "react";


class Login extends Component {
    render() { 
        return ( 
            <div>
            <h1>Login</h1>
            <form >
               <div className="mb-3">
                   <label className="form-label">User Name</label>
                   <input type="text" className="form-control" id="InputUserName"/>
               </div>
               <div className="mb-3">
                   <label className="form-label">Password</label>
                   <input type="password" className="form-control" id="InputPassword"/>
               </div>
               <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
         );
    }
}
 
export default Login;