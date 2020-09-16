
export type IFirebaseSettings = {
    apiKey: string;
    authDomain: string;
    databaseURL: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
}

export default interface ISettings {
    firebase: IFirebaseSettings;
}
