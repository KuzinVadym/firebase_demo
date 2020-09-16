import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject,
    ApolloProvider
} from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
import * as serviceWorker from './serviceWorker';
import {AppProvider} from "./context";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <AppProvider>
            <App />
        </AppProvider>,
    </ApolloProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();