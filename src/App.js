import './App.css';
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Advertisement from "./components/Advertisement/Advertisement";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import Chat from "./components/Chat/Chat";
import MyAdvertisements from "./components/MyAdvertisements/MyAdvertisements";
import State from "./redux/state";
import MyChats from "./components/MyChats/MyChats";
import Chat1 from "./components/Chat/Chat1";
import GenericChatHeader from "./components/GenericChatHeader/GenericChatHeader";
import StubComponent from "./components/StubComponent/StubComponent";
import AdvertisementAuthorImg from "./components/AdvertisementAuthorImg/AdvertisementAuthorImg";
import ChatHeader1 from "./components/Chat/ChatHeader1";

function App() {

    return (
        <div className="content">
            <BrowserRouter>
                <Routes>
                    <Route path={'/profile/advertisements'}
                           element={<MyAdvertisements state={State}/>}/>

                    <Route path={'profile/advertisements/:id/*'}
                           element={<Advertisement header={SearchHeader}
                                                   advertisement={State.advertisementsPage[0]}/>}/>

                    <Route path={'/profile/chats'} element={
                        <MyChats state={State}/>
                    }/>

                    <Route path={'/profile/chat1'} element={
                        <Chat1 left={StubComponent} right={StubComponent} state={State}/>
                    }/>
                    <Route path={'/profile/chat'} element={
                        <ChatHeader1 state={State.advertisementsPage.content[0]}/>
                    }/>


                    <Route path={'/login'}
                           element={<Login registrationLink={{url: '/registration'}}/>}/>

                    <Route path={'/registration'}
                           element={<Registration/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    )
        ;
}


export default App;
