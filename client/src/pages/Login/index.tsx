import React, { useState } from 'react';
import { useMutation, useQuery } from "@apollo/react-hooks";
import {Button, Grid, Paper, TextField} from "@material-ui/core";

import useStyles from "./style";
import {clearSessionStorage, updateSessionStorage} from "./helpers";
import { LOG_IN, LOG_OUT } from './mutations';
import {GET_AUTH_USER} from "./queries";
import {useHistory} from "react-router";


const Login = () => {
    const classes = useStyles();
    const history = useHistory();
    const [emailInput, setEmailInput] = useState<string>('coding-challenge@construyo.de');
    const [passwordInput, setPasswordInput] = useState<string>('coding-challenge@construyo.de');
    const { loading, data } = useQuery(GET_AUTH_USER);

    const [ login ] = useMutation(LOG_IN, {
        update(cache, { data: { login } }) {
            updateSessionStorage(login);
            setEmailInput('');
            setPasswordInput('');
            cache.writeQuery({
                query: GET_AUTH_USER,
                data: { authenticatedUser: login },
            });
        }
    });

    const [ logout ] = useMutation(LOG_OUT, {
        update(cache, { data: { logout } }) {
            clearSessionStorage();
            history.push(`/login`);
            setEmailInput('coding-challenge@construyo.de');
            setPasswordInput('coding-challenge@construyo.de');
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
        if(emailInput !== '' && passwordInput !== ''){
            login({ variables: { email: emailInput, password: passwordInput } })
        }
    };

    const logoutHandler = () => {
        if(data.authenticatedUser && data.authenticatedUser.uid) {
            logout({ variables: { uid: data.authenticatedUser.uid } })
        }
    };

    return (
        <div className={classes.main}>
            <Paper elevation={5} className={classes.paper}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className={classes.body}
                >
                    <Grid
                        item
                        xs={12}
                        className={classes.inputItems}
                    >
                        <TextField
                            label="Email"
                            value={emailInput}
                            className={classes.textField}
                            onChange={(e)=> changeEmailInputHandler(e)}
                            InputProps={{ id: 'email-input' }}
                            InputLabelProps={{ htmlFor: 'email-input' }}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            value={passwordInput}
                            className={classes.textField}
                            onChange={(e)=> changePasswordInputHandler(e)}
                            InputProps={{ id: 'password-input' }}
                            InputLabelProps={{ htmlFor: 'password-input' }}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        className={classes.authButtons}
                    >
                        <Button
                            id="login-button"
                            variant="contained"
                            disabled={emailInput === '' && passwordInput === ''}
                            classes={{root: classes.loginButton}}
                            onClick={() => loginHandler()}
                        >
                            Log in
                        </Button>
                        {!loading && data.authenticatedUser
                            ? <Button
                                id="logout-button"
                                variant="contained"
                                classes={{root: classes.logoutButton}}
                                onClick={() => logoutHandler()}
                            >
                                Log out
                            </Button>
                            : null
                        }
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Login;