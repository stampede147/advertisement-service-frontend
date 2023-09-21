import React from "react";
import Column from "../Column/Column";
import './FieldSet.css'

export default (fieldset) => {


    const {field} = fieldset;

    const typ = {
        label: field.label,
        type: "label"
    }
    const typ1 = {

        type: "input"
    }
    return (
        <div className={'fieldset-fieldset fieldset-size'}>
            <Column {...typ}/>
            <Column {...typ1}/>
        </div>
    );
}