import './SingleContainer.css'
import React from "react";


export default ({content: Content}) => {

    return (
        <div className={'single-index-container-root'}>
            {Content}
        </div>
    );
}