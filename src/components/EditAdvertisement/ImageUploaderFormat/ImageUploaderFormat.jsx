import React from "react";
import './ImageUploaderFormat.css'

export default ({defaultValue, field, ...props}) => {
    return <div className={'images-block-container'}>
        <input onChange={props.onChangeFieldValue}
               type={'file'}
               name={field.name}
               id={field.name}
               className={'input-input-imageUploader'}
               defaultValue={defaultValue}/>
    </div>
}