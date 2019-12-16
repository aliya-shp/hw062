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
                    <NavLink to="/" exact className="NavButton"> Cappadocia </NavLink>
                    <NavLink to="/Istanbul" className="NavButton"> Istanbul </NavLink>
                    <NavLink to="/Izmir" className="NavButton"> Izmir </NavLink>
                    <Switch>
                        <Route path="/" exact component={Cappadocia}/>
                        <Route path="/Istanbul" component={Istanbul}/>
                        <Route path="/Izmir" component={Izmir}/>
                        <Route render={() => <h1>Not found</h1>} />
                    </Switch>
                </BrowserRouter>
            </main>
        </div>
    );
}

export default App;
