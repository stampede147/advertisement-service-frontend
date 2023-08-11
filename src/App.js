import './App.css';
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Advertisement from "./components/Advertisement/Advertisement";
import MyAdvertisements from "./components/AdvertisementList/AdvertisementList";
import SearchHeader from "./components/SearchHeader/SearchHeader";

let props = {
    title: "Advertisement title",
    createdAt: "2022.12.23",
    id: 12321,
    price: 140,
    description: "HELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLD".repeat(50),
    imgSourceUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVX4e9TfOmFxxc9Veul-RLjWTnrX-FWPezbXNSHgAi&s",
    owner: {
        name: "Evgeniy",
        imgSourceUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVX4e9TfOmFxxc9Veul-RLjWTnrX-FWPezbXNSHgAi&s"
    },
}

const routes = [
    {path: 'login', element: Login}
    // { path:'', component: },
]

function App() {
    return (
        <div className="content">
            <BrowserRouter>
                <Routes>
                    <Route path={'/login'} element={<Login registrationLink={{url: '/registration'}}/>}/>
                    <Route path={'/registration'} element={<Registration/>}/>
                    <Route path={'/advertisement'} element={<Advertisement header = {SearchHeader} advertisement={props}/>}/>
                    <Route path={'/advertisements'} element={<MyAdvertisements/>}/>
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}


export default App;