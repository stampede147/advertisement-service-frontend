import React from "react";
import {defaults} from "axios";

export default  ({LabelValue, formControlId, ...props}) => {
    return (
        <label className={'column-label'} htmlFor={formControlId}>
            <LabelValue/>
        </label>
    );
}