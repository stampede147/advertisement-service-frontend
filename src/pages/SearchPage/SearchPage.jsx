import React, {useCallback, useEffect, useState} from "react";
import './SearchPage.css'

import {useSearchParams} from "react-router-dom";
import PATHNAMES from "../../constants/PATHNAMES";
import SinglePageWrapper from "../SinglePageWrapper/SinglePageWrapper";
import NavigationalPanel from "../../components/IndexNavigationPanel/NavigationPanel";
import IndexContainer from "../../container/IndexContainer/IndexContainer";
import FooterPanel from "../../components/FooterPanel/FooterPanel";
import StubComponent from "../../components/StubComponent/StubComponent";
import * as userApi from "../../api/userApi";
import TextLink from "../../components/common/TextLink/TextLink";
import * as advertisementsApi from "../../api/advertisementsApi";
import Pagination from "../../components/common/Pagination/Pagination";
import AdvertisementSearchIndexContainer
    from "../../container/AdvertisementSearchIndexContainer/AdvertisementSearchIndexContainer";



const SearchPage = () => {


    const [searchParams, setSearchParams] = useSearchParams();
    const [advertisementPage, setAdvertisementPage] = useState(null);
    const [userDetails, setUserDetails] = useState(null);

    const searchTitle = searchParams.get("title");

    useEffect(() => {

        userApi.getUserDetails()
            .then(userDetails => setUserDetails(userDetails))

        advertisementsApi.getAdvertisementPageByTitle(searchTitle)
            .then(advertisementPage => setAdvertisementPage(advertisementPage));

    }, [searchTitle])

    const onPageChanged = (paginationData) => {
        advertisementsApi.getAdvertisementPageByTitle(searchTitle, paginationData)
            .then(advertisementPage => setAdvertisementPage(advertisementPage));
    }


    const ItemCard = (props) => {

        const {
            src,
            id, title, price, description, address,
            firstName
        } = props;


        return <div className={'item-root item-root-style'}>
            <div className={'item-root-photo'}>
                <img src={src} alt={'item-image'}/>
            </div>

            <div className={'item-body'}>
                <div className={'item-body-titleStep'}>
                    <TextLink to={PATHNAMES.TO_ADVERTISEMENT + id} text={title}/>
                </div>
                <div className={'item-body-price'}>{price}</div>
                <div className={'item-body-description'}>{description}</div>
                <div className={'item-body-address'}>{address}</div>
            </div>

            <div className={'item-about'}>
                <div className={'item-author'}>
                    <div className={'item-author-name'}>
                        {firstName}
                    </div>
                </div>
            </div>
        </div>
    }

    const ItemContentList = (props) => {
        const {content = []} = props.advertisementPage;

        return <div className={'content-item-list'}>
            {content.map(advertisement => <ItemCard key={advertisement.id}
                                                    src={advertisement.images[0].link}
                                                    id={advertisement.id}
                                                    title={advertisement.title}
                                                    price={advertisement.price}
                                                    description={advertisement.description}
                                                    address={advertisement.location.city + ", " + advertisement.location.street}
                                                    firstName={advertisement.seller.firstName}/>)}
        </div>
    }


    if (!userDetails) {
        return <StubComponent/>;
    }

    if (!advertisementPage) {
        return <StubComponent/>;
    }

    const ItemContentHeader = () => {
        return (
            <div className={'content-item-header'}>
                <h1 className={'content-item-header-header'}>{`Advertisements with «${searchTitle}»`}</h1>
                <span className={'content-item-header-count'}>{advertisementPage.totalElements}</span>
            </div>
        );
    }

    return <SinglePageWrapper
        header={<NavigationalPanel user={userDetails}/>}
        content={<AdvertisementSearchIndexContainer
            Header={<ItemContentHeader/>}
            Content={
                <>
                    <ItemContentList advertisementPage={advertisementPage}/>
                    <Pagination pageNeighbours={1}
                                onPageChanged={onPageChanged}
                                totalPages={advertisementPage.totalPages}
                                currentPage={advertisementPage.number}
                    />
                </>
            }
            Navbar={<StubComponent/>}
        />
        }
        footer={<FooterPanel/>}/>
}

export default React.memo(SearchPage)