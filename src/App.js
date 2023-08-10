import './App.css';
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

let props = {
    title: "Advertisement-title",
    createdAt: "2022.12.23",
    id: 12321,
    price: 140,
    description: "HELLO WORLDHELLO WORLDHELLO WORLDHELLO WORLD",
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
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={'/login'} element={<Login registrationLink={{url: '/registration'}}/>}/>
                    <Route path={'/registration'} element={<Registration />}/>
                </Routes>
            </BrowserRouter>
            {/*<AdvertisementList advertisement={props}/>*/}
            {/*<Advertisement advertisement={props}/>*/}
        </div>
    );
}


export default App;
