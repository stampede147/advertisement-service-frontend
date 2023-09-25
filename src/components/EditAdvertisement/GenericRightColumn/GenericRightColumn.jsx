import React from "react";
import './GenericRightColumn.css'


export default ({Column, onClick, ...props}) => {

    return <div className={'column-root column-right-size'} onClick={onClick}>
        <Column {...props}/>
    </div>
}