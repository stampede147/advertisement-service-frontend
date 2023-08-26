import GenericPage from "../GenericPage/GenericPage";
import React, {useEffect, useState} from "react";
import ChatPreviewList from "../../components/ChatPreview/ChatPreviewList";
import StubComponent from "../../components/StubComponent/StubComponent";
import ProfileBar from "../../components/ProfileBar/ProfileBar";
import IndexContainer from "../../container/IndexContainer/IndexContainer";
import {getChatsByUserId} from "../../api/chatApi";
import chat from "../../components/Chat/Chat";

const MyChatsPage = ({state}) => {

    const [loading, setLoading] = useState(true)
    const [chatPreviews, setChatPreviews] = useState([])


    useEffect(() => {
        getChatsByUserId(1)
            .then(resp => {
                setChatPreviews(resp.content)
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <StubComponent/>;
    }


    state = {}
    state.chatPreviews = chatPreviews;

    return (
        <GenericPage header={StubComponent}
                     content={() => {
                         return <IndexContainer
                             {...state}
                             navbar={ProfileBar}
                             content={ChatPreviewList}/>
                     }}
                     state={state}

        />
    )
}


export default MyChatsPage