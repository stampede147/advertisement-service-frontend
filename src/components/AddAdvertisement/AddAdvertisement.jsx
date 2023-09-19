import React from "react";
import Step from "../common/Step/Step";


export default (props) => {

    const {user} = props;

    return (
        <div className={'advertisement-add-root'}>
            <Step fields={[{"label":"title"}]}/>
        </div>
    );
}
