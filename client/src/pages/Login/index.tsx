import React, {useContext, useState} from 'react';

import useStyles from "./style";
import {Button, Grid, TextField} from "@material-ui/core";
import {AppContext} from "../../context";

const Login = () => {
    const classes = useStyles();
    const [loginInput, setLoginInput] = useState<string>('coding-challenge@construyo.de');
    const [passwordInput, setPasswordInput] = useState<string>('coding-challenge@construyo.de');

    const {firebaseAuth, setAuthenticatedUser} = useContext(AppContext);
    const changeLoginInputHandler = (e: any) => {
        setLoginInput(e.target.value);
    };
    const changePasswordInputHandler = (e: any) => {
        setPasswordInput(e.target.value);
    };

    const loginHandler = () => {
        console.log('login');
        firebaseAuth.signInWithEmailAndPassword(loginInput, passwordInput).then((result: any) => {
            setAuthenticatedUser({id: result.user.uid, email: result.user.s});
        })
    };

    const logoutHandler = () => {
        console.log('logout')
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
                            label="Login"
                            value={loginInput}
                            className={classes.loginTextField}
                            onChange={(e)=> changeLoginInputHandler(e)}
                            InputProps={{ id: 'login-input' }}
                            InputLabelProps={{ htmlFor: 'login-input' }}
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