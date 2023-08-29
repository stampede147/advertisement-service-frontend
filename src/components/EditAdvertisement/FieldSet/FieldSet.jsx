import React from "react";
import Column from "../Column/Column";
import './FieldSet.css'

export default () => {

    const typ={type:"label"}
    const typ1={type:"textarea"}
    return (
        <div className={'fieldset-fieldset fieldset-size'}>
            <Column {...typ}/>
            <Column {...typ1}/>
        </div>
    );
}