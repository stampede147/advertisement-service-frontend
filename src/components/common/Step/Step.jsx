import React from "react";
import './Step.css'
import FieldSet from "../FieldSet/FieldSet";

export default (props) => {
    // const mapped

    const {title, fields} = props;

    const mappedFields = fields.map(field => <FieldSet field={field}/>);
    return (
        <div className={'edit-group-root'}>
            <div className={'group-title-font group-title-text-size'}>
                <h4>{title}</h4>
            </div>
            {mappedFields}
        </div>

    );
}