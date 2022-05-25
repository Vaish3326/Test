import React, {Component} from "react";

class Register extends Component {
    state = {  }

    registerEvent(){
        const userName=document.getElementById('InputUserName').value;
        const name=document.getElementById('InputName').value;
        const password=document.getElementById('InputPassword').value;
        const email=document.getElementById('InputEmail').value;

        const bodyData=JSON.stringify({
            "username": userName,
            "name": name,
            "email": email,
            "password": password
        });
        
        alert(bodyData);

        var request = new XMLHttpRequest();
        request.open('POST', 'http://localhost:9393/user/register', true);
        request.setRequestHeader('Content-Type','application/json');
        request.onload = function () {
        var data =this.response;
        
        if(data!=null)
            alert('Registered Succesfully..');
        console.warn(data);
        }
        request.send(bodyData);

    }

    render() { 
        return (
            <div>
            <h1>Register</h1>
            <form >
               <div className="mb-3">
                   <label className="form-label">User Name</label>
                   <input type="text" className="form-control" id="InputUserName"/>
               </div>
               <div className="mb-3">
                   <label className="form-label">Name</label>
                   <input type="text" className="form-control" id="InputName"/>
               </div>
               <div className="mb-3">
                   <label className="form-label">Password</label>
                   <input type="password" className="form-control" id="InputPassword"/>
               </div>
               <div className="mb-3">
                   <label className="form-label">Email</label>
                   <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" />
               </div>
               <button type="submit" onClick={()=>{this.registerEvent()}} class="btn btn-primary">Submit</button>
            </form>
          </div>
          );
    }
}
 
export default Register;