import React, {useCallback, useEffect, useRef, useState} from "react";
import EditAdvertisementGroup from "../EditAdvertisementGroup/EditAdvertisementGroup";
import '../EditAdvertisement.css'
import * as editAdvertisementApi from "../../../api/editAdvertisementApi";
import {getLayout} from "../../../api/editAdvertisementApi";


function EditAdvertisementContent(props) {

    const [steps, setSteps] = useState([]);

    const {onChangeFieldValue} = props;

    const {navigation} = props;

    useEffect(() => {
        editAdvertisementApi.getLayout(navigation)
            .then(resp => {
                setSteps(resp.steps)
            })
    }, [])


    return <form>
        {
            steps.map(step => <EditAdvertisementGroup onChangeFieldValue={onChangeFieldValue}
                                                      step={step}/>)
        }
    </form>

}

export default EditAdvertisementContent;