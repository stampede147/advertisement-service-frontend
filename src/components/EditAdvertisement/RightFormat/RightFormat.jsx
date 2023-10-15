import React from "react";
import PriceFormat from "../PriceFormat/PriceFormat";
import DescriptionFormat from "../DescriptionFormat/DescriptionFormat";
import ImageUploaderFormat from "../ImageUploaderFormat/ImageUploaderFormat";
import FormatWrapper from "../FormatWrapper/FormatWrapper";


export default (props) => {

    const {name, onChangeFieldValue, type} = props;

    let DefaultFormat = <input type={"text"}
                               name={name}
                               className={"column-root-textarea column-root-input-style"}
                               id={name}
                               onChange={onChangeFieldValue}
                               defaultValue={""}/>;

    if (type === "price") {
        return <>
            {DefaultFormat}
            <span className={'input-price-after'}>₽</span>
        </>
    }

    if (type === "description") {
        return <textarea onChange={onChangeFieldValue}
                         name={name}
                         id={name}
                         className={'textarea-textarea-description'}
                         defaultValue={""}/>

    }

    if (type === "imageUploader") {
        DefaultFormat =
            <div className={'images-block-container'}>
                <FormatWrapper Format={() => <input onChange={onChangeFieldValue}
                                                    type={'file'}
                                                    name={name}
                                                    id={name}
                                                    className={'input-input-imageUploader'}
                                                    defaultValue={""}/>}/>

            </div>
        return DefaultFormat;
    }

    return DefaultFormat;
}