interface IAuthUser {
    uid: string;
    email: string;
    refreshToken: string;
}

interface IAuthClass {

}

const defaultState: IAuthUser | null = null;

class Auth implements IAuthClass{
    authUser: IAuthUser;

    constructor(authUser: IAuthUser){
        this.authUser = authUser;
    }

    async getAuthUser() {
        return this.authUser
    }
    async saveAuthUser(uid, email, refreshToken) {
        this.authUser  = {uid, email, refreshToken};
        return this.authUser
    }

    async removeAuthUser() {
        this.authUser = null;
        return 'User successfully sing out';
    }
}

const auth = new Auth(defaultState);

export default auth;