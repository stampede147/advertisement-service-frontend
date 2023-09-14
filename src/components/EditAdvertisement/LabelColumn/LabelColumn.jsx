import React from "react";
import './LabelColumn.css'

export default ({label}) => {
    return (
        <div className={'column-root column-width'}>
            <label className={'column-lable'}>
                <span className={'column-lable-span'}>
                    {label}
                </span>
            </label>
        </div>
    );
}