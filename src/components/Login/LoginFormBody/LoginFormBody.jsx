import React from "react";


export default (props) => {
    return (
        <div className="form-container">
            <form className="input-forms">
                <input ref={props.usernameRef} type="text" placeholder="username"/>
                <input ref={props.passwordRef} type="password" placeholder="password"/>
                <button type="button" onClick={props.onButtonClick}>
                    submit
                </button>
            </form>
        </div>
    );
}