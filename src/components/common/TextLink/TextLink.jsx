import React from "react";
import './TextLink.css'
import {Link} from "react-router-dom";

const TextLink = (props) => {
    const {to, text} = props;

    return <div className={'text-link-root'}>
        <Link to={to}>
            <h3>
                {text}
            </h3>
        </Link>
    </div>
}

export default TextLink;