import { setAuth as setAuthInternal, getAuth } from './hooks/useLocalStorage';

export function setAuth(status) {
    if (status) {
        if (status === true) {
            setAuthInternal(true);
            return;
        } else {
            setAuthInternal(false);
        }
    }
    setAuthInternal(false);
}

export function checkAuth(route) {
    const auth = getAuth();
    if (auth!==null && auth===true) {
        window.location.replace(`/${route}`);
    } else {
        window.location.replace("/");
    }
}