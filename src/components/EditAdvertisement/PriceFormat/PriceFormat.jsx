import React from "react";
import './PriceFormat.css'
import FormatWrapper from "../FormatWrapper/FormatWrapper";


export default ({defaultValue, ...props}) => {
    return <FormatWrapper Format={() => <>
        <input onChange={props.onChange}
               type={"number"}
               name={"price"}
               id={'price'}
               className={"input-input-price input-price-format"}
               defaultValue={defaultValue}/>
        <span className={'input-price-after'}>₽</span>
    </>
    }
    />
}