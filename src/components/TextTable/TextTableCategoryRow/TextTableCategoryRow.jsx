import React from "react";
import './TextTableCategoryRow.css'


export default ({title, isSelected, onClick}) => {

    return (
        <div className={`text-table-category text-table-category-size ${isSelected && 'text-table-category_active'}`} onClick={onClick}>
            {title}
        </div>);
}