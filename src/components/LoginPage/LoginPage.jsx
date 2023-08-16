import React from "react";
import './LoginPage.css'
import {Link} from "react-router-dom";

const LoginPage = (props) => {

    function onClickButton() {
        console.log("Button is clicked!")
    }

    return (
        <div className="sign-up-wrapper">
            <div className="sign-up-container">
                <div className="sign-up-header">
                    <h1> Login</h1>
                </div>
                <div className="form-container">
                    <form className="input-forms" autoComplete="off">
                        <input type="text" placeholder="username"/>
                        <input type="text" placeholder="password"/>
                        <button type="button" onClick={onClickButton}>submit</button>
                    </form>

                </div>
                <div className="footer">
                    <span>Not registered yet?
                        <Link to={props.registrationLink.url}>Register</Link>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;