import React from "react";
import './Registration.css'

const Registration = (props) => {

    function onClickButton() {
        console.log('button is clicked!')
    }

    return (
        <div className="sign-up-wrapper">
            <div className="sign-up-container">
                <div className="sign-up-header">
                    <h1>Registration</h1>
                </div>
                <div className="form-container">
                    <form className="input-forms">
                        <div className="security-parameters">
                            <input type="text" placeholder="username"/>
                            <input type="password" placeholder="password"/>
                        </div>
                        <div className="personal-parameters">
                            <input type="text" placeholder="First name"/>
                            <input type="text" placeholder="Surname"/>
                        </div>
                        <div className="submit-btn">
                            <button type="button" onClick={onClickButton}>
                                <span className="submit-text">submit</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Registration;