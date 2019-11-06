import React from 'react';
import SearchBar from './components/SearchBar';
import Details from './components/Details';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {

    return (
        <BrowserRouter>
            <Route path="/" exact component={SearchBar}/>
            <Route path="/pokemon/:name" exact strict component={Details}/>
        </BrowserRouter>
    );
}

export default App;