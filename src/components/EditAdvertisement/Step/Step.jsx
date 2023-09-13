import React from "react";
import './EditStep.css'
import FieldSet from "../FieldSet/FieldSet";

export default (fieldsets) => {
    // const mapped
    return (
        <div className={'edit-group-root'}>
            <div className={'group-title-font group-title-text-size'}>
                <h4>TITLE</h4>
            </div>
            <FieldSet/>
            <FieldSet/>
            <FieldSet/>
            <FieldSet/>
        </div>

    );
}