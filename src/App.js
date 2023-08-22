import './App.css';
import React  from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MyAdvertisementsPage from "./pages/MyAdvertisementsPage/MyAdvertisementsPage";
import State from "./redux/state";
import MyChats from "./pages/MyChatsPage/MyChatsPage";
import ChatPage from "./pages/ChatPage/ChatPage";
import AdvertisementPage from "./pages/AdvertisementPage/AdvertisementPage";

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
                        <MyChats state={State}/>
                    }/>

                    {/*+*/}
                    <Route path={'/profile/chats/:id'} element={
                        <ChatPage state={
                            {
                                chat: State.chatsPage.content[0],
                                messages: State.messagesPage.content
                            }

                        }/>}
                    />

                    {/*+*/}
                    <Route path={'/login'}
                           element={<LoginPage registrationLink={
                               {url: '/registration'}
                           }/>}/>

                    {/*+*/}
                    <Route path={'/registration'}
                           element={<RegistrationPage/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    )
        ;
}


export default App;
