import SinglePageWrapper from "../SinglePageWrapper/SinglePageWrapper";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import Chat from "../../components/Chat/Chat";
import React from "react";
import StubComponent from "../../components/StubComponent/StubComponent";
import {useLocation, useNavigate} from "react-router-dom";
import IndexContainer from "../../container/IndexContainer/IndexContainer";
import ProfileBar from "../../components/ProfileBar/ProfileBar";
import NavigationPanel from "../../components/IndexNavigationPanel/NavigationPanel";

const ChatPage = () => {

    return (
        <SinglePageWrapper state={null}
                           header={() => <NavigationPanel/>}
                           content={() => <IndexContainer navbar={ProfileBar} content={Chat}/>}
        />
    );
}

export default ChatPage