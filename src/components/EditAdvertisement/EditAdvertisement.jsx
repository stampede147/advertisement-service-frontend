import React, {useEffect, useState} from "react";
import IndexContainer from "../../container/IndexContainer/IndexContainer";
import StubComponent from "../StubComponent/StubComponent";
import * as editAdvertisementApi from "../../api/editAdvertisementApi";
import Step from "./Step/Step";
import step from "./Step/Step";


export default () => {

    const [steps, setSteps] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

    }, []);


    if (loading) {
        return <StubComponent/>
    }
    return (
        <IndexContainer navbar={StubComponent}
                        content={() => {
                            return <div className={'index-edit-ad-root'}>
                                <form>
                                    {steps}
                                </form>
                            </div>
                        }
                        }/>
    )
}