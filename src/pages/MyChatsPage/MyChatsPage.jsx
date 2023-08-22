import GenericPage from "../GenericPage/GenericPage";
import React, {useEffect} from "react";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import ChatPreviewList from "../../components/ChatPreview/ChatPreviewList";
import {json} from "react-router-dom";
import StubComponent from "../../components/StubComponent/StubComponent";

const MyChats = ({state}) => {
    return (
        <GenericPage header={StubComponent}
                     content={ChatPreviewList}
                     state={state}
        />
    )
}

export default MyChats