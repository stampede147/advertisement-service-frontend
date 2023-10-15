import React, {useRef} from "react";
import './SearchInput.css'
import Loupe from './loupe.svg'
import * as advertisementsApi from "../../../api/advertisementsApi";
import {createSearchParams, useNavigate} from "react-router-dom";
import PATHNAMES from "../../../constants/PATHNAMES";
import searchPage from "../../../pages/SearchPage/SearchPage";

export default () => {

    const searchRef = useRef(null)

    let navigateFunction = useNavigate();

    function onSearchClick() {
        const currentValue = searchRef.current.value
        const params = { title: currentValue};

        const search = "?title=" + currentValue;
        const state = {title: currentValue};
        navigateFunction({pathname: PATHNAMES.SEARCH, search: `?${createSearchParams(params)}`})
    }


    return (
        <div className={'index-search-input-root'}>

            <div className={'index-search-input-inner'}>
                <div className={'index-search-left content-placing-center index-search-separator'}>
                    <img src={Loupe}/>
                </div>

                <div className={'index-search-right content-placing-center index-search-separator'}>
                    <input ref={searchRef} id={"search"} autoComplete={"off"} placeholder={"Поиск по объявлениям"}/>
                </div>

                <div className={'index-search-button index-search-button-style index-search-button-compensation'}>
                    <button onClick={onSearchClick}>
                        search
                    </button>
                </div>
            </div>
        </div>

    );
}