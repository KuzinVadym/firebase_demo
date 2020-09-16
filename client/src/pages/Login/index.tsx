import React, { useState } from 'react';
import { useMutation, useQuery } from "@apollo/react-hooks";
import {Button, Grid, TextField} from "@material-ui/core";

import useStyles from "./style";
import {clearSessionStorage, updateSessionStorage} from "./helpers";
import { LOG_IN, LOG_OUT } from './mutations';
import {GET_AUTH_USER} from "./queries";


const Login = () => {
    const classes = useStyles();
    const [emailInput, setEmailInput] = useState<string>('coding-challenge@construyo.de');
    const [passwordInput, setPasswordInput] = useState<string>('coding-challenge@construyo.de');
    const { data } = useQuery(GET_AUTH_USER);

    const [ login ] = useMutation(LOG_IN, {
        update(cache, { data: { login } }) {
            updateSessionStorage(login);
            cache.writeQuery({
                query: GET_AUTH_USER,
                data: { authenticatedUser: login },
            });
        }
    });

    const [ logout ] = useMutation(LOG_OUT, {
        update(cache, { data: { logout } }) {
            console.log(logout);
            clearSessionStorage();
            cache.writeQuery({
                query: GET_AUTH_USER,
                data: { authenticatedUser: null },
            });
        }
    });

    const changeEmailInputHandler = (e: any) => {
        setEmailInput(e.target.value);
    };
    const changePasswordInputHandler = (e: any) => {
        setPasswordInput(e.target.value);
    };

    const loginHandler = async () => {
        console.log('login');
        login({ variables: { email: emailInput, password: passwordInput } })
    };

    const logoutHandler = () => {
        console.log('logout');
        logout({ variables: { uid: data.authenticatedUser.uid } })
    };



    return (
        <Grid
            container
            direction="column"
            justify="space-evenly"
            alignItems="flex-start"
            className={classes.main}
        >
            <Grid
                item
                xs={12} sm={12} md={4} lg={4} xl={3}
            >
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    className={classes.main}
                >
                    <Grid
                        item
                        xs={12} sm={12} md={4} lg={4} xl={3}
                    >
                        <TextField
                            label="Email"
                            value={emailInput}
                            className={classes.emailTextField}
                            onChange={(e)=> changeEmailInputHandler(e)}
                            InputProps={{ id: 'email-input' }}
                            InputLabelProps={{ htmlFor: 'email-input' }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12} sm={12} md={4} lg={4} xl={3}
                    >
                        <TextField
                            label="Password"
                            type="password"
                            value={passwordInput}
                            className={classes.passwordTextField}
                            onChange={(e)=> changePasswordInputHandler(e)}
                            InputProps={{ id: 'password-input' }}
                            InputLabelProps={{ htmlFor: 'password-input' }}
                        />
                    </Grid>
                </Grid>

            </Grid>
            <Grid
                item
                xs={12} sm={12} md={4} lg={4} xl={3}
                className={classes.authButtons}
            >
                <Button
                    id="login-button"
                    variant="contained"
                    classes={{root: classes.loginButton}}
                    onClick={() => loginHandler()}
                >
                    Log in
                </Button>
                <Button
                    id="logout-button"
                    variant="contained"
                    classes={{root: classes.logoutButton}}
                    onClick={() => logoutHandler()}
                >
                    Log out
                </Button>
            </Grid>
        </Grid>
    );
};

export default Login;