import './App.css';
import Advertisement from "./components/Advertisement/Advertisement";

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

function App() {
    return (
        <div className="App">
            <Advertisement advertisement={props}/>
        </div>
    );
}


export default App;
