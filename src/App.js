import './App.css';
import React, {useEffect} from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MyAdvertisementsPage from "./pages/MyAdvertisementsPage/MyAdvertisementsPage";
import MyChatsPage from "./pages/MyChatsPage/MyChatsPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import AdvertisementPage from "./pages/AdvertisementPage/AdvertisementPage";
import PATHNAMES from "./constants/PATHNAMES";
import EditAdvertisement from "./components/EditAdvertisement/EditAdvertisement";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import AddAdvertisementPage from "./pages/AddAdvertisementPage/AddAdvertisementPage";
import MainPage from "./pages/MainPage/MainPage";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {

    return (
        <BrowserRouter>
            <Routes>

                <Route path={PATHNAMES.MAIN} element={<MainPage/>}/>

                <Route path={PATHNAMES.SEARCH} element={<SearchPage/>}/>

                {/*<Route path={PATHNAMES.EDIT_ADVERTISEMENT} element={<EditAdvertisement/>}/>*/}

                <Route path={'/profile/advertisements'} element={<MyAdvertisementsPage/>}/>

                <Route path={'/profile/settings'} element={<SettingsPage/>}/>

                <Route path={'/advertisements/:advertisementId'} element={<AdvertisementPage/>}/>

                <Route path={'/profile/chats'} element={<MyChatsPage/>}/>

                <Route path={'/profile/chats/:chatId'} element={<ChatPage/>}/>

                <Route path={PATHNAMES.CREATE_ADVERTISEMENT} element={<AddAdvertisementPage/>}/>

                <Route path={'/login'}
                       element={<LoginPage/>}/>

                <Route path={'/registration'}
                       element={<RegistrationPage/>}/>

            </Routes>
        </BrowserRouter>
    );
}


export default App;
