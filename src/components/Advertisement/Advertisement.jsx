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


const Advertisement = ({state, ...props}) => {


    const itemTitleHeaderRef = useRef(null);
    const itemPriceHeaderRef = useRef(null);


    useEffect(() => {
        itemPriceHeaderRef.current.style.height = itemTitleHeaderRef.current.offsetHeight + 'px';
    }, []);


    if (props.loading) {
        return <StubComponent/>
    }

    const advertisement = state.advertisement;
    const user = state.user;

    const createChatAction = () => {
        chatApi.createChat({
                "advertisementId": advertisement.id,
            }
        );
    }
    const SendMessageButton = () => {
        return (
            true
                ? <div className={"send-message-button-wrapper"}>
                    <div className={'send-message-button-bcolor'}>
                        <ActionButton onClick={() => createChatAction()} text={"send message"}/>
                    </div>
                </div>
                : <StubComponent/>);
    }

    const  Block = (params) => {
        return (
            <div className={'item-details-content-root'}>
                <div className={'item-details-content-title'}>
                    <h3>{params.title}</h3>
                </div>
                <div className={'item-details-content-content'}>
                    <span>{params.content}</span>
                </div>
            </div>
        );
    }

    return (
        <div className='advertisement-content-root'>

            <div className={'advertisement-content-line-breadcrumb'}>
                Personal items > Shoes
            </div>
            <div className={"item-inner"}>
                <div className='item-left'>
                    <ItemHeader ref={itemTitleHeaderRef}
                                advertisement={advertisement}
                                header={ItemTitle}/>
                    <ItemDetailsContent advertisement={advertisement}/>
                    <Block title={"Description"} content={advertisement.description}/>
                </div>

                <div className='item-right'>
                    <ItemHeader ref={itemPriceHeaderRef}
                                advertisement={advertisement}
                                header={ItemPrice}/>
                    <ItemAuthorContent
                        authorImage={State.imgSourceUrl}
                        authorName={advertisement.seller.firstName}
                    />
                    <SendMessageButton/>
                </div>
            </div>
        </div>
    )
}

export default Advertisement;
