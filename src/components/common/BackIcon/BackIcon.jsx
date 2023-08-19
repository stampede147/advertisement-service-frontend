import React from "react";
import './BackIcon.css'

const BackIcon = () => {
    return (
        <div className='back-icon'>
            <svg xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m7.414 13 5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 1 1 1.414 1.414L7.414 11H19a1 1 0 1 1 0 2H7.414Z"
                    fill="currentColor">
                </path>
            </svg>
        </div>
    );
}

export default BackIcon;