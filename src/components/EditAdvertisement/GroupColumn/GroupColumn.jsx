import React, {useCallback} from "react";
import './GroupColumn.css'
import GenericRightColumn from "../GenericRightColumn/GenericRightColumn";
import GenericLeftColumn from "../GenericLeftColumn/GenericLeftColumn";
import RightLayout from "../RightLayout/RightLayout";
import RightFormat from "../RightFormat/RightFormat";
import LeftLayoutLabel from "../LeftLayoutLabel/LeftLayoutLabel";


export const ColumnTitleFormat = ({value, ...props}) => {
    return (
        <span className={'column-label-span'}>
            {value}
        </span>
    );
}


export default (props) => {

    let LeftLayout_ = () => <LeftLayoutLabel LabelValue={LeftFormat_}
                                             formControlId={props.field.name}/>;

    let LeftFormat_ = () => <ColumnTitleFormat value={props.field.label}/>;

    let RightLayout_ = () => <RightLayout columnValue={RightFormat_}
                                          size={props.field.viewConfig.size}/>;

    let RightFormat_ = () => <RightFormat name={props.field.name}
                                          onChangeFieldValue={props.onChangeFieldValue}
                                          type={props.field.viewConfig.type}/>;

    return <div key={props.field.id} className={'fieldset-fieldset fieldset-size'}>
        <GenericLeftColumn Column={LeftLayout_}/>
        <GenericRightColumn Column={RightLayout_}/>
    </div>
}



