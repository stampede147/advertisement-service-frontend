import React from "react";
import './ActionButton.css'
export default (props) => {

    const {text, onClick} = props;

    return (
        <div className={'action-button-root action-button-radius'}>
            <button onClick={onClick}>
                {text}
            </button>
        </div>
    )
}