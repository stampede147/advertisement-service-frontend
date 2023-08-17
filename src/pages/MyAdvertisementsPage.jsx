import AdvertisementPreviewContainer from "../components/MyAdvertisementsPage/AdvertisementPreviewContainer";
import SearchHeader from "../components/SearchHeader/SearchHeader";
import ProfileBar from "../components/ProfileBar/ProfileBar";
import GenericComponent from "../components/generic/GenericComponent/GenericComponent";
import React from "react";

const MyAdvertisementsPage = ({state}) => {
    return (
        <GenericComponent header={SearchHeader}
                          leftContent={ProfileBar}
                          rightContent={AdvertisementPreviewContainer}
                          state={state}
        />
    )
}

export default MyAdvertisementsPage;