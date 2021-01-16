import logo from '.././person_icon.png';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class CCSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    chgUsn = (e) => {
        console.log(this.state.username)
        this.setState({
            username: e.target.value
        })
    }

    chgPsw = (e) => {
        let id = e.target.id;
        let value = e.target.value;

        if (id === "psw") {
            console.log(this.state.password)
            this.setState({
                password: value
            })
        }
        else {
            console.log(this.state.confirmPassword)
            this.setState({
                confirmPassword: value
            })
        }
    }
    

    btnSignUp = () => {
        if (this.state.username === undefined || this.state.password === undefined || this.state.confirmPassword === undefined) {
            alert("One or more fields are empty!")
        }

        else if (this.state.password !== this.state.confirmPassword) {
            alert("Password not match!")
        }

        else {
            this.props.history.push({
                pathname: '/',
            });
            this.props.sendUsersToParent({ username: this.state.username, password: this.state.password, confirmPassword: this.state.confirmPassword })
        }
    }

    render() {

        return (
            <div>
                <div className="body_Log_Res">
                    <h5 className="headerPage">REGISTER</h5>
                    <form className="form_Log_Res formAnimate" noValidate autoComplete="off">
                        <div className="imgcontainer">
                            <img src={logo} alt="Avatar" className="avatar" />
                        </div>
                        <div className="container">
                            <input type="text" placeholder="Username" name="uname" required onChange={this.chgUsn} />
                            <br />
                            <input type="password" placeholder="Password" id="psw" name="psw" required onChange={this.chgPsw} />
                            <br />
                            <input type="password" placeholder="Confirm Password" id="conpsw" name="conpsw" required onChange={this.chgPsw} />
                            <Button
                                className="btnRegister" variant="contained" color="primary" onClick={this.btnSignUp}>Sign Up
                            </Button>
                            <br />
                            <p>Have an account? <Link className="Link" to="/">Log In</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(CCSignUp);