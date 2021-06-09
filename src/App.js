import {BrowserRouter as Router, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./assets/css/App.css";
import "./assets/css/BasicCssClasses.css";
import Home from "./views/Home";
import Company from "./views/Company";
import Genre from "./views/Genre";
import Language from "./views/Language";
import Movie from "./views/Movie";
import Person from "./views/Person";

function App() {
    return (
        <Router>
            <div className="app">
                <div className="background"></div>
                <Navigation />
                <div className="container">
                    <div className="content">
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/company">
                            <Company/>
                        </Route>
                        <Route exact path="/genre">
                            <Genre/>
                        </Route>
                        <Route exact path="/language">
                            <Language/>
                        </Route>
                        <Route exact path="/movie">
                            <Movie/>
                        </Route>
                        <Route exact path="/person">
                            <Person/>
                        </Route>
                    </div>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
