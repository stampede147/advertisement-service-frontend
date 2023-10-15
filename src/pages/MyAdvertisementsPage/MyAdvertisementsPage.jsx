import MyAdvertisementPreviewList from "../../components/AdvertisementPreview/MyAdvertisementPreviewList";
import SinglePageWrapper from "../SinglePageWrapper/SinglePageWrapper";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import * as advertisementApi from "../../api/userAdvertisementApi";
import IndexContainer from "../../container/IndexContainer/IndexContainer";
import ProfileBar from "../../components/ProfileBar/ProfileBar";
import NavigationPanel from "../../components/IndexNavigationPanel/NavigationPanel";
import SemiComponent from "../../components/SemiComponent/SemiComponent";
import FooterPanel from "../../components/FooterPanel/FooterPanel";
import StubComponent from "../../components/StubComponent/StubComponent";
import {getUserDetails} from "../../api/userApi";
import * as userApi from "../../api/userApi";

export default () => {

    const [userDetails, setUserDetails] = useState(null);


    useEffect(() => {
        userApi.getUserDetails()
            .then(userDetails => {
                setUserDetails(userDetails);
            })
    }, [])

    if (!userDetails){
        return <StubComponent/>;
    }
    return (
        <SinglePageWrapper
            header={<NavigationPanel user={userDetails}/>}
            content={<IndexContainer
                navbar={<ProfileBar userDetails={userDetails}/>}
                content={<MyAdvertisementPreviewList/>}
            />
            }
            footer={<FooterPanel/>}
        />
    )
};