import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import Home from '../pages/Home';
import Login from '../pages/Login';
import OrdersRoot from "../pages/OrdersRoot";
import NoMatch from '../pages/NoMatch';
import Navigation from "../components/Navigation";



const authCheck = () => {
    return sessionStorage.getItem("uid") !== null;
};

interface PrivateProps {
    path: string
}

const PrivateRoute: React.FC<PrivateProps> = ({ children, path }) => {


    return (
        <Route
            path={path}
            render={({ location }) =>
                authCheck() ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

const Routes: React.FC<{}> = () => {

    return(
        <Router>
            <Navigation />
            <Switch>
                <Route exact path="/" >
                    <Home />
                </Route>
                <Route exact path="/login" component={Login} />
                <PrivateRoute path="/orders">
                    <OrdersRoot />
                </PrivateRoute>
                <Route component={NoMatch}/>
            </Switch>
        </Router>
    );
};

export default Routes;