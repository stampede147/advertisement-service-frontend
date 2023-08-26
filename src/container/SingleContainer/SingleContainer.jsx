import './SingleContainer.css'
import React from "react";


export default ({content: Content, ...props}) => {

    return (
        <div className={'single-index-container-root'}>
            <Content state={props}/>
        </div>
    );
}