import GenericPage from "../GenericPage/GenericPage";
import React, {useEffect} from "react";
import SearchHeader from "../../components/SearchHeader/SearchHeader";
import ChatPreviewList from "../../components/ChatPreview/ChatPreviewList";
import {json} from "react-router-dom";

const MyChats = ({state}) => {
    const options = {
        method: "GET",
        headers: new Headers({"Content-Type": 'application/json'}),
        mode: 'cors'
    };


    useEffect(() => {
        fetch('http://localhost:8080/api/v1/chats/3', options)
            .then(rawResponse => rawResponse.json())
            .then(jsonResponse => console.log(jsonResponse));
    }, []);


    return (
        <GenericPage header={SearchHeader}
                     content={ChatPreviewList}
                     state={state}
        />
    )
}

export default MyChats