import SinglePageWrapper from "../SinglePageWrapper/SinglePageWrapper";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import Chat from "../../components/Chat/Chat";
import React, {useEffect, useState} from "react";
import StubComponent from "../../components/StubComponent/StubComponent";
import {useLocation, useNavigate} from "react-router-dom";
import IndexContainer from "../../container/IndexContainer/IndexContainer";
import ProfileBar from "../../components/ProfileBar/ProfileBar";
import NavigationPanel from "../../components/IndexNavigationPanel/NavigationPanel";
import FooterPanel from "../../components/FooterPanel/FooterPanel";
import * as userApi from "../../api/userApi";

const ChatPage = () => {

    const [userDetails, setUserDetails] = useState(null);


    useEffect(() => {
        userApi.getUserDetails()
            .then(userDetails => {
                setUserDetails(userDetails);
            })
    }, [])

    if (!userDetails){
        return <StubComponent/>
    }
    return (
        <SinglePageWrapper header={<NavigationPanel user={userDetails}/>}
                           content={<IndexContainer navbar={<ProfileBar userDetails={userDetails}/>}
                                                    content={<Chat/>}/>}
                           footer={<FooterPanel/>}
        />
    );
}

export default ChatPage