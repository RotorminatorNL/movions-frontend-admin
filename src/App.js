import {BrowserRouter as Router, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./assets/css/App.css";
import "./assets/css/BasicCssClasses.css";
import Home from "./views/Home";
import Companies from "./views/company/Companies";
import Company from "./views/company/Company";
import Genres from "./views/genre/Genres";
import Genre from "./views/genre/Genre";
import Languages from "./views/language/Languages";
import Language from "./views/language/Language";
import Movies from "./views/movie/Movies";
import Movie from "./views/movie/Movie";
import Persons from "./views/person/Persons";
import Person from "./views/person/Person";

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
                        <Route exact path="/companies">
                            <Companies/>
                        </Route>
                        <Route exact path="/company/:id">
                            <Company/>
                        </Route>
                        <Route exact path="/genres">
                            <Genres/>
                        </Route>
                        <Route exact path="/genre/:id">
                            <Genre/>
                        </Route>
                        <Route exact path="/languages">
                            <Languages/>
                        </Route>
                        <Route exact path="/language/:id">
                            <Language/>
                        </Route>
                        <Route exact path="/movies">
                            <Movies/>
                        </Route>
                        <Route exact path="/movie/:id">
                            <Movie/>
                        </Route>
                        <Route exact path="/persons">
                            <Persons/>
                        </Route>
                        <Route exact path="/person/:id">
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
