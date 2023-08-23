import GenericPage from "../GenericPage/GenericPage";
import React, {useEffect, useState} from "react";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import ChatPreviewList from "../../components/ChatPreview/ChatPreviewList";
import {json} from "react-router-dom";
import StubComponent from "../../components/StubComponent/StubComponent";
import {getChatsByUserId} from "../../api/chatApi";
import State from "../../redux/state";

const MyChatsPage = ({state}) => {

    return (
        <GenericPage header={StubComponent}
                     content={ChatPreviewList}
                     state={state}
        />
    )
}

export default MyChatsPage