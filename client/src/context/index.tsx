import React, {createContext, useEffect, useState} from 'react';
import * as firebase from 'firebase';

import { settings } from '../settings'

const AppContext = createContext(undefined);

const AppProvider: React.FC = ({ children }) => {

    const [firebaseAuth, setFirebaseAuth] = useState(null);
    const [authenticatedUser, setAuthenticatedUser] = useState(null);

    useEffect(()=>{
        if(firebaseAuth === null) {
            firebase.initializeApp(settings.firebase);

            setFirebaseAuth(firebase.auth())
        }
    }, [firebaseAuth]);

    return (
        <AppContext.Provider value={{firebaseAuth, authenticatedUser, setAuthenticatedUser}}>
            {children}
        </AppContext.Provider>
    )
};

export { AppProvider, AppContext };