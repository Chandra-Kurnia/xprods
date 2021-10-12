import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react'
import Home from "./views/Home";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
