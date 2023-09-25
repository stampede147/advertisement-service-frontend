import ActionButton from "../../common/ActionButton/ActionButton";
import React from "react";
import '../EditAdvertisement.css'


export default (props) => {

    console.log("EditAdvertisementFOoter");

    const {onPublishButtonClick} = props;

    return <div className={'fieldset-fieldset fieldset-size'}>
        <div className={'column-root column-width'}>
            <div className={'exit-advertisement-button column-button-width'}>
                <ActionButton text={"Save and exit"}
                              onClick={() => window.location.href = "https://www.google.com"}/>
            </div>
        </div>
        <div className={'column-root column-right-size'}>
            <div className={'save-advertisement-button column-button-width'}>
                <ActionButton text={"Publish"} onClick={onPublishButtonClick}/>
            </div>
        </div>
    </div>
}