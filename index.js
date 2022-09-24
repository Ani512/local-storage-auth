import { setAuth as setAuthInternal, getAuth } from './useLocalStorage';

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
    const baseRoute = window.location.origin;
    if (auth === false) {
        window.location.replace(baseRoute);
        return;
    } 

    if (auth === true && route && route.length > 0) {
        window.location.replace(`${baseRoute}/${route}`);
        return;
    }

    console.log("Redirect Not Working")
}