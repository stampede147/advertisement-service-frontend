import MyAdvertisementPreviewList from "../../components/AdvertisementPreview/MyAdvertisementPreviewList";
import SinglePageWrapper from "../SinglePageWrapper/SinglePageWrapper";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import * as advertisementApi from "../../api/userAdvertisementApi";
import PATHNAMES from "../../constants/PATHNAMES";
import IndexContainer from "../../container/IndexContainer/IndexContainer";
import ProfileBar from "../../components/ProfileBar/ProfileBar";
import * as useApi from "../../api/userApi";
import NavigationPanel from "../../components/IndexNavigationPanel/NavigationPanel";
import SemiComponent from "../../components/SemiComponent/SemiComponent";

export default () => {

    const [loading, setLoading] = useState(true);
    const [advertisements, setAdvertisements] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        async function fetchData() {
            const user = await useApi.getUserDetails();
            const advertisements = await advertisementApi.getAdvertisementsPage(user.id)

            setAdvertisements(advertisements.content == null ? [] : advertisements.content)
            setLoading(false);
        }

        fetchData()
    }, []);


    const state = {};
    state.advertisements = advertisements;
    state.onClickRedirect = (advertisementId) => {
        navigate(PATHNAMES.ADVERTISEMENTS + '/' + advertisementId);
    };

    return (
        <SinglePageWrapper
            header={NavigationPanel}
            content={() => <IndexContainer
                navbar={ProfileBar}
                content={() => <SemiComponent title={"My advertisements"}
                                              content={MyAdvertisementPreviewList}
                                              {...state}/>
                }
            />
            }
        />
    )
};