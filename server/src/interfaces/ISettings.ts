export type IFirebaseClient = {
    apiKey: string
    authDomain: string
    databaseURL: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
    appId: string
}

export type IFirebaseAdmin = {
    type: string
    projectId: string
    privateKeyId: string
    privateKey: string
    clientEmail: string
    clientId: string
    authUri: string
    tokenUri: string
    authProviderX509CertUrl: string
    clientC509CertUrl: string
}

export type IFirebaseSettings = {
    client: IFirebaseClient;
    admin: IFirebaseAdmin
}

export default interface ISettings {
    firebase: IFirebaseSettings;
}
