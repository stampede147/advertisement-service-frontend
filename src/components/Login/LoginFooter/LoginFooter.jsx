import {Link} from "react-router-dom";
import React from "react";
import PATH_NAMES from "../../../constants/PATHNAMES";


export default () => {
    return (
        <div className="footer">
            <span>Not registered yet?</span>
            <span>
                <Link to={PATH_NAMES.REGISTER} style={{fontWeight: "bold"}}>
                    Register
                </Link>
            </span>
        </div>
    )
        ;
}