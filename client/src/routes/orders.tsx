import React from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Orders from "../pages/Orders";
import Order from "../pages/Order";


const OrdersRoutes = () => {
    let match = useRouteMatch();
    return(
        <Switch>
            <Route path={`${match.path}/:id`} component={Order} />
            <Route path={match.path} component={Orders} />
        </Switch>
    )
};

export default OrdersRoutes;