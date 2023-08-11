import React from "react";
import "./SearchHeader.css"

const SearchHeader = () => {
    return (
        <div className='search-header'>
            <form className='search-input-form'>
                <input placeholder={'Поиск по объявлениям'}/>
                <button type='button'>
                    Найти
                </button>
            </form>
        </div>
    );
}

export default SearchHeader;