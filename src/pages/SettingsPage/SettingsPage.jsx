import React, {useEffect, useState} from "react";
import SinglePageWrapper from "../SinglePageWrapper/SinglePageWrapper";
import NavigationPanel from "../../components/IndexNavigationPanel/NavigationPanel";
import IndexContainer from "../../container/IndexContainer/IndexContainer";
import ProfileBar from "../../components/ProfileBar/ProfileBar";
import SemiComponent from "../../components/SemiComponent/SemiComponent";
import {useNavigate} from "react-router-dom";
import Settings from "../../components/Settings/Settings";
import * as userApi from "../../api/userApi";
import StubComponent from "../../components/StubComponent/StubComponent";


export default () => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        userApi.getUserDetails()
            .then(resp => {
                setUser(resp.data)
                setLoading(!loading);
            })
    }, [])

    if (loading){
        return <StubComponent/>
    }
    return (
        <SinglePageWrapper
            header={NavigationPanel}
            content={() => <IndexContainer
                navbar={ProfileBar}
                content={() =>
                    <SemiComponent title={"Settings"}
                                   content={Settings}
                                   user={user}
                    />
                }
            />
            }
        />
    )
}