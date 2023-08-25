import GenericPage from "../GenericPage/GenericPage";
import React, {useEffect, useState} from "react";
import ChatPreviewList from "../../components/ChatPreview/ChatPreviewList";
import StubComponent from "../../components/StubComponent/StubComponent";
import ProfileBar from "../../components/ProfileBar/ProfileBar";
import IndexContainer from "../../container/IndexContainer/IndexContainer";

const MyChatsPage = ({state}) => {

    return (
        <GenericPage header={StubComponent}
                     content={() => {
                         return <IndexContainer
                             navbar={ProfileBar}
                             content={ChatPreviewList}/>
                     }}
                     state={state}

        />
    )
}


export default MyChatsPage