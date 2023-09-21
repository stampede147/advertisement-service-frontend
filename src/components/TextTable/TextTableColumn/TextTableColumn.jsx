import React from "react";
import './TextTableColumn.css'
import TextTableCategoryRow from "../TextTableCategoryRow/TextTableCategoryRow";

export default (props) => {

    const {categoryNode, onClick} = props;

    return <div className={'text-table-column'}>
        <div className={'text-table-column-title text-table-column-title-size'}>
            {categoryNode.title}
        </div>
        {categoryNode.children.map(categoryChildren => {
            return <TextTableCategoryRow title={categoryChildren.title}
                                         onClick={() => onClick(categoryChildren)}
                                         isSelected={categoryChildren.isSelected}/>
        })}
    </div>
}