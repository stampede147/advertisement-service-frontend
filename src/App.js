import './App.css';
import React, {useEffect} from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MyAdvertisementsPage from "./pages/MyAdvertisementsPage/MyAdvertisementsPage";
import State from "./redux/state";
import MyChatsPage from "./pages/MyChatsPage/MyChatsPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import AdvertisementPage from "./pages/AdvertisementPage/AdvertisementPage";
import * as chatApi from './api/chatApi'

function App() {

    return (
        <div className="content">
            <BrowserRouter>
                <Routes>
                    <Route path={'/profile/advertisements'}
                           element={<MyAdvertisementsPage state={State.advertisementsPage.content}/>}/>

                    <Route path={'profile/advertisements/:id'}
                           element={<AdvertisementPage state={{advertisement: State.advertisementsPage.content[0]}}/>}/>

                    {/*+*/}
                    <Route path={'/profile/chats'} element={
                        <MyChatsPage/>
                    }/>

                    {/*+*/}
                    <Route path={'/profile/chats/:id'} element={
                        <ChatPage/>}
                    />

                    {/*+*/}
                    <Route path={'/login'}
                           element={<LoginPage registrationLink={
                               {url: '/registration'}
                           }/>}/>

                    {/*+*/}
                    <Route path={'/registration'}
                           element={<RegistrationPage/>}/>

                    <Route path={"/"}
                           element={null}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
        ;
}


export default App;
