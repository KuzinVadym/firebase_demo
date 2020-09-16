import React from 'react';

import useStyles from "./style";
import {Link} from "react-router-dom";

const Navigation = () => {
    const classes = useStyles();

    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/orders">Orders</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;