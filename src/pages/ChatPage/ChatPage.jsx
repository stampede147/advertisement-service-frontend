import GenericPage from "../GenericPage/GenericPage";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import Chat from "../../components/Chat/Chat";
import React from "react";
import StubComponent from "../../components/StubComponent/StubComponent";
import {useLocation, useNavigate} from "react-router-dom";

const ChatPage = () => {

    let chatDetails = useLocation().state;

    return (
        <GenericPage state={chatDetails}
                     header={StubComponent}
                     content={Chat}
        />
    );
}

export default ChatPage