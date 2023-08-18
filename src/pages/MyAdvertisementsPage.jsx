import AdvertisementPreviewContainer from "../components/MyAdvertisementsPage/AdvertisementPreviewContainer";
import SearchHeader from "../components/SearchHeader/SearchHeader";
import ProfileBar from "../components/ProfileBar/ProfileBar";
import GenericPage from "./generic/GenericPage";
import React from "react";

const MyAdvertisementsPage = ({state}) => {
    return (
        <GenericPage header={SearchHeader}
                     leftContent={ProfileBar}
                     rightContent={AdvertisementPreviewContainer}
                     state={state}
        />
    )
}

export default MyAdvertisementsPage;