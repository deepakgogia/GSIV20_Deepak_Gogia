import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './../Components/Parent/Search';
import ShowDetails from './../Components/Parent/ShowDetails';
export const AppRoutes = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route path="/:id" component={ShowDetails} />
                <Route component={Search} />
            </Switch>
        </BrowserRouter>
    </>
)