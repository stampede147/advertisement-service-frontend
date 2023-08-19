import GenericPage from "../generic/GenericPage";
import React  from "react";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import ChatPreviewList from "../../components/ChatPreview/ChatPreviewList";

const MyChats = ({state}) => {
    return (
        <GenericPage header={SearchHeader}
                     content={ChatPreviewList}
                     state={state}
        />
    )
}

export default MyChats