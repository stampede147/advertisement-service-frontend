import AdvertisementPreviewList from "../../components/AdvertisementPreview/AdvertisementPreviewList";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import ProfileBar from "../../components/ProfileBar/ProfileBar";
import GenericPage from "../GenericPage/GenericPage";
import React from "react";

const MyAdvertisementsPage = ({state}) => {
    return (
        <GenericPage header={SearchHeader}
                     content={AdvertisementPreviewList}
                     state={state}
        />
    )
}

export default MyAdvertisementsPage;