import React, {useRef} from "react";
import EditAdvertisementGroup from "../EditAdvertisementGroup/EditAdvertisementGroup";
import '../EditAdvertisement.css'


export default (props) => {

    const {steps, fields} = props;

    const fields_ = [
        {
            id: 1,
            stepId: 1,
            label: "Advertisement description",
            name: "description",
            viewConfig: {
                type: "description",
                size: "L"
            }
        },
        {
            id: 2,
            stepId: 1,
            label: "Price",
            name: "price",
            viewConfig: {
                type: "price",
                size: "S"
            }
        },
        {
            id: 3,
            stepId: 2,
            label: "Advertisement title",
            name: "title",
            viewConfig: {
                size: "L"
            }
        },
        {
            id: 4,
            stepId: 3,
            label: "City",
            name: "city",
            viewConfig: {
                size: "M"
            }
        },
        {
            id: 5,
            stepId: 3,
            label: "Street",
            name: "street",
            viewConfig: {
                size: "M"
            }
        },
        {
            id: 6,
            stepId: 4,
            label: 'Images',
            name: 'images',
            viewConfig: {
                size: "XS",
                type: "imageUploader"
            }
        }
    ]

    const steps_ = [
        {
            id: 2,
            title: "Parameters",
            children: [{id: 3}]
        },

        {
            id: 1,
            title: "Description",
            children: [{id: 1}, {id: 2}]

        },


        {
            id: 3,
            title: "Purchase place",
            children: [{id: 4}, {id: 5}]
        },
        {
            id: 4,
            title: "Product appearance",
            children: [{id: 6}]
        }

    ]

    const {onChangeFieldValue} = props;

    return <form>
        {
            steps_.map(step => <EditAdvertisementGroup onChangeFieldValue={onChangeFieldValue}
                                                       step={step}
                                                       fields={fields_}/>)
        }
    </form>

}