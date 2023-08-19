import GenericPage from "../GenericPage/GenericPage";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import Chat from "../../components/Chat/Chat";
import React  from "react";

const ChatPage = (props) => {

    return(
        <GenericPage state={props.state}
                     header={SearchHeader}
                     content={Chat}
        />
    );
}

export default ChatPage