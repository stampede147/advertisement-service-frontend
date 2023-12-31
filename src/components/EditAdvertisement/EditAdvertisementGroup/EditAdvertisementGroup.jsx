import React from "react";
import GroupColumn from "../GroupColumn/GroupColumn";
import './EditAdvertisementGroup.css'


export default (props) => {
    const {step} = props;
    const {onChangeFieldValue} = props;

    const Columns = step.fields &&
        step.fields
            .map(field => <GroupColumn onChangeFieldValue={onChangeFieldValue} field={field}/>);

    return <div key={step.id} id={step.id} className={'edit-group-root'}>
        <div className={'group-title-font group-title-text-size'}>
            <h4>{step.title}</h4>
        </div>
        {Columns}
    </div>
}