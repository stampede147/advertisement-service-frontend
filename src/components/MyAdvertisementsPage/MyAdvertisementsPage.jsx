import AdvertisementPreviewContainer from "./AdvertisementPreviewContainer";
import SearchHeader from "../SearchHeader/SearchHeader";
import ProfileBar from "../ProfileBar/ProfileBar";
import GenericComponent from "../GenericComponent/GenericComponent";
import React from "react";

const MyAdvertisementsPage = (props) => {
    return (
        <GenericComponent header={SearchHeader}
                          leftContent={ProfileBar}
                          rightContent={AdvertisementPreviewContainer}
                          state={props.state}
        />
    )
}

export default MyAdvertisementsPage;