import React, {useRef} from "react";
import './LoginPage.css'
import {Link, useNavigate} from "react-router-dom";
import loginApi from "../../api/loginApi";
import GenericPage from "../GenericPage/GenericPage";
import Login from "../../components/Login/Login";
import StubComponent from "../../components/StubComponent/StubComponent";

const LoginPage = (props) => {

    return (
       <GenericPage content={Login} header={StubComponent}/>
    )
};

export default LoginPage;