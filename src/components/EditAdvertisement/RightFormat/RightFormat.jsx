import React from "react";
import PriceFormat from "../PriceFormat/PriceFormat";
import DescriptionFormat from "../DescriptionFormat/DescriptionFormat";
import ImageUploaderFormat from "../ImageUploaderFormat/ImageUploaderFormat";
import FormatWrapper from "../FormatWrapper/FormatWrapper";


export default (props) => {

    const {name, onChangeFieldValue, type} = props;

    let defaultFormat = <input type={"text"}
                               name={name}
                               className={"column-root-textarea"}
                               id={name}
                               onChange={onChangeFieldValue}
                               defaultValue={""}/>;

    if (type === "price") {
        defaultFormat = <>
            <input onChange={onChangeFieldValue}
                   type={"number"}
                   name={name}
                   id={name}
                   className={"input-input-price input-price-format"}
                   defaultValue={""}/>
            <span className={'input-price-after'}>₽</span>
        </>
        return;

    }

    if (type === "description") {
        defaultFormat = <textarea onChange={onChangeFieldValue}
                                  name={name}
                                  id={name}
                                  className={'textarea-textarea-description'}
                                  defaultValue={""}/>

        return;
    }

    if (type === "imageUploader") {
        defaultFormat =
            <div className={'images-block-container'}>
                <FormatWrapper Format={() => <input onChange={onChangeFieldValue}
                                                    type={'file'}
                                                    name={name}
                                                    id={name}
                                                    className={'input-input-imageUploader'}
                                                    defaultValue={""}/>}/>

            </div>
    }

    return defaultFormat;
}