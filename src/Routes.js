import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react'
import productController from './controllers/ProductController'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={productController}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
