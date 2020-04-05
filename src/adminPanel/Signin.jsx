import React from 'react';
import AuthenticationService from '../service/AuthenticationService';

class Signin extends React.Component {
    state = {
        password: '',
        username: '',
        loginFailed: false
    }

    handleChange = (event) => {  
        const target = event.target;
        const name = target.name;  
        this.setState({[name]: target.value});  
    }

    signin = () => {
        AuthenticationService.basicSignIn(this.state.username, this.state.password)
        .then(response => {            
            if (response.ok) {
                this.props.history.push("/admin");
            }
            else {
                this.setState({loginFailed: true});
            }
        });


    }

    show = () => {
        let uri = this.state.show        
        let header = {}

        if (this.state.isLoginSucces) {
            header = {
                "Authorization": 'Basic ' + window.btoa(this.state.username + ":" + this.state.password)
            }
        }
        
        fetch("http://localhost:8080/" + uri, {
            headers: header
        })
        .then(resp => {
            console.log(resp);
            return resp.text();
        })
        .then(text => {
            console.log(text);
        });
    }

    isLoggedIn = () => {
        console.log(AuthenticationService.isLoggedIn());
    }


    render() {
        return (
            <div>
                {this.state.loginFailed && <p className="warning">Wrong username or password</p>}
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange}></input>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange}></input>
                <button onClick={this.signin}>Login</button>
                <button onClick={this.isLoggedIn}>Check status</button>
            </div>
        );
    }
}

export default Signin;