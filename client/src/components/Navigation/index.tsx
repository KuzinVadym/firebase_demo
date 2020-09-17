import React from 'react';

import useStyles from "./style";
import {Link, useHistory} from "react-router-dom";
import {Button, Grid, Typography} from "@material-ui/core";
import {useMutation, useQuery} from "@apollo/client";
import {GET_AUTH_USER} from "../../pages/Login/queries";
import {LOG_OUT} from "../../pages/Login/mutations";
import {clearSessionStorage} from "../../pages/Login/helpers";

const Navigation = () => {
    const classes = useStyles();
    const history = useHistory();
    const { loading, data } = useQuery(GET_AUTH_USER);

    const [ logout ] = useMutation(LOG_OUT, {
        update(cache, { data: { logout } }) {
            clearSessionStorage();
            history.push(`/login`);
            cache.writeQuery({
                query: GET_AUTH_USER,
                data: { authenticatedUser: null },
            });
        }
    });

    const logoutHandler = () => {
        if(data.authenticatedUser && data.authenticatedUser.uid) {
            logout({ variables: { uid: data.authenticatedUser.uid } })
        }

    };

    return (
        <div>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                className={classes.main}
            >
                <Grid
                    item
                    xs={12} sm={12} md={4} lg={4} xl={3}
                    className={classes.routesItem}
                >
                    <Link to="/" className={classes.link}>Home</Link>
                    <Link to="/login" className={classes.link}>Login</Link>
                    <Link to="/orders" className={classes.link}>Orders</Link>
                </Grid>
                <Grid
                    item
                    xs={12} sm={12} md={4} lg={4} xl={3}
                    className={classes.userItem}
                >
                    <Button
                        id="logout-button"
                        classes={{root: classes.logoutButton}}
                        onClick={() => logoutHandler()}
                    >
                        Log out
                    </Button>

                    <Typography>
                        {!loading && data.authenticatedUser
                            ? data.authenticatedUser.email
                            : ''
                        }
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Navigation;