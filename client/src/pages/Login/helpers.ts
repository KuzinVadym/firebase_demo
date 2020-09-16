
interface IAuthUser {
    uid: string;
    email: string;
    refreshToken: string
}

export function updateSessionStorage(payload: IAuthUser) {
    sessionStorage.setItem("uid", payload.uid);
    sessionStorage.setItem("email", payload.email);
    sessionStorage.setItem("refreshToken", payload.refreshToken);
}

export function clearSessionStorage() {
    sessionStorage.clear();
}