import React from "react";
import LabelColumn from "../LabelColumn/LabelColumn";
import TextareaColumn from "../TextareaColumn/TextareaColumn";

export default (columnData) => {

    function getColumnByType(columnData) {
        switch (columnData.type) {
            case "label": {
                return <LabelColumn label={columnData.label}/>;
            }
            case "textarea": {
                return <TextareaColumn/>;
            }
        }
    }

    return (
        <>
            {getColumnByType(columnData)}
        </>
    );
}