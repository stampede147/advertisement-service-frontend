import GenericPage from "../GenericPage/GenericPage";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import Chat from "../../components/Chat/Chat";
import React  from "react";
import StubComponent from "../../components/StubComponent/StubComponent";

const ChatPage = (props) => {

    return(
        <GenericPage state={props.state}
                     header={StubComponent}
                     content={Chat}
        />
    );
}

export default ChatPage