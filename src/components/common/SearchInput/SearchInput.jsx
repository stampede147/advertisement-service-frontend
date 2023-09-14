import React from "react";
import './SearchInput.css'
import Loupe from './loupe.svg'
export default () => {

    return (
        <div className={'index-search-input-root'}>

            <div className={'index-search-input-inner'}>
                <div className={'index-search-left content-placing-center index-search-separator'}>
                    <img src={Loupe}/>
                </div>

                <div className={'index-search-right content-placing-center index-search-separator'}>
                    <input placeholder={"Поиск по объявлениям"}/>
                </div>
            </div>
        </div>

    );
}