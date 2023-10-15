import './Advertisement.css'
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import ItemDetailsContent from "./ItemDetailsContent/ItemDetailsContent";
import ItemPrice from "./ItemPriceHeader/ItemPriceHeader";
import ItemAuthorContent from "./ItemAuthorContent/ItemAuthorContent";
import ItemTitle from "./ItemTitle/ItemTitle";
import ItemHeader from "./common/ItemHeader";
import State from "../../constants/state";
import stubComponent from "../StubComponent/StubComponent";
import StubComponent from "../StubComponent/StubComponent";
import ActionButton from "../common/ActionButton/ActionButton";
import * as chatApi from "../../api/chatApi";
import {useNavigate} from "react-router-dom";
import PATHNAMES from "../../constants/PATHNAMES";
import * as Path from "path";


const Advertisement = ({advertisement, ...props}) => {


    let navigate = useNavigate();
    const itemTitleHeaderRef = useRef(null);
    const itemPriceHeaderRef = useRef(null);


    const {seller} = advertisement;

    useEffect(() => {
        itemPriceHeaderRef.current.style.height = itemTitleHeaderRef.current.offsetHeight + 'px';
    }, []);




    const createChatAction = () => {
        let body = {
            "advertisementId": advertisement.id,
        };

        chatApi.createChat(body)
            .then(resp => {
                let location = resp.headers.get("location");
                let lastIndex = location.lastIndexOf("/");
                let createdChatId = location.substring(lastIndex+1);
                console.log(createdChatId)
                navigate(PATHNAMES.PROFILE_CHAT_TO + createdChatId )
            });
    }
    const SendMessageButton = () => {
        return (
            advertisement.seller.id !== localStorage.getItem("USER_ID")
                ? <div className={"send-message-button-wrapper"}>
                    <div className={'send-message-button-bcolor'}>
                        <ActionButton onClick={() => createChatAction()} text={"send message"}/>
                    </div>
                </div>
                : <StubComponent/>);
    }

    const ParameterBlock = (params) => {
        return (
            <div className={'item-details-content-root'}>
                <div className={'item-details-content-title'}>
                    <h3>{params.title}</h3>
                </div>
                <div className={'item-details-content-content item-details-content-formatting'}>
                    <span>{params.content}</span>
                </div>
            </div>
        );
    }

    return <div className='advertisement-content-root'>

            <div className={'advertisement-content-line-breadcrumb'}>
                {advertisement.category && advertisement.category.format}
            </div>
            <div className={"item-inner"}>
                <div className='item-left'>
                    <ItemHeader ref={itemTitleHeaderRef}
                                advertisement={advertisement}
                                header={ItemTitle}/>
                    <ItemDetailsContent advertisement={advertisement}/>
                    <ParameterBlock title={"Description"} content={advertisement.description}/>
                </div>

                <div className='item-right'>
                    <ItemHeader ref={itemPriceHeaderRef}
                                advertisement={advertisement}
                                header={ItemPrice}/>
                    <ItemAuthorContent
                        authorImage={seller.image && seller.image.link}
                        authorName={seller.firstName}
                    />
                    <SendMessageButton/>
                </div>
            </div>
        </div>;
}

export default Advertisement;
