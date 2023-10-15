import React, {useRef} from "react";
import './RegistrationPage.css'
import * as usersApi from "../../api/usersApi";
import {resolvePath, useNavigate} from "react-router-dom";
import PATHNAMES from "../../constants/PATHNAMES";

const RegistrationPage = (props) => {

    let navigateFunction = useNavigate();

    const body = {};

    function onClickButton() {
        usersApi.createUser(body)
            .then(completed => completed && navigateFunction(PATHNAMES.LOGIN));
    }

    const onChange = (e) => {
        let inputTarget = e.target;
        body[inputTarget.id] = inputTarget.value;
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
                            <label for={"username"}>
                                <input id={"username"} type="text" placeholder="username" onChange={e => onChange(e)}/>
                            </label>
                            <label for={"password"}>
                                <input id={"password"} type="password" placeholder="password"
                                       onChange={e => onChange(e)}/>
                            </label>
                        </div>
                        <div className="personal-parameters">
                            <label for={"firstName"}>
                                <input id={"firstName"} type="text" placeholder="First name"
                                       onChange={e => onChange(e)}/>
                            </label>
                            <label for={"surname"}>
                                <input id="lastName" type="text" placeholder="Surname" onChange={e => onChange(e)}/>
                            </label>
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

export default RegistrationPage;