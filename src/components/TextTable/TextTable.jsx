import React from "react";
import './TextTable.css'
import TextTableColumn from "./TextTableColumn/TextTableColumn";

export default (props) => {

    const {selectedCategories, selectCategory} = props;

    return <div  className={'text-table-row-root'}>
        {selectedCategories.map(category => category.children &&
            <TextTableColumn categoryNode={category} onClick={selectCategory}/>)}
    </div>
}