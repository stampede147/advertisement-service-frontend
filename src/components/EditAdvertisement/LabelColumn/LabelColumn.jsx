import React from "react";
import './LabelColumn.css'

export default () => {
    return (
        <div className={'column-root column-width'}>
            <label className={'column-lable'}>
                <span className={'column-lable-span'}>
                    Label
                </span>
            </label>
        </div>
    );
}