import MyAdvertisementPreviewList from "../../components/AdvertisementPreview/MyAdvertisementPreviewList";
import SinglePageWrapper from "../SinglePageWrapper/SinglePageWrapper";
import React, {useEffect, useState} from "react";
import StubComponent from "../../components/StubComponent/StubComponent";
import {useNavigate} from "react-router-dom";
import * as advertisementApi from "../../api/advertisementApi";
import PATHNAMES from "../../constants/PATHNAMES";
import IndexContainer from "../../container/IndexContainer/IndexContainer";
import ProfileBar from "../../components/ProfileBar/ProfileBar";
import * as useApi from "../../api/userApi";
import LOCALSTORAGE_KEYS from "../../constants/LOCALSTORAGE_KEYS";
import NavigationPanel from "../../components/IndexNavigationPanel/NavigationPanel";

 export default () => {

    const [loading, setLoading] = useState(true);
    const [advertisements, setAdvertisements] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        async function fetchData() {

            const user = await useApi.getUserByUsername(localStorage.getItem(LOCALSTORAGE_KEYS.USERNAME_KEY));
            const advertisements = await advertisementApi.getPageByUserId(user.id)

            setAdvertisements(advertisements.content == null ? [] : advertisements.content)
            setLoading(false);
        }
        fetchData();
    }, []);


    const state = {};
    state.advertisements = advertisements;
    state.onClickRedirect = (advertisementId) => {
        navigate(PATHNAMES.ADVERTISEMENTS + '/' + advertisementId);
    };
    state.onClickRedirect = state.onClickRedirect.bind(this);

    return (
        <SinglePageWrapper
            header={NavigationPanel}
            content={() => <IndexContainer {...state}
                                           navbar={ProfileBar}
                                           content={MyAdvertisementPreviewList}
            />
            }
        />
    )
};