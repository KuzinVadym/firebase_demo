import Koa from 'koa';
import cors from '@koa/cors';
import { ApolloServer } from 'apollo-server-koa';
import schema from './schema';
import resolvers from './resolvers';
import models from './models';
import admin from 'firebase-admin'
import * as firebase from 'firebase';
import {settings} from "./settings";

admin.initializeApp({credential: admin.credential.cert(settings.firebase.admin)});
const db = admin.firestore();

firebase.initializeApp(settings.firebase.client);
const auth = firebase.auth();

const server = new ApolloServer({
        typeDefs : schema,
        resolvers,
        context: async ({ctx}: Koa.Context) => {
            if (ctx.req) {
                return {
                    req: ctx.req,
                    res: ctx.res,
                    models,
                    db,
                    auth
                };
            }
        }
    }
);

const app = new Koa();

app.use(cors());

server.applyMiddleware({app});

app.listen({port: 4000}, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
});