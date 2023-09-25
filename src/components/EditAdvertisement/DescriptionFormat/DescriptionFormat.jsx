import React from "react";
import './DescriptionFormat.css'
import FormatWrapper from "../FormatWrapper/FormatWrapper";


export function onChangeField(field) {
    console.log(field.target.id)
}

export default ({defaultValue, ...props}) => {
    return <FormatWrapper Format={
        () => <textarea onChange={props.onChangeFieldValue}
                        type={'text'}
                        name={"description"}
                        id={"description"}
                        className={'textarea-textarea-description'}
                        defaultValue={defaultValue}/>
    }/>
}