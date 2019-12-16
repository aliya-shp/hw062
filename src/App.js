import React from 'react';
import {Route, Switch, BrowserRouter, NavLink} from 'react-router-dom';

import Cappadocia from "./containers/Cappadocia/Cappadocia";
import Istanbul from "./containers/Istanbul/Istanbul";
import Izmir from "./containers/Izmir/Izmir";

import './App.css';

function App() {
    return (
        <div className="App">
            <header>
                <h2>Turkey's views</h2>
            </header>
            <main>
                <BrowserRouter>
                    <NavLink to="/" exact> Cappadocia </NavLink>
                    <NavLink to="/Istanbul" exact> Istanbul </NavLink>
                    <NavLink to="/Izmir" exact> Izmir </NavLink>
                    <Route path="/" exact component={Cappadocia}/>
                    <Route path="/Istanbul" component={Istanbul}/>
                    <Route path="/Izmir" component={Izmir}/>
                    <Route render={() => <h1>Not found</h1>} />
                </BrowserRouter>
            </main>
        </div>
    );
}

export default App;
