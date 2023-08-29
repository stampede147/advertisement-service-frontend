import React from "react";
import './ActionButton.css'
export default (props) => {

    const {text, onClick} = props;

    return (
        <div className={'action-button-root'}>
            <button onClick={onClick}>
                {text}
            </button>
        </div>
    )
}