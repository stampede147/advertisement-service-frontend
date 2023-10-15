import React, {useEffect, useState} from "react";

import './AdvertisementPreviewList.css'
import MyAdvertisementPreview from "./MyAdvertisementPreview";
import PATHNAMES from "../../constants/PATHNAMES";
import {useNavigate} from "react-router-dom";
import * as advertisementApi from "../../api/userAdvertisementApi";
import SemiComponent from "../SemiComponent/SemiComponent";
import StubComponent from "../StubComponent/StubComponent";
import * as userAdvertisementApi from "../../api/userAdvertisementApi";


const MyAdvertisementPreviewList = (props) => {

    const [advertisements, setAdvertisements] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        advertisementApi.getAdvertisementsPage()
            .then(resp => {
                console.log(resp)
                setAdvertisements(resp)
                setLoading(false)
            })

    }, [])

    const onClickRedirect = (advertisementId) => {
        navigate(PATHNAMES.TO_ADVERTISEMENT.concat(advertisementId));
    };

    const onClickDelete = (advertisementId) => {
        userAdvertisementApi.deleteById(advertisementId)
    }

    const MappedContent = () => advertisements.content &&
        advertisements.content.map(advertisement => {
            return <React.Fragment key={advertisement.id}>
                <MyAdvertisementPreview advertisement={advertisement}
                                        onClickRedirect={onClickRedirect}
                                        onClickDelete={onClickDelete}/>
            </React.Fragment>
        });

    return <SemiComponent title={"My advertisements"}
                          content={<MappedContent/>}/>

}

export default MyAdvertisementPreviewList;