import BackIcon from "../BackIcon/BackIcon";
import React from "react";


export default (props) => {
    return (
        <span className='clickable-button' role={"button"} onClick={props.onClickButton}>
            <span className='clickable-button-area'>
                <BackIcon/>
            </span>
        </span>
    );
}