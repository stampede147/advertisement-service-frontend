import React from "react";
import './FormatWrapper.css'

export default ({Format, ...props}) => {
    return <label className={'format-def-wrapper'}>
        <Format {...props}/>
    </label>
}