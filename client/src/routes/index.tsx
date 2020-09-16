import React, {useContext} from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import Home from '../pages/Home';
import Login from '../pages/Login';
import Orders from '../pages/Orders';
import NoMatch from '../pages/NoMatch';
import Navigation from "../components/Navigation";
import {AppContext} from "../context";

import {IUser} from "../interfaces/IUser";

const authCheck = (authenticatedUser: IUser | null) => {
    return authenticatedUser !== null;
};

interface PrivateProps {
    path: string
}

const PrivateRoute: React.FC<PrivateProps> = ({ children, path }) => {

    const {authenticatedUser} = useContext(AppContext);

    return (
        <Route
            path={path}
            render={({ location }) =>
                authCheck(authenticatedUser) ? (
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
                    <Orders />
                </PrivateRoute>
                <Route component={NoMatch}/>
            </Switch>
        </Router>
    );
};

export default Routes;