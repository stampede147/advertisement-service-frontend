import AdvertisementContainer from "./AdvertisementContainer";
import SearchHeader from "../SearchHeader/SearchHeader";
import ProfileBar from "../ProfileBar/ProfileBar";
import GenericComponent from "../CompositeComponent/GenericComponent";
import React from "react";

const MyAdvertisements = (props) => {
    return (
        <GenericComponent header={SearchHeader}
                          leftContent={ProfileBar}
                          rightContent={AdvertisementContainer}
                          state={props.state}
        />
    )
}

export default MyAdvertisements;