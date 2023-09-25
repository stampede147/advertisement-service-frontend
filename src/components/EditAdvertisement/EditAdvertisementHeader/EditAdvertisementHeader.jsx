import React from "react";
import './EditAdvertisementHeader.css'
import TextTable from "../../TextTable/TextTable";


export default (props) => {

    const {enabled} = props;

    const {selectedCategories, selectCategory} = props;

    const {onClick} = props;

    let formattedCategories = selectedCategories.slice(1, selectedCategories.length)
        .map(category => category.title)
        .join(" / ");

    return <>
        <div className={'edit-group-header-header'}>

            <div className={'group-title-font group-title-text-size group-title-key'}>
                <span>Category</span>
            </div>

            {!enabled &&
                <div onClick={onClick}
                     className={'column-root group-title-font group-title-text-size group-title-value group-title-value'}>
                    <span>{formattedCategories}</span>
                </div>}
        </div>
        {enabled && <TextTable selectedCategories={selectedCategories}
                               selectCategory={selectCategory}/>}
    </>
}