import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import SinglePageWrapper from "../SinglePageWrapper/SinglePageWrapper";
import StubComponent from "../../components/StubComponent/StubComponent";
import NavigationPanel from "../../components/IndexNavigationPanel/NavigationPanel";
import * as categoryApi from "../../api/categoryApi";
import EditAdvertisement from "../../components/EditAdvertisement/EditAdvertisement";
import FooterPanel from "../../components/FooterPanel/FooterPanel";
import {getNavigation} from "../../api/editAdvertisementApi";
import * as editAdvertisementApi from "../../api/editAdvertisementApi";
import * as userApi from "../../api/userApi";
import SingleContainer from "../../container/SingleContainer/SingleContainer";


export default (props) => {

    const [loading, setLoading] = useState(true);
    const [navigation, setNavigation] = useState(null)
    const [userDetails, setUserDetails] = useState(null)

    useEffect(() => {
        editAdvertisementApi.getNavigation()
            .then(resp => {
                setNavigation(resp)
                setLoading(false);
            });

        userApi.getUserDetails()
            .then(userDetails => setUserDetails(userDetails))
    }, [])

    return loading
        ? <StubComponent/>
        : <SinglePageWrapper
            header={<NavigationPanel user={userDetails} showAddButton={false} isAdvSearchActive={false}/>}
            content={<SingleContainer content={<EditAdvertisement navigation={navigation}/>}/>
            }
            footer={<FooterPanel/>}
        />
}
