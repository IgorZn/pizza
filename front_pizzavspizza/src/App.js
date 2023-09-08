import logo from './pizza_logo.png';
import Pizzalist from "./pizzerias/pizzeriaslist";
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Web App for Pizza lovers
                </p>
                <h1>
                    Pizza vs Pizza
                </h1>
                <Pizzalist/>
            </header>
        </div>
    );
}

export default App;
