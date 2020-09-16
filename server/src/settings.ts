import * as serviceAccount from '../config/serviceAccountKey.json'
import * as firebaseConfig from '../config/clientFirebaseConfig.json'

import ISettings from './interfaces/ISettings';

const settings: ISettings = {
    firebase: {
        client: {
            apiKey: firebaseConfig.apiKey,
            authDomain: firebaseConfig.authDomain,
            databaseURL: firebaseConfig.databaseURL,
            projectId: firebaseConfig.projectId,
            storageBucket: firebaseConfig.storageBucket,
            messagingSenderId: firebaseConfig.messagingSenderId,
            appId: firebaseConfig.appId
        },
        admin: {
            type: serviceAccount.type,
            projectId: serviceAccount.project_id,
            privateKeyId: serviceAccount.private_key_id,
            privateKey: serviceAccount.private_key,
            clientEmail: serviceAccount.client_email,
            clientId: serviceAccount.client_id,
            authUri: serviceAccount.auth_uri,
            tokenUri: serviceAccount.token_uri,
            authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
            clientC509CertUrl: serviceAccount.client_x509_cert_url
        }
    }
};

export { settings };
