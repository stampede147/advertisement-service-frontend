import {Link} from "react-router-dom";
import React, {useRef} from "react";
import LoginHeader from "./LoginHeader/LoginHeader";
import LoginFormBody from "./LoginFormBody/LoginFormBody";
import LoginFooter from "./LoginFooter/LoginFooter";
import authenticationApi from "../../api/loginApi";
import PATH_NAMES from "../../constants/PATHNAMES";


export default () => {

    const usernameRef = useRef();
    const passwordRef = useRef();

    async function onButtonClick() {
        //if username or password are empty
        if (!(usernameRef.current.value || passwordRef.current.value)) {
            return;
        }

        try {
            const result = await authenticationApi({
                "username": usernameRef.current.value,
                "password": passwordRef.current.value,
            });

            if (result) {
                window.location.pathname = PATH_NAMES.CHATS;
            }

        } finally {
            localStorage.setItem("username", usernameRef.current.value);
            usernameRef.current.value = "";
            passwordRef.current.value = "";
        }


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
        </div>
    )
}