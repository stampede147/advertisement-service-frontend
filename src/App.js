import './App.css';
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Advertisement from "./components/Advertisement/Advertisement";
import AdvertisementList from "./components/MyAdvertisements/MyAdvertisements";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import Chat from "./components/Chat/Chat";

let advertisement = {
    title: "Advertisement title",
    createdAt: "2022.12.23",
    id: 12321,
    price: 140,
    address: "г. Москва, ул. Алябьева, 4к3",
    description: "HELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLD".repeat(50),
    imgSourceUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVX4e9TfOmFxxc9Veul-RLjWTnrX-FWPezbXNSHgAi&s",
    owner: {
        name: "Evgeniy",
        imgSourceUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVX4e9TfOmFxxc9Veul-RLjWTnrX-FWPezbXNSHgAi&s"
    },
}
let advertisements = [advertisement];
const routes = [
    {path: 'login', element: Login}
    // { path:'', component: },
]

function App() {

    return (
        <div className="content">
            <BrowserRouter>
                <Routes>
                    <Route path={'/profile'}
                           element={<AdvertisementList advertisements={advertisements}/>}/>

                    <Route path={'/profile/advertisements'}
                           element={<AdvertisementList advertisements={advertisements}/>}/>

                    <Route path={'profile/advertisements/:id'}
                           element={<Advertisement header={SearchHeader} advertisement={advertisement}/>}/>

                    <Route path={'/login'}
                           element={<Login registrationLink={{url: '/registration'}}/>}/>

                    <Route path={'/registration'}
                           element={<Registration/>}/>

                    <Route path='/chat'
                           element={<Chat/>}/>


                </Routes>
            </BrowserRouter>
        </div>
    )
        ;
}


export default App;
