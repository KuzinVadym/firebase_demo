
Configuration:

Pass 2 JSON files to server/config folder:
  - `serviceAccountKey.json` file for firebase-admin sdk
  - `clientFirebaseConfig.json` file for firebase sdk

Development:
  - server | To start development on server side run `yarn watch` it will run nodemon with config from `nodemon.json`
  - client | To start develop on client side run `yarn start` it will run webpack-dev-server on port 3000
  
Firebase adn GraphQL

    Normaly you will include firebase as part of client and create component 
    lisening events from firebase sdk for example for realtime update(rerender)
    components acordingly to changes in firestore, and this will be easy implement 
    with useEffect/useState hooks. With GraphQL you can use local state/cash
    if you know of course how to use it(because I don't... for now) ))) I will update repo with firebase 
    on client side after some investigation, for now I imlement standart cashing 
    workflow with authenticated user in `InMemoryCache`. 
    
Auth and Redis

    Right now Auth model suport singe authenticated user. Normaly you would 
    like to put auth user in to redis and keep his session. 
    In terms of saving some time I leave implementation of Reddis sessions on next update.
    
         
