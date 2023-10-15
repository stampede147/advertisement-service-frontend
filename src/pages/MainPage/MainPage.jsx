import React, {useEffect, useState} from "react";
import SinglePageWrapper from "../SinglePageWrapper/SinglePageWrapper";
import * as userApi from "../../api/userApi";
import NavigationPanel from "../../components/IndexNavigationPanel/NavigationPanel";
import StubComponent from "../../components/StubComponent/StubComponent";
import IndexContainer from "../../container/IndexContainer/IndexContainer";
import FooterPanel from "../../components/FooterPanel/FooterPanel";
import RecentAdvertisements from "../../components/RecentlyAdvertisements/RecentlyAdvertisements";
import AdvertisementRecommendation from "../../components/AdvertisementRecommendation/ AdvertisementRecommendation";

const MainPage = () => {

    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        userApi.getUserDetails()
            .then(userDetails => {
                setUserDetails(userDetails);
            })
    }, [])


    return <SinglePageWrapper header={<NavigationPanel user={userDetails}/>}
                              content={<IndexContainer
                                  navbar={<RecentAdvertisements/>}
                                  content={<AdvertisementRecommendation/>}
                              />}
                              footer={<FooterPanel/>}/>
}

export default MainPage;