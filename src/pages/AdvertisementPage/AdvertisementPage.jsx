import React  from "react";
import GenericPage from "../generic/GenericPage";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import ProfileBar from "../../components/ProfileBar/ProfileBar";
import Advertisement from "../../components/Advertisement/Advertisement";


const AdvertisementPage = ({state}) => {
    return <GenericPage header={SearchHeader}
                        content={Advertisement}
                        state={state}
    />
}

export default AdvertisementPage;