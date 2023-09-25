import React from "react";
import './GenericLeftColumn.css'

export default ({Column, ...props}) => {
    return <div className={'column-root column-width'}>
        <Column {...props}/>
    </div>
}