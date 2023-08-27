import React, {useRef} from "react";
import './LoginPage.css'
import {Link, useNavigate} from "react-router-dom";
import authenticationApi from "../../api/loginApi";
import SinglePageWrapper from "../SinglePageWrapper/SinglePageWrapper";
import Login from "../../components/Login/Login";
import StubComponent from "../../components/StubComponent/StubComponent";

const LoginPage = (props) => {

    return (
       <SinglePageWrapper content={Login} header={StubComponent}/>
    )
};

export default LoginPage;