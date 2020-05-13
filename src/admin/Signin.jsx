import React from 'react';
import AuthenticationService from '../service/AuthenticationService';
import './login.css';

class Signin extends React.Component {
    state = {
        password: '',
        username: '',
        loginFailed: false
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        this.setState({ [name]: target.value });
    }

    signin = (event) => {
        event.preventDefault();

        AuthenticationService.basicSignIn(this.state.username, this.state.password)
            .then(response => {
                if (response.ok) {
                    this.props.history.push("/admin");
                }
                else {
                    this.setState({ loginFailed: true });
                }
            });


    }

    render() {
        return (
            <div className="loginPanel">
                {this.state.loginFailed && <p className="warning">Wrong username or password</p>}
                <form onSubmit={this.signin}>
                    <div className="loginPanel">
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange}></input>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange}></input>
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Signin;