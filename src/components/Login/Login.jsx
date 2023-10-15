import {Link, useNavigate} from "react-router-dom";
import React, {useRef} from "react";
import LoginHeader from "./LoginHeader/LoginHeader";
import LoginFormBody from "./LoginFormBody/LoginFormBody";
import LoginFooter from "./LoginFooter/LoginFooter";
import authenticationApi from "../../api/loginApi";
import PATH_NAMES from "../../constants/PATHNAMES";
import PATHNAMES from "../../constants/PATHNAMES";
import * as userApi from "../../api/userApi";


export default () => {

    const navigate = useNavigate();
    const usernameRef = useRef();
    const passwordRef = useRef();


    async function onButtonClick() {
        let body = {
            "username": usernameRef.current.value,
            "password": passwordRef.current.value,
        };

        authenticationApi(body)
            .then(noResp => {
                userApi.getUserDetails()
                    .then(userDetails => {
                        localStorage.setItem("USER_ID", userDetails.id);
                    })

                usernameRef.current.value = "";
                passwordRef.current.value = "";
                navigate(PATHNAMES.PROFILE_ADVERTISEMENTS)
            });

    }

    return (
        <div className="sign-up-wrap-root">
            <div className="sign-up-root">
                <LoginHeader/>
                <LoginFormBody usernameRef={usernameRef}
                               passwordRef={passwordRef}
                               onButtonClick={onButtonClick}/>
                <LoginFooter/>
            </div>
        </div>);

}