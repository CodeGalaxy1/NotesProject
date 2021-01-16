import logo from '.././person_icon.png';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class CCSignIn extends Component {
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
        console.log(this.state.password)
        this.setState({
            password: e.target.value
        })
    }

    btnSignIn = () => {
        let user = this.props.getUsersfromParent.find(user => user.username === this.state.username && user.password === this.state.password)
        if (user !== undefined) {
            this.props.history.push({
                pathname: '/main',
            });
        }
        else {
            alert("Incorrect data! Please try again.")
        }
    }

    render() {
        return (
            <div>
                <div className="body_Log_Res">
                    <h5 className="headerPage">LOGIN</h5>
                    <form className="form_Log_Res formAnimate" noValidate autoComplete="off">
                        <div className="imgcontainer">
                            <img src={logo} alt="Avatar" className="avatar" />
                        </div>
                        <div className="container">
                            <input type="text" placeholder="Username" name="uname" required onChange={this.chgUsn} />
                            <br />
                            <input type="password" placeholder="Password" name="psw" required onChange={this.chgPsw} />
                            <Button className="btnLogin" variant="contained" color="primary" onClick={this.btnSignIn}>Log In</Button>
                            <br />
                            <p>Don't have an account? <Link className="Link" to="/signup">Sign Up</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(CCSignIn);