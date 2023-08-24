import './Advertisement.css'
import React, {useEffect, useState} from "react";
import ItemDetailsContent from "./ItemDetailsContent/ItemDetailsContent";
import ItemPrice from "./ItemPriceHeader/ItemPriceHeader";
import ItemAuthorContent from "./ItemAuthorContent/ItemAuthorContent";
import ItemTitle from "./ItemTitle/ItemTitle";
import ItemHeader from "./common/ItemHeader";
import {useParams} from "react-router-dom";
import * as advertisementApi from "../../api/advertisementApi";
import State from "../../redux/state";


const Advertisement = ({
                           state,
                       }) => {

    const params = useParams();
    const [advertisement, setAdvertisement] = useState(State.advertisementsPage.content[0])

    useEffect(() => {
        const fetchData = async () => {
            const advertisementPage = await advertisementApi.getOne(params.id);
            setAdvertisement(advertisementPage);
        }
        fetchData()
    }, []);

    return (
        <div className='advertisement-content-root'>
            <div className='item-left'>
                <ItemHeader advertisement={advertisement}
                            header={ItemTitle}/>
                <ItemDetailsContent advertisement={advertisement}/>
            </div>
            <div className='item-right'>
                <ItemHeader advertisement={advertisement}
                            header={ItemPrice}/>
                <ItemAuthorContent advertisement={advertisement}/>
            </div>
        </div>
    )
}

export default Advertisement;
