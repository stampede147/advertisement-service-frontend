import React from "react";
import './SemiComponent.css'

export default (props) => {

    const {title, content: Content, ...other} = props;
    return (
        <div className="main-content">
            <div className="main-content-header">
                <p>{title}</p>
            </div>
            <div className={'main-content-container'}>
                <Content {...other}/>
            </div>
        </div>
    )
}